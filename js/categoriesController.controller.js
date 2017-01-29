(function () {
'use strict';

////////////////////////////////////////////////////////////////
// CONTROLLER
////////////////////////////////////////////////////////////////
angular.module('menuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['categoriesList'];
function CategoriesController(categoriesList)
{
  var ctrl = this ;

  ctrl.categories      = categoriesList.data ;
};

})();
