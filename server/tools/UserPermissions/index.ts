import { Tool } from '../Tool'
import * as Express from 'express'
import * as Root from 'app-root-path'

export class UserPermissions extends Tool {
    /**
     * Boot the resources tool
     *
     * @return {void}
     *
     */
    public boot(app: Express.Application) {
        /**
         *
         * Register path as a source for static files
         *
         */
        app.use('/dashboard', Express.static(Root.resolve('dashboard')))

        /**
         *
         * Define the js for this tool
         *
         */
        this.js('resources', 'dashboard/tools/dashboard.js')

        /**
         *
         * Define the css for this tool
         *
         */
        this.css('resources', 'dashboard/tools/dashboard.css')
    }
}