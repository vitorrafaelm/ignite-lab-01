import { Get, UseGuards } from '@nestjs/common';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { identity } from 'rxjs';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { AuthorizationGuard } from 'src/http/auth/authorization.guard';
import { AuthUser, CurrentUser } from 'src/http/auth/current-user';
import { CustomersService } from 'src/services/customers.service';
import { ProductsService } from 'src/services/products.service';
import { PurchaseService } from 'src/services/purchase.service';
import { CreateProductInput } from '../inputs/create-product-input';
import { CreatePurchaseInput } from '../inputs/create-purchase-input';
import { Product } from '../models/product';
import { Purchase } from '../models/purchase';

@Resolver(() => Purchase)
export class PurchasesResolver {

    constructor(
        private purchaseService: PurchaseService, 
        private productService: ProductsService,
        private customersService: CustomersService
    ) {}
    
    @Query(() => [Purchase])
    @UseGuards(AuthorizationGuard)
    purchases() {
        return this.purchaseService.listAllPurchases();
    }

    @ResolveField()
    product(
        @Parent() purchase: Purchase
    ) {
        return this.productService.getProductById(purchase.productId);
    }

    @Mutation(() => Purchase)
    @UseGuards(AuthorizationGuard)
    async createPurchase(
        @Args('data') data: CreatePurchaseInput, 
        @CurrentUser()
        user: AuthUser
    ) {
        let customer = await this.customersService.getCustomerByAuthUserId(user.sub); 
        
        if (!customer) {
            customer = await this.customersService.createCustomer({ authUserId: user.sub });
        }
            
        return this.purchaseService.createPurchase({
            productId: data.productId,
            customerId: customer.id
        })
    }
}
