(function () {
    'use strict';

    angular.module('ThreeJSModule', [])

    .constant('POSITIONABLE', {
        position: '=?',
        rotation: '=?'
    })

    .constant('SCALABLE', {
        scale: '=?'
    });
})();