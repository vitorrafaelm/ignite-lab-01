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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchasesResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const authorization_guard_1 = require("../../auth/authorization.guard");
const current_user_1 = require("../../auth/current-user");
const customers_service_1 = require("../../../services/customers.service");
const products_service_1 = require("../../../services/products.service");
const purchase_service_1 = require("../../../services/purchase.service");
const create_purchase_input_1 = require("../inputs/create-purchase-input");
const purchase_1 = require("../models/purchase");
let PurchasesResolver = class PurchasesResolver {
    constructor(purchaseService, productService, customersService) {
        this.purchaseService = purchaseService;
        this.productService = productService;
        this.customersService = customersService;
    }
    purchases() {
        return this.purchaseService.listAllPurchases();
    }
    product(purchase) {
        return this.productService.getProductById(purchase.productId);
    }
    async createPurchase(data, user) {
        let customer = await this.customersService.getCustomerByAuthUserId(user.sub);
        if (!customer) {
            customer = await this.customersService.createCustomer({ authUserId: user.sub });
        }
        return this.purchaseService.createPurchase({
            productId: data.productId,
            customerId: customer.id
        });
    }
};
__decorate([
    (0, graphql_1.Query)(() => [purchase_1.Purchase]),
    (0, common_1.UseGuards)(authorization_guard_1.AuthorizationGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PurchasesResolver.prototype, "purchases", null);
__decorate([
    (0, graphql_1.ResolveField)(),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [purchase_1.Purchase]),
    __metadata("design:returntype", void 0)
], PurchasesResolver.prototype, "product", null);
__decorate([
    (0, graphql_1.Mutation)(() => purchase_1.Purchase),
    (0, common_1.UseGuards)(authorization_guard_1.AuthorizationGuard),
    __param(0, (0, graphql_1.Args)('data')),
    __param(1, (0, current_user_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_purchase_input_1.CreatePurchaseInput, Object]),
    __metadata("design:returntype", Promise)
], PurchasesResolver.prototype, "createPurchase", null);
PurchasesResolver = __decorate([
    (0, graphql_1.Resolver)(() => purchase_1.Purchase),
    __metadata("design:paramtypes", [purchase_service_1.PurchaseService,
        products_service_1.ProductsService,
        customers_service_1.CustomersService])
], PurchasesResolver);
exports.PurchasesResolver = PurchasesResolver;
//# sourceMappingURL=purchases.resolver.js.map