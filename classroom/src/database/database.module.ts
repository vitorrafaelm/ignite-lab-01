import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

// exports significa que o modulo vai ser exportado para qual quer lugar da aplicação

@Module({
    providers: [PrismaService], 
    exports: [PrismaService]
})
export class DatabaseModule {}
