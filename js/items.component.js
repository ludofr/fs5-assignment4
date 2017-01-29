(function () {
'use strict';

////////////////////////////////////////////////////////////////
// COMPONENT
////////////////////////////////////////////////////////////////

angular.module('menuApp')
.component('items',
{
    templateUrl : "templates/items.template.html",
    bindings    :
    {
      items : '<'   // one-way binding
    }

});

})();
