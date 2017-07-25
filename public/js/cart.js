'use strict';

angular.module('cart', ['ionic'])

.directive('checkList', function() {
    return {
        restrict: 'E',
        template: function(elem, attrs) {
            return '<div ng-repeat="item in anchoring[0].anchoring | filter:filtText" class="item item-thumbnail-left" href="#" >
      			  <img ng-src={{item.image}}>
      			  <small>{{item.itemno}}</small>
      			  <h2>{{item.description}}</h2>
      			  <p>Duty Free US: {{item.dfus | currency}}</br>Duty Free EC: {{item.dfec | currency}}</br>Duty Paid EC: {{(item.dpec | currency)}}</p>
              <div class="radio">
                  <label>
                      <input type="radio" name="optradio"></label>
              </div>
      			</div>'
        }
    };
})
