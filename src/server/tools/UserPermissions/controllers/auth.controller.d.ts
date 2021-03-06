import * as Express from 'express';
declare class AuthController {
    register(request: Express.Request, response: Express.Response): Promise<Express.Response>;
    login(request: Express.Request, response: Express.Response): Promise<Express.Response>;
    init(request: Express.Request, response: Express.Response): Promise<Express.Response>;
    /**
     * Fetch the authenticated user
     */
    me(request: Express.Request, response: Express.Response): Promise<Express.Response>;
    /**
     * Delete the current user's session
     */
    logout(request: Express.Request, response: Express.Response): Promise<Express.Response>;
}
export declare const Auth: AuthController;
export {};
