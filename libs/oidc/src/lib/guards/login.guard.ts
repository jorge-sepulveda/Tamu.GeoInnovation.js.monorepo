import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { OpenIdClient } from '../auth/open-id-client';

/**
 * NestJS guard used to start the login process using the openid-client library.
 *
 * @export
 * @class LoginGuard
 * @extends {AuthGuard(OpenIdClient.strategyName)}
 */
@Injectable()
export class LoginGuard extends AuthGuard(OpenIdClient.strategyName) {
  public async canActivate(context: ExecutionContext) {
    const result = (await super.canActivate(context)) as boolean;
    const request = context.switchToHttp().getRequest();
    await super.logIn(request);
    return result;
  }
}
