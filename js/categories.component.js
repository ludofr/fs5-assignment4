(function () {
'use strict';

////////////////////////////////////////////////////////////////
// CATEGORIES COMPONENT
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
