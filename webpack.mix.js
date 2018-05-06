let mix = require('laravel-mix');

mix.setPublicPath('.')
   .js('assets/js/app.js', 'public/js')
   .sass('assets/sass/app.scss', 'public/css');
