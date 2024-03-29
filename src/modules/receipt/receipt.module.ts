import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ReceiptService } from './domain/services/receipt.service';
import { ReceiptController } from './infrastructure/controllers/receipt.controller';
import expressFileUpload from 'express-fileupload';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receipt } from './domain/entities/receipt.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Receipt])],
    providers: [ReceiptService],
    controllers: [ReceiptController],
})
export class ReceiptModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void {
        consumer.apply(expressFileUpload()).forRoutes({
            path: '/receipts',
            method: RequestMethod.POST,
        });
    }
}
