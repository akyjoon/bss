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

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _clients_c_revenue = __webpack_require__(2);

	var _clients_c_revenue2 = _interopRequireDefault(_clients_c_revenue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var clientsRevenue = new _clients_c_revenue2.default();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ClientsRevenue = function () {
	    function ClientsRevenue() {
	        _classCallCheck(this, ClientsRevenue);

	        this.clientData = [];
	        this.ctx = document.getElementById("ccit1");
	        this.ccit1 = new Chart(this.ctx, {
	            responsive: true,
	            maintanAspectRatio: false,
	            type: 'bar',
	            data: {
	                labels: [],
	                datasets: [{
	                    label: '',
	                    data: [],
	                    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
	                    borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
	                    borderWidth: 1
	                }]
	            },
	            options: {
	                scales: {
	                    yAxes: [{
	                        ticks: {
	                            beginAtZero: true
	                        }
	                    }]
	                }
	            }
	        });

	        //initiate methods
	        this.fetcher();
	    }

	    //declare methods


	    _createClass(ClientsRevenue, [{
	        key: 'fetcher',
	        value: function fetcher() {
	            var _this = this;

	            fetch('/clients/json/totalDAValue').then(function (res) {
	                return res.json();
	            }).then(function (data) {
	                data.forEach(function (client) {
	                    //change datas
	                    _this.ccit1.data.labels.push(client.name);
	                    _this.ccit1.data.datasets[0].data.push(client.revenue);
	                    _this.ccit1.data.datasets[0].label = 'Clients Total DA Value';

	                    //update datas
	                    _this.ccit1.update();
	                });
	            }).catch(function (err) {
	                return console.log(err);
	            });
	        }
	    }]);

	    return ClientsRevenue;
	}();

	exports.default = ClientsRevenue;

/***/ })
/******/ ]);