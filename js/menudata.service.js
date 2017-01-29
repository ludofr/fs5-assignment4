(function () {
'use strict';

angular.module('data')
.service('MenuDataService'   , MenuDataService)
.constant('ApiPath', "https://davids-restaurant.herokuapp.com");

////////////////////////////////////////////////////////////////
// SERVICE
////////////////////////////////////////////////////////////////
MenuDataService.$inject = ['$http', 'ApiPath'] ;

function MenuDataService($http, ApiPath)
{
  var service = this ;

  service.getAllCategories = function ()
  {
    var response  = $http (
      {
        method : "GET" ,
        url : (ApiPath+ "/categories.json")
      });

      return response ;

  };

  service.getItemsForCategory = function (categoryShortName)
  {
    var response  = $http (
      {
        method : "GET" ,
        url : (ApiPath + "/menu_items.json?category=" + categoryShortName)
      });

      return response ;
  };
}

})();
