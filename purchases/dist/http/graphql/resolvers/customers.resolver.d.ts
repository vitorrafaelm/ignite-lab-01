import { AuthUser } from 'src/http/auth/current-user';
import { CustomersService } from 'src/services/customers.service';
import { PurchaseService } from 'src/services/purchase.service';
import { Customer } from '../models/customer';
export declare class CustomersResolver {
    private customersService;
    private purchasesService;
    constructor(customersService: CustomersService, purchasesService: PurchaseService);
    me(user: AuthUser): import(".prisma/client").Prisma.Prisma__CustomerClient<import(".prisma/client").Customer, never>;
    purchases(customer: Customer): Promise<import(".prisma/client").Purchase[]>;
    resolveReference(reference: {
        authUserId: string;
    }): import(".prisma/client").Prisma.Prisma__CustomerClient<import(".prisma/client").Customer, never>;
}
