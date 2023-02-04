import { PrismaService } from 'src/database/prisma/prisma.service';
interface CreateCustomerParams {
    authUserId: string;
}
export declare class CustomersService {
    private prisma;
    constructor(prisma: PrismaService);
    getCustomerByAuthUserId(id: string): import(".prisma/client").Prisma.Prisma__CustomerClient<import(".prisma/client").Customer, never>;
    createCustomer({ authUserId }: CreateCustomerParams): Promise<import(".prisma/client").Customer>;
}
export {};
