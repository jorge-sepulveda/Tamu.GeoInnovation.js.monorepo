import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Lockdown } from '@tamu-gisc/covid/common/entities';

import { LockdownsService } from './lockdowns.service';
import { LockdownsController } from './lockdowns.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Lockdown])],
  controllers: [LockdownsController],
  providers: [LockdownsService]
})
export class LockdownsModule {}
