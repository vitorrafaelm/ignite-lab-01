import { AuthUser } from 'src/http/auth/current-user';
import { CustomersService } from 'src/services/customers.service';
import { ProductsService } from 'src/services/products.service';
import { PurchaseService } from 'src/services/purchase.service';
import { CreatePurchaseInput } from '../inputs/create-purchase-input';
import { Purchase } from '../models/purchase';
export declare class PurchasesResolver {
    private purchaseService;
    private productService;
    private customersService;
    constructor(purchaseService: PurchaseService, productService: ProductsService, customersService: CustomersService);
    purchases(): Promise<import(".prisma/client").Purchase[]>;
    product(purchase: Purchase): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product, never>;
    createPurchase(data: CreatePurchaseInput, user: AuthUser): Promise<import(".prisma/client").Purchase>;
}
