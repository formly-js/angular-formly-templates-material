/*! angular-formly-material v0.14.0 | MIT | built with ♥ by Kamil Kisiela <mys.sterowiec@gmail.com> */
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

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _runs = __webpack_require__(2);

	var _runs2 = _interopRequireDefault(_runs);

	var _wrappers = __webpack_require__(6);

	var _wrappers2 = _interopRequireDefault(_wrappers);

	var _types = __webpack_require__(15);

	var _types2 = _interopRequireDefault(_types);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ngModuleName = 'formlyMaterial';

	_angular2.default.module(ngModuleName, ['ngMessages', 'ngMaterial', 'formly']).config(['formlyConfigProvider', function (formlyConfigProvider) {
	  var configs = [_runs2.default, _wrappers2.default, _types2.default];

	  configs.forEach(function (config) {
	    var i = 0;
	    for (; i < config.length; i++) {
	      config[i](formlyConfigProvider);
	    }
	  });
	}]);

	exports.default = ngModuleName;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _className = __webpack_require__(3);

	var _className2 = _interopRequireDefault(_className);

	var _theme = __webpack_require__(5);

	var _theme2 = _interopRequireDefault(_theme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = [_className2.default, _theme2.default];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(4);

	exports.default = function (formlyConfigProvider) {
	  // add only step attribute because min and max are both built-in
	  formlyConfigProvider.extras.fieldTransform.push(function (fields) {
	    return (0, _index.ngModelAttrsTransformer)(fields, function (field) {
	      return field.templateOptions && typeof field.templateOptions.className !== 'undefined';
	    }, 'className', {
	      bound: 'ng-class'
	    });
	  });
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ngModelAttrsManipulator = ngModelAttrsManipulator;
	exports.ngModelAttrsTransformer = ngModelAttrsTransformer;

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Sets attribute with optional value.
	 * Does not owerwrite.
	 * @param {Array} nodes nodes
	 * @param {String} attr  attribute name
	 * @param {String} val   atrtibute value
	 */
	function addIfNotPresent(nodes, attr, val) {
	  _angular2.default.forEach(nodes, function (node) {
	    if (!node.getAttribute(attr)) {
	      node.setAttribute(attr, val);
	    }
	  });
	}

	/**
	 * Gets all ngModels from node
	 */
	function getNgModelNodes(node) {
	  var query = '[ng-model], [data-ng-model]';

	  return node.querySelectorAll(query);
	}

	/**
	 * Adds attribute with optional value to all elements using ngModel directive.
	 * Handles extras.skipNgModelAttrsManipulator
	 * And does not overwrite attriutes
	 *
	 * @param  {String} template  Template provided by formly template manipulator
	 * @param  {Object} options   Options provided by formly template manipulator
	 * @param  {String} attrName  Attribute's name
	 * @param  {String|undefined} Attribute's value (optional)
	 * @return {String} result
	 */
	function ngModelAttrsManipulator(template, options, attrName, attrValue) {
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

	  addIfNotPresent(modelNodes, attrName, attrValue);

	  return node.innerHTML;
	}

	/**
	 * Adds ngModelAttr to the field when specified condition is true.
	 * @param  {Array} fields    fields provided by formly's fieldTranform
	 * @param  {Funcion} condition with field as only parameter
	 * @param  {String} name      ngModelAttr's name
	 * @param  {Object} settings  ngModelAttr's settings
	 * @return {Array}           returns fields
	 */
	function ngModelAttrsTransformer(fields, condition, name, settings) {
	  (fields || []).forEach(function (field) {
	    if (condition(field) === true) {
	      if (!field.ngModelAttrs) {
	        field.ngModelAttrs = {};
	      }

	      if (typeof field.templateOptions[name] !== 'undefined') {
	        field.ngModelAttrs[name] = settings;
	      }
	    }
	  });

	  return fields;
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(4);

	exports.default = function (formlyConfigProvider) {
	  formlyConfigProvider.templateManipulators.preWrapper.push(function (template, options) {
	    // adds md-theme only when:
	    // templateOptions.theme is defined
	    if (typeof options.templateOptions.theme !== 'undefined') {
	      return (0, _index.ngModelAttrsManipulator)(template, options, 'md-theme', options.templateOptions.theme);
	    }
	    return template;
	  });
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inputContainer = __webpack_require__(7);

	var _inputContainer2 = _interopRequireDefault(_inputContainer);

	var _label = __webpack_require__(9);

	var _label2 = _interopRequireDefault(_label);

	var _messages = __webpack_require__(11);

	var _messages2 = _interopRequireDefault(_messages);

	var _divider = __webpack_require__(13);

	var _divider2 = _interopRequireDefault(_divider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = [_inputContainer2.default, _label2.default, _messages2.default, _divider2.default];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inputContainer = __webpack_require__(8);

	var _inputContainer2 = _interopRequireDefault(_inputContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (formlyConfigProvider) {
	  formlyConfigProvider.setWrapper({
	    template: _inputContainer2.default,
	    name: 'inputContainer'
	  });
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<md-input-container>\r\n    <formly-transclude></formly-transclude>\r\n</md-input-container>";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _label = __webpack_require__(10);

	var _label2 = _interopRequireDefault(_label);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (formlyConfigProvider) {
	  formlyConfigProvider.setWrapper({
	    template: _label2.default,
	    name: 'label',
	    apiCheck: function apiCheck(check) {
	      return {
	        templateOptions: {
	          label: check.string
	        }
	      };
	    }
	  });
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<label for=\"{{id}}\" ng-style=\"['input', 'textarea', 'select'].indexOf(options.type) === -1 && {'font-size':'12px', 'color': 'rgb(117, 117, 117)'}\">\r\n  {{to.label}}\r\n</label>\r\n<formly-transclude></formly-transclude>\r\n";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _messages = __webpack_require__(12);

	var _messages2 = _interopRequireDefault(_messages);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (formlyConfigProvider) {
	  formlyConfigProvider.setWrapper({
	    template: _messages2.default,
	    name: 'messages'
	  });
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<formly-transclude></formly-transclude>\r\n<div ng-messages=\"fc.$error\" ng-show=\"showError\">\r\n    <div ng-repeat=\"(name, message) in ::options.validation.messages\"\r\n         ng-message-exp=\"name\">\r\n        {{message(fc.$viewValue, fc.$modelValue, this)}}\r\n    </div>\r\n</div>\r\n";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _divider = __webpack_require__(14);

	var _divider2 = _interopRequireDefault(_divider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (formlyConfigProvider) {
	  formlyConfigProvider.setWrapper({
	    template: _divider2.default,
	    name: 'divider',
	    apiCheck: function apiCheck(check) {
	      return {
	        templateOptions: {
	          divider: check.oneOf(['before', 'after']).optional
	        }
	      };
	    }
	  });
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<md-divider ng-if=\"to.divider === 'before'\"></md-divider>\r\n<formly-transclude></formly-transclude>\r\n<md-divider ng-if=\"to.divider !== 'before'\"></md-divider>\r\n";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _checkbox = __webpack_require__(16);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _chips = __webpack_require__(18);

	var _chips2 = _interopRequireDefault(_chips);

	var _datepicker = __webpack_require__(20);

	var _datepicker2 = _interopRequireDefault(_datepicker);

	var _input = __webpack_require__(22);

	var _input2 = _interopRequireDefault(_input);

	var _radio = __webpack_require__(24);

	var _radio2 = _interopRequireDefault(_radio);

	var _select = __webpack_require__(26);

	var _select2 = _interopRequireDefault(_select);

	var _slider = __webpack_require__(28);

	var _slider2 = _interopRequireDefault(_slider);

	var _switch = __webpack_require__(30);

	var _switch2 = _interopRequireDefault(_switch);

	var _textarea = __webpack_require__(32);

	var _textarea2 = _interopRequireDefault(_textarea);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = [_checkbox2.default, _chips2.default, _datepicker2.default, _input2.default, _radio2.default, _select2.default, _slider2.default, _switch2.default, _textarea2.default];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _checkbox = __webpack_require__(17);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (formlyConfigProvider) {
	  formlyConfigProvider.setType({
	    template: _checkbox2.default,
	    name: 'checkbox',
	    defaultOptions: {
	      ngModelAttrs: {
	        disabled: {
	          bound: 'ng-disabled'
	        }
	      }
	    },
	    apiCheck: function apiCheck(check) {
	      return {
	        templateOptions: {
	          disabled: check.bool.optional
	        }
	      };
	    }
	  });
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <md-checkbox ng-model=\"model[options.key]\">\r\n        {{to.label}}\r\n    </md-checkbox>\r\n</div>";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _chips = __webpack_require__(19);

	var _chips2 = _interopRequireDefault(_chips);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (formlyConfigProvider) {
	  formlyConfigProvider.setType({
	    template: _chips2.default,
	    name: 'chips',
	    wrapper: ['label'],
	    defaultOptions: {
	      defaultValue: [],
	      ngModelAttrs: {
	        placeholder: {
	          attribute: 'placeholder'
	        },
	        secondaryPlaceholder: {
	          attribute: 'secondary-placeholder'
	        },
	        deleteButtonLabel: {
	          attribute: 'delete-button-label'
	        },
	        deleteHint: {
	          attribute: 'delete-hint'
	        },
	        onAdd: {
	          bound: 'md-on-add'
	        },
	        onRemove: {
	          bound: 'md-on-remove'
	        },
	        onSelect: {
	          bound: 'md-on-select'
	        }
	      }
	    },
	    apiCheck: function apiCheck(check) {
	      return {
	        templateOptions: {
	          placeholder: check.string.optional,
	          secondaryPlaceholder: check.string.optional,
	          deleteButtonLabel: check.string.optional,
	          deleteHint: check.string.optional,
	          onAdd: check.func.optional,
	          onRemove: check.func.optional,
	          onSelect: check.func.optional
	        }
	      };
	    }
	  });
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "<md-chips ng-model=\"model[options.key]\" readonly=\"to.disabled\"></md-chips>\r\n";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _datepicker = __webpack_require__(21);

	var _datepicker2 = _interopRequireDefault(_datepicker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (formlyConfigProvider) {
	  formlyConfigProvider.setType({
	    template: _datepicker2.default,
	    name: 'datepicker',
	    wrapper: ['label', 'messages'],
	    defaultOptions: {
	      templateOptions: {
	        disabled: false
	      },
	      ngModelAttrs: {
	        disabled: {
	          bound: 'ng-disabled'
	        },
	        placeholder: {
	          attribute: 'md-placeholder'
	        },
	        minDate: {
	          bound: 'md-min-date'
	        },
	        maxDate: {
	          bound: 'md-max-date'
	        },
	        filterDate: {
	          bound: 'md-date-filter'
	        }
	      }
	    },
	    apiCheck: function apiCheck(check) {
	      return {
	        templateOptions: {
	          disabled: check.bool.optional,
	          placeholder: check.string.optional,
	          minDate: check.instanceOf(Date).optional,
	          maxDate: check.instanceOf(Date).optional,
	          filterDate: check.func.optional
	        }
	      };
	    }
	  });
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <md-datepicker ng-model=\"model[options.key]\"></md-datepicker>\r\n</div>";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _input = __webpack_require__(23);

	var _input2 = _interopRequireDefault(_input);

	var _helpers = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (formlyConfigProvider) {
	  formlyConfigProvider.setType({
	    template: _input2.default,
	    name: 'input',
	    wrapper: ['label', 'messages', 'inputContainer'],
	    defaultOptions: {
	      templateOptions: {
	        type: 'text',
	        disabled: false
	      },
	      ngModelAttrs: {
	        mdMaxlength: {
	          bound: 'md-maxlength'
	        },
	        disabled: {
	          bound: 'ng-disabled'
	        },
	        pattern: {
	          bound: 'ng-pattern'
	        }
	      }
	    },
	    apiCheck: function apiCheck(check) {
	      return {
	        templateOptions: {
	          disabled: check.bool.optional,
	          type: check.string,
	          step: check.number.optional,
	          pattern: check.oneOfType([check.string, check.instanceOf(RegExp)]).optional
	        }
	      };
	    }
	  });

	  // add only step attribute because min and max are both built-in
	  formlyConfigProvider.extras.fieldTransform.push(function (fields) {
	    return (0, _helpers.ngModelAttrsTransformer)(fields, function (field) {
	      return field.type === 'input' && field.templateOptions.type === 'number';
	    }, 'step', {
	      attribute: 'step'
	    });
	  });
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "<input ng-model=\"model[options.key]\">";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _radio = __webpack_require__(25);

	var _radio2 = _interopRequireDefault(_radio);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (formlyConfigProvider) {
	  formlyConfigProvider.setType({
	    template: _radio2.default,
	    name: 'radio',
	    wrapper: ['label'],
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

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "<md-radio-group ng-model=\"model[options.key]\">\r\n    <md-radio-button\r\n            ng-repeat=\"option in to.options\"\r\n            ng-disabled=\"to.disabled\"\r\n            ng-value=\"option[to.valueProp || 'value']\">\r\n            {{option[to.labelProp || 'name']}}\r\n    </md-radio-button>\r\n</md-radio-group>\r\n";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _select = __webpack_require__(27);

	var _select2 = _interopRequireDefault(_select);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (formlyConfigProvider) {
	  formlyConfigProvider.setType({
	    template: _select2.default,
	    name: 'select',
	    wrapper: ['label', 'messages', 'inputContainer'],
	    defaultOptions: {
	      templateOptions: {
	        disabled: false
	      },
	      ngModelAttrs: {
	        disabled: {
	          bound: 'ng-disabled'
	        },
	        multiple: {
	          bound: 'multiple'
	        },
	        onClose: {
	          bound: 'md-on-close'
	        },
	        onOpen: {
	          bound: 'md-on-open'
	        }
	      }
	    },
	    apiCheck: function apiCheck(check) {
	      return {
	        templateOptions: {
	          disabled: check.bool.optional,
	          options: check.arrayOf(check.object),
	          multiple: check.bool.optional,
	          labelProp: check.string.optional,
	          valueProp: check.string.optional,
	          onClose: check.func.optional,
	          onOpen: check.func.optional
	        }
	      };
	    }
	  });
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "<md-select ng-model=\"model[options.key]\">\r\n    <md-option ng-repeat=\"option in to.options\" ng-value=\"option[to.valueProp || 'value']\">\r\n        {{ option[to.labelProp || 'name'] }}\r\n    </md-option>\r\n</md-select>";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slider = __webpack_require__(29);

	var _slider2 = _interopRequireDefault(_slider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (formlyConfigProvider) {
	  formlyConfigProvider.setType({
	    template: _slider2.default,
	    name: 'slider',
	    wrapper: ['label'],
	    defaultOptions: {
	      templateOptions: {
	        disabled: false
	      },
	      ngModelAttrs: {
	        disabled: {
	          bound: 'ng-disabled'
	        },
	        min: {
	          attribute: 'min'
	        },
	        max: {
	          attribute: 'max'
	        },
	        step: {
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
	          disabled: check.bool.optional,
	          min: check.number.optional,
	          max: check.number.optional,
	          step: check.number.optional,
	          discrete: check.bool.optional
	        }
	      };
	    }
	  });
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "<md-slider ng-model=\"model[options.key]\"></md-slider>";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _switch = __webpack_require__(31);

	var _switch2 = _interopRequireDefault(_switch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (formlyConfigProvider) {
	  formlyConfigProvider.setType({
	    template: _switch2.default,
	    name: 'switch',
	    defaultOptions: {
	      templateOptions: {
	        disabled: false
	      },
	      ngModelAttrs: {
	        disabled: {
	          bound: 'ng-disabled'
	        }
	      }
	    },
	    apiCheck: function apiCheck(check) {
	      return {
	        templateOptions: {
	          disabled: check.bool.optional
	        }
	      };
	    }
	  });
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "<md-switch ng-model=\"model[options.key]\">\r\n    {{to.label}}\r\n</md-switch>";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _textarea = __webpack_require__(33);

	var _textarea2 = _interopRequireDefault(_textarea);

	var _helpers = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (formlyConfigProvider) {
	  formlyConfigProvider.setType({
	    template: _textarea2.default,
	    name: 'textarea',
	    wrapper: ['label', 'messages', 'inputContainer'],
	    defaultOptions: {
	      ngModelAttrs: {
	        disabled: {
	          bound: 'ng-disabled'
	        },
	        rows: {
	          attribute: 'rows'
	        },
	        cols: {
	          attribute: 'cols'
	        }
	      },
	      templateOptions: {
	        grow: true
	      }
	    },
	    apiCheck: function apiCheck(check) {
	      return {
	        templateOptions: {
	          disabled: check.bool.optional,
	          rows: check.number.optional,
	          cols: check.number.optional,
	          grow: check.bool.optional
	        }
	      };
	    }
	  });

	  formlyConfigProvider.extras.fieldTransform.push(function (fields) {
	    return (0, _helpers.ngModelAttrsTransformer)(fields, function (field) {
	      return field.type === 'textarea' && field.templateOptions.grow === false;
	    }, 'grow', {
	      attribute: 'md-no-autogrow'
	    });
	  });
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "<textarea ng-model=\"model[options.key]\"></textarea>";

/***/ }
/******/ ])
});
;