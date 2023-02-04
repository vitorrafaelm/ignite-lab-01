import { UseGuards } from '@nestjs/common';
import { Resolver, Query, ResolveField, Parent, ResolveReference } from '@nestjs/graphql';
import { AuthorizationGuard } from 'src/http/auth/authorization.guard';
import { AuthUser, CurrentUser } from 'src/http/auth/current-user';
import { CustomersService } from 'src/services/customers.service';
import { PurchaseService } from 'src/services/purchase.service';
import { Customer } from '../models/customer';

@Resolver(() => Customer)
export class CustomersResolver {

    constructor(
        private customersService: CustomersService,
        private purchasesService: PurchaseService
    ) {}

    @UseGuards(AuthorizationGuard)
    @Query(() => Customer)
    me(
        @CurrentUser() user: AuthUser
    ) {
        return this.customersService.getCustomerByAuthUserId(user.sub);
    }

    @ResolveField()
    purchases(
        @Parent() customer: Customer
    ) {
        return this.purchasesService.listAllFromCustomer(customer.id);
    }

    @ResolveReference()
    resolveReference(reference: { authUserId: string }) {
        return this.customersService.getCustomerByAuthUserId(reference.authUserId); 
    }
}
