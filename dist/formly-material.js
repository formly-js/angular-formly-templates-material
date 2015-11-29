(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else if(typeof exports === 'object')
		exports["ngFormlyMaterial"] = factory(require("angular"));
	else
		root["ngFormlyMaterial"] = factory(root["angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _runs = __webpack_require__(2);

	var _runs2 = _interopRequireDefault(_runs);

	var _wrappers = __webpack_require__(4);

	var _wrappers2 = _interopRequireDefault(_wrappers);

	var _types = __webpack_require__(8);

	var _types2 = _interopRequireDefault(_types);

	var ngModuleName = 'formlyMaterial';

	_angular2['default'].module(ngModuleName, ['ngMessages', 'ngMaterial', 'formly']).config(['formlyConfigProvider', function (formlyConfigProvider) {
	    var configs = [_runs2['default'], _wrappers2['default'], _types2['default']];

	    configs.forEach(function (config) {
	        var i = 0;
	        for (; i < config.length; i++) {
	            config[i](formlyConfigProvider);
	        }
	    });
	}]);

	exports['default'] = ngModuleName;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mdThemeManipulator = __webpack_require__(3);

	var _mdThemeManipulator2 = _interopRequireDefault(_mdThemeManipulator);

	exports['default'] = [_mdThemeManipulator2['default']];
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function (formlyConfigProvider) {

	    function addIfNotPresent(nodes, attr, val) {
	        angular.forEach(nodes, function (node) {
	            if (!node.getAttribute(attr)) {
	                node.setAttribute(attr, val);
	            }
	        });
	    }

	    function getNgModelNodes(node) {
	        var query = "[ng-model], [data-ng-model]";

	        return node.querySelectorAll(query);
	    }

	    formlyConfigProvider.templateManipulators.preWrapper.push(function (template, options) {
	        if (angular.isDefined(options.templateOptions.theme)) {
	            var node = document.createElement('div');
	            var skip = options.extras && options.extras.skipNgModelAttrsManipulator;

	            if (skip === true) {
	                return template;
	            }
	            node.innerHTML = template;
	            var modelNodes = getNgModelNodes(node);

	            if (!modelNodes || !modelNodes.length) {
	                return template;
	            }

	            addIfNotPresent(modelNodes, 'md-theme', options.templateOptions.theme);

	            return node.innerHTML;
	        }
	        return template;
	    });
	};

	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _inputContainerInputContainer = __webpack_require__(5);

	var _inputContainerInputContainer2 = _interopRequireDefault(_inputContainerInputContainer);

	var _labelLabel = __webpack_require__(6);

	var _labelLabel2 = _interopRequireDefault(_labelLabel);

	var _messagesMessages = __webpack_require__(7);

	var _messagesMessages2 = _interopRequireDefault(_messagesMessages);

	exports['default'] = [_inputContainerInputContainer2['default'], _labelLabel2['default'], _messagesMessages2['default']];
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function (formlyConfigProvider) {
	    formlyConfigProvider.setWrapper({
	        name: 'inputContainer',
	        template: '\n        <md-input-container>\n            <formly-transclude></formly-transclude>\n        </md-input-container>\n        '
	    });
	};

	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function (formlyConfigProvider) {
	    formlyConfigProvider.setWrapper({
	        name: 'label',
	        template: '\n        <label for="{{id}}">{{to.label}}{{to.required ? \'*\' : \'\'}}</label>\n        <formly-transclude></formly-transclude>',
	        apiCheck: function apiCheck(check) {
	            return {
	                templateOptions: {
	                    label: check.string
	                }
	            };
	        }
	    });
	};

	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function (formlyConfigProvider) {
	    formlyConfigProvider.setWrapper({
	        name: 'messages',
	        template: '\n        <formly-transclude></formly-transclude>\n            <div ng-messages="fc.$error">\n                <div ng-repeat="(name, message) in ::options.validation.messages" ng-message-exp="name">\n                {{message(fc.$viewValue, fc.$modelValue, this)}}\n                </div>\n            </div>\n        '
	    });
	};

	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _checkboxCheckbox = __webpack_require__(9);

	var _checkboxCheckbox2 = _interopRequireDefault(_checkboxCheckbox);

	var _chipsChips = __webpack_require__(10);

	var _chipsChips2 = _interopRequireDefault(_chipsChips);

	var _datepickerDatepicker = __webpack_require__(11);

	var _datepickerDatepicker2 = _interopRequireDefault(_datepickerDatepicker);

	var _inputInput = __webpack_require__(12);

	var _inputInput2 = _interopRequireDefault(_inputInput);

	var _radioRadio = __webpack_require__(13);

	var _radioRadio2 = _interopRequireDefault(_radioRadio);

	var _selectSelect = __webpack_require__(14);

	var _selectSelect2 = _interopRequireDefault(_selectSelect);

	var _sliderSlider = __webpack_require__(15);

	var _sliderSlider2 = _interopRequireDefault(_sliderSlider);

	var _switchSwitch = __webpack_require__(16);

	var _switchSwitch2 = _interopRequireDefault(_switchSwitch);

	var _textareaTextarea = __webpack_require__(17);

	var _textareaTextarea2 = _interopRequireDefault(_textareaTextarea);

	exports['default'] = [_checkboxCheckbox2['default'], _chipsChips2['default'], _datepickerDatepicker2['default'], _inputInput2['default'], _radioRadio2['default'], _selectSelect2['default'], _sliderSlider2['default'], _switchSwitch2['default'], _textareaTextarea2['default']];
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function (formlyConfigProvider) {
	    formlyConfigProvider.setType({
	        name: 'checkbox',
	        template: '\n            <div>\n                <md-checkbox ng-model="model[options.key]">\n                    {{to.label}}\n                </md-checkbox>\n            </div>'
	    });
	};

	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function (formlyConfigProvider) {
	    formlyConfigProvider.setType({
	        name: 'chips',
	        template: '<md-chips ng-model="model[options.key]"></md-chips>',
	        defaultOptions: {
	            defaultValue: [],
	            ngModelAttrs: {
	                placeholder: { attribute: 'placeholder' },
	                secondaryPlaceholder: { attribute: 'secondary-placeholder' },
	                deleteButtonLabel: { attribute: 'delete-button-label' },
	                deleteHint: { attribute: 'delete-hint' }
	            }
	        },
	        apiCheck: function apiCheck(check) {
	            return {
	                templateOptions: {
	                    placeholder: check.string.optional,
	                    secondaryPlaceholder: check.string.optional,
	                    deleteButtonLabel: check.string.optional,
	                    deleteHint: check.string.optional
	                }
	            };
	        }
	    });
	};

	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function (formlyConfigProvider) {
	    formlyConfigProvider.setType({
	        name: 'datepicker',
	        template: '\n        <div>\n            <md-datepicker ng-model="model[options.key]"></md-datepicker>\n        </div>',
	        wrapper: ['messages'],
	        defaultOptions: {
	            ngModelAttrs: {
	                placeholder: { attribute: 'md-placeholder' }
	            }
	        },
	        apiCheck: function apiCheck(check) {
	            return {
	                templateOptions: {
	                    placeholder: check.string.optional,
	                    minDate: check.instanceOf(Date).optional,
	                    maxDate: check.instanceOf(Date).optional,
	                    filterDate: check.func.optional
	                }
	            };
	        }
	    });

	    formlyConfigProvider.templateManipulators.preWrapper.push(function (template, options) {
	        if (angular.isDefined(options.templateOptions.minDate) || angular.isDefined(options.templateOptions.maxDate) || angular.isDefined(options.templateOptions.filterDate)) {

	            var dateConfig = {
	                min: options.templateOptions.minDate || undefined,
	                max: options.templateOptions.maxDate || undefined,
	                filter: options.templateOptions.filterDate || undefined
	            };
	            var node = document.createElement('div');

	            node.innerHTML = template;
	            var datepickerNode = node.querySelector('md-datepicker');

	            if (datepickerNode) {
	                if (dateConfig.min) {
	                    datepickerNode.setAttribute('md-min-date', 'to.minDate');
	                }
	                if (dateConfig.max) {
	                    datepickerNode.setAttribute('md-max-date', 'to.maxDate');
	                }
	                if (dateConfig.filter) {
	                    datepickerNode.setAttribute('md-date-filter', 'to.filterDate');
	                }
	            }
	            return node.innerHTML;
	        }

	        return template;
	    });
	};

	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function (formlyConfigProvider) {
	    formlyConfigProvider.setType({
	        name: 'input',
	        template: '<input ng-model="model[options.key]">',
	        wrapper: ['label', 'messages', 'inputContainer'],
	        defaultOptions: {
	            ngModelAttrs: {
	                mdMaxlength: {
	                    bound: 'md-maxlength'
	                }
	            }
	        }
	    });
	};

	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function (formlyConfigProvider) {
	    formlyConfigProvider.setType({
	        name: 'radio',
	        template: '\n        <md-radio-group ng-model="model[options.key]">\n            <md-radio-button\n                ng-repeat="option in to.options"\n                ng-value="option[to.valueProp || \'value\']">\n                {{option[to.labelProp || \'name\']}}\n            </md-radio-button>\n        </md-radio-group>\n        ',
	        apiCheck: function apiCheck(check) {
	            return {
	                templateOptions: {
	                    options: check.arrayOf(check.object),
	                    labelProp: check.string.optional,
	                    valueProp: check.string.optional
	                }
	            };
	        }
	    });
	};

	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function (formlyConfigProvider) {
	    formlyConfigProvider.setType({
	        name: 'select',
	        template: '\n        <md-select ng-model="model[options.key]">\n    <md-option ng-repeat="option in to.options" ng-value="option[to.valueProp || \'value\']">\n        {{ option[to.labelProp || \'name\'] }}\n    </md-option>\n</md-select>\n        ',
	        wrapper: ['label', 'messages', 'inputContainer'],
	        defaultOptions: {
	            ngModelAttrs: {
	                multiple: { bound: 'multiple' }
	            }
	        },
	        apiCheck: function apiCheck(check) {
	            return {
	                templateOptions: {
	                    options: check.arrayOf(check.object),
	                    multiple: check.bool.optional,
	                    labelProp: check.string.optional,
	                    valueProp: check.string.optional
	                }
	            };
	        }
	    });
	};

	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function (formlyConfigProvider) {
	    formlyConfigProvider.setType({
	        name: 'slider',
	        template: '<md-slider ng-model="model[options.key]"></md-slider>',
	        defaultOptions: {
	            ngModelAttrs: {
	                min: {
	                    bound: 'min',
	                    attribute: 'min'
	                },
	                max: {
	                    bound: 'max',
	                    attribute: 'max'
	                },
	                step: {
	                    bound: 'step',
	                    attribute: 'step'
	                },
	                discrete: {
	                    bound: 'md-discrete'
	                }
	            }
	        },
	        apiCheck: function apiCheck(check) {
	            return {
	                templateOptions: {
	                    min: check.number.optional,
	                    max: check.number.optional,
	                    step: check.number.optional,
	                    discrete: check.bool.optional
	                }
	            };
	        }
	    });
	};

	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function (formlyConfigProvider) {
	    formlyConfigProvider.setType({
	        name: 'switch',
	        template: '<md-switch ng-model="model[options.key]">{{to.label}}</md-switch>'
	    });
	};

	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function (formlyConfigProvider) {
	    formlyConfigProvider.setType({
	        name: 'textarea',
	        template: '<textarea ng-model="model[options.key]"></textarea>',
	        wrapper: ['label', 'messages', 'inputContainer'],
	        defaultOptions: {
	            ngModelAttrs: {
	                rows: { attribute: 'rows' },
	                cols: { attribute: 'cols' }
	            }
	        },
	        apiCheck: function apiCheck(check) {
	            return {
	                templateOptions: {
	                    rows: check.number.optional,
	                    cols: check.number.optional
	                }
	            };
	        }
	    });
	};

	module.exports = exports['default'];

/***/ }
/******/ ])
});
;