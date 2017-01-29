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

        // If the data returned by the promise has no category field, then it corresponds to the different menu categories
        if (promiseData.category === undefined)
        {
            ctrl.categories = promiseData;
        }
        else
        // Otherwise, the data corresponds to the content of a particular category
        {
            ctrl.categoryContent = promiseData.menu_items;
            ctrl.categoryName = promiseData.category.name;
        }
    }

})();
