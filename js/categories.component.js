(function () {
'use strict';

////////////////////////////////////////////////////////////////
// COMPONENT
////////////////////////////////////////////////////////////////

angular.module('menuApp')
.component('categories',
{
    templateUrl : "templates/categories.template.html",
    bindings    :
    {
      cat : '<'   // one-way binding
    }

});

})();
