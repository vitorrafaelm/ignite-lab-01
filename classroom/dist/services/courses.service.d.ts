import { PrismaService } from "src/database/prisma/prisma.service";
interface CreateCourseParams {
    title: string;
    slug?: string;
}
export declare class CoursesService {
    private prisma;
    constructor(prisma: PrismaService);
    listAllCouses(): import(".prisma/client").PrismaPromise<import(".prisma/client").Course[]>;
    getCourseById(id: string): import(".prisma/client").Prisma.Prisma__CourseClient<import(".prisma/client").Course, never>;
    getCourseBySlug(slug: string): import(".prisma/client").Prisma.Prisma__CourseClient<import(".prisma/client").Course, never>;
    createCourse({ title, slug }: CreateCourseParams): Promise<import(".prisma/client").Course>;
}
export {};
