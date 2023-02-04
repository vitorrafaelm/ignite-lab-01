import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { KafkaService } from './kafka.service';

@Module({
    imports: [ConfigModule.forRoot()], // Ler o .env e injeta nas dependências
    providers: [KafkaService], 
    exports: [KafkaService], 
})
export class MessagingModule {}
