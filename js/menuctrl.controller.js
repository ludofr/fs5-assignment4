(function() {
    'use strict';

    ////////////////////////////////////////////////////////////////
    // CONTROLLER
    ////////////////////////////////////////////////////////////////
    angular.module('menuApp')
        .controller('MenuController', MenuController);


    MenuController.$inject = ['promise'];

    function MenuController(promise) {
        var ctrl = this;

        var promiseData = promise.data;

        if (promiseData.category === undefined) {
            ctrl.categories = promiseData;
        } else {
            ctrl.categoryContent = promiseData.menu_items;
            ctrl.categoryName = promiseData.category.name;
        }
    }

})();
