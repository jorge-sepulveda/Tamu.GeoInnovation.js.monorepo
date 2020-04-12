import { Controller, Get, Param } from '@nestjs/common';
import { CategoryValue } from '@tamu-gisc/covid/common/entities';

import { BaseController } from '../base/base.controller';
import { WebsitesService } from './websites.service';

@Controller('websites')
export class WebsitesController extends BaseController<CategoryValue> {
  constructor(private service: WebsitesService) {
    super(service);
  }

  @Get('county/:fips')
  public async getWebsitesForCounty(@Param() params) {
    return this.service.getWebsitesForCounty(params.fips);
  }
}
