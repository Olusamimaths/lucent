const path = require('path')
const glob = require('glob-all')
const mix = require('laravel-mix')
const PurgecssPlugin = require('purgecss-webpack-plugin')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the postCss
 | file for the application as well as bundling up all the JS files.
 |
 */

class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-Za-z0-9-_:\/]+/g) || []
    }
}

mix.react('client/index.js', 'public/app.js')
    .react('client/tools/resources/js/index.js', 'resources/tools/resources.js')
    .react('client/tools/dashboard/js/index.js', 'dashboard/tools/dashboard.js')
    .postCss('client/styles/main.css', 'public/app.css', [
        require('tailwindcss')
    ])
    .postCss(
        'client/tools/resources/styles/index.css',
        'resources/tools/resources.css',
        [require('tailwindcss')]
    )
    .postCss(
        'client/tools/dashboard/styles/index.css',
        'dashboard/tools/dashboard.css',
        [require('tailwindcss')]
    )

if (mix.inProduction()) {
    mix.webpackConfig({
        plugins: [
            new PurgecssPlugin({
                paths: glob.sync([path.join(__dirname, 'client/**/*.js')]),
                extractors: [
                    {
                        extractor: TailwindExtractor,
                        extensions: ['js']
                    }
                ]
            })
        ]
    })
}
