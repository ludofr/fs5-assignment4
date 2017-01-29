(function () {
'use strict';

////////////////////////////////////////////////////////////////
// ITEMS COMPONENT
////////////////////////////////////////////////////////////////

angular.module('menuApp')
.component('items',
{
    templateUrl : "templates/items.template.html",
    bindings    :
    {
      menuItems : '<'   // one-way binding
    }

});

})();
