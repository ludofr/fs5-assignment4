(function () {
'use strict';

////////////////////////////////////////////////////////////////
// CONTROLLER
////////////////////////////////////////////////////////////////
angular.module('menuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['MenuDataService'];

function CategoriesController(MenuDataService)
{
  var ctrl = this ;

  ctrl.categories      = [] ;
  ctrl.itemsInCategory = [ {name : "toto"  } , {name : "titi"  } ] ;

  var promise = MenuDataService.getAllCategories();

  promise.then(function (response)
  {
    ctrl.categories = response.data ;
    //ctrl.itemsInCategory = response.data ;
  })
  .catch(function (error)
  {
    console.log("Sthg went wrong !");
  }

  );
}

})();
