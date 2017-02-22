'use strict';

import polyfills from './libraries/polyfills';

import 'slick-carousel';
import 'magnific-popup';
import 'jquery-validation';

import 'components/tabs/tabs';

import 'components/slider/slider';
import 'components/modal/modal';
import 'components/form/form';

$(() => {
    polyfills.init();
    // ================ Здесь инициализируем модули =====================
});
