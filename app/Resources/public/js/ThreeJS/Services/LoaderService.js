(function () {
    'use strict';

    angular.module('ThreeJSModule').factory('Loader', function () {
        var ajaxRequests = {
            inProgress: 0
        };

        return {
            getResquests: function () {
                return ajaxRequests;
            },

            startRequest: function () {
                ajaxRequests.inProgress++;

                return this;
            },

            endRequest: function () {
                ajaxRequests.inProgress--;

                return this;
            }
        };
    });
})();