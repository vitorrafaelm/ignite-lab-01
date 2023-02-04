import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlExecutionContext } from '@nestjs/graphql';
import { expressjwt, GetVerificationKey } from 'express-jwt';
import { expressJwtSecret } from 'jwks-rsa';
import { promisify } from 'node:util';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  private AUTH_AUDIENCE: string;
  private AUTH_DOMAIN: string;

  constructor(private configService: ConfigService) {
    this.AUTH_AUDIENCE = this.configService.get('AUTH0_AUDIENCE' ?? ''); 
    this.AUTH_DOMAIN = this.configService.get('AUTH0_DOMAIN' ?? ''); 
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { req, res } = GqlExecutionContext.create(context).getContext(); 

    const checkJWT = promisify(
      expressjwt({
        secret: expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: `${this.AUTH_DOMAIN}.well-known/jwks.json`
        }) as GetVerificationKey, 
        audience: this.AUTH_AUDIENCE, 
        issuer: this.AUTH_DOMAIN, 
        algorithms: ['RS256']
      })
    ); 

    try {
      await checkJWT(req, res);

      return true;
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}
