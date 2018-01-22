(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactGoogleBlogger"] = factory(require("react"), require("react-dom"));
	else
		root["ReactGoogleBlogger"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_227__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _componentsReactGoogleBlogger = __webpack_require__(1);
	
	var _componentsReactGoogleBlogger2 = _interopRequireDefault(_componentsReactGoogleBlogger);

	exports['default'] = _componentsReactGoogleBlogger2['default'];
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(3);
	
	var _redux = __webpack_require__(24);
	
	var _reduxThunk = __webpack_require__(61);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _materialUiStylesMuiThemeProvider = __webpack_require__(62);
	
	var _materialUiStylesMuiThemeProvider2 = _interopRequireDefault(_materialUiStylesMuiThemeProvider);
	
	var _BlogApp = __webpack_require__(205);
	
	var _BlogApp2 = _interopRequireDefault(_BlogApp);
	
	var _reducersIndex = __webpack_require__(314);
	
	var _reducersIndex2 = _interopRequireDefault(_reducersIndex);
	
	var ReactGoogleBlogger = (function (_Component) {
	  _inherits(ReactGoogleBlogger, _Component);
	
	  function ReactGoogleBlogger() {
	    _classCallCheck(this, ReactGoogleBlogger);
	
	    _get(Object.getPrototypeOf(ReactGoogleBlogger.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(ReactGoogleBlogger, [{
	    key: 'render',
	    value: function render() {
	      var store = (0, _redux.createStore)(_reducersIndex2['default'], {}, (0, _redux.applyMiddleware)(_reduxThunk2['default']));
	
	      return _react2['default'].createElement(
	        _reactRedux.Provider,
	        { store: store },
	        _react2['default'].createElement(
	          _materialUiStylesMuiThemeProvider2['default'],
	          null,
	          _react2['default'].createElement(_BlogApp2['default'], null)
	        )
	      );
	    }
	  }]);
	
	  return ReactGoogleBlogger;
	})(_react.Component);
	
	exports['default'] = ReactGoogleBlogger;
	module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.connect = exports.connectAdvanced = exports.createProvider = exports.Provider = undefined;
	
	var _Provider = __webpack_require__(4);
	
	var _Provider2 = _interopRequireDefault(_Provider);
	
	var _connectAdvanced = __webpack_require__(17);
	
	var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);
	
	var _connect = __webpack_require__(21);
	
	var _connect2 = _interopRequireDefault(_connect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Provider = _Provider2.default;
	exports.createProvider = _Provider.createProvider;
	exports.connectAdvanced = _connectAdvanced2.default;
	exports.connect = _connect2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.createProvider = createProvider;
	
	var _react = __webpack_require__(2);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _PropTypes = __webpack_require__(15);
	
	var _warning = __webpack_require__(16);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;
	
	  (0, _warning2.default)('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}
	
	function createProvider() {
	  var _Provider$childContex;
	
	  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
	  var subKey = arguments[1];
	
	  var subscriptionKey = subKey || storeKey + 'Subscription';
	
	  var Provider = function (_Component) {
	    _inherits(Provider, _Component);
	
	    Provider.prototype.getChildContext = function getChildContext() {
	      var _ref;
	
	      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
	    };
	
	    function Provider(props, context) {
	      _classCallCheck(this, Provider);
	
	      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	      _this[storeKey] = props.store;
	      return _this;
	    }
	
	    Provider.prototype.render = function render() {
	      return _react.Children.only(this.props.children);
	    };
	
	    return Provider;
	  }(_react.Component);
	
	  if (process.env.NODE_ENV !== 'production') {
	    Provider.prototype.componentWillReceiveProps = function (nextProps) {
	      if (this[storeKey] !== nextProps.store) {
	        warnAboutReceivingStore();
	      }
	    };
	  }
	
	  Provider.propTypes = {
	    store: _PropTypes.storeShape.isRequired,
	    children: _propTypes2.default.element.isRequired
	  };
	  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = _PropTypes.storeShape.isRequired, _Provider$childContex[subscriptionKey] = _PropTypes.subscriptionShape, _Provider$childContex);
	
	  return Provider;
	}
	
	exports.default = createProvider();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;
	
	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };
	
	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(7)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(14)();
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(8);
	var invariant = __webpack_require__(9);
	var warning = __webpack_require__(10);
	var assign = __webpack_require__(11);
	
	var ReactPropTypesSecret = __webpack_require__(12);
	var checkPropTypes = __webpack_require__(13);
	
	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	
	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }
	
	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */
	
	  var ANONYMOUS = '<<anonymous>>';
	
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),
	
	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };
	
	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/
	
	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;
	
	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;
	
	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }
	
	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);
	
	    return chainedCheckType;
	  }
	
	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);
	
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }
	
	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }
	
	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }
	
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	
	    return createChainableTypeChecker(validate);
	  }
	
	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }
	
	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }
	
	        return true;
	      default:
	        return false;
	    }
	  }
	
	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }
	
	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }
	
	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }
	
	    return false;
	  }
	
	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }
	
	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }
	
	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }
	
	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }
	
	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var validateFormat = function validateFormat(format) {};
	
	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(8);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if (process.env.NODE_ENV !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	
	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	
	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }
	
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }
	
	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}
	
	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports = ReactPropTypesSecret;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(9);
	  var warning = __webpack_require__(10);
	  var ReactPropTypesSecret = __webpack_require__(12);
	  var loggedTypeFailures = {};
	}
	
	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;
	
	          var stack = getStack ? getStack() : '';
	
	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}
	
	module.exports = checkPropTypes;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(8);
	var invariant = __webpack_require__(9);
	var ReactPropTypesSecret = __webpack_require__(12);
	
	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,
	
	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };
	
	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.storeShape = exports.subscriptionShape = undefined;
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var subscriptionShape = exports.subscriptionShape = _propTypes2.default.shape({
	  trySubscribe: _propTypes2.default.func.isRequired,
	  tryUnsubscribe: _propTypes2.default.func.isRequired,
	  notifyNestedSubs: _propTypes2.default.func.isRequired,
	  isSubscribed: _propTypes2.default.func.isRequired
	});
	
	var storeShape = exports.storeShape = _propTypes2.default.shape({
	  subscribe: _propTypes2.default.func.isRequired,
	  dispatch: _propTypes2.default.func.isRequired,
	  getState: _propTypes2.default.func.isRequired
	});

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = connectAdvanced;
	
	var _hoistNonReactStatics = __webpack_require__(18);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	var _invariant = __webpack_require__(19);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(2);
	
	var _Subscription = __webpack_require__(20);
	
	var _Subscription2 = _interopRequireDefault(_Subscription);
	
	var _PropTypes = __webpack_require__(15);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var hotReloadingVersion = 0;
	var dummyState = {};
	function noop() {}
	function makeSelectorStateful(sourceSelector, store) {
	  // wrap the selector in an object that tracks its results between runs.
	  var selector = {
	    run: function runComponentSelector(props) {
	      try {
	        var nextProps = sourceSelector(store.getState(), props);
	        if (nextProps !== selector.props || selector.error) {
	          selector.shouldComponentUpdate = true;
	          selector.props = nextProps;
	          selector.error = null;
	        }
	      } catch (error) {
	        selector.shouldComponentUpdate = true;
	        selector.error = error;
	      }
	    }
	  };
	
	  return selector;
	}
	
	function connectAdvanced(
	/*
	  selectorFactory is a func that is responsible for returning the selector function used to
	  compute new props from state, props, and dispatch. For example:
	     export default connectAdvanced((dispatch, options) => (state, props) => ({
	      thing: state.things[props.thingId],
	      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
	    }))(YourComponent)
	   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
	  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
	  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
	   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
	  props. Do not use connectAdvanced directly without memoizing results between calls to your
	  selector, otherwise the Connect component will re-render on every state or props change.
	*/
	selectorFactory) {
	  var _contextTypes, _childContextTypes;
	
	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      _ref$getDisplayName = _ref.getDisplayName,
	      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
	    return 'ConnectAdvanced(' + name + ')';
	  } : _ref$getDisplayName,
	      _ref$methodName = _ref.methodName,
	      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
	      _ref$renderCountProp = _ref.renderCountProp,
	      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
	      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
	      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
	      _ref$storeKey = _ref.storeKey,
	      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
	      _ref$withRef = _ref.withRef,
	      withRef = _ref$withRef === undefined ? false : _ref$withRef,
	      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);
	
	  var subscriptionKey = storeKey + 'Subscription';
	  var version = hotReloadingVersion++;
	
	  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = _PropTypes.storeShape, _contextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _contextTypes);
	  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _childContextTypes);
	
	  return function wrapWithConnect(WrappedComponent) {
	    (0, _invariant2.default)(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + ('connect. Instead received ' + JSON.stringify(WrappedComponent)));
	
	    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
	
	    var displayName = getDisplayName(wrappedComponentName);
	
	    var selectorFactoryOptions = _extends({}, connectOptions, {
	      getDisplayName: getDisplayName,
	      methodName: methodName,
	      renderCountProp: renderCountProp,
	      shouldHandleStateChanges: shouldHandleStateChanges,
	      storeKey: storeKey,
	      withRef: withRef,
	      displayName: displayName,
	      wrappedComponentName: wrappedComponentName,
	      WrappedComponent: WrappedComponent
	    });
	
	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);
	
	      function Connect(props, context) {
	        _classCallCheck(this, Connect);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	        _this.version = version;
	        _this.state = {};
	        _this.renderCount = 0;
	        _this.store = props[storeKey] || context[storeKey];
	        _this.propsMode = Boolean(props[storeKey]);
	        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
	
	        (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
	
	        _this.initSelector();
	        _this.initSubscription();
	        return _this;
	      }
	
	      Connect.prototype.getChildContext = function getChildContext() {
	        var _ref2;
	
	        // If this component received store from props, its subscription should be transparent
	        // to any descendants receiving store+subscription from context; it passes along
	        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
	        // Connect to control ordering of notifications to flow top-down.
	        var subscription = this.propsMode ? null : this.subscription;
	        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
	      };
	
	      Connect.prototype.componentDidMount = function componentDidMount() {
	        if (!shouldHandleStateChanges) return;
	
	        // componentWillMount fires during server side rendering, but componentDidMount and
	        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
	        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
	        // To handle the case where a child component may have triggered a state change by
	        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
	        // re-render.
	        this.subscription.trySubscribe();
	        this.selector.run(this.props);
	        if (this.selector.shouldComponentUpdate) this.forceUpdate();
	      };
	
	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        this.selector.run(nextProps);
	      };
	
	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return this.selector.shouldComponentUpdate;
	      };
	
	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        if (this.subscription) this.subscription.tryUnsubscribe();
	        this.subscription = null;
	        this.notifyNestedSubs = noop;
	        this.store = null;
	        this.selector.run = noop;
	        this.selector.shouldComponentUpdate = false;
	      };
	
	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2.default)(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
	        return this.wrappedInstance;
	      };
	
	      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
	        this.wrappedInstance = ref;
	      };
	
	      Connect.prototype.initSelector = function initSelector() {
	        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
	        this.selector = makeSelectorStateful(sourceSelector, this.store);
	        this.selector.run(this.props);
	      };
	
	      Connect.prototype.initSubscription = function initSubscription() {
	        if (!shouldHandleStateChanges) return;
	
	        // parentSub's source should match where store came from: props vs. context. A component
	        // connected to the store via props shouldn't use subscription from context, or vice versa.
	        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
	        this.subscription = new _Subscription2.default(this.store, parentSub, this.onStateChange.bind(this));
	
	        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
	        // the middle of the notification loop, where `this.subscription` will then be null. An
	        // extra null check every change can be avoided by copying the method onto `this` and then
	        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
	        // listeners logic is changed to not call listeners that have been unsubscribed in the
	        // middle of the notification loop.
	        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
	      };
	
	      Connect.prototype.onStateChange = function onStateChange() {
	        this.selector.run(this.props);
	
	        if (!this.selector.shouldComponentUpdate) {
	          this.notifyNestedSubs();
	        } else {
	          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
	          this.setState(dummyState);
	        }
	      };
	
	      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
	        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
	        // needs to notify nested subs. Once called, it unimplements itself until further state
	        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
	        // a boolean check every time avoids an extra method call most of the time, resulting
	        // in some perf boost.
	        this.componentDidUpdate = undefined;
	        this.notifyNestedSubs();
	      };
	
	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return Boolean(this.subscription) && this.subscription.isSubscribed();
	      };
	
	      Connect.prototype.addExtraProps = function addExtraProps(props) {
	        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
	        // make a shallow copy so that fields added don't leak to the original selector.
	        // this is especially important for 'ref' since that's a reference back to the component
	        // instance. a singleton memoized selector would then be holding a reference to the
	        // instance, preventing the instance from being garbage collected, and that would be bad
	        var withExtras = _extends({}, props);
	        if (withRef) withExtras.ref = this.setWrappedInstance;
	        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
	        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
	        return withExtras;
	      };
	
	      Connect.prototype.render = function render() {
	        var selector = this.selector;
	        selector.shouldComponentUpdate = false;
	
	        if (selector.error) {
	          throw selector.error;
	        } else {
	          return (0, _react.createElement)(WrappedComponent, this.addExtraProps(selector.props));
	        }
	      };
	
	      return Connect;
	    }(_react.Component);
	
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.displayName = displayName;
	    Connect.childContextTypes = childContextTypes;
	    Connect.contextTypes = contextTypes;
	    Connect.propTypes = contextTypes;
	
	    if (process.env.NODE_ENV !== 'production') {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        var _this2 = this;
	
	        // We are hot reloading!
	        if (this.version !== version) {
	          this.version = version;
	          this.initSelector();
	
	          // If any connected descendants don't hot reload (and resubscribe in the process), their
	          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
	          // listeners, this does mean that the old versions of connected descendants will still be
	          // notified of state changes; however, their onStateChange function is a no-op so this
	          // isn't a huge deal.
	          var oldListeners = [];
	
	          if (this.subscription) {
	            oldListeners = this.subscription.listeners.get();
	            this.subscription.tryUnsubscribe();
	          }
	          this.initSubscription();
	          if (shouldHandleStateChanges) {
	            this.subscription.trySubscribe();
	            oldListeners.forEach(function (listener) {
	              return _this2.subscription.listeners.subscribe(listener);
	            });
	          }
	        }
	      };
	    }
	
	    return (0, _hoistNonReactStatics2.default)(Connect, WrappedComponent);
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';
	
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};
	
	var KNOWN_STATICS = {
	  name: true,
	  length: true,
	  prototype: true,
	  caller: true,
	  callee: true,
	  arguments: true,
	  arity: true
	};
	
	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = getPrototypeOf && getPrototypeOf(Object);
	
	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	
	        if (objectPrototype) {
	            var inheritedComponent = getPrototypeOf(sourceComponent);
	            if (inheritedComponent && inheritedComponent !== objectPrototype) {
	                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	            }
	        }
	
	        var keys = getOwnPropertyNames(sourceComponent);
	
	        if (getOwnPropertySymbols) {
	            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	        }
	
	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
	                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
	                try { // Avoid failures from read-only properties
	                    defineProperty(targetComponent, key, descriptor);
	                } catch (e) {}
	            }
	        }
	
	        return targetComponent;
	    }
	
	    return targetComponent;
	};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// encapsulates the subscription logic for connecting a component to the redux store, as
	// well as nesting subscriptions of descendant components, so that we can ensure the
	// ancestor components re-render before descendants
	
	var CLEARED = null;
	var nullListeners = {
	  notify: function notify() {}
	};
	
	function createListenerCollection() {
	  // the current/next pattern is copied from redux's createStore code.
	  // TODO: refactor+expose that code to be reusable here?
	  var current = [];
	  var next = [];
	
	  return {
	    clear: function clear() {
	      next = CLEARED;
	      current = CLEARED;
	    },
	    notify: function notify() {
	      var listeners = current = next;
	      for (var i = 0; i < listeners.length; i++) {
	        listeners[i]();
	      }
	    },
	    get: function get() {
	      return next;
	    },
	    subscribe: function subscribe(listener) {
	      var isSubscribed = true;
	      if (next === current) next = current.slice();
	      next.push(listener);
	
	      return function unsubscribe() {
	        if (!isSubscribed || current === CLEARED) return;
	        isSubscribed = false;
	
	        if (next === current) next = current.slice();
	        next.splice(next.indexOf(listener), 1);
	      };
	    }
	  };
	}
	
	var Subscription = function () {
	  function Subscription(store, parentSub, onStateChange) {
	    _classCallCheck(this, Subscription);
	
	    this.store = store;
	    this.parentSub = parentSub;
	    this.onStateChange = onStateChange;
	    this.unsubscribe = null;
	    this.listeners = nullListeners;
	  }
	
	  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
	    this.trySubscribe();
	    return this.listeners.subscribe(listener);
	  };
	
	  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
	    this.listeners.notify();
	  };
	
	  Subscription.prototype.isSubscribed = function isSubscribed() {
	    return Boolean(this.unsubscribe);
	  };
	
	  Subscription.prototype.trySubscribe = function trySubscribe() {
	    if (!this.unsubscribe) {
	      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);
	
	      this.listeners = createListenerCollection();
	    }
	  };
	
	  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
	    if (this.unsubscribe) {
	      this.unsubscribe();
	      this.unsubscribe = null;
	      this.listeners.clear();
	      this.listeners = nullListeners;
	    }
	  };
	
	  return Subscription;
	}();
	
	exports.default = Subscription;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.createConnect = createConnect;
	
	var _connectAdvanced = __webpack_require__(17);
	
	var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);
	
	var _shallowEqual = __webpack_require__(22);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _mapDispatchToProps = __webpack_require__(23);
	
	var _mapDispatchToProps2 = _interopRequireDefault(_mapDispatchToProps);
	
	var _mapStateToProps = __webpack_require__(57);
	
	var _mapStateToProps2 = _interopRequireDefault(_mapStateToProps);
	
	var _mergeProps = __webpack_require__(58);
	
	var _mergeProps2 = _interopRequireDefault(_mergeProps);
	
	var _selectorFactory = __webpack_require__(59);
	
	var _selectorFactory2 = _interopRequireDefault(_selectorFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/*
	  connect is a facade over connectAdvanced. It turns its args into a compatible
	  selectorFactory, which has the signature:
	
	    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
	  
	  connect passes its args to connectAdvanced as options, which will in turn pass them to
	  selectorFactory each time a Connect component instance is instantiated or hot reloaded.
	
	  selectorFactory returns a final props selector from its mapStateToProps,
	  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
	  mergePropsFactories, and pure args.
	
	  The resulting final props selector is called by the Connect component instance whenever
	  it receives new props or store state.
	 */
	
	function match(arg, factories, name) {
	  for (var i = factories.length - 1; i >= 0; i--) {
	    var result = factories[i](arg);
	    if (result) return result;
	  }
	
	  return function (dispatch, options) {
	    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
	  };
	}
	
	function strictEqual(a, b) {
	  return a === b;
	}
	
	// createConnect with default args builds the 'official' connect behavior. Calling it with
	// different options opens up some testing and extensibility scenarios
	function createConnect() {
	  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      _ref$connectHOC = _ref.connectHOC,
	      connectHOC = _ref$connectHOC === undefined ? _connectAdvanced2.default : _ref$connectHOC,
	      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
	      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? _mapStateToProps2.default : _ref$mapStateToPropsF,
	      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
	      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? _mapDispatchToProps2.default : _ref$mapDispatchToPro,
	      _ref$mergePropsFactor = _ref.mergePropsFactories,
	      mergePropsFactories = _ref$mergePropsFactor === undefined ? _mergeProps2.default : _ref$mergePropsFactor,
	      _ref$selectorFactory = _ref.selectorFactory,
	      selectorFactory = _ref$selectorFactory === undefined ? _selectorFactory2.default : _ref$selectorFactory;
	
	  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
	        _ref2$pure = _ref2.pure,
	        pure = _ref2$pure === undefined ? true : _ref2$pure,
	        _ref2$areStatesEqual = _ref2.areStatesEqual,
	        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
	        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
	        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? _shallowEqual2.default : _ref2$areOwnPropsEqua,
	        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
	        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? _shallowEqual2.default : _ref2$areStatePropsEq,
	        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
	        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? _shallowEqual2.default : _ref2$areMergedPropsE,
	        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);
	
	    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
	    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
	    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
	
	    return connectHOC(selectorFactory, _extends({
	      // used in error messages
	      methodName: 'connect',
	
	      // used to compute Connect's displayName from the wrapped component's displayName.
	      getDisplayName: function getDisplayName(name) {
	        return 'Connect(' + name + ')';
	      },
	
	      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
	      shouldHandleStateChanges: Boolean(mapStateToProps),
	
	      // passed through to selectorFactory
	      initMapStateToProps: initMapStateToProps,
	      initMapDispatchToProps: initMapDispatchToProps,
	      initMergeProps: initMergeProps,
	      pure: pure,
	      areStatesEqual: areStatesEqual,
	      areOwnPropsEqual: areOwnPropsEqual,
	      areStatePropsEqual: areStatePropsEqual,
	      areMergedPropsEqual: areMergedPropsEqual
	
	    }, extraOptions));
	  };
	}
	
	exports.default = createConnect();

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = shallowEqual;
	var hasOwn = Object.prototype.hasOwnProperty;
	
	function is(x, y) {
	  if (x === y) {
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    return x !== x && y !== y;
	  }
	}
	
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) return true;
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) return false;
	
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }
	
	  return true;
	}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.whenMapDispatchToPropsIsFunction = whenMapDispatchToPropsIsFunction;
	exports.whenMapDispatchToPropsIsMissing = whenMapDispatchToPropsIsMissing;
	exports.whenMapDispatchToPropsIsObject = whenMapDispatchToPropsIsObject;
	
	var _redux = __webpack_require__(24);
	
	var _wrapMapToProps = __webpack_require__(45);
	
	function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
	  return typeof mapDispatchToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : undefined;
	}
	
	function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
	  return !mapDispatchToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
	    return { dispatch: dispatch };
	  }) : undefined;
	}
	
	function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
	  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
	    return (0, _redux.bindActionCreators)(mapDispatchToProps, dispatch);
	  }) : undefined;
	}
	
	exports.default = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;
	
	var _createStore = __webpack_require__(25);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	var _combineReducers = __webpack_require__(40);
	
	var _combineReducers2 = _interopRequireDefault(_combineReducers);
	
	var _bindActionCreators = __webpack_require__(42);
	
	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
	
	var _applyMiddleware = __webpack_require__(43);
	
	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
	
	var _compose = __webpack_require__(44);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	var _warning = __webpack_require__(41);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}
	
	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}
	
	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;
	
	var _isPlainObject = __webpack_require__(26);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _symbolObservable = __webpack_require__(36);
	
	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	
	  /**
	   * Creates a Redux store that holds the state tree.
	   * The only way to change the data in the store is to call `dispatch()` on it.
	   *
	   * There should only be a single store in your app. To specify how different
	   * parts of the state tree respond to actions, you may combine several reducers
	   * into a single reducer function by using `combineReducers`.
	   *
	   * @param {Function} reducer A function that returns the next state tree, given
	   * the current state tree and the action to handle.
	   *
	   * @param {any} [preloadedState] The initial state. You may optionally specify it
	   * to hydrate the state from the server in universal apps, or to restore a
	   * previously serialized user session.
	   * If you use `combineReducers` to produce the root reducer function, this must be
	   * an object with the same shape as `combineReducers` keys.
	   *
	   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
	   * to enhance the store with third-party capabilities such as middleware,
	   * time travel, persistence, etc. The only store enhancer that ships with Redux
	   * is `applyMiddleware()`.
	   *
	   * @returns {Store} A Redux store that lets you read the state, dispatch actions
	   * and subscribe to changes.
	   */
	};function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;
	
	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }
	
	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }
	
	    return enhancer(createStore)(reducer, preloadedState);
	  }
	
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }
	
	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	
	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }
	
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }
	
	    var isSubscribed = true;
	
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	
	      isSubscribed = false;
	
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }
	
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	
	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }
	
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	
	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      var listener = listeners[i];
	      listener();
	    }
	
	    return action;
	  }
	
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }
	
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }
	
	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/tc39/proposal-observable
	   */
	  function observable() {
	    var _ref;
	
	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }
	
	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }
	
	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }
	
	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });
	
	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(27),
	    getPrototype = __webpack_require__(33),
	    isObjectLike = __webpack_require__(35);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}
	
	module.exports = isPlainObject;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(28),
	    getRawTag = __webpack_require__(31),
	    objectToString = __webpack_require__(32);
	
	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	module.exports = baseGetTag;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(29);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(30);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(28);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	module.exports = getRawTag;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(34);
	
	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	
	module.exports = getPrototype;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(37);


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ponyfill = __webpack_require__(39);
	
	var _ponyfill2 = _interopRequireDefault(_ponyfill);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var root; /* global window */
	
	
	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}
	
	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(38)(module)))

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 39 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;
	
		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}
	
		return result;
	};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports['default'] = combineReducers;
	
	var _createStore = __webpack_require__(25);
	
	var _isPlainObject = __webpack_require__(26);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _warning = __webpack_require__(41);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
	
	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
	}
	
	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';
	
	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }
	
	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }
	
	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });
	
	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });
	
	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}
	
	function assertReducerShape(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });
	
	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
	    }
	
	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
	    }
	  });
	}
	
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	
	    if (process.env.NODE_ENV !== 'production') {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }
	
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);
	
	  var unexpectedKeyCache = void 0;
	  if (process.env.NODE_ENV !== 'production') {
	    unexpectedKeyCache = {};
	  }
	
	  var shapeAssertionError = void 0;
	  try {
	    assertReducerShape(finalReducers);
	  } catch (e) {
	    shapeAssertionError = e;
	  }
	
	  return function combination() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];
	
	    if (shapeAssertionError) {
	      throw shapeAssertionError;
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }
	
	    var hasChanged = false;
	    var nextState = {};
	    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
	      var _key = finalReducerKeys[_i];
	      var reducer = finalReducers[_key];
	      var previousStateForKey = state[_key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(_key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[_key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}
	
	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }
	
	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }
	
	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = applyMiddleware;
	
	var _compose = __webpack_require__(44);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];
	
	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);
	
	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */
	
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }
	
	  if (funcs.length === 1) {
	    return funcs[0];
	  }
	
	  return funcs.reduce(function (a, b) {
	    return function () {
	      return a(b.apply(undefined, arguments));
	    };
	  });
	}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.wrapMapToPropsConstant = wrapMapToPropsConstant;
	exports.getDependsOnOwnProps = getDependsOnOwnProps;
	exports.wrapMapToPropsFunc = wrapMapToPropsFunc;
	
	var _verifyPlainObject = __webpack_require__(46);
	
	var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function wrapMapToPropsConstant(getConstant) {
	  return function initConstantSelector(dispatch, options) {
	    var constant = getConstant(dispatch, options);
	
	    function constantSelector() {
	      return constant;
	    }
	    constantSelector.dependsOnOwnProps = false;
	    return constantSelector;
	  };
	}
	
	// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
	// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
	// whether mapToProps needs to be invoked when props have changed.
	// 
	// A length of one signals that mapToProps does not depend on props from the parent component.
	// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
	// therefore not reporting its length accurately..
	function getDependsOnOwnProps(mapToProps) {
	  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
	}
	
	// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
	// this function wraps mapToProps in a proxy function which does several things:
	// 
	//  * Detects whether the mapToProps function being called depends on props, which
	//    is used by selectorFactory to decide if it should reinvoke on props changes.
	//    
	//  * On first call, handles mapToProps if returns another function, and treats that
	//    new function as the true mapToProps for subsequent calls.
	//    
	//  * On first call, verifies the first result is a plain object, in order to warn
	//    the developer that their mapToProps function is not returning a valid result.
	//    
	function wrapMapToPropsFunc(mapToProps, methodName) {
	  return function initProxySelector(dispatch, _ref) {
	    var displayName = _ref.displayName;
	
	    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
	      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
	    };
	
	    // allow detectFactoryAndVerify to get ownProps
	    proxy.dependsOnOwnProps = true;
	
	    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
	      proxy.mapToProps = mapToProps;
	      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
	      var props = proxy(stateOrDispatch, ownProps);
	
	      if (typeof props === 'function') {
	        proxy.mapToProps = props;
	        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
	        props = proxy(stateOrDispatch, ownProps);
	      }
	
	      if (process.env.NODE_ENV !== 'production') (0, _verifyPlainObject2.default)(props, displayName, methodName);
	
	      return props;
	    };
	
	    return proxy;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = verifyPlainObject;
	
	var _isPlainObject = __webpack_require__(47);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _warning = __webpack_require__(16);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function verifyPlainObject(value, displayName, methodName) {
	  if (!(0, _isPlainObject2.default)(value)) {
	    (0, _warning2.default)(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
	  }
	}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(48),
	    getPrototype = __webpack_require__(54),
	    isObjectLike = __webpack_require__(56);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}
	
	module.exports = isPlainObject;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(49),
	    getRawTag = __webpack_require__(52),
	    objectToString = __webpack_require__(53);
	
	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	module.exports = baseGetTag;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(50);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(51);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ }),
/* 51 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(49);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	module.exports = getRawTag;


/***/ }),
/* 53 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(55);
	
	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	
	module.exports = getPrototype;


/***/ }),
/* 55 */
/***/ (function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.whenMapStateToPropsIsFunction = whenMapStateToPropsIsFunction;
	exports.whenMapStateToPropsIsMissing = whenMapStateToPropsIsMissing;
	
	var _wrapMapToProps = __webpack_require__(45);
	
	function whenMapStateToPropsIsFunction(mapStateToProps) {
	  return typeof mapStateToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : undefined;
	}
	
	function whenMapStateToPropsIsMissing(mapStateToProps) {
	  return !mapStateToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function () {
	    return {};
	  }) : undefined;
	}
	
	exports.default = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.defaultMergeProps = defaultMergeProps;
	exports.wrapMergePropsFunc = wrapMergePropsFunc;
	exports.whenMergePropsIsFunction = whenMergePropsIsFunction;
	exports.whenMergePropsIsOmitted = whenMergePropsIsOmitted;
	
	var _verifyPlainObject = __webpack_require__(46);
	
	var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function defaultMergeProps(stateProps, dispatchProps, ownProps) {
	  return _extends({}, ownProps, stateProps, dispatchProps);
	}
	
	function wrapMergePropsFunc(mergeProps) {
	  return function initMergePropsProxy(dispatch, _ref) {
	    var displayName = _ref.displayName,
	        pure = _ref.pure,
	        areMergedPropsEqual = _ref.areMergedPropsEqual;
	
	    var hasRunOnce = false;
	    var mergedProps = void 0;
	
	    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
	      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	
	      if (hasRunOnce) {
	        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
	      } else {
	        hasRunOnce = true;
	        mergedProps = nextMergedProps;
	
	        if (process.env.NODE_ENV !== 'production') (0, _verifyPlainObject2.default)(mergedProps, displayName, 'mergeProps');
	      }
	
	      return mergedProps;
	    };
	  };
	}
	
	function whenMergePropsIsFunction(mergeProps) {
	  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
	}
	
	function whenMergePropsIsOmitted(mergeProps) {
	  return !mergeProps ? function () {
	    return defaultMergeProps;
	  } : undefined;
	}
	
	exports.default = [whenMergePropsIsFunction, whenMergePropsIsOmitted];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.impureFinalPropsSelectorFactory = impureFinalPropsSelectorFactory;
	exports.pureFinalPropsSelectorFactory = pureFinalPropsSelectorFactory;
	exports.default = finalPropsSelectorFactory;
	
	var _verifySubselectors = __webpack_require__(60);
	
	var _verifySubselectors2 = _interopRequireDefault(_verifySubselectors);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
	  return function impureFinalPropsSelector(state, ownProps) {
	    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
	  };
	}
	
	function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
	  var areStatesEqual = _ref.areStatesEqual,
	      areOwnPropsEqual = _ref.areOwnPropsEqual,
	      areStatePropsEqual = _ref.areStatePropsEqual;
	
	  var hasRunAtLeastOnce = false;
	  var state = void 0;
	  var ownProps = void 0;
	  var stateProps = void 0;
	  var dispatchProps = void 0;
	  var mergedProps = void 0;
	
	  function handleFirstCall(firstState, firstOwnProps) {
	    state = firstState;
	    ownProps = firstOwnProps;
	    stateProps = mapStateToProps(state, ownProps);
	    dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    hasRunAtLeastOnce = true;
	    return mergedProps;
	  }
	
	  function handleNewPropsAndNewState() {
	    stateProps = mapStateToProps(state, ownProps);
	
	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
	
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }
	
	  function handleNewProps() {
	    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
	
	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
	
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }
	
	  function handleNewState() {
	    var nextStateProps = mapStateToProps(state, ownProps);
	    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
	    stateProps = nextStateProps;
	
	    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	
	    return mergedProps;
	  }
	
	  function handleSubsequentCalls(nextState, nextOwnProps) {
	    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
	    var stateChanged = !areStatesEqual(nextState, state);
	    state = nextState;
	    ownProps = nextOwnProps;
	
	    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
	    if (propsChanged) return handleNewProps();
	    if (stateChanged) return handleNewState();
	    return mergedProps;
	  }
	
	  return function pureFinalPropsSelector(nextState, nextOwnProps) {
	    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
	  };
	}
	
	// TODO: Add more comments
	
	// If pure is true, the selector returned by selectorFactory will memoize its results,
	// allowing connectAdvanced's shouldComponentUpdate to return false if final
	// props have not changed. If false, the selector will always return a new
	// object and shouldComponentUpdate will always return true.
	
	function finalPropsSelectorFactory(dispatch, _ref2) {
	  var initMapStateToProps = _ref2.initMapStateToProps,
	      initMapDispatchToProps = _ref2.initMapDispatchToProps,
	      initMergeProps = _ref2.initMergeProps,
	      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);
	
	  var mapStateToProps = initMapStateToProps(dispatch, options);
	  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
	  var mergeProps = initMergeProps(dispatch, options);
	
	  if (process.env.NODE_ENV !== 'production') {
	    (0, _verifySubselectors2.default)(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
	  }
	
	  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
	
	  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = verifySubselectors;
	
	var _warning = __webpack_require__(16);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function verify(selector, methodName, displayName) {
	  if (!selector) {
	    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
	  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
	    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
	      (0, _warning2.default)('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
	    }
	  }
	}
	
	function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
	  verify(mapStateToProps, 'mapStateToProps', displayName);
	  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
	  verify(mergeProps, 'mergeProps', displayName);
	}

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	function createThunkMiddleware(extraArgument) {
	  return function (_ref) {
	    var dispatch = _ref.dispatch,
	        getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        if (typeof action === 'function') {
	          return action(dispatch, getState, extraArgument);
	        }
	
	        return next(action);
	      };
	    };
	  };
	}
	
	var thunk = createThunkMiddleware();
	thunk.withExtraArgument = createThunkMiddleware;
	
	exports['default'] = thunk;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(63);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(89);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(90);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(94);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(140);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(2);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _getMuiTheme = __webpack_require__(148);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MuiThemeProvider = function (_Component) {
	  (0, _inherits3.default)(MuiThemeProvider, _Component);
	
	  function MuiThemeProvider() {
	    (0, _classCallCheck3.default)(this, MuiThemeProvider);
	    return (0, _possibleConstructorReturn3.default)(this, (MuiThemeProvider.__proto__ || (0, _getPrototypeOf2.default)(MuiThemeProvider)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(MuiThemeProvider, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        muiTheme: this.props.muiTheme || (0, _getMuiTheme2.default)()
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children;
	    }
	  }]);
	  return MuiThemeProvider;
	}(_react.Component);
	
	MuiThemeProvider.childContextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	MuiThemeProvider.propTypes = process.env.NODE_ENV !== "production" ? {
	  children: _propTypes2.default.element,
	  muiTheme: _propTypes2.default.object
	} : {};
	exports.default = MuiThemeProvider;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(64), __esModule: true };

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(65);
	module.exports = __webpack_require__(76).Object.getPrototypeOf;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(66);
	var $getPrototypeOf = __webpack_require__(68);
	
	__webpack_require__(74)('getPrototypeOf', function () {
	  return function getPrototypeOf(it) {
	    return $getPrototypeOf(toObject(it));
	  };
	});


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(67);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ }),
/* 67 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(69);
	var toObject = __webpack_require__(66);
	var IE_PROTO = __webpack_require__(70)('IE_PROTO');
	var ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ }),
/* 69 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(71)('keys');
	var uid = __webpack_require__(73);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(72);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};


/***/ }),
/* 72 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 73 */
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(75);
	var core = __webpack_require__(76);
	var fails = __webpack_require__(85);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(72);
	var core = __webpack_require__(76);
	var ctx = __webpack_require__(77);
	var hide = __webpack_require__(79);
	var PROTOTYPE = 'prototype';
	
	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.3' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(78);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 78 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(80);
	var createDesc = __webpack_require__(88);
	module.exports = __webpack_require__(84) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(81);
	var IE8_DOM_DEFINE = __webpack_require__(83);
	var toPrimitive = __webpack_require__(87);
	var dP = Object.defineProperty;
	
	exports.f = __webpack_require__(84) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(82);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 82 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(84) && !__webpack_require__(85)(function () {
	  return Object.defineProperty(__webpack_require__(86)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(85)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 85 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(82);
	var document = __webpack_require__(72).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(82);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 88 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 89 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(91);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(92), __esModule: true };

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(93);
	var $Object = __webpack_require__(76).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(75);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(84), 'Object', { defineProperty: __webpack_require__(80).f });


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(95);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(96);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(125);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(98);
	__webpack_require__(120);
	module.exports = __webpack_require__(124).f('iterator');


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(99)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(101)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(100);
	var defined = __webpack_require__(67);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ }),
/* 100 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(102);
	var $export = __webpack_require__(75);
	var redefine = __webpack_require__(103);
	var hide = __webpack_require__(79);
	var has = __webpack_require__(69);
	var Iterators = __webpack_require__(104);
	var $iterCreate = __webpack_require__(105);
	var setToStringTag = __webpack_require__(118);
	var getPrototypeOf = __webpack_require__(68);
	var ITERATOR = __webpack_require__(119)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';
	
	var returnThis = function () { return this; };
	
	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ }),
/* 102 */
/***/ (function(module, exports) {

	module.exports = true;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(79);


/***/ }),
/* 104 */
/***/ (function(module, exports) {

	module.exports = {};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(106);
	var descriptor = __webpack_require__(88);
	var setToStringTag = __webpack_require__(118);
	var IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(79)(IteratorPrototype, __webpack_require__(119)('iterator'), function () { return this; });
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(81);
	var dPs = __webpack_require__(107);
	var enumBugKeys = __webpack_require__(116);
	var IE_PROTO = __webpack_require__(70)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(86)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(117).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(80);
	var anObject = __webpack_require__(81);
	var getKeys = __webpack_require__(108);
	
	module.exports = __webpack_require__(84) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(109);
	var enumBugKeys = __webpack_require__(116);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(69);
	var toIObject = __webpack_require__(110);
	var arrayIndexOf = __webpack_require__(113)(false);
	var IE_PROTO = __webpack_require__(70)('IE_PROTO');
	
	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(111);
	var defined = __webpack_require__(67);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(112);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 112 */
/***/ (function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(110);
	var toLength = __webpack_require__(114);
	var toAbsoluteIndex = __webpack_require__(115);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(100);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(100);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),
/* 116 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__(72).document;
	module.exports = document && document.documentElement;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(80).f;
	var has = __webpack_require__(69);
	var TAG = __webpack_require__(119)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(71)('wks');
	var uid = __webpack_require__(73);
	var Symbol = __webpack_require__(72).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(121);
	var global = __webpack_require__(72);
	var hide = __webpack_require__(79);
	var Iterators = __webpack_require__(104);
	var TO_STRING_TAG = __webpack_require__(119)('toStringTag');
	
	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');
	
	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(122);
	var step = __webpack_require__(123);
	var Iterators = __webpack_require__(104);
	var toIObject = __webpack_require__(110);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(101)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ }),
/* 122 */
/***/ (function(module, exports) {

	module.exports = function () { /* empty */ };


/***/ }),
/* 123 */
/***/ (function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(119);


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(126), __esModule: true };

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(127);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(139);
	module.exports = __webpack_require__(76).Symbol;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(72);
	var has = __webpack_require__(69);
	var DESCRIPTORS = __webpack_require__(84);
	var $export = __webpack_require__(75);
	var redefine = __webpack_require__(103);
	var META = __webpack_require__(128).KEY;
	var $fails = __webpack_require__(85);
	var shared = __webpack_require__(71);
	var setToStringTag = __webpack_require__(118);
	var uid = __webpack_require__(73);
	var wks = __webpack_require__(119);
	var wksExt = __webpack_require__(124);
	var wksDefine = __webpack_require__(129);
	var enumKeys = __webpack_require__(130);
	var isArray = __webpack_require__(133);
	var anObject = __webpack_require__(81);
	var isObject = __webpack_require__(82);
	var toIObject = __webpack_require__(110);
	var toPrimitive = __webpack_require__(87);
	var createDesc = __webpack_require__(88);
	var _create = __webpack_require__(106);
	var gOPNExt = __webpack_require__(134);
	var $GOPD = __webpack_require__(136);
	var $DP = __webpack_require__(80);
	var $keys = __webpack_require__(108);
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(135).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(132).f = $propertyIsEnumerable;
	  __webpack_require__(131).f = $getOwnPropertySymbols;
	
	  if (DESCRIPTORS && !__webpack_require__(102)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
	
	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);
	
	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    $replacer = replacer = args[1];
	    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    if (!isArray(replacer)) replacer = function (key, value) {
	      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(79)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	var META = __webpack_require__(73)('meta');
	var isObject = __webpack_require__(82);
	var has = __webpack_require__(69);
	var setDesc = __webpack_require__(80).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(85)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(72);
	var core = __webpack_require__(76);
	var LIBRARY = __webpack_require__(102);
	var wksExt = __webpack_require__(124);
	var defineProperty = __webpack_require__(80).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(108);
	var gOPS = __webpack_require__(131);
	var pIE = __webpack_require__(132);
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};


/***/ }),
/* 131 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 132 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(112);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(110);
	var gOPN = __webpack_require__(135).f;
	var toString = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(109);
	var hiddenKeys = __webpack_require__(116).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(132);
	var createDesc = __webpack_require__(88);
	var toIObject = __webpack_require__(110);
	var toPrimitive = __webpack_require__(87);
	var has = __webpack_require__(69);
	var IE8_DOM_DEFINE = __webpack_require__(83);
	var gOPD = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(84) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ }),
/* 137 */
/***/ (function(module, exports) {



/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(129)('asyncIterator');


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(129)('observable');


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(141);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(145);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(95);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(142), __esModule: true };

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(143);
	module.exports = __webpack_require__(76).Object.setPrototypeOf;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(75);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(144).set });


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(82);
	var anObject = __webpack_require__(81);
	var check = function (O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = __webpack_require__(77)(Function.call, __webpack_require__(136).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(146), __esModule: true };

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(147);
	var $Object = __webpack_require__(76).Object;
	module.exports = function create(P, D) {
	  return $Object.create(P, D);
	};


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(75);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(106) });


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toConsumableArray2 = __webpack_require__(149);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	exports.default = getMuiTheme;
	
	var _lodash = __webpack_require__(159);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _colorManipulator = __webpack_require__(160);
	
	var _lightBaseTheme = __webpack_require__(162);
	
	var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);
	
	var _zIndex = __webpack_require__(165);
	
	var _zIndex2 = _interopRequireDefault(_zIndex);
	
	var _autoprefixer = __webpack_require__(166);
	
	var _autoprefixer2 = _interopRequireDefault(_autoprefixer);
	
	var _callOnce = __webpack_require__(198);
	
	var _callOnce2 = _interopRequireDefault(_callOnce);
	
	var _rtl = __webpack_require__(199);
	
	var _rtl2 = _interopRequireDefault(_rtl);
	
	var _compose = __webpack_require__(203);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	var _typography = __webpack_require__(204);
	
	var _typography2 = _interopRequireDefault(_typography);
	
	var _colors = __webpack_require__(163);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Get the MUI theme corresponding to a base theme.
	 * It's possible to override the computed theme values
	 * by providing a second argument. The calculated
	 * theme will be deeply merged with the second argument.
	 */
	function getMuiTheme(muiTheme) {
	  for (var _len = arguments.length, more = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    more[_key - 1] = arguments[_key];
	  }
	
	  muiTheme = _lodash2.default.apply(undefined, [{
	    zIndex: _zIndex2.default,
	    isRtl: false,
	    userAgent: undefined
	  }, _lightBaseTheme2.default, muiTheme].concat(more));
	
	  var _muiTheme = muiTheme,
	      spacing = _muiTheme.spacing,
	      fontFamily = _muiTheme.fontFamily,
	      palette = _muiTheme.palette;
	
	  var baseTheme = { spacing: spacing, fontFamily: fontFamily, palette: palette };
	
	  muiTheme = (0, _lodash2.default)({
	    appBar: {
	      color: palette.primary1Color,
	      textColor: palette.alternateTextColor,
	      height: spacing.desktopKeylineIncrement,
	      titleFontWeight: _typography2.default.fontWeightNormal,
	      padding: spacing.desktopGutter
	    },
	    avatar: {
	      color: palette.canvasColor,
	      backgroundColor: (0, _colorManipulator.emphasize)(palette.canvasColor, 0.26)
	    },
	    badge: {
	      color: palette.alternateTextColor,
	      textColor: palette.textColor,
	      primaryColor: palette.primary1Color,
	      primaryTextColor: palette.alternateTextColor,
	      secondaryColor: palette.accent1Color,
	      secondaryTextColor: palette.alternateTextColor,
	      fontWeight: _typography2.default.fontWeightMedium
	    },
	    bottomNavigation: {
	      backgroundColor: palette.canvasColor,
	      unselectedColor: (0, _colorManipulator.fade)(palette.textColor, 0.54),
	      selectedColor: palette.primary1Color,
	      height: 56,
	      unselectedFontSize: 12,
	      selectedFontSize: 14
	    },
	    button: {
	      height: 36,
	      minWidth: 88,
	      iconButtonSize: spacing.iconSize * 2
	    },
	    card: {
	      titleColor: (0, _colorManipulator.fade)(palette.textColor, 0.87),
	      subtitleColor: (0, _colorManipulator.fade)(palette.textColor, 0.54),
	      fontWeight: _typography2.default.fontWeightMedium
	    },
	    cardMedia: {
	      color: _colors.darkWhite,
	      overlayContentBackground: _colors.lightBlack,
	      titleColor: _colors.darkWhite,
	      subtitleColor: _colors.lightWhite
	    },
	    cardText: {
	      textColor: palette.textColor
	    },
	    checkbox: {
	      boxColor: palette.textColor,
	      checkedColor: palette.primary1Color,
	      requiredColor: palette.primary1Color,
	      disabledColor: palette.disabledColor,
	      labelColor: palette.textColor,
	      labelDisabledColor: palette.disabledColor
	    },
	    chip: {
	      backgroundColor: (0, _colorManipulator.emphasize)(palette.canvasColor, 0.12),
	      deleteIconColor: (0, _colorManipulator.fade)(palette.textColor, 0.26),
	      textColor: (0, _colorManipulator.fade)(palette.textColor, 0.87),
	      fontSize: 14,
	      fontWeight: _typography2.default.fontWeightNormal,
	      shadow: '0 1px 6px ' + (0, _colorManipulator.fade)(palette.shadowColor, 0.12) + ',\n        0 1px 4px ' + (0, _colorManipulator.fade)(palette.shadowColor, 0.12)
	    },
	    datePicker: {
	      color: palette.primary1Color,
	      textColor: palette.alternateTextColor,
	      calendarTextColor: palette.textColor,
	      selectColor: palette.primary2Color,
	      selectTextColor: palette.alternateTextColor,
	      calendarYearBackgroundColor: palette.canvasColor,
	      headerColor: palette.pickerHeaderColor || palette.primary1Color
	    },
	    dialog: {
	      titleFontSize: 22,
	      bodyFontSize: 16,
	      bodyColor: (0, _colorManipulator.fade)(palette.textColor, 0.6)
	    },
	    dropDownMenu: {
	      accentColor: palette.borderColor
	    },
	    enhancedButton: {
	      tapHighlightColor: _colors.transparent
	    },
	    flatButton: {
	      color: _colors.transparent,
	      buttonFilterColor: '#999999',
	      disabledTextColor: (0, _colorManipulator.fade)(palette.textColor, 0.3),
	      textColor: palette.textColor,
	      primaryTextColor: palette.primary1Color,
	      secondaryTextColor: palette.accent1Color,
	      fontSize: _typography2.default.fontStyleButtonFontSize,
	      fontWeight: _typography2.default.fontWeightMedium
	    },
	    floatingActionButton: {
	      buttonSize: 56,
	      miniSize: 40,
	      color: palette.primary1Color,
	      iconColor: palette.alternateTextColor,
	      secondaryColor: palette.accent1Color,
	      secondaryIconColor: palette.alternateTextColor,
	      disabledTextColor: palette.disabledColor,
	      disabledColor: (0, _colorManipulator.emphasize)(palette.canvasColor, 0.12)
	    },
	    gridTile: {
	      textColor: _colors.white
	    },
	    icon: {
	      color: palette.canvasColor,
	      backgroundColor: palette.primary1Color
	    },
	    inkBar: {
	      backgroundColor: palette.accent1Color
	    },
	    drawer: {
	      width: spacing.desktopKeylineIncrement * 4,
	      color: palette.canvasColor
	    },
	    listItem: {
	      nestedLevelDepth: 18,
	      secondaryTextColor: palette.secondaryTextColor,
	      leftIconColor: _colors.grey600,
	      rightIconColor: _colors.grey600
	    },
	    menu: {
	      backgroundColor: palette.canvasColor,
	      containerBackgroundColor: palette.canvasColor
	    },
	    menuItem: {
	      dataHeight: 32,
	      height: 48,
	      hoverColor: (0, _colorManipulator.fade)(palette.textColor, 0.1),
	      padding: spacing.desktopGutter,
	      selectedTextColor: palette.accent1Color,
	      rightIconDesktopFill: _colors.grey600
	    },
	    menuSubheader: {
	      padding: spacing.desktopGutter,
	      borderColor: palette.borderColor,
	      textColor: palette.primary1Color
	    },
	    overlay: {
	      backgroundColor: _colors.lightBlack
	    },
	    paper: {
	      color: palette.textColor,
	      backgroundColor: palette.canvasColor,
	      zDepthShadows: [[1, 6, 0.12, 1, 4, 0.12], [3, 10, 0.16, 3, 10, 0.23], [10, 30, 0.19, 6, 10, 0.23], [14, 45, 0.25, 10, 18, 0.22], [19, 60, 0.30, 15, 20, 0.22]].map(function (d) {
	        return '0 ' + d[0] + 'px ' + d[1] + 'px ' + (0, _colorManipulator.fade)(palette.shadowColor, d[2]) + ',\n         0 ' + d[3] + 'px ' + d[4] + 'px ' + (0, _colorManipulator.fade)(palette.shadowColor, d[5]);
	      })
	    },
	    radioButton: {
	      borderColor: palette.textColor,
	      backgroundColor: palette.alternateTextColor,
	      checkedColor: palette.primary1Color,
	      requiredColor: palette.primary1Color,
	      disabledColor: palette.disabledColor,
	      size: 24,
	      labelColor: palette.textColor,
	      labelDisabledColor: palette.disabledColor
	    },
	    raisedButton: {
	      color: palette.alternateTextColor,
	      textColor: palette.textColor,
	      primaryColor: palette.primary1Color,
	      primaryTextColor: palette.alternateTextColor,
	      secondaryColor: palette.accent1Color,
	      secondaryTextColor: palette.alternateTextColor,
	      disabledColor: (0, _colorManipulator.darken)(palette.alternateTextColor, 0.1),
	      disabledTextColor: (0, _colorManipulator.fade)(palette.textColor, 0.3),
	      fontSize: _typography2.default.fontStyleButtonFontSize,
	      fontWeight: _typography2.default.fontWeightMedium
	    },
	    refreshIndicator: {
	      strokeColor: palette.borderColor,
	      loadingStrokeColor: palette.primary1Color
	    },
	    ripple: {
	      color: (0, _colorManipulator.fade)(palette.textColor, 0.87)
	    },
	    slider: {
	      trackSize: 2,
	      trackColor: palette.primary3Color,
	      trackColorSelected: palette.accent3Color,
	      handleSize: 12,
	      handleSizeDisabled: 8,
	      handleSizeActive: 18,
	      handleColorZero: palette.primary3Color,
	      handleFillColor: palette.alternateTextColor,
	      selectionColor: palette.primary1Color,
	      rippleColor: palette.primary1Color
	    },
	    snackbar: {
	      textColor: palette.alternateTextColor,
	      backgroundColor: palette.textColor,
	      actionColor: palette.accent1Color
	    },
	    subheader: {
	      color: (0, _colorManipulator.fade)(palette.textColor, 0.54),
	      fontWeight: _typography2.default.fontWeightMedium
	    },
	    stepper: {
	      backgroundColor: 'transparent',
	      hoverBackgroundColor: (0, _colorManipulator.fade)(_colors.black, 0.06),
	      iconColor: palette.primary1Color,
	      hoveredIconColor: _colors.grey700,
	      inactiveIconColor: _colors.grey500,
	      textColor: (0, _colorManipulator.fade)(_colors.black, 0.87),
	      disabledTextColor: (0, _colorManipulator.fade)(_colors.black, 0.26),
	      connectorLineColor: _colors.grey400
	    },
	    svgIcon: {
	      color: palette.textColor
	    },
	    table: {
	      backgroundColor: palette.canvasColor
	    },
	    tableFooter: {
	      borderColor: palette.borderColor,
	      textColor: palette.accent3Color
	    },
	    tableHeader: {
	      borderColor: palette.borderColor
	    },
	    tableHeaderColumn: {
	      textColor: palette.accent3Color,
	      height: 56,
	      spacing: 24
	    },
	    tableRow: {
	      hoverColor: palette.accent2Color,
	      stripeColor: (0, _colorManipulator.fade)((0, _colorManipulator.lighten)(palette.primary1Color, 0.5), 0.4),
	      selectedColor: palette.borderColor,
	      textColor: palette.textColor,
	      borderColor: palette.borderColor,
	      height: 48
	    },
	    tableRowColumn: {
	      height: 48,
	      spacing: 24
	    },
	    tabs: {
	      backgroundColor: palette.primary1Color,
	      textColor: (0, _colorManipulator.fade)(palette.alternateTextColor, 0.7),
	      selectedTextColor: palette.alternateTextColor
	    },
	    textField: {
	      textColor: palette.textColor,
	      hintColor: palette.disabledColor,
	      floatingLabelColor: palette.disabledColor,
	      disabledTextColor: palette.disabledColor,
	      errorColor: _colors.red500,
	      focusColor: palette.primary1Color,
	      backgroundColor: 'transparent',
	      borderColor: palette.borderColor
	    },
	    timePicker: {
	      color: palette.alternateTextColor,
	      textColor: palette.alternateTextColor,
	      accentColor: palette.primary1Color,
	      clockColor: palette.textColor,
	      clockCircleColor: palette.clockCircleColor,
	      headerColor: palette.pickerHeaderColor || palette.primary1Color,
	      selectColor: palette.primary2Color,
	      selectTextColor: palette.alternateTextColor
	    },
	    toggle: {
	      thumbOnColor: palette.primary1Color,
	      thumbOffColor: palette.accent2Color,
	      thumbDisabledColor: palette.borderColor,
	      thumbRequiredColor: palette.primary1Color,
	      trackOnColor: (0, _colorManipulator.fade)(palette.primary1Color, 0.5),
	      trackOffColor: palette.primary3Color,
	      trackDisabledColor: palette.primary3Color,
	      labelColor: palette.textColor,
	      labelDisabledColor: palette.disabledColor,
	      trackRequiredColor: (0, _colorManipulator.fade)(palette.primary1Color, 0.5)
	    },
	    toolbar: {
	      color: (0, _colorManipulator.fade)(palette.textColor, 0.54),
	      hoverColor: (0, _colorManipulator.fade)(palette.textColor, 0.87),
	      backgroundColor: (0, _colorManipulator.darken)(palette.accent2Color, 0.05),
	      height: 56,
	      titleFontSize: 20,
	      iconColor: (0, _colorManipulator.fade)(palette.textColor, 0.4),
	      separatorColor: (0, _colorManipulator.fade)(palette.textColor, 0.175),
	      menuHoverColor: (0, _colorManipulator.fade)(palette.textColor, 0.1)
	    },
	    tooltip: {
	      color: _colors.white,
	      rippleBackgroundColor: _colors.grey700,
	      opacity: 0.9
	    }
	  }, muiTheme, {
	    baseTheme: baseTheme, // To provide backward compatibility.
	    rawTheme: baseTheme // To provide backward compatibility.
	  });
	
	  var transformers = [_autoprefixer2.default, _rtl2.default, _callOnce2.default].map(function (t) {
	    return t(muiTheme);
	  }).filter(function (t) {
	    return t;
	  });
	
	  muiTheme.prepareStyles = _compose2.default.apply(undefined, (0, _toConsumableArray3.default)(transformers));
	
	  return muiTheme;
	}

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(150);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }
	
	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(151), __esModule: true };

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(98);
	__webpack_require__(152);
	module.exports = __webpack_require__(76).Array.from;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var ctx = __webpack_require__(77);
	var $export = __webpack_require__(75);
	var toObject = __webpack_require__(66);
	var call = __webpack_require__(153);
	var isArrayIter = __webpack_require__(154);
	var toLength = __webpack_require__(114);
	var createProperty = __webpack_require__(155);
	var getIterFn = __webpack_require__(156);
	
	$export($export.S + $export.F * !__webpack_require__(158)(function (iter) { Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	    var O = toObject(arrayLike);
	    var C = typeof this == 'function' ? this : Array;
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var index = 0;
	    var iterFn = getIterFn(O);
	    var length, result, step, iterator;
	    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(81);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(104);
	var ITERATOR = __webpack_require__(119)('iterator');
	var ArrayProto = Array.prototype;
	
	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(80);
	var createDesc = __webpack_require__(88);
	
	module.exports = function (object, index, value) {
	  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	var classof = __webpack_require__(157);
	var ITERATOR = __webpack_require__(119)('iterator');
	var Iterators = __webpack_require__(104);
	module.exports = __webpack_require__(76).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(112);
	var TAG = __webpack_require__(119)('toStringTag');
	// ES3 wrong here
	var ARG = cof(function () { return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};
	
	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	var ITERATOR = __webpack_require__(119)('iterator');
	var SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(riter, function () { throw 2; });
	} catch (e) { /* empty */ }
	
	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;
	
	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	
	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}());
	
	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */
	function addMapEntry(map, pair) {
	  // Don't return `map.set` because it's not chainable in IE 11.
	  map.set(pair[0], pair[1]);
	  return map;
	}
	
	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */
	function addSetEntry(set, value) {
	  // Don't return `set.add` because it's not chainable in IE 11.
	  set.add(value);
	  return set;
	}
	
	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}
	
	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0;
	
	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}
	
	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array ? array.length : 0;
	
	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}
	
	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	
	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	
	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}
	
	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    Symbol = root.Symbol,
	    Uint8Array = root.Uint8Array,
	    getPrototype = overArg(Object.getPrototypeOf, Object),
	    objectCreate = Object.create,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    splice = arrayProto.splice;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols,
	    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
	    nativeKeys = overArg(Object.keys, Object),
	    nativeMax = Math.max;
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView'),
	    Map = getNative(root, 'Map'),
	    Promise = getNative(root, 'Promise'),
	    Set = getNative(root, 'Set'),
	    WeakMap = getNative(root, 'WeakMap'),
	    nativeCreate = getNative(Object, 'create');
	
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}
	
	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}
	
	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	}
	
	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}
	
	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}
	
	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}
	
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache) {
	    var pairs = cache.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      return this;
	    }
	    cache = this.__data__ = new MapCache(pairs);
	  }
	  cache.set(key, value);
	  return this;
	}
	
	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];
	
	  var length = result.length,
	      skipIndexes = !!length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * This function is like `assignValue` except that it doesn't assign
	 * `undefined` values.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignMergeValue(object, key, value) {
	  if ((value !== undefined && !eq(object[key], value)) ||
	      (typeof key == 'number' && value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}
	
	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}
	
	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {boolean} [isFull] Specify a clone including symbols.
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
	  var result;
	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;
	
	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      if (isHostObject(value)) {
	        return object ? value : {};
	      }
	      result = initCloneObject(isFunc ? {} : value);
	      if (!isDeep) {
	        return copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, baseClone, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);
	
	  if (!isArr) {
	    var props = isFull ? getAllKeys(value) : keys(value);
	  }
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
	  });
	  return result;
	}
	
	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} prototype The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	function baseCreate(proto) {
	  return isObject(proto) ? objectCreate(proto) : {};
	}
	
	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}
	
	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];
	
	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * The base implementation of `_.merge` without support for multiple sources.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMerge(object, source, srcIndex, customizer, stack) {
	  if (object === source) {
	    return;
	  }
	  if (!(isArray(source) || isTypedArray(source))) {
	    var props = baseKeysIn(source);
	  }
	  arrayEach(props || source, function(srcValue, key) {
	    if (props) {
	      key = srcValue;
	      srcValue = source[key];
	    }
	    if (isObject(srcValue)) {
	      stack || (stack = new Stack);
	      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	    }
	    else {
	      var newValue = customizer
	        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
	        : undefined;
	
	      if (newValue === undefined) {
	        newValue = srcValue;
	      }
	      assignMergeValue(object, key, newValue);
	    }
	  });
	}
	
	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	  var objValue = object[key],
	      srcValue = source[key],
	      stacked = stack.get(srcValue);
	
	  if (stacked) {
	    assignMergeValue(object, key, stacked);
	    return;
	  }
	  var newValue = customizer
	    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	    : undefined;
	
	  var isCommon = newValue === undefined;
	
	  if (isCommon) {
	    newValue = srcValue;
	    if (isArray(srcValue) || isTypedArray(srcValue)) {
	      if (isArray(objValue)) {
	        newValue = objValue;
	      }
	      else if (isArrayLikeObject(objValue)) {
	        newValue = copyArray(objValue);
	      }
	      else {
	        isCommon = false;
	        newValue = baseClone(srcValue, true);
	      }
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      if (isArguments(objValue)) {
	        newValue = toPlainObject(objValue);
	      }
	      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
	        isCommon = false;
	        newValue = baseClone(srcValue, true);
	      }
	      else {
	        newValue = objValue;
	      }
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    stack.set(srcValue, newValue);
	    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	    stack['delete'](srcValue);
	  }
	  assignMergeValue(object, key, newValue);
	}
	
	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);
	
	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}
	
	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var result = new buffer.constructor(buffer.length);
	  buffer.copy(result);
	  return result;
	}
	
	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}
	
	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}
	
	/**
	 * Creates a clone of `map`.
	 *
	 * @private
	 * @param {Object} map The map to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned map.
	 */
	function cloneMap(map, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
	  return arrayReduce(array, addMapEntry, new map.constructor);
	}
	
	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}
	
	/**
	 * Creates a clone of `set`.
	 *
	 * @private
	 * @param {Object} set The set to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned set.
	 */
	function cloneSet(set, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
	  return arrayReduce(array, addSetEntry, new set.constructor);
	}
	
	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}
	
	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}
	
	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;
	
	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}
	
	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	
	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;
	
	    assignValue(object, key, newValue === undefined ? source[key] : newValue);
	  }
	  return object;
	}
	
	/**
	 * Copies own symbol properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}
	
	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;
	
	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;
	
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}
	
	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	/**
	 * Creates an array of the own enumerable symbol properties of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;
	
	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge < 14, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;
	
	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}
	
	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = array.constructor(length);
	
	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}
	
	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}
	
	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, cloneFunc, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneArrayBuffer(object);
	
	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);
	
	    case dataViewTag:
	      return cloneDataView(object, isDeep);
	
	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      return cloneTypedArray(object, isDeep);
	
	    case mapTag:
	      return cloneMap(object, isDeep, cloneFunc);
	
	    case numberTag:
	    case stringTag:
	      return new Ctor(object);
	
	    case regexpTag:
	      return cloneRegExp(object);
	
	    case setTag:
	      return cloneSet(object, isDeep, cloneFunc);
	
	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}
	
	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}
	
	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
	/**
	 * Converts `value` to a plain object flattening inherited enumerable string
	 * keyed properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return copyObject(value, keysIn(value));
	}
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}
	
	/**
	 * This method is like `_.assign` except that it recursively merges own and
	 * inherited enumerable string keyed properties of source objects into the
	 * destination object. Source properties that resolve to `undefined` are
	 * skipped if a destination value exists. Array and plain object properties
	 * are merged recursively. Other objects and value types are overridden by
	 * assignment. Source objects are applied from left to right. Subsequent
	 * sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.5.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = {
	 *   'a': [{ 'b': 2 }, { 'd': 4 }]
	 * };
	 *
	 * var other = {
	 *   'a': [{ 'c': 3 }, { 'e': 5 }]
	 * };
	 *
	 * _.merge(object, other);
	 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
	 */
	var merge = createAssigner(function(object, source, srcIndex) {
	  baseMerge(object, source, srcIndex);
	});
	
	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}
	
	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = merge;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(38)(module)))

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.convertColorToString = convertColorToString;
	exports.convertHexToRGB = convertHexToRGB;
	exports.decomposeColor = decomposeColor;
	exports.getContrastRatio = getContrastRatio;
	exports.getLuminance = getLuminance;
	exports.emphasize = emphasize;
	exports.fade = fade;
	exports.darken = darken;
	exports.lighten = lighten;
	
	var _warning = __webpack_require__(161);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Returns a number whose value is limited to the given range.
	 *
	 * @param {number} value The value to be clamped
	 * @param {number} min The lower boundary of the output range
	 * @param {number} max The upper boundary of the output range
	 * @returns {number} A number in the range [min, max]
	 */
	function clamp(value, min, max) {
	  if (value < min) {
	    return min;
	  }
	  if (value > max) {
	    return max;
	  }
	  return value;
	}
	
	/**
	 * Converts a color object with type and values to a string.
	 *
	 * @param {object} color - Decomposed color
	 * @param {string} color.type - One of, 'rgb', 'rgba', 'hsl', 'hsla'
	 * @param {array} color.values - [n,n,n] or [n,n,n,n]
	 * @returns {string} A CSS color string
	 */
	function convertColorToString(color) {
	  var type = color.type,
	      values = color.values;
	
	
	  if (type.indexOf('rgb') > -1) {
	    // Only convert the first 3 values to int (i.e. not alpha)
	    for (var i = 0; i < 3; i++) {
	      values[i] = parseInt(values[i]);
	    }
	  }
	
	  var colorString = void 0;
	
	  if (type.indexOf('hsl') > -1) {
	    colorString = color.type + '(' + values[0] + ', ' + values[1] + '%, ' + values[2] + '%';
	  } else {
	    colorString = color.type + '(' + values[0] + ', ' + values[1] + ', ' + values[2];
	  }
	
	  if (values.length === 4) {
	    colorString += ', ' + color.values[3] + ')';
	  } else {
	    colorString += ')';
	  }
	
	  return colorString;
	}
	
	/**
	 * Converts a color from CSS hex format to CSS rgb format.
	 *
	 *  @param {string} color - Hex color, i.e. #nnn or #nnnnnn
	 *  @returns {string} A CSS rgb color string
	 */
	function convertHexToRGB(color) {
	  if (color.length === 4) {
	    var extendedColor = '#';
	    for (var i = 1; i < color.length; i++) {
	      extendedColor += color.charAt(i) + color.charAt(i);
	    }
	    color = extendedColor;
	  }
	
	  var values = {
	    r: parseInt(color.substr(1, 2), 16),
	    g: parseInt(color.substr(3, 2), 16),
	    b: parseInt(color.substr(5, 2), 16)
	  };
	
	  return 'rgb(' + values.r + ', ' + values.g + ', ' + values.b + ')';
	}
	
	/**
	 * Returns an object with the type and values of a color.
	 *
	 * Note: Does not support rgb % values and color names.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @returns {{type: string, values: number[]}} A MUI color object
	 */
	function decomposeColor(color) {
	  if (color.charAt(0) === '#') {
	    return decomposeColor(convertHexToRGB(color));
	  }
	
	  var marker = color.indexOf('(');
	
	  process.env.NODE_ENV !== "production" ? (0, _warning2.default)(marker !== -1, 'Material-UI: The ' + color + ' color was not parsed correctly,\n  because it has an unsupported format (color name or RGB %). This may cause issues in component rendering.') : void 0;
	
	  var type = color.substring(0, marker);
	  var values = color.substring(marker + 1, color.length - 1).split(',');
	  values = values.map(function (value) {
	    return parseFloat(value);
	  });
	
	  return { type: type, values: values };
	}
	
	/**
	 * Calculates the contrast ratio between two colors.
	 *
	 * Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
	 *
	 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @returns {number} A contrast ratio value in the range 0 - 21 with 2 digit precision.
	 */
	function getContrastRatio(foreground, background) {
	  var lumA = getLuminance(foreground);
	  var lumB = getLuminance(background);
	  var contrastRatio = (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
	
	  return Number(contrastRatio.toFixed(2)); // Truncate at two digits
	}
	
	/**
	 * The relative brightness of any point in a color space,
	 * normalized to 0 for darkest black and 1 for lightest white.
	 *
	 * Formula: https://www.w3.org/WAI/GL/wiki/Relative_luminance
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @returns {number} The relative brightness of the color in the range 0 - 1
	 */
	function getLuminance(color) {
	  color = decomposeColor(color);
	
	  if (color.type.indexOf('rgb') > -1) {
	    var rgb = color.values.map(function (val) {
	      val /= 255; // normalized
	      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
	    });
	    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3)); // Truncate at 3 digits
	  } else if (color.type.indexOf('hsl') > -1) {
	    return color.values[2] / 100;
	  }
	}
	
	/**
	 * Darken or lighten a colour, depending on its luminance.
	 * Light colors are darkened, dark colors are lightened.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */
	function emphasize(color) {
	  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;
	
	  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
	}
	
	/**
	 * Set the absolute transparency of a color.
	 * Any existing alpha values are overwritten.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {number} value - value to set the alpha channel to in the range 0 -1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */
	function fade(color, value) {
	  color = decomposeColor(color);
	  value = clamp(value, 0, 1);
	
	  if (color.type === 'rgb' || color.type === 'hsl') {
	    color.type += 'a';
	  }
	  color.values[3] = value;
	
	  return convertColorToString(color);
	}
	
	/**
	 * Darkens a color.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {number} coefficient - multiplier in the range 0 - 1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */
	function darken(color, coefficient) {
	  color = decomposeColor(color);
	  coefficient = clamp(coefficient, 0, 1);
	
	  if (color.type.indexOf('hsl') > -1) {
	    color.values[2] *= 1 - coefficient;
	  } else if (color.type.indexOf('rgb') > -1) {
	    for (var i = 0; i < 3; i++) {
	      color.values[i] *= 1 - coefficient;
	    }
	  }
	  return convertColorToString(color);
	}
	
	/**
	 * Lightens a color.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {number} coefficient - multiplier in the range 0 - 1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */
	function lighten(color, coefficient) {
	  color = decomposeColor(color);
	  coefficient = clamp(coefficient, 0, 1);
	
	  if (color.type.indexOf('hsl') > -1) {
	    color.values[2] += (100 - color.values[2]) * coefficient;
	  } else if (color.type.indexOf('rgb') > -1) {
	    for (var i = 0; i < 3; i++) {
	      color.values[i] += (255 - color.values[i]) * coefficient;
	    }
	  }
	
	  return convertColorToString(color);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = function() {};
	
	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }
	
	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}
	
	module.exports = warning;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _colors = __webpack_require__(163);
	
	var _colorManipulator = __webpack_require__(160);
	
	var _spacing = __webpack_require__(164);
	
	var _spacing2 = _interopRequireDefault(_spacing);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 *  Light Theme is the default theme used in material-ui. It is guaranteed to
	 *  have all theme variables needed for every component. Variables not defined
	 *  in a custom theme will default to these values.
	 */
	exports.default = {
	  spacing: _spacing2.default,
	  fontFamily: 'Roboto, sans-serif',
	  borderRadius: 2,
	  palette: {
	    primary1Color: _colors.cyan500,
	    primary2Color: _colors.cyan700,
	    primary3Color: _colors.grey400,
	    accent1Color: _colors.pinkA200,
	    accent2Color: _colors.grey100,
	    accent3Color: _colors.grey500,
	    textColor: _colors.darkBlack,
	    secondaryTextColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.54),
	    alternateTextColor: _colors.white,
	    canvasColor: _colors.white,
	    borderColor: _colors.grey300,
	    disabledColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.3),
	    pickerHeaderColor: _colors.cyan500,
	    clockCircleColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.07),
	    shadowColor: _colors.fullBlack
	  }
	}; /**
	    * NB: If you update this file, please also update `docs/src/app/customization/Themes.js`
	    */

/***/ }),
/* 163 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var red50 = exports.red50 = '#ffebee';
	var red100 = exports.red100 = '#ffcdd2';
	var red200 = exports.red200 = '#ef9a9a';
	var red300 = exports.red300 = '#e57373';
	var red400 = exports.red400 = '#ef5350';
	var red500 = exports.red500 = '#f44336';
	var red600 = exports.red600 = '#e53935';
	var red700 = exports.red700 = '#d32f2f';
	var red800 = exports.red800 = '#c62828';
	var red900 = exports.red900 = '#b71c1c';
	var redA100 = exports.redA100 = '#ff8a80';
	var redA200 = exports.redA200 = '#ff5252';
	var redA400 = exports.redA400 = '#ff1744';
	var redA700 = exports.redA700 = '#d50000';
	
	var pink50 = exports.pink50 = '#fce4ec';
	var pink100 = exports.pink100 = '#f8bbd0';
	var pink200 = exports.pink200 = '#f48fb1';
	var pink300 = exports.pink300 = '#f06292';
	var pink400 = exports.pink400 = '#ec407a';
	var pink500 = exports.pink500 = '#e91e63';
	var pink600 = exports.pink600 = '#d81b60';
	var pink700 = exports.pink700 = '#c2185b';
	var pink800 = exports.pink800 = '#ad1457';
	var pink900 = exports.pink900 = '#880e4f';
	var pinkA100 = exports.pinkA100 = '#ff80ab';
	var pinkA200 = exports.pinkA200 = '#ff4081';
	var pinkA400 = exports.pinkA400 = '#f50057';
	var pinkA700 = exports.pinkA700 = '#c51162';
	
	var purple50 = exports.purple50 = '#f3e5f5';
	var purple100 = exports.purple100 = '#e1bee7';
	var purple200 = exports.purple200 = '#ce93d8';
	var purple300 = exports.purple300 = '#ba68c8';
	var purple400 = exports.purple400 = '#ab47bc';
	var purple500 = exports.purple500 = '#9c27b0';
	var purple600 = exports.purple600 = '#8e24aa';
	var purple700 = exports.purple700 = '#7b1fa2';
	var purple800 = exports.purple800 = '#6a1b9a';
	var purple900 = exports.purple900 = '#4a148c';
	var purpleA100 = exports.purpleA100 = '#ea80fc';
	var purpleA200 = exports.purpleA200 = '#e040fb';
	var purpleA400 = exports.purpleA400 = '#d500f9';
	var purpleA700 = exports.purpleA700 = '#aa00ff';
	
	var deepPurple50 = exports.deepPurple50 = '#ede7f6';
	var deepPurple100 = exports.deepPurple100 = '#d1c4e9';
	var deepPurple200 = exports.deepPurple200 = '#b39ddb';
	var deepPurple300 = exports.deepPurple300 = '#9575cd';
	var deepPurple400 = exports.deepPurple400 = '#7e57c2';
	var deepPurple500 = exports.deepPurple500 = '#673ab7';
	var deepPurple600 = exports.deepPurple600 = '#5e35b1';
	var deepPurple700 = exports.deepPurple700 = '#512da8';
	var deepPurple800 = exports.deepPurple800 = '#4527a0';
	var deepPurple900 = exports.deepPurple900 = '#311b92';
	var deepPurpleA100 = exports.deepPurpleA100 = '#b388ff';
	var deepPurpleA200 = exports.deepPurpleA200 = '#7c4dff';
	var deepPurpleA400 = exports.deepPurpleA400 = '#651fff';
	var deepPurpleA700 = exports.deepPurpleA700 = '#6200ea';
	
	var indigo50 = exports.indigo50 = '#e8eaf6';
	var indigo100 = exports.indigo100 = '#c5cae9';
	var indigo200 = exports.indigo200 = '#9fa8da';
	var indigo300 = exports.indigo300 = '#7986cb';
	var indigo400 = exports.indigo400 = '#5c6bc0';
	var indigo500 = exports.indigo500 = '#3f51b5';
	var indigo600 = exports.indigo600 = '#3949ab';
	var indigo700 = exports.indigo700 = '#303f9f';
	var indigo800 = exports.indigo800 = '#283593';
	var indigo900 = exports.indigo900 = '#1a237e';
	var indigoA100 = exports.indigoA100 = '#8c9eff';
	var indigoA200 = exports.indigoA200 = '#536dfe';
	var indigoA400 = exports.indigoA400 = '#3d5afe';
	var indigoA700 = exports.indigoA700 = '#304ffe';
	
	var blue50 = exports.blue50 = '#e3f2fd';
	var blue100 = exports.blue100 = '#bbdefb';
	var blue200 = exports.blue200 = '#90caf9';
	var blue300 = exports.blue300 = '#64b5f6';
	var blue400 = exports.blue400 = '#42a5f5';
	var blue500 = exports.blue500 = '#2196f3';
	var blue600 = exports.blue600 = '#1e88e5';
	var blue700 = exports.blue700 = '#1976d2';
	var blue800 = exports.blue800 = '#1565c0';
	var blue900 = exports.blue900 = '#0d47a1';
	var blueA100 = exports.blueA100 = '#82b1ff';
	var blueA200 = exports.blueA200 = '#448aff';
	var blueA400 = exports.blueA400 = '#2979ff';
	var blueA700 = exports.blueA700 = '#2962ff';
	
	var lightBlue50 = exports.lightBlue50 = '#e1f5fe';
	var lightBlue100 = exports.lightBlue100 = '#b3e5fc';
	var lightBlue200 = exports.lightBlue200 = '#81d4fa';
	var lightBlue300 = exports.lightBlue300 = '#4fc3f7';
	var lightBlue400 = exports.lightBlue400 = '#29b6f6';
	var lightBlue500 = exports.lightBlue500 = '#03a9f4';
	var lightBlue600 = exports.lightBlue600 = '#039be5';
	var lightBlue700 = exports.lightBlue700 = '#0288d1';
	var lightBlue800 = exports.lightBlue800 = '#0277bd';
	var lightBlue900 = exports.lightBlue900 = '#01579b';
	var lightBlueA100 = exports.lightBlueA100 = '#80d8ff';
	var lightBlueA200 = exports.lightBlueA200 = '#40c4ff';
	var lightBlueA400 = exports.lightBlueA400 = '#00b0ff';
	var lightBlueA700 = exports.lightBlueA700 = '#0091ea';
	
	var cyan50 = exports.cyan50 = '#e0f7fa';
	var cyan100 = exports.cyan100 = '#b2ebf2';
	var cyan200 = exports.cyan200 = '#80deea';
	var cyan300 = exports.cyan300 = '#4dd0e1';
	var cyan400 = exports.cyan400 = '#26c6da';
	var cyan500 = exports.cyan500 = '#00bcd4';
	var cyan600 = exports.cyan600 = '#00acc1';
	var cyan700 = exports.cyan700 = '#0097a7';
	var cyan800 = exports.cyan800 = '#00838f';
	var cyan900 = exports.cyan900 = '#006064';
	var cyanA100 = exports.cyanA100 = '#84ffff';
	var cyanA200 = exports.cyanA200 = '#18ffff';
	var cyanA400 = exports.cyanA400 = '#00e5ff';
	var cyanA700 = exports.cyanA700 = '#00b8d4';
	
	var teal50 = exports.teal50 = '#e0f2f1';
	var teal100 = exports.teal100 = '#b2dfdb';
	var teal200 = exports.teal200 = '#80cbc4';
	var teal300 = exports.teal300 = '#4db6ac';
	var teal400 = exports.teal400 = '#26a69a';
	var teal500 = exports.teal500 = '#009688';
	var teal600 = exports.teal600 = '#00897b';
	var teal700 = exports.teal700 = '#00796b';
	var teal800 = exports.teal800 = '#00695c';
	var teal900 = exports.teal900 = '#004d40';
	var tealA100 = exports.tealA100 = '#a7ffeb';
	var tealA200 = exports.tealA200 = '#64ffda';
	var tealA400 = exports.tealA400 = '#1de9b6';
	var tealA700 = exports.tealA700 = '#00bfa5';
	
	var green50 = exports.green50 = '#e8f5e9';
	var green100 = exports.green100 = '#c8e6c9';
	var green200 = exports.green200 = '#a5d6a7';
	var green300 = exports.green300 = '#81c784';
	var green400 = exports.green400 = '#66bb6a';
	var green500 = exports.green500 = '#4caf50';
	var green600 = exports.green600 = '#43a047';
	var green700 = exports.green700 = '#388e3c';
	var green800 = exports.green800 = '#2e7d32';
	var green900 = exports.green900 = '#1b5e20';
	var greenA100 = exports.greenA100 = '#b9f6ca';
	var greenA200 = exports.greenA200 = '#69f0ae';
	var greenA400 = exports.greenA400 = '#00e676';
	var greenA700 = exports.greenA700 = '#00c853';
	
	var lightGreen50 = exports.lightGreen50 = '#f1f8e9';
	var lightGreen100 = exports.lightGreen100 = '#dcedc8';
	var lightGreen200 = exports.lightGreen200 = '#c5e1a5';
	var lightGreen300 = exports.lightGreen300 = '#aed581';
	var lightGreen400 = exports.lightGreen400 = '#9ccc65';
	var lightGreen500 = exports.lightGreen500 = '#8bc34a';
	var lightGreen600 = exports.lightGreen600 = '#7cb342';
	var lightGreen700 = exports.lightGreen700 = '#689f38';
	var lightGreen800 = exports.lightGreen800 = '#558b2f';
	var lightGreen900 = exports.lightGreen900 = '#33691e';
	var lightGreenA100 = exports.lightGreenA100 = '#ccff90';
	var lightGreenA200 = exports.lightGreenA200 = '#b2ff59';
	var lightGreenA400 = exports.lightGreenA400 = '#76ff03';
	var lightGreenA700 = exports.lightGreenA700 = '#64dd17';
	
	var lime50 = exports.lime50 = '#f9fbe7';
	var lime100 = exports.lime100 = '#f0f4c3';
	var lime200 = exports.lime200 = '#e6ee9c';
	var lime300 = exports.lime300 = '#dce775';
	var lime400 = exports.lime400 = '#d4e157';
	var lime500 = exports.lime500 = '#cddc39';
	var lime600 = exports.lime600 = '#c0ca33';
	var lime700 = exports.lime700 = '#afb42b';
	var lime800 = exports.lime800 = '#9e9d24';
	var lime900 = exports.lime900 = '#827717';
	var limeA100 = exports.limeA100 = '#f4ff81';
	var limeA200 = exports.limeA200 = '#eeff41';
	var limeA400 = exports.limeA400 = '#c6ff00';
	var limeA700 = exports.limeA700 = '#aeea00';
	
	var yellow50 = exports.yellow50 = '#fffde7';
	var yellow100 = exports.yellow100 = '#fff9c4';
	var yellow200 = exports.yellow200 = '#fff59d';
	var yellow300 = exports.yellow300 = '#fff176';
	var yellow400 = exports.yellow400 = '#ffee58';
	var yellow500 = exports.yellow500 = '#ffeb3b';
	var yellow600 = exports.yellow600 = '#fdd835';
	var yellow700 = exports.yellow700 = '#fbc02d';
	var yellow800 = exports.yellow800 = '#f9a825';
	var yellow900 = exports.yellow900 = '#f57f17';
	var yellowA100 = exports.yellowA100 = '#ffff8d';
	var yellowA200 = exports.yellowA200 = '#ffff00';
	var yellowA400 = exports.yellowA400 = '#ffea00';
	var yellowA700 = exports.yellowA700 = '#ffd600';
	
	var amber50 = exports.amber50 = '#fff8e1';
	var amber100 = exports.amber100 = '#ffecb3';
	var amber200 = exports.amber200 = '#ffe082';
	var amber300 = exports.amber300 = '#ffd54f';
	var amber400 = exports.amber400 = '#ffca28';
	var amber500 = exports.amber500 = '#ffc107';
	var amber600 = exports.amber600 = '#ffb300';
	var amber700 = exports.amber700 = '#ffa000';
	var amber800 = exports.amber800 = '#ff8f00';
	var amber900 = exports.amber900 = '#ff6f00';
	var amberA100 = exports.amberA100 = '#ffe57f';
	var amberA200 = exports.amberA200 = '#ffd740';
	var amberA400 = exports.amberA400 = '#ffc400';
	var amberA700 = exports.amberA700 = '#ffab00';
	
	var orange50 = exports.orange50 = '#fff3e0';
	var orange100 = exports.orange100 = '#ffe0b2';
	var orange200 = exports.orange200 = '#ffcc80';
	var orange300 = exports.orange300 = '#ffb74d';
	var orange400 = exports.orange400 = '#ffa726';
	var orange500 = exports.orange500 = '#ff9800';
	var orange600 = exports.orange600 = '#fb8c00';
	var orange700 = exports.orange700 = '#f57c00';
	var orange800 = exports.orange800 = '#ef6c00';
	var orange900 = exports.orange900 = '#e65100';
	var orangeA100 = exports.orangeA100 = '#ffd180';
	var orangeA200 = exports.orangeA200 = '#ffab40';
	var orangeA400 = exports.orangeA400 = '#ff9100';
	var orangeA700 = exports.orangeA700 = '#ff6d00';
	
	var deepOrange50 = exports.deepOrange50 = '#fbe9e7';
	var deepOrange100 = exports.deepOrange100 = '#ffccbc';
	var deepOrange200 = exports.deepOrange200 = '#ffab91';
	var deepOrange300 = exports.deepOrange300 = '#ff8a65';
	var deepOrange400 = exports.deepOrange400 = '#ff7043';
	var deepOrange500 = exports.deepOrange500 = '#ff5722';
	var deepOrange600 = exports.deepOrange600 = '#f4511e';
	var deepOrange700 = exports.deepOrange700 = '#e64a19';
	var deepOrange800 = exports.deepOrange800 = '#d84315';
	var deepOrange900 = exports.deepOrange900 = '#bf360c';
	var deepOrangeA100 = exports.deepOrangeA100 = '#ff9e80';
	var deepOrangeA200 = exports.deepOrangeA200 = '#ff6e40';
	var deepOrangeA400 = exports.deepOrangeA400 = '#ff3d00';
	var deepOrangeA700 = exports.deepOrangeA700 = '#dd2c00';
	
	var brown50 = exports.brown50 = '#efebe9';
	var brown100 = exports.brown100 = '#d7ccc8';
	var brown200 = exports.brown200 = '#bcaaa4';
	var brown300 = exports.brown300 = '#a1887f';
	var brown400 = exports.brown400 = '#8d6e63';
	var brown500 = exports.brown500 = '#795548';
	var brown600 = exports.brown600 = '#6d4c41';
	var brown700 = exports.brown700 = '#5d4037';
	var brown800 = exports.brown800 = '#4e342e';
	var brown900 = exports.brown900 = '#3e2723';
	
	var blueGrey50 = exports.blueGrey50 = '#eceff1';
	var blueGrey100 = exports.blueGrey100 = '#cfd8dc';
	var blueGrey200 = exports.blueGrey200 = '#b0bec5';
	var blueGrey300 = exports.blueGrey300 = '#90a4ae';
	var blueGrey400 = exports.blueGrey400 = '#78909c';
	var blueGrey500 = exports.blueGrey500 = '#607d8b';
	var blueGrey600 = exports.blueGrey600 = '#546e7a';
	var blueGrey700 = exports.blueGrey700 = '#455a64';
	var blueGrey800 = exports.blueGrey800 = '#37474f';
	var blueGrey900 = exports.blueGrey900 = '#263238';
	
	var grey50 = exports.grey50 = '#fafafa';
	var grey100 = exports.grey100 = '#f5f5f5';
	var grey200 = exports.grey200 = '#eeeeee';
	var grey300 = exports.grey300 = '#e0e0e0';
	var grey400 = exports.grey400 = '#bdbdbd';
	var grey500 = exports.grey500 = '#9e9e9e';
	var grey600 = exports.grey600 = '#757575';
	var grey700 = exports.grey700 = '#616161';
	var grey800 = exports.grey800 = '#424242';
	var grey900 = exports.grey900 = '#212121';
	
	var black = exports.black = '#000000';
	var white = exports.white = '#ffffff';
	
	var transparent = exports.transparent = 'rgba(0, 0, 0, 0)';
	var fullBlack = exports.fullBlack = 'rgba(0, 0, 0, 1)';
	var darkBlack = exports.darkBlack = 'rgba(0, 0, 0, 0.87)';
	var lightBlack = exports.lightBlack = 'rgba(0, 0, 0, 0.54)';
	var minBlack = exports.minBlack = 'rgba(0, 0, 0, 0.26)';
	var faintBlack = exports.faintBlack = 'rgba(0, 0, 0, 0.12)';
	var fullWhite = exports.fullWhite = 'rgba(255, 255, 255, 1)';
	var darkWhite = exports.darkWhite = 'rgba(255, 255, 255, 0.87)';
	var lightWhite = exports.lightWhite = 'rgba(255, 255, 255, 0.54)';

/***/ }),
/* 164 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  iconSize: 24,
	
	  desktopGutter: 24,
	  desktopGutterMore: 32,
	  desktopGutterLess: 16,
	  desktopGutterMini: 8,
	  desktopKeylineIncrement: 64,
	  desktopDropDownMenuItemHeight: 32,
	  desktopDropDownMenuFontSize: 15,
	  desktopDrawerMenuItemHeight: 48,
	  desktopSubheaderHeight: 48,
	  desktopToolbarHeight: 56
	};

/***/ }),
/* 165 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  menu: 1000,
	  appBar: 1100,
	  drawerOverlay: 1200,
	  drawer: 1300,
	  dialogOverlay: 1400,
	  dialog: 1500,
	  layer: 2000,
	  popover: 2100,
	  snackbar: 2900,
	  tooltip: 3000
	};

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (muiTheme) {
	  var isClient = typeof navigator !== 'undefined';
	  var userAgent = muiTheme.userAgent;
	
	  if (userAgent === undefined && isClient) {
	    userAgent = navigator.userAgent;
	  }
	
	  if (userAgent === undefined && !hasWarnedAboutUserAgent) {
	    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: userAgent should be supplied in the muiTheme context\n      for server-side rendering.') : void 0;
	
	    hasWarnedAboutUserAgent = true;
	  }
	
	  var prefixAll = (0, _createPrefixer2.default)(_autoprefixerStatic2.default);
	
	  if (userAgent === false) {
	    // Disabled autoprefixer
	    return null;
	  } else if (userAgent === 'all' || userAgent === undefined) {
	    // Prefix for all user agent
	    return function (style) {
	      var isFlex = ['flex', 'inline-flex'].indexOf(style.display) !== -1;
	      var stylePrefixed = prefixAll(style);
	
	      if (isFlex) {
	        var display = stylePrefixed.display;
	        if (isClient) {
	          // We can't apply this join with react-dom:
	          // #https://github.com/facebook/react/issues/6467
	          stylePrefixed.display = display[display.length - 1];
	        } else {
	          stylePrefixed.display = display.join('; display: ');
	        }
	      }
	
	      return stylePrefixed;
	    };
	  } else {
	    var Prefixer = (0, _createPrefixer4.default)(_autoprefixerDynamic2.default, prefixAll);
	    var prefixer = new Prefixer({
	      userAgent: userAgent
	    });
	
	    return function (style) {
	      return prefixer.prefix(style);
	    };
	  }
	};
	
	var _createPrefixer = __webpack_require__(167);
	
	var _createPrefixer2 = _interopRequireDefault(_createPrefixer);
	
	var _createPrefixer3 = __webpack_require__(173);
	
	var _createPrefixer4 = _interopRequireDefault(_createPrefixer3);
	
	var _autoprefixerDynamic = __webpack_require__(178);
	
	var _autoprefixerDynamic2 = _interopRequireDefault(_autoprefixerDynamic);
	
	var _autoprefixerStatic = __webpack_require__(189);
	
	var _autoprefixerStatic2 = _interopRequireDefault(_autoprefixerStatic);
	
	var _warning = __webpack_require__(161);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var hasWarnedAboutUserAgent = false;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createPrefixer;
	
	var _prefixProperty = __webpack_require__(168);
	
	var _prefixProperty2 = _interopRequireDefault(_prefixProperty);
	
	var _prefixValue = __webpack_require__(170);
	
	var _prefixValue2 = _interopRequireDefault(_prefixValue);
	
	var _addNewValuesOnly = __webpack_require__(171);
	
	var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);
	
	var _isObject = __webpack_require__(172);
	
	var _isObject2 = _interopRequireDefault(_isObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createPrefixer(_ref) {
	  var prefixMap = _ref.prefixMap,
	      plugins = _ref.plugins;
	
	  function prefixAll(style) {
	    for (var property in style) {
	      var value = style[property];
	
	      // handle nested objects
	      if ((0, _isObject2.default)(value)) {
	        style[property] = prefixAll(value);
	        // handle array values
	      } else if (Array.isArray(value)) {
	        var combinedValue = [];
	
	        for (var i = 0, len = value.length; i < len; ++i) {
	          var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, prefixMap);
	          (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
	        }
	
	        // only modify the value if it was touched
	        // by any plugin to prevent unnecessary mutations
	        if (combinedValue.length > 0) {
	          style[property] = combinedValue;
	        }
	      } else {
	        var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);
	
	        // only modify the value if it was touched
	        // by any plugin to prevent unnecessary mutations
	        if (_processedValue) {
	          style[property] = _processedValue;
	        }
	
	        (0, _prefixProperty2.default)(prefixMap, property, style);
	      }
	    }
	
	    return style;
	  }
	
	  return prefixAll;
	}
	module.exports = exports['default'];

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = prefixProperty;
	
	var _capitalizeString = __webpack_require__(169);
	
	var _capitalizeString2 = _interopRequireDefault(_capitalizeString);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function prefixProperty(prefixProperties, property, style) {
	  if (prefixProperties.hasOwnProperty(property)) {
	    var requiredPrefixes = prefixProperties[property];
	    for (var i = 0, len = requiredPrefixes.length; i < len; ++i) {
	      style[requiredPrefixes[i] + (0, _capitalizeString2.default)(property)] = style[property];
	    }
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 169 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = capitalizeString;
	function capitalizeString(str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	}
	module.exports = exports["default"];

/***/ }),
/* 170 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = prefixValue;
	function prefixValue(plugins, property, value, style, metaData) {
	  for (var i = 0, len = plugins.length; i < len; ++i) {
	    var processedValue = plugins[i](property, value, style, metaData);
	
	    // we can stop processing if a value is returned
	    // as all plugin criteria are unique
	    if (processedValue) {
	      return processedValue;
	    }
	  }
	}
	module.exports = exports["default"];

/***/ }),
/* 171 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = addNewValuesOnly;
	function addIfNew(list, value) {
	  if (list.indexOf(value) === -1) {
	    list.push(value);
	  }
	}
	
	function addNewValuesOnly(list, values) {
	  if (Array.isArray(values)) {
	    for (var i = 0, len = values.length; i < len; ++i) {
	      addIfNew(list, values[i]);
	    }
	  } else {
	    addIfNew(list, values);
	  }
	}
	module.exports = exports["default"];

/***/ }),
/* 172 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isObject;
	function isObject(value) {
	  return value instanceof Object && !Array.isArray(value);
	}
	module.exports = exports["default"];

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.default = createPrefixer;
	
	var _getBrowserInformation = __webpack_require__(174);
	
	var _getBrowserInformation2 = _interopRequireDefault(_getBrowserInformation);
	
	var _getPrefixedKeyframes = __webpack_require__(177);
	
	var _getPrefixedKeyframes2 = _interopRequireDefault(_getPrefixedKeyframes);
	
	var _capitalizeString = __webpack_require__(169);
	
	var _capitalizeString2 = _interopRequireDefault(_capitalizeString);
	
	var _addNewValuesOnly = __webpack_require__(171);
	
	var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);
	
	var _isObject = __webpack_require__(172);
	
	var _isObject2 = _interopRequireDefault(_isObject);
	
	var _prefixValue = __webpack_require__(170);
	
	var _prefixValue2 = _interopRequireDefault(_prefixValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function createPrefixer(_ref) {
	  var prefixMap = _ref.prefixMap,
	      plugins = _ref.plugins;
	  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (style) {
	    return style;
	  };
	
	  return function () {
	    /**
	    * Instantiante a new prefixer
	    * @param {string} userAgent - userAgent to gather prefix information according to caniuse.com
	    * @param {string} keepUnprefixed - keeps unprefixed properties and values
	    */
	    function Prefixer() {
	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	      _classCallCheck(this, Prefixer);
	
	      var defaultUserAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;
	
	      this._userAgent = options.userAgent || defaultUserAgent;
	      this._keepUnprefixed = options.keepUnprefixed || false;
	
	      if (this._userAgent) {
	        this._browserInfo = (0, _getBrowserInformation2.default)(this._userAgent);
	      }
	
	      // Checks if the userAgent was resolved correctly
	      if (this._browserInfo && this._browserInfo.cssPrefix) {
	        this.prefixedKeyframes = (0, _getPrefixedKeyframes2.default)(this._browserInfo.browserName, this._browserInfo.browserVersion, this._browserInfo.cssPrefix);
	      } else {
	        this._useFallback = true;
	        return false;
	      }
	
	      var prefixData = this._browserInfo.browserName && prefixMap[this._browserInfo.browserName];
	      if (prefixData) {
	        this._requiresPrefix = {};
	
	        for (var property in prefixData) {
	          if (prefixData[property] >= this._browserInfo.browserVersion) {
	            this._requiresPrefix[property] = true;
	          }
	        }
	
	        this._hasPropsRequiringPrefix = Object.keys(this._requiresPrefix).length > 0;
	      } else {
	        this._useFallback = true;
	      }
	
	      this._metaData = {
	        browserVersion: this._browserInfo.browserVersion,
	        browserName: this._browserInfo.browserName,
	        cssPrefix: this._browserInfo.cssPrefix,
	        jsPrefix: this._browserInfo.jsPrefix,
	        keepUnprefixed: this._keepUnprefixed,
	        requiresPrefix: this._requiresPrefix
	      };
	    }
	
	    _createClass(Prefixer, [{
	      key: 'prefix',
	      value: function prefix(style) {
	        // use static prefixer as fallback if userAgent can not be resolved
	        if (this._useFallback) {
	          return fallback(style);
	        }
	
	        // only add prefixes if needed
	        if (!this._hasPropsRequiringPrefix) {
	          return style;
	        }
	
	        return this._prefixStyle(style);
	      }
	    }, {
	      key: '_prefixStyle',
	      value: function _prefixStyle(style) {
	        for (var property in style) {
	          var value = style[property];
	
	          // handle nested objects
	          if ((0, _isObject2.default)(value)) {
	            style[property] = this.prefix(value);
	            // handle array values
	          } else if (Array.isArray(value)) {
	            var combinedValue = [];
	
	            for (var i = 0, len = value.length; i < len; ++i) {
	              var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, this._metaData);
	              (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
	            }
	
	            // only modify the value if it was touched
	            // by any plugin to prevent unnecessary mutations
	            if (combinedValue.length > 0) {
	              style[property] = combinedValue;
	            }
	          } else {
	            var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, this._metaData);
	
	            // only modify the value if it was touched
	            // by any plugin to prevent unnecessary mutations
	            if (_processedValue) {
	              style[property] = _processedValue;
	            }
	
	            // add prefixes to properties
	            if (this._requiresPrefix.hasOwnProperty(property)) {
	              style[this._browserInfo.jsPrefix + (0, _capitalizeString2.default)(property)] = value;
	              if (!this._keepUnprefixed) {
	                delete style[property];
	              }
	            }
	          }
	        }
	
	        return style;
	      }
	
	      /**
	      * Returns a prefixed version of the style object using all vendor prefixes
	      * @param {Object} styles - Style object that gets prefixed properties added
	      * @returns {Object} - Style object with prefixed properties and values
	      */
	
	    }], [{
	      key: 'prefixAll',
	      value: function prefixAll(styles) {
	        return fallback(styles);
	      }
	    }]);
	
	    return Prefixer;
	  }();
	}
	module.exports = exports['default'];

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getBrowserInformation;
	
	var _bowser = __webpack_require__(175);
	
	var _bowser2 = _interopRequireDefault(_bowser);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var prefixByBrowser = {
	  chrome: 'Webkit',
	  safari: 'Webkit',
	  ios: 'Webkit',
	  android: 'Webkit',
	  phantom: 'Webkit',
	  opera: 'Webkit',
	  webos: 'Webkit',
	  blackberry: 'Webkit',
	  bada: 'Webkit',
	  tizen: 'Webkit',
	  chromium: 'Webkit',
	  vivaldi: 'Webkit',
	  firefox: 'Moz',
	  seamoney: 'Moz',
	  sailfish: 'Moz',
	  msie: 'ms',
	  msedge: 'ms'
	};
	
	
	var browserByCanIuseAlias = {
	  chrome: 'chrome',
	  chromium: 'chrome',
	  safari: 'safari',
	  firfox: 'firefox',
	  msedge: 'edge',
	  opera: 'opera',
	  vivaldi: 'opera',
	  msie: 'ie'
	};
	
	function getBrowserName(browserInfo) {
	  if (browserInfo.firefox) {
	    return 'firefox';
	  }
	
	  if (browserInfo.mobile || browserInfo.tablet) {
	    if (browserInfo.ios) {
	      return 'ios_saf';
	    } else if (browserInfo.android) {
	      return 'android';
	    } else if (browserInfo.opera) {
	      return 'op_mini';
	    }
	  }
	
	  for (var browser in browserByCanIuseAlias) {
	    if (browserInfo.hasOwnProperty(browser)) {
	      return browserByCanIuseAlias[browser];
	    }
	  }
	}
	
	/**
	 * Uses bowser to get default browser browserInformation such as version and name
	 * Evaluates bowser browserInfo and adds vendorPrefix browserInformation
	 * @param {string} userAgent - userAgent that gets evaluated
	 */
	function getBrowserInformation(userAgent) {
	  var browserInfo = _bowser2.default._detect(userAgent);
	
	  if (browserInfo.yandexbrowser) {
	    browserInfo = _bowser2.default._detect(userAgent.replace(/YaBrowser\/[0-9.]*/, ''));
	  }
	
	  for (var browser in prefixByBrowser) {
	    if (browserInfo.hasOwnProperty(browser)) {
	      var prefix = prefixByBrowser[browser];
	
	      browserInfo.jsPrefix = prefix;
	      browserInfo.cssPrefix = '-' + prefix.toLowerCase() + '-';
	      break;
	    }
	  }
	
	  browserInfo.browserName = getBrowserName(browserInfo);
	
	  // For cordova IOS 8 the version is missing, set truncated osversion to prevent NaN
	  if (browserInfo.version) {
	    browserInfo.browserVersion = parseFloat(browserInfo.version);
	  } else {
	    browserInfo.browserVersion = parseInt(parseFloat(browserInfo.osversion), 10);
	  }
	
	  browserInfo.osVersion = parseFloat(browserInfo.osversion);
	
	  // iOS forces all browsers to use Safari under the hood
	  // as the Safari version seems to match the iOS version
	  // we just explicitely use the osversion instead
	  // https://github.com/rofrischmann/inline-style-prefixer/issues/72
	  if (browserInfo.browserName === 'ios_saf' && browserInfo.browserVersion > browserInfo.osVersion) {
	    browserInfo.browserVersion = browserInfo.osVersion;
	  }
	
	  // seperate native android chrome
	  // https://github.com/rofrischmann/inline-style-prefixer/issues/45
	  if (browserInfo.browserName === 'android' && browserInfo.chrome && browserInfo.browserVersion > 37) {
	    browserInfo.browserName = 'and_chr';
	  }
	
	  // For android < 4.4 we want to check the osversion
	  // not the chrome version, see issue #26
	  // https://github.com/rofrischmann/inline-style-prefixer/issues/26
	  if (browserInfo.browserName === 'android' && browserInfo.osVersion < 5) {
	    browserInfo.browserVersion = browserInfo.osVersion;
	  }
	
	  // Samsung browser are basically build on Chrome > 44
	  // https://github.com/rofrischmann/inline-style-prefixer/issues/102
	  if (browserInfo.browserName === 'android' && browserInfo.samsungBrowser) {
	    browserInfo.browserName = 'and_chr';
	    browserInfo.browserVersion = 44;
	  }
	
	  return browserInfo;
	}
	module.exports = exports['default'];

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	/*!
	 * Bowser - a browser detector
	 * https://github.com/ded/bowser
	 * MIT License | (c) Dustin Diaz 2015
	 */
	
	!function (root, name, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition()
	  else if (true) __webpack_require__(176)(name, definition)
	  else root[name] = definition()
	}(this, 'bowser', function () {
	  /**
	    * See useragents.js for examples of navigator.userAgent
	    */
	
	  var t = true
	
	  function detect(ua) {
	
	    function getFirstMatch(regex) {
	      var match = ua.match(regex);
	      return (match && match.length > 1 && match[1]) || '';
	    }
	
	    function getSecondMatch(regex) {
	      var match = ua.match(regex);
	      return (match && match.length > 1 && match[2]) || '';
	    }
	
	    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
	      , likeAndroid = /like android/i.test(ua)
	      , android = !likeAndroid && /android/i.test(ua)
	      , nexusMobile = /nexus\s*[0-6]\s*/i.test(ua)
	      , nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua)
	      , chromeos = /CrOS/.test(ua)
	      , silk = /silk/i.test(ua)
	      , sailfish = /sailfish/i.test(ua)
	      , tizen = /tizen/i.test(ua)
	      , webos = /(web|hpw)os/i.test(ua)
	      , windowsphone = /windows phone/i.test(ua)
	      , samsungBrowser = /SamsungBrowser/i.test(ua)
	      , windows = !windowsphone && /windows/i.test(ua)
	      , mac = !iosdevice && !silk && /macintosh/i.test(ua)
	      , linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua)
	      , edgeVersion = getSecondMatch(/edg([ea]|ios)\/(\d+(\.\d+)?)/i)
	      , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
	      , tablet = /tablet/i.test(ua) && !/tablet pc/i.test(ua)
	      , mobile = !tablet && /[^-]mobi/i.test(ua)
	      , xbox = /xbox/i.test(ua)
	      , result
	
	    if (/opera/i.test(ua)) {
	      //  an old Opera
	      result = {
	        name: 'Opera'
	      , opera: t
	      , version: versionIdentifier || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
	      }
	    } else if (/opr\/|opios/i.test(ua)) {
	      // a new Opera
	      result = {
	        name: 'Opera'
	        , opera: t
	        , version: getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || versionIdentifier
	      }
	    }
	    else if (/SamsungBrowser/i.test(ua)) {
	      result = {
	        name: 'Samsung Internet for Android'
	        , samsungBrowser: t
	        , version: versionIdentifier || getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/coast/i.test(ua)) {
	      result = {
	        name: 'Opera Coast'
	        , coast: t
	        , version: versionIdentifier || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/yabrowser/i.test(ua)) {
	      result = {
	        name: 'Yandex Browser'
	      , yandexbrowser: t
	      , version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/ucbrowser/i.test(ua)) {
	      result = {
	          name: 'UC Browser'
	        , ucbrowser: t
	        , version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (/mxios/i.test(ua)) {
	      result = {
	        name: 'Maxthon'
	        , maxthon: t
	        , version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (/epiphany/i.test(ua)) {
	      result = {
	        name: 'Epiphany'
	        , epiphany: t
	        , version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (/puffin/i.test(ua)) {
	      result = {
	        name: 'Puffin'
	        , puffin: t
	        , version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
	      }
	    }
	    else if (/sleipnir/i.test(ua)) {
	      result = {
	        name: 'Sleipnir'
	        , sleipnir: t
	        , version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (/k-meleon/i.test(ua)) {
	      result = {
	        name: 'K-Meleon'
	        , kMeleon: t
	        , version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (windowsphone) {
	      result = {
	        name: 'Windows Phone'
	      , osname: 'Windows Phone'
	      , windowsphone: t
	      }
	      if (edgeVersion) {
	        result.msedge = t
	        result.version = edgeVersion
	      }
	      else {
	        result.msie = t
	        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/msie|trident/i.test(ua)) {
	      result = {
	        name: 'Internet Explorer'
	      , msie: t
	      , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
	      }
	    } else if (chromeos) {
	      result = {
	        name: 'Chrome'
	      , osname: 'Chrome OS'
	      , chromeos: t
	      , chromeBook: t
	      , chrome: t
	      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      }
	    } else if (/edg([ea]|ios)/i.test(ua)) {
	      result = {
	        name: 'Microsoft Edge'
	      , msedge: t
	      , version: edgeVersion
	      }
	    }
	    else if (/vivaldi/i.test(ua)) {
	      result = {
	        name: 'Vivaldi'
	        , vivaldi: t
	        , version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier
	      }
	    }
	    else if (sailfish) {
	      result = {
	        name: 'Sailfish'
	      , osname: 'Sailfish OS'
	      , sailfish: t
	      , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/seamonkey\//i.test(ua)) {
	      result = {
	        name: 'SeaMonkey'
	      , seamonkey: t
	      , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/firefox|iceweasel|fxios/i.test(ua)) {
	      result = {
	        name: 'Firefox'
	      , firefox: t
	      , version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
	      }
	      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
	        result.firefoxos = t
	        result.osname = 'Firefox OS'
	      }
	    }
	    else if (silk) {
	      result =  {
	        name: 'Amazon Silk'
	      , silk: t
	      , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/phantom/i.test(ua)) {
	      result = {
	        name: 'PhantomJS'
	      , phantom: t
	      , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/slimerjs/i.test(ua)) {
	      result = {
	        name: 'SlimerJS'
	        , slimer: t
	        , version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
	      result = {
	        name: 'BlackBerry'
	      , osname: 'BlackBerry OS'
	      , blackberry: t
	      , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (webos) {
	      result = {
	        name: 'WebOS'
	      , osname: 'WebOS'
	      , webos: t
	      , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
	      };
	      /touchpad\//i.test(ua) && (result.touchpad = t)
	    }
	    else if (/bada/i.test(ua)) {
	      result = {
	        name: 'Bada'
	      , osname: 'Bada'
	      , bada: t
	      , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
	      };
	    }
	    else if (tizen) {
	      result = {
	        name: 'Tizen'
	      , osname: 'Tizen'
	      , tizen: t
	      , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
	      };
	    }
	    else if (/qupzilla/i.test(ua)) {
	      result = {
	        name: 'QupZilla'
	        , qupzilla: t
	        , version: getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || versionIdentifier
	      }
	    }
	    else if (/chromium/i.test(ua)) {
	      result = {
	        name: 'Chromium'
	        , chromium: t
	        , version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier
	      }
	    }
	    else if (/chrome|crios|crmo/i.test(ua)) {
	      result = {
	        name: 'Chrome'
	        , chrome: t
	        , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (android) {
	      result = {
	        name: 'Android'
	        , version: versionIdentifier
	      }
	    }
	    else if (/safari|applewebkit/i.test(ua)) {
	      result = {
	        name: 'Safari'
	      , safari: t
	      }
	      if (versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    }
	    else if (iosdevice) {
	      result = {
	        name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
	      }
	      // WTF: version is not part of user agent in web apps
	      if (versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    }
	    else if(/googlebot/i.test(ua)) {
	      result = {
	        name: 'Googlebot'
	      , googlebot: t
	      , version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier
	      }
	    }
	    else {
	      result = {
	        name: getFirstMatch(/^(.*)\/(.*) /),
	        version: getSecondMatch(/^(.*)\/(.*) /)
	     };
	   }
	
	    // set webkit or gecko flag for browsers based on these engines
	    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
	      if (/(apple)?webkit\/537\.36/i.test(ua)) {
	        result.name = result.name || "Blink"
	        result.blink = t
	      } else {
	        result.name = result.name || "Webkit"
	        result.webkit = t
	      }
	      if (!result.version && versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    } else if (!result.opera && /gecko\//i.test(ua)) {
	      result.name = result.name || "Gecko"
	      result.gecko = t
	      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
	    }
	
	    // set OS flags for platforms that have multiple browsers
	    if (!result.windowsphone && (android || result.silk)) {
	      result.android = t
	      result.osname = 'Android'
	    } else if (!result.windowsphone && iosdevice) {
	      result[iosdevice] = t
	      result.ios = t
	      result.osname = 'iOS'
	    } else if (mac) {
	      result.mac = t
	      result.osname = 'macOS'
	    } else if (xbox) {
	      result.xbox = t
	      result.osname = 'Xbox'
	    } else if (windows) {
	      result.windows = t
	      result.osname = 'Windows'
	    } else if (linux) {
	      result.linux = t
	      result.osname = 'Linux'
	    }
	
	    function getWindowsVersion (s) {
	      switch (s) {
	        case 'NT': return 'NT'
	        case 'XP': return 'XP'
	        case 'NT 5.0': return '2000'
	        case 'NT 5.1': return 'XP'
	        case 'NT 5.2': return '2003'
	        case 'NT 6.0': return 'Vista'
	        case 'NT 6.1': return '7'
	        case 'NT 6.2': return '8'
	        case 'NT 6.3': return '8.1'
	        case 'NT 10.0': return '10'
	        default: return undefined
	      }
	    }
	
	    // OS version extraction
	    var osVersion = '';
	    if (result.windows) {
	      osVersion = getWindowsVersion(getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i))
	    } else if (result.windowsphone) {
	      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
	    } else if (result.mac) {
	      osVersion = getFirstMatch(/Mac OS X (\d+([_\.\s]\d+)*)/i);
	      osVersion = osVersion.replace(/[_\s]/g, '.');
	    } else if (iosdevice) {
	      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
	      osVersion = osVersion.replace(/[_\s]/g, '.');
	    } else if (android) {
	      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
	    } else if (result.webos) {
	      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
	    } else if (result.blackberry) {
	      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
	    } else if (result.bada) {
	      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
	    } else if (result.tizen) {
	      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
	    }
	    if (osVersion) {
	      result.osversion = osVersion;
	    }
	
	    // device type extraction
	    var osMajorVersion = !result.windows && osVersion.split('.')[0];
	    if (
	         tablet
	      || nexusTablet
	      || iosdevice == 'ipad'
	      || (android && (osMajorVersion == 3 || (osMajorVersion >= 4 && !mobile)))
	      || result.silk
	    ) {
	      result.tablet = t
	    } else if (
	         mobile
	      || iosdevice == 'iphone'
	      || iosdevice == 'ipod'
	      || android
	      || nexusMobile
	      || result.blackberry
	      || result.webos
	      || result.bada
	    ) {
	      result.mobile = t
	    }
	
	    // Graded Browser Support
	    // http://developer.yahoo.com/yui/articles/gbs
	    if (result.msedge ||
	        (result.msie && result.version >= 10) ||
	        (result.yandexbrowser && result.version >= 15) ||
			    (result.vivaldi && result.version >= 1.0) ||
	        (result.chrome && result.version >= 20) ||
	        (result.samsungBrowser && result.version >= 4) ||
	        (result.firefox && result.version >= 20.0) ||
	        (result.safari && result.version >= 6) ||
	        (result.opera && result.version >= 10.0) ||
	        (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
	        (result.blackberry && result.version >= 10.1)
	        || (result.chromium && result.version >= 20)
	        ) {
	      result.a = t;
	    }
	    else if ((result.msie && result.version < 10) ||
	        (result.chrome && result.version < 20) ||
	        (result.firefox && result.version < 20.0) ||
	        (result.safari && result.version < 6) ||
	        (result.opera && result.version < 10.0) ||
	        (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
	        || (result.chromium && result.version < 20)
	        ) {
	      result.c = t
	    } else result.x = t
	
	    return result
	  }
	
	  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent || '' : '')
	
	  bowser.test = function (browserList) {
	    for (var i = 0; i < browserList.length; ++i) {
	      var browserItem = browserList[i];
	      if (typeof browserItem=== 'string') {
	        if (browserItem in bowser) {
	          return true;
	        }
	      }
	    }
	    return false;
	  }
	
	  /**
	   * Get version precisions count
	   *
	   * @example
	   *   getVersionPrecision("1.10.3") // 3
	   *
	   * @param  {string} version
	   * @return {number}
	   */
	  function getVersionPrecision(version) {
	    return version.split(".").length;
	  }
	
	  /**
	   * Array::map polyfill
	   *
	   * @param  {Array} arr
	   * @param  {Function} iterator
	   * @return {Array}
	   */
	  function map(arr, iterator) {
	    var result = [], i;
	    if (Array.prototype.map) {
	      return Array.prototype.map.call(arr, iterator);
	    }
	    for (i = 0; i < arr.length; i++) {
	      result.push(iterator(arr[i]));
	    }
	    return result;
	  }
	
	  /**
	   * Calculate browser version weight
	   *
	   * @example
	   *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
	   *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
	   *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
	   *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
	   *
	   * @param  {Array<String>} versions versions to compare
	   * @return {Number} comparison result
	   */
	  function compareVersions(versions) {
	    // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
	    var precision = Math.max(getVersionPrecision(versions[0]), getVersionPrecision(versions[1]));
	    var chunks = map(versions, function (version) {
	      var delta = precision - getVersionPrecision(version);
	
	      // 2) "9" -> "9.0" (for precision = 2)
	      version = version + new Array(delta + 1).join(".0");
	
	      // 3) "9.0" -> ["000000000"", "000000009"]
	      return map(version.split("."), function (chunk) {
	        return new Array(20 - chunk.length).join("0") + chunk;
	      }).reverse();
	    });
	
	    // iterate in reverse order by reversed chunks array
	    while (--precision >= 0) {
	      // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
	      if (chunks[0][precision] > chunks[1][precision]) {
	        return 1;
	      }
	      else if (chunks[0][precision] === chunks[1][precision]) {
	        if (precision === 0) {
	          // all version chunks are same
	          return 0;
	        }
	      }
	      else {
	        return -1;
	      }
	    }
	  }
	
	  /**
	   * Check if browser is unsupported
	   *
	   * @example
	   *   bowser.isUnsupportedBrowser({
	   *     msie: "10",
	   *     firefox: "23",
	   *     chrome: "29",
	   *     safari: "5.1",
	   *     opera: "16",
	   *     phantom: "534"
	   *   });
	   *
	   * @param  {Object}  minVersions map of minimal version to browser
	   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
	   * @param  {String}  [ua] user agent string
	   * @return {Boolean}
	   */
	  function isUnsupportedBrowser(minVersions, strictMode, ua) {
	    var _bowser = bowser;
	
	    // make strictMode param optional with ua param usage
	    if (typeof strictMode === 'string') {
	      ua = strictMode;
	      strictMode = void(0);
	    }
	
	    if (strictMode === void(0)) {
	      strictMode = false;
	    }
	    if (ua) {
	      _bowser = detect(ua);
	    }
	
	    var version = "" + _bowser.version;
	    for (var browser in minVersions) {
	      if (minVersions.hasOwnProperty(browser)) {
	        if (_bowser[browser]) {
	          if (typeof minVersions[browser] !== 'string') {
	            throw new Error('Browser version in the minVersion map should be a string: ' + browser + ': ' + String(minVersions));
	          }
	
	          // browser version and min supported version.
	          return compareVersions([version, minVersions[browser]]) < 0;
	        }
	      }
	    }
	
	    return strictMode; // not found
	  }
	
	  /**
	   * Check if browser is supported
	   *
	   * @param  {Object} minVersions map of minimal version to browser
	   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
	   * @param  {String}  [ua] user agent string
	   * @return {Boolean}
	   */
	  function check(minVersions, strictMode, ua) {
	    return !isUnsupportedBrowser(minVersions, strictMode, ua);
	  }
	
	  bowser.isUnsupportedBrowser = isUnsupportedBrowser;
	  bowser.compareVersions = compareVersions;
	  bowser.check = check;
	
	  /*
	   * Set our detect method to the main bowser object so we can
	   * reuse it to test other user agents.
	   * This is needed to implement future tests.
	   */
	  bowser._detect = detect;
	
	  /*
	   * Set our detect public method to the main bowser object
	   * This is needed to implement bowser in server side
	   */
	  bowser.detect = detect;
	  return bowser
	});


/***/ }),
/* 176 */
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),
/* 177 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getPrefixedKeyframes;
	function getPrefixedKeyframes(browserName, browserVersion, cssPrefix) {
	  var prefixedKeyframes = 'keyframes';
	
	  if (browserName === 'chrome' && browserVersion < 43 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion < 9 || browserName === 'opera' && browserVersion < 30 || browserName === 'android' && browserVersion <= 4.4 || browserName === 'and_uc') {
	    return cssPrefix + prefixedKeyframes;
	  }
	  return prefixedKeyframes;
	}
	module.exports = exports['default'];

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _calc = __webpack_require__(179);
	
	var _calc2 = _interopRequireDefault(_calc);
	
	var _flex = __webpack_require__(181);
	
	var _flex2 = _interopRequireDefault(_flex);
	
	var _flexboxIE = __webpack_require__(182);
	
	var _flexboxIE2 = _interopRequireDefault(_flexboxIE);
	
	var _flexboxOld = __webpack_require__(183);
	
	var _flexboxOld2 = _interopRequireDefault(_flexboxOld);
	
	var _gradient = __webpack_require__(184);
	
	var _gradient2 = _interopRequireDefault(_gradient);
	
	var _sizing = __webpack_require__(185);
	
	var _sizing2 = _interopRequireDefault(_sizing);
	
	var _transition = __webpack_require__(186);
	
	var _transition2 = _interopRequireDefault(_transition);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  plugins: [_calc2.default, _flex2.default, _flexboxIE2.default, _flexboxOld2.default, _gradient2.default, _sizing2.default, _transition2.default],
	  prefixMap: { "chrome": { "transform": 35, "transformOrigin": 35, "transformOriginX": 35, "transformOriginY": 35, "backfaceVisibility": 35, "perspective": 35, "perspectiveOrigin": 35, "transformStyle": 35, "transformOriginZ": 35, "animation": 42, "animationDelay": 42, "animationDirection": 42, "animationFillMode": 42, "animationDuration": 42, "animationIterationCount": 42, "animationName": 42, "animationPlayState": 42, "animationTimingFunction": 42, "appearance": 60, "userSelect": 53, "fontKerning": 32, "textEmphasisPosition": 60, "textEmphasis": 60, "textEmphasisStyle": 60, "textEmphasisColor": 60, "boxDecorationBreak": 60, "clipPath": 54, "maskImage": 60, "maskMode": 60, "maskRepeat": 60, "maskPosition": 60, "maskClip": 60, "maskOrigin": 60, "maskSize": 60, "maskComposite": 60, "mask": 60, "maskBorderSource": 60, "maskBorderMode": 60, "maskBorderSlice": 60, "maskBorderWidth": 60, "maskBorderOutset": 60, "maskBorderRepeat": 60, "maskBorder": 60, "maskType": 60, "textDecorationStyle": 56, "textDecorationSkip": 56, "textDecorationLine": 56, "textDecorationColor": 56, "filter": 52, "fontFeatureSettings": 47, "breakAfter": 49, "breakBefore": 49, "breakInside": 49, "columnCount": 49, "columnFill": 49, "columnGap": 49, "columnRule": 49, "columnRuleColor": 49, "columnRuleStyle": 49, "columnRuleWidth": 49, "columns": 49, "columnSpan": 49, "columnWidth": 49 }, "safari": { "flex": 8, "flexBasis": 8, "flexDirection": 8, "flexGrow": 8, "flexFlow": 8, "flexShrink": 8, "flexWrap": 8, "alignContent": 8, "alignItems": 8, "alignSelf": 8, "justifyContent": 8, "order": 8, "transition": 6, "transitionDelay": 6, "transitionDuration": 6, "transitionProperty": 6, "transitionTimingFunction": 6, "transform": 8, "transformOrigin": 8, "transformOriginX": 8, "transformOriginY": 8, "backfaceVisibility": 8, "perspective": 8, "perspectiveOrigin": 8, "transformStyle": 8, "transformOriginZ": 8, "animation": 8, "animationDelay": 8, "animationDirection": 8, "animationFillMode": 8, "animationDuration": 8, "animationIterationCount": 8, "animationName": 8, "animationPlayState": 8, "animationTimingFunction": 8, "appearance": 10.1, "userSelect": 10.1, "backdropFilter": 10.1, "fontKerning": 9, "scrollSnapType": 10, "scrollSnapPointsX": 10, "scrollSnapPointsY": 10, "scrollSnapDestination": 10, "scrollSnapCoordinate": 10, "textEmphasisPosition": 7, "textEmphasis": 7, "textEmphasisStyle": 7, "textEmphasisColor": 7, "boxDecorationBreak": 10.1, "clipPath": 10.1, "maskImage": 10.1, "maskMode": 10.1, "maskRepeat": 10.1, "maskPosition": 10.1, "maskClip": 10.1, "maskOrigin": 10.1, "maskSize": 10.1, "maskComposite": 10.1, "mask": 10.1, "maskBorderSource": 10.1, "maskBorderMode": 10.1, "maskBorderSlice": 10.1, "maskBorderWidth": 10.1, "maskBorderOutset": 10.1, "maskBorderRepeat": 10.1, "maskBorder": 10.1, "maskType": 10.1, "textDecorationStyle": 10.1, "textDecorationSkip": 10.1, "textDecorationLine": 10.1, "textDecorationColor": 10.1, "shapeImageThreshold": 10, "shapeImageMargin": 10, "shapeImageOutside": 10, "filter": 9, "hyphens": 10.1, "flowInto": 10.1, "flowFrom": 10.1, "breakBefore": 8, "breakAfter": 8, "breakInside": 8, "regionFragment": 10.1, "columnCount": 8, "columnFill": 8, "columnGap": 8, "columnRule": 8, "columnRuleColor": 8, "columnRuleStyle": 8, "columnRuleWidth": 8, "columns": 8, "columnSpan": 8, "columnWidth": 8 }, "firefox": { "appearance": 55, "userSelect": 55, "boxSizing": 28, "textAlignLast": 48, "textDecorationStyle": 35, "textDecorationSkip": 35, "textDecorationLine": 35, "textDecorationColor": 35, "tabSize": 55, "hyphens": 42, "fontFeatureSettings": 33, "breakAfter": 51, "breakBefore": 51, "breakInside": 51, "columnCount": 51, "columnFill": 51, "columnGap": 51, "columnRule": 51, "columnRuleColor": 51, "columnRuleStyle": 51, "columnRuleWidth": 51, "columns": 51, "columnSpan": 51, "columnWidth": 51 }, "opera": { "flex": 16, "flexBasis": 16, "flexDirection": 16, "flexGrow": 16, "flexFlow": 16, "flexShrink": 16, "flexWrap": 16, "alignContent": 16, "alignItems": 16, "alignSelf": 16, "justifyContent": 16, "order": 16, "transform": 22, "transformOrigin": 22, "transformOriginX": 22, "transformOriginY": 22, "backfaceVisibility": 22, "perspective": 22, "perspectiveOrigin": 22, "transformStyle": 22, "transformOriginZ": 22, "animation": 29, "animationDelay": 29, "animationDirection": 29, "animationFillMode": 29, "animationDuration": 29, "animationIterationCount": 29, "animationName": 29, "animationPlayState": 29, "animationTimingFunction": 29, "appearance": 45, "userSelect": 40, "fontKerning": 19, "textEmphasisPosition": 45, "textEmphasis": 45, "textEmphasisStyle": 45, "textEmphasisColor": 45, "boxDecorationBreak": 45, "clipPath": 41, "maskImage": 45, "maskMode": 45, "maskRepeat": 45, "maskPosition": 45, "maskClip": 45, "maskOrigin": 45, "maskSize": 45, "maskComposite": 45, "mask": 45, "maskBorderSource": 45, "maskBorderMode": 45, "maskBorderSlice": 45, "maskBorderWidth": 45, "maskBorderOutset": 45, "maskBorderRepeat": 45, "maskBorder": 45, "maskType": 45, "textDecorationStyle": 43, "textDecorationSkip": 43, "textDecorationLine": 43, "textDecorationColor": 43, "filter": 39, "fontFeatureSettings": 34, "breakAfter": 36, "breakBefore": 36, "breakInside": 36, "columnCount": 36, "columnFill": 36, "columnGap": 36, "columnRule": 36, "columnRuleColor": 36, "columnRuleStyle": 36, "columnRuleWidth": 36, "columns": 36, "columnSpan": 36, "columnWidth": 36 }, "ie": { "flex": 10, "flexDirection": 10, "flexFlow": 10, "flexWrap": 10, "transform": 9, "transformOrigin": 9, "transformOriginX": 9, "transformOriginY": 9, "userSelect": 11, "wrapFlow": 11, "wrapThrough": 11, "wrapMargin": 11, "scrollSnapType": 11, "scrollSnapPointsX": 11, "scrollSnapPointsY": 11, "scrollSnapDestination": 11, "scrollSnapCoordinate": 11, "touchAction": 10, "hyphens": 11, "flowInto": 11, "flowFrom": 11, "breakBefore": 11, "breakAfter": 11, "breakInside": 11, "regionFragment": 11, "gridTemplateColumns": 11, "gridTemplateRows": 11, "gridTemplateAreas": 11, "gridTemplate": 11, "gridAutoColumns": 11, "gridAutoRows": 11, "gridAutoFlow": 11, "grid": 11, "gridRowStart": 11, "gridColumnStart": 11, "gridRowEnd": 11, "gridRow": 11, "gridColumn": 11, "gridColumnEnd": 11, "gridColumnGap": 11, "gridRowGap": 11, "gridArea": 11, "gridGap": 11, "textSizeAdjust": 11 }, "edge": { "userSelect": 15, "wrapFlow": 15, "wrapThrough": 15, "wrapMargin": 15, "scrollSnapType": 15, "scrollSnapPointsX": 15, "scrollSnapPointsY": 15, "scrollSnapDestination": 15, "scrollSnapCoordinate": 15, "hyphens": 15, "flowInto": 15, "flowFrom": 15, "breakBefore": 15, "breakAfter": 15, "breakInside": 15, "regionFragment": 15, "gridTemplateColumns": 15, "gridTemplateRows": 15, "gridTemplateAreas": 15, "gridTemplate": 15, "gridAutoColumns": 15, "gridAutoRows": 15, "gridAutoFlow": 15, "grid": 15, "gridRowStart": 15, "gridColumnStart": 15, "gridRowEnd": 15, "gridRow": 15, "gridColumn": 15, "gridColumnEnd": 15, "gridColumnGap": 15, "gridRowGap": 15, "gridArea": 15, "gridGap": 15 }, "ios_saf": { "flex": 8.1, "flexBasis": 8.1, "flexDirection": 8.1, "flexGrow": 8.1, "flexFlow": 8.1, "flexShrink": 8.1, "flexWrap": 8.1, "alignContent": 8.1, "alignItems": 8.1, "alignSelf": 8.1, "justifyContent": 8.1, "order": 8.1, "transition": 6, "transitionDelay": 6, "transitionDuration": 6, "transitionProperty": 6, "transitionTimingFunction": 6, "transform": 8.1, "transformOrigin": 8.1, "transformOriginX": 8.1, "transformOriginY": 8.1, "backfaceVisibility": 8.1, "perspective": 8.1, "perspectiveOrigin": 8.1, "transformStyle": 8.1, "transformOriginZ": 8.1, "animation": 8.1, "animationDelay": 8.1, "animationDirection": 8.1, "animationFillMode": 8.1, "animationDuration": 8.1, "animationIterationCount": 8.1, "animationName": 8.1, "animationPlayState": 8.1, "animationTimingFunction": 8.1, "appearance": 10, "userSelect": 10, "backdropFilter": 10, "fontKerning": 10, "scrollSnapType": 10, "scrollSnapPointsX": 10, "scrollSnapPointsY": 10, "scrollSnapDestination": 10, "scrollSnapCoordinate": 10, "boxDecorationBreak": 10, "clipPath": 10, "maskImage": 10, "maskMode": 10, "maskRepeat": 10, "maskPosition": 10, "maskClip": 10, "maskOrigin": 10, "maskSize": 10, "maskComposite": 10, "mask": 10, "maskBorderSource": 10, "maskBorderMode": 10, "maskBorderSlice": 10, "maskBorderWidth": 10, "maskBorderOutset": 10, "maskBorderRepeat": 10, "maskBorder": 10, "maskType": 10, "textSizeAdjust": 10, "textDecorationStyle": 10, "textDecorationSkip": 10, "textDecorationLine": 10, "textDecorationColor": 10, "shapeImageThreshold": 10, "shapeImageMargin": 10, "shapeImageOutside": 10, "filter": 9, "hyphens": 10, "flowInto": 10, "flowFrom": 10, "breakBefore": 8.1, "breakAfter": 8.1, "breakInside": 8.1, "regionFragment": 10, "columnCount": 8.1, "columnFill": 8.1, "columnGap": 8.1, "columnRule": 8.1, "columnRuleColor": 8.1, "columnRuleStyle": 8.1, "columnRuleWidth": 8.1, "columns": 8.1, "columnSpan": 8.1, "columnWidth": 8.1 }, "android": { "borderImage": 4.2, "borderImageOutset": 4.2, "borderImageRepeat": 4.2, "borderImageSlice": 4.2, "borderImageSource": 4.2, "borderImageWidth": 4.2, "flex": 4.2, "flexBasis": 4.2, "flexDirection": 4.2, "flexGrow": 4.2, "flexFlow": 4.2, "flexShrink": 4.2, "flexWrap": 4.2, "alignContent": 4.2, "alignItems": 4.2, "alignSelf": 4.2, "justifyContent": 4.2, "order": 4.2, "transition": 4.2, "transitionDelay": 4.2, "transitionDuration": 4.2, "transitionProperty": 4.2, "transitionTimingFunction": 4.2, "transform": 4.4, "transformOrigin": 4.4, "transformOriginX": 4.4, "transformOriginY": 4.4, "backfaceVisibility": 4.4, "perspective": 4.4, "perspectiveOrigin": 4.4, "transformStyle": 4.4, "transformOriginZ": 4.4, "animation": 4.4, "animationDelay": 4.4, "animationDirection": 4.4, "animationFillMode": 4.4, "animationDuration": 4.4, "animationIterationCount": 4.4, "animationName": 4.4, "animationPlayState": 4.4, "animationTimingFunction": 4.4, "appearance": 53, "userSelect": 53, "fontKerning": 4.4, "textEmphasisPosition": 53, "textEmphasis": 53, "textEmphasisStyle": 53, "textEmphasisColor": 53, "boxDecorationBreak": 53, "clipPath": 53, "maskImage": 53, "maskMode": 53, "maskRepeat": 53, "maskPosition": 53, "maskClip": 53, "maskOrigin": 53, "maskSize": 53, "maskComposite": 53, "mask": 53, "maskBorderSource": 53, "maskBorderMode": 53, "maskBorderSlice": 53, "maskBorderWidth": 53, "maskBorderOutset": 53, "maskBorderRepeat": 53, "maskBorder": 53, "maskType": 53, "filter": 4.4, "fontFeatureSettings": 4.4, "breakAfter": 53, "breakBefore": 53, "breakInside": 53, "columnCount": 53, "columnFill": 53, "columnGap": 53, "columnRule": 53, "columnRuleColor": 53, "columnRuleStyle": 53, "columnRuleWidth": 53, "columns": 53, "columnSpan": 53, "columnWidth": 53 }, "and_chr": { "appearance": 56, "textEmphasisPosition": 56, "textEmphasis": 56, "textEmphasisStyle": 56, "textEmphasisColor": 56, "boxDecorationBreak": 56, "maskImage": 56, "maskMode": 56, "maskRepeat": 56, "maskPosition": 56, "maskClip": 56, "maskOrigin": 56, "maskSize": 56, "maskComposite": 56, "mask": 56, "maskBorderSource": 56, "maskBorderMode": 56, "maskBorderSlice": 56, "maskBorderWidth": 56, "maskBorderOutset": 56, "maskBorderRepeat": 56, "maskBorder": 56, "maskType": 56, "textDecorationStyle": 56, "textDecorationSkip": 56, "textDecorationLine": 56, "textDecorationColor": 56 }, "and_uc": { "flex": 11, "flexBasis": 11, "flexDirection": 11, "flexGrow": 11, "flexFlow": 11, "flexShrink": 11, "flexWrap": 11, "alignContent": 11, "alignItems": 11, "alignSelf": 11, "justifyContent": 11, "order": 11, "transition": 11, "transitionDelay": 11, "transitionDuration": 11, "transitionProperty": 11, "transitionTimingFunction": 11, "transform": 11, "transformOrigin": 11, "transformOriginX": 11, "transformOriginY": 11, "backfaceVisibility": 11, "perspective": 11, "perspectiveOrigin": 11, "transformStyle": 11, "transformOriginZ": 11, "animation": 11, "animationDelay": 11, "animationDirection": 11, "animationFillMode": 11, "animationDuration": 11, "animationIterationCount": 11, "animationName": 11, "animationPlayState": 11, "animationTimingFunction": 11, "appearance": 11, "userSelect": 11, "fontKerning": 11, "textEmphasisPosition": 11, "textEmphasis": 11, "textEmphasisStyle": 11, "textEmphasisColor": 11, "maskImage": 11, "maskMode": 11, "maskRepeat": 11, "maskPosition": 11, "maskClip": 11, "maskOrigin": 11, "maskSize": 11, "maskComposite": 11, "mask": 11, "maskBorderSource": 11, "maskBorderMode": 11, "maskBorderSlice": 11, "maskBorderWidth": 11, "maskBorderOutset": 11, "maskBorderRepeat": 11, "maskBorder": 11, "maskType": 11, "textSizeAdjust": 11, "filter": 11, "hyphens": 11, "flowInto": 11, "flowFrom": 11, "breakBefore": 11, "breakAfter": 11, "breakInside": 11, "regionFragment": 11, "fontFeatureSettings": 11, "columnCount": 11, "columnFill": 11, "columnGap": 11, "columnRule": 11, "columnRuleColor": 11, "columnRuleStyle": 11, "columnRuleWidth": 11, "columns": 11, "columnSpan": 11, "columnWidth": 11 }, "op_mini": {} }
	}; /* eslint-disable */

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = calc;
	
	var _getPrefixedValue = __webpack_require__(180);
	
	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function calc(property, value, style, _ref) {
	  var browserName = _ref.browserName,
	      browserVersion = _ref.browserVersion,
	      cssPrefix = _ref.cssPrefix,
	      keepUnprefixed = _ref.keepUnprefixed;
	
	  if (typeof value === 'string' && value.indexOf('calc(') > -1 && (browserName === 'firefox' && browserVersion < 15 || browserName === 'chrome' && browserVersion < 25 || browserName === 'safari' && browserVersion < 6.1 || browserName === 'ios_saf' && browserVersion < 7)) {
	    return (0, _getPrefixedValue2.default)(value.replace(/calc\(/g, cssPrefix + 'calc('), value, keepUnprefixed);
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 180 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getPrefixedValue;
	function getPrefixedValue(prefixedValue, value, keepUnprefixed) {
	  if (keepUnprefixed) {
	    return [prefixedValue, value];
	  }
	  return prefixedValue;
	}
	module.exports = exports["default"];

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flex;
	
	var _getPrefixedValue = __webpack_require__(180);
	
	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var values = {
	  flex: true,
	  'inline-flex': true
	};
	function flex(property, value, style, _ref) {
	  var browserName = _ref.browserName,
	      browserVersion = _ref.browserVersion,
	      cssPrefix = _ref.cssPrefix,
	      keepUnprefixed = _ref.keepUnprefixed;
	
	  if (property === 'display' && values[value] && (browserName === 'chrome' && browserVersion < 29 && browserVersion > 20 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion < 9 && browserVersion > 6 || browserName === 'opera' && (browserVersion === 15 || browserVersion === 16))) {
	    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flexboxIE;
	
	var _getPrefixedValue = __webpack_require__(180);
	
	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var alternativeValues = {
	  'space-around': 'distribute',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  flex: 'flexbox',
	  'inline-flex': 'inline-flexbox'
	};
	
	var alternativeProps = {
	  alignContent: 'msFlexLinePack',
	  alignSelf: 'msFlexItemAlign',
	  alignItems: 'msFlexAlign',
	  justifyContent: 'msFlexPack',
	  order: 'msFlexOrder',
	  flexGrow: 'msFlexPositive',
	  flexShrink: 'msFlexNegative',
	  flexBasis: 'msFlexPreferredSize'
	};
	
	function flexboxIE(property, value, style, _ref) {
	  var browserName = _ref.browserName,
	      browserVersion = _ref.browserVersion,
	      cssPrefix = _ref.cssPrefix,
	      keepUnprefixed = _ref.keepUnprefixed,
	      requiresPrefix = _ref.requiresPrefix;
	
	  if ((alternativeProps.hasOwnProperty(property) || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browserName === 'ie_mob' || browserName === 'ie') && browserVersion === 10) {
	    delete requiresPrefix[property];
	
	    if (!keepUnprefixed && !Array.isArray(style[property])) {
	      delete style[property];
	    }
	    if (property === 'display' && alternativeValues.hasOwnProperty(value)) {
	      return (0, _getPrefixedValue2.default)(cssPrefix + alternativeValues[value], value, keepUnprefixed);
	    }
	    if (alternativeProps.hasOwnProperty(property)) {
	      style[alternativeProps[property]] = alternativeValues[value] || value;
	    }
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flexboxOld;
	
	var _getPrefixedValue = __webpack_require__(180);
	
	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var alternativeValues = {
	  'space-around': 'justify',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  'wrap-reverse': 'multiple',
	  wrap: 'multiple',
	  flex: 'box',
	  'inline-flex': 'inline-box'
	};
	
	
	var alternativeProps = {
	  alignItems: 'WebkitBoxAlign',
	  justifyContent: 'WebkitBoxPack',
	  flexWrap: 'WebkitBoxLines'
	};
	
	var otherProps = ['alignContent', 'alignSelf', 'order', 'flexGrow', 'flexShrink', 'flexBasis', 'flexDirection'];
	var properties = Object.keys(alternativeProps).concat(otherProps);
	
	function flexboxOld(property, value, style, _ref) {
	  var browserName = _ref.browserName,
	      browserVersion = _ref.browserVersion,
	      cssPrefix = _ref.cssPrefix,
	      keepUnprefixed = _ref.keepUnprefixed,
	      requiresPrefix = _ref.requiresPrefix;
	
	  if ((properties.indexOf(property) > -1 || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browserName === 'firefox' && browserVersion < 22 || browserName === 'chrome' && browserVersion < 21 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion <= 6.1 || browserName === 'android' && browserVersion < 4.4 || browserName === 'and_uc')) {
	    delete requiresPrefix[property];
	
	    if (!keepUnprefixed && !Array.isArray(style[property])) {
	      delete style[property];
	    }
	    if (property === 'flexDirection' && typeof value === 'string') {
	      if (value.indexOf('column') > -1) {
	        style.WebkitBoxOrient = 'vertical';
	      } else {
	        style.WebkitBoxOrient = 'horizontal';
	      }
	      if (value.indexOf('reverse') > -1) {
	        style.WebkitBoxDirection = 'reverse';
	      } else {
	        style.WebkitBoxDirection = 'normal';
	      }
	    }
	    if (property === 'display' && alternativeValues.hasOwnProperty(value)) {
	      return (0, _getPrefixedValue2.default)(cssPrefix + alternativeValues[value], value, keepUnprefixed);
	    }
	    if (alternativeProps.hasOwnProperty(property)) {
	      style[alternativeProps[property]] = alternativeValues[value] || value;
	    }
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = gradient;
	
	var _getPrefixedValue = __webpack_require__(180);
	
	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;
	function gradient(property, value, style, _ref) {
	  var browserName = _ref.browserName,
	      browserVersion = _ref.browserVersion,
	      cssPrefix = _ref.cssPrefix,
	      keepUnprefixed = _ref.keepUnprefixed;
	
	  if (typeof value === 'string' && values.test(value) && (browserName === 'firefox' && browserVersion < 16 || browserName === 'chrome' && browserVersion < 26 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion < 7 || (browserName === 'opera' || browserName === 'op_mini') && browserVersion < 12.1 || browserName === 'android' && browserVersion < 4.4 || browserName === 'and_uc')) {
	    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = sizing;
	
	var _getPrefixedValue = __webpack_require__(180);
	
	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var properties = {
	  maxHeight: true,
	  maxWidth: true,
	  width: true,
	  height: true,
	  columnWidth: true,
	  minWidth: true,
	  minHeight: true
	};
	
	var values = {
	  'min-content': true,
	  'max-content': true,
	  'fill-available': true,
	  'fit-content': true,
	  'contain-floats': true
	
	  // TODO: chrome & opera support it
	};function sizing(property, value, style, _ref) {
	  var cssPrefix = _ref.cssPrefix,
	      keepUnprefixed = _ref.keepUnprefixed;
	
	  // This might change in the future
	  // Keep an eye on it
	  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
	    return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = transition;
	
	var _hyphenateProperty = __webpack_require__(187);
	
	var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var properties = {
	  transition: true,
	  transitionProperty: true,
	  WebkitTransition: true,
	  WebkitTransitionProperty: true,
	  MozTransition: true,
	  MozTransitionProperty: true
	};
	
	
	var requiresPrefixDashCased = void 0;
	
	function transition(property, value, style, _ref) {
	  var cssPrefix = _ref.cssPrefix,
	      keepUnprefixed = _ref.keepUnprefixed,
	      requiresPrefix = _ref.requiresPrefix;
	
	  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
	    // memoize the prefix array for later use
	    if (!requiresPrefixDashCased) {
	      requiresPrefixDashCased = Object.keys(requiresPrefix).map(function (prop) {
	        return (0, _hyphenateProperty2.default)(prop);
	      });
	    }
	
	    // only split multi values, not cubic beziers
	    var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);
	
	    requiresPrefixDashCased.forEach(function (prop) {
	      multipleValues.forEach(function (val, index) {
	        if (val.indexOf(prop) > -1 && prop !== 'order') {
	          multipleValues[index] = val.replace(prop, cssPrefix + prop) + (keepUnprefixed ? ',' + val : '');
	        }
	      });
	    });
	
	    return multipleValues.join(',');
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = hyphenateProperty;
	
	var _hyphenateStyleName = __webpack_require__(188);
	
	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function hyphenateProperty(property) {
	  return (0, _hyphenateStyleName2.default)(property);
	}
	module.exports = exports['default'];

/***/ }),
/* 188 */
/***/ (function(module, exports) {

	'use strict';
	
	var uppercasePattern = /[A-Z]/g;
	var msPattern = /^ms-/;
	var cache = {};
	
	function hyphenateStyleName(string) {
	    return string in cache
	    ? cache[string]
	    : cache[string] = string
	      .replace(uppercasePattern, '-$&')
	      .toLowerCase()
	      .replace(msPattern, '-ms-');
	}
	
	module.exports = hyphenateStyleName;


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _calc = __webpack_require__(190);
	
	var _calc2 = _interopRequireDefault(_calc);
	
	var _flex = __webpack_require__(192);
	
	var _flex2 = _interopRequireDefault(_flex);
	
	var _flexboxIE = __webpack_require__(193);
	
	var _flexboxIE2 = _interopRequireDefault(_flexboxIE);
	
	var _flexboxOld = __webpack_require__(194);
	
	var _flexboxOld2 = _interopRequireDefault(_flexboxOld);
	
	var _gradient = __webpack_require__(195);
	
	var _gradient2 = _interopRequireDefault(_gradient);
	
	var _sizing = __webpack_require__(196);
	
	var _sizing2 = _interopRequireDefault(_sizing);
	
	var _transition = __webpack_require__(197);
	
	var _transition2 = _interopRequireDefault(_transition);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  plugins: [_calc2.default, _flex2.default, _flexboxIE2.default, _flexboxOld2.default, _gradient2.default, _sizing2.default, _transition2.default],
	  prefixMap: { "transform": ["Webkit", "ms"], "transformOrigin": ["Webkit", "ms"], "transformOriginX": ["Webkit", "ms"], "transformOriginY": ["Webkit", "ms"], "backfaceVisibility": ["Webkit"], "perspective": ["Webkit"], "perspectiveOrigin": ["Webkit"], "transformStyle": ["Webkit"], "transformOriginZ": ["Webkit"], "animation": ["Webkit"], "animationDelay": ["Webkit"], "animationDirection": ["Webkit"], "animationFillMode": ["Webkit"], "animationDuration": ["Webkit"], "animationIterationCount": ["Webkit"], "animationName": ["Webkit"], "animationPlayState": ["Webkit"], "animationTimingFunction": ["Webkit"], "appearance": ["Webkit", "Moz"], "userSelect": ["Webkit", "Moz", "ms"], "fontKerning": ["Webkit"], "textEmphasisPosition": ["Webkit"], "textEmphasis": ["Webkit"], "textEmphasisStyle": ["Webkit"], "textEmphasisColor": ["Webkit"], "boxDecorationBreak": ["Webkit"], "clipPath": ["Webkit"], "maskImage": ["Webkit"], "maskMode": ["Webkit"], "maskRepeat": ["Webkit"], "maskPosition": ["Webkit"], "maskClip": ["Webkit"], "maskOrigin": ["Webkit"], "maskSize": ["Webkit"], "maskComposite": ["Webkit"], "mask": ["Webkit"], "maskBorderSource": ["Webkit"], "maskBorderMode": ["Webkit"], "maskBorderSlice": ["Webkit"], "maskBorderWidth": ["Webkit"], "maskBorderOutset": ["Webkit"], "maskBorderRepeat": ["Webkit"], "maskBorder": ["Webkit"], "maskType": ["Webkit"], "textDecorationStyle": ["Webkit", "Moz"], "textDecorationSkip": ["Webkit", "Moz"], "textDecorationLine": ["Webkit", "Moz"], "textDecorationColor": ["Webkit", "Moz"], "filter": ["Webkit"], "fontFeatureSettings": ["Webkit", "Moz"], "breakAfter": ["Webkit", "Moz", "ms"], "breakBefore": ["Webkit", "Moz", "ms"], "breakInside": ["Webkit", "Moz", "ms"], "columnCount": ["Webkit", "Moz"], "columnFill": ["Webkit", "Moz"], "columnGap": ["Webkit", "Moz"], "columnRule": ["Webkit", "Moz"], "columnRuleColor": ["Webkit", "Moz"], "columnRuleStyle": ["Webkit", "Moz"], "columnRuleWidth": ["Webkit", "Moz"], "columns": ["Webkit", "Moz"], "columnSpan": ["Webkit", "Moz"], "columnWidth": ["Webkit", "Moz"], "flex": ["Webkit", "ms"], "flexBasis": ["Webkit"], "flexDirection": ["Webkit", "ms"], "flexGrow": ["Webkit"], "flexFlow": ["Webkit", "ms"], "flexShrink": ["Webkit"], "flexWrap": ["Webkit", "ms"], "alignContent": ["Webkit"], "alignItems": ["Webkit"], "alignSelf": ["Webkit"], "justifyContent": ["Webkit"], "order": ["Webkit"], "transitionDelay": ["Webkit"], "transitionDuration": ["Webkit"], "transitionProperty": ["Webkit"], "transitionTimingFunction": ["Webkit"], "backdropFilter": ["Webkit"], "scrollSnapType": ["Webkit", "ms"], "scrollSnapPointsX": ["Webkit", "ms"], "scrollSnapPointsY": ["Webkit", "ms"], "scrollSnapDestination": ["Webkit", "ms"], "scrollSnapCoordinate": ["Webkit", "ms"], "shapeImageThreshold": ["Webkit"], "shapeImageMargin": ["Webkit"], "shapeImageOutside": ["Webkit"], "hyphens": ["Webkit", "Moz", "ms"], "flowInto": ["Webkit", "ms"], "flowFrom": ["Webkit", "ms"], "regionFragment": ["Webkit", "ms"], "boxSizing": ["Moz"], "textAlignLast": ["Moz"], "tabSize": ["Moz"], "wrapFlow": ["ms"], "wrapThrough": ["ms"], "wrapMargin": ["ms"], "touchAction": ["ms"], "gridTemplateColumns": ["ms"], "gridTemplateRows": ["ms"], "gridTemplateAreas": ["ms"], "gridTemplate": ["ms"], "gridAutoColumns": ["ms"], "gridAutoRows": ["ms"], "gridAutoFlow": ["ms"], "grid": ["ms"], "gridRowStart": ["ms"], "gridColumnStart": ["ms"], "gridRowEnd": ["ms"], "gridRow": ["ms"], "gridColumn": ["ms"], "gridColumnEnd": ["ms"], "gridColumnGap": ["ms"], "gridRowGap": ["ms"], "gridArea": ["ms"], "gridGap": ["ms"], "textSizeAdjust": ["Webkit", "ms"], "borderImage": ["Webkit"], "borderImageOutset": ["Webkit"], "borderImageRepeat": ["Webkit"], "borderImageSlice": ["Webkit"], "borderImageSource": ["Webkit"], "borderImageWidth": ["Webkit"] }
	}; /* eslint-disable */

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = calc;
	
	var _isPrefixedValue = __webpack_require__(191);
	
	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var prefixes = ['-webkit-', '-moz-', ''];
	function calc(property, value) {
	  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('calc(') > -1) {
	    return prefixes.map(function (prefix) {
	      return value.replace(/calc\(/g, prefix + 'calc(');
	    });
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 191 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isPrefixedValue;
	var regex = /-webkit-|-moz-|-ms-/;
	
	function isPrefixedValue(value) {
	  return typeof value === 'string' && regex.test(value);
	}
	module.exports = exports['default'];

/***/ }),
/* 192 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flex;
	var values = {
	  flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
	  'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
	};
	
	function flex(property, value) {
	  if (property === 'display' && values.hasOwnProperty(value)) {
	    return values[value];
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 193 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flexboxIE;
	var alternativeValues = {
	  'space-around': 'distribute',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end'
	};
	var alternativeProps = {
	  alignContent: 'msFlexLinePack',
	  alignSelf: 'msFlexItemAlign',
	  alignItems: 'msFlexAlign',
	  justifyContent: 'msFlexPack',
	  order: 'msFlexOrder',
	  flexGrow: 'msFlexPositive',
	  flexShrink: 'msFlexNegative',
	  flexBasis: 'msFlexPreferredSize'
	};
	
	function flexboxIE(property, value, style) {
	  if (alternativeProps.hasOwnProperty(property)) {
	    style[alternativeProps[property]] = alternativeValues[value] || value;
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 194 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flexboxOld;
	var alternativeValues = {
	  'space-around': 'justify',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  'wrap-reverse': 'multiple',
	  wrap: 'multiple'
	};
	
	var alternativeProps = {
	  alignItems: 'WebkitBoxAlign',
	  justifyContent: 'WebkitBoxPack',
	  flexWrap: 'WebkitBoxLines'
	};
	
	function flexboxOld(property, value, style) {
	  if (property === 'flexDirection' && typeof value === 'string') {
	    if (value.indexOf('column') > -1) {
	      style.WebkitBoxOrient = 'vertical';
	    } else {
	      style.WebkitBoxOrient = 'horizontal';
	    }
	    if (value.indexOf('reverse') > -1) {
	      style.WebkitBoxDirection = 'reverse';
	    } else {
	      style.WebkitBoxDirection = 'normal';
	    }
	  }
	  if (alternativeProps.hasOwnProperty(property)) {
	    style[alternativeProps[property]] = alternativeValues[value] || value;
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = gradient;
	
	var _isPrefixedValue = __webpack_require__(191);
	
	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var prefixes = ['-webkit-', '-moz-', ''];
	
	var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;
	
	function gradient(property, value) {
	  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
	    return prefixes.map(function (prefix) {
	      return prefix + value;
	    });
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 196 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = sizing;
	var prefixes = ['-webkit-', '-moz-', ''];
	
	var properties = {
	  maxHeight: true,
	  maxWidth: true,
	  width: true,
	  height: true,
	  columnWidth: true,
	  minWidth: true,
	  minHeight: true
	};
	var values = {
	  'min-content': true,
	  'max-content': true,
	  'fill-available': true,
	  'fit-content': true,
	  'contain-floats': true
	};
	
	function sizing(property, value) {
	  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
	    return prefixes.map(function (prefix) {
	      return prefix + value;
	    });
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = transition;
	
	var _hyphenateProperty = __webpack_require__(187);
	
	var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);
	
	var _isPrefixedValue = __webpack_require__(191);
	
	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
	
	var _capitalizeString = __webpack_require__(169);
	
	var _capitalizeString2 = _interopRequireDefault(_capitalizeString);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var properties = {
	  transition: true,
	  transitionProperty: true,
	  WebkitTransition: true,
	  WebkitTransitionProperty: true,
	  MozTransition: true,
	  MozTransitionProperty: true
	};
	
	
	var prefixMapping = {
	  Webkit: '-webkit-',
	  Moz: '-moz-',
	  ms: '-ms-'
	};
	
	function prefixValue(value, propertyPrefixMap) {
	  if ((0, _isPrefixedValue2.default)(value)) {
	    return value;
	  }
	
	  // only split multi values, not cubic beziers
	  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);
	
	  for (var i = 0, len = multipleValues.length; i < len; ++i) {
	    var singleValue = multipleValues[i];
	    var values = [singleValue];
	    for (var property in propertyPrefixMap) {
	      var dashCaseProperty = (0, _hyphenateProperty2.default)(property);
	
	      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
	        var prefixes = propertyPrefixMap[property];
	        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
	          // join all prefixes and create a new value
	          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
	        }
	      }
	    }
	
	    multipleValues[i] = values.join(',');
	  }
	
	  return multipleValues.join(',');
	}
	
	function transition(property, value, style, propertyPrefixMap) {
	  // also check for already prefixed transitions
	  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
	    var outputValue = prefixValue(value, propertyPrefixMap);
	    // if the property is already prefixed
	    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
	      return !/-moz-|-ms-/.test(val);
	    }).join(',');
	
	    if (property.indexOf('Webkit') > -1) {
	      return webkitOutput;
	    }
	
	    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
	      return !/-webkit-|-ms-/.test(val);
	    }).join(',');
	
	    if (property.indexOf('Moz') > -1) {
	      return mozOutput;
	    }
	
	    style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
	    style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
	    return outputValue;
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = callOnce;
	
	var _warning = __webpack_require__(161);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CALLED_ONCE = 'muiPrepared';
	
	function callOnce() {
	  if (process.env.NODE_ENV !== 'production') {
	    return function (style) {
	      if (style[CALLED_ONCE]) {
	        process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: You cannot call prepareStyles() on the same style object more than once.') : void 0;
	      }
	      style[CALLED_ONCE] = true;
	      return style;
	    };
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(200);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	exports.default = rtl;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var reTranslate = /((^|\s)translate(3d|X)?\()(\-?[\d]+)/;
	var reSkew = /((^|\s)skew(x|y)?\()\s*(\-?[\d]+)(deg|rad|grad)(,\s*(\-?[\d]+)(deg|rad|grad))?/;
	
	/**
	 * This function ensures that `style` supports both ltr and rtl directions by
	 * checking `styleConstants` in `muiTheme` and replacing attribute keys if
	 * necessary.
	 */
	function rtl(muiTheme) {
	  if (muiTheme.isRtl) {
	    return function (style) {
	      if (style.directionInvariant === true) {
	        return style;
	      }
	
	      var flippedAttributes = {
	        // Keys and their replacements.
	        right: 'left',
	        left: 'right',
	        marginRight: 'marginLeft',
	        marginLeft: 'marginRight',
	        paddingRight: 'paddingLeft',
	        paddingLeft: 'paddingRight',
	        borderRight: 'borderLeft',
	        borderLeft: 'borderRight'
	      };
	
	      var newStyle = {};
	
	      (0, _keys2.default)(style).forEach(function (attribute) {
	        var value = style[attribute];
	        var key = attribute;
	
	        if (flippedAttributes.hasOwnProperty(attribute)) {
	          key = flippedAttributes[attribute];
	        }
	
	        switch (attribute) {
	          case 'float':
	          case 'textAlign':
	            if (value === 'right') {
	              value = 'left';
	            } else if (value === 'left') {
	              value = 'right';
	            }
	            break;
	
	          case 'direction':
	            if (value === 'ltr') {
	              value = 'rtl';
	            } else if (value === 'rtl') {
	              value = 'ltr';
	            }
	            break;
	
	          case 'transform':
	            if (!value) break;
	            var matches = void 0;
	            if (matches = value.match(reTranslate)) {
	              value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]));
	            }
	            if (matches = value.match(reSkew)) {
	              value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]) + matches[5] + matches[6] ? ', ' + (-parseFloat(matches[7]) + matches[8]) : '');
	            }
	            break;
	
	          case 'transformOrigin':
	            if (!value) break;
	            if (value.indexOf('right') > -1) {
	              value = value.replace('right', 'left');
	            } else if (value.indexOf('left') > -1) {
	              value = value.replace('left', 'right');
	            }
	            break;
	        }
	
	        newStyle[key] = value;
	      });
	
	      return newStyle;
	    };
	  }
	}

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(201), __esModule: true };

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(202);
	module.exports = __webpack_require__(76).Object.keys;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(66);
	var $keys = __webpack_require__(108);
	
	__webpack_require__(74)('keys', function () {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
	});


/***/ }),
/* 203 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = compose;
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }
	
	  if (funcs.length === 1) {
	    return funcs[0];
	  }
	
	  return funcs.reduce(function (a, b) {
	    return function () {
	      return a(b.apply(undefined, arguments));
	    };
	  });
	}

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(89);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _colors = __webpack_require__(163);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Typography = function Typography() {
	  (0, _classCallCheck3.default)(this, Typography);
	
	  // text colors
	  this.textFullBlack = _colors.fullBlack;
	  this.textDarkBlack = _colors.darkBlack;
	  this.textLightBlack = _colors.lightBlack;
	  this.textMinBlack = _colors.minBlack;
	  this.textFullWhite = _colors.fullWhite;
	  this.textDarkWhite = _colors.darkWhite;
	  this.textLightWhite = _colors.lightWhite;
	
	  // font weight
	  this.fontWeightLight = 300;
	  this.fontWeightNormal = 400;
	  this.fontWeightMedium = 500;
	
	  this.fontStyleButtonFontSize = 14;
	};
	
	exports.default = new Typography();

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(3);
	
	var _LoadingSpinner = __webpack_require__(206);
	
	var _LoadingSpinner2 = _interopRequireDefault(_LoadingSpinner);
	
	var _BloggerContainer = __webpack_require__(218);
	
	var _BloggerContainer2 = _interopRequireDefault(_BloggerContainer);
	
	var _MenuBar = __webpack_require__(281);
	
	var _MenuBar2 = _interopRequireDefault(_MenuBar);
	
	var _actions = __webpack_require__(284);
	
	var BlogApp = (function (_Component) {
	  _inherits(BlogApp, _Component);
	
	  function BlogApp() {
	    _classCallCheck(this, BlogApp);
	
	    _get(Object.getPrototypeOf(BlogApp.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(BlogApp, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.fetchBlogSummary({
	        blogId: '5735193246666010261',
	        apiKey: 'AIzaSyCYqHncqz05FOCxtWPlgWVMjdMtebTXDCs'
	      });
	      this.props.fetchPosts({
	        blogId: '5735193246666010261',
	        apiKey: 'AIzaSyCYqHncqz05FOCxtWPlgWVMjdMtebTXDCs'
	      });
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate() {
	      console.log("updated!");
	    }
	  }, {
	    key: 'renderMenuBar',
	    value: function renderMenuBar() {
	      if (this.props.currentPage >= this.props.prevPageToken.length) {
	        var nextPagetoken = this.props.postResponse.nextPageToken;
	      } else {
	        var nextPagetoken = this.props.prevPageToken[this.props.currentPage + 1];
	      }
	      return _react2['default'].createElement(_MenuBar2['default'], {
	        fetchNextPagePosts: this.props.fetchNextPagePosts.bind(this),
	        fetchPrevPagePosts: this.props.fetchPrevPagePosts.bind(this),
	        prevPageToken: this.props.prevPageToken,
	        nextPagetoken: this.props.currentPage >= this.props.prevPageToken.length - 1 ? this.props.postResponse.nextPageToken : this.props.prevPageToken[this.props.currentPage + 1],
	        currentPage: this.props.currentPage,
	        loading: this.props.loading
	      });
	    }
	  }, {
	    key: 'renderBloggerContainer',
	    value: function renderBloggerContainer() {
	      if (this.props.loading) {
	        return _react2['default'].createElement(_LoadingSpinner2['default'], null);
	      }
	      return _react2['default'].createElement(_BloggerContainer2['default'], { posts: this.props.postResponse });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      console.log(this.props);
	      return _react2['default'].createElement(
	        'div',
	        null,
	        this.renderMenuBar(),
	        this.renderBloggerContainer()
	      );
	    }
	  }]);
	
	  return BlogApp;
	})(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
	  var blogResponse = state.blog.blogResponse;
	  var _state$post = state.post;
	  var postResponse = _state$post.postResponse;
	  var prevPageToken = _state$post.prevPageToken;
	  var currentPage = state.post.currentPage;
	
	  var loading = state.blog.loading || state.post.loading;
	  if (!blogResponse || !postResponse) loading = true;
	
	  return { blogResponse: blogResponse, postResponse: postResponse, loading: loading, prevPageToken: prevPageToken, currentPage: currentPage };
	};
	
	exports['default'] = (0, _reactRedux.connect)(mapStateToProps, {
	  fetchBlogSummary: _actions.fetchBlogSummary,
	  fetchPosts: _actions.fetchPosts,
	  fetchNextPagePosts: _actions.fetchNextPagePosts,
	  fetchPrevPagePosts: _actions.fetchPrevPagePosts
	})(BlogApp);
	module.exports = exports['default'];

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _materialUiCircularProgress = __webpack_require__(207);
	
	var _materialUiCircularProgress2 = _interopRequireDefault(_materialUiCircularProgress);
	
	var divStyle = {
	  textAlign: 'center',
	  verticalAlign: 'middle'
	};
	
	var spinnerStyle = {
	  margin: 'auto',
	  verticalAlign: 'middle'
	};
	
	var LoadingSpinner = function LoadingSpinner() {
	  return _react2['default'].createElement(
	    'div',
	    { style: divStyle },
	    _react2['default'].createElement(_materialUiCircularProgress2['default'], { style: spinnerStyle, size: 100, thickness: 5 })
	  );
	};
	
	exports['default'] = LoadingSpinner;
	module.exports = exports['default'];

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _CircularProgress = __webpack_require__(208);
	
	var _CircularProgress2 = _interopRequireDefault(_CircularProgress);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _CircularProgress2.default;

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(209);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(214);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(63);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(89);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(90);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(94);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(140);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(215);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _autoPrefix = __webpack_require__(216);
	
	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);
	
	var _transitions = __webpack_require__(217);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getRelativeValue(value, min, max) {
	  var clampedValue = Math.min(Math.max(min, value), max);
	  return clampedValue / (max - min);
	}
	
	function getArcLength(fraction, props) {
	  return fraction * Math.PI * (props.size - props.thickness);
	}
	
	function getStyles(props, context) {
	  var max = props.max,
	      min = props.min,
	      size = props.size,
	      value = props.value;
	  var palette = context.muiTheme.baseTheme.palette;
	
	
	  var styles = {
	    root: {
	      position: 'relative',
	      display: 'inline-block',
	      width: size,
	      height: size
	    },
	    wrapper: {
	      width: size,
	      height: size,
	      display: 'inline-block',
	      transition: _transitions2.default.create('transform', '20s', null, 'linear'),
	      transitionTimingFunction: 'linear'
	    },
	    svg: {
	      width: size,
	      height: size,
	      position: 'relative'
	    },
	    path: {
	      stroke: props.color || palette.primary1Color,
	      strokeLinecap: 'round',
	      transition: _transitions2.default.create('all', '1.5s', null, 'ease-in-out')
	    }
	  };
	
	  if (props.mode === 'determinate') {
	    var relVal = getRelativeValue(value, min, max);
	    styles.path.transition = _transitions2.default.create('all', '0.3s', null, 'linear');
	    styles.path.strokeDasharray = getArcLength(relVal, props) + ', ' + getArcLength(1, props);
	  }
	
	  return styles;
	}
	
	var CircularProgress = function (_Component) {
	  (0, _inherits3.default)(CircularProgress, _Component);
	
	  function CircularProgress() {
	    (0, _classCallCheck3.default)(this, CircularProgress);
	    return (0, _possibleConstructorReturn3.default)(this, (CircularProgress.__proto__ || (0, _getPrototypeOf2.default)(CircularProgress)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(CircularProgress, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.scalePath(this.refs.path);
	      this.rotateWrapper(this.refs.wrapper);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.scalePathTimer);
	      clearTimeout(this.rotateWrapperTimer);
	    }
	  }, {
	    key: 'scalePath',
	    value: function scalePath(path) {
	      var _this2 = this;
	
	      var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
	      if (this.props.mode !== 'indeterminate') return;
	
	      step %= 3;
	
	      if (step === 0) {
	        path.style.strokeDasharray = getArcLength(0, this.props) + ', ' + getArcLength(1, this.props);
	        path.style.strokeDashoffset = 0;
	        path.style.transitionDuration = '0ms';
	      } else if (step === 1) {
	        path.style.strokeDasharray = getArcLength(0.7, this.props) + ', ' + getArcLength(1, this.props);
	        path.style.strokeDashoffset = getArcLength(-0.3, this.props);
	        path.style.transitionDuration = '750ms';
	      } else {
	        path.style.strokeDasharray = getArcLength(0.7, this.props) + ', ' + getArcLength(1, this.props);
	        path.style.strokeDashoffset = getArcLength(-1, this.props);
	        path.style.transitionDuration = '850ms';
	      }
	
	      this.scalePathTimer = setTimeout(function () {
	        return _this2.scalePath(path, step + 1);
	      }, step ? 750 : 250);
	    }
	  }, {
	    key: 'rotateWrapper',
	    value: function rotateWrapper(wrapper) {
	      var _this3 = this;
	
	      if (this.props.mode !== 'indeterminate') return;
	
	      _autoPrefix2.default.set(wrapper.style, 'transform', 'rotate(0deg)');
	      _autoPrefix2.default.set(wrapper.style, 'transitionDuration', '0ms');
	
	      setTimeout(function () {
	        _autoPrefix2.default.set(wrapper.style, 'transform', 'rotate(1800deg)');
	        _autoPrefix2.default.set(wrapper.style, 'transitionDuration', '10s');
	        _autoPrefix2.default.set(wrapper.style, 'transitionTimingFunction', 'linear');
	      }, 50);
	
	      this.rotateWrapperTimer = setTimeout(function () {
	        return _this3.rotateWrapper(wrapper);
	      }, 10050);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          style = _props.style,
	          innerStyle = _props.innerStyle,
	          size = _props.size,
	          thickness = _props.thickness,
	          other = (0, _objectWithoutProperties3.default)(_props, ['style', 'innerStyle', 'size', 'thickness']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
	        _react2.default.createElement(
	          'div',
	          { ref: 'wrapper', style: prepareStyles((0, _simpleAssign2.default)(styles.wrapper, innerStyle)) },
	          _react2.default.createElement(
	            'svg',
	            {
	              viewBox: '0 0 ' + size + ' ' + size,
	              style: prepareStyles(styles.svg)
	            },
	            _react2.default.createElement('circle', {
	              ref: 'path',
	              style: prepareStyles(styles.path),
	              cx: size / 2,
	              cy: size / 2,
	              r: (size - thickness) / 2,
	              fill: 'none',
	              strokeWidth: thickness,
	              strokeMiterlimit: '20'
	            })
	          )
	        )
	      );
	    }
	  }]);
	  return CircularProgress;
	}(_react.Component);
	
	CircularProgress.defaultProps = {
	  mode: 'indeterminate',
	  value: 0,
	  min: 0,
	  max: 100,
	  size: 40,
	  thickness: 3.5
	};
	CircularProgress.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	CircularProgress.propTypes = process.env.NODE_ENV !== "production" ? {
	  /**
	   * Override the progress's color.
	   */
	  color: _propTypes2.default.string,
	  /**
	   * Style for inner wrapper div.
	   */
	  innerStyle: _propTypes2.default.object,
	  /**
	   * The max value of progress, only works in determinate mode.
	   */
	  max: _propTypes2.default.number,
	  /**
	   * The min value of progress, only works in determinate mode.
	   */
	  min: _propTypes2.default.number,
	  /**
	   * The mode of show your progress, indeterminate
	   * for when there is no value for progress.
	   */
	  mode: _propTypes2.default.oneOf(['determinate', 'indeterminate']),
	  /**
	   * The diameter of the progress in pixels.
	   */
	  size: _propTypes2.default.number,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  /**
	   * Stroke width in pixels.
	   */
	  thickness: _propTypes2.default.number,
	  /**
	   * The value of progress, only works in determinate mode.
	   */
	  value: _propTypes2.default.number
	} : {};
	exports.default = CircularProgress;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(210);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(211), __esModule: true };

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(212);
	module.exports = __webpack_require__(76).Object.assign;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(75);
	
	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(213) });


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys = __webpack_require__(108);
	var gOPS = __webpack_require__(131);
	var pIE = __webpack_require__(132);
	var toObject = __webpack_require__(66);
	var IObject = __webpack_require__(111);
	var $assign = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(85)(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = gOPS.f;
	  var isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]);
	    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  } return T;
	} : $assign;


/***/ }),
/* 214 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};

/***/ }),
/* 215 */
/***/ (function(module, exports) {

	module.exports = function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	  return target;
	};


/***/ }),
/* 216 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  set: function set(style, key, value) {
	    style[key] = value;
	  }
	};

/***/ }),
/* 217 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	
	  easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
	  easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
	
	  easeOut: function easeOut(duration, property, delay, easeFunction) {
	    easeFunction = easeFunction || this.easeOutFunction;
	
	    if (property && Object.prototype.toString.call(property) === '[object Array]') {
	      var transitions = '';
	      for (var i = 0; i < property.length; i++) {
	        if (transitions) transitions += ',';
	        transitions += this.create(duration, property[i], delay, easeFunction);
	      }
	
	      return transitions;
	    } else {
	      return this.create(duration, property, delay, easeFunction);
	    }
	  },
	  create: function create(duration, property, delay, easeFunction) {
	    duration = duration || '450ms';
	    property = property || 'all';
	    delay = delay || '0ms';
	    easeFunction = easeFunction || 'linear';
	
	    return property + ' ' + duration + ' ' + easeFunction + ' ' + delay;
	  }
	};

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _materialUiPaper = __webpack_require__(219);
	
	var _materialUiPaper2 = _interopRequireDefault(_materialUiPaper);
	
	var _materialUiList = __webpack_require__(222);
	
	var _materialUiDivider = __webpack_require__(261);
	
	var _materialUiDivider2 = _interopRequireDefault(_materialUiDivider);
	
	var _materialUiSubheader = __webpack_require__(224);
	
	var _materialUiSubheader2 = _interopRequireDefault(_materialUiSubheader);
	
	var _materialUiAvatar = __webpack_require__(263);
	
	var _materialUiAvatar2 = _interopRequireDefault(_materialUiAvatar);
	
	var _materialUiStylesColors = __webpack_require__(163);
	
	var _materialUiIconButton = __webpack_require__(243);
	
	var _materialUiIconButton2 = _interopRequireDefault(_materialUiIconButton);
	
	var _materialUiSvgIconsNavigationMoreVert = __webpack_require__(265);
	
	var _materialUiSvgIconsNavigationMoreVert2 = _interopRequireDefault(_materialUiSvgIconsNavigationMoreVert);
	
	var _materialUiIconMenu = __webpack_require__(266);
	
	var _materialUiIconMenu2 = _interopRequireDefault(_materialUiIconMenu);
	
	var _materialUiMenuItem = __webpack_require__(279);
	
	var _materialUiMenuItem2 = _interopRequireDefault(_materialUiMenuItem);
	
	var _PostListItem = __webpack_require__(280);
	
	var _PostListItem2 = _interopRequireDefault(_PostListItem);
	
	var ListExampleMessages = (function (_Component) {
	  _inherits(ListExampleMessages, _Component);
	
	  function ListExampleMessages() {
	    _classCallCheck(this, ListExampleMessages);
	
	    _get(Object.getPrototypeOf(ListExampleMessages.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(ListExampleMessages, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          _materialUiPaper2['default'],
	          null,
	          _react2['default'].createElement(
	            _materialUiList.List,
	            null,
	            _react2['default'].createElement(
	              _materialUiSubheader2['default'],
	              null,
	              'Today'
	            ),
	            this.props.posts.items.map(function (postSummary) {
	              return _react2['default'].createElement(
	                'div',
	                { key: postSummary.id },
	                _react2['default'].createElement(_PostListItem2['default'], { post: postSummary })
	              );
	            })
	          )
	        )
	      );
	    }
	  }]);
	
	  return ListExampleMessages;
	})(_react.Component);
	
	exports['default'] = ListExampleMessages;
	module.exports = exports['default'];

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Paper = __webpack_require__(220);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Paper2.default;

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(209);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(214);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(63);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(89);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(90);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(94);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(140);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(215);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _propTypes3 = __webpack_require__(221);
	
	var _propTypes4 = _interopRequireDefault(_propTypes3);
	
	var _transitions = __webpack_require__(217);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context) {
	  var rounded = props.rounded,
	      circle = props.circle,
	      transitionEnabled = props.transitionEnabled,
	      zDepth = props.zDepth;
	  var _context$muiTheme = context.muiTheme,
	      baseTheme = _context$muiTheme.baseTheme,
	      paper = _context$muiTheme.paper,
	      borderRadius = _context$muiTheme.borderRadius;
	
	
	  return {
	    root: {
	      color: paper.color,
	      backgroundColor: paper.backgroundColor,
	      transition: transitionEnabled && _transitions2.default.easeOut(),
	      boxSizing: 'border-box',
	      fontFamily: baseTheme.fontFamily,
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
	      boxShadow: paper.zDepthShadows[zDepth - 1], // No shadow for 0 depth papers
	      borderRadius: circle ? '50%' : rounded ? borderRadius : '0px'
	    }
	  };
	}
	
	var Paper = function (_Component) {
	  (0, _inherits3.default)(Paper, _Component);
	
	  function Paper() {
	    (0, _classCallCheck3.default)(this, Paper);
	    return (0, _possibleConstructorReturn3.default)(this, (Paper.__proto__ || (0, _getPrototypeOf2.default)(Paper)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Paper, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          circle = _props.circle,
	          rounded = _props.rounded,
	          style = _props.style,
	          transitionEnabled = _props.transitionEnabled,
	          zDepth = _props.zDepth,
	          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'circle', 'rounded', 'style', 'transitionEnabled', 'zDepth']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
	        children
	      );
	    }
	  }]);
	  return Paper;
	}(_react.Component);
	
	Paper.defaultProps = {
	  circle: false,
	  rounded: true,
	  transitionEnabled: true,
	  zDepth: 1
	};
	Paper.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	Paper.propTypes = process.env.NODE_ENV !== "production" ? {
	  /**
	   * Children passed into the paper element.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * Set to true to generate a circular paper container.
	   */
	  circle: _propTypes2.default.bool,
	  /**
	   * By default, the paper container will have a border radius.
	   * Set this to false to generate a container with sharp corners.
	   */
	  rounded: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  /**
	   * Set to false to disable CSS transitions for the paper element.
	   */
	  transitionEnabled: _propTypes2.default.bool,
	  /**
	   * This number represents the zDepth of the paper shadow.
	   */
	  zDepth: _propTypes4.default.zDepth
	} : {};
	exports.default = Paper;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var horizontal = _propTypes2.default.oneOf(['left', 'middle', 'right']);
	var vertical = _propTypes2.default.oneOf(['top', 'center', 'bottom']);
	
	exports.default = {
	
	  corners: _propTypes2.default.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right']),
	
	  horizontal: horizontal,
	
	  vertical: vertical,
	
	  origin: _propTypes2.default.shape({
	    horizontal: horizontal,
	    vertical: vertical
	  }),
	
	  cornersAndCenter: _propTypes2.default.oneOf(['bottom-center', 'bottom-left', 'bottom-right', 'top-center', 'top-left', 'top-right']),
	
	  stringOrNumber: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	
	  zDepth: _propTypes2.default.oneOf([0, 1, 2, 3, 4, 5])
	
	};

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.makeSelectable = exports.ListItem = exports.List = undefined;
	
	var _List2 = __webpack_require__(223);
	
	var _List3 = _interopRequireDefault(_List2);
	
	var _ListItem2 = __webpack_require__(226);
	
	var _ListItem3 = _interopRequireDefault(_ListItem2);
	
	var _makeSelectable2 = __webpack_require__(260);
	
	var _makeSelectable3 = _interopRequireDefault(_makeSelectable2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.List = _List3.default;
	exports.ListItem = _ListItem3.default;
	exports.makeSelectable = _makeSelectable3.default;
	exports.default = _List3.default;

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(209);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(214);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(63);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(89);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(90);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(94);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(140);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(215);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Subheader = __webpack_require__(224);
	
	var _Subheader2 = _interopRequireDefault(_Subheader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var List = function (_Component) {
	  (0, _inherits3.default)(List, _Component);
	
	  function List() {
	    (0, _classCallCheck3.default)(this, List);
	    return (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(List, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          style = _props.style,
	          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'style']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      var hasSubheader = false;
	
	      var firstChild = _react.Children.toArray(children)[0];
	      if ((0, _react.isValidElement)(firstChild) && firstChild.type === _Subheader2.default) {
	        hasSubheader = true;
	      }
	
	      var styles = {
	        root: {
	          padding: (hasSubheader ? 0 : 8) + 'px 0px 8px 0px'
	        }
	      };
	
	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
	        children
	      );
	    }
	  }]);
	  return List;
	}(_react.Component);
	
	List.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	List.propTypes = process.env.NODE_ENV !== "production" ? {
	  /**
	   * These are usually `ListItem`s that are passed to
	   * be part of the list.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object
	} : {};
	exports.default = List;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Subheader = __webpack_require__(225);
	
	var _Subheader2 = _interopRequireDefault(_Subheader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Subheader2.default;

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(209);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(214);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _simpleAssign = __webpack_require__(215);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Subheader = function Subheader(props, context) {
	  var children = props.children,
	      inset = props.inset,
	      style = props.style,
	      other = (0, _objectWithoutProperties3.default)(props, ['children', 'inset', 'style']);
	  var _context$muiTheme = context.muiTheme,
	      prepareStyles = _context$muiTheme.prepareStyles,
	      subheader = _context$muiTheme.subheader;
	
	
	  var styles = {
	    root: {
	      boxSizing: 'border-box',
	      color: subheader.color,
	      fontSize: 14,
	      fontWeight: subheader.fontWeight,
	      lineHeight: '48px',
	      paddingLeft: inset ? 72 : 16,
	      width: '100%'
	    }
	  };
	
	  return _react2.default.createElement(
	    'div',
	    (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
	    children
	  );
	};
	
	Subheader.muiName = 'Subheader';
	
	Subheader.propTypes = process.env.NODE_ENV !== "production" ? {
	  /**
	   * Node that will be placed inside the `Subheader`.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * If true, the `Subheader` will be indented.
	   */
	  inset: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object
	} : {};
	
	Subheader.defaultProps = {
	  inset: false
	};
	
	Subheader.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	
	exports.default = Subheader;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _objectWithoutProperties2 = __webpack_require__(214);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _extends2 = __webpack_require__(209);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(63);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(89);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(90);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(94);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(140);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(215);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(227);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _shallowEqual = __webpack_require__(228);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _colorManipulator = __webpack_require__(160);
	
	var _transitions = __webpack_require__(217);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _EnhancedButton = __webpack_require__(230);
	
	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);
	
	var _IconButton = __webpack_require__(243);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _expandLess = __webpack_require__(249);
	
	var _expandLess2 = _interopRequireDefault(_expandLess);
	
	var _expandMore = __webpack_require__(258);
	
	var _expandMore2 = _interopRequireDefault(_expandMore);
	
	var _NestedList = __webpack_require__(259);
	
	var _NestedList2 = _interopRequireDefault(_NestedList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context, state) {
	  var autoGenerateNestedIndicator = props.autoGenerateNestedIndicator,
	      insetChildren = props.insetChildren,
	      leftAvatar = props.leftAvatar,
	      leftCheckbox = props.leftCheckbox,
	      leftIcon = props.leftIcon,
	      nestedItems = props.nestedItems,
	      nestedLevel = props.nestedLevel,
	      rightAvatar = props.rightAvatar,
	      rightIcon = props.rightIcon,
	      rightIconButton = props.rightIconButton,
	      rightToggle = props.rightToggle,
	      secondaryText = props.secondaryText,
	      secondaryTextLines = props.secondaryTextLines;
	  var muiTheme = context.muiTheme;
	  var listItem = muiTheme.listItem;
	
	
	  var textColor = muiTheme.baseTheme.palette.textColor;
	  var hoverColor = props.hoverColor || (0, _colorManipulator.fade)(textColor, 0.1);
	  var singleAvatar = !secondaryText && (leftAvatar || rightAvatar);
	  var singleNoAvatar = !secondaryText && !(leftAvatar || rightAvatar);
	  var twoLine = secondaryText && secondaryTextLines === 1;
	  var threeLine = secondaryText && secondaryTextLines > 1;
	
	  var isKeyboardFocused = (props.isKeyboardFocused !== undefined ? props : state).isKeyboardFocused;
	
	  var styles = {
	    root: {
	      backgroundColor: (isKeyboardFocused || state.hovered) && !state.rightIconButtonHovered && !state.rightIconButtonKeyboardFocused ? hoverColor : null,
	      color: textColor,
	      display: 'block',
	      fontSize: 16,
	      lineHeight: '16px',
	      position: 'relative',
	      transition: _transitions2.default.easeOut()
	    },
	
	    // This inner div is needed so that ripples will span the entire container
	    innerDiv: {
	      marginLeft: nestedLevel * listItem.nestedLevelDepth,
	      paddingLeft: leftIcon || leftAvatar || leftCheckbox || insetChildren ? 72 : 16,
	      paddingRight: rightIcon || rightAvatar || rightIconButton || nestedItems.length && autoGenerateNestedIndicator ? 56 : rightToggle ? 72 : 16,
	      paddingBottom: singleAvatar ? 20 : 16,
	      paddingTop: singleNoAvatar || threeLine ? 16 : 20,
	      position: 'relative'
	    },
	
	    icons: {
	      height: 24,
	      width: 24,
	      display: 'block',
	      position: 'absolute',
	      top: twoLine ? 12 : singleAvatar ? 4 : 0,
	      margin: 12
	    },
	
	    leftIcon: {
	      left: 4
	    },
	
	    rightIcon: {
	      right: 4
	    },
	
	    avatars: {
	      position: 'absolute',
	      top: singleAvatar ? 8 : 16
	    },
	
	    label: {
	      cursor: 'pointer'
	    },
	
	    leftAvatar: {
	      left: 16
	    },
	
	    rightAvatar: {
	      right: 16
	    },
	
	    leftCheckbox: {
	      position: 'absolute',
	      display: 'block',
	      width: 24,
	      top: twoLine ? 24 : singleAvatar ? 16 : 12,
	      left: 16
	    },
	
	    primaryText: {},
	
	    rightIconButton: {
	      position: 'absolute',
	      display: 'block',
	      top: twoLine ? 12 : singleAvatar ? 4 : 0,
	      right: 4
	    },
	
	    rightToggle: {
	      position: 'absolute',
	      display: 'block',
	      width: 54,
	      top: twoLine ? 25 : singleAvatar ? 17 : 13,
	      right: 8
	    },
	
	    secondaryText: {
	      fontSize: 14,
	      lineHeight: threeLine ? '18px' : '16px',
	      height: threeLine ? 36 : 16,
	      margin: 0,
	      marginTop: 4,
	      color: listItem.secondaryTextColor,
	
	      // needed for 2 and 3 line ellipsis
	      overflow: 'hidden',
	      textOverflow: 'ellipsis',
	      whiteSpace: threeLine ? null : 'nowrap',
	      display: threeLine ? '-webkit-box' : null,
	      WebkitLineClamp: threeLine ? 2 : null,
	      WebkitBoxOrient: threeLine ? 'vertical' : null
	    }
	  };
	
	  return styles;
	}
	
	var ListItem = function (_Component) {
	  (0, _inherits3.default)(ListItem, _Component);
	
	  function ListItem() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, ListItem);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ListItem.__proto__ || (0, _getPrototypeOf2.default)(ListItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false,
	      isKeyboardFocused: false,
	      open: false,
	      rightIconButtonHovered: false,
	      rightIconButtonKeyboardFocused: false,
	      touch: false
	    }, _this.handleKeyboardFocus = function (event, isKeyboardFocused) {
	      _this.setState({ isKeyboardFocused: isKeyboardFocused });
	      _this.props.onKeyboardFocus(event, isKeyboardFocused);
	    }, _this.handleMouseEnter = function (event) {
	      if (!_this.state.touch) _this.setState({ hovered: true });
	      _this.props.onMouseEnter(event);
	    }, _this.handleMouseLeave = function (event) {
	      _this.setState({ hovered: false });
	      _this.props.onMouseLeave(event);
	    }, _this.handleClick = function (event) {
	      if (_this.props.onClick) {
	        _this.props.onClick(event);
	      }
	
	      if (_this.props.primaryTogglesNestedList) {
	        _this.handleNestedListToggle(event);
	      }
	    }, _this.handleNestedListToggle = function (event) {
	      if (_this.props.leftCheckbox) {
	        event.preventDefault();
	      }
	      event.stopPropagation();
	
	      if (_this.props.open === null) {
	        _this.setState({ open: !_this.state.open }, function () {
	          _this.props.onNestedListToggle(_this);
	        });
	      } else {
	        // Exposing `this` in the callback is quite a bad API.
	        // I'm doing a one level deep clone to expose a fake state.open.
	        _this.props.onNestedListToggle((0, _extends3.default)({}, _this, {
	          state: {
	            open: !_this.state.open
	          }
	        }));
	      }
	    }, _this.handleRightIconButtonKeyboardFocus = function (event, isKeyboardFocused) {
	      if (isKeyboardFocused) {
	        _this.setState({
	          isKeyboardFocused: false,
	          rightIconButtonKeyboardFocused: isKeyboardFocused
	        });
	      }
	
	      var iconButton = _this.props.rightIconButton;
	
	      if (iconButton && iconButton.props.onKeyboardFocus) iconButton.props.onKeyboardFocus(event, isKeyboardFocused);
	    }, _this.handleRightIconButtonMouseLeave = function (event) {
	      var iconButton = _this.props.rightIconButton;
	      _this.setState({ rightIconButtonHovered: false });
	      if (iconButton && iconButton.props.onMouseLeave) iconButton.props.onMouseLeave(event);
	    }, _this.handleRightIconButtonMouseEnter = function (event) {
	      var iconButton = _this.props.rightIconButton;
	      _this.setState({ rightIconButtonHovered: true });
	      if (iconButton && iconButton.props.onMouseEnter) iconButton.props.onMouseEnter(event);
	    }, _this.handleRightIconButtonMouseUp = function (event) {
	      var iconButton = _this.props.rightIconButton;
	      event.stopPropagation();
	      if (iconButton && iconButton.props.onMouseUp) iconButton.props.onMouseUp(event);
	    }, _this.handleRightIconButtonClick = function (event) {
	      var iconButton = _this.props.rightIconButton;
	
	      // Stop the event from bubbling up to the list-item
	      event.stopPropagation();
	      if (iconButton && iconButton.props.onClick) iconButton.props.onClick(event);
	    }, _this.handleTouchStart = function (event) {
	      _this.setState({ touch: true });
	      _this.props.onTouchStart(event);
	    }, _this.handleTouchEnd = function (event) {
	      _this.setState({ touch: true });
	      _this.props.onTouchEnd(event);
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(ListItem, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.setState({
	        open: this.props.open === null ? this.props.initiallyOpen === true : this.props.open
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // update the state when the component is controlled.
	      if (nextProps.open !== null) this.setState({ open: nextProps.open });
	      if (nextProps.disabled && this.state.hovered) this.setState({ hovered: false });
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
	    }
	
	    // This method is needed by the `MenuItem` component.
	
	  }, {
	    key: 'applyFocusState',
	    value: function applyFocusState(focusState) {
	      if (this.button) {
	        var buttonEl = _reactDom2.default.findDOMNode(this.button);
	
	        switch (focusState) {
	          case 'none':
	            buttonEl.blur();
	            break;
	          case 'focused':
	            buttonEl.focus();
	            break;
	          case 'keyboard-focused':
	            this.button.setKeyboardFocus();
	            buttonEl.focus();
	            break;
	        }
	      }
	    }
	  }, {
	    key: 'createDisabledElement',
	    value: function createDisabledElement(styles, contentChildren, additionalProps) {
	      var _props = this.props,
	          innerDivStyle = _props.innerDivStyle,
	          style = _props.style;
	
	
	      var mergedDivStyles = (0, _simpleAssign2.default)({}, styles.root, styles.innerDiv, innerDivStyle, style);
	
	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, additionalProps, {
	          style: this.context.muiTheme.prepareStyles(mergedDivStyles)
	        }),
	        contentChildren
	      );
	    }
	  }, {
	    key: 'createLabelElement',
	    value: function createLabelElement(styles, contentChildren, additionalProps) {
	      var _props2 = this.props,
	          innerDivStyle = _props2.innerDivStyle,
	          style = _props2.style;
	
	
	      var mergedLabelStyles = (0, _simpleAssign2.default)({}, styles.root, styles.innerDiv, innerDivStyle, styles.label, style);
	
	      return _react2.default.createElement(
	        'label',
	        (0, _extends3.default)({}, additionalProps, {
	          style: this.context.muiTheme.prepareStyles(mergedLabelStyles)
	        }),
	        contentChildren
	      );
	    }
	  }, {
	    key: 'createTextElement',
	    value: function createTextElement(styles, data, key) {
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      if (_react2.default.isValidElement(data)) {
	        var style = (0, _simpleAssign2.default)({}, styles, data.props.style);
	        if (typeof data.type === 'string') {
	          // if element is a native dom node
	          style = prepareStyles(style);
	        }
	        return _react2.default.cloneElement(data, {
	          key: key,
	          style: style
	        });
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { key: key, style: prepareStyles(styles) },
	        data
	      );
	    }
	  }, {
	    key: 'pushElement',
	    value: function pushElement(children, element, baseStyles, additionalProps) {
	      if (element) {
	        var styles = (0, _simpleAssign2.default)({}, baseStyles, element.props.style);
	        children.push(_react2.default.cloneElement(element, (0, _extends3.default)({
	          key: children.length,
	          style: styles
	        }, additionalProps)));
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props3 = this.props,
	          autoGenerateNestedIndicator = _props3.autoGenerateNestedIndicator,
	          children = _props3.children,
	          containerElement = _props3.containerElement,
	          disabled = _props3.disabled,
	          disableKeyboardFocus = _props3.disableKeyboardFocus,
	          hoverColor = _props3.hoverColor,
	          initiallyOpen = _props3.initiallyOpen,
	          innerDivStyle = _props3.innerDivStyle,
	          insetChildren = _props3.insetChildren,
	          leftAvatar = _props3.leftAvatar,
	          leftCheckbox = _props3.leftCheckbox,
	          leftIcon = _props3.leftIcon,
	          nestedItems = _props3.nestedItems,
	          nestedLevel = _props3.nestedLevel,
	          nestedListStyle = _props3.nestedListStyle,
	          onKeyboardFocus = _props3.onKeyboardFocus,
	          isKeyboardFocused = _props3.isKeyboardFocused,
	          onMouseEnter = _props3.onMouseEnter,
	          onMouseLeave = _props3.onMouseLeave,
	          onNestedListToggle = _props3.onNestedListToggle,
	          onTouchStart = _props3.onTouchStart,
	          onClick = _props3.onClick,
	          rightAvatar = _props3.rightAvatar,
	          rightIcon = _props3.rightIcon,
	          rightIconButton = _props3.rightIconButton,
	          rightToggle = _props3.rightToggle,
	          primaryText = _props3.primaryText,
	          primaryTogglesNestedList = _props3.primaryTogglesNestedList,
	          secondaryText = _props3.secondaryText,
	          secondaryTextLines = _props3.secondaryTextLines,
	          style = _props3.style,
	          other = (0, _objectWithoutProperties3.default)(_props3, ['autoGenerateNestedIndicator', 'children', 'containerElement', 'disabled', 'disableKeyboardFocus', 'hoverColor', 'initiallyOpen', 'innerDivStyle', 'insetChildren', 'leftAvatar', 'leftCheckbox', 'leftIcon', 'nestedItems', 'nestedLevel', 'nestedListStyle', 'onKeyboardFocus', 'isKeyboardFocused', 'onMouseEnter', 'onMouseLeave', 'onNestedListToggle', 'onTouchStart', 'onClick', 'rightAvatar', 'rightIcon', 'rightIconButton', 'rightToggle', 'primaryText', 'primaryTogglesNestedList', 'secondaryText', 'secondaryTextLines', 'style']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	      var contentChildren = [children];
	
	      if (leftIcon) {
	        var additionalProps = {
	          color: leftIcon.props.color || this.context.muiTheme.listItem.leftIconColor
	        };
	        this.pushElement(contentChildren, leftIcon, (0, _simpleAssign2.default)({}, styles.icons, styles.leftIcon), additionalProps);
	      }
	
	      if (rightIcon) {
	        var _additionalProps = {
	          color: rightIcon.props.color || this.context.muiTheme.listItem.rightIconColor
	        };
	        this.pushElement(contentChildren, rightIcon, (0, _simpleAssign2.default)({}, styles.icons, styles.rightIcon), _additionalProps);
	      }
	
	      if (leftAvatar) {
	        this.pushElement(contentChildren, leftAvatar, (0, _simpleAssign2.default)({}, styles.avatars, styles.leftAvatar));
	      }
	
	      if (rightAvatar) {
	        this.pushElement(contentChildren, rightAvatar, (0, _simpleAssign2.default)({}, styles.avatars, styles.rightAvatar));
	      }
	
	      if (leftCheckbox) {
	        this.pushElement(contentChildren, leftCheckbox, (0, _simpleAssign2.default)({}, styles.leftCheckbox));
	      }
	
	      // RightIconButtonElement
	      var hasNestListItems = nestedItems.length;
	      var hasRightElement = rightAvatar || rightIcon || rightIconButton || rightToggle;
	      var needsNestedIndicator = hasNestListItems && autoGenerateNestedIndicator && !hasRightElement;
	
	      if (rightIconButton || needsNestedIndicator) {
	        var rightIconButtonElement = rightIconButton;
	        var rightIconButtonHandlers = {
	          onKeyboardFocus: this.handleRightIconButtonKeyboardFocus,
	          onMouseEnter: this.handleRightIconButtonMouseEnter,
	          onMouseLeave: this.handleRightIconButtonMouseLeave,
	          onClick: this.handleRightIconButtonClick,
	          onMouseDown: this.handleRightIconButtonMouseUp,
	          onMouseUp: this.handleRightIconButtonMouseUp
	        };
	
	        // Create a nested list indicator icon if we don't have an icon on the right
	        if (needsNestedIndicator) {
	          rightIconButtonElement = this.state.open ? _react2.default.createElement(
	            _IconButton2.default,
	            null,
	            _react2.default.createElement(_expandLess2.default, null)
	          ) : _react2.default.createElement(
	            _IconButton2.default,
	            null,
	            _react2.default.createElement(_expandMore2.default, null)
	          );
	          rightIconButtonHandlers.onClick = this.handleNestedListToggle;
	        }
	
	        this.pushElement(contentChildren, rightIconButtonElement, (0, _simpleAssign2.default)({}, styles.rightIconButton), rightIconButtonHandlers);
	      }
	
	      if (rightToggle) {
	        this.pushElement(contentChildren, rightToggle, (0, _simpleAssign2.default)({}, styles.rightToggle));
	      }
	
	      if (primaryText) {
	        var primaryTextElement = this.createTextElement(styles.primaryText, primaryText, 'primaryText');
	        contentChildren.push(primaryTextElement);
	      }
	
	      if (secondaryText) {
	        var secondaryTextElement = this.createTextElement(styles.secondaryText, secondaryText, 'secondaryText');
	        contentChildren.push(secondaryTextElement);
	      }
	
	      var nestedList = nestedItems.length ? _react2.default.createElement(
	        _NestedList2.default,
	        { nestedLevel: nestedLevel, open: this.state.open, style: nestedListStyle },
	        nestedItems
	      ) : undefined;
	
	      var simpleLabel = !primaryTogglesNestedList && (leftCheckbox || rightToggle);
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        simpleLabel ? this.createLabelElement(styles, contentChildren, other) : disabled ? this.createDisabledElement(styles, contentChildren, other) : _react2.default.createElement(
	          _EnhancedButton2.default,
	          (0, _extends3.default)({
	            containerElement: containerElement
	          }, other, {
	            disableKeyboardFocus: disableKeyboardFocus || this.state.rightIconButtonKeyboardFocused,
	            onKeyboardFocus: this.handleKeyboardFocus,
	            onMouseLeave: this.handleMouseLeave,
	            onMouseEnter: this.handleMouseEnter,
	            onTouchStart: this.handleTouchStart,
	            onTouchEnd: this.handleTouchEnd,
	            onClick: this.handleClick,
	            disabled: disabled,
	            ref: function ref(node) {
	              return _this2.button = node;
	            },
	            style: (0, _simpleAssign2.default)({}, styles.root, style)
	          }),
	          _react2.default.createElement(
	            'div',
	            { style: prepareStyles((0, _simpleAssign2.default)(styles.innerDiv, innerDivStyle)) },
	            contentChildren
	          )
	        ),
	        nestedList
	      );
	    }
	  }]);
	  return ListItem;
	}(_react.Component);
	
	ListItem.muiName = 'ListItem';
	ListItem.defaultProps = {
	  autoGenerateNestedIndicator: true,
	  containerElement: 'span',
	  disableKeyboardFocus: false,
	  disabled: false,
	  initiallyOpen: false,
	  insetChildren: false,
	  nestedItems: [],
	  nestedLevel: 0,
	  onKeyboardFocus: function onKeyboardFocus() {},
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {},
	  onNestedListToggle: function onNestedListToggle() {},
	  onTouchEnd: function onTouchEnd() {},
	  onTouchStart: function onTouchStart() {},
	  open: null,
	  primaryTogglesNestedList: false,
	  secondaryTextLines: 1
	};
	ListItem.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	ListItem.propTypes = process.env.NODE_ENV !== "production" ? {
	  /**
	   * If true, generate a nested-list-indicator icon when nested list
	   * items are detected. Note that an indicator will not be created
	   * if a `rightIcon` or `rightIconButton` has been provided to
	   * the element.
	   */
	  autoGenerateNestedIndicator: _propTypes2.default.bool,
	  /**
	   * Children passed into the `ListItem`.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * The element to use as the container for the ListItem. Either a string to
	   * use a DOM element or a ReactElement. This is useful for wrapping the
	   * ListItem in a custom Link component. If a ReactElement is given, ensure
	   * that it passes all of its given props through to the underlying DOM
	   * element and renders its children prop for proper integration.
	   */
	  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
	  /**
	   * If true, the element will not be able to be focused by the keyboard.
	   */
	  disableKeyboardFocus: _propTypes2.default.bool,
	  /**
	   * If true, the element will not be clickable
	   * and will not display hover effects.
	   * This is automatically disabled if either `leftCheckbox`
	   * or `rightToggle` is set.
	   */
	  disabled: _propTypes2.default.bool,
	  /**
	  * Override the hover background color.
	  */
	  hoverColor: _propTypes2.default.string,
	  /**
	   * If true, the nested `ListItem`s are initially displayed.
	   */
	  initiallyOpen: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the inner div element.
	   */
	  innerDivStyle: _propTypes2.default.object,
	  /**
	   * If true, the children will be indented by 72px.
	   * This is useful if there is no left avatar or left icon.
	   */
	  insetChildren: _propTypes2.default.bool,
	  /**
	   * Use to control if the list item should render as keyboard focused.  If
	   * undefined (default), this will be automatically managed.  If provided,
	   * it will change the components style.  Note that this will not change the
	   * actual focus - and should only be used when you want to simulate
	   * keyboard focus (eg. in a rich text input autocomplete).
	   */
	  isKeyboardFocused: _propTypes2.default.bool,
	  /**
	   * This is the `Avatar` element to be displayed on the left side.
	   */
	  leftAvatar: _propTypes2.default.element,
	  /**
	   * This is the `Checkbox` element to be displayed on the left side.
	   */
	  leftCheckbox: _propTypes2.default.element,
	  /**
	   * This is the `SvgIcon` or `FontIcon` to be displayed on the left side.
	   */
	  leftIcon: _propTypes2.default.element,
	  /**
	   * An array of `ListItem`s to nest underneath the current `ListItem`.
	   */
	  nestedItems: _propTypes2.default.arrayOf(_propTypes2.default.element),
	  /**
	   * Controls how deep a `ListItem` appears.
	   * This property is automatically managed, so modify at your own risk.
	   */
	  nestedLevel: _propTypes2.default.number,
	  /**
	   * Override the inline-styles of the nested items' `NestedList`.
	   */
	  nestedListStyle: _propTypes2.default.object,
	  /**
	   * Callback function fired when the list item is clicked.
	   *
	   * @param {object} event Click event targeting the list item.
	   */
	  onClick: _propTypes2.default.func,
	  /**
	   * Callback function fired when the `ListItem` is focused or blurred by the keyboard.
	   *
	   * @param {object} event `focus` or `blur` event targeting the `ListItem`.
	   * @param {boolean} isKeyboardFocused If true, the `ListItem` is focused.
	   */
	  onKeyboardFocus: _propTypes2.default.func,
	  /** @ignore */
	  onMouseEnter: _propTypes2.default.func,
	  /** @ignore */
	  onMouseLeave: _propTypes2.default.func,
	  /**
	   * Callback function fired when the `ListItem` toggles its nested list.
	   *
	   * @param {object} listItem The `ListItem`.
	   */
	  onNestedListToggle: _propTypes2.default.func,
	  /** @ignore */
	  onTouchEnd: _propTypes2.default.func,
	  /** @ignore */
	  onTouchStart: _propTypes2.default.func,
	  /**
	   * Control toggle state of nested list.
	   */
	  open: _propTypes2.default.bool,
	  /**
	   * This is the block element that contains the primary text.
	   * If a string is passed in, a div tag will be rendered.
	   */
	  primaryText: _propTypes2.default.node,
	  /**
	   * If true, clicking or tapping the primary text of the `ListItem`
	   * toggles the nested list.
	   */
	  primaryTogglesNestedList: _propTypes2.default.bool,
	  /**
	   * This is the `Avatar` element to be displayed on the right side.
	   */
	  rightAvatar: _propTypes2.default.element,
	  /**
	   * This is the `SvgIcon` or `FontIcon` to be displayed on the right side.
	   */
	  rightIcon: _propTypes2.default.element,
	  /**
	   * This is the `IconButton` to be displayed on the right side.
	   * Hovering over this button will remove the `ListItem` hover.
	   * Also, clicking on this button will not trigger a
	   * ripple on the `ListItem`; the event will be stopped and prevented
	   * from bubbling up to cause a `ListItem` click.
	   */
	  rightIconButton: _propTypes2.default.element,
	  /**
	   * This is the `Toggle` element to display on the right side.
	   */
	  rightToggle: _propTypes2.default.element,
	  /**
	   * This is the block element that contains the secondary text.
	   * If a string is passed in, a div tag will be rendered.
	   */
	  secondaryText: _propTypes2.default.node,
	  /**
	   * Can be 1 or 2. This is the number of secondary
	   * text lines before ellipsis will show.
	   */
	  secondaryTextLines: _propTypes2.default.oneOf([1, 2]),
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object
	} : {};
	exports.default = ListItem;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 227 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_227__;

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _shallowEqual = __webpack_require__(229);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _shallowEqual2.default;

/***/ }),
/* 229 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 * 
	 */
	
	/*eslint-disable no-self-compare */
	
	'use strict';
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    // Added the nonzero y check to make Flow happy, but it is redundant
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}
	
	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = shallowEqual;

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(209);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(214);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(63);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(89);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(90);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(94);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(140);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(215);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _events = __webpack_require__(231);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _keycode = __webpack_require__(232);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	var _FocusRipple = __webpack_require__(233);
	
	var _FocusRipple2 = _interopRequireDefault(_FocusRipple);
	
	var _TouchRipple = __webpack_require__(239);
	
	var _TouchRipple2 = _interopRequireDefault(_TouchRipple);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styleInjected = false;
	var listening = false;
	var tabPressed = false;
	
	function injectStyle() {
	  if (!styleInjected) {
	    // Remove inner padding and border in Firefox 4+.
	    var style = document.createElement('style');
	    style.innerHTML = '\n      button::-moz-focus-inner,\n      input::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n      }\n    ';
	
	    document.body.appendChild(style);
	    styleInjected = true;
	  }
	}
	
	function listenForTabPresses() {
	  if (!listening) {
	    _events2.default.on(window, 'keydown', function (event) {
	      tabPressed = (0, _keycode2.default)(event) === 'tab';
	    });
	    listening = true;
	  }
	}
	
	var EnhancedButton = function (_Component) {
	  (0, _inherits3.default)(EnhancedButton, _Component);
	
	  function EnhancedButton() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, EnhancedButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EnhancedButton.__proto__ || (0, _getPrototypeOf2.default)(EnhancedButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      isKeyboardFocused: false
	    }, _this.handleKeyDown = function (event) {
	      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
	        if ((0, _keycode2.default)(event) === 'enter' && _this.state.isKeyboardFocused) {
	          _this.handleClick(event);
	        }
	        if ((0, _keycode2.default)(event) === 'esc' && _this.state.isKeyboardFocused) {
	          _this.removeKeyboardFocus(event);
	        }
	      }
	      _this.props.onKeyDown(event);
	    }, _this.handleKeyUp = function (event) {
	      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
	        if ((0, _keycode2.default)(event) === 'space' && _this.state.isKeyboardFocused) {
	          _this.handleClick(event);
	        }
	      }
	      _this.props.onKeyUp(event);
	    }, _this.handleBlur = function (event) {
	      _this.cancelFocusTimeout();
	      _this.removeKeyboardFocus(event);
	      _this.props.onBlur(event);
	    }, _this.handleFocus = function (event) {
	      if (event) event.persist();
	      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
	        // setTimeout is needed because the focus event fires first
	        // Wait so that we can capture if this was a keyboard focus
	        // or touch focus
	        _this.focusTimeout = setTimeout(function () {
	          if (tabPressed) {
	            _this.setKeyboardFocus(event);
	            tabPressed = false;
	          }
	        }, 150);
	
	        _this.props.onFocus(event);
	      }
	    }, _this.handleClick = function (event) {
	      _this.cancelFocusTimeout();
	      if (!_this.props.disabled) {
	        tabPressed = false;
	        _this.removeKeyboardFocus(event);
	        _this.props.onClick(event);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(EnhancedButton, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props,
	          disabled = _props.disabled,
	          disableKeyboardFocus = _props.disableKeyboardFocus,
	          keyboardFocused = _props.keyboardFocused;
	
	      if (!disabled && keyboardFocused && !disableKeyboardFocus) {
	        this.setState({ isKeyboardFocused: true });
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      injectStyle();
	      listenForTabPresses();
	      if (this.state.isKeyboardFocused) {
	        this.button.focus();
	        this.props.onKeyboardFocus(null, true);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if ((nextProps.disabled || nextProps.disableKeyboardFocus) && this.state.isKeyboardFocused) {
	        this.setState({ isKeyboardFocused: false });
	        if (nextProps.onKeyboardFocus) {
	          nextProps.onKeyboardFocus(null, false);
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.focusTimeout) {
	        clearTimeout(this.focusTimeout);
	      }
	    }
	  }, {
	    key: 'isKeyboardFocused',
	    value: function isKeyboardFocused() {
	      return this.state.isKeyboardFocused;
	    }
	  }, {
	    key: 'removeKeyboardFocus',
	    value: function removeKeyboardFocus(event) {
	      if (this.state.isKeyboardFocused) {
	        this.setState({ isKeyboardFocused: false });
	        this.props.onKeyboardFocus(event, false);
	      }
	    }
	  }, {
	    key: 'setKeyboardFocus',
	    value: function setKeyboardFocus(event) {
	      if (!this.state.isKeyboardFocused) {
	        this.setState({ isKeyboardFocused: true });
	        this.props.onKeyboardFocus(event, true);
	      }
	    }
	  }, {
	    key: 'cancelFocusTimeout',
	    value: function cancelFocusTimeout() {
	      if (this.focusTimeout) {
	        clearTimeout(this.focusTimeout);
	        this.focusTimeout = null;
	      }
	    }
	  }, {
	    key: 'createButtonChildren',
	    value: function createButtonChildren() {
	      var _props2 = this.props,
	          centerRipple = _props2.centerRipple,
	          children = _props2.children,
	          disabled = _props2.disabled,
	          disableFocusRipple = _props2.disableFocusRipple,
	          disableKeyboardFocus = _props2.disableKeyboardFocus,
	          disableTouchRipple = _props2.disableTouchRipple,
	          focusRippleColor = _props2.focusRippleColor,
	          focusRippleOpacity = _props2.focusRippleOpacity,
	          touchRippleColor = _props2.touchRippleColor,
	          touchRippleOpacity = _props2.touchRippleOpacity;
	      var isKeyboardFocused = this.state.isKeyboardFocused;
	
	      // Focus Ripple
	
	      var focusRipple = isKeyboardFocused && !disabled && !disableFocusRipple && !disableKeyboardFocus ? _react2.default.createElement(_FocusRipple2.default, {
	        color: focusRippleColor,
	        opacity: focusRippleOpacity,
	        show: isKeyboardFocused,
	        style: {
	          overflow: 'hidden'
	        },
	        key: 'focusRipple'
	      }) : undefined;
	
	      // Touch Ripple
	      var touchRipple = !disabled && !disableTouchRipple ? _react2.default.createElement(
	        _TouchRipple2.default,
	        {
	          centerRipple: centerRipple,
	          color: touchRippleColor,
	          opacity: touchRippleOpacity,
	          key: 'touchRipple'
	        },
	        children
	      ) : undefined;
	
	      return [focusRipple, touchRipple, touchRipple ? undefined : children];
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props3 = this.props,
	          centerRipple = _props3.centerRipple,
	          children = _props3.children,
	          containerElement = _props3.containerElement,
	          disabled = _props3.disabled,
	          disableFocusRipple = _props3.disableFocusRipple,
	          disableKeyboardFocus = _props3.disableKeyboardFocus,
	          disableTouchRipple = _props3.disableTouchRipple,
	          focusRippleColor = _props3.focusRippleColor,
	          focusRippleOpacity = _props3.focusRippleOpacity,
	          href = _props3.href,
	          keyboardFocused = _props3.keyboardFocused,
	          touchRippleColor = _props3.touchRippleColor,
	          touchRippleOpacity = _props3.touchRippleOpacity,
	          onBlur = _props3.onBlur,
	          onClick = _props3.onClick,
	          onFocus = _props3.onFocus,
	          onKeyUp = _props3.onKeyUp,
	          onKeyDown = _props3.onKeyDown,
	          onKeyboardFocus = _props3.onKeyboardFocus,
	          style = _props3.style,
	          tabIndex = _props3.tabIndex,
	          type = _props3.type,
	          other = (0, _objectWithoutProperties3.default)(_props3, ['centerRipple', 'children', 'containerElement', 'disabled', 'disableFocusRipple', 'disableKeyboardFocus', 'disableTouchRipple', 'focusRippleColor', 'focusRippleOpacity', 'href', 'keyboardFocused', 'touchRippleColor', 'touchRippleOpacity', 'onBlur', 'onClick', 'onFocus', 'onKeyUp', 'onKeyDown', 'onKeyboardFocus', 'style', 'tabIndex', 'type']);
	      var _context$muiTheme = this.context.muiTheme,
	          prepareStyles = _context$muiTheme.prepareStyles,
	          enhancedButton = _context$muiTheme.enhancedButton;
	
	
	      var mergedStyles = (0, _simpleAssign2.default)({
	        border: 10,
	        boxSizing: 'border-box',
	        display: 'inline-block',
	        fontFamily: this.context.muiTheme.baseTheme.fontFamily,
	        WebkitTapHighlightColor: enhancedButton.tapHighlightColor, // Remove mobile color flashing (deprecated)
	        cursor: disabled ? 'default' : 'pointer',
	        textDecoration: 'none',
	        margin: 0,
	        padding: 0,
	        outline: 'none',
	        fontSize: 'inherit',
	        fontWeight: 'inherit',
	        position: 'relative', // This is needed so that ripples do not bleed past border radius.
	        verticalAlign: href ? 'middle' : null
	      }, style);
	
	      // Passing both background:none & backgroundColor can break due to object iteration order
	      if (!mergedStyles.backgroundColor && !mergedStyles.background) {
	        mergedStyles.background = 'none';
	      }
	
	      if (disabled && href) {
	        return _react2.default.createElement(
	          'span',
	          (0, _extends3.default)({}, other, {
	            style: mergedStyles
	          }),
	          children
	        );
	      }
	
	      var buttonProps = (0, _extends3.default)({}, other, {
	        style: prepareStyles(mergedStyles),
	        ref: function ref(node) {
	          return _this2.button = node;
	        },
	        disabled: disabled,
	        onBlur: this.handleBlur,
	        onFocus: this.handleFocus,
	        onKeyUp: this.handleKeyUp,
	        onKeyDown: this.handleKeyDown,
	        onClick: this.handleClick,
	        tabIndex: disabled || disableKeyboardFocus ? -1 : tabIndex
	      });
	
	      if (href) buttonProps.href = href;
	
	      var buttonChildren = this.createButtonChildren();
	
	      if (_react2.default.isValidElement(containerElement)) {
	        return _react2.default.cloneElement(containerElement, buttonProps, buttonChildren);
	      }
	
	      if (!href && containerElement === 'button') {
	        buttonProps.type = type;
	      }
	
	      return _react2.default.createElement(href ? 'a' : containerElement, buttonProps, buttonChildren);
	    }
	  }]);
	  return EnhancedButton;
	}(_react.Component);
	
	EnhancedButton.defaultProps = {
	  containerElement: 'button',
	  onBlur: function onBlur() {},
	  onClick: function onClick() {},
	  onFocus: function onFocus() {},
	  onKeyDown: function onKeyDown() {},
	  onKeyUp: function onKeyUp() {},
	  onKeyboardFocus: function onKeyboardFocus() {},
	  tabIndex: 0,
	  type: 'button'
	};
	EnhancedButton.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	EnhancedButton.propTypes = process.env.NODE_ENV !== "production" ? {
	  centerRipple: _propTypes2.default.bool,
	  children: _propTypes2.default.node,
	  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
	  disableFocusRipple: _propTypes2.default.bool,
	  disableKeyboardFocus: _propTypes2.default.bool,
	  disableTouchRipple: _propTypes2.default.bool,
	  disabled: _propTypes2.default.bool,
	  focusRippleColor: _propTypes2.default.string,
	  focusRippleOpacity: _propTypes2.default.number,
	  href: _propTypes2.default.string,
	  keyboardFocused: _propTypes2.default.bool,
	  onBlur: _propTypes2.default.func,
	  onClick: _propTypes2.default.func,
	  onFocus: _propTypes2.default.func,
	  onKeyDown: _propTypes2.default.func,
	  onKeyUp: _propTypes2.default.func,
	  onKeyboardFocus: _propTypes2.default.func,
	  style: _propTypes2.default.object,
	  tabIndex: _propTypes2.default.number,
	  touchRippleColor: _propTypes2.default.string,
	  touchRippleOpacity: _propTypes2.default.number,
	  type: _propTypes2.default.string
	} : {};
	exports.default = EnhancedButton;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 231 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  once: function once(el, type, callback) {
	    var typeArray = type ? type.split(' ') : [];
	    var recursiveFunction = function recursiveFunction(event) {
	      event.target.removeEventListener(event.type, recursiveFunction);
	      return callback(event);
	    };
	
	    for (var i = typeArray.length - 1; i >= 0; i--) {
	      this.on(el, typeArray[i], recursiveFunction);
	    }
	  },
	  on: function on(el, type, callback) {
	    if (el.addEventListener) {
	      el.addEventListener(type, callback);
	    } else {
	      // IE8+ Support
	      el.attachEvent('on' + type, function () {
	        callback.call(el);
	      });
	    }
	  },
	  off: function off(el, type, callback) {
	    if (el.removeEventListener) {
	      el.removeEventListener(type, callback);
	    } else {
	      // IE8+ Support
	      el.detachEvent('on' + type, callback);
	    }
	  },
	  isKeyboard: function isKeyboard(event) {
	    return ['keydown', 'keypress', 'keyup'].indexOf(event.type) !== -1;
	  }
	};

/***/ }),
/* 232 */
/***/ (function(module, exports) {

	// Source: http://jsfiddle.net/vWx8V/
	// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes
	
	/**
	 * Conenience method returns corresponding value for given keyName or keyCode.
	 *
	 * @param {Mixed} keyCode {Number} or keyName {String}
	 * @return {Mixed}
	 * @api public
	 */
	
	exports = module.exports = function(searchInput) {
	  // Keyboard Events
	  if (searchInput && 'object' === typeof searchInput) {
	    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode
	    if (hasKeyCode) searchInput = hasKeyCode
	  }
	
	  // Numbers
	  if ('number' === typeof searchInput) return names[searchInput]
	
	  // Everything else (cast to string)
	  var search = String(searchInput)
	
	  // check codes
	  var foundNamedKey = codes[search.toLowerCase()]
	  if (foundNamedKey) return foundNamedKey
	
	  // check aliases
	  var foundNamedKey = aliases[search.toLowerCase()]
	  if (foundNamedKey) return foundNamedKey
	
	  // weird character?
	  if (search.length === 1) return search.charCodeAt(0)
	
	  return undefined
	}
	
	/**
	 * Get by name
	 *
	 *   exports.code['enter'] // => 13
	 */
	
	var codes = exports.code = exports.codes = {
	  'backspace': 8,
	  'tab': 9,
	  'enter': 13,
	  'shift': 16,
	  'ctrl': 17,
	  'alt': 18,
	  'pause/break': 19,
	  'caps lock': 20,
	  'esc': 27,
	  'space': 32,
	  'page up': 33,
	  'page down': 34,
	  'end': 35,
	  'home': 36,
	  'left': 37,
	  'up': 38,
	  'right': 39,
	  'down': 40,
	  'insert': 45,
	  'delete': 46,
	  'command': 91,
	  'left command': 91,
	  'right command': 93,
	  'numpad *': 106,
	  'numpad +': 107,
	  'numpad -': 109,
	  'numpad .': 110,
	  'numpad /': 111,
	  'num lock': 144,
	  'scroll lock': 145,
	  'my computer': 182,
	  'my calculator': 183,
	  ';': 186,
	  '=': 187,
	  ',': 188,
	  '-': 189,
	  '.': 190,
	  '/': 191,
	  '`': 192,
	  '[': 219,
	  '\\': 220,
	  ']': 221,
	  "'": 222
	}
	
	// Helper aliases
	
	var aliases = exports.aliases = {
	  'windows': 91,
	  '⇧': 16,
	  '⌥': 18,
	  '⌃': 17,
	  '⌘': 91,
	  'ctl': 17,
	  'control': 17,
	  'option': 18,
	  'pause': 19,
	  'break': 19,
	  'caps': 20,
	  'return': 13,
	  'escape': 27,
	  'spc': 32,
	  'pgup': 33,
	  'pgdn': 34,
	  'ins': 45,
	  'del': 46,
	  'cmd': 91
	}
	
	
	/*!
	 * Programatically add the following
	 */
	
	// lower case chars
	for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32
	
	// numbers
	for (var i = 48; i < 58; i++) codes[i - 48] = i
	
	// function keys
	for (i = 1; i < 13; i++) codes['f'+i] = i + 111
	
	// numpad keys
	for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96
	
	/**
	 * Get by code
	 *
	 *   exports.name[13] // => 'Enter'
	 */
	
	var names = exports.names = exports.title = {} // title for backward compat
	
	// Create reverse mapping
	for (i in codes) names[codes[i]] = i
	
	// Add aliases
	for (var alias in aliases) {
	  codes[alias] = aliases[alias]
	}


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(63);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(89);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(90);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(94);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(140);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(215);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(227);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _shallowEqual = __webpack_require__(228);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _autoPrefix = __webpack_require__(216);
	
	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);
	
	var _transitions = __webpack_require__(217);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _ScaleIn = __webpack_require__(234);
	
	var _ScaleIn2 = _interopRequireDefault(_ScaleIn);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var pulsateDuration = 750;
	
	var FocusRipple = function (_Component) {
	  (0, _inherits3.default)(FocusRipple, _Component);
	
	  function FocusRipple() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, FocusRipple);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FocusRipple.__proto__ || (0, _getPrototypeOf2.default)(FocusRipple)).call.apply(_ref, [this].concat(args))), _this), _this.pulsate = function () {
	      var innerCircle = _reactDom2.default.findDOMNode(_this.refs.innerCircle);
	      if (!innerCircle) return;
	
	      var startScale = 'scale(1)';
	      var endScale = 'scale(0.85)';
	      var currentScale = innerCircle.style.transform || startScale;
	      var nextScale = currentScale === startScale ? endScale : startScale;
	
	      _autoPrefix2.default.set(innerCircle.style, 'transform', nextScale);
	      _this.timeout = setTimeout(_this.pulsate, pulsateDuration);
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(FocusRipple, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.show) {
	        this.setRippleSize();
	        this.pulsate();
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.props.show) {
	        this.setRippleSize();
	        this.pulsate();
	      } else {
	        if (this.timeout) clearTimeout(this.timeout);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.timeout);
	    }
	  }, {
	    key: 'getRippleElement',
	    value: function getRippleElement(props) {
	      var color = props.color,
	          innerStyle = props.innerStyle,
	          opacity = props.opacity;
	      var _context$muiTheme = this.context.muiTheme,
	          prepareStyles = _context$muiTheme.prepareStyles,
	          ripple = _context$muiTheme.ripple;
	
	
	      var innerStyles = (0, _simpleAssign2.default)({
	        position: 'absolute',
	        height: '100%',
	        width: '100%',
	        borderRadius: '50%',
	        opacity: opacity ? opacity : 0.16,
	        backgroundColor: color || ripple.color,
	        transition: _transitions2.default.easeOut(pulsateDuration + 'ms', 'transform', null, _transitions2.default.easeInOutFunction)
	      }, innerStyle);
	
	      return _react2.default.createElement('div', { ref: 'innerCircle', style: prepareStyles((0, _simpleAssign2.default)({}, innerStyles)) });
	    }
	  }, {
	    key: 'setRippleSize',
	    value: function setRippleSize() {
	      var el = _reactDom2.default.findDOMNode(this.refs.innerCircle);
	      var height = el.offsetHeight;
	      var width = el.offsetWidth;
	      var size = Math.max(height, width);
	
	      var oldTop = 0;
	      // For browsers that don't support endsWith()
	      if (el.style.top.indexOf('px', el.style.top.length - 2) !== -1) {
	        oldTop = parseInt(el.style.top);
	      }
	      el.style.height = size + 'px';
	      el.style.top = height / 2 - size / 2 + oldTop + 'px';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          show = _props.show,
	          style = _props.style;
	
	
	      var mergedRootStyles = (0, _simpleAssign2.default)({
	        height: '100%',
	        width: '100%',
	        position: 'absolute',
	        top: 0,
	        left: 0
	      }, style);
	
	      var ripple = show ? this.getRippleElement(this.props) : null;
	
	      return _react2.default.createElement(
	        _ScaleIn2.default,
	        {
	          maxScale: 0.85,
	          style: mergedRootStyles
	        },
	        ripple
	      );
	    }
	  }]);
	  return FocusRipple;
	}(_react.Component);
	
	FocusRipple.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	FocusRipple.propTypes = process.env.NODE_ENV !== "production" ? {
	  color: _propTypes2.default.string,
	  innerStyle: _propTypes2.default.object,
	  opacity: _propTypes2.default.number,
	  show: _propTypes2.default.bool,
	  style: _propTypes2.default.object
	} : {};
	exports.default = FocusRipple;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(209);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(214);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(63);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(89);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(90);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(94);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(140);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(215);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _TransitionGroup = __webpack_require__(235);
	
	var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);
	
	var _ScaleInChild = __webpack_require__(238);
	
	var _ScaleInChild2 = _interopRequireDefault(_ScaleInChild);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ScaleIn = function (_Component) {
	  (0, _inherits3.default)(ScaleIn, _Component);
	
	  function ScaleIn() {
	    (0, _classCallCheck3.default)(this, ScaleIn);
	    return (0, _possibleConstructorReturn3.default)(this, (ScaleIn.__proto__ || (0, _getPrototypeOf2.default)(ScaleIn)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(ScaleIn, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          childStyle = _props.childStyle,
	          enterDelay = _props.enterDelay,
	          maxScale = _props.maxScale,
	          minScale = _props.minScale,
	          style = _props.style,
	          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'childStyle', 'enterDelay', 'maxScale', 'minScale', 'style']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
	        position: 'relative',
	        height: '100%'
	      }, style);
	
	      var newChildren = _react2.default.Children.map(children, function (child) {
	        return _react2.default.createElement(
	          _ScaleInChild2.default,
	          {
	            key: child.key,
	            enterDelay: enterDelay,
	            maxScale: maxScale,
	            minScale: minScale,
	            style: childStyle
	          },
	          child
	        );
	      });
	
	      return _react2.default.createElement(
	        _TransitionGroup2.default,
	        (0, _extends3.default)({}, other, {
	          style: prepareStyles(mergedRootStyles),
	          component: 'div'
	        }),
	        newChildren
	      );
	    }
	  }]);
	  return ScaleIn;
	}(_react.Component);
	
	ScaleIn.defaultProps = {
	  enterDelay: 0
	};
	ScaleIn.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	ScaleIn.propTypes = process.env.NODE_ENV !== "production" ? {
	  childStyle: _propTypes2.default.object,
	  children: _propTypes2.default.node,
	  enterDelay: _propTypes2.default.number,
	  maxScale: _propTypes2.default.number,
	  minScale: _propTypes2.default.number,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object
	} : {};
	exports.default = ScaleIn;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _chainFunction = __webpack_require__(236);
	
	var _chainFunction2 = _interopRequireDefault(_chainFunction);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _warning = __webpack_require__(161);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _ChildMapping = __webpack_require__(237);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  component: _propTypes2.default.any,
	  childFactory: _propTypes2.default.func,
	  children: _propTypes2.default.node
	};
	
	var defaultProps = {
	  component: 'span',
	  childFactory: function childFactory(child) {
	    return child;
	  }
	};
	
	var TransitionGroup = function (_React$Component) {
	  _inherits(TransitionGroup, _React$Component);
	
	  function TransitionGroup(props, context) {
	    _classCallCheck(this, TransitionGroup);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
	
	    _this.performAppear = function (key, component) {
	      _this.currentlyTransitioningKeys[key] = true;
	
	      if (component.componentWillAppear) {
	        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key, component));
	      } else {
	        _this._handleDoneAppearing(key, component);
	      }
	    };
	
	    _this._handleDoneAppearing = function (key, component) {
	      if (component.componentDidAppear) {
	        component.componentDidAppear();
	      }
	
	      delete _this.currentlyTransitioningKeys[key];
	
	      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);
	
	      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	        // This was removed before it had fully appeared. Remove it.
	        _this.performLeave(key, component);
	      }
	    };
	
	    _this.performEnter = function (key, component) {
	      _this.currentlyTransitioningKeys[key] = true;
	
	      if (component.componentWillEnter) {
	        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key, component));
	      } else {
	        _this._handleDoneEntering(key, component);
	      }
	    };
	
	    _this._handleDoneEntering = function (key, component) {
	      if (component.componentDidEnter) {
	        component.componentDidEnter();
	      }
	
	      delete _this.currentlyTransitioningKeys[key];
	
	      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);
	
	      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	        // This was removed before it had fully entered. Remove it.
	        _this.performLeave(key, component);
	      }
	    };
	
	    _this.performLeave = function (key, component) {
	      _this.currentlyTransitioningKeys[key] = true;
	
	      if (component.componentWillLeave) {
	        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key, component));
	      } else {
	        // Note that this is somewhat dangerous b/c it calls setState()
	        // again, effectively mutating the component before all the work
	        // is done.
	        _this._handleDoneLeaving(key, component);
	      }
	    };
	
	    _this._handleDoneLeaving = function (key, component) {
	      if (component.componentDidLeave) {
	        component.componentDidLeave();
	      }
	
	      delete _this.currentlyTransitioningKeys[key];
	
	      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);
	
	      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
	        // This entered again before it fully left. Add it again.
	        _this.keysToEnter.push(key);
	      } else {
	        _this.setState(function (state) {
	          var newChildren = _extends({}, state.children);
	          delete newChildren[key];
	          return { children: newChildren };
	        });
	      }
	    };
	
	    _this.childRefs = Object.create(null);
	
	    _this.state = {
	      children: (0, _ChildMapping.getChildMapping)(props.children)
	    };
	    return _this;
	  }
	
	  TransitionGroup.prototype.componentWillMount = function componentWillMount() {
	    this.currentlyTransitioningKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	  };
	
	  TransitionGroup.prototype.componentDidMount = function componentDidMount() {
	    var initialChildMapping = this.state.children;
	    for (var key in initialChildMapping) {
	      if (initialChildMapping[key]) {
	        this.performAppear(key, this.childRefs[key]);
	      }
	    }
	  };
	
	  TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var nextChildMapping = (0, _ChildMapping.getChildMapping)(nextProps.children);
	    var prevChildMapping = this.state.children;
	
	    this.setState({
	      children: (0, _ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping)
	    });
	
	    for (var key in nextChildMapping) {
	      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
	      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
	        this.keysToEnter.push(key);
	      }
	    }
	
	    for (var _key in prevChildMapping) {
	      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(_key);
	      if (prevChildMapping[_key] && !hasNext && !this.currentlyTransitioningKeys[_key]) {
	        this.keysToLeave.push(_key);
	      }
	    }
	
	    // If we want to someday check for reordering, we could do it here.
	  };
	
	  TransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
	    var _this2 = this;
	
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(function (key) {
	      return _this2.performEnter(key, _this2.childRefs[key]);
	    });
	
	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(function (key) {
	      return _this2.performLeave(key, _this2.childRefs[key]);
	    });
	  };
	
	  TransitionGroup.prototype.render = function render() {
	    var _this3 = this;
	
	    // TODO: we could get rid of the need for the wrapper node
	    // by cloning a single child
	    var childrenToRender = [];
	
	    var _loop = function _loop(key) {
	      var child = _this3.state.children[key];
	      if (child) {
	        var isCallbackRef = typeof child.ref !== 'string';
	        var factoryChild = _this3.props.childFactory(child);
	        var ref = function ref(r) {
	          _this3.childRefs[key] = r;
	        };
	
	        process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(isCallbackRef, 'string refs are not supported on children of TransitionGroup and will be ignored. ' + 'Please use a callback ref instead: https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute') : void 0;
	
	        // Always chaining the refs leads to problems when the childFactory
	        // wraps the child. The child ref callback gets called twice with the
	        // wrapper and the child. So we only need to chain the ref if the
	        // factoryChild is not different from child.
	        if (factoryChild === child && isCallbackRef) {
	          ref = (0, _chainFunction2.default)(child.ref, ref);
	        }
	
	        // You may need to apply reactive updates to a child as it is leaving.
	        // The normal React way to do it won't work since the child will have
	        // already been removed. In case you need this behavior you can provide
	        // a childFactory function to wrap every child, even the ones that are
	        // leaving.
	        childrenToRender.push(_react2.default.cloneElement(factoryChild, {
	          key: key,
	          ref: ref
	        }));
	      }
	    };
	
	    for (var key in this.state.children) {
	      _loop(key);
	    }
	
	    // Do not forward TransitionGroup props to primitive DOM nodes
	    var props = _extends({}, this.props);
	    delete props.transitionLeave;
	    delete props.transitionName;
	    delete props.transitionAppear;
	    delete props.transitionEnter;
	    delete props.childFactory;
	    delete props.transitionLeaveTimeout;
	    delete props.transitionEnterTimeout;
	    delete props.transitionAppearTimeout;
	    delete props.component;
	
	    return _react2.default.createElement(this.props.component, props, childrenToRender);
	  };
	
	  return TransitionGroup;
	}(_react2.default.Component);
	
	TransitionGroup.displayName = 'TransitionGroup';
	
	
	TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
	TransitionGroup.defaultProps = defaultProps;
	
	exports.default = TransitionGroup;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 236 */
/***/ (function(module, exports) {

	
	module.exports = function chain(){
	  var len = arguments.length
	  var args = [];
	
	  for (var i = 0; i < len; i++)
	    args[i] = arguments[i]
	
	  args = args.filter(function(fn){ return fn != null })
	
	  if (args.length === 0) return undefined
	  if (args.length === 1) return args[0]
	
	  return args.reduce(function(current, next){
	    return function chainedFunction() {
	      current.apply(this, arguments);
	      next.apply(this, arguments);
	    };
	  })
	}


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.getChildMapping = getChildMapping;
	exports.mergeChildMappings = mergeChildMappings;
	
	var _react = __webpack_require__(2);
	
	/**
	 * Given `this.props.children`, return an object mapping key to child.
	 *
	 * @param {*} children `this.props.children`
	 * @return {object} Mapping of key to child
	 */
	function getChildMapping(children) {
	  if (!children) {
	    return children;
	  }
	  var result = {};
	  _react.Children.map(children, function (child) {
	    return child;
	  }).forEach(function (child) {
	    result[child.key] = child;
	  });
	  return result;
	}
	
	/**
	 * When you're adding or removing children some may be added or removed in the
	 * same render pass. We want to show *both* since we want to simultaneously
	 * animate elements in and out. This function takes a previous set of keys
	 * and a new set of keys and merges them with its best guess of the correct
	 * ordering. In the future we may expose some of the utilities in
	 * ReactMultiChild to make this easy, but for now React itself does not
	 * directly have this concept of the union of prevChildren and nextChildren
	 * so we implement it here.
	 *
	 * @param {object} prev prev children as returned from
	 * `ReactTransitionChildMapping.getChildMapping()`.
	 * @param {object} next next children as returned from
	 * `ReactTransitionChildMapping.getChildMapping()`.
	 * @return {object} a key set that contains all keys in `prev` and all keys
	 * in `next` in a reasonable order.
	 */
	function mergeChildMappings(prev, next) {
	  prev = prev || {};
	  next = next || {};
	
	  function getValueForKey(key) {
	    if (next.hasOwnProperty(key)) {
	      return next[key];
	    }
	
	    return prev[key];
	  }
	
	  // For each key of `next`, the list of keys to insert before that key in
	  // the combined list
	  var nextKeysPending = {};
	
	  var pendingKeys = [];
	  for (var prevKey in prev) {
	    if (next.hasOwnProperty(prevKey)) {
	      if (pendingKeys.length) {
	        nextKeysPending[prevKey] = pendingKeys;
	        pendingKeys = [];
	      }
	    } else {
	      pendingKeys.push(prevKey);
	    }
	  }
	
	  var i = void 0;
	  var childMapping = {};
	  for (var nextKey in next) {
	    if (nextKeysPending.hasOwnProperty(nextKey)) {
	      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	        var pendingNextKey = nextKeysPending[nextKey][i];
	        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
	      }
	    }
	    childMapping[nextKey] = getValueForKey(nextKey);
	  }
	
	  // Finally, add the keys which didn't appear before any key in `next`
	  for (i = 0; i < pendingKeys.length; i++) {
	    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	  }
	
	  return childMapping;
	}

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(209);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(214);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(63);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(89);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(90);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(94);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(140);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(215);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(227);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _autoPrefix = __webpack_require__(216);
	
	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);
	
	var _transitions = __webpack_require__(217);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ScaleInChild = function (_Component) {
	  (0, _inherits3.default)(ScaleInChild, _Component);
	
	  function ScaleInChild() {
	    (0, _classCallCheck3.default)(this, ScaleInChild);
	    return (0, _possibleConstructorReturn3.default)(this, (ScaleInChild.__proto__ || (0, _getPrototypeOf2.default)(ScaleInChild)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(ScaleInChild, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.enterTimer);
	      clearTimeout(this.leaveTimer);
	    }
	  }, {
	    key: 'componentWillAppear',
	    value: function componentWillAppear(callback) {
	      this.initializeAnimation(callback);
	    }
	  }, {
	    key: 'componentWillEnter',
	    value: function componentWillEnter(callback) {
	      this.initializeAnimation(callback);
	    }
	  }, {
	    key: 'componentDidAppear',
	    value: function componentDidAppear() {
	      this.animate();
	    }
	  }, {
	    key: 'componentDidEnter',
	    value: function componentDidEnter() {
	      this.animate();
	    }
	  }, {
	    key: 'componentWillLeave',
	    value: function componentWillLeave(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;
	
	      style.opacity = '0';
	      _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.minScale + ')');
	
	      this.leaveTimer = setTimeout(callback, 450);
	    }
	  }, {
	    key: 'animate',
	    value: function animate() {
	      var style = _reactDom2.default.findDOMNode(this).style;
	
	      style.opacity = '1';
	      _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.maxScale + ')');
	    }
	  }, {
	    key: 'initializeAnimation',
	    value: function initializeAnimation(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;
	
	      style.opacity = '0';
	      _autoPrefix2.default.set(style, 'transform', 'scale(0)');
	
	      this.enterTimer = setTimeout(callback, this.props.enterDelay);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          enterDelay = _props.enterDelay,
	          maxScale = _props.maxScale,
	          minScale = _props.minScale,
	          style = _props.style,
	          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'enterDelay', 'maxScale', 'minScale', 'style']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
	        position: 'absolute',
	        height: '100%',
	        width: '100%',
	        top: 0,
	        left: 0,
	        transition: _transitions2.default.easeOut(null, ['transform', 'opacity'])
	      }, style);
	
	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, other, { style: prepareStyles(mergedRootStyles) }),
	        children
	      );
	    }
	  }]);
	  return ScaleInChild;
	}(_react.Component);
	
	ScaleInChild.defaultProps = {
	  enterDelay: 0,
	  maxScale: 1,
	  minScale: 0
	};
	ScaleInChild.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	ScaleInChild.propTypes = process.env.NODE_ENV !== "production" ? {
	  children: _propTypes2.default.node,
	  enterDelay: _propTypes2.default.number,
	  maxScale: _propTypes2.default.number,
	  minScale: _propTypes2.default.number,
	  style: _propTypes2.default.object
	} : {};
	exports.default = ScaleInChild;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toConsumableArray2 = __webpack_require__(149);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _getPrototypeOf = __webpack_require__(63);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(89);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(90);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(94);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(140);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _toArray2 = __webpack_require__(240);
	
	var _toArray3 = _interopRequireDefault(_toArray2);
	
	var _simpleAssign = __webpack_require__(215);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(227);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _TransitionGroup = __webpack_require__(235);
	
	var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);
	
	var _dom = __webpack_require__(241);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _CircleRipple = __webpack_require__(242);
	
	var _CircleRipple2 = _interopRequireDefault(_CircleRipple);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Remove the first element of the array
	var shift = function shift(_ref) {
	  var _ref2 = (0, _toArray3.default)(_ref),
	      newArray = _ref2.slice(1);
	
	  return newArray;
	};
	
	var TouchRipple = function (_Component) {
	  (0, _inherits3.default)(TouchRipple, _Component);
	
	  function TouchRipple(props, context) {
	    (0, _classCallCheck3.default)(this, TouchRipple);
	
	    // Touch start produces a mouse down event for compat reasons. To avoid
	    // showing ripples twice we skip showing a ripple for the first mouse down
	    // after a touch start. Note we don't store ignoreNextMouseDown in this.state
	    // to avoid re-rendering when we change it.
	    var _this = (0, _possibleConstructorReturn3.default)(this, (TouchRipple.__proto__ || (0, _getPrototypeOf2.default)(TouchRipple)).call(this, props, context));
	
	    _this.handleMouseDown = function (event) {
	      // only listen to left clicks
	      if (event.button === 0) {
	        _this.start(event, false);
	      }
	    };
	
	    _this.handleMouseUp = function () {
	      _this.end();
	    };
	
	    _this.handleMouseLeave = function () {
	      _this.end();
	    };
	
	    _this.handleTouchStart = function (event) {
	      event.stopPropagation();
	      // If the user is swiping (not just tapping), save the position so we can
	      // abort ripples if the user appears to be scrolling.
	      if (_this.props.abortOnScroll && event.touches) {
	        _this.startListeningForScrollAbort(event);
	        _this.startTime = Date.now();
	      }
	      _this.start(event, true);
	    };
	
	    _this.handleTouchEnd = function () {
	      _this.end();
	    };
	
	    _this.handleTouchMove = function (event) {
	      // Stop trying to abort if we're already 300ms into the animation
	      var timeSinceStart = Math.abs(Date.now() - _this.startTime);
	      if (timeSinceStart > 300) {
	        _this.stopListeningForScrollAbort();
	        return;
	      }
	
	      // If the user is scrolling...
	      var deltaY = Math.abs(event.touches[0].clientY - _this.firstTouchY);
	      var deltaX = Math.abs(event.touches[0].clientX - _this.firstTouchX);
	      // Call it a scroll after an arbitrary 6px (feels reasonable in testing)
	      if (deltaY > 6 || deltaX > 6) {
	        var currentRipples = _this.state.ripples;
	        var ripple = currentRipples[0];
	        // This clone will replace the ripple in ReactTransitionGroup with a
	        // version that will disappear immediately when removed from the DOM
	        var abortedRipple = _react2.default.cloneElement(ripple, { aborted: true });
	        // Remove the old ripple and replace it with the new updated one
	        currentRipples = shift(currentRipples);
	        currentRipples = [].concat((0, _toConsumableArray3.default)(currentRipples), [abortedRipple]);
	        _this.setState({ ripples: currentRipples }, function () {
	          // Call end after we've set the ripple to abort otherwise the setState
	          // in end() merges with this and the ripple abort fails
	          _this.end();
	        });
	      }
	    };
	
	    _this.ignoreNextMouseDown = false;
	
	    _this.state = {
	      // This prop allows us to only render the ReactTransitionGroup
	      // on the first click of the component, making the inital render faster.
	      hasRipples: false,
	      nextKey: 0,
	      ripples: []
	    };
	    return _this;
	  }
	
	  (0, _createClass3.default)(TouchRipple, [{
	    key: 'start',
	    value: function start(event, isRippleTouchGenerated) {
	      var theme = this.context.muiTheme.ripple;
	
	      if (this.ignoreNextMouseDown && !isRippleTouchGenerated) {
	        this.ignoreNextMouseDown = false;
	        return;
	      }
	
	      var ripples = this.state.ripples;
	
	      // Add a ripple to the ripples array
	      ripples = [].concat((0, _toConsumableArray3.default)(ripples), [_react2.default.createElement(_CircleRipple2.default, {
	        key: this.state.nextKey,
	        style: !this.props.centerRipple ? this.getRippleStyle(event) : {},
	        color: this.props.color || theme.color,
	        opacity: this.props.opacity,
	        touchGenerated: isRippleTouchGenerated
	      })]);
	
	      this.ignoreNextMouseDown = isRippleTouchGenerated;
	      this.setState({
	        hasRipples: true,
	        nextKey: this.state.nextKey + 1,
	        ripples: ripples
	      });
	    }
	  }, {
	    key: 'end',
	    value: function end() {
	      var currentRipples = this.state.ripples;
	      this.setState({
	        ripples: shift(currentRipples)
	      });
	      if (this.props.abortOnScroll) {
	        this.stopListeningForScrollAbort();
	      }
	    }
	
	    // Check if the user seems to be scrolling and abort the animation if so
	
	  }, {
	    key: 'startListeningForScrollAbort',
	    value: function startListeningForScrollAbort(event) {
	      this.firstTouchY = event.touches[0].clientY;
	      this.firstTouchX = event.touches[0].clientX;
	      // Note that when scolling Chrome throttles this event to every 200ms
	      // Also note we don't listen for scroll events directly as there's no general
	      // way to cover cases like scrolling within containers on the page
	      document.body.addEventListener('touchmove', this.handleTouchMove);
	    }
	  }, {
	    key: 'stopListeningForScrollAbort',
	    value: function stopListeningForScrollAbort() {
	      document.body.removeEventListener('touchmove', this.handleTouchMove);
	    }
	  }, {
	    key: 'getRippleStyle',
	    value: function getRippleStyle(event) {
	      var el = _reactDom2.default.findDOMNode(this);
	      var elHeight = el.offsetHeight;
	      var elWidth = el.offsetWidth;
	      var offset = _dom2.default.offset(el);
	      var isTouchEvent = event.touches && event.touches.length;
	      var pageX = isTouchEvent ? event.touches[0].pageX : event.pageX;
	      var pageY = isTouchEvent ? event.touches[0].pageY : event.pageY;
	      var pointerX = pageX - offset.left;
	      var pointerY = pageY - offset.top;
	      var topLeftDiag = this.calcDiag(pointerX, pointerY);
	      var topRightDiag = this.calcDiag(elWidth - pointerX, pointerY);
	      var botRightDiag = this.calcDiag(elWidth - pointerX, elHeight - pointerY);
	      var botLeftDiag = this.calcDiag(pointerX, elHeight - pointerY);
	      var rippleRadius = Math.max(topLeftDiag, topRightDiag, botRightDiag, botLeftDiag);
	      var rippleSize = rippleRadius * 2;
	      var left = pointerX - rippleRadius;
	      var top = pointerY - rippleRadius;
	
	      return {
	        directionInvariant: true,
	        height: rippleSize,
	        width: rippleSize,
	        top: top,
	        left: left
	      };
	    }
	  }, {
	    key: 'calcDiag',
	    value: function calcDiag(a, b) {
	      return Math.sqrt(a * a + b * b);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          style = _props.style;
	      var _state = this.state,
	          hasRipples = _state.hasRipples,
	          ripples = _state.ripples;
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      var rippleGroup = void 0;
	
	      if (hasRipples) {
	        var mergedStyles = (0, _simpleAssign2.default)({
	          height: '100%',
	          width: '100%',
	          position: 'absolute',
	          top: 0,
	          left: 0,
	          overflow: 'hidden',
	          pointerEvents: 'none',
	          zIndex: 1 // This is also needed so that ripples do not bleed past a parent border radius.
	        }, style);
	
	        rippleGroup = _react2.default.createElement(
	          _TransitionGroup2.default,
	          { style: prepareStyles(mergedStyles) },
	          ripples
	        );
	      }
	
	      return _react2.default.createElement(
	        'div',
	        {
	          onMouseUp: this.handleMouseUp,
	          onMouseDown: this.handleMouseDown,
	          onMouseLeave: this.handleMouseLeave,
	          onTouchStart: this.handleTouchStart,
	          onTouchEnd: this.handleTouchEnd
	        },
	        rippleGroup,
	        children
	      );
	    }
	  }]);
	  return TouchRipple;
	}(_react.Component);
	
	TouchRipple.defaultProps = {
	  abortOnScroll: true
	};
	TouchRipple.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	TouchRipple.propTypes = process.env.NODE_ENV !== "production" ? {
	  abortOnScroll: _propTypes2.default.bool,
	  centerRipple: _propTypes2.default.bool,
	  children: _propTypes2.default.node,
	  color: _propTypes2.default.string,
	  opacity: _propTypes2.default.number,
	  style: _propTypes2.default.object
	} : {};
	exports.default = TouchRipple;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(150);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (arr) {
	  return Array.isArray(arr) ? arr : (0, _from2.default)(arr);
	};

/***/ }),
/* 241 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  isDescendant: function isDescendant(parent, child) {
	    var node = child.parentNode;
	
	    while (node !== null) {
	      if (node === parent) return true;
	      node = node.parentNode;
	    }
	
	    return false;
	  },
	  offset: function offset(el) {
	    var rect = el.getBoundingClientRect();
	    return {
	      top: rect.top + document.body.scrollTop,
	      left: rect.left + document.body.scrollLeft
	    };
	  }
	};

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(209);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(214);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(63);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(89);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(90);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(94);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(140);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(215);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(227);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _shallowEqual = __webpack_require__(228);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _autoPrefix = __webpack_require__(216);
	
	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);
	
	var _transitions = __webpack_require__(217);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CircleRipple = function (_Component) {
	  (0, _inherits3.default)(CircleRipple, _Component);
	
	  function CircleRipple() {
	    (0, _classCallCheck3.default)(this, CircleRipple);
	    return (0, _possibleConstructorReturn3.default)(this, (CircleRipple.__proto__ || (0, _getPrototypeOf2.default)(CircleRipple)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(CircleRipple, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.enterTimer);
	      clearTimeout(this.leaveTimer);
	    }
	  }, {
	    key: 'componentWillAppear',
	    value: function componentWillAppear(callback) {
	      this.initializeAnimation(callback);
	    }
	  }, {
	    key: 'componentWillEnter',
	    value: function componentWillEnter(callback) {
	      this.initializeAnimation(callback);
	    }
	  }, {
	    key: 'componentDidAppear',
	    value: function componentDidAppear() {
	      this.animate();
	    }
	  }, {
	    key: 'componentDidEnter',
	    value: function componentDidEnter() {
	      this.animate();
	    }
	  }, {
	    key: 'componentWillLeave',
	    value: function componentWillLeave(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;
	      style.opacity = 0;
	      // If the animation is aborted, remove from the DOM immediately
	      var removeAfter = this.props.aborted ? 0 : 2000;
	      this.enterTimer = setTimeout(callback, removeAfter);
	    }
	  }, {
	    key: 'animate',
	    value: function animate() {
	      var style = _reactDom2.default.findDOMNode(this).style;
	      var transitionValue = _transitions2.default.easeOut('2s', 'opacity') + ', ' + _transitions2.default.easeOut('1s', 'transform');
	      _autoPrefix2.default.set(style, 'transition', transitionValue);
	      _autoPrefix2.default.set(style, 'transform', 'scale(1)');
	    }
	  }, {
	    key: 'initializeAnimation',
	    value: function initializeAnimation(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;
	      style.opacity = this.props.opacity;
	      _autoPrefix2.default.set(style, 'transform', 'scale(0)');
	      this.leaveTimer = setTimeout(callback, 0);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          aborted = _props.aborted,
	          color = _props.color,
	          opacity = _props.opacity,
	          style = _props.style,
	          touchGenerated = _props.touchGenerated,
	          other = (0, _objectWithoutProperties3.default)(_props, ['aborted', 'color', 'opacity', 'style', 'touchGenerated']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      var mergedStyles = (0, _simpleAssign2.default)({
	        position: 'absolute',
	        top: 0,
	        left: 0,
	        height: '100%',
	        width: '100%',
	        borderRadius: '50%',
	        backgroundColor: color
	      }, style);
	
	      return _react2.default.createElement('div', (0, _extends3.default)({}, other, { style: prepareStyles(mergedStyles) }));
	    }
	  }]);
	  return CircleRipple;
	}(_react.Component);
	
	CircleRipple.defaultProps = {
	  opacity: 0.1,
	  aborted: false
	};
	CircleRipple.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	CircleRipple.propTypes = process.env.NODE_ENV !== "production" ? {
	  aborted: _propTypes2.default.bool,
	  color: _propTypes2.default.string,
	  opacity: _propTypes2.default.number,
	  style: _propTypes2.default.object,
	  touchGenerated: _propTypes2.default.bool
	} : {};
	exports.default = CircleRipple;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _IconButton = __webpack_require__(244);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _IconButton2.default;

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(209);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(214);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(63);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(89);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(90);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(94);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(140);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(215);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _transitions = __webpack_require__(217);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _propTypes3 = __webpack_require__(221);
	
	var _propTypes4 = _interopRequireDefault(_propTypes3);
	
	var _EnhancedButton = __webpack_require__(230);
	
	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);
	
	var _FontIcon = __webpack_require__(245);
	
	var _FontIcon2 = _interopRequireDefault(_FontIcon);
	
	var _Tooltip = __webpack_require__(247);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	var _childUtils = __webpack_require__(248);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context) {
	  var baseTheme = context.muiTheme.baseTheme;
	
	
	  return {
	    root: {
	      boxSizing: 'border-box',
	      overflow: 'visible',
	      transition: _transitions2.default.easeOut(),
	      padding: baseTheme.spacing.iconSize / 2,
	      width: baseTheme.spacing.iconSize * 2,
	      height: baseTheme.spacing.iconSize * 2,
	      fontSize: 0
	    },
	    tooltip: {
	      boxSizing: 'border-box'
	    },
	    disabled: {
	      color: baseTheme.palette.disabledColor,
	      fill: baseTheme.palette.disabledColor,
	      cursor: 'default'
	    }
	  };
	}
	
	var IconButton = function (_Component) {
	  (0, _inherits3.default)(IconButton, _Component);
	
	  function IconButton() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, IconButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = IconButton.__proto__ || (0, _getPrototypeOf2.default)(IconButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false,
	      isKeyboardFocused: false,
	      // Not to be confonded with the touch property.
	      // This state is to determined if it's a mobile device.
	      touch: false,
	      tooltipShown: false
	    }, _this.handleBlur = function (event) {
	      _this.hideTooltip();
	      if (_this.props.onBlur) {
	        _this.props.onBlur(event);
	      }
	    }, _this.handleFocus = function (event) {
	      _this.showTooltip();
	      if (_this.props.onFocus) {
	        _this.props.onFocus(event);
	      }
	    }, _this.handleMouseLeave = function (event) {
	      if (!_this.button.isKeyboardFocused()) {
	        _this.hideTooltip();
	      }
	      _this.setState({ hovered: false });
	      if (_this.props.onMouseLeave) {
	        _this.props.onMouseLeave(event);
	      }
	    }, _this.handleMouseOut = function (event) {
	      if (_this.props.disabled) _this.hideTooltip();
	      if (_this.props.onMouseOut) _this.props.onMouseOut(event);
	    }, _this.handleMouseEnter = function (event) {
	      _this.showTooltip();
	
	      // Cancel hover styles for touch devices
	      if (!_this.state.touch) {
	        _this.setState({ hovered: true });
	      }
	      if (_this.props.onMouseEnter) {
	        _this.props.onMouseEnter(event);
	      }
	    }, _this.handleTouchStart = function (event) {
	      _this.setState({ touch: true });
	
	      if (_this.props.onTouchStart) {
	        _this.props.onTouchStart(event);
	      }
	    }, _this.handleKeyboardFocus = function (event, isKeyboardFocused) {
	      var _this$props = _this.props,
	          disabled = _this$props.disabled,
	          onFocus = _this$props.onFocus,
	          onBlur = _this$props.onBlur,
	          onKeyboardFocus = _this$props.onKeyboardFocus;
	
	      if (isKeyboardFocused && !disabled) {
	        _this.showTooltip();
	        if (onFocus) {
	          onFocus(event);
	        }
	      } else {
	        _this.hideTooltip();
	        if (onBlur) {
	          onBlur(event);
	        }
	      }
	
	      _this.setState({ isKeyboardFocused: isKeyboardFocused });
	      if (onKeyboardFocus) {
	        onKeyboardFocus(event, isKeyboardFocused);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(IconButton, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.disabled) {
	        this.setState({ hovered: false });
	      }
	    }
	  }, {
	    key: 'setKeyboardFocus',
	    value: function setKeyboardFocus() {
	      this.button.setKeyboardFocus();
	    }
	  }, {
	    key: 'showTooltip',
	    value: function showTooltip() {
	      if (this.props.tooltip) {
	        this.setState({ tooltipShown: true });
	      }
	    }
	  }, {
	    key: 'hideTooltip',
	    value: function hideTooltip() {
	      if (this.props.tooltip) this.setState({ tooltipShown: false });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          disabled = _props.disabled,
	          hoveredStyle = _props.hoveredStyle,
	          disableTouchRipple = _props.disableTouchRipple,
	          children = _props.children,
	          iconClassName = _props.iconClassName,
	          style = _props.style,
	          tooltip = _props.tooltip,
	          tooltipPositionProp = _props.tooltipPosition,
	          tooltipStyles = _props.tooltipStyles,
	          touch = _props.touch,
	          iconStyle = _props.iconStyle,
	          other = (0, _objectWithoutProperties3.default)(_props, ['disabled', 'hoveredStyle', 'disableTouchRipple', 'children', 'iconClassName', 'style', 'tooltip', 'tooltipPosition', 'tooltipStyles', 'touch', 'iconStyle']);
	
	      var fonticon = void 0;
	
	      var styles = getStyles(this.props, this.context);
	      var tooltipPosition = tooltipPositionProp.split('-');
	
	      var hovered = (this.state.hovered || this.state.isKeyboardFocused) && !disabled;
	
	      var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style, hovered ? hoveredStyle : {});
	
	      var tooltipElement = tooltip ? _react2.default.createElement(_Tooltip2.default, {
	        label: tooltip,
	        show: this.state.tooltipShown,
	        touch: touch,
	        style: (0, _simpleAssign2.default)(styles.tooltip, tooltipStyles),
	        verticalPosition: tooltipPosition[0],
	        horizontalPosition: tooltipPosition[1]
	      }) : null;
	
	      if (iconClassName) {
	        var iconHoverColor = iconStyle.iconHoverColor,
	            iconStyleFontIcon = (0, _objectWithoutProperties3.default)(iconStyle, ['iconHoverColor']);
	
	
	        fonticon = _react2.default.createElement(
	          _FontIcon2.default,
	          {
	            className: iconClassName,
	            hoverColor: disabled ? null : iconHoverColor,
	            style: (0, _simpleAssign2.default)({}, disabled && styles.disabled, iconStyleFontIcon),
	            color: this.context.muiTheme.baseTheme.palette.textColor
	          },
	          children
	        );
	      }
	
	      var childrenStyle = disabled ? (0, _simpleAssign2.default)({}, iconStyle, styles.disabled) : iconStyle;
	
	      return _react2.default.createElement(
	        _EnhancedButton2.default,
	        (0, _extends3.default)({
	          ref: function ref(_ref2) {
	            return _this2.button = _ref2;
	          }
	        }, other, {
	          centerRipple: true,
	          disabled: disabled,
	          onTouchStart: this.handleTouchStart,
	          style: mergedRootStyles,
	          disableTouchRipple: disableTouchRipple,
	          onBlur: this.handleBlur,
	          onFocus: this.handleFocus,
	          onMouseLeave: this.handleMouseLeave,
	          onMouseEnter: this.handleMouseEnter,
	          onMouseOut: this.handleMouseOut,
	          onKeyboardFocus: this.handleKeyboardFocus
	        }),
	        tooltipElement,
	        fonticon,
	        (0, _childUtils.extendChildren)(children, {
	          style: childrenStyle
	        })
	      );
	    }
	  }]);
	  return IconButton;
	}(_react.Component);
	
	IconButton.muiName = 'IconButton';
	IconButton.defaultProps = {
	  disabled: false,
	  disableTouchRipple: false,
	  iconStyle: {},
	  tooltipPosition: 'bottom-center',
	  touch: false
	};
	IconButton.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	IconButton.propTypes = process.env.NODE_ENV !== "production" ? {
	  /**
	   * Can be used to pass a `FontIcon` element as the icon for the button.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * The CSS class name of the root element.
	   */
	  className: _propTypes2.default.string,
	  /**
	   * If true, the element's ripple effect will be disabled.
	   */
	  disableTouchRipple: _propTypes2.default.bool,
	  /**
	   * If true, the element will be disabled.
	   */
	  disabled: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the root element when the component is hovered.
	   */
	  hoveredStyle: _propTypes2.default.object,
	  /**
	   * The URL to link to when the button is clicked.
	   */
	  href: _propTypes2.default.string,
	  /**
	   * The CSS class name of the icon. Used for setting the icon with a stylesheet.
	   */
	  iconClassName: _propTypes2.default.string,
	  /**
	   * Override the inline-styles of the icon element.
	   * Note: you can specify iconHoverColor as a String inside this object.
	   */
	  iconStyle: _propTypes2.default.object,
	  /** @ignore */
	  onBlur: _propTypes2.default.func,
	  /**
	   * Callback function fired when the button is clicked.
	   *
	   * @param {object} event Click event targeting the button.
	   */
	  onClick: _propTypes2.default.func,
	  /** @ignore */
	  onFocus: _propTypes2.default.func,
	  /**
	   * Callback function fired when the element is focused or blurred by the keyboard.
	   *
	   * @param {object} event `focus` or `blur` event targeting the element.
	   * @param {boolean} keyboardFocused Indicates whether the element is focused.
	   */
	  onKeyboardFocus: _propTypes2.default.func,
	  /** @ignore */
	  onMouseEnter: _propTypes2.default.func,
	  /** @ignore */
	  onMouseLeave: _propTypes2.default.func,
	  /** @ignore */
	  onMouseOut: _propTypes2.default.func,
	  /** @ignore */
	  onTouchStart: _propTypes2.default.func,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  /**
	   * The text to supply to the element's tooltip.
	   */
	  tooltip: _propTypes2.default.node,
	  /**
	   * The vertical and horizontal positions, respectively, of the element's tooltip.
	   * Possible values are: "bottom-center", "top-center", "bottom-right", "top-right",
	   * "bottom-left", and "top-left".
	   */
	  tooltipPosition: _propTypes4.default.cornersAndCenter,
	  /**
	   * Override the inline-styles of the tooltip element.
	   */
	  tooltipStyles: _propTypes2.default.object,
	  /**
	   * If true, increase the tooltip element's size. Useful for increasing tooltip
	   * readability on mobile devices.
	   */
	  touch: _propTypes2.default.bool
	} : {};
	exports.default = IconButton;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _FontIcon = __webpack_require__(246);
	
	var _FontIcon2 = _interopRequireDefault(_FontIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _FontIcon2.default;

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(209);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(214);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(63);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(89);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(90);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(94);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(140);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(215);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _transitions = __webpack_require__(217);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context, state) {
	  var color = props.color,
	      hoverColor = props.hoverColor;
	  var baseTheme = context.muiTheme.baseTheme;
	
	  var offColor = color || baseTheme.palette.textColor;
	  var onColor = hoverColor || offColor;
	
	  return {
	    root: {
	      color: state.hovered ? onColor : offColor,
	      position: 'relative',
	      fontSize: baseTheme.spacing.iconSize,
	      display: 'inline-block',
	      userSelect: 'none',
	      transition: _transitions2.default.easeOut()
	    }
	  };
	}
	
	var FontIcon = function (_Component) {
	  (0, _inherits3.default)(FontIcon, _Component);
	
	  function FontIcon() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, FontIcon);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FontIcon.__proto__ || (0, _getPrototypeOf2.default)(FontIcon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false
	    }, _this.handleMouseLeave = function (event) {
	      // hover is needed only when a hoverColor is defined
	      if (_this.props.hoverColor !== undefined) {
	        _this.setState({ hovered: false });
	      }
	      if (_this.props.onMouseLeave) {
	        _this.props.onMouseLeave(event);
	      }
	    }, _this.handleMouseEnter = function (event) {
	      // hover is needed only when a hoverColor is defined
	      if (_this.props.hoverColor !== undefined) {
	        _this.setState({ hovered: true });
	      }
	      if (_this.props.onMouseEnter) {
	        _this.props.onMouseEnter(event);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(FontIcon, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          hoverColor = _props.hoverColor,
	          onMouseLeave = _props.onMouseLeave,
	          onMouseEnter = _props.onMouseEnter,
	          style = _props.style,
	          other = (0, _objectWithoutProperties3.default)(_props, ['hoverColor', 'onMouseLeave', 'onMouseEnter', 'style']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	
	      return _react2.default.createElement('span', (0, _extends3.default)({}, other, {
	        onMouseLeave: this.handleMouseLeave,
	        onMouseEnter: this.handleMouseEnter,
	        style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
	      }));
	    }
	  }]);
	  return FontIcon;
	}(_react.Component);
	
	FontIcon.muiName = 'FontIcon';
	FontIcon.defaultProps = {
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {}
	};
	FontIcon.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	FontIcon.propTypes = process.env.NODE_ENV !== "production" ? {
	  /**
	   * This is the font color of the font icon. If not specified,
	   * this component will default to muiTheme.palette.textColor.
	   */
	  color: _propTypes2.default.string,
	  /**
	   * This is the icon color when the mouse hovers over the icon.
	   */
	  hoverColor: _propTypes2.default.string,
	  /** @ignore */
	  onMouseEnter: _propTypes2.default.func,
	  /** @ignore */
	  onMouseLeave: _propTypes2.default.func,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object
	} : {};
	exports.default = FontIcon;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(209);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(214);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(63);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(89);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(90);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(94);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(140);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(215);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _transitions = __webpack_require__(217);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context, state) {
	  var verticalPosition = props.verticalPosition;
	  var horizontalPosition = props.horizontalPosition;
	  var touchMarginOffset = props.touch ? 10 : 0;
	  var touchOffsetTop = props.touch ? -20 : -10;
	  var offset = verticalPosition === 'bottom' ? 14 + touchMarginOffset : -14 - touchMarginOffset;
	
	  var _context$muiTheme = context.muiTheme,
	      baseTheme = _context$muiTheme.baseTheme,
	      zIndex = _context$muiTheme.zIndex,
	      tooltip = _context$muiTheme.tooltip,
	      borderRadius = _context$muiTheme.borderRadius;
	
	
	  var styles = {
	    root: {
	      position: 'absolute',
	      fontFamily: baseTheme.fontFamily,
	      fontSize: '10px',
	      lineHeight: '22px',
	      padding: '0 8px',
	      zIndex: zIndex.tooltip,
	      color: tooltip.color,
	      overflow: 'hidden',
	      top: -10000,
	      borderRadius: borderRadius,
	      userSelect: 'none',
	      opacity: 0,
	      right: horizontalPosition === 'left' ? 12 : null,
	      left: horizontalPosition === 'center' ? (state.offsetWidth - 48) / 2 * -1 : horizontalPosition === 'right' ? 12 : null,
	      transition: _transitions2.default.easeOut('0ms', 'top', '450ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
	    },
	    label: {
	      position: 'relative',
	      whiteSpace: 'nowrap'
	    },
	    ripple: {
	      position: 'absolute',
	      left: horizontalPosition === 'center' ? '50%' : horizontalPosition === 'left' ? '100%' : '0%',
	      top: verticalPosition === 'bottom' ? 0 : '100%',
	      transform: 'translate(-50%, -50%)',
	      borderRadius: '50%',
	      backgroundColor: 'transparent',
	      transition: _transitions2.default.easeOut('0ms', 'width', '450ms') + ', ' + _transitions2.default.easeOut('0ms', 'height', '450ms') + ', ' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
	    },
	    rootWhenShown: {
	      top: verticalPosition === 'top' ? touchOffsetTop : 36,
	      opacity: tooltip.opacity,
	      transform: 'translate(0px, ' + offset + 'px)',
	      transition: _transitions2.default.easeOut('0ms', 'top', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
	    },
	    rootWhenTouched: {
	      fontSize: '14px',
	      lineHeight: '32px',
	      padding: '0 16px'
	    },
	    rippleWhenShown: {
	      backgroundColor: tooltip.rippleBackgroundColor,
	      transition: _transitions2.default.easeOut('450ms', 'width', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'height', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
	    }
	  };
	
	  return styles;
	}
	
	var Tooltip = function (_Component) {
	  (0, _inherits3.default)(Tooltip, _Component);
	
	  function Tooltip() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, Tooltip);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tooltip.__proto__ || (0, _getPrototypeOf2.default)(Tooltip)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      offsetWidth: null
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(Tooltip, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setRippleSize();
	      this.setTooltipPosition();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      this.setTooltipPosition();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.setRippleSize();
	    }
	  }, {
	    key: 'setRippleSize',
	    value: function setRippleSize() {
	      var ripple = this.refs.ripple;
	      var tooltip = this.refs.tooltip;
	      var tooltipWidth = parseInt(tooltip.offsetWidth, 10) / (this.props.horizontalPosition === 'center' ? 2 : 1);
	      var tooltipHeight = parseInt(tooltip.offsetHeight, 10);
	
	      var rippleDiameter = Math.ceil(Math.sqrt(Math.pow(tooltipHeight, 2) + Math.pow(tooltipWidth, 2)) * 2);
	      if (this.props.show) {
	        ripple.style.height = rippleDiameter + 'px';
	        ripple.style.width = rippleDiameter + 'px';
	      } else {
	        ripple.style.width = '0px';
	        ripple.style.height = '0px';
	      }
	    }
	  }, {
	    key: 'setTooltipPosition',
	    value: function setTooltipPosition() {
	      this.setState({ offsetWidth: this.refs.tooltip.offsetWidth });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          horizontalPosition = _props.horizontalPosition,
	          label = _props.label,
	          show = _props.show,
	          touch = _props.touch,
	          verticalPosition = _props.verticalPosition,
	          other = (0, _objectWithoutProperties3.default)(_props, ['horizontalPosition', 'label', 'show', 'touch', 'verticalPosition']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	
	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, other, {
	          ref: 'tooltip',
	          style: prepareStyles((0, _simpleAssign2.default)(styles.root, this.props.show && styles.rootWhenShown, this.props.touch && styles.rootWhenTouched, this.props.style))
	        }),
	        _react2.default.createElement('div', {
	          ref: 'ripple',
	          style: prepareStyles((0, _simpleAssign2.default)(styles.ripple, this.props.show && styles.rippleWhenShown))
	        }),
	        _react2.default.createElement(
	          'span',
	          { style: prepareStyles(styles.label) },
	          label
	        )
	      );
	    }
	  }]);
	  return Tooltip;
	}(_react.Component);
	
	Tooltip.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	Tooltip.propTypes = process.env.NODE_ENV !== "production" ? {
	  /**
	   * The css class name of the root element.
	   */
	  className: _propTypes2.default.string,
	  horizontalPosition: _propTypes2.default.oneOf(['left', 'right', 'center']),
	  label: _propTypes2.default.node.isRequired,
	  show: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  touch: _propTypes2.default.bool,
	  verticalPosition: _propTypes2.default.oneOf(['top', 'bottom'])
	} : {};
	exports.default = Tooltip;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.extendChildren = extendChildren;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function extendChildren(children, extendedProps, extendedChildren) {
	  return _react2.default.Children.map(children, function (child) {
	    if (!_react2.default.isValidElement(child)) {
	      return child;
	    }
	
	    var newProps = typeof extendedProps === 'function' ? extendedProps(child) : extendedProps;
	
	    var newChildren = typeof extendedChildren === 'function' ? extendedChildren(child) : extendedChildren ? extendedChildren : child.props.children;
	
	    return _react2.default.cloneElement(child, newProps, newChildren);
	  });
	}

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(250);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(256);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavigationExpandLess = function NavigationExpandLess(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z' })
	  );
	};
	NavigationExpandLess = (0, _pure2.default)(NavigationExpandLess);
	NavigationExpandLess.displayName = 'NavigationExpandLess';
	NavigationExpandLess.muiName = 'SvgIcon';
	
	exports.default = NavigationExpandLess;

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _shouldUpdate = __webpack_require__(251);
	
	var _shouldUpdate2 = _interopRequireDefault(_shouldUpdate);
	
	var _shallowEqual = __webpack_require__(228);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _setDisplayName = __webpack_require__(252);
	
	var _setDisplayName2 = _interopRequireDefault(_setDisplayName);
	
	var _wrapDisplayName = __webpack_require__(254);
	
	var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var pure = function pure(BaseComponent) {
	  var hoc = (0, _shouldUpdate2.default)(function (props, nextProps) {
	    return !(0, _shallowEqual2.default)(props, nextProps);
	  });
	
	  if (process.env.NODE_ENV !== 'production') {
	    return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'pure'))(hoc(BaseComponent));
	  }
	
	  return hoc(BaseComponent);
	};
	
	exports.default = pure;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _setDisplayName = __webpack_require__(252);
	
	var _setDisplayName2 = _interopRequireDefault(_setDisplayName);
	
	var _wrapDisplayName = __webpack_require__(254);
	
	var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var shouldUpdate = function shouldUpdate(test) {
	  return function (BaseComponent) {
	    var factory = (0, _react.createFactory)(BaseComponent);
	
	    var ShouldUpdate = function (_Component) {
	      _inherits(ShouldUpdate, _Component);
	
	      function ShouldUpdate() {
	        _classCallCheck(this, ShouldUpdate);
	
	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	      }
	
	      ShouldUpdate.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	        return test(this.props, nextProps);
	      };
	
	      ShouldUpdate.prototype.render = function render() {
	        return factory(this.props);
	      };
	
	      return ShouldUpdate;
	    }(_react.Component);
	
	    if (process.env.NODE_ENV !== 'production') {
	      return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'shouldUpdate'))(ShouldUpdate);
	    }
	    return ShouldUpdate;
	  };
	};
	
	exports.default = shouldUpdate;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _setStatic = __webpack_require__(253);
	
	var _setStatic2 = _interopRequireDefault(_setStatic);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var setDisplayName = function setDisplayName(displayName) {
	  return (0, _setStatic2.default)('displayName', displayName);
	};
	
	exports.default = setDisplayName;

/***/ }),
/* 253 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var setStatic = function setStatic(key, value) {
	  return function (BaseComponent) {
	    /* eslint-disable no-param-reassign */
	    BaseComponent[key] = value;
	    /* eslint-enable no-param-reassign */
	    return BaseComponent;
	  };
	};
	
	exports.default = setStatic;

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _getDisplayName = __webpack_require__(255);
	
	var _getDisplayName2 = _interopRequireDefault(_getDisplayName);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
	  return hocName + '(' + (0, _getDisplayName2.default)(BaseComponent) + ')';
	};
	
	exports.default = wrapDisplayName;

/***/ }),
/* 255 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var getDisplayName = function getDisplayName(Component) {
	  if (typeof Component === 'string') {
	    return Component;
	  }
	
	  if (!Component) {
	    return undefined;
	  }
	
	  return Component.displayName || Component.name || 'Component';
	};
	
	exports.default = getDisplayName;

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _SvgIcon = __webpack_require__(257);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _SvgIcon2.default;

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(209);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(214);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(63);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(89);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(90);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(94);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(140);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(215);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _transitions = __webpack_require__(217);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SvgIcon = function (_Component) {
	  (0, _inherits3.default)(SvgIcon, _Component);
	
	  function SvgIcon() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, SvgIcon);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SvgIcon.__proto__ || (0, _getPrototypeOf2.default)(SvgIcon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false
	    }, _this.handleMouseLeave = function (event) {
	      _this.setState({ hovered: false });
	      _this.props.onMouseLeave(event);
	    }, _this.handleMouseEnter = function (event) {
	      _this.setState({ hovered: true });
	      _this.props.onMouseEnter(event);
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(SvgIcon, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          color = _props.color,
	          hoverColor = _props.hoverColor,
	          onMouseEnter = _props.onMouseEnter,
	          onMouseLeave = _props.onMouseLeave,
	          style = _props.style,
	          viewBox = _props.viewBox,
	          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'color', 'hoverColor', 'onMouseEnter', 'onMouseLeave', 'style', 'viewBox']);
	      var _context$muiTheme = this.context.muiTheme,
	          svgIcon = _context$muiTheme.svgIcon,
	          prepareStyles = _context$muiTheme.prepareStyles;
	
	
	      var offColor = color ? color : 'currentColor';
	      var onColor = hoverColor ? hoverColor : offColor;
	
	      var mergedStyles = (0, _simpleAssign2.default)({
	        display: 'inline-block',
	        color: svgIcon.color,
	        fill: this.state.hovered ? onColor : offColor,
	        height: 24,
	        width: 24,
	        userSelect: 'none',
	        transition: _transitions2.default.easeOut()
	      }, style);
	
	      return _react2.default.createElement(
	        'svg',
	        (0, _extends3.default)({}, other, {
	          onMouseEnter: this.handleMouseEnter,
	          onMouseLeave: this.handleMouseLeave,
	          style: prepareStyles(mergedStyles),
	          viewBox: viewBox
	        }),
	        children
	      );
	    }
	  }]);
	  return SvgIcon;
	}(_react.Component);
	
	SvgIcon.muiName = 'SvgIcon';
	SvgIcon.defaultProps = {
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {},
	  viewBox: '0 0 24 24'
	};
	SvgIcon.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	SvgIcon.propTypes = process.env.NODE_ENV !== "production" ? {
	  /**
	   * Elements passed into the SVG Icon.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * This is the fill color of the svg icon.
	   * If not specified, this component will default
	   * to muiTheme.palette.textColor.
	   */
	  color: _propTypes2.default.string,
	  /**
	   * This is the icon color when the mouse hovers over the icon.
	   */
	  hoverColor: _propTypes2.default.string,
	  /** @ignore */
	  onMouseEnter: _propTypes2.default.func,
	  /** @ignore */
	  onMouseLeave: _propTypes2.default.func,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  /**
	   * Allows you to redefine what the coordinates
	   * without units mean inside an svg element. For example,
	   * if the SVG element is 500 (width) by 200 (height), and you
	   * pass viewBox="0 0 50 20", this means that the coordinates inside
	   * the svg will go from the top left corner (0,0) to bottom right (50,20)
	   * and each unit will be worth 10px.
	   */
	  viewBox: _propTypes2.default.string
	} : {};
	exports.default = SvgIcon;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(250);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(256);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavigationExpandMore = function NavigationExpandMore(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z' })
	  );
	};
	NavigationExpandMore = (0, _pure2.default)(NavigationExpandMore);
	NavigationExpandMore.displayName = 'NavigationExpandMore';
	NavigationExpandMore.muiName = 'SvgIcon';
	
	exports.default = NavigationExpandMore;

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _List = __webpack_require__(223);
	
	var _List2 = _interopRequireDefault(_List);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NestedList = function NestedList(props) {
	  var children = props.children,
	      open = props.open,
	      nestedLevel = props.nestedLevel,
	      style = props.style;
	
	
	  if (!open) {
	    return null;
	  }
	
	  return _react2.default.createElement(
	    _List2.default,
	    { style: style },
	    _react.Children.map(children, function (child) {
	      return (0, _react.isValidElement)(child) ? (0, _react.cloneElement)(child, {
	        nestedLevel: nestedLevel + 1
	      }) : child;
	    })
	  );
	};
	
	NestedList.propTypes = process.env.NODE_ENV !== "production" ? {
	  children: _propTypes2.default.node,
	  nestedLevel: _propTypes2.default.number.isRequired,
	  open: _propTypes2.default.bool.isRequired,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object
	} : {};
	
	exports.default = NestedList;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.makeSelectable = undefined;
	
	var _extends2 = __webpack_require__(209);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(214);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(63);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(89);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(90);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(94);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(140);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(215);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _colorManipulator = __webpack_require__(160);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var makeSelectable = function makeSelectable(MyComponent) {
	  var _class, _temp2;
	
	  return _temp2 = _class = function (_Component) {
	    (0, _inherits3.default)(_class, _Component);
	
	    function _class() {
	      var _ref;
	
	      var _temp, _this, _ret;
	
	      (0, _classCallCheck3.default)(this, _class);
	
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = _class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call.apply(_ref, [this].concat(args))), _this), _this.hasSelectedDescendant = function (previousValue, child) {
	        if (_react2.default.isValidElement(child) && child.props.nestedItems && child.props.nestedItems.length > 0) {
	          return child.props.nestedItems.reduce(_this.hasSelectedDescendant, previousValue);
	        }
	        return previousValue || _this.isChildSelected(child, _this.props);
	      }, _this.handleItemClick = function (event, item) {
	        var itemValue = item.props.value;
	
	        if (itemValue !== _this.props.value) {
	          if (_this.props.onChange) {
	            _this.props.onChange(event, itemValue);
	          }
	        }
	      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	    }
	
	    (0, _createClass3.default)(_class, [{
	      key: 'extendChild',
	      value: function extendChild(child, styles, selectedItemStyle) {
	        var _this2 = this;
	
	        if (child && child.type && child.type.muiName === 'ListItem') {
	          var selected = this.isChildSelected(child, this.props);
	          var selectedChildrenStyles = void 0;
	          if (selected) {
	            selectedChildrenStyles = (0, _simpleAssign2.default)({}, styles, selectedItemStyle);
	          }
	
	          var mergedChildrenStyles = (0, _simpleAssign2.default)({}, child.props.style, selectedChildrenStyles);
	
	          this.keyIndex += 1;
	
	          return _react2.default.cloneElement(child, {
	            onClick: function onClick(event) {
	              _this2.handleItemClick(event, child);
	              if (child.props.onClick) {
	                child.props.onClick(event);
	              }
	            },
	            key: this.keyIndex,
	            style: mergedChildrenStyles,
	            nestedItems: child.props.nestedItems.map(function (child) {
	              return _this2.extendChild(child, styles, selectedItemStyle);
	            }),
	            initiallyOpen: this.isInitiallyOpen(child)
	          });
	        } else {
	          return child;
	        }
	      }
	    }, {
	      key: 'isInitiallyOpen',
	      value: function isInitiallyOpen(child) {
	        if (child.props.initiallyOpen) {
	          return child.props.initiallyOpen;
	        }
	        return this.hasSelectedDescendant(false, child);
	      }
	    }, {
	      key: 'isChildSelected',
	      value: function isChildSelected(child, props) {
	        return props.value === child.props.value;
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var _this3 = this;
	
	        var _props = this.props,
	            children = _props.children,
	            selectedItemStyle = _props.selectedItemStyle,
	            other = (0, _objectWithoutProperties3.default)(_props, ['children', 'selectedItemStyle']);
	
	
	        this.keyIndex = 0;
	        var styles = {};
	
	        if (!selectedItemStyle) {
	          var textColor = this.context.muiTheme.baseTheme.palette.textColor;
	          styles.backgroundColor = (0, _colorManipulator.fade)(textColor, 0.2);
	        }
	
	        return _react2.default.createElement(
	          MyComponent,
	          (0, _extends3.default)({}, other, this.state),
	          _react.Children.map(children, function (child) {
	            return _this3.extendChild(child, styles, selectedItemStyle);
	          })
	        );
	      }
	    }]);
	    return _class;
	  }(_react.Component), _class.propTypes = {
	    children: _propTypes2.default.node,
	    onChange: _propTypes2.default.func,
	    selectedItemStyle: _propTypes2.default.object,
	    value: _propTypes2.default.any
	  }, _class.contextTypes = {
	    muiTheme: _propTypes2.default.object.isRequired
	  }, _temp2;
	};
	
	exports.makeSelectable = makeSelectable;
	exports.default = makeSelectable;

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Divider = __webpack_require__(262);
	
	var _Divider2 = _interopRequireDefault(_Divider);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Divider2.default;

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(209);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(214);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _simpleAssign = __webpack_require__(215);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Divider = function Divider(props, context) {
	  var inset = props.inset,
	      style = props.style,
	      other = (0, _objectWithoutProperties3.default)(props, ['inset', 'style']);
	  var _context$muiTheme = context.muiTheme,
	      baseTheme = _context$muiTheme.baseTheme,
	      prepareStyles = _context$muiTheme.prepareStyles;
	
	
	  var styles = {
	    root: {
	      margin: 0,
	      marginTop: -1,
	      marginLeft: inset ? 72 : 0,
	      height: 1,
	      border: 'none',
	      backgroundColor: baseTheme.palette.borderColor
	    }
	  };
	
	  return _react2.default.createElement('hr', (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }));
	};
	
	Divider.muiName = 'Divider';
	
	Divider.propTypes = process.env.NODE_ENV !== "production" ? {
	  /**
	   * If true, the `Divider` will be indented.
	   */
	  inset: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object
	} : {};
	
	Divider.defaultProps = {
	  inset: false
	};
	
	Divider.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	
	exports.default = Divider;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Avatar = __webpack_require__(264);
	
	var _Avatar2 = _interopRequireDefault(_Avatar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Avatar2.default;

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(209);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(214);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(63);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(89);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(90);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(94);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(140);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(215);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context) {
	  var backgroundColor = props.backgroundColor,
	      color = props.color,
	      size = props.size;
	  var avatar = context.muiTheme.avatar;
	
	
	  var styles = {
	    root: {
	      color: color || avatar.color,
	      backgroundColor: backgroundColor || avatar.backgroundColor,
	      userSelect: 'none',
	      display: 'inline-flex',
	      alignItems: 'center',
	      justifyContent: 'center',
	      fontSize: size / 2,
	      borderRadius: '50%',
	      height: size,
	      width: size
	    },
	    icon: {
	      color: color || avatar.color,
	      width: size * 0.6,
	      height: size * 0.6,
	      fontSize: size * 0.6,
	      margin: size * 0.2
	    }
	  };
	
	  return styles;
	}
	
	var Avatar = function (_Component) {
	  (0, _inherits3.default)(Avatar, _Component);
	
	  function Avatar() {
	    (0, _classCallCheck3.default)(this, Avatar);
	    return (0, _possibleConstructorReturn3.default)(this, (Avatar.__proto__ || (0, _getPrototypeOf2.default)(Avatar)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Avatar, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          backgroundColor = _props.backgroundColor,
	          icon = _props.icon,
	          src = _props.src,
	          style = _props.style,
	          className = _props.className,
	          other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'icon', 'src', 'style', 'className']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      if (src) {
	        return _react2.default.createElement('img', (0, _extends3.default)({
	          style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
	        }, other, {
	          src: src,
	          className: className
	        }));
	      } else {
	        return _react2.default.createElement(
	          'div',
	          (0, _extends3.default)({}, other, {
	            style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)),
	            className: className
	          }),
	          icon && _react2.default.cloneElement(icon, {
	            color: styles.icon.color,
	            style: (0, _simpleAssign2.default)(styles.icon, icon.props.style)
	          }),
	          this.props.children
	        );
	      }
	    }
	  }]);
	  return Avatar;
	}(_react.Component);
	
	Avatar.muiName = 'Avatar';
	Avatar.defaultProps = {
	  size: 40
	};
	Avatar.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	Avatar.propTypes = process.env.NODE_ENV !== "production" ? {
	  /**
	   * The backgroundColor of the avatar. Does not apply to image avatars.
	   */
	  backgroundColor: _propTypes2.default.string,
	  /**
	   * Can be used, for instance, to render a letter inside the avatar.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * The css class name of the root `div` or `img` element.
	   */
	  className: _propTypes2.default.string,
	  /**
	   * The icon or letter's color.
	   */
	  color: _propTypes2.default.string,
	  /**
	   * This is the SvgIcon or FontIcon to be used inside the avatar.
	   */
	  icon: _propTypes2.default.element,
	  /**
	   * This is the size of the avatar in pixels.
	   */
	  size: _propTypes2.default.number,
	  /**
	   * If passed in, this component will render an img element. Otherwise, a div will be rendered.
	   */
	  src: _propTypes2.default.string,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object
	} : {};
	exports.default = Avatar;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(250);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(256);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavigationMoreVert = function NavigationMoreVert(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' })
	  );
	};
	NavigationMoreVert = (0, _pure2.default)(NavigationMoreVert);
	NavigationMoreVert.displayName = 'NavigationMoreVert';
	NavigationMoreVert.muiName = 'SvgIcon';
	
	exports.default = NavigationMoreVert;

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.MenuItem = exports.IconMenu = undefined;
	
	var _IconMenu2 = __webpack_require__(267);
	
	var _IconMenu3 = _interopRequireDefault(_IconMenu2);
	
	var _MenuItem2 = __webpack_require__(277);
	
	var _MenuItem3 = _interopRequireDefault(_MenuItem2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.IconMenu = _IconMenu3.default;
	exports.MenuItem = _MenuItem3.default;
	exports.default = _IconMenu3.default;

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(209);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(214);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(63);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(89);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(90);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(94);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(140);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(215);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(227);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _events = __webpack_require__(231);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _propTypes3 = __webpack_require__(221);
	
	var _propTypes4 = _interopRequireDefault(_propTypes3);
	
	var _Menu = __webpack_require__(268);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _Popover = __webpack_require__(271);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _warning = __webpack_require__(161);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var IconMenu = function (_Component) {
	  (0, _inherits3.default)(IconMenu, _Component);
	
	  function IconMenu() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, IconMenu);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = IconMenu.__proto__ || (0, _getPrototypeOf2.default)(IconMenu)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      menuInitiallyKeyboardFocused: false,
	      open: false
	    }, _this.handleItemClick = function (event, child) {
	      if (_this.props.clickCloseDelay !== 0 && !child.props.hasOwnProperty('menuItems')) {
	        var isKeyboard = _events2.default.isKeyboard(event);
	        _this.timerCloseId = setTimeout(function () {
	          _this.close(isKeyboard ? 'enter' : 'itemTap', isKeyboard);
	        }, _this.props.clickCloseDelay);
	      }
	
	      _this.props.onItemClick(event, child);
	    }, _this.handleRequestClose = function (reason) {
	      _this.close(reason);
	    }, _this.handleEscKeyDownMenu = function (event) {
	      _this.close('escape', event);
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(IconMenu, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.open != null) {
	        this.setState({
	          open: nextProps.open,
	          anchorEl: this.refs.iconMenuContainer
	        });
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.timerCloseId);
	    }
	  }, {
	    key: 'isOpen',
	    value: function isOpen() {
	      return this.state.open;
	    }
	  }, {
	    key: 'close',
	    value: function close(reason, isKeyboard) {
	      var _this2 = this;
	
	      if (!this.state.open) {
	        return;
	      }
	
	      if (this.props.open !== null) {
	        this.props.onRequestChange(false, reason);
	      } else {
	        this.setState({ open: false }, function () {
	          // Set focus on the icon button when the menu close
	          if (isKeyboard) {
	            var iconButton = _this2.refs.iconButton;
	            _reactDom2.default.findDOMNode(iconButton).focus();
	            iconButton.setKeyboardFocus();
	          }
	        });
	      }
	    }
	  }, {
	    key: 'open',
	    value: function open(reason, event) {
	      if (this.props.open !== null) {
	        this.props.onRequestChange(true, reason);
	
	        return this.setState({
	          menuInitiallyKeyboardFocused: _events2.default.isKeyboard(event),
	          anchorEl: event.currentTarget
	        });
	      }
	
	      this.setState({
	        open: true,
	        menuInitiallyKeyboardFocused: _events2.default.isKeyboard(event),
	        anchorEl: event.currentTarget
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var _props = this.props,
	          anchorOrigin = _props.anchorOrigin,
	          className = _props.className,
	          animated = _props.animated,
	          animation = _props.animation,
	          iconButtonElement = _props.iconButtonElement,
	          iconStyle = _props.iconStyle,
	          onItemClick = _props.onItemClick,
	          onKeyboardFocus = _props.onKeyboardFocus,
	          onMouseDown = _props.onMouseDown,
	          onMouseLeave = _props.onMouseLeave,
	          onMouseEnter = _props.onMouseEnter,
	          onMouseUp = _props.onMouseUp,
	          onRequestChange = _props.onRequestChange,
	          onClick = _props.onClick,
	          listStyle = _props.listStyle,
	          menuStyle = _props.menuStyle,
	          style = _props.style,
	          targetOrigin = _props.targetOrigin,
	          clickCloseDelay = _props.clickCloseDelay,
	          useLayerForClickAway = _props.useLayerForClickAway,
	          other = (0, _objectWithoutProperties3.default)(_props, ['anchorOrigin', 'className', 'animated', 'animation', 'iconButtonElement', 'iconStyle', 'onItemClick', 'onKeyboardFocus', 'onMouseDown', 'onMouseLeave', 'onMouseEnter', 'onMouseUp', 'onRequestChange', 'onClick', 'listStyle', 'menuStyle', 'style', 'targetOrigin', 'clickCloseDelay', 'useLayerForClickAway']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	      var _state = this.state,
	          open = _state.open,
	          anchorEl = _state.anchorEl;
	
	
	      var styles = {
	        root: {
	          display: 'inline-block',
	          position: 'relative'
	        },
	        menu: {
	          position: 'relative'
	        }
	      };
	
	      var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style);
	      var mergedMenuStyles = (0, _simpleAssign2.default)(styles.menu, menuStyle);
	
	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(iconButtonElement.type.muiName !== 'SvgIcon', 'Material-UI: You shoud not provide an <SvgIcon /> to the \'iconButtonElement\' property of <IconMenu />.\nYou should wrapped it with an <IconButton />.') : void 0;
	
	      var iconButtonProps = {
	        onKeyboardFocus: onKeyboardFocus,
	        onClick: function onClick(event) {
	          _this3.open(_events2.default.isKeyboard(event) ? 'keyboard' : 'iconTap', event);
	          if (iconButtonElement.props.onClick) {
	            iconButtonElement.props.onClick(event);
	          }
	        },
	        ref: 'iconButton'
	      };
	      if (iconStyle || iconButtonElement.props.iconStyle) {
	        iconButtonProps.iconStyle = iconStyle ? (0, _simpleAssign2.default)({}, iconStyle, iconButtonElement.props.iconStyle) : iconButtonElement.props.iconStyle;
	      }
	      var iconButton = _react2.default.cloneElement(iconButtonElement, iconButtonProps);
	
	      var menu = _react2.default.createElement(
	        _Menu2.default,
	        (0, _extends3.default)({}, other, {
	          initiallyKeyboardFocused: this.state.menuInitiallyKeyboardFocused,
	          onEscKeyDown: this.handleEscKeyDownMenu,
	          onItemClick: this.handleItemClick,
	          style: mergedMenuStyles,
	          listStyle: listStyle
	        }),
	        this.props.children
	      );
	
	      return _react2.default.createElement(
	        'div',
	        {
	          ref: 'iconMenuContainer',
	          className: className,
	          onMouseDown: onMouseDown,
	          onMouseLeave: onMouseLeave,
	          onMouseEnter: onMouseEnter,
	          onMouseUp: onMouseUp,
	          onClick: onClick,
	          style: prepareStyles(mergedRootStyles)
	        },
	        iconButton,
	        _react2.default.createElement(
	          _Popover2.default,
	          {
	            anchorOrigin: anchorOrigin,
	            targetOrigin: targetOrigin,
	            open: open,
	            anchorEl: anchorEl,
	            childContextTypes: this.constructor.childContextTypes,
	            useLayerForClickAway: useLayerForClickAway,
	            onRequestClose: this.handleRequestClose,
	            animated: animated,
	            animation: animation,
	            context: this.context
	          },
	          menu
	        )
	      );
	    }
	  }]);
	  return IconMenu;
	}(_react.Component);
	
	IconMenu.muiName = 'IconMenu';
	IconMenu.defaultProps = {
	  anchorOrigin: {
	    vertical: 'top',
	    horizontal: 'left'
	  },
	  animated: true,
	  multiple: false,
	  open: null,
	  onItemClick: function onItemClick() {},
	  onKeyboardFocus: function onKeyboardFocus() {},
	  onMouseDown: function onMouseDown() {},
	  onMouseLeave: function onMouseLeave() {},
	  onMouseEnter: function onMouseEnter() {},
	  onMouseUp: function onMouseUp() {},
	  onRequestChange: function onRequestChange() {},
	  onClick: function onClick() {},
	  targetOrigin: {
	    vertical: 'top',
	    horizontal: 'left'
	  },
	  clickCloseDelay: 200,
	  useLayerForClickAway: false
	};
	IconMenu.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	IconMenu.propTypes = process.env.NODE_ENV !== "production" ? {
	  /**
	   * This is the point on the icon where the menu
	   * `targetOrigin` will attach.
	   * Options:
	   * vertical: [top, center, bottom]
	   * horizontal: [left, middle, right].
	   */
	  anchorOrigin: _propTypes4.default.origin,
	  /**
	   * If true, the popover will apply transitions when
	   * it gets added to the DOM.
	   */
	  animated: _propTypes2.default.bool,
	  /**
	   * Override the default animation component used.
	   */
	  animation: _propTypes2.default.func,
	  /**
	   * Should be used to pass `MenuItem` components.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * The CSS class name of the root element.
	   */
	  className: _propTypes2.default.string,
	  /**
	   * Sets the delay in milliseconds before closing the
	   * menu when an item is clicked.
	   * If set to 0 then the auto close functionality
	   * will be disabled.
	   */
	  clickCloseDelay: _propTypes2.default.number,
	  /**
	   * This is the `IconButton` to render. This button will open the menu.
	   */
	  iconButtonElement: _propTypes2.default.element.isRequired,
	  /**
	   * Override the inline-styles of the underlying icon element.
	   */
	  iconStyle: _propTypes2.default.object,
	  /**
	   * Override the inline-styles of the underlying `List` element.
	   */
	  listStyle: _propTypes2.default.object,
	  /**
	   * Override the inline-styles of the menu element.
	   */
	  menuStyle: _propTypes2.default.object,
	  /**
	   * If true, the value can an be array and allow the menu to be a multi-select.
	   */
	  multiple: _propTypes2.default.bool,
	  /**
	   * Callback function fired when the `IconButton` element is clicked.
	   *
	   * @param {object} event Click event targeting the `IconButton` element.
	   */
	  onClick: _propTypes2.default.func,
	  /**
	   * Callback function fired when a menu item is selected with a click.
	   *
	   * @param {object} event Click event targeting the selected menu item element.
	   * @param {object} child The selected element.
	   */
	  onItemClick: _propTypes2.default.func,
	  /**
	   * Callback function fired when the `IconButton` element is focused or blurred by the keyboard.
	   *
	   * @param {object} event `focus` or `blur` event targeting the `IconButton` element.
	   * @param {boolean} keyboardFocused If true, the `IconButton` element is focused.
	   */
	  onKeyboardFocus: _propTypes2.default.func,
	  /** @ignore */
	  onMouseDown: _propTypes2.default.func,
	  /** @ignore */
	  onMouseEnter: _propTypes2.default.func,
	  /** @ignore */
	  onMouseLeave: _propTypes2.default.func,
	  /** @ignore */
	  onMouseUp: _propTypes2.default.func,
	  /**
	   * Callback function fired when the `open` state of the menu is requested to be changed.
	   *
	   * @param {boolean} open If true, the menu was requested to be opened.
	   * @param {string} reason The reason for the open or close request. Possible values are
	   * 'keyboard' and 'iconTap' for open requests; 'enter', 'escape', 'itemTap', and 'clickAway'
	   * for close requests.
	   */
	  onRequestChange: _propTypes2.default.func,
	  /**
	   * If true, the `IconMenu` is opened.
	   */
	  open: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  /**
	   * This is the point on the menu which will stick to the menu
	   * origin.
	   * Options:
	   * vertical: [top, center, bottom]
	   * horizontal: [left, middle, right].
	   */
	  targetOrigin: _propTypes4.default.origin,
	  /**
	   * If true, the popover will render on top of an invisible
	   * layer, which will prevent clicks to the underlying elements.
	   */
	  useLayerForClickAway: _propTypes2.default.bool
	} : {};
	exports.default = IconMenu;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(209);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(214);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _toArray2 = __webpack_require__(240);
	
	var _toArray3 = _interopRequireDefault(_toArray2);
	
	var _getPrototypeOf = __webpack_require__(63);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(89);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(90);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(94);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(140);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(215);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(227);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _shallowEqual = __webpack_require__(228);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _ClickAwayListener = __webpack_require__(269);
	
	var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);
	
	var _keycode = __webpack_require__(232);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	var _propTypes3 = __webpack_require__(221);
	
	var _propTypes4 = _interopRequireDefault(_propTypes3);
	
	var _List = __webpack_require__(223);
	
	var _List2 = _interopRequireDefault(_List);
	
	var _menuUtils = __webpack_require__(270);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context) {
	  var desktop = props.desktop,
	      maxHeight = props.maxHeight,
	      width = props.width;
	  var muiTheme = context.muiTheme;
	
	
	  var styles = {
	    root: {
	      // Nested div because the List scales x faster than it scales y
	      zIndex: muiTheme.zIndex.menu,
	      maxHeight: maxHeight,
	      overflowY: maxHeight ? 'auto' : null
	    },
	    divider: {
	      marginTop: 7,
	      marginBottom: 8
	    },
	    list: {
	      display: 'table-cell',
	      paddingBottom: desktop ? 16 : 8,
	      paddingTop: desktop ? 16 : 8,
	      userSelect: 'none',
	      width: width
	    },
	    selectedMenuItem: {
	      color: muiTheme.menuItem.selectedTextColor
	    }
	  };
	
	  return styles;
	}
	
	var Menu = function (_Component) {
	  (0, _inherits3.default)(Menu, _Component);
	
	  function Menu(props, context) {
	    (0, _classCallCheck3.default)(this, Menu);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).call(this, props, context));
	
	    _initialiseProps.call(_this);
	
	    var filteredChildren = _this.getFilteredChildren(props.children);
	    var selectedIndex = _this.getLastSelectedIndex(props, filteredChildren);
	
	    var newFocusIndex = props.disableAutoFocus ? -1 : selectedIndex >= 0 ? selectedIndex : 0;
	    if (newFocusIndex !== -1 && props.onMenuItemFocusChange) {
	      props.onMenuItemFocusChange(null, newFocusIndex);
	    }
	    _this.state = {
	      focusIndex: newFocusIndex,
	      isKeyboardFocused: props.initiallyKeyboardFocused,
	      keyWidth: props.desktop ? 64 : 56
	    };
	
	    _this.hotKeyHolder = new _menuUtils.HotKeyHolder();
	    return _this;
	  }
	
	  (0, _createClass3.default)(Menu, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.autoWidth) {
	        this.setWidth();
	      }
	      this.setScollPosition();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var selectedIndex = void 0;
	      var filteredChildren = this.getFilteredChildren(nextProps.children);
	
	      if (this.props.multiple !== true) {
	        selectedIndex = this.getLastSelectedIndex(nextProps, filteredChildren);
	      } else {
	        selectedIndex = this.state.focusIndex;
	      }
	
	      var newFocusIndex = nextProps.disableAutoFocus ? -1 : selectedIndex >= 0 ? selectedIndex : 0;
	      if (newFocusIndex !== this.state.focusIndex && this.props.onMenuItemFocusChange) {
	        this.props.onMenuItemFocusChange(null, newFocusIndex);
	      }
	      this.setState({
	        focusIndex: newFocusIndex,
	        keyWidth: nextProps.desktop ? 64 : 56
	      });
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.props.autoWidth) this.setWidth();
	    }
	  }, {
	    key: 'getValueLink',
	
	
	    // Do not use outside of this component, it will be removed once valueLink is deprecated
	    value: function getValueLink(props) {
	      return props.valueLink || {
	        value: props.value,
	        requestChange: props.onChange
	      };
	    }
	  }, {
	    key: 'setKeyboardFocused',
	    value: function setKeyboardFocused(keyboardFocused) {
	      this.setState({
	        isKeyboardFocused: keyboardFocused
	      });
	    }
	  }, {
	    key: 'getFilteredChildren',
	    value: function getFilteredChildren(children) {
	      var filteredChildren = [];
	      _react2.default.Children.forEach(children, function (child) {
	        if (child) {
	          filteredChildren.push(child);
	        }
	      });
	      return filteredChildren;
	    }
	  }, {
	    key: 'cloneMenuItem',
	    value: function cloneMenuItem(child, childIndex, styles, index) {
	      var _this2 = this;
	
	      var childIsDisabled = child.props.disabled;
	
	      var selectedChildStyles = {};
	      if (!childIsDisabled) {
	        var selected = this.isChildSelected(child, this.props);
	
	        if (selected) {
	          (0, _simpleAssign2.default)(selectedChildStyles, styles.selectedMenuItem, this.props.selectedMenuItemStyle);
	        }
	      }
	      var mergedChildStyles = (0, _simpleAssign2.default)({}, child.props.style, this.props.menuItemStyle, selectedChildStyles);
	
	      var extraProps = {
	        desktop: this.props.desktop,
	        style: mergedChildStyles
	      };
	      if (!childIsDisabled) {
	        var isFocused = childIndex === this.state.focusIndex;
	        var focusState = 'none';
	        if (isFocused) {
	          focusState = this.state.isKeyboardFocused ? 'keyboard-focused' : 'focused';
	        }
	
	        (0, _simpleAssign2.default)(extraProps, {
	          focusState: focusState,
	          onClick: function onClick(event) {
	            _this2.handleMenuItemClick(event, child, index);
	            if (child.props.onClick) child.props.onClick(event);
	          },
	          ref: isFocused ? 'focusedMenuItem' : null
	        });
	      }
	      return _react2.default.cloneElement(child, extraProps);
	    }
	  }, {
	    key: 'decrementKeyboardFocusIndex',
	    value: function decrementKeyboardFocusIndex(event) {
	      var index = this.state.focusIndex;
	
	      index--;
	      if (index < 0) index = 0;
	
	      this.setFocusIndex(event, index, true);
	    }
	  }, {
	    key: 'getMenuItemCount',
	    value: function getMenuItemCount(filteredChildren) {
	      var menuItemCount = 0;
	      filteredChildren.forEach(function (child) {
	        var childIsADivider = child.type && child.type.muiName === 'Divider';
	        var childIsDisabled = child.props.disabled;
	        if (!childIsADivider && !childIsDisabled) menuItemCount++;
	      });
	      return menuItemCount;
	    }
	  }, {
	    key: 'getLastSelectedIndex',
	    value: function getLastSelectedIndex(props, filteredChildren) {
	      var _this3 = this;
	
	      var selectedIndex = -1;
	      var menuItemIndex = 0;
	
	      filteredChildren.forEach(function (child) {
	        var childIsADivider = child.type && child.type.muiName === 'Divider';
	
	        if (_this3.isChildSelected(child, props)) selectedIndex = menuItemIndex;
	        if (!childIsADivider) menuItemIndex++;
	      });
	
	      return selectedIndex;
	    }
	  }, {
	    key: 'setFocusIndexStartsWith',
	    value: function setFocusIndexStartsWith(event, keys, filteredChildren) {
	      var foundIndex = -1;
	      _react2.default.Children.forEach(filteredChildren, function (child, index) {
	        if (foundIndex >= 0) {
	          return;
	        }
	        var primaryText = child.props.primaryText;
	
	        if (typeof primaryText === 'string' && primaryText.substr(0, keys.length).toLowerCase() === keys.toLowerCase()) {
	          foundIndex = index;
	        }
	      });
	      if (foundIndex >= 0) {
	        this.setFocusIndex(event, foundIndex, true);
	        return true;
	      }
	      return false;
	    }
	  }, {
	    key: 'handleMenuItemClick',
	    value: function handleMenuItemClick(event, item, index) {
	      var children = this.props.children;
	      var multiple = this.props.multiple;
	      var valueLink = this.getValueLink(this.props);
	      var menuValue = valueLink.value;
	      var itemValue = item.props.value;
	      var focusIndex = _react2.default.isValidElement(children) ? 0 : children.indexOf(item);
	
	      this.setFocusIndex(event, focusIndex, false);
	
	      if (multiple) {
	        menuValue = menuValue || [];
	
	        var itemIndex = menuValue.indexOf(itemValue);
	
	        var _menuValue = menuValue,
	            _menuValue2 = (0, _toArray3.default)(_menuValue),
	            newMenuValue = _menuValue2.slice(0);
	
	        if (itemIndex === -1) {
	          newMenuValue.push(itemValue);
	        } else {
	          newMenuValue.splice(itemIndex, 1);
	        }
	
	        valueLink.requestChange(event, newMenuValue);
	      } else if (!multiple && itemValue !== menuValue) {
	        valueLink.requestChange(event, itemValue);
	      }
	
	      this.props.onItemClick(event, item, index);
	    }
	  }, {
	    key: 'incrementKeyboardFocusIndex',
	    value: function incrementKeyboardFocusIndex(event, filteredChildren) {
	      var index = this.state.focusIndex;
	      var maxIndex = this.getMenuItemCount(filteredChildren) - 1;
	
	      index++;
	      if (index > maxIndex) index = maxIndex;
	
	      this.setFocusIndex(event, index, true);
	    }
	  }, {
	    key: 'isChildSelected',
	    value: function isChildSelected(child, props) {
	      var menuValue = this.getValueLink(props).value;
	      var childValue = child.props.value;
	
	      if (props.multiple) {
	        return menuValue && menuValue.length && menuValue.indexOf(childValue) !== -1;
	      } else {
	        return child.props.hasOwnProperty('value') && menuValue === childValue;
	      }
	    }
	  }, {
	    key: 'setFocusIndex',
	    value: function setFocusIndex(event, newIndex, isKeyboardFocused) {
	      if (this.props.onMenuItemFocusChange) {
	        // Do this even if `newIndex === this.state.focusIndex` to allow users
	        // to detect up-arrow on the first MenuItem or down-arrow on the last.
	        this.props.onMenuItemFocusChange(event, newIndex);
	      }
	      this.setState({
	        focusIndex: newIndex,
	        isKeyboardFocused: isKeyboardFocused
	      });
	    }
	  }, {
	    key: 'setScollPosition',
	    value: function setScollPosition() {
	      var desktop = this.props.desktop;
	      var focusedMenuItem = this.refs.focusedMenuItem;
	      var menuItemHeight = desktop ? 32 : 48;
	
	      if (focusedMenuItem) {
	        var selectedOffSet = _reactDom2.default.findDOMNode(focusedMenuItem).offsetTop;
	
	        // Make the focused item be the 2nd item in the list the user sees
	        var scrollTop = selectedOffSet - menuItemHeight;
	        if (scrollTop < menuItemHeight) scrollTop = 0;
	
	        _reactDom2.default.findDOMNode(this.refs.scrollContainer).scrollTop = scrollTop;
	      }
	    }
	  }, {
	    key: 'cancelScrollEvent',
	    value: function cancelScrollEvent(event) {
	      event.stopPropagation();
	      event.preventDefault();
	      return false;
	    }
	  }, {
	    key: 'setWidth',
	    value: function setWidth() {
	      var el = _reactDom2.default.findDOMNode(this);
	      var listEl = _reactDom2.default.findDOMNode(this.refs.list);
	      var elWidth = el.offsetWidth;
	      var keyWidth = this.state.keyWidth;
	      var minWidth = keyWidth * 1.5;
	      var keyIncrements = elWidth / keyWidth;
	      var newWidth = void 0;
	
	      keyIncrements = keyIncrements <= 1.5 ? 1.5 : Math.ceil(keyIncrements);
	      newWidth = keyIncrements * keyWidth;
	
	      if (newWidth < minWidth) newWidth = minWidth;
	
	      el.style.width = newWidth + 'px';
	      listEl.style.width = newWidth + 'px';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;
	
	      var _props = this.props,
	          autoWidth = _props.autoWidth,
	          children = _props.children,
	          desktop = _props.desktop,
	          disableAutoFocus = _props.disableAutoFocus,
	          initiallyKeyboardFocused = _props.initiallyKeyboardFocused,
	          listStyle = _props.listStyle,
	          maxHeight = _props.maxHeight,
	          multiple = _props.multiple,
	          onItemClick = _props.onItemClick,
	          onEscKeyDown = _props.onEscKeyDown,
	          onMenuItemFocusChange = _props.onMenuItemFocusChange,
	          selectedMenuItemStyle = _props.selectedMenuItemStyle,
	          menuItemStyle = _props.menuItemStyle,
	          style = _props.style,
	          value = _props.value,
	          valueLink = _props.valueLink,
	          width = _props.width,
	          other = (0, _objectWithoutProperties3.default)(_props, ['autoWidth', 'children', 'desktop', 'disableAutoFocus', 'initiallyKeyboardFocused', 'listStyle', 'maxHeight', 'multiple', 'onItemClick', 'onEscKeyDown', 'onMenuItemFocusChange', 'selectedMenuItemStyle', 'menuItemStyle', 'style', 'value', 'valueLink', 'width']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style);
	      var mergedListStyles = (0, _simpleAssign2.default)(styles.list, listStyle);
	
	      var filteredChildren = this.getFilteredChildren(children);
	
	      var menuItemIndex = 0;
	      var newChildren = _react2.default.Children.map(filteredChildren, function (child, index) {
	        var childIsDisabled = child.props.disabled;
	        var childName = child.type ? child.type.muiName : '';
	        var newChild = child;
	
	        switch (childName) {
	          case 'MenuItem':
	            newChild = _this4.cloneMenuItem(child, menuItemIndex, styles, index);
	            break;
	
	          case 'Divider':
	            newChild = _react2.default.cloneElement(child, {
	              style: (0, _simpleAssign2.default)({}, styles.divider, child.props.style)
	            });
	            break;
	        }
	
	        if (childName === 'MenuItem' && !childIsDisabled) {
	          menuItemIndex++;
	        }
	
	        return newChild;
	      });
	
	      return _react2.default.createElement(
	        _ClickAwayListener2.default,
	        { onClickAway: this.handleClickAway },
	        _react2.default.createElement(
	          'div',
	          {
	            onKeyDown: this.handleKeyDown,
	            onWheel: this.handleOnWheel,
	            style: prepareStyles(mergedRootStyles),
	            ref: 'scrollContainer',
	            role: 'presentation'
	          },
	          _react2.default.createElement(
	            _List2.default,
	            (0, _extends3.default)({}, other, {
	              ref: 'list',
	              style: mergedListStyles,
	              role: 'menu'
	            }),
	            newChildren
	          )
	        )
	      );
	    }
	  }]);
	  return Menu;
	}(_react.Component);
	
	Menu.defaultProps = {
	  autoWidth: true,
	  desktop: false,
	  disableAutoFocus: false,
	  initiallyKeyboardFocused: false,
	  maxHeight: null,
	  multiple: false,
	  onChange: function onChange() {},
	  onEscKeyDown: function onEscKeyDown() {},
	  onItemClick: function onItemClick() {},
	  onKeyDown: function onKeyDown() {}
	};
	Menu.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	
	var _initialiseProps = function _initialiseProps() {
	  var _this5 = this;
	
	  this.handleClickAway = function (event) {
	    if (event.defaultPrevented) {
	      return;
	    }
	
	    var focusIndex = _this5.state.focusIndex;
	
	    if (focusIndex < 0) {
	      return;
	    }
	
	    var filteredChildren = _this5.getFilteredChildren(_this5.props.children);
	    var focusedItem = filteredChildren[focusIndex];
	    if (!!focusedItem && focusedItem.props.menuItems && focusedItem.props.menuItems.length > 0) {
	      return;
	    }
	
	    _this5.setFocusIndex(event, -1, false);
	  };
	
	  this.handleKeyDown = function (event) {
	    var filteredChildren = _this5.getFilteredChildren(_this5.props.children);
	    var key = (0, _keycode2.default)(event);
	    switch (key) {
	      case 'down':
	        event.preventDefault();
	        _this5.incrementKeyboardFocusIndex(event, filteredChildren);
	        break;
	      case 'esc':
	        _this5.props.onEscKeyDown(event);
	        break;
	      case 'tab':
	        event.preventDefault();
	        if (event.shiftKey) {
	          _this5.decrementKeyboardFocusIndex(event);
	        } else {
	          _this5.incrementKeyboardFocusIndex(event, filteredChildren);
	        }
	        break;
	      case 'up':
	        event.preventDefault();
	        _this5.decrementKeyboardFocusIndex(event);
	        break;
	      default:
	        if (key && key.length === 1) {
	          var hotKeys = _this5.hotKeyHolder.append(key);
	          if (_this5.setFocusIndexStartsWith(event, hotKeys, filteredChildren)) {
	            event.preventDefault();
	          }
	        }
	    }
	    _this5.props.onKeyDown(event);
	  };
	
	  this.handleOnWheel = function (event) {
	    var scrollContainer = _this5.refs.scrollContainer;
	    // Only scroll lock if the the Menu is scrollable.
	    if (scrollContainer.scrollHeight <= scrollContainer.clientHeight) return;
	
	    var scrollTop = scrollContainer.scrollTop,
	        scrollHeight = scrollContainer.scrollHeight,
	        clientHeight = scrollContainer.clientHeight;
	
	    var wheelDelta = event.deltaY;
	    var isDeltaPositive = wheelDelta > 0;
	
	    if (isDeltaPositive && wheelDelta > scrollHeight - clientHeight - scrollTop) {
	      scrollContainer.scrollTop = scrollHeight;
	      return _this5.cancelScrollEvent(event);
	    } else if (!isDeltaPositive && -wheelDelta > scrollTop) {
	      scrollContainer.scrollTop = 0;
	      return _this5.cancelScrollEvent(event);
	    }
	  };
	};
	
	Menu.propTypes = process.env.NODE_ENV !== "production" ? {
	  /**
	   * If true, the width of the menu will be set automatically
	   * according to the widths of its children,
	   * using proper keyline increments (64px for desktop,
	   * 56px otherwise).
	   */
	  autoWidth: _propTypes2.default.bool,
	  /**
	   * The content of the menu. This is usually used to pass `MenuItem`
	   * elements.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * If true, the menu item will render with compact desktop styles.
	   */
	  desktop: _propTypes2.default.bool,
	  /**
	   * If true, the menu will not be auto-focused.
	   */
	  disableAutoFocus: _propTypes2.default.bool,
	  /**
	   * If true, the menu will be keyboard-focused initially.
	   */
	  initiallyKeyboardFocused: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the underlying `List` element.
	   */
	  listStyle: _propTypes2.default.object,
	  /**
	   * The maximum height of the menu in pixels. If specified,
	   * the menu will be scrollable if it is taller than the provided
	   * height.
	   */
	  maxHeight: _propTypes2.default.number,
	  /**
	   * Override the inline-styles of menu items.
	   */
	  menuItemStyle: _propTypes2.default.object,
	  /**
	   * If true, `value` must be an array and the menu will support
	   * multiple selections.
	   */
	  multiple: _propTypes2.default.bool,
	  /**
	   * Callback function fired when a menu item with `value` not
	   * equal to the current `value` of the menu is clicked.
	   *
	   * @param {object} event Click event targeting the menu item.
	   * @param {any}  value If `multiple` is true, the menu's `value`
	   * array with either the menu item's `value` added (if
	   * it wasn't already selected) or omitted (if it was already selected).
	   * Otherwise, the `value` of the menu item.
	   */
	  onChange: _propTypes2.default.func,
	  /**
	   * Callback function fired when the menu is focused and the *Esc* key
	   * is pressed.
	   *
	   * @param {object} event `keydown` event targeting the menu.
	   */
	  onEscKeyDown: _propTypes2.default.func,
	  /**
	   * Callback function fired when a menu item is clicked.
	   *
	   * @param {object} event Click event targeting the menu item.
	   * @param {object} menuItem The menu item.
	   * @param {number} index The index of the menu item.
	   */
	  onItemClick: _propTypes2.default.func,
	  /** @ignore */
	  onKeyDown: _propTypes2.default.func,
	  /**
	   * Callback function fired when the focus on a `MenuItem` is changed.
	   * There will be some "duplicate" changes reported if two different
	   * focusing event happen, for example if a `MenuItem` is focused via
	   * the keyboard and then it is clicked on.
	   *
	   * @param {object} event The event that triggered the focus change.
	   * The event can be null since the focus can be changed for non-event
	   * reasons such as prop changes.
	   * @param {number} newFocusIndex The index of the newly focused
	   * `MenuItem` or `-1` if focus was lost.
	   */
	  onMenuItemFocusChange: _propTypes2.default.func,
	  /**
	   * Override the inline-styles of selected menu items.
	   */
	  selectedMenuItemStyle: _propTypes2.default.object,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  /**
	   * If `multiple` is true, an array of the `value`s of the selected
	   * menu items. Otherwise, the `value` of the selected menu item.
	   * If provided, the menu will be a controlled component.
	   * This component also supports valueLink.
	   */
	  value: _propTypes2.default.any,
	  /**
	   * ValueLink for the menu's `value`.
	   */
	  valueLink: _propTypes2.default.object,
	  /**
	   * The width of the menu. If not specified, the menu's width
	   * will be set according to the widths of its children, using
	   * proper keyline increments (64px for desktop, 56px otherwise).
	   */
	  width: _propTypes4.default.stringOrNumber
	} : {};
	exports.default = Menu;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(63);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(89);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(90);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(94);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(140);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(2);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(227);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _events = __webpack_require__(231);
	
	var _events2 = _interopRequireDefault(_events);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var isDescendant = function isDescendant(el, target) {
	  if (target !== null) {
	    return el === target || isDescendant(el, target.parentNode);
	  }
	  return false;
	};
	
	var clickAwayEvents = ['mouseup', 'touchend'];
	var bind = function bind(callback) {
	  return clickAwayEvents.forEach(function (event) {
	    return _events2.default.on(document, event, callback);
	  });
	};
	var unbind = function unbind(callback) {
	  return clickAwayEvents.forEach(function (event) {
	    return _events2.default.off(document, event, callback);
	  });
	};
	
	var ClickAwayListener = function (_Component) {
	  (0, _inherits3.default)(ClickAwayListener, _Component);
	
	  function ClickAwayListener() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, ClickAwayListener);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ClickAwayListener.__proto__ || (0, _getPrototypeOf2.default)(ClickAwayListener)).call.apply(_ref, [this].concat(args))), _this), _this.handleClickAway = function (event) {
	      if (event.defaultPrevented) {
	        return;
	      }
	
	      // IE11 support, which trigger the handleClickAway even after the unbind
	      if (_this.isCurrentlyMounted) {
	        var el = _reactDom2.default.findDOMNode(_this);
	
	        if (document.documentElement.contains(event.target) && !isDescendant(el, event.target)) {
	          _this.props.onClickAway(event);
	        }
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(ClickAwayListener, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.isCurrentlyMounted = true;
	      if (this.props.onClickAway) {
	        bind(this.handleClickAway);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (prevProps.onClickAway !== this.props.onClickAway) {
	        unbind(this.handleClickAway);
	        if (this.props.onClickAway) {
	          bind(this.handleClickAway);
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.isCurrentlyMounted = false;
	      unbind(this.handleClickAway);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children;
	    }
	  }]);
	  return ClickAwayListener;
	}(_react.Component);
	
	ClickAwayListener.propTypes = process.env.NODE_ENV !== "production" ? {
	  children: _propTypes2.default.element,
	  onClickAway: _propTypes2.default.func
	} : {};
	exports.default = ClickAwayListener;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HotKeyHolder = undefined;
	
	var _classCallCheck2 = __webpack_require__(89);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(90);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var HotKeyHolder = exports.HotKeyHolder = function () {
	  function HotKeyHolder() {
	    var _this = this;
	
	    (0, _classCallCheck3.default)(this, HotKeyHolder);
	
	    this.clear = function () {
	      _this.timerId = null;
	      _this.lastKeys = null;
	    };
	  }
	
	  (0, _createClass3.default)(HotKeyHolder, [{
	    key: 'append',
	    value: function append(key) {
	      clearTimeout(this.timerId);
	      this.timerId = setTimeout(this.clear, 500);
	      return this.lastKeys = (this.lastKeys || '') + key;
	    }
	  }]);
	  return HotKeyHolder;
	}();

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(209);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(214);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(63);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(89);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(90);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(94);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(140);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(215);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(227);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactEventListener = __webpack_require__(272);
	
	var _reactEventListener2 = _interopRequireDefault(_reactEventListener);
	
	var _RenderToLayer = __webpack_require__(274);
	
	var _RenderToLayer2 = _interopRequireDefault(_RenderToLayer);
	
	var _propTypes3 = __webpack_require__(221);
	
	var _propTypes4 = _interopRequireDefault(_propTypes3);
	
	var _Paper = __webpack_require__(219);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	var _lodash = __webpack_require__(275);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _PopoverAnimationDefault = __webpack_require__(276);
	
	var _PopoverAnimationDefault2 = _interopRequireDefault(_PopoverAnimationDefault);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = {
	  root: {
	    display: 'none'
	  }
	};
	
	var Popover = function (_Component) {
	  (0, _inherits3.default)(Popover, _Component);
	
	  function Popover(props, context) {
	    (0, _classCallCheck3.default)(this, Popover);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (Popover.__proto__ || (0, _getPrototypeOf2.default)(Popover)).call(this, props, context));
	
	    _this.timeout = null;
	
	    _this.renderLayer = function () {
	      var _this$props = _this.props,
	          animated = _this$props.animated,
	          animation = _this$props.animation,
	          anchorEl = _this$props.anchorEl,
	          anchorOrigin = _this$props.anchorOrigin,
	          autoCloseWhenOffScreen = _this$props.autoCloseWhenOffScreen,
	          canAutoPosition = _this$props.canAutoPosition,
	          children = _this$props.children,
	          onRequestClose = _this$props.onRequestClose,
	          style = _this$props.style,
	          targetOrigin = _this$props.targetOrigin,
	          useLayerForClickAway = _this$props.useLayerForClickAway,
	          scrollableContainer = _this$props.scrollableContainer,
	          other = (0, _objectWithoutProperties3.default)(_this$props, ['animated', 'animation', 'anchorEl', 'anchorOrigin', 'autoCloseWhenOffScreen', 'canAutoPosition', 'children', 'onRequestClose', 'style', 'targetOrigin', 'useLayerForClickAway', 'scrollableContainer']);
	
	
	      var styleRoot = style;
	
	      if (!animated) {
	        styleRoot = {
	          position: 'fixed',
	          zIndex: _this.context.muiTheme.zIndex.popover
	        };
	
	        if (!_this.state.open) {
	          return null;
	        }
	
	        return _react2.default.createElement(
	          _Paper2.default,
	          (0, _extends3.default)({ style: (0, _simpleAssign2.default)(styleRoot, style) }, other),
	          children
	        );
	      }
	
	      var Animation = animation || _PopoverAnimationDefault2.default;
	
	      return _react2.default.createElement(
	        Animation,
	        (0, _extends3.default)({
	          targetOrigin: targetOrigin,
	          style: styleRoot
	        }, other, {
	          open: _this.state.open && !_this.state.closing
	        }),
	        children
	      );
	    };
	
	    _this.componentClickAway = function () {
	      _this.requestClose('clickAway');
	    };
	
	    _this.setPlacement = function (scrolling) {
	      if (!_this.state.open) {
	        return;
	      }
	
	      if (!_this.popoverRefs.layer.getLayer()) {
	        return;
	      }
	
	      var targetEl = _this.popoverRefs.layer.getLayer().children[0];
	      if (!targetEl) {
	        return;
	      }
	
	      var _this$props2 = _this.props,
	          targetOrigin = _this$props2.targetOrigin,
	          anchorOrigin = _this$props2.anchorOrigin;
	
	      var anchorEl = _this.props.anchorEl || _this.anchorEl;
	
	      var anchor = _this.getAnchorPosition(anchorEl);
	      var target = _this.getTargetPosition(targetEl);
	
	      var targetPosition = {
	        top: anchor[anchorOrigin.vertical] - target[targetOrigin.vertical],
	        left: anchor[anchorOrigin.horizontal] - target[targetOrigin.horizontal]
	      };
	
	      if (scrolling && _this.props.autoCloseWhenOffScreen) {
	        _this.autoCloseWhenOffScreen(anchor);
	      }
	
	      if (_this.props.canAutoPosition) {
	        target = _this.getTargetPosition(targetEl); // update as height may have changed
	        targetPosition = _this.applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition);
	      }
	
	      targetEl.style.top = targetPosition.top + 'px';
	      targetEl.style.left = targetPosition.left + 'px';
	      targetEl.style.maxHeight = window.innerHeight + 'px';
	    };
	
	    _this.handleResize = (0, _lodash2.default)(_this.setPlacement, 100);
	    _this.handleScroll = (0, _lodash2.default)(_this.setPlacement.bind(_this, true), 50);
	
	    _this.popoverRefs = {};
	
	    _this.state = {
	      open: props.open,
	      closing: false
	    };
	    return _this;
	  }
	
	  (0, _createClass3.default)(Popover, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.placementTimeout = setTimeout(this.setPlacement);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _this2 = this;
	
	      if (nextProps.open === this.props.open) {
	        return;
	      }
	
	      if (nextProps.open) {
	        clearTimeout(this.timeout);
	        this.timeout = null;
	        this.anchorEl = nextProps.anchorEl || this.props.anchorEl;
	        this.setState({
	          open: true,
	          closing: false
	        });
	      } else {
	        if (nextProps.animated) {
	          if (this.timeout !== null) return;
	          this.setState({ closing: true });
	          this.timeout = setTimeout(function () {
	            _this2.setState({
	              open: false
	            }, function () {
	              _this2.timeout = null;
	            });
	          }, 500);
	        } else {
	          this.setState({
	            open: false
	          });
	        }
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      clearTimeout(this.placementTimeout);
	      this.placementTimeout = setTimeout(this.setPlacement);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.handleResize.cancel();
	      this.handleScroll.cancel();
	
	      if (this.placementTimeout) {
	        clearTimeout(this.placementTimeout);
	        this.placementTimeout = null;
	      }
	
	      if (this.timeout) {
	        clearTimeout(this.timeout);
	        this.timeout = null;
	      }
	    }
	  }, {
	    key: 'requestClose',
	    value: function requestClose(reason) {
	      if (this.props.onRequestClose) {
	        this.props.onRequestClose(reason);
	      }
	    }
	  }, {
	    key: 'getAnchorPosition',
	    value: function getAnchorPosition(el) {
	      if (!el) {
	        el = _reactDom2.default.findDOMNode(this);
	      }
	
	      var rect = el.getBoundingClientRect();
	      var a = {
	        top: rect.top,
	        left: rect.left,
	        width: el.offsetWidth,
	        height: el.offsetHeight
	      };
	
	      a.right = rect.right || a.left + a.width;
	      a.bottom = rect.bottom || a.top + a.height;
	      a.middle = a.left + (a.right - a.left) / 2;
	      a.center = a.top + (a.bottom - a.top) / 2;
	
	      return a;
	    }
	  }, {
	    key: 'getTargetPosition',
	    value: function getTargetPosition(targetEl) {
	      return {
	        top: 0,
	        center: targetEl.offsetHeight / 2,
	        bottom: targetEl.offsetHeight,
	        left: 0,
	        middle: targetEl.offsetWidth / 2,
	        right: targetEl.offsetWidth
	      };
	    }
	  }, {
	    key: 'autoCloseWhenOffScreen',
	    value: function autoCloseWhenOffScreen(anchorPosition) {
	      if (anchorPosition.top < 0 || anchorPosition.top > window.innerHeight || anchorPosition.left < 0 || anchorPosition.left > window.innerWidth) {
	        this.requestClose('offScreen');
	      }
	    }
	  }, {
	    key: 'getOverlapMode',
	    value: function getOverlapMode(anchor, target, median) {
	      if ([anchor, target].indexOf(median) >= 0) return 'auto';
	      if (anchor === target) return 'inclusive';
	      return 'exclusive';
	    }
	  }, {
	    key: 'getPositions',
	    value: function getPositions(anchor, target) {
	      var a = (0, _extends3.default)({}, anchor);
	      var t = (0, _extends3.default)({}, target);
	
	      var positions = {
	        x: ['left', 'right'].filter(function (p) {
	          return p !== t.horizontal;
	        }),
	        y: ['top', 'bottom'].filter(function (p) {
	          return p !== t.vertical;
	        })
	      };
	
	      var overlap = {
	        x: this.getOverlapMode(a.horizontal, t.horizontal, 'middle'),
	        y: this.getOverlapMode(a.vertical, t.vertical, 'center')
	      };
	
	      positions.x.splice(overlap.x === 'auto' ? 0 : 1, 0, 'middle');
	      positions.y.splice(overlap.y === 'auto' ? 0 : 1, 0, 'center');
	
	      if (overlap.y !== 'auto') {
	        a.vertical = a.vertical === 'top' ? 'bottom' : 'top';
	        if (overlap.y === 'inclusive') {
	          t.vertical = t.vertical;
	        }
	      }
	
	      if (overlap.x !== 'auto') {
	        a.horizontal = a.horizontal === 'left' ? 'right' : 'left';
	        if (overlap.y === 'inclusive') {
	          t.horizontal = t.horizontal;
	        }
	      }
	
	      return {
	        positions: positions,
	        anchorPos: a
	      };
	    }
	  }, {
	    key: 'applyAutoPositionIfNeeded',
	    value: function applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition) {
	      var _getPositions = this.getPositions(anchorOrigin, targetOrigin),
	          positions = _getPositions.positions,
	          anchorPos = _getPositions.anchorPos;
	
	      if (targetPosition.top < 0 || targetPosition.top + target.bottom > window.innerHeight) {
	        var newTop = anchor[anchorPos.vertical] - target[positions.y[0]];
	        if (newTop + target.bottom <= window.innerHeight) {
	          targetPosition.top = Math.max(0, newTop);
	        } else {
	          newTop = anchor[anchorPos.vertical] - target[positions.y[1]];
	          if (newTop + target.bottom <= window.innerHeight) {
	            targetPosition.top = Math.max(0, newTop);
	          }
	        }
	      }
	
	      if (targetPosition.left < 0 || targetPosition.left + target.right > window.innerWidth) {
	        var newLeft = anchor[anchorPos.horizontal] - target[positions.x[0]];
	        if (newLeft + target.right <= window.innerWidth) {
	          targetPosition.left = Math.max(0, newLeft);
	        } else {
	          newLeft = anchor[anchorPos.horizontal] - target[positions.x[1]];
	          if (newLeft + target.right <= window.innerWidth) {
	            targetPosition.left = Math.max(0, newLeft);
	          }
	        }
	      }
	
	      return targetPosition;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      return _react2.default.createElement(
	        'div',
	        { style: styles.root },
	        _react2.default.createElement(_reactEventListener2.default, {
	          target: this.props.scrollableContainer,
	          onScroll: this.handleScroll,
	          onResize: this.handleResize
	        }),
	        _react2.default.createElement(_RenderToLayer2.default, {
	          ref: function ref(_ref) {
	            return _this3.popoverRefs.layer = _ref;
	          },
	          open: this.state.open,
	          componentClickAway: this.componentClickAway,
	          useLayerForClickAway: this.props.useLayerForClickAway,
	          render: this.renderLayer
	        })
	      );
	    }
	  }]);
	  return Popover;
	}(_react.Component);
	
	Popover.defaultProps = {
	  anchorOrigin: {
	    vertical: 'bottom',
	    horizontal: 'left'
	  },
	  animated: true,
	  autoCloseWhenOffScreen: true,
	  canAutoPosition: true,
	  onRequestClose: function onRequestClose() {},
	  open: false,
	  scrollableContainer: 'window',
	  style: {
	    overflowY: 'auto'
	  },
	  targetOrigin: {
	    vertical: 'top',
	    horizontal: 'left'
	  },
	  useLayerForClickAway: true,
	  zDepth: 1
	};
	Popover.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	Popover.propTypes = process.env.NODE_ENV !== "production" ? {
	  /**
	   * This is the DOM element that will be used to set the position of the
	   * popover.
	   */
	  anchorEl: _propTypes2.default.object,
	  /**
	   * This is the point on the anchor where the popover's
	   * `targetOrigin` will attach to.
	   * Options:
	   * vertical: [top, center, bottom]
	   * horizontal: [left, middle, right].
	   */
	  anchorOrigin: _propTypes4.default.origin,
	  /**
	   * If true, the popover will apply transitions when
	   * it is added to the DOM.
	   */
	  animated: _propTypes2.default.bool,
	  /**
	   * Override the default animation component used.
	   */
	  animation: _propTypes2.default.func,
	  /**
	   * If true, the popover will hide when the anchor is scrolled off the screen.
	   */
	  autoCloseWhenOffScreen: _propTypes2.default.bool,
	  /**
	   * If true, the popover (potentially) ignores `targetOrigin`
	   * and `anchorOrigin` to make itself fit on screen,
	   * which is useful for mobile devices.
	   */
	  canAutoPosition: _propTypes2.default.bool,
	  /**
	   * The content of the popover.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * The CSS class name of the root element.
	   */
	  className: _propTypes2.default.string,
	  /**
	   * Callback function fired when the popover is requested to be closed.
	   *
	   * @param {string} reason The reason for the close request. Possibles values
	   * are 'clickAway' and 'offScreen'.
	   */
	  onRequestClose: _propTypes2.default.func,
	  /**
	   * If true, the popover is visible.
	   */
	  open: _propTypes2.default.bool,
	  /**
	   * Represents the parent scrollable container.
	   * It can be an element or a string like `window`.
	   */
	  scrollableContainer: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  /**
	   * This is the point on the popover which will attach to
	   * the anchor's origin.
	   * Options:
	   * vertical: [top, center, bottom]
	   * horizontal: [left, middle, right].
	   */
	  targetOrigin: _propTypes4.default.origin,
	  /**
	   * If true, the popover will render on top of an invisible
	   * layer, which will prevent clicks to the underlying
	   * elements, and trigger an `onRequestClose('clickAway')` call.
	   */
	  useLayerForClickAway: _propTypes2.default.bool,
	  /**
	   * The zDepth of the popover.
	   */
	  zDepth: _propTypes4.default.zDepth
	} : {};
	exports.default = Popover;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(63);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(89);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(90);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(94);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(140);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _typeof2 = __webpack_require__(95);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _keys = __webpack_require__(200);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _objectWithoutProperties2 = __webpack_require__(214);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _assign = __webpack_require__(210);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	exports.withOptions = withOptions;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _shallowEqual = __webpack_require__(229);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _warning = __webpack_require__(161);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _supports = __webpack_require__(273);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaultEventOptions = {
	  capture: false,
	  passive: false
	};
	
	function mergeDefaultEventOptions(options) {
	  return (0, _assign2.default)({}, defaultEventOptions, options);
	}
	
	function getEventListenerArgs(eventName, callback, options) {
	  var args = [eventName, callback];
	  args.push(_supports.passiveOption ? options : options.capture);
	  return args;
	}
	
	function on(target, eventName, callback, options) {
	  // eslint-disable-next-line prefer-spread
	  target.addEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
	}
	
	function off(target, eventName, callback, options) {
	  // eslint-disable-next-line prefer-spread
	  target.removeEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
	}
	
	function forEachListener(props, iteratee) {
	  var children = props.children,
	      target = props.target,
	      eventProps = (0, _objectWithoutProperties3.default)(props, ['children', 'target']);
	
	
	  (0, _keys2.default)(eventProps).forEach(function (name) {
	    if (name.substring(0, 2) !== 'on') {
	      return;
	    }
	
	    var prop = eventProps[name];
	    var type = typeof prop === 'undefined' ? 'undefined' : (0, _typeof3.default)(prop);
	    var isObject = type === 'object';
	    var isFunction = type === 'function';
	
	    if (!isObject && !isFunction) {
	      return;
	    }
	
	    var capture = name.substr(-7).toLowerCase() === 'capture';
	    var eventName = name.substring(2).toLowerCase();
	    eventName = capture ? eventName.substring(0, eventName.length - 7) : eventName;
	
	    if (isObject) {
	      iteratee(eventName, prop.handler, prop.options);
	    } else {
	      iteratee(eventName, prop, mergeDefaultEventOptions({ capture: capture }));
	    }
	  });
	}
	
	function withOptions(handler, options) {
	  process.env.NODE_ENV !== "production" ? (0, _warning2.default)(options, 'react-event-listener: should be specified options in withOptions.') : void 0;
	
	  return {
	    handler: handler,
	    options: mergeDefaultEventOptions(options)
	  };
	}
	
	var EventListener = function (_React$Component) {
	  (0, _inherits3.default)(EventListener, _React$Component);
	
	  function EventListener() {
	    (0, _classCallCheck3.default)(this, EventListener);
	    return (0, _possibleConstructorReturn3.default)(this, (EventListener.__proto__ || (0, _getPrototypeOf2.default)(EventListener)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(EventListener, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.addListeners();
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps);
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate() {
	      this.removeListeners();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.addListeners();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.removeListeners();
	    }
	  }, {
	    key: 'addListeners',
	    value: function addListeners() {
	      this.applyListeners(on);
	    }
	  }, {
	    key: 'removeListeners',
	    value: function removeListeners() {
	      this.applyListeners(off);
	    }
	  }, {
	    key: 'applyListeners',
	    value: function applyListeners(onOrOff) {
	      var target = this.props.target;
	
	
	      if (target) {
	        var element = target;
	
	        if (typeof target === 'string') {
	          element = window[target];
	        }
	
	        forEachListener(this.props, onOrOff.bind(null, element));
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children || null;
	    }
	  }]);
	  return EventListener;
	}(_react2.default.Component);
	
	EventListener.propTypes = process.env.NODE_ENV !== "production" ? {
	  /**
	   * You can provide a single child too.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * The DOM target to listen to.
	   */
	  target: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]).isRequired
	} : {};
	
	exports.default = EventListener;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.passiveOption = undefined;
	
	var _defineProperty = __webpack_require__(91);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function defineProperty(object, property, attr) {
	  return (0, _defineProperty2.default)(object, property, attr);
	}
	
	// Passive options
	// Inspired by https://github.com/Modernizr/Modernizr/blob/master/feature-detects/dom/passiveeventlisteners.js
	var passiveOption = exports.passiveOption = function () {
	  var cache = null;
	
	  return function () {
	    if (cache !== null) {
	      return cache;
	    }
	
	    var supportsPassiveOption = false;
	
	    try {
	      window.addEventListener('test', null, defineProperty({}, 'passive', {
	        get: function get() {
	          supportsPassiveOption = true;
	        }
	      }));
	    } catch (err) {
	      //
	    }
	
	    cache = supportsPassiveOption;
	
	    return supportsPassiveOption;
	  }();
	}();
	
	exports.default = {};

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(63);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(89);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(90);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(94);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(140);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(2);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(227);
	
	var _dom = __webpack_require__(241);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// heavily inspired by https://github.com/Khan/react-components/blob/master/js/layered-component-mixin.jsx
	var RenderToLayer = function (_Component) {
	  (0, _inherits3.default)(RenderToLayer, _Component);
	
	  function RenderToLayer() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, RenderToLayer);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RenderToLayer.__proto__ || (0, _getPrototypeOf2.default)(RenderToLayer)).call.apply(_ref, [this].concat(args))), _this), _this.onClickAway = function (event) {
	      if (event.defaultPrevented) {
	        return;
	      }
	
	      if (!_this.props.componentClickAway) {
	        return;
	      }
	
	      if (!_this.props.open) {
	        return;
	      }
	
	      var el = _this.layer;
	      if (event.target !== el && event.target === window || document.documentElement.contains(event.target) && !_dom2.default.isDescendant(el, event.target)) {
	        _this.props.componentClickAway(event);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(RenderToLayer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.renderLayer();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.renderLayer();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.unrenderLayer();
	    }
	  }, {
	    key: 'getLayer',
	    value: function getLayer() {
	      return this.layer;
	    }
	  }, {
	    key: 'unrenderLayer',
	    value: function unrenderLayer() {
	      if (!this.layer) {
	        return;
	      }
	
	      if (this.props.useLayerForClickAway) {
	        this.layer.style.position = 'relative';
	        this.layer.removeEventListener('click', this.onClickAway);
	      } else {
	        window.removeEventListener('click', this.onClickAway);
	      }
	
	      (0, _reactDom.unmountComponentAtNode)(this.layer);
	      document.body.removeChild(this.layer);
	      this.layer = null;
	    }
	
	    /**
	     * By calling this method in componentDidMount() and
	     * componentDidUpdate(), you're effectively creating a "wormhole" that
	     * funnels React's hierarchical updates through to a DOM node on an
	     * entirely different part of the page.
	     */
	
	  }, {
	    key: 'renderLayer',
	    value: function renderLayer() {
	      var _this2 = this;
	
	      var _props = this.props,
	          open = _props.open,
	          render = _props.render;
	
	
	      if (open) {
	        if (!this.layer) {
	          this.layer = document.createElement('div');
	          document.body.appendChild(this.layer);
	
	          if (this.props.useLayerForClickAway) {
	            this.layer.addEventListener('click', this.onClickAway);
	            this.layer.style.position = 'fixed';
	            this.layer.style.top = 0;
	            this.layer.style.bottom = 0;
	            this.layer.style.left = 0;
	            this.layer.style.right = 0;
	            this.layer.style.zIndex = this.context.muiTheme.zIndex.layer;
	          } else {
	            setTimeout(function () {
	              window.addEventListener('click', _this2.onClickAway);
	            }, 0);
	          }
	        }
	
	        var layerElement = render();
	        this.layerElement = (0, _reactDom.unstable_renderSubtreeIntoContainer)(this, layerElement, this.layer);
	      } else {
	        this.unrenderLayer();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);
	  return RenderToLayer;
	}(_react.Component);
	
	RenderToLayer.defaultProps = {
	  useLayerForClickAway: true
	};
	RenderToLayer.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	RenderToLayer.propTypes = process.env.NODE_ENV !== "production" ? {
	  componentClickAway: _propTypes2.default.func,
	  open: _propTypes2.default.bool.isRequired,
	  render: _propTypes2.default.func.isRequired,
	  useLayerForClickAway: _propTypes2.default.bool
	} : {};
	exports.default = RenderToLayer;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 275 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;
	
	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};
	
	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	
	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;
	
	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }
	
	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }
	
	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;
	
	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }
	
	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;
	
	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }
	
	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }
	
	  function trailingEdge(time) {
	    timerId = undefined;
	
	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }
	
	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }
	
	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }
	
	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);
	
	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;
	
	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}
	
	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide `options` to indicate whether `func`
	 * should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=true]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = throttle;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(63);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(89);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(90);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(94);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(140);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(215);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _transitions = __webpack_require__(217);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _propTypes3 = __webpack_require__(221);
	
	var _propTypes4 = _interopRequireDefault(_propTypes3);
	
	var _Paper = __webpack_require__(219);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context, state) {
	  var targetOrigin = props.targetOrigin;
	  var open = state.open;
	  var muiTheme = context.muiTheme;
	
	  var horizontal = targetOrigin.horizontal.replace('middle', 'vertical');
	
	  return {
	    root: {
	      position: 'fixed',
	      zIndex: muiTheme.zIndex.popover,
	      opacity: open ? 1 : 0,
	      transform: open ? 'scale(1, 1)' : 'scale(0, 0)',
	      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
	      transition: _transitions2.default.easeOut('250ms', ['transform', 'opacity']),
	      maxHeight: '100%'
	    },
	    horizontal: {
	      maxHeight: '100%',
	      overflowY: 'auto',
	      transform: open ? 'scaleX(1)' : 'scaleX(0)',
	      opacity: open ? 1 : 0,
	      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
	      transition: _transitions2.default.easeOut('250ms', ['transform', 'opacity'])
	    },
	    vertical: {
	      opacity: open ? 1 : 0,
	      transform: open ? 'scaleY(1)' : 'scaleY(0)',
	      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
	      transition: _transitions2.default.easeOut('500ms', ['transform', 'opacity'])
	    }
	  };
	}
	
	var PopoverAnimationDefault = function (_Component) {
	  (0, _inherits3.default)(PopoverAnimationDefault, _Component);
	
	  function PopoverAnimationDefault() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, PopoverAnimationDefault);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PopoverAnimationDefault.__proto__ || (0, _getPrototypeOf2.default)(PopoverAnimationDefault)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      open: false
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(PopoverAnimationDefault, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({ open: true }); // eslint-disable-line react/no-did-mount-set-state
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState({
	        open: nextProps.open
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          style = _props.style,
	          zDepth = _props.zDepth;
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	
	      return _react2.default.createElement(
	        _Paper2.default,
	        {
	          style: (0, _simpleAssign2.default)(styles.root, style),
	          zDepth: zDepth,
	          className: className
	        },
	        _react2.default.createElement(
	          'div',
	          { style: prepareStyles(styles.horizontal) },
	          _react2.default.createElement(
	            'div',
	            { style: prepareStyles(styles.vertical) },
	            this.props.children
	          )
	        )
	      );
	    }
	  }]);
	  return PopoverAnimationDefault;
	}(_react.Component);
	
	PopoverAnimationDefault.defaultProps = {
	  style: {},
	  zDepth: 1
	};
	PopoverAnimationDefault.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	PopoverAnimationDefault.propTypes = process.env.NODE_ENV !== "production" ? {
	  children: _propTypes2.default.node,
	  /**
	   * The css class name of the root element.
	   */
	  className: _propTypes2.default.string,
	  open: _propTypes2.default.bool.isRequired,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  targetOrigin: _propTypes4.default.origin.isRequired,
	  zDepth: _propTypes4.default.zDepth
	} : {};
	exports.default = PopoverAnimationDefault;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(209);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(214);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(63);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(89);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(90);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(94);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(140);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(215);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(227);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _shallowEqual = __webpack_require__(228);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _Popover = __webpack_require__(271);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _check = __webpack_require__(278);
	
	var _check2 = _interopRequireDefault(_check);
	
	var _ListItem = __webpack_require__(226);
	
	var _ListItem2 = _interopRequireDefault(_ListItem);
	
	var _Menu = __webpack_require__(268);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _propTypes3 = __webpack_require__(221);
	
	var _propTypes4 = _interopRequireDefault(_propTypes3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var nestedMenuStyle = {
	  position: 'relative'
	};
	
	function getStyles(props, context) {
	  var disabledColor = context.muiTheme.baseTheme.palette.disabledColor;
	  var textColor = context.muiTheme.baseTheme.palette.textColor;
	  var indent = props.desktop ? 64 : 72;
	  var sidePadding = props.desktop ? 24 : 16;
	
	  var styles = {
	    root: {
	      color: props.disabled ? disabledColor : textColor,
	      cursor: props.disabled ? 'default' : 'pointer',
	      minHeight: props.desktop ? '32px' : '48px',
	      lineHeight: props.desktop ? '32px' : '48px',
	      fontSize: props.desktop ? 15 : 16,
	      whiteSpace: 'nowrap'
	    },
	
	    innerDivStyle: {
	      paddingLeft: props.leftIcon || props.insetChildren || props.checked ? indent : sidePadding,
	      paddingRight: props.rightIcon ? indent : sidePadding,
	      paddingBottom: 0,
	      paddingTop: 0
	    },
	
	    secondaryText: {
	      float: 'right'
	    },
	
	    leftIconDesktop: {
	      margin: 0,
	      left: 24,
	      top: 4
	    },
	
	    rightIconDesktop: {
	      margin: 0,
	      right: 24,
	      top: 4,
	      fill: context.muiTheme.menuItem.rightIconDesktopFill
	    }
	  };
	
	  return styles;
	}
	
	var MenuItem = function (_Component) {
	  (0, _inherits3.default)(MenuItem, _Component);
	
	  function MenuItem() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, MenuItem);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MenuItem.__proto__ || (0, _getPrototypeOf2.default)(MenuItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      open: false
	    }, _this.cloneMenuItem = function (item) {
	      return _react2.default.cloneElement(item, {
	        onClick: function onClick(event) {
	          if (!item.props.menuItems) {
	            _this.handleRequestClose();
	          }
	
	          if (item.props.onClick) {
	            item.props.onClick(event);
	          }
	        }
	      });
	    }, _this.handleClick = function (event) {
	      event.preventDefault();
	
	      _this.setState({
	        open: true,
	        anchorEl: _reactDom2.default.findDOMNode(_this)
	      });
	
	      if (_this.props.onClick) {
	        _this.props.onClick(event);
	      }
	    }, _this.handleRequestClose = function () {
	      _this.setState({
	        open: false,
	        anchorEl: null
	      });
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(MenuItem, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.applyFocusState();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.state.open && nextProps.focusState === 'none') {
	        this.handleRequestClose();
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.applyFocusState();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.state.open) {
	        this.setState({
	          open: false
	        });
	      }
	    }
	  }, {
	    key: 'applyFocusState',
	    value: function applyFocusState() {
	      this.refs.listItem.applyFocusState(this.props.focusState);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          checked = _props.checked,
	          children = _props.children,
	          desktop = _props.desktop,
	          disabled = _props.disabled,
	          focusState = _props.focusState,
	          innerDivStyle = _props.innerDivStyle,
	          insetChildren = _props.insetChildren,
	          leftIcon = _props.leftIcon,
	          menuItems = _props.menuItems,
	          rightIcon = _props.rightIcon,
	          secondaryText = _props.secondaryText,
	          style = _props.style,
	          animation = _props.animation,
	          anchorOrigin = _props.anchorOrigin,
	          targetOrigin = _props.targetOrigin,
	          value = _props.value,
	          other = (0, _objectWithoutProperties3.default)(_props, ['checked', 'children', 'desktop', 'disabled', 'focusState', 'innerDivStyle', 'insetChildren', 'leftIcon', 'menuItems', 'rightIcon', 'secondaryText', 'style', 'animation', 'anchorOrigin', 'targetOrigin', 'value']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	      var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style);
	      var mergedInnerDivStyles = (0, _simpleAssign2.default)(styles.innerDivStyle, innerDivStyle);
	
	      // Left Icon
	      var leftIconElement = leftIcon ? leftIcon : checked ? _react2.default.createElement(_check2.default, null) : null;
	      if (leftIconElement) {
	        var mergedLeftIconStyles = desktop ? (0, _simpleAssign2.default)(styles.leftIconDesktop, leftIconElement.props.style) : leftIconElement.props.style;
	        leftIconElement = _react2.default.cloneElement(leftIconElement, { style: mergedLeftIconStyles });
	      }
	
	      // Right Icon
	      var rightIconElement = void 0;
	      if (rightIcon) {
	        var mergedRightIconStyles = desktop ? (0, _simpleAssign2.default)(styles.rightIconDesktop, rightIcon.props.style) : rightIcon.props.style;
	        rightIconElement = _react2.default.cloneElement(rightIcon, { style: mergedRightIconStyles });
	      }
	
	      // Secondary Text
	      var secondaryTextElement = void 0;
	      if (secondaryText) {
	        var secondaryTextIsAnElement = _react2.default.isValidElement(secondaryText);
	        var mergedSecondaryTextStyles = secondaryTextIsAnElement ? (0, _simpleAssign2.default)(styles.secondaryText, secondaryText.props.style) : null;
	
	        secondaryTextElement = secondaryTextIsAnElement ? _react2.default.cloneElement(secondaryText, { style: mergedSecondaryTextStyles }) : _react2.default.createElement(
	          'div',
	          { style: prepareStyles(styles.secondaryText) },
	          secondaryText
	        );
	      }
	      var childMenuPopover = void 0;
	      if (menuItems) {
	        childMenuPopover = _react2.default.createElement(
	          _Popover2.default,
	          {
	            animation: animation,
	            anchorOrigin: anchorOrigin,
	            anchorEl: this.state.anchorEl,
	            open: this.state.open,
	            targetOrigin: targetOrigin,
	            useLayerForClickAway: false,
	            onRequestClose: this.handleRequestClose
	          },
	          _react2.default.createElement(
	            _Menu2.default,
	            { desktop: desktop, disabled: disabled, style: nestedMenuStyle },
	            _react2.default.Children.map(menuItems, this.cloneMenuItem)
	          )
	        );
	        other.onClick = this.handleClick;
	      }
	
	      return _react2.default.createElement(
	        _ListItem2.default,
	        (0, _extends3.default)({}, other, {
	          disabled: disabled,
	          hoverColor: this.context.muiTheme.menuItem.hoverColor,
	          innerDivStyle: mergedInnerDivStyles,
	          insetChildren: insetChildren,
	          leftIcon: leftIconElement,
	          ref: 'listItem',
	          rightIcon: rightIconElement,
	          role: 'menuitem',
	          style: mergedRootStyles
	        }),
	        children,
	        secondaryTextElement,
	        childMenuPopover
	      );
	    }
	  }]);
	  return MenuItem;
	}(_react.Component);
	
	MenuItem.muiName = 'MenuItem';
	MenuItem.defaultProps = {
	  anchorOrigin: { horizontal: 'right', vertical: 'top' },
	  checked: false,
	  desktop: false,
	  disabled: false,
	  focusState: 'none',
	  insetChildren: false,
	  targetOrigin: { horizontal: 'left', vertical: 'top' }
	};
	MenuItem.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	MenuItem.propTypes = process.env.NODE_ENV !== "production" ? {
	  /**
	   * Location of the anchor for the popover of nested `MenuItem`
	   * elements.
	   * Options:
	   * horizontal: [left, middle, right]
	   * vertical: [top, center, bottom].
	   */
	  anchorOrigin: _propTypes4.default.origin,
	  /**
	   * Override the default animation component used.
	   */
	  animation: _propTypes2.default.func,
	  /**
	   * If true, a left check mark will be rendered.
	   */
	  checked: _propTypes2.default.bool,
	  /**
	   * Elements passed as children to the underlying `ListItem`.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * @ignore
	   * If true, the menu item will render with compact desktop
	   * styles.
	   */
	  desktop: _propTypes2.default.bool,
	  /**
	   * If true, the menu item will be disabled.
	   */
	  disabled: _propTypes2.default.bool,
	  /**
	   * The focus state of the menu item. This prop is used to set the focus
	   * state of the underlying `ListItem`.
	   */
	  focusState: _propTypes2.default.oneOf(['none', 'focused', 'keyboard-focused']),
	  /**
	   * Override the inline-styles of the inner div.
	   */
	  innerDivStyle: _propTypes2.default.object,
	  /**
	   * If true, the children will be indented.
	   * This is only needed when there is no `leftIcon`.
	   */
	  insetChildren: _propTypes2.default.bool,
	  /**
	   * The `SvgIcon` or `FontIcon` to be displayed on the left side.
	   */
	  leftIcon: _propTypes2.default.element,
	  /**
	   * `MenuItem` elements to nest within the menu item.
	   */
	  menuItems: _propTypes2.default.node,
	  /**
	   * Callback function fired when the menu item is clicked.
	   *
	   * @param {object} event Click event targeting the menu item.
	   */
	  onClick: _propTypes2.default.func,
	  /**
	   * Can be used to render primary text within the menu item.
	   */
	  primaryText: _propTypes2.default.node,
	  /**
	   * The `SvgIcon` or `FontIcon` to be displayed on the right side.
	   */
	  rightIcon: _propTypes2.default.element,
	  /**
	   * Can be used to render secondary text within the menu item.
	   */
	  secondaryText: _propTypes2.default.node,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  /**
	   * Location on the popover of nested `MenuItem` elements that will attach
	   * to the anchor's origin.
	   * Options:
	   * horizontal: [left, middle, right]
	   * vertical: [top, center, bottom].
	   */
	  targetOrigin: _propTypes4.default.origin,
	  /**
	   * The value of the menu item.
	   */
	  value: _propTypes2.default.any
	} : {};
	exports.default = MenuItem;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(250);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(256);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavigationCheck = function NavigationCheck(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' })
	  );
	};
	NavigationCheck = (0, _pure2.default)(NavigationCheck);
	NavigationCheck.displayName = 'NavigationCheck';
	NavigationCheck.muiName = 'SvgIcon';
	
	exports.default = NavigationCheck;

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _MenuItem = __webpack_require__(277);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _MenuItem2.default;

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _materialUiList = __webpack_require__(222);
	
	var _materialUiDivider = __webpack_require__(261);
	
	var _materialUiDivider2 = _interopRequireDefault(_materialUiDivider);
	
	var _materialUiAvatar = __webpack_require__(263);
	
	var _materialUiAvatar2 = _interopRequireDefault(_materialUiAvatar);
	
	var _materialUiStylesColors = __webpack_require__(163);
	
	var PostListItem = function PostListItem(_ref) {
	  var post = _ref.post;
	
	  var imageUrl = 'https:' + post.author.image.url;
	
	  var cleanBlogContent = post.content.replace(/(?:&nbsp;|<.+?>)/g, '');
	
	  return _react2['default'].createElement(
	    'div',
	    null,
	    _react2['default'].createElement(_materialUiList.ListItem, {
	      leftAvatar: _react2['default'].createElement(_materialUiAvatar2['default'], { src: imageUrl }),
	      primaryText: post.title,
	      secondaryText: _react2['default'].createElement(
	        'p',
	        null,
	        _react2['default'].createElement(
	          'span',
	          { style: { color: _materialUiStylesColors.darkBlack } },
	          post.author.displayName
	        ),
	        ' --',
	        ' ',
	        cleanBlogContent
	      ),
	      secondaryTextLines: 2
	    }),
	    _react2['default'].createElement(_materialUiDivider2['default'], { inset: true })
	  );
	};
	
	exports['default'] = PostListItem;
	module.exports = exports['default'];

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _materialUiRaisedButton = __webpack_require__(282);
	
	var _materialUiRaisedButton2 = _interopRequireDefault(_materialUiRaisedButton);
	
	var styleLeft = {
	  margin: 'auto',
	  float: 'left'
	};
	
	var styleRight = {
	  margin: 'auto',
	  float: 'right'
	};
	
	var styleMiddle = {
	  margin: 'auto'
	};
	
	var divStyle = {
	  textAlign: 'center'
	};
	
	var MenuBar = (function (_Component) {
	  _inherits(MenuBar, _Component);
	
	  function MenuBar() {
	    _classCallCheck(this, MenuBar);
	
	    _get(Object.getPrototypeOf(MenuBar.prototype), 'constructor', this).call(this);
	    this.state = { triggered: false };
	  }
	
	  _createClass(MenuBar, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var fetchNextPagePosts = _props.fetchNextPagePosts;
	      var fetchPrevPagePosts = _props.fetchPrevPagePosts;
	      var nextPagetoken = _props.nextPagetoken;
	      var prevPageToken = _props.prevPageToken;
	      var currentPage = _props.currentPage;
	      var loading = _props.loading;
	
	      return _react2['default'].createElement(
	        'div',
	        { style: divStyle },
	        _react2['default'].createElement(_materialUiRaisedButton2['default'], {
	          onClick: function () {
	            fetchPrevPagePosts({
	              blogId: '5735193246666010261',
	              apiKey: 'AIzaSyCYqHncqz05FOCxtWPlgWVMjdMtebTXDCs',
	              token: prevPageToken[currentPage - 1]
	            });
	          },
	          label: 'Previous',
	          style: styleLeft,
	          disabled: prevPageToken.length <= 1 || currentPage <= 0 || loading
	        }),
	        _react2['default'].createElement(_materialUiRaisedButton2['default'], { label: 'Next', style: styleMiddle }),
	        _react2['default'].createElement(_materialUiRaisedButton2['default'], {
	          onClick: function () {
	            fetchNextPagePosts({
	              blogId: '5735193246666010261',
	              apiKey: 'AIzaSyCYqHncqz05FOCxtWPlgWVMjdMtebTXDCs',
	              token: nextPagetoken
	            });
	          },
	          label: 'Next',
	          style: styleRight,
	          disabled: !nextPagetoken && currentPage >= prevPageToken.length - 1 || loading
	        })
	      );
	    }
	  }]);
	
	  return MenuBar;
	})(_react.Component);
	
	exports['default'] = MenuBar;
	module.exports = exports['default'];

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _RaisedButton = __webpack_require__(283);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _RaisedButton2.default;

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(209);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(214);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(63);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(89);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(90);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(94);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(140);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(215);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _transitions = __webpack_require__(217);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _colorManipulator = __webpack_require__(160);
	
	var _EnhancedButton = __webpack_require__(230);
	
	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);
	
	var _Paper = __webpack_require__(219);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validateLabel(props, propName, componentName) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (!props.children && props.label !== 0 && !props.label && !props.icon) {
	      return new Error('Required prop label or children or icon was not specified in ' + componentName + '.');
	    }
	  }
	}
	
	function getStyles(props, context, state) {
	  var _context$muiTheme = context.muiTheme,
	      baseTheme = _context$muiTheme.baseTheme,
	      button = _context$muiTheme.button,
	      raisedButton = _context$muiTheme.raisedButton,
	      borderRadius = _context$muiTheme.borderRadius;
	  var disabled = props.disabled,
	      disabledBackgroundColor = props.disabledBackgroundColor,
	      disabledLabelColor = props.disabledLabelColor,
	      fullWidth = props.fullWidth,
	      icon = props.icon,
	      label = props.label,
	      labelPosition = props.labelPosition,
	      primary = props.primary,
	      secondary = props.secondary,
	      style = props.style;
	
	
	  var amount = primary || secondary ? 0.4 : 0.08;
	
	  var backgroundColor = raisedButton.color;
	  var labelColor = raisedButton.textColor;
	
	  if (disabled) {
	    backgroundColor = disabledBackgroundColor || raisedButton.disabledColor;
	    labelColor = disabledLabelColor || raisedButton.disabledTextColor;
	  } else if (primary) {
	    backgroundColor = raisedButton.primaryColor;
	    labelColor = raisedButton.primaryTextColor;
	  } else if (secondary) {
	    backgroundColor = raisedButton.secondaryColor;
	    labelColor = raisedButton.secondaryTextColor;
	  } else {
	    if (props.backgroundColor) {
	      backgroundColor = props.backgroundColor;
	    }
	    if (props.labelColor) {
	      labelColor = props.labelColor;
	    }
	  }
	
	  var buttonHeight = style && style.height || button.height;
	
	  return {
	    root: {
	      display: 'inline-block',
	      transition: _transitions2.default.easeOut(),
	      minWidth: fullWidth ? '100%' : button.minWidth
	    },
	    button: {
	      height: buttonHeight,
	      lineHeight: buttonHeight + 'px',
	      width: '100%',
	      padding: 0,
	      borderRadius: borderRadius,
	      transition: _transitions2.default.easeOut(),
	      backgroundColor: backgroundColor,
	      // That's the default value for a button but not a link
	      textAlign: 'center'
	    },
	    label: {
	      position: 'relative',
	      opacity: 1,
	      fontSize: raisedButton.fontSize,
	      letterSpacing: 0,
	      textTransform: raisedButton.textTransform || button.textTransform || 'uppercase',
	      fontWeight: raisedButton.fontWeight,
	      margin: 0,
	      userSelect: 'none',
	      paddingLeft: icon && labelPosition !== 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
	      paddingRight: icon && labelPosition === 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
	      color: labelColor
	    },
	    icon: {
	      verticalAlign: 'middle',
	      marginLeft: label && labelPosition !== 'before' ? 12 : 0,
	      marginRight: label && labelPosition === 'before' ? 12 : 0
	    },
	    overlay: {
	      height: buttonHeight,
	      borderRadius: borderRadius,
	      backgroundColor: (state.keyboardFocused || state.hovered) && !disabled && (0, _colorManipulator.fade)(labelColor, amount),
	      transition: _transitions2.default.easeOut(),
	      top: 0
	    },
	    ripple: {
	      color: labelColor,
	      opacity: !(primary || secondary) ? 0.1 : 0.16
	    }
	  };
	}
	
	var RaisedButton = function (_Component) {
	  (0, _inherits3.default)(RaisedButton, _Component);
	
	  function RaisedButton() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, RaisedButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RaisedButton.__proto__ || (0, _getPrototypeOf2.default)(RaisedButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false,
	      keyboardFocused: false,
	      touched: false,
	      initialZDepth: 0,
	      zDepth: 0
	    }, _this.handleMouseDown = function (event) {
	      // only listen to left clicks
	      if (event.button === 0) {
	        _this.setState({
	          zDepth: _this.state.initialZDepth + 1
	        });
	      }
	      if (_this.props.onMouseDown) {
	        _this.props.onMouseDown(event);
	      }
	    }, _this.handleMouseUp = function (event) {
	      _this.setState({
	        zDepth: _this.state.initialZDepth
	      });
	      if (_this.props.onMouseUp) {
	        _this.props.onMouseUp(event);
	      }
	    }, _this.handleMouseLeave = function (event) {
	      if (!_this.state.keyboardFocused) {
	        _this.setState({
	          zDepth: _this.state.initialZDepth,
	          hovered: false
	        });
	      }
	      if (_this.props.onMouseLeave) {
	        _this.props.onMouseLeave(event);
	      }
	    }, _this.handleMouseEnter = function (event) {
	      if (!_this.state.keyboardFocused && !_this.state.touched) {
	        _this.setState({
	          hovered: true
	        });
	      }
	      if (_this.props.onMouseEnter) {
	        _this.props.onMouseEnter(event);
	      }
	    }, _this.handleTouchStart = function (event) {
	      _this.setState({
	        touched: true,
	        zDepth: _this.state.initialZDepth + 1
	      });
	
	      if (_this.props.onTouchStart) {
	        _this.props.onTouchStart(event);
	      }
	    }, _this.handleTouchEnd = function (event) {
	      _this.setState({
	        touched: true,
	        zDepth: _this.state.initialZDepth
	      });
	
	      if (_this.props.onTouchEnd) {
	        _this.props.onTouchEnd(event);
	      }
	    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
	      var zDepth = keyboardFocused && !_this.props.disabled ? _this.state.initialZDepth + 1 : _this.state.initialZDepth;
	
	      _this.setState({
	        zDepth: zDepth,
	        keyboardFocused: keyboardFocused
	      });
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(RaisedButton, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var zDepth = this.props.disabled ? 0 : 1;
	      this.setState({
	        zDepth: zDepth,
	        initialZDepth: zDepth
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var zDepth = nextProps.disabled ? 0 : 1;
	      var nextState = {
	        zDepth: zDepth,
	        initialZDepth: zDepth
	      };
	
	      if (nextProps.disabled) {
	        nextState.hovered = false;
	      }
	
	      this.setState(nextState);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          backgroundColor = _props.backgroundColor,
	          buttonStyle = _props.buttonStyle,
	          children = _props.children,
	          className = _props.className,
	          disabled = _props.disabled,
	          disabledBackgroundColor = _props.disabledBackgroundColor,
	          disabledLabelColor = _props.disabledLabelColor,
	          fullWidth = _props.fullWidth,
	          icon = _props.icon,
	          label = _props.label,
	          labelColor = _props.labelColor,
	          labelPosition = _props.labelPosition,
	          labelStyle = _props.labelStyle,
	          overlayStyle = _props.overlayStyle,
	          primary = _props.primary,
	          rippleStyle = _props.rippleStyle,
	          secondary = _props.secondary,
	          style = _props.style,
	          other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'buttonStyle', 'children', 'className', 'disabled', 'disabledBackgroundColor', 'disabledLabelColor', 'fullWidth', 'icon', 'label', 'labelColor', 'labelPosition', 'labelStyle', 'overlayStyle', 'primary', 'rippleStyle', 'secondary', 'style']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	      var mergedRippleStyles = (0, _simpleAssign2.default)({}, styles.ripple, rippleStyle);
	
	      var buttonEventHandlers = disabled ? {} : {
	        onMouseDown: this.handleMouseDown,
	        onMouseUp: this.handleMouseUp,
	        onMouseLeave: this.handleMouseLeave,
	        onMouseEnter: this.handleMouseEnter,
	        onTouchStart: this.handleTouchStart,
	        onTouchEnd: this.handleTouchEnd,
	        onKeyboardFocus: this.handleKeyboardFocus
	      };
	
	      var labelElement = label && _react2.default.createElement(
	        'span',
	        { style: prepareStyles((0, _simpleAssign2.default)(styles.label, labelStyle)), key: 'labelElement' },
	        label
	      );
	
	      var iconCloned = icon && (0, _react.cloneElement)(icon, {
	        color: icon.props.color || styles.label.color,
	        style: (0, _simpleAssign2.default)(styles.icon, icon.props.style),
	        key: 'iconCloned'
	      });
	
	      // Place label before or after children.
	      var enhancedButtonChildren = labelPosition === 'before' ? [labelElement, iconCloned, children] : [children, iconCloned, labelElement];
	
	      return _react2.default.createElement(
	        _Paper2.default,
	        {
	          className: className,
	          style: (0, _simpleAssign2.default)(styles.root, style),
	          zDepth: this.state.zDepth
	        },
	        _react2.default.createElement(
	          _EnhancedButton2.default,
	          (0, _extends3.default)({}, other, buttonEventHandlers, {
	            ref: 'container',
	            disabled: disabled,
	            style: (0, _simpleAssign2.default)(styles.button, buttonStyle),
	            focusRippleColor: mergedRippleStyles.color,
	            touchRippleColor: mergedRippleStyles.color,
	            focusRippleOpacity: mergedRippleStyles.opacity,
	            touchRippleOpacity: mergedRippleStyles.opacity
	          }),
	          _react2.default.createElement(
	            'div',
	            {
	              ref: 'overlay',
	              style: prepareStyles((0, _simpleAssign2.default)(styles.overlay, overlayStyle))
	            },
	            enhancedButtonChildren
	          )
	        )
	      );
	    }
	  }]);
	  return RaisedButton;
	}(_react.Component);
	
	RaisedButton.muiName = 'RaisedButton';
	RaisedButton.defaultProps = {
	  disabled: false,
	  labelPosition: 'after',
	  fullWidth: false,
	  primary: false,
	  secondary: false
	};
	RaisedButton.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	RaisedButton.propTypes = process.env.NODE_ENV !== "production" ? {
	  /**
	   * Override the default background color for the button,
	   * but not the default disabled background color
	   * (use `disabledBackgroundColor` for this).
	   */
	  backgroundColor: _propTypes2.default.string,
	  /**
	   * Override the inline-styles of the button element.
	   */
	  buttonStyle: _propTypes2.default.object,
	  /**
	   * The content of the button.
	   * If a label is provided via the `label` prop, the text within the label
	   * will be displayed in addition to the content provided here.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * The CSS class name of the root element.
	   */
	  className: _propTypes2.default.string,
	  /**
	    * The element to use as the container for the RaisedButton. Either a string to
	    * use a DOM element or a ReactElement. This is useful for wrapping the
	    * RaisedButton in a custom Link component. If a ReactElement is given, ensure
	    * that it passes all of its given props through to the underlying DOM
	    * element and renders its children prop for proper integration.
	    */
	  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
	  /**
	   * If true, the element's ripple effect will be disabled.
	   */
	  disableTouchRipple: _propTypes2.default.bool,
	  /**
	   * If true, the button will be disabled.
	   */
	  disabled: _propTypes2.default.bool,
	  /**
	   * Override the default background color for the button
	   * when it is disabled.
	   */
	  disabledBackgroundColor: _propTypes2.default.string,
	  /**
	   * The color of the button's label when the button is disabled.
	   */
	  disabledLabelColor: _propTypes2.default.string,
	  /**
	   * If true, the button will take up the full width of its container.
	   */
	  fullWidth: _propTypes2.default.bool,
	  /**
	   * The URL to link to when the button is clicked.
	   */
	  href: _propTypes2.default.string,
	  /**
	   * An icon to be displayed within the button.
	   */
	  icon: _propTypes2.default.node,
	  /**
	   * The label to be displayed within the button.
	   * If content is provided via the `children` prop, that content will be
	   * displayed in addition to the label provided here.
	   */
	  label: validateLabel,
	  /**
	   * The color of the button's label.
	   */
	  labelColor: _propTypes2.default.string,
	  /**
	   * The position of the button's label relative to the button's `children`.
	   */
	  labelPosition: _propTypes2.default.oneOf(['before', 'after']),
	  /**
	   * Override the inline-styles of the button's label element.
	   */
	  labelStyle: _propTypes2.default.object,
	  /**
	   * Callback function fired when the button is clicked.
	   *
	   * @param {object} event Click event targeting the button.
	   */
	  onClick: _propTypes2.default.func,
	  /** @ignore */
	  onMouseDown: _propTypes2.default.func,
	  /** @ignore */
	  onMouseEnter: _propTypes2.default.func,
	  /** @ignore */
	  onMouseLeave: _propTypes2.default.func,
	  /** @ignore */
	  onMouseUp: _propTypes2.default.func,
	  /** @ignore */
	  onTouchEnd: _propTypes2.default.func,
	  /** @ignore */
	  onTouchStart: _propTypes2.default.func,
	  /**
	   * Override the inline style of the button overlay.
	   */
	  overlayStyle: _propTypes2.default.object,
	  /**
	   * If true, the button will use the theme's primary color.
	   */
	  primary: _propTypes2.default.bool,
	  /**
	   * Override the inline style of the ripple element.
	   */
	  rippleStyle: _propTypes2.default.object,
	  /**
	   * If true, the button will use the theme's secondary color.
	   * If both `secondary` and `primary` are true, the button will use
	   * the theme's primary color.
	   */
	  secondary: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object
	} : {};
	exports.default = RaisedButton;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	var _BlogActionsJs = __webpack_require__(285);
	
	_defaults(exports, _interopExportWildcard(_BlogActionsJs, _defaults));
	
	var _PostsActionsJs = __webpack_require__(313);
	
	_defaults(exports, _interopExportWildcard(_PostsActionsJs, _defaults));

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _axios = __webpack_require__(286);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _types = __webpack_require__(312);
	
	var fetchBlogSummary = function fetchBlogSummary(_ref) {
	  var blogId = _ref.blogId;
	  var apiKey = _ref.apiKey;
	
	  var apiEngPoint = 'https://www.googleapis.com/blogger/v3/blogs/' + blogId + '?key=' + apiKey;
	  return function (dispatch) {
	    _axios2['default'].get(apiEngPoint).then(function (response) {
	      dispatch({
	        type: _types.BLOG_FETCH_SUCCESS,
	        payload: response.data
	      });
	    });
	  };
	};
	exports.fetchBlogSummary = fetchBlogSummary;

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(287);

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(288);
	var bind = __webpack_require__(289);
	var Axios = __webpack_require__(291);
	var defaults = __webpack_require__(292);
	
	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);
	
	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios.prototype, context);
	
	  // Copy context to instance
	  utils.extend(instance, context);
	
	  return instance;
	}
	
	// Create the default instance to be exported
	var axios = createInstance(defaults);
	
	// Expose Axios class to allow class inheritance
	axios.Axios = Axios;
	
	// Factory for creating new instances
	axios.create = function create(instanceConfig) {
	  return createInstance(utils.merge(defaults, instanceConfig));
	};
	
	// Expose Cancel & CancelToken
	axios.Cancel = __webpack_require__(309);
	axios.CancelToken = __webpack_require__(310);
	axios.isCancel = __webpack_require__(306);
	
	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(311);
	
	module.exports = axios;
	
	// Allow use of default import syntax in TypeScript
	module.exports.default = axios;


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var bind = __webpack_require__(289);
	var isBuffer = __webpack_require__(290);
	
	/*global toString:true*/
	
	// utils is a library of generic helper functions non-specific to axios
	
	var toString = Object.prototype.toString;
	
	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}
	
	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}
	
	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}
	
	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}
	
	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}
	
	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}
	
	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}
	
	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}
	
	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}
	
	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}
	
	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}
	
	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}
	
	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}
	
	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}
	
	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}
	
	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  navigator.product -> 'ReactNative'
	 */
	function isStandardBrowserEnv() {
	  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
	    return false;
	  }
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined'
	  );
	}
	
	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }
	
	  // Force an array if not already something iterable
	  if (typeof obj !== 'object') {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }
	
	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}
	
	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }
	
	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}
	
	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}
	
	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isBuffer: isBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim
	};


/***/ }),
/* 289 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};


/***/ }),
/* 290 */
/***/ (function(module, exports) {

	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <https://feross.org>
	 * @license  MIT
	 */
	
	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	module.exports = function (obj) {
	  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
	}
	
	function isBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}
	
	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
	}


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var defaults = __webpack_require__(292);
	var utils = __webpack_require__(288);
	var InterceptorManager = __webpack_require__(303);
	var dispatchRequest = __webpack_require__(304);
	
	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 */
	function Axios(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}
	
	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }
	
	  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
	  config.method = config.method.toLowerCase();
	
	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);
	
	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }
	
	  return promise;
	};
	
	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});
	
	module.exports = Axios;


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var utils = __webpack_require__(288);
	var normalizeHeaderName = __webpack_require__(293);
	
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};
	
	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}
	
	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = __webpack_require__(294);
	  } else if (typeof process !== 'undefined') {
	    // For node use HTTP adapter
	    adapter = __webpack_require__(294);
	  }
	  return adapter;
	}
	
	var defaults = {
	  adapter: getDefaultAdapter(),
	
	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) ||
	      utils.isArrayBuffer(data) ||
	      utils.isBuffer(data) ||
	      utils.isStream(data) ||
	      utils.isFile(data) ||
	      utils.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],
	
	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],
	
	  timeout: 0,
	
	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',
	
	  maxContentLength: -1,
	
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};
	
	defaults.headers = {
	  common: {
	    'Accept': 'application/json, text/plain, */*'
	  }
	};
	
	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  defaults.headers[method] = {};
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
	});
	
	module.exports = defaults;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(288);
	
	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var utils = __webpack_require__(288);
	var settle = __webpack_require__(295);
	var buildURL = __webpack_require__(298);
	var parseHeaders = __webpack_require__(299);
	var isURLSameOrigin = __webpack_require__(300);
	var createError = __webpack_require__(296);
	var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(301);
	
	module.exports = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;
	
	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }
	
	    var request = new XMLHttpRequest();
	    var loadEvent = 'onreadystatechange';
	    var xDomain = false;
	
	    // For IE 8/9 CORS support
	    // Only supports POST and GET calls and doesn't returns the response headers.
	    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
	    if (process.env.NODE_ENV !== 'test' &&
	        typeof window !== 'undefined' &&
	        window.XDomainRequest && !('withCredentials' in request) &&
	        !isURLSameOrigin(config.url)) {
	      request = new window.XDomainRequest();
	      loadEvent = 'onload';
	      xDomain = true;
	      request.onprogress = function handleProgress() {};
	      request.ontimeout = function handleTimeout() {};
	    }
	
	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }
	
	    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
	
	    // Set the request timeout in MS
	    request.timeout = config.timeout;
	
	    // Listen for ready state
	    request[loadEvent] = function handleLoad() {
	      if (!request || (request.readyState !== 4 && !xDomain)) {
	        return;
	      }
	
	      // The request errored out and we didn't get a response, this will be
	      // handled by onerror instead
	      // With one exception: request that using file: protocol, most browsers
	      // will return status as 0 even though it's a successful request
	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	        return;
	      }
	
	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
	        status: request.status === 1223 ? 204 : request.status,
	        statusText: request.status === 1223 ? 'No Content' : request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };
	
	      settle(resolve, reject, response);
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError('Network Error', config, null, request));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
	        request));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      var cookies = __webpack_require__(302);
	
	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
	          cookies.read(config.xsrfCookieName) :
	          undefined;
	
	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }
	
	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }
	
	    // Add withCredentials to request if needed
	    if (config.withCredentials) {
	      request.withCredentials = true;
	    }
	
	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
	        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
	        if (config.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }
	
	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }
	
	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }
	
	    if (config.cancelToken) {
	      // Handle cancellation
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        if (!request) {
	          return;
	        }
	
	        request.abort();
	        reject(cancel);
	        // Clean up request
	        request = null;
	      });
	    }
	
	    if (requestData === undefined) {
	      requestData = null;
	    }
	
	    // Send the request
	    request.send(requestData);
	  });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var createError = __webpack_require__(296);
	
	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	module.exports = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  // Note: status is not exposed by XDomainRequest
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError(
	      'Request failed with status code ' + response.status,
	      response.config,
	      null,
	      response.request,
	      response
	    ));
	  }
	};


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var enhanceError = __webpack_require__(297);
	
	/**
	 * Create an Error with the specified message, config, error code, request and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	module.exports = function createError(message, config, code, request, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, request, response);
	};


/***/ }),
/* 297 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */
	module.exports = function enhanceError(error, config, code, request, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	  error.request = request;
	  error.response = response;
	  return error;
	};


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(288);
	
	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}
	
	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }
	
	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];
	
	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }
	
	      if (utils.isArray(val)) {
	        key = key + '[]';
	      }
	
	      if (!utils.isArray(val)) {
	        val = [val];
	      }
	
	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });
	
	    serializedParams = parts.join('&');
	  }
	
	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }
	
	  return url;
	};


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(288);
	
	// Headers whose duplicates are ignored by node
	// c.f. https://nodejs.org/api/http.html#http_message_headers
	var ignoreDuplicateOf = [
	  'age', 'authorization', 'content-length', 'content-type', 'etag',
	  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
	  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
	  'referer', 'retry-after', 'user-agent'
	];
	
	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;
	
	  if (!headers) { return parsed; }
	
	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));
	
	    if (key) {
	      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
	        return;
	      }
	      if (key === 'set-cookie') {
	        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
	      } else {
	        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	      }
	    }
	  });
	
	  return parsed;
	};


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(288);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	  (function standardBrowserEnv() {
	    var msie = /(msie|trident)/i.test(navigator.userAgent);
	    var urlParsingNode = document.createElement('a');
	    var originURL;
	
	    /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	    function resolveURL(url) {
	      var href = url;
	
	      if (msie) {
	        // IE needs attribute set twice to normalize properties
	        urlParsingNode.setAttribute('href', href);
	        href = urlParsingNode.href;
	      }
	
	      urlParsingNode.setAttribute('href', href);
	
	      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	      return {
	        href: urlParsingNode.href,
	        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	        host: urlParsingNode.host,
	        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	        hostname: urlParsingNode.hostname,
	        port: urlParsingNode.port,
	        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	                  urlParsingNode.pathname :
	                  '/' + urlParsingNode.pathname
	      };
	    }
	
	    originURL = resolveURL(window.location.href);
	
	    /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	    return function isURLSameOrigin(requestURL) {
	      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	      return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	    };
	  })() :
	
	  // Non standard browser envs (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return function isURLSameOrigin() {
	      return true;
	    };
	  })()
	);


/***/ }),
/* 301 */
/***/ (function(module, exports) {

	'use strict';
	
	// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js
	
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	
	function E() {
	  this.message = 'String contains an invalid character';
	}
	E.prototype = new Error;
	E.prototype.code = 5;
	E.prototype.name = 'InvalidCharacterError';
	
	function btoa(input) {
	  var str = String(input);
	  var output = '';
	  for (
	    // initialize result and counter
	    var block, charCode, idx = 0, map = chars;
	    // if the next str index does not exist:
	    //   change the mapping table to "="
	    //   check if d has no fractional digits
	    str.charAt(idx | 0) || (map = '=', idx % 1);
	    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
	  ) {
	    charCode = str.charCodeAt(idx += 3 / 4);
	    if (charCode > 0xFF) {
	      throw new E();
	    }
	    block = block << 8 | charCode;
	  }
	  return output;
	}
	
	module.exports = btoa;


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(288);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs support document.cookie
	  (function standardBrowserEnv() {
	    return {
	      write: function write(name, value, expires, path, domain, secure) {
	        var cookie = [];
	        cookie.push(name + '=' + encodeURIComponent(value));
	
	        if (utils.isNumber(expires)) {
	          cookie.push('expires=' + new Date(expires).toGMTString());
	        }
	
	        if (utils.isString(path)) {
	          cookie.push('path=' + path);
	        }
	
	        if (utils.isString(domain)) {
	          cookie.push('domain=' + domain);
	        }
	
	        if (secure === true) {
	          cookie.push('secure');
	        }
	
	        document.cookie = cookie.join('; ');
	      },
	
	      read: function read(name) {
	        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	        return (match ? decodeURIComponent(match[3]) : null);
	      },
	
	      remove: function remove(name) {
	        this.write(name, '', Date.now() - 86400000);
	      }
	    };
	  })() :
	
	  // Non standard browser env (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return {
	      write: function write() {},
	      read: function read() { return null; },
	      remove: function remove() {}
	    };
	  })()
	);


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(288);
	
	function InterceptorManager() {
	  this.handlers = [];
	}
	
	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};
	
	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};
	
	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};
	
	module.exports = InterceptorManager;


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(288);
	var transformData = __webpack_require__(305);
	var isCancel = __webpack_require__(306);
	var defaults = __webpack_require__(292);
	var isAbsoluteURL = __webpack_require__(307);
	var combineURLs = __webpack_require__(308);
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	}
	
	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);
	
	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }
	
	  // Ensure headers exist
	  config.headers = config.headers || {};
	
	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );
	
	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers || {}
	  );
	
	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );
	
	  var adapter = config.adapter || defaults.adapter;
	
	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);
	
	    // Transform response data
	    response.data = transformData(
	      response.data,
	      response.headers,
	      config.transformResponse
	    );
	
	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);
	
	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData(
	          reason.response.data,
	          reason.response.headers,
	          config.transformResponse
	        );
	      }
	    }
	
	    return Promise.reject(reason);
	  });
	};


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(288);
	
	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });
	
	  return data;
	};


/***/ }),
/* 306 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};


/***/ }),
/* 307 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};


/***/ }),
/* 308 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	module.exports = function combineURLs(baseURL, relativeURL) {
	  return relativeURL
	    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
	    : baseURL;
	};


/***/ }),
/* 309 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * A `Cancel` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */
	function Cancel(message) {
	  this.message = message;
	}
	
	Cancel.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};
	
	Cancel.prototype.__CANCEL__ = true;
	
	module.exports = Cancel;


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Cancel = __webpack_require__(309);
	
	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }
	
	  var resolvePromise;
	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });
	
	  var token = this;
	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }
	
	    token.reason = new Cancel(message);
	    resolvePromise(token.reason);
	  });
	}
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};
	
	/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};
	
	module.exports = CancelToken;


/***/ }),
/* 311 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};


/***/ }),
/* 312 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var BLOG_FETCH_SUCCESS = 'blog_fetch_success';
	exports.BLOG_FETCH_SUCCESS = BLOG_FETCH_SUCCESS;
	var POSTS_FETCH_SUCCESS = 'posts_fetch_success';
	exports.POSTS_FETCH_SUCCESS = POSTS_FETCH_SUCCESS;
	var NEXT_PAGE_POSTS_FETCH_SUCCESS = 'next_page_posts_fetch_success';
	exports.NEXT_PAGE_POSTS_FETCH_SUCCESS = NEXT_PAGE_POSTS_FETCH_SUCCESS;
	var PREV_PAGE_POSTS_FETCH_SUCCESS = 'prev_page_posts_fetch_success';
	exports.PREV_PAGE_POSTS_FETCH_SUCCESS = PREV_PAGE_POSTS_FETCH_SUCCESS;

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _axios = __webpack_require__(286);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _types = __webpack_require__(312);
	
	var fetchPosts = function fetchPosts(_ref) {
	  var blogId = _ref.blogId;
	  var apiKey = _ref.apiKey;
	
	  var apiEngPoint = 'https://www.googleapis.com/blogger/v3/blogs/' + blogId + '/posts?key=' + apiKey + '&maxResults=5';
	  return function (dispatch) {
	    _axios2['default'].get(apiEngPoint).then(function (response) {
	      dispatch({
	        type: _types.POSTS_FETCH_SUCCESS,
	        payload: response.data
	      });
	    });
	  };
	};
	
	exports.fetchPosts = fetchPosts;
	var fetchNextPagePosts = function fetchNextPagePosts(_ref2) {
	  var blogId = _ref2.blogId;
	  var apiKey = _ref2.apiKey;
	  var token = _ref2.token;
	
	  var apiEngPoint = 'https://www.googleapis.com/blogger/v3/blogs/' + blogId + '/posts?key=' + apiKey + '&pageToken=' + token + '&maxResults=5';
	  return function (dispatch) {
	    dispatch({ type: 'fetching' });
	    return _axios2['default'].get(apiEngPoint).then(function (response) {
	      dispatch({
	        type: _types.NEXT_PAGE_POSTS_FETCH_SUCCESS,
	        payload: response.data
	      });
	    });
	  };
	};
	
	exports.fetchNextPagePosts = fetchNextPagePosts;
	var fetchPrevPagePosts = function fetchPrevPagePosts(_ref3) {
	  var blogId = _ref3.blogId;
	  var apiKey = _ref3.apiKey;
	  var token = _ref3.token;
	
	  var apiEngPoint = 'https://www.googleapis.com/blogger/v3/blogs/' + blogId + '/posts?key=' + apiKey + '&pageToken=' + token + '&maxResults=5';
	  return function (dispatch) {
	    dispatch({ type: 'fetching' });
	    return _axios2['default'].get(apiEngPoint).then(function (response) {
	      dispatch({
	        type: _types.PREV_PAGE_POSTS_FETCH_SUCCESS,
	        payload: response.data
	      });
	    });
	  };
	};
	exports.fetchPrevPagePosts = fetchPrevPagePosts;

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _redux = __webpack_require__(24);
	
	var _BlogReducer = __webpack_require__(315);
	
	var _BlogReducer2 = _interopRequireDefault(_BlogReducer);
	
	var _PostReducer = __webpack_require__(316);
	
	var _PostReducer2 = _interopRequireDefault(_PostReducer);
	
	exports['default'] = (0, _redux.combineReducers)({
	  blog: _BlogReducer2['default'],
	  post: _PostReducer2['default']
	});
	module.exports = exports['default'];

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _actionsTypes = __webpack_require__(312);
	
	var INITIAL_STATE = {
	  blogName: '',
	
	  loading: true
	};
	
	exports['default'] = function (state, action) {
	  if (state === undefined) state = INITIAL_STATE;
	
	  switch (action.type) {
	    case _actionsTypes.BLOG_FETCH_SUCCESS:
	      return { blogResponse: action.payload, loading: false };
	    default:
	      return state;
	  }
	};
	
	module.exports = exports['default'];

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }
	
	var _actionsTypes = __webpack_require__(312);
	
	var INITIAL_STATE = {
	  postResponse: {},
	  prevPageToken: [],
	  currentPage: 0,
	  loading: true
	};
	
	exports['default'] = function (state, action) {
	  if (state === undefined) state = INITIAL_STATE;
	
	  switch (action.type) {
	    case _actionsTypes.POSTS_FETCH_SUCCESS:
	      return {
	        postResponse: action.payload,
	        loading: false,
	        prevPageToken: action.payload.nextPageToken ? [].concat(_toConsumableArray(state.prevPageToken), [action.payload.nextPageToken]) : state.prevPageToken,
	        currentPage: 0
	      };
	
	    case _actionsTypes.NEXT_PAGE_POSTS_FETCH_SUCCESS:
	      return {
	        postResponse: action.payload,
	        loading: false,
	        prevPageToken: state.currentPage + 1 < state.prevPageToken.length ? state.prevPageToken : action.payload.nextPageToken ? [].concat(_toConsumableArray(state.prevPageToken), [action.payload.nextPageToken]) : state.prevPageToken,
	        currentPage: state.currentPage + 1
	      };
	
	    case _actionsTypes.PREV_PAGE_POSTS_FETCH_SUCCESS:
	      return {
	        postResponse: action.payload,
	        loading: false,
	        prevPageToken: state.prevPageToken,
	        currentPage: state.currentPage - 1
	      };
	
	    case 'fetching':
	      return _extends({}, state, { loading: true });
	    default:
	      return state;
	  }
	};
	
	module.exports = exports['default'];

/***/ })
/******/ ])
});
;
//# sourceMappingURL=react-google-blogger.js.map