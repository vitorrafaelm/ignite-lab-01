import { CoursesService } from "src/services/courses.service";
import { EnrollmentsService } from "src/services/enrollments.service";
import { StudentsService } from "src/services/students.service";
export interface Customer {
    authUserId: string;
}
export interface Product {
    id: string;
    title: string;
    slug: string;
}
export interface PurchaseCreatedPayload {
    customer: Customer;
    product: Product;
}
export declare class PurchaseController {
    private studentService;
    private coursesService;
    private enrollmentsService;
    constructor(studentService: StudentsService, coursesService: CoursesService, enrollmentsService: EnrollmentsService);
    purchaseCreated(payload: PurchaseCreatedPayload): Promise<void>;
}
