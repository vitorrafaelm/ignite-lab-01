"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma/prisma.service");
const kafka_service_1 = require("../messaging/kafka.service");
let PurchaseService = class PurchaseService {
    constructor(prisma, kafka) {
        this.prisma = prisma;
        this.kafka = kafka;
    }
    async listAllPurchases() {
        return this.prisma.purchase.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    async listAllFromCustomer(customerId) {
        return this.prisma.purchase.findMany({
            where: {
                customerId,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    async createPurchase({ customerId, productId }) {
        const product = await this.prisma.product.findUnique({
            where: {
                id: productId,
            },
        });
        if (!product) {
            throw new Error('Product not found');
        }
        const purchase = await this.prisma.purchase.create({
            data: {
                customerId,
                productId,
            },
        });
        const customer = await this.prisma.customer.findUnique({ where: { id: customerId } });
        this.kafka.emit('purchases.new-purchase', {
            customer: {
                authUserId: customer.authUserId,
            },
            product: {
                id: product.id,
                title: product.title,
                slug: product.slug
            }
        });
        return purchase;
    }
};
PurchaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        kafka_service_1.KafkaService])
], PurchaseService);
exports.PurchaseService = PurchaseService;
//# sourceMappingURL=purchase.service.js.map