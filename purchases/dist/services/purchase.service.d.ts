import { PrismaService } from 'src/database/prisma/prisma.service';
import { KafkaService } from 'src/messaging/kafka.service';
interface CreatePurchaseParams {
    customerId: string;
    productId: string;
}
export declare class PurchaseService {
    private prisma;
    private kafka;
    constructor(prisma: PrismaService, kafka: KafkaService);
    listAllPurchases(): Promise<import(".prisma/client").Purchase[]>;
    listAllFromCustomer(customerId: string): Promise<import(".prisma/client").Purchase[]>;
    createPurchase({ customerId, productId }: CreatePurchaseParams): Promise<import(".prisma/client").Purchase>;
}
export {};
