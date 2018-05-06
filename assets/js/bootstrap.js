window.Popper = require('popper.js').default;

/**
 * Load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs.
 */
try {
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}


/**
 * Load the Vue.js framework.
 */
window.Vue = require('vue');

/**
 * Load font-awesome.
 */
import fontawesome from '@fortawesome/fontawesome';

import solid from '@fortawesome/fontawesome-free-solid';
import brands from '@fortawesome/fontawesome-free-brands';
import regular from '@fortawesome/fontawesome-free-regular';

fontawesome.library.add(solid, brands, regular);
