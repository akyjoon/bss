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

	var _dashboard_c_it = __webpack_require__(2);

	var _dashboard_c_it2 = _interopRequireDefault(_dashboard_c_it);

	var _dashboard_c_it3 = __webpack_require__(3);

	var _dashboard_c_it4 = _interopRequireDefault(_dashboard_c_it3);

	var _dashboard_c_it5 = __webpack_require__(4);

	var _dashboard_c_it6 = _interopRequireDefault(_dashboard_c_it5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var dashboardContIt1 = new _dashboard_c_it2.default();
	var dashboardContIt2 = new _dashboard_c_it4.default();
	var dashboardContIt3 = new _dashboard_c_it6.default();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DashboardContIt1 = function () {
	    function DashboardContIt1() {
	        _classCallCheck(this, DashboardContIt1);

	        this.clientData = [];
	        this.ctx = document.getElementById("dcit1");
	        this.dcit1 = new Chart(this.ctx, {
	            type: 'radar',
	            data: {
	                labels: [],
	                datasets: [{
	                    label: '# of Votes',
	                    data: [],
	                    backgroundColor: ['rgba(255, 159, 64, 0.2)'],
	                    borderColor: ['rgba(255, 159, 64, 1)'],
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


	    _createClass(DashboardContIt1, [{
	        key: 'fetcher',
	        value: function fetcher() {
	            var _this = this;

	            fetch('http://localhost:7000/json').then(function (res) {
	                return res.json();
	            }).then(function (data) {
	                data.forEach(function (client) {
	                    //change datas
	                    _this.dcit1.data.labels.push(client.name);
	                    _this.dcit1.data.datasets[0].data.push(client.name.length);
	                    _this.dcit1.data.datasets[0].label = 'Clients name length';

	                    //update datas
	                    _this.dcit1.update();
	                });
	            }).catch(function (err) {
	                return console.log(err);
	            });
	        }
	    }]);

	    return DashboardContIt1;
	}();

	exports.default = DashboardContIt1;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DashboardContIt2 = function () {
	    function DashboardContIt2() {
	        _classCallCheck(this, DashboardContIt2);

	        this.clientData = [];
	        this.ctx = document.getElementById("dcit2");
	        this.dcit2 = new Chart(this.ctx, {
	            type: 'line',
	            data: {
	                labels: [],
	                datasets: [{
	                    label: '',
	                    data: [],
	                    backgroundColor: ['rgba(255, 99, 132, 0.2)'],
	                    borderColor: ['rgba(255,99,132,1)'],
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


	    _createClass(DashboardContIt2, [{
	        key: 'fetcher',
	        value: function fetcher() {
	            var _this = this;

	            fetch('http://localhost:7000/json').then(function (res) {
	                return res.json();
	            }).then(function (data) {
	                data.forEach(function (client) {
	                    //change datas
	                    _this.dcit2.data.labels.push(client.name);
	                    _this.dcit2.data.datasets[0].data.push(client.name.length);
	                    _this.dcit2.data.datasets[0].label = 'Revenue';

	                    //update datas
	                    _this.dcit2.update();
	                });
	            }).catch(function (err) {
	                return console.log(err);
	            });
	        }
	    }]);

	    return DashboardContIt2;
	}();

	exports.default = DashboardContIt2;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DashboardContIt3 = function () {
	    function DashboardContIt3() {
	        _classCallCheck(this, DashboardContIt3);

	        this.clientData = [];
	        this.ctx = document.getElementById("dcit3");
	        this.dcit3 = new Chart(this.ctx, {
	            type: 'bar',
	            data: {
	                labels: [],
	                datasets: [{
	                    label: '# of Votes',
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


	    _createClass(DashboardContIt3, [{
	        key: 'fetcher',
	        value: function fetcher() {
	            var _this = this;

	            fetch('http://localhost:7000/json').then(function (res) {
	                return res.json();
	            }).then(function (data) {
	                data.forEach(function (client) {
	                    //change datas
	                    _this.dcit3.data.labels.push(client.name);
	                    _this.dcit3.data.datasets[0].data.push(client.name.length);
	                    _this.dcit3.data.datasets[0].label = 'Clients name length';

	                    //update datas
	                    _this.dcit3.update();
	                });
	            }).catch(function (err) {
	                return console.log(err);
	            });
	        }
	    }]);

	    return DashboardContIt3;
	}();

	exports.default = DashboardContIt3;

/***/ })
/******/ ]);