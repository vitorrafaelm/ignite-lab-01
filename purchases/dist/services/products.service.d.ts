import { PrismaService } from 'src/database/prisma/prisma.service';
interface CreateProductParams {
    title: string;
}
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    listAllProducts(): Promise<import(".prisma/client").Product[]>;
    getProductById(id: string): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product, never>;
    createProduct({ title }: CreateProductParams): Promise<import(".prisma/client").Product>;
}
export {};
