/******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _priceList_addParam = __webpack_require__(6);

	var _priceList_addParam2 = _interopRequireDefault(_priceList_addParam);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var addParams = new _priceList_addParam2.default();

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AddParams = function () {
	  function AddParams() {
	    _classCallCheck(this, AddParams);

	    this.field = document.querySelector('.addParamFields');
	    this.addButton = document.querySelector('.addButton');
	    this.template = function () {
	      return '\n      <div class="col-md-4">\n      <label for="parameter">Parameter</label>\n      <input class="form-control" type="text" name="parameter">\n      </div>\n\n      <div class="col-md-4">\n      <label for="monthlyFee">Monthly Fee</label>\n      <input class="form-control" type="text" name="monthlyFee">\n      </div>\n      \n      <div class="col-md-4">\n      <label for="oneTimeFee">One time fee</label>\n      <input class="form-control" type="text" name="oneTimeFee">\n      </div>\n      ';
	    };

	    //initiate methods
	    this.click();
	  }

	  //declare methods


	  _createClass(AddParams, [{
	    key: 'click',
	    value: function click() {
	      var _this = this;
	      this.addButton.addEventListener('click', function () {
	        _this.field.insertAdjacentHTML('beforeend', _this.template());
	      });
	    }
	  }]);

	  return AddParams;
	}();

	exports.default = AddParams;

/***/ })
/******/ ]);