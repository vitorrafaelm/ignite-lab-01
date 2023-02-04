import { PrismaService } from "src/database/prisma/prisma.service";
interface CreateStudentParams {
    authUserId: string;
}
export declare class StudentsService {
    private prisma;
    constructor(prisma: PrismaService);
    listAllStudents(): Promise<import(".prisma/client").Student[]>;
    getStudentByAuthUserId(authUserId: string): Promise<import(".prisma/client").Student>;
    getStudentById(id: string): Promise<import(".prisma/client").Student>;
    create({ authUserId }: CreateStudentParams): Promise<import(".prisma/client").Student>;
}
export {};
