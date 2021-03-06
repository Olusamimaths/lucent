"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Path = require("path");
var Router_1 = require("./Router");
var Tool_1 = require("../Tool");
var FileUpload = require("express-fileupload");
var Resources = /** @class */ (function (_super) {
    __extends(Resources, _super);
    function Resources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Boot the resources tool
     *
     * @return {void}
     *
     */
    Resources.prototype.boot = function (app) {
        _super.prototype.boot.call(this, app);
        /**
         *
         * Register storage path as a source for static files.
         * TODO: this should be the config for storage
         * folder defined by user.
         *
         */
        app.get('/storage/*', function (request, response) {
            return response.sendFile(
            // @ts-ignore
            Path.dirname(require.main.filename) + "/" + request.path);
        });
        /**
         *
         * Define the file upload middleware
         *
         */
        app.use(FileUpload());
        /**
         *
         * Register the routes for this tool
         *
         */
        app.use(Router_1.default);
        /**
         *
         * Define the js for this tool
         *
         */
        this.js('/lucent/resources/resources.js', Path.join(__dirname, '..', '..', '..', '/client/tools/resources/resources.js'));
        /**
         *
         * Define the css for this tool
         *
         */
        this.css('/lucent/resources/resources.css', Path.join(__dirname, '..', '..', '..', '/client/tools/resources/resources.css'));
    };
    return Resources;
}(Tool_1.Tool));
exports.Resources = Resources;
