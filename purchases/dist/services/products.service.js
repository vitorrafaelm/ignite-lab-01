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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const slugify_1 = require("slugify");
const prisma_service_1 = require("../database/prisma/prisma.service");
let ProductsService = class ProductsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async listAllProducts() {
        return this.prisma.product.findMany();
    }
    getProductById(id) {
        return this.prisma.product.findUnique({
            where: {
                id,
            },
        });
    }
    async createProduct({ title }) {
        const slug = (0, slugify_1.default)(title, {
            lower: true,
        });
        const productWithSameSlug = await this.prisma.product.findUnique({
            where: {
                slug,
            },
        });
        if (productWithSameSlug) {
            throw new Error('Another product with same slug already exists');
        }
        return await this.prisma.product.create({
            data: {
                title,
                slug,
            },
        });
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map