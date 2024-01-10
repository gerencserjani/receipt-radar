import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './domain/entities/group.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Group])],
})
export class GroupModule {}
