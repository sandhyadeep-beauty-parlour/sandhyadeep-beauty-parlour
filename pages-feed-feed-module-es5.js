function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-feed-feed-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed/feed.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed/feed.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFeedFeedPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sandhyadeep-header class=\"z-index-99\"></sandhyadeep-header>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshPage($event)\">\r\n        <ion-refresher-content pulling-icon=\"arrow-dropdown\" refreshing-spinner=\"circles\">\r\n\r\n        </ion-refresher-content>\r\n    </ion-refresher>\r\n    <ion-slides zoom class=\"feed-sliders\" pager=\"true\" [options]=\"slideOpts\">\r\n        <ion-slide class=\"feed-images feed-slider feed-slider-one\">\r\n\r\n        </ion-slide>\r\n        <ion-slide class=\"feed-images feed-slider feed-slider-two\">\r\n\r\n        </ion-slide>\r\n        <ion-slide class=\"feed-images feed-slider feed-slider-three\">\r\n\r\n        </ion-slide>\r\n    </ion-slides>\r\n\r\n\r\n    <div class=\"menu-container\">\r\n        <!--        <div class=\"feed-heading\">-->\r\n        <!--            <h2><b>Services</b></h2>-->\r\n        <!--        </div>-->\r\n        <!--        <div class=\"height-95px slide_container\">-->\r\n        <!--            <div class=\"slider s1 filter-bright-03\"></div>-->\r\n        <!--            <div class=\"slider s2 filter-bright-03\"></div>-->\r\n        <!--            <div class=\"slider s3 filter-bright-03\"></div>-->\r\n        <!--            <div class=\"slider s4 filter-bright-03\"></div>-->\r\n        <!--        </div>-->\r\n\r\n        <div class=\"quick_menus\">\r\n            <div *ngFor=\"let treatment of treatments\" (click)=\"goServices()\" class=\"menu-container\">\r\n                <div class=\"menu-image\"><img src=\"{{treatment.url}}\" alt=\"\"></div>\r\n                <div class=\"menu-text\">{{treatment.name}}</div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"feed-heading\">\r\n            <div class=\"heading-text\">\r\n                <b>Packages</b>\r\n            </div>\r\n            <div [routerLink]=\"['/home/packages']\" class=\"know-more\">See All <i class=\"fa fa-angle-right\"></i></div>\r\n        </div>\r\n        <div class=\"slide_container\">\r\n            <div *ngFor=\"let packageData of packageList\" class=\"slider\" (click)=\"onClickPackage(packageData.id)\">\r\n                <img src=\"{{packageData?.displayImage}}\" alt=\"\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"feed-heading\">\r\n            <div class=\"heading-text\">\r\n                <b>Products</b>\r\n            </div>\r\n            <div [routerLink]=\"['/home/products']\" class=\"know-more\">See All <i class=\"fa fa-angle-right\"></i></div>\r\n        </div>\r\n        <div class=\"products_container\">\r\n            <div *ngFor=\"let product of productList, let index = index\" class=\"image-slider-container\">\r\n                <div class=\"slider-image\">\r\n                    <img src=\"{{product.url}}\" alt=\"\">\r\n                </div>\r\n                <div class=\"slider-text\">\r\n                    <div class=\"product-name-container\">\r\n                        <div class=\"product-name\">\r\n                            {{product.name}}\r\n                        </div>\r\n                        <div class=\"product-price-details\">\r\n                            <div class=\"price-container\">\r\n                                <div class=\"price\">\r\n                                    {{product.price}} ₹\r\n                                </div>\r\n                                <div class=\"discounted-price\">\r\n                                    <del> {{product.discountedPrice}} ₹</del>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <add-button (updateCounter)=\"onUpdateCounter($event, index)\"></add-button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"safety-measures\">\r\n            <div class=\"margin-bottom-10\">\r\n                Best-in-class safety measures\r\n            </div>\r\n            <div class=\"measures-container margin-bottom-10\">\r\n                <div class=\"measure\">\r\n                    <div class=\"measure-image\"><img src=\"assets/mask.png\" alt=\"\"></div>\r\n                    <div class=\"measure-text\">Usage of mask & gloves</div>\r\n                </div>\r\n                <div class=\"measure\">\r\n                    <div class=\"measure-image\"><img src=\"assets/thermometer.png\" alt=\"\"></div>\r\n                    <div class=\"measure-text\">Temperature Checks</div>\r\n                </div>\r\n                <div class=\"measure\">\r\n                    <div class=\"measure-image\"><img src=\"assets/liquid-soap.png\" alt=\"\"></div>\r\n                    <div class=\"measure-text\">Sanitizations of tools & area</div>\r\n                </div>\r\n                <div class=\"measure\">\r\n                    <div class=\"measure-image\"><img src=\"assets/setu.png\" alt=\"\"></div>\r\n                    <div class=\"measure-text\">Arogya Setu to ensure Safety</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"feed-heading\">\r\n            <div class=\"heading-text\">\r\n                <b>Our Stylist</b>\r\n            </div>\r\n            <div (click)=\"onKnowMore()\" class=\"know-more\">Know More <i class=\"fa fa-angle-right\"></i></div>\r\n        </div>\r\n        <div class=\"application-details\">\r\n            <div class=\"owner-info-container\">\r\n                <div [routerLink]=\"['/home/about-us']\" class=\"owner-image\">\r\n                    <img src=\"../../../assets/deepaa_bhagwat.jpg\">\r\n                </div>\r\n                <div class=\"owner-details\">\r\n                    <div class=\"owner-name\">Deepaa Bhagwat</div>\r\n                    <div class=\"social-media-icons\">\r\n                        <div class=\"fb-icon\"><i class=\"media-icon fa fa-facebook\"></i></div>\r\n                        <div class=\"insta-icon\"><i class=\"media-icon fa fa-instagram\"></i></div>\r\n                        <div class=\"linkedin-icon\"><i class=\"media-icon fa fa-linkedin\"></i></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <div>\r\n                    <ul>\r\n                        <li>Media & Beauty Makeup Diploma · Media Makeup · Fsx · Singapore</li>\r\n                        <li>Makeup Techniques with Air Brush Machine · Mumbai, Maharashtra</li>\r\n                        <li>Master Diploma in Makeup Artistry · Singapore</li>\r\n                        <li>Comite International D’Esthetique Et De Cosmetologie., Zurich.</li>\r\n                        <li>British Association of Beauty Therapy & Cosmetology, London.</li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"copy-rights\">\r\n            <i class=\"fa fa-copyright\"></i> Copyright {{todayYear}} <br> Sandhyadeep Beauty Parlour <br>\r\n        </div>\r\n    </div>\r\n\r\n</ion-content>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/add-button/add-button.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/add-button/add-button.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsAddButtonAddButtonPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"add-item\">\r\n  <div *ngIf=\"counter === 0\" class=\"custom-add-button\">\r\n    <div class=\"add-text\">Add</div>\r\n    <i (click)=\"onChange('plus')\"\r\n       class=\"fa fa-plus\"></i>\r\n  </div>\r\n  <div *ngIf=\"counter > 0\" class=\"custom-add-more-button\">\r\n    <div (click)=\"onChange('minus')\">\r\n      <i class=\"fa fa-minus\"></i>\r\n    </div>\r\n    <div class=\"in-cart-box\">\r\n      {{counter}}\r\n    </div>\r\n    <div (click)=\"onChange('plus')\">\r\n      <i class=\"fa fa-plus\"></i>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/api.service.ts":
  /*!********************************!*\
    !*** ./src/app/api.service.ts ***!
    \********************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseURLAdminAPIs;
        this.country = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.currentCountry = this.country.asObservable();
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
          Authorization: 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        });
      }

      _createClass(ApiService, [{
        key: "getUserRole",
        value: function getUserRole() {
          return localStorage.getItem('role');
        }
      }, {
        key: "setHeaderToken",
        value: function setHeaderToken() {
          var token = localStorage.getItem('token');
          this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            Authorization: "Bearer ".concat(token)
          });
        }
      }, {
        key: "getServicesData",
        value: function getServicesData() {
          var localUrl = 'assets/json_files/services.json';
          return this.http.get(localUrl);
        }
      }, {
        key: "getMainServiceData",
        value: function getMainServiceData() {
          var localUrl = 'assets/json_files/MainServices.json';
          return this.http.get(localUrl);
        }
      }, {
        key: "getCombos",
        value: function getCombos() {
          var localUrl = 'assets/json_files/packages.json';
          return this.http.get(localUrl);
        }
      }, {
        key: "getCoupons",
        value: function getCoupons() {
          var localUrl = 'assets/json_files/coupons.json';
          return this.http.get(localUrl);
        }
      }, {
        key: "getServicePackage",
        value: function getServicePackage() {
          var localUrl = 'assets/json_files/service-packages.json';
          return this.http.get(localUrl);
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          var localUrl = 'assets/json_files/products.json';
          return this.http.get(localUrl);
        }
      }, {
        key: "getBookings",
        value: function getBookings() {
          var localUrl = 'assets/json_files/bookings.json';
          return this.http.get(localUrl);
        }
      }, {
        key: "commonError",
        value: function commonError(err) {
          console.log(err);
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])], ApiService);
    /***/
  },

  /***/
  "./src/app/pages/feed/feed-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/feed/feed-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: FeedPageRoutingModule */

  /***/
  function srcAppPagesFeedFeedRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedPageRoutingModule", function () {
      return FeedPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _feed_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./feed.page */
    "./src/app/pages/feed/feed.page.ts");

    var routes = [{
      path: '',
      component: _feed_page__WEBPACK_IMPORTED_MODULE_3__["FeedPage"]
    }];

    var FeedPageRoutingModule = function FeedPageRoutingModule() {
      _classCallCheck(this, FeedPageRoutingModule);
    };

    FeedPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FeedPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/feed/feed.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/feed/feed.module.ts ***!
    \*******************************************/

  /*! exports provided: FeedPageModule */

  /***/
  function srcAppPagesFeedFeedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedPageModule", function () {
      return FeedPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _feed_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./feed-routing.module */
    "./src/app/pages/feed/feed-routing.module.ts");
    /* harmony import */


    var _feed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./feed.page */
    "./src/app/pages/feed/feed.page.ts");
    /* harmony import */


    var _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared-components/header-component/header-component.module */
    "./src/app/shared-components/header-component/header-component.module.ts");
    /* harmony import */


    var _shared_components_add_button_add_button_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared-components/add-button/add-button.module */
    "./src/app/shared-components/add-button/add-button.module.ts");

    var FeedPageModule = function FeedPageModule() {
      _classCallCheck(this, FeedPageModule);
    };

    FeedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _feed_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeedPageRoutingModule"], _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"], _shared_components_add_button_add_button_module__WEBPACK_IMPORTED_MODULE_8__["AddButtonModule"]],
      declarations: [_feed_page__WEBPACK_IMPORTED_MODULE_6__["FeedPage"]]
    })], FeedPageModule);
    /***/
  },

  /***/
  "./src/app/pages/feed/feed.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/feed/feed.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFeedFeedPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logo-container {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n.logo-container .logo-text {\n  font-size: 20px;\n  font-weight: 700;\n}\n.logo-container .slogan-text {\n  font-size: 8px;\n}\n.search-bar {\n  position: absolute;\n  z-index: 999;\n  opacity: 0.5;\n}\n.search-bar .searchbar-input-container input {\n  background-color: white !important;\n}\n.feed-sliders {\n  height: 40%;\n}\n.feed-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 18px 0 5px;\n}\n.feed-heading .heading-text {\n  font-size: 20px;\n}\n.know-more {\n  color: #666;\n}\n.feed-sliders .feed-slider {\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-position: center center !important;\n  max-height: 30em;\n}\n.feed-sliders .feed-slider-one {\n  background: url('beaurty-1.jpg');\n}\n.feed-sliders .feed-slider-two {\n  background: url('beauty-2.jpg');\n}\n.feed-sliders .feed-slider-three {\n  background: url('beauty-3.jpg');\n}\n.feed-container {\n  /*background: linear-gradient(214deg, rgba(40, 29, 232, 1) -25%, rgb(81, 36, 82) 63%);*/\n  padding: 30px;\n  border: 1px solid #fff;\n}\n.feed-container .feed-image-container > div {\n  margin-bottom: 30px;\n  position: relative;\n  border: 1px solid #BFBFBF;\n  background-color: white;\n  box-shadow: 5px 10px 29px #aaaaaa94;\n}\n.feed-container .feed-image-container .feed-image {\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  cursor: pointer;\n  background-position: center center !important;\n  height: 200px;\n}\n.feed-container .feed-image-container .feed-image-hair {\n  background-image: url('hair.jpeg');\n}\n.feed-container .feed-image-container .feed-image-skin {\n  background-image: url('skin.jpeg');\n}\n.feed-container .feed-image-container .feed-image-makeup {\n  background-image: url('makeup.jpeg');\n}\n.feed-container .feed-image-container .feed-image-course {\n  background-image: url('courses.jpeg');\n}\n.feed-container .feed-image-container .feed-text {\n  background: linear-gradient(214deg, #281de8 -25%, #512452 63%);\n  text-align: center;\n  font-weight: bold;\n  color: white;\n  bottom: 0;\n  width: 100%;\n  padding: 15px;\n  font-size: 20px;\n}\n.height-95px {\n  height: 95px;\n}\n.height-200px {\n  height: 200px;\n}\n.slide_container {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n}\n.slide_container::-webkit-scrollbar {\n  display: none;\n}\n.menu-container {\n  padding: 0 15px;\n  font-size: 14px;\n}\n.products_container {\n  display: flex;\n  overflow: scroll;\n}\n.products_container::-webkit-scrollbar {\n  display: none;\n}\n.products_container .image-slider-container {\n  display: flex;\n  border-radius: 10px;\n  background-color: white;\n  width: 200px;\n  border: 1px solid #BFBFBF;\n  margin: 0 10px 5px;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.products_container .image-slider-container:first-child {\n  margin: 0 10px 5px 0;\n}\n.products_container .image-slider-container:last-child {\n  margin: 0 0 5px 10px;\n}\n.products_container .image-slider-container .slider-image {\n  width: 200px;\n  height: 200px;\n  overflow: hidden;\n}\n.products_container .image-slider-container .slider-image img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%;\n  width: 100%;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.products_container .image-slider-container .slider-text {\n  line-height: 1.3;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.products_container .image-slider-container .slider-text .product-name-container {\n  display: flex;\n  flex-direction: column;\n}\n.products_container .image-slider-container .slider-text .product-name {\n  font-size: 16px;\n  font-weight: bold;\n}\n.products_container .image-slider-container .slider-text .product-price-details {\n  display: flex;\n  justify-content: space-between;\n}\n.products_container .image-slider-container .slider-text .product-price-details .price-container {\n  display: flex;\n}\n.products_container .image-slider-container .slider-text .product-price-details .price-container .price {\n  color: #2d2c2c;\n  font-size: 14px;\n}\n.products_container .image-slider-container .slider-text .product-price-details .price-container .discounted-price {\n  color: #666;\n  font-size: 14px;\n  margin-left: 5px;\n}\n.slide_container .slider {\n  display: inline-block;\n  background-color: white;\n  width: 80%;\n  margin: 0 10px 5px;\n}\n.slide_container .slider img {\n  height: 150px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 10px;\n}\n.slide_container .slider:first-child {\n  margin: 0 10px 5px 0;\n}\n.slide_container .slider:last-child {\n  margin: 0 0 5px 10px;\n}\n.slide_container .slider.s1 {\n  background-image: url('s1.jpg');\n}\n.slide_container .slider.s2 {\n  background-image: url('s2.jpg');\n}\n.slide_container .slider.s3 {\n  background-image: url('s3.jpg');\n}\n.slide_container .slider.s4 {\n  background-image: url('s4.jpeg');\n}\n.filter-bright-03 {\n  -webkit-filter: brightness(0.3);\n          filter: brightness(0.3);\n}\n.slide_container .slider.p1 {\n  background-image: url('s1.jpg');\n}\n.slide_container .slider.p2 {\n  background-image: url('s2.jpg');\n}\n.slide_container .slider.p3 {\n  background-image: url('s3.jpg');\n}\n.slide_container .slider.p4 {\n  background-image: url('s4.jpeg');\n}\n.searchbar-input.sc-ion-searchbar-ios {\n  background: white !important;\n}\n.main-container {\n  background: #d3d3d34f;\n}\n.quick_menus {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  margin: 15px 0;\n  border-radius: 10px;\n  border: 1px solid lightgray;\n  box-shadow: -3px 4px 25px #aaaaaa94;\n  padding: 7px;\n}\n.quick_menus div.menu-container {\n  flex-basis: 33%;\n  padding: 2%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.quick_menus div.menu-container:nth-child(1) {\n  border-top-left-radius: 12px;\n}\n.quick_menus div.menu-container:nth-child(3) {\n  border-top-right-radius: 12px;\n}\n.quick_menus div.menu-container:nth-child(7) {\n  border-bottom-left-radius: 12px;\n}\n.quick_menus div.menu-container:nth-child(9) {\n  border-bottom-right-radius: 12px;\n}\n.quick_menus div.menu-container .menu-image {\n  height: 65px;\n  width: 65px;\n  border: 2px solid #666;\n  padding: 1px;\n  border-radius: 50%;\n  overflow: hidden;\n  display: inline-block;\n}\n.quick_menus div.menu-container .menu-image img {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.quick_menus div.menu-container .menu-text {\n  padding-top: 5px;\n  font-size: 14px;\n  text-align: center;\n}\n.application-details {\n  margin: 15px 0 0;\n  padding: 5px 0;\n  display: flex;\n  color: white;\n  flex-direction: column;\n  background-image: url('back-3.jpg');\n  background-size: cover;\n  background-position: center center;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.application-details .owner-info-container {\n  flex-basis: 35%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.application-details .owner-info-container .owner-image {\n  width: 85px;\n}\n.application-details .owner-info-container .owner-image img {\n  max-width: 100%;\n  border: 0;\n  border-radius: 50%;\n  margin: 5px 0;\n}\n.application-details .owner-info-container .owner-name {\n  font-size: 16px;\n  text-align: center;\n}\n.application-details .owner-info-container .social-media-icons {\n  display: flex;\n  justify-content: center;\n}\n.application-details .owner-info-container .social-media-icons div {\n  border: 2px solid white;\n  display: inline-block;\n  height: 35px;\n  width: 35px;\n  transition: all 0.5s;\n  text-align: center;\n  margin: 5px 10px;\n  border-radius: 10px;\n}\n.application-details .owner-info-container .social-media-icons div .media-icon {\n  line-height: 32px;\n  font-size: 15px;\n}\n.linkedin-icon {\n  background: #0E76A8;\n}\n.fb-icon {\n  background: #3B5998;\n}\n.insta-icon {\n  background: linear-gradient(to right top, #cc2b5e, #bc2a6d, #a82e7a, #903483, #753a88);\n}\n.copy-rights {\n  padding: 5px 15px;\n  background: #cc2b5efa;\n  color: white;\n  font-weight: bold;\n  font-size: 14px;\n  text-align: center;\n}\n.end-section {\n  padding: 10px 0;\n  background-color: lightgray;\n}\n.safety-measures {\n  margin: 15px 0 10px;\n  display: flex;\n  flex-direction: column;\n  font-size: 20px;\n  text-align: center;\n  font-weight: bold;\n  border: 1px solid #BFBFBF;\n  padding: 10px 0;\n  border-radius: 10px;\n}\n.safety-measures .margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.safety-measures .logo-safe .logo-image {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n}\n.safety-measures .measures-container {\n  display: flex;\n}\n.safety-measures .measures-container .measure {\n  padding: 5px;\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.safety-measures .measures-container .measure .measure-image {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 35px;\n  height: 35px;\n  margin-bottom: 5px;\n}\n.safety-measures .measures-container .measure .measure-text {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmVlZC9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcCBpb25pYyBzdGFjay9zcmNcXGFwcFxccGFnZXNcXGZlZWRcXGZlZWQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mZWVkL2ZlZWQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mZWVkL0M6XFxVc2Vyc1xcYWFiaGFnd2FcXHNhbmRoeWFkZWVwIGlvbmljIHN0YWNrL3NyY1xcc2FuZGh5YWRlZXAtdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDREY7QURFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0FKO0FERUU7RUFDRSxjQUFBO0FDQUo7QURJQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNERjtBREVFO0VBQ0Usa0NBQUE7QUNBSjtBRE9BO0VBQ0UsV0FBQTtBQ0pGO0FET0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSkY7QURLRTtFQUNFLGVFaENVO0FENkJkO0FET0E7RUFDRSxXQUFBO0FDSkY7QURPQTtFQUNFLHVDQUFBO0VBQ0EsaUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0FDSkY7QURPQTtFQUNFLGdDQUFBO0FDSkY7QURPQTtFQUNFLCtCQUFBO0FDSkY7QURPQTtFQUNFLCtCQUFBO0FDSkY7QURPQTtFQUNFLHVGQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDSkY7QURPQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUNBQUE7QUNKRjtBRE9BO0VBQ0UsdUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSw2Q0FBQTtFQUNBLGFBQUE7QUNKRjtBRE9BO0VBQ0Usa0NBQUE7QUNKRjtBRE9BO0VBQ0Usa0NBQUE7QUNKRjtBRE9BO0VBQ0Usb0NBQUE7QUNK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b3J0IFwiLi4vLi4vLi4vc2FuZGh5YWRlZXAtdGhlbWVcIjtcclxuXHJcbi5sb2dvLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgLmxvZ28tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICAuc2xvZ2FuLXRleHQge1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VhcmNoLWJhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgLnNlYXJjaGJhci1pbnB1dC1jb250YWluZXIgaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLy8uZmVlZC1pbWFnZXMge1xyXG4vLyAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNSk7XHJcbi8vfVxyXG5cclxuLmZlZWQtc2xpZGVycyB7XHJcbiAgaGVpZ2h0OiA0MCU7XHJcbn1cclxuXHJcbi5mZWVkLWhlYWRpbmcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxOHB4IDAgNXB4O1xyXG4gIC5oZWFkaW5nLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAkaGVhZGVyLXNpemU7XHJcbiAgfVxyXG59XHJcblxyXG4ua25vdy1tb3JlIHtcclxuICBjb2xvcjogIzY2NjtcclxufVxyXG5cclxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXIge1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIG1heC1oZWlnaHQ6IDMwZW07XHJcbn1cclxuXHJcbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLW9uZSB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JlYXVydHktMS5qcGdcIik7XHJcbn1cclxuXHJcbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLXR3byB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JlYXV0eS0yLmpwZ1wiKTtcclxufVxyXG5cclxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXItdGhyZWUge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iZWF1dHktMy5qcGdcIik7XHJcbn1cclxuXHJcbi5mZWVkLWNvbnRhaW5lciB7XHJcbiAgLypiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjE0ZGVnLCByZ2JhKDQwLCAyOSwgMjMyLCAxKSAtMjUlLCByZ2IoODEsIDM2LCA4MikgNjMlKTsqL1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxufVxyXG5cclxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciA+IGRpdiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0JGQkZCRjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiA1cHggMTBweCAyOXB4ICNhYWFhYWE5NDtcclxufVxyXG5cclxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciAuZmVlZC1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtaW1hZ2UtaGFpciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2hhaXIuanBlZ1wiKTtcclxufVxyXG5cclxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1za2luIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvc2tpbi5qcGVnXCIpO1xyXG59XHJcblxyXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLWltYWdlLW1ha2V1cCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL21ha2V1cC5qcGVnXCIpO1xyXG59XHJcblxyXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvdXJzZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2NvdXJzZXMuanBlZ1wiKTtcclxufVxyXG5cclxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciAuZmVlZC10ZXh0IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjE0ZGVnLCByZ2JhKDQwLCAyOSwgMjMyLCAxKSAtMjUlLCByZ2IoODEsIDM2LCA4MikgNjMlKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmhlaWdodC05NXB4IHtcclxuIGhlaWdodDogOTVweDtcclxufVxyXG5cclxuLmhlaWdodC0yMDBweCB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLnNsaWRlX2NvbnRhaW5lciB7XHJcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4ubWVudS1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDAgMTVweDtcclxuICBmb250LXNpemU6ICRyZWd1bGFyLWZvbnQtc2l6ZTtcclxufVxyXG5cclxuLnByb2R1Y3RzX2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5pbWFnZS1zbGlkZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQkZCRkJGO1xyXG4gICAgbWFyZ2luOiAwIDEwcHggNXB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW46IDAgMTBweCA1cHggMDtcclxuICAgIH1cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbjogMCAwIDVweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnNsaWRlci1pbWFnZSB7XHJcbiAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNsaWRlci10ZXh0IHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAucHJvZHVjdC1uYW1lLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB9XHJcbiAgICAgIC5wcm9kdWN0LW5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gICAgICAucHJvZHVjdC1wcmljZS1kZXRhaWxzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAucHJpY2UtY29udGFpbmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAucHJpY2Uge1xyXG4gICAgICAgICAgICBjb2xvcjogIzJkMmMyYztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRpc2NvdW50ZWQtcHJpY2Uge1xyXG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5zbGlkZV9jb250YWluZXIgLnNsaWRlcntcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IDAgMTBweCA1cHg7XHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW46IDAgMTBweCA1cHggMDtcclxuICB9XHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbjogMCAwIDVweCAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnMxIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zMS5qcGcnKTtcclxufVxyXG5cclxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnMyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zMi5qcGcnKTtcclxufVxyXG5cclxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnMzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zMy5qcGcnKTtcclxufVxyXG5cclxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnM0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zNC5qcGVnJyk7XHJcbn1cclxuXHJcbi5maWx0ZXItYnJpZ2h0LTAzIHtcclxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC4zKTtcclxufVxyXG5cclxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnAxIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zMS5qcGcnKTtcclxufVxyXG5cclxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnAyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zMi5qcGcnKTtcclxufVxyXG5cclxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnAzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zMy5qcGcnKTtcclxufVxyXG5cclxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnA0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zNC5qcGVnJyk7XHJcbn1cclxuXHJcbi5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3Mge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4ubWFpbi1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6ICNkM2QzZDM0ZjtcclxufVxyXG4ucXVpY2tfbWVudXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgYm94LXNoYWRvdzogLTNweCA0cHggMjVweCAjYWFhYWFhOTQ7XHJcbiAgcGFkZGluZzogN3B4O1xyXG5cclxuICBkaXYubWVudS1jb250YWluZXIge1xyXG4gICAgZmxleC1iYXNpczogMzMlO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgJjpudGgtY2hpbGQoMSkge1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgLy8mOm50aC1jaGlsZCgyKSB7XHJcbiAgICAvLyAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIC8vfVxyXG4gICAgJjpudGgtY2hpbGQoMykge1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcclxuICAgIH1cclxuICAgIC8vJjpudGgtY2hpbGQoNCkge31cclxuICAgIC8vJjpudGgtY2hpbGQoNSkge31cclxuICAgIC8vJjpudGgtY2hpbGQoNikge31cclxuICAgICY6bnRoLWNoaWxkKDcpIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDtcclxuICAgIH1cclxuICAgIC8vJjpudGgtY2hpbGQoOCkge31cclxuICAgICY6bnRoLWNoaWxkKDkpIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEycHg7XHJcbiAgICB9XHJcbiAgICAubWVudS1pbWFnZSB7XHJcbiAgICAgIC8vYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAvL2JhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICAgICAgLy9iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3M0LmpwZWcnKTtcclxuICAgICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgICB3aWR0aDogNjVweDtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzY2NjtcclxuICAgICAgcGFkZGluZzogMXB4OyBib3JkZXItcmFkaXVzOiA1MCU7IG92ZXJmbG93OiBoaWRkZW47IGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgaW1nIHtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgfVxyXG4gICAgICAvLyYuaW1hZ2UtMSB7XHJcbiAgICAgIC8vICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy92ZWN0b3ItaGFpcmN1dC5qcGcnKTtcclxuICAgICAgLy99XHJcbiAgICAgIC8vJi5pbWFnZS0yIHtcclxuICAgICAgLy8gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3RocmVkZGluZzIuanBlZycpO1xyXG4gICAgICAvL31cclxuICAgICAgLy8mLmltYWdlLTMge1xyXG4gICAgICAvLyAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvdmVjdG9yX2ZhY2lhbC5qcGcnKTtcclxuICAgICAgLy99XHJcbiAgICAgIC8vJi5pbWFnZS00IHtcclxuICAgICAgLy8gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL21hbmljdXJlLmpwZWcnKTtcclxuICAgICAgLy99XHJcbiAgICAgIC8vJi5pbWFnZS01IHtcclxuICAgICAgLy8gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3Byb2R1Y3RzLmpwZWcnKTtcclxuICAgICAgLy99XHJcbiAgICAgIC8vJi5pbWFnZS02IHtcclxuICAgICAgLy8gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3VwcGVyTGlwcy5qcGVnJyk7XHJcbiAgICAgIC8vfVxyXG4gICAgICAvLyYuaW1hZ2UtNyB7XHJcbiAgICAgIC8vICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9icmlkYWwuanBlZycpO1xyXG4gICAgICAvL31cclxuICAgICAgLy8mLmltYWdlLTgge1xyXG4gICAgICAvLyAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvd2F4aW5nLmpwZWcnKTtcclxuICAgICAgLy99XHJcbiAgICAgIC8vJi5pbWFnZS05IHtcclxuICAgICAgLy8gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2NvdXJzZXMuanBlZycpO1xyXG4gICAgICAvL31cclxuICAgIH1cclxuICAgIC5tZW51LXRleHQge1xyXG4gICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hcHBsaWNhdGlvbi1kZXRhaWxzIHtcclxuICBtYXJnaW46IDE1cHggMCAwO1xyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvYmFjay0zLmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIC8vYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE5M2RlZywgI2NjMmI1ZSAyJSwgIzc1M2E4OCA4NCUpO1xyXG4gIC5vd25lci1pbmZvLWNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWJhc2lzOiAzNSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAub3duZXItaW1hZ2Uge1xyXG4gICAgICB3aWR0aDogODVweDtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm93bmVyLW5hbWUge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuc29jaWFsLW1lZGlhLWljb25zIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGRpdiB7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIC5tZWRpYS1pY29uIHtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxpbmtlZGluLWljb24ge1xyXG4gIGJhY2tncm91bmQ6ICMwRTc2QTg7XHJcbn1cclxuLmZiLWljb24ge1xyXG4gIGJhY2tncm91bmQ6ICMzQjU5OTg7XHJcbn1cclxuLmluc3RhLWljb24ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICNjYzJiNWUsICNiYzJhNmQsICNhODJlN2EsICM5MDM0ODMsICM3NTNhODgpO1xyXG59XHJcblxyXG4uY29weS1yaWdodHMge1xyXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNjYzJiNWVmYTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmVuZC1zZWN0aW9uIHtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG59XHJcblxyXG4uc2FmZXR5LW1lYXN1cmVzIHtcclxuICBtYXJnaW46IDE1cHggMCAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNCRkJGQkY7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLm1hcmdpbi1ib3R0b20tMTAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgLmxvZ28tc2FmZSB7XHJcbiAgICAubG9nby1pbWFnZSB7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICB3aWR0aDogMzVweDtcclxuICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgICAubG9nby10ZXh0IHt9XHJcbiAgfVxyXG4gIC5tZWFzdXJlcy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5tZWFzdXJlIHtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC5tZWFzdXJlLWltYWdlIHtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5tZWFzdXJlLXRleHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIiwiLmxvZ28tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbi5sb2dvLWNvbnRhaW5lciAubG9nby10ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmxvZ28tY29udGFpbmVyIC5zbG9nYW4tdGV4dCB7XG4gIGZvbnQtc2l6ZTogOHB4O1xufVxuXG4uc2VhcmNoLWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5O1xuICBvcGFjaXR5OiAwLjU7XG59XG4uc2VhcmNoLWJhciAuc2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lciBpbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5mZWVkLXNsaWRlcnMge1xuICBoZWlnaHQ6IDQwJTtcbn1cblxuLmZlZWQtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxOHB4IDAgNXB4O1xufVxuLmZlZWQtaGVhZGluZyAuaGVhZGluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ua25vdy1tb3JlIHtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXIgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMzBlbTtcbn1cblxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXItb25lIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JlYXVydHktMS5qcGdcIik7XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLXR3byB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iZWF1dHktMi5qcGdcIik7XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLXRocmVlIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JlYXV0eS0zLmpwZ1wiKTtcbn1cblxuLmZlZWQtY29udGFpbmVyIHtcbiAgLypiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjE0ZGVnLCByZ2JhKDQwLCAyOSwgMjMyLCAxKSAtMjUlLCByZ2IoODEsIDM2LCA4MikgNjMlKTsqL1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xufVxuXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyID4gZGl2IHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQkZCRkJGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogNXB4IDEwcHggMjlweCAjYWFhYWFhOTQ7XG59XG5cbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtaW1hZ2UtaGFpciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9oYWlyLmpwZWdcIik7XG59XG5cbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtaW1hZ2Utc2tpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9za2luLmpwZWdcIik7XG59XG5cbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtaW1hZ2UtbWFrZXVwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL21ha2V1cC5qcGVnXCIpO1xufVxuXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvdXJzZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9jb3Vyc2VzLmpwZWdcIik7XG59XG5cbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtdGV4dCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMTRkZWcsICMyODFkZTggLTI1JSwgIzUxMjQ1MiA2MyUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmhlaWdodC05NXB4IHtcbiAgaGVpZ2h0OiA5NXB4O1xufVxuXG4uaGVpZ2h0LTIwMHB4IHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnNsaWRlX2NvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWVudS1jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnByb2R1Y3RzX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG4ucHJvZHVjdHNfY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucHJvZHVjdHNfY29udGFpbmVyIC5pbWFnZS1zbGlkZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAyMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0JGQkZCRjtcbiAgbWFyZ2luOiAwIDEwcHggNXB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucHJvZHVjdHNfY29udGFpbmVyIC5pbWFnZS1zbGlkZXItY29udGFpbmVyOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luOiAwIDEwcHggNXB4IDA7XG59XG4ucHJvZHVjdHNfY29udGFpbmVyIC5pbWFnZS1zbGlkZXItY29udGFpbmVyOmxhc3QtY2hpbGQge1xuICBtYXJnaW46IDAgMCA1cHggMTBweDtcbn1cbi5wcm9kdWN0c19jb250YWluZXIgLmltYWdlLXNsaWRlci1jb250YWluZXIgLnNsaWRlci1pbWFnZSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wcm9kdWN0c19jb250YWluZXIgLmltYWdlLXNsaWRlci1jb250YWluZXIgLnNsaWRlci1pbWFnZSBpbWcge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG4ucHJvZHVjdHNfY29udGFpbmVyIC5pbWFnZS1zbGlkZXItY29udGFpbmVyIC5zbGlkZXItdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcm9kdWN0c19jb250YWluZXIgLmltYWdlLXNsaWRlci1jb250YWluZXIgLnNsaWRlci10ZXh0IC5wcm9kdWN0LW5hbWUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5wcm9kdWN0c19jb250YWluZXIgLmltYWdlLXNsaWRlci1jb250YWluZXIgLnNsaWRlci10ZXh0IC5wcm9kdWN0LW5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnByb2R1Y3RzX2NvbnRhaW5lciAuaW1hZ2Utc2xpZGVyLWNvbnRhaW5lciAuc2xpZGVyLXRleHQgLnByb2R1Y3QtcHJpY2UtZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5wcm9kdWN0c19jb250YWluZXIgLmltYWdlLXNsaWRlci1jb250YWluZXIgLnNsaWRlci10ZXh0IC5wcm9kdWN0LXByaWNlLWRldGFpbHMgLnByaWNlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucHJvZHVjdHNfY29udGFpbmVyIC5pbWFnZS1zbGlkZXItY29udGFpbmVyIC5zbGlkZXItdGV4dCAucHJvZHVjdC1wcmljZS1kZXRhaWxzIC5wcmljZS1jb250YWluZXIgLnByaWNlIHtcbiAgY29sb3I6ICMyZDJjMmM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wcm9kdWN0c19jb250YWluZXIgLmltYWdlLXNsaWRlci1jb250YWluZXIgLnNsaWRlci10ZXh0IC5wcm9kdWN0LXByaWNlLWRldGFpbHMgLnByaWNlLWNvbnRhaW5lciAuZGlzY291bnRlZC1wcmljZSB7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCAxMHB4IDVweDtcbn1cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlciBpbWcge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXI6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW46IDAgMTBweCA1cHggMDtcbn1cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlcjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luOiAwIDAgNXB4IDEwcHg7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlci5zMSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zMS5qcGdcIik7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlci5zMiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zMi5qcGdcIik7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlci5zMyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zMy5qcGdcIik7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlci5zNCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zNC5qcGVnXCIpO1xufVxuXG4uZmlsdGVyLWJyaWdodC0wMyB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjMpO1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIucDEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvczEuanBnXCIpO1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIucDIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvczIuanBnXCIpO1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIucDMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvczMuanBnXCIpO1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIucDQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvczQuanBlZ1wiKTtcbn1cblxuLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvcyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNkM2QzZDM0Zjtcbn1cblxuLnF1aWNrX21lbnVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW46IDE1cHggMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3gtc2hhZG93OiAtM3B4IDRweCAyNXB4ICNhYWFhYWE5NDtcbiAgcGFkZGluZzogN3B4O1xufVxuLnF1aWNrX21lbnVzIGRpdi5tZW51LWNvbnRhaW5lciB7XG4gIGZsZXgtYmFzaXM6IDMzJTtcbiAgcGFkZGluZzogMiU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnF1aWNrX21lbnVzIGRpdi5tZW51LWNvbnRhaW5lcjpudGgtY2hpbGQoMSkge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xufVxuLnF1aWNrX21lbnVzIGRpdi5tZW51LWNvbnRhaW5lcjpudGgtY2hpbGQoMykge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcbn1cbi5xdWlja19tZW51cyBkaXYubWVudS1jb250YWluZXI6bnRoLWNoaWxkKDcpIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDtcbn1cbi5xdWlja19tZW51cyBkaXYubWVudS1jb250YWluZXI6bnRoLWNoaWxkKDkpIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEycHg7XG59XG4ucXVpY2tfbWVudXMgZGl2Lm1lbnUtY29udGFpbmVyIC5tZW51LWltYWdlIHtcbiAgaGVpZ2h0OiA2NXB4O1xuICB3aWR0aDogNjVweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzY2NjtcbiAgcGFkZGluZzogMXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5xdWlja19tZW51cyBkaXYubWVudS1jb250YWluZXIgLm1lbnUtaW1hZ2UgaW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4ucXVpY2tfbWVudXMgZGl2Lm1lbnUtY29udGFpbmVyIC5tZW51LXRleHQge1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFwcGxpY2F0aW9uLWRldGFpbHMge1xuICBtYXJnaW46IDE1cHggMCAwO1xuICBwYWRkaW5nOiA1cHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6IHdoaXRlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmFjay0zLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG4uYXBwbGljYXRpb24tZGV0YWlscyAub3duZXItaW5mby1jb250YWluZXIge1xuICBmbGV4LWJhc2lzOiAzNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmFwcGxpY2F0aW9uLWRldGFpbHMgLm93bmVyLWluZm8tY29udGFpbmVyIC5vd25lci1pbWFnZSB7XG4gIHdpZHRoOiA4NXB4O1xufVxuLmFwcGxpY2F0aW9uLWRldGFpbHMgLm93bmVyLWluZm8tY29udGFpbmVyIC5vd25lci1pbWFnZSBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDVweCAwO1xufVxuLmFwcGxpY2F0aW9uLWRldGFpbHMgLm93bmVyLWluZm8tY29udGFpbmVyIC5vd25lci1uYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYXBwbGljYXRpb24tZGV0YWlscyAub3duZXItaW5mby1jb250YWluZXIgLnNvY2lhbC1tZWRpYS1pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmFwcGxpY2F0aW9uLWRldGFpbHMgLm93bmVyLWluZm8tY29udGFpbmVyIC5zb2NpYWwtbWVkaWEtaWNvbnMgZGl2IHtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMzVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5hcHBsaWNhdGlvbi1kZXRhaWxzIC5vd25lci1pbmZvLWNvbnRhaW5lciAuc29jaWFsLW1lZGlhLWljb25zIGRpdiAubWVkaWEtaWNvbiB7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5saW5rZWRpbi1pY29uIHtcbiAgYmFja2dyb3VuZDogIzBFNzZBODtcbn1cblxuLmZiLWljb24ge1xuICBiYWNrZ3JvdW5kOiAjM0I1OTk4O1xufVxuXG4uaW5zdGEtaWNvbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICNjYzJiNWUsICNiYzJhNmQsICNhODJlN2EsICM5MDM0ODMsICM3NTNhODgpO1xufVxuXG4uY29weS1yaWdodHMge1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgYmFja2dyb3VuZDogI2NjMmI1ZWZhO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmVuZC1zZWN0aW9uIHtcbiAgcGFkZGluZzogMTBweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5zYWZldHktbWVhc3VyZXMge1xuICBtYXJnaW46IDE1cHggMCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCRkJGQkY7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5zYWZldHktbWVhc3VyZXMgLm1hcmdpbi1ib3R0b20tMTAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnNhZmV0eS1tZWFzdXJlcyAubG9nby1zYWZlIC5sb2dvLWltYWdlIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5zYWZldHktbWVhc3VyZXMgLm1lYXN1cmVzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uc2FmZXR5LW1lYXN1cmVzIC5tZWFzdXJlcy1jb250YWluZXIgLm1lYXN1cmUge1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zYWZldHktbWVhc3VyZXMgLm1lYXN1cmVzLWNvbnRhaW5lciAubWVhc3VyZSAubWVhc3VyZS1pbWFnZSB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uc2FmZXR5LW1lYXN1cmVzIC5tZWFzdXJlcy1jb250YWluZXIgLm1lYXN1cmUgLm1lYXN1cmUtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCIkcHJpbWFyeS1jb2xvcjogI2NjMmI1ZTtcclxuJHNlY29uZGFyeS1jb2xvcjogIzc1M2E4ODtcclxuXHJcbiRyZWd1bGFyLWZvbnQtc2l6ZTogMTRweDtcclxuJGZvbnQtc2l6ZS0xOiAxNnB4O1xyXG4kaGVhZGVyLXNpemU6IDIwcHg7XHJcbiRmb250LXNpemUtMzogMzBweDtcclxuXHJcbiRidXR0b24taGVpZ2h0OiA0NXB4O1xyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/feed/feed.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/feed/feed.page.ts ***!
    \*****************************************/

  /*! exports provided: FeedPage */

  /***/
  function srcAppPagesFeedFeedPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedPage", function () {
      return FeedPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");

    var FeedPage = /*#__PURE__*/function () {
      function FeedPage(router, adminService) {
        _classCallCheck(this, FeedPage);

        this.router = router;
        this.adminService = adminService;
        this.slideOpts = {
          initialSlide: 1,
          speed: 400,
          autoplay: true,
          zoom: {
            maxRatio: 3
          }
        };
        this.productImages = [{
          name: 'Product 1',
          url: 'assets/product1.jpg',
          price: 345,
          discountedPrice: 355,
          inCart: false,
          addedInCart: 0
        }, {
          name: 'Product 2',
          url: 'assets/product2.jpeg',
          price: 45,
          discountedPrice: 60,
          inCart: false,
          addedInCart: 0
        }, {
          name: 'Product 3',
          url: 'assets/product3.jpeg',
          price: 126,
          discountedPrice: 150,
          inCart: false,
          addedInCart: 0
        }, {
          name: 'Product 4',
          url: 'assets/product4.jpeg',
          price: 324,
          discountedPrice: 387,
          inCart: false,
          addedInCart: 0
        }];
        this.treatments = [{
          name: 'Threading',
          sequence: 1,
          url: 'assets/vector-icons/eyebrow.png'
        }, {
          name: 'waxing',
          sequence: 2,
          url: 'assets/vector-icons/waxing.png'
        }, {
          name: 'Haircuts',
          sequence: 3,
          url: 'assets/vector-icons/haircuts.png'
        }, {
          name: 'Facials',
          sequence: 4,
          url: 'assets/vector-icons/facial.png'
        }, {
          name: 'Bleach',
          sequence: 5,
          url: 'assets/vector-icons/bleach.png'
        }, {
          name: 'Hair Treatments',
          sequence: 6,
          url: 'assets/vector-icons/hair-straightener.png'
        }, {
          name: 'Body Treatments',
          sequence: 7,
          url: 'assets/vector-icons/body-treatments.png'
        }, {
          name: 'Makeup',
          sequence: 8,
          url: 'assets/vector-icons/makeup.png'
        }, {
          name: 'Courses',
          sequence: 9,
          url: 'assets/vector-icons/badge.png'
        }];
        this.packages = [{
          id: 1,
          sequence: 1,
          url: 'assets/s1.jpg'
        }, {
          id: 2,
          sequence: 2,
          url: 'assets/s2.jpg'
        }, {
          id: 3,
          sequence: 3,
          url: 'assets/s3.jpg'
        }, {
          id: 4,
          sequence: 4,
          url: 'assets/s4.jpeg'
        }];
        this.packageList = [];
        this.productList = [];
      }

      _createClass(FeedPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPackages();
          this.getProducts();
          this.todayYear = new Date().getFullYear();
        }
      }, {
        key: "refreshPage",
        value: function refreshPage(event) {
          var _this = this;

          setTimeout(function () {
            _this.getPackages();

            _this.getProducts();

            event.target.complete();
          }, 2000);
        }
      }, {
        key: "getPackages",
        value: function getPackages() {
          var _this2 = this;

          this.adminService.getServicePackage().subscribe(function (res) {
            return _this2.getServicePackageSuccess(res);
          }, function (error) {
            _this2.adminService.commonError(error);
          });
        }
      }, {
        key: "getServicePackageSuccess",
        value: function getServicePackageSuccess(res) {
          this.packageList = res;
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          var _this3 = this;

          this.adminService.getProducts().subscribe(function (res) {
            return _this3.getProductSuccess(res);
          }, function (error) {
            _this3.adminService.commonError(error);
          });
        }
      }, {
        key: "getProductSuccess",
        value: function getProductSuccess(res) {
          this.productList = res;
        }
      }, {
        key: "onClickPackage",
        value: function onClickPackage(id) {
          this.router.navigate(['home/package-details'], {
            queryParams: {
              packageId: id
            }
          });
        }
      }, {
        key: "goServices",
        value: function goServices() {
          this.router.navigate(['home/services']);
        }
      }, {
        key: "onKnowMore",
        value: function onKnowMore() {
          this.router.navigate(['home/about-us']);
        }
      }, {
        key: "onUpdateCounter",
        value: function onUpdateCounter(data, index) {
          this.productImages[index].addedInCart = data;
        }
      }]);

      return FeedPage;
    }();

    FeedPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    FeedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-feed',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./feed.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed/feed.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./feed.page.scss */
      "./src/app/pages/feed/feed.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])], FeedPage);
    /***/
  },

  /***/
  "./src/app/shared-components/add-button/add-button.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/shared-components/add-button/add-button.module.ts ***!
    \*******************************************************************/

  /*! exports provided: AddButtonModule */

  /***/
  function srcAppSharedComponentsAddButtonAddButtonModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddButtonModule", function () {
      return AddButtonModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _add_button_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-button.page */
    "./src/app/shared-components/add-button/add-button.page.ts");

    var AddButtonModule = function AddButtonModule() {
      _classCallCheck(this, AddButtonModule);
    };

    AddButtonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
      exports: [_add_button_page__WEBPACK_IMPORTED_MODULE_5__["AddButtonPage"]],
      declarations: [_add_button_page__WEBPACK_IMPORTED_MODULE_5__["AddButtonPage"]]
    })], AddButtonModule);
    /***/
  },

  /***/
  "./src/app/shared-components/add-button/add-button.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/shared-components/add-button/add-button.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsAddButtonAddButtonPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".add-item .custom-add-button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #753a88;\n  border-radius: 5px;\n}\n.add-item .custom-add-button .add-text {\n  padding: 7px 5px;\n  color: #753a88;\n}\n.add-item .custom-add-button i.fa.fa-plus {\n  padding: 9px 6px;\n  background: #d3d3d382;\n  color: #753a88;\n}\n.add-item .custom-add-more-button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #753a88;\n  border-radius: 5px;\n}\n.add-item .custom-add-more-button .add-text {\n  padding: 7px 5px;\n  color: #753a88;\n}\n.add-item .custom-add-more-button .in-cart-box {\n  padding: 0 6px;\n  color: #753a88;\n}\n.add-item .custom-add-more-button i.fa.fa-plus {\n  padding: 9px 6px;\n  background: #753a88;\n  color: white;\n}\n.add-item .custom-add-more-button i.fa.fa-minus {\n  padding: 9px 6px;\n  background: #753a88;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYWRkLWJ1dHRvbi9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcCBpb25pYyBzdGFjay9zcmNcXGFwcFxcc2hhcmVkLWNvbXBvbmVudHNcXGFkZC1idXR0b25cXGFkZC1idXR0b24ucGFnZS5zY3NzIiwic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9hZGQtYnV0dG9uL2FkZC1idXR0b24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUFlLDhCQUFBO0VBQ2YsbUJBQUE7RUFBcUIseUJBQUE7RUFDckIsa0JBQUE7QUNFSjtBRERJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDR047QURESTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDR047QURBRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0VKO0FEREk7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUNHTjtBRERJO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUNHTjtBRERJO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNHTjtBRERJO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNHTiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL2FkZC1idXR0b24vYWRkLWJ1dHRvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWl0ZW0ge1xyXG4gIC5jdXN0b20tYWRkLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBib3JkZXI6IDFweCBzb2xpZCAjNzUzYTg4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLmFkZC10ZXh0IHtcclxuICAgICAgcGFkZGluZzogN3B4IDVweDtcclxuICAgICAgY29sb3I6ICM3NTNhODg7XHJcbiAgICB9XHJcbiAgICBpLmZhLmZhLXBsdXMge1xyXG4gICAgICBwYWRkaW5nOiA5cHggNnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZDNkM2QzODI7XHJcbiAgICAgIGNvbG9yOiAjNzUzYTg4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3NTNhODg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAuYWRkLXRleHQge1xyXG4gICAgICBwYWRkaW5nOiA3cHggNXB4O1xyXG4gICAgICBjb2xvcjogIzc1M2E4ODtcclxuICAgIH1cclxuICAgIC5pbi1jYXJ0LWJveCB7XHJcbiAgICAgIHBhZGRpbmc6IDAgNnB4O1xyXG4gICAgICBjb2xvcjogIzc1M2E4ODtcclxuICAgIH1cclxuICAgIGkuZmEuZmEtcGx1cyB7XHJcbiAgICAgIHBhZGRpbmc6IDlweCA2cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM3NTNhODg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIGkuZmEuZmEtbWludXMge1xyXG4gICAgICBwYWRkaW5nOiA5cHggNnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjNzUzYTg4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3NTNhODg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1idXR0b24gLmFkZC10ZXh0IHtcbiAgcGFkZGluZzogN3B4IDVweDtcbiAgY29sb3I6ICM3NTNhODg7XG59XG4uYWRkLWl0ZW0gLmN1c3RvbS1hZGQtYnV0dG9uIGkuZmEuZmEtcGx1cyB7XG4gIHBhZGRpbmc6IDlweCA2cHg7XG4gIGJhY2tncm91bmQ6ICNkM2QzZDM4MjtcbiAgY29sb3I6ICM3NTNhODg7XG59XG4uYWRkLWl0ZW0gLmN1c3RvbS1hZGQtbW9yZS1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3NTNhODg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiAuYWRkLXRleHQge1xuICBwYWRkaW5nOiA3cHggNXB4O1xuICBjb2xvcjogIzc1M2E4ODtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiAuaW4tY2FydC1ib3gge1xuICBwYWRkaW5nOiAwIDZweDtcbiAgY29sb3I6ICM3NTNhODg7XG59XG4uYWRkLWl0ZW0gLmN1c3RvbS1hZGQtbW9yZS1idXR0b24gaS5mYS5mYS1wbHVzIHtcbiAgcGFkZGluZzogOXB4IDZweDtcbiAgYmFja2dyb3VuZDogIzc1M2E4ODtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmFkZC1pdGVtIC5jdXN0b20tYWRkLW1vcmUtYnV0dG9uIGkuZmEuZmEtbWludXMge1xuICBwYWRkaW5nOiA5cHggNnB4O1xuICBiYWNrZ3JvdW5kOiAjNzUzYTg4O1xuICBjb2xvcjogd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared-components/add-button/add-button.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared-components/add-button/add-button.page.ts ***!
    \*****************************************************************/

  /*! exports provided: AddButtonPage */

  /***/
  function srcAppSharedComponentsAddButtonAddButtonPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddButtonPage", function () {
      return AddButtonPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AddButtonPage = /*#__PURE__*/function () {
      function AddButtonPage() {
        _classCallCheck(this, AddButtonPage);

        this.counter = 0;
        this.updateCounter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(AddButtonPage, [{
        key: "onChange",
        value: function onChange(key) {
          switch (key) {
            case 'plus':
              this.counter = this.counter + 1;
              this.updateCounter.emit(this.counter);
              break;

            case 'minus':
              this.counter = this.counter - 1;
              this.updateCounter.emit(this.counter);
              break;
          }
        }
      }]);

      return AddButtonPage;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AddButtonPage.prototype, "updateCounter", void 0);
    AddButtonPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'add-button',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-button.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/add-button/add-button.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-button.page.scss */
      "./src/app/shared-components/add-button/add-button.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AddButtonPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-feed-feed-module-es5.js.map