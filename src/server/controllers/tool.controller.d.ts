import * as Express from 'express';
declare class ToolController {
    /**
     *
     * Get a list of all resources
     *
     * @param {Express.Request} req
     *
     * @param {Express.Response} res
     *
     * @return {Express.Response}
     *
     */
    index(req: Express.Request, res: Express.Response): Promise<Express.Response>;
}
export declare const Tool: ToolController;
export {};
