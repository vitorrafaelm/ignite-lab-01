import { Product } from "./product";
export declare class Purchase {
    id: string;
    status: string;
    createdAt: Date;
    product: Product;
    productId: string;
}
