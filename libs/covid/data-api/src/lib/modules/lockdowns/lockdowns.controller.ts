import { Controller, Post, Param, Delete, Get, Body } from '@nestjs/common';

import { Lockdown } from '@tamu-gisc/covid/common/entities';

import { LockdownsService } from './lockdowns.service';
import { BaseController } from '../base/base.controller';

@Controller('lockdowns')
export class LockdownsController extends BaseController<Lockdown> {
  constructor(private service: LockdownsService) {
    super(service);
  }

  @Get('active/email/:email')
  public async getActiveLockdownsForEmail(@Param() param) {
    return this.service.getActiveLockDownForEmail(param.email);
  }

  @Get('')
  public async getValidated() {
    return await this.service.repo.find({ where: { validated: true } });
  }

  /**
   Insert an un-validated testing site.
   */
  @Post('')
  public async addLockdown(@Body() body) {
    // TODO: fix this call
    return this.service.createOrUpdateLockdown(body);
  }

  @Post('/validate/:lockdownId')
  public async validateLockdown(@Param() params) {
    // const lockdown = await this.service.repo.findOne({ guid: params.lockdownId });
    // lockdown.validated = true;
    // return lockdown.save();
  }

  @Delete('/validate/:lockdownId')
  public async deleteValidatedLockdown(@Param() params) {
    // const lockdown = await this.service.repo.findOne({ guid: params.lockdownId });
    // lockdown.validated = false;
    // return lockdown.save();
  }
}
