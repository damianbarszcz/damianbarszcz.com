
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
   const mix = require('laravel-mix');

   mix.disableNotifications();

   mix.browserSync('http://localhost:8000');

   mix.js('resources/js/app.js', 'public/js').react();

   mix.sass('resources/sass/app.scss',  'public/css')

   .options({
         processCssUrls: false
   }).sourceMaps();

    mix.copyDirectory('resources/images/about-me', 'public/images/about-me').version('public/images/about-me');
    mix.copyDirectory('resources/images/contact', 'public/images/contact').version('public/images/contact');
    mix.copyDirectory('resources/images/favicons', 'public/images/favicons').version('public/images/favicons');
    mix.copyDirectory('resources/images/global/', 'public/images/global').version('public/images/global');

    
    mix.copyDirectory('resources/images/member/statistics', 'public/images/member/statistics').version('public/images/member/statistics');
    mix.copyDirectory('resources/images/member/about_app', 'public/images/member/about_app').version('public/images/member/about_app');

    if (mix.inProduction()) { mix.version(); }