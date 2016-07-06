import 'babel-polyfill';
import angular from 'angular';
import nv from 'nvd3';
import nvd3 from 'angular-nvd3';
import gridster from 'angular-gridster';
import ngMaterial from 'angular-material';
import ngAria from 'angular-aria';
import ngAnimate from 'angular-animate';

import services from './config/services';
import controllers from './config/controllers';

import style from './app.scss';

let myApp = angular.module('myApp', [
    'ngMaterial',
    'gridster',
    'nvd3',
]);

// Declarations
services.forEach(service => myApp.service(service.name, service.service));
controllers.forEach(controller => myApp.controller(controller.name, controller.controller));