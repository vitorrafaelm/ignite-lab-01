"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpModule = void 0;
const apollo_1 = require("@nestjs/apollo");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const graphql_1 = require("@nestjs/graphql");
const path = require("path");
const database_module_1 = require("../database/database.module");
const messaging_module_1 = require("../messaging/messaging.module");
const customers_service_1 = require("../services/customers.service");
const products_service_1 = require("../services/products.service");
const purchase_service_1 = require("../services/purchase.service");
const customers_resolver_1 = require("./graphql/resolvers/customers.resolver");
const products_resolver_1 = require("./graphql/resolvers/products.resolver");
const purchases_resolver_1 = require("./graphql/resolvers/purchases.resolver");
let HttpModule = class HttpModule {
};
HttpModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            database_module_1.DatabaseModule,
            messaging_module_1.MessagingModule,
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloFederationDriver,
                autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql')
            })
        ],
        providers: [
            products_resolver_1.ProductsResolver,
            purchases_resolver_1.PurchasesResolver,
            customers_resolver_1.CustomersResolver,
            products_service_1.ProductsService,
            purchase_service_1.PurchaseService,
            customers_service_1.CustomersService
        ]
    })
], HttpModule);
exports.HttpModule = HttpModule;
//# sourceMappingURL=http.module.js.map