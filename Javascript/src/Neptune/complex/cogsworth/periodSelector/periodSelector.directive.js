'use strict';

var moment = require('moment');
var module = require('./periodSelector.module');

module
	.directive('periodSelector', function() {
		return {
			restrict: 'AEC',
			template: [
				'<div class="period-chooser-enable"><label><input type="checkbox" name="period-chooser-enable" ng-model="enabled" ng-change="enable()" /> Enable Period</label></div>',
				'<div class="period-chooser-box" ng-show="enabled">',
					'<span class="period-action period-prev" ng-click="changePeriod(-1)"></span>',
					'<span class="period-display">{{displayDate}}</span>',
					'<span class="period-action period-next" ng-click="changePeriod(1)"></span>',
				'</div>'
			].join('')
		};
	});