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


    __webpack_exports__["default"] = "<sandhyadeep-header class=\"z-index-99\"></sandhyadeep-header>\n<ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshPage($event)\">\n        <ion-refresher-content pulling-icon=\"arrow-dropdown\" refreshing-spinner=\"circles\">\n\n        </ion-refresher-content>\n    </ion-refresher>\n    <ion-slides zoom class=\"feed-sliders\" pager=\"true\" [options]=\"slideOpts\">\n        <ion-slide class=\"feed-images feed-slider feed-slider-one\">\n\n        </ion-slide>\n        <ion-slide class=\"feed-images feed-slider feed-slider-two\">\n\n        </ion-slide>\n        <ion-slide class=\"feed-images feed-slider feed-slider-three\">\n\n        </ion-slide>\n    </ion-slides>\n\n\n    <div class=\"menu-container\">\n        <!--        <div class=\"feed-heading\">-->\n        <!--            <h2><b>Services</b></h2>-->\n        <!--        </div>-->\n        <!--        <div class=\"height-95px slide_container\">-->\n        <!--            <div class=\"slider s1 filter-bright-03\"></div>-->\n        <!--            <div class=\"slider s2 filter-bright-03\"></div>-->\n        <!--            <div class=\"slider s3 filter-bright-03\"></div>-->\n        <!--            <div class=\"slider s4 filter-bright-03\"></div>-->\n        <!--        </div>-->\n\n        <div class=\"quick_menus\">\n            <div *ngFor=\"let treatment of treatments\" (click)=\"goServices()\" class=\"menu-container\">\n                <div class=\"menu-image\"><img src=\"{{treatment.url}}\" alt=\"\"></div>\n                <div class=\"menu-text\">{{treatment.name}}</div>\n            </div>\n        </div>\n\n        <div class=\"feed-heading\">\n            <div class=\"heading-text\">\n                <b>Packages</b>\n            </div>\n            <div [routerLink]=\"['/home/packages']\" class=\"know-more\">See All <i class=\"fa fa-angle-right\"></i></div>\n        </div>\n        <div class=\"slide_container\">\n            <div *ngFor=\"let packageData of packageList\" class=\"slider\" (click)=\"onClickPackage(packageData.id)\">\n                <img src=\"{{packageData?.displayImage}}\" alt=\"\">\n            </div>\n        </div>\n\n        <div class=\"feed-heading\">\n            <div class=\"heading-text\">\n                <b>Products</b>\n            </div>\n            <div [routerLink]=\"['/home/products']\" class=\"know-more\">See All <i class=\"fa fa-angle-right\"></i></div>\n        </div>\n        <div class=\"products_container\">\n            <div *ngFor=\"let product of productList, let index = index\" class=\"image-slider-container\">\n                <div class=\"slider-image\">\n                    <img src=\"{{product.url}}\" alt=\"\">\n                </div>\n                <div class=\"slider-text\">\n                    <div class=\"product-name-container\">\n                        <div class=\"product-name\">\n                            {{product.name}}\n                        </div>\n                        <div class=\"product-price-details\">\n                            <div class=\"price-container\">\n                                <div class=\"price\">\n                                    {{product.price}} ₹\n                                </div>\n                                <div class=\"discounted-price\">\n                                    <del> {{product.discountedPrice}} ₹</del>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <add-button (updateCounter)=\"onUpdateCounter($event, index)\"></add-button>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"safety-measures\">\n            <div class=\"margin-bottom-10\">\n                Best-in-class safety measures\n            </div>\n            <div class=\"measures-container margin-bottom-10\">\n                <div class=\"measure\">\n                    <div class=\"measure-image\"><img src=\"assets/mask.png\" alt=\"\"></div>\n                    <div class=\"measure-text\">Usage of mask & gloves</div>\n                </div>\n                <div class=\"measure\">\n                    <div class=\"measure-image\"><img src=\"assets/thermometer.png\" alt=\"\"></div>\n                    <div class=\"measure-text\">Temperature Checks</div>\n                </div>\n                <div class=\"measure\">\n                    <div class=\"measure-image\"><img src=\"assets/liquid-soap.png\" alt=\"\"></div>\n                    <div class=\"measure-text\">Sanitizations of tools & area</div>\n                </div>\n                <div class=\"measure\">\n                    <div class=\"measure-image\"><img src=\"assets/setu.png\" alt=\"\"></div>\n                    <div class=\"measure-text\">Arogya Setu to ensure Safety</div>\n                </div>\n            </div>\n        </div>\n        <!--        <div class=\"safety-measures\">-->\n        <!--            <div class=\"margin-bottom-10\">-->\n        <!--                We use best brands in 1-time use-->\n        <!--            </div>-->\n        <!--            <div style=\"display: flex; flex-wrap: wrap\">-->\n        <!--                <div style=\"flex-basis: 33%; display: flex; justify-content: center; align-items: center; padding: 0 15px\" *ngFor=\"let brand of brandsList\">-->\n        <!--                    <img style=\"width: 70px\" src={{brand.url}} alt=\"\">-->\n        <!--                </div>-->\n        <!--            </div>-->\n        <!--        </div>-->\n        <div class=\"feed-heading\">\n            <div class=\"heading-text\">\n                <b>Our Stylist</b>\n            </div>\n            <div (click)=\"onKnowMore()\" class=\"know-more\">Know More <i class=\"fa fa-angle-right\"></i></div>\n        </div>\n        <div class=\"application-details\">\n            <div class=\"owner-info-container\">\n                <div class=\"owner-image\">\n                    <img src=\"../../../assets/deepaa_bhagwat.jpg\">\n                </div>\n                <div class=\"owner-details\">\n                    <div class=\"owner-name\">Deepaa Bhagwat</div>\n                    <div class=\"social-media-icons\">\n                        <div class=\"fb-icon\"><i class=\"media-icon fa fa-facebook\"></i></div>\n                        <div class=\"insta-icon\"><i class=\"media-icon fa fa-instagram\"></i></div>\n                        <div class=\"linkedin-icon\"><i class=\"media-icon fa fa-linkedin\"></i></div>\n                    </div>\n                </div>\n            </div>\n            <div>\n                <div>\n                    <ul>\n                        <li>Media & Beauty Makeup Diploma · Media Makeup · Fsx · Singapore</li>\n                        <li>Makeup Techniques with Air Brush Machine · Mumbai, Maharashtra</li>\n                        <li>Master Diploma in Makeup Artistry · Singapore</li>\n                        <li>Comite International D’Esthetique Et De Cosmetologie., Zurich.</li>\n                        <li>British Association of Beauty Therapy & Cosmetology, London.</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"copy-rights\">\n            <i class=\"fa fa-copyright\"></i> Copyright 2020 <br> Sandhyadeep Beauty Parlour. <br>\n        </div>\n        <!--        <div class=\"feed-container\">-->\n        <!--            <div class=\"feed-image-container\">-->\n        <!--                <div>-->\n        <!--                    <div class=\"feed-image feed-image-hair\"></div>-->\n        <!--                    <div class=\"feed-text\"> Hair</div>-->\n        <!--                </div>-->\n        <!--            </div>-->\n        <!--            <div class=\"feed-image-container\">-->\n        <!--                <div>-->\n        <!--                    <div class=\"feed-image feed-image-skin\"></div>-->\n        <!--                    <div class=\"feed-text\"> Skin</div>-->\n        <!--                </div>-->\n        <!--            </div>-->\n        <!--            <div class=\"feed-image-container\">-->\n        <!--                <div>-->\n        <!--                    <div class=\"feed-image feed-image-makeup\"></div>-->\n        <!--                    <div class=\"feed-text\"> Makeup</div>-->\n        <!--                </div>-->\n        <!--            </div>-->\n        <!--            <div class=\"feed-image-container\">-->\n        <!--                <div>-->\n        <!--                    <div class=\"feed-image feed-image-course\"></div>-->\n        <!--                    <div class=\"feed-text\"> Courses</div>-->\n        <!--                </div>-->\n        <!--            </div>-->\n        <!--        </div>-->\n    </div>\n\n</ion-content>\n\n";
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


    __webpack_exports__["default"] = ".logo-container {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n.logo-container .logo-text {\n  font-size: 20px;\n  font-weight: 700;\n}\n.logo-container .slogan-text {\n  font-size: 8px;\n}\n.search-bar {\n  position: absolute;\n  z-index: 999;\n  opacity: 0.5;\n}\n.search-bar .searchbar-input-container input {\n  background-color: white !important;\n}\n.feed-sliders {\n  height: 40%;\n}\n.feed-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 18px 0 5px;\n}\n.feed-heading .heading-text {\n  font-size: 20px;\n}\n.know-more {\n  color: #666;\n}\n.feed-sliders .feed-slider {\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-position: center center !important;\n  max-height: 30em;\n}\n.feed-sliders .feed-slider-one {\n  background: url('sandhyadeep_banner.gif');\n}\n.feed-sliders .feed-slider-two {\n  background: url('beauty-2.jpg');\n}\n.feed-sliders .feed-slider-three {\n  background: url('beauty-3.jpg');\n}\n.feed-container {\n  /*background: linear-gradient(214deg, rgba(40, 29, 232, 1) -25%, rgb(81, 36, 82) 63%);*/\n  padding: 30px;\n  border: 1px solid #fff;\n}\n.feed-container .feed-image-container > div {\n  margin-bottom: 30px;\n  position: relative;\n  border: 1px solid #BFBFBF;\n  background-color: white;\n  box-shadow: 5px 10px 29px #aaaaaa94;\n}\n.feed-container .feed-image-container .feed-image {\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  cursor: pointer;\n  background-position: center center !important;\n  height: 200px;\n}\n.feed-container .feed-image-container .feed-image-hair {\n  background-image: url('hair.jpeg');\n}\n.feed-container .feed-image-container .feed-image-skin {\n  background-image: url('skin.jpeg');\n}\n.feed-container .feed-image-container .feed-image-makeup {\n  background-image: url('makeup.jpeg');\n}\n.feed-container .feed-image-container .feed-image-course {\n  background-image: url('courses.jpeg');\n}\n.feed-container .feed-image-container .feed-text {\n  background: linear-gradient(214deg, #281de8 -25%, #512452 63%);\n  text-align: center;\n  font-weight: bold;\n  color: white;\n  bottom: 0;\n  width: 100%;\n  padding: 15px;\n  font-size: 20px;\n}\n.height-95px {\n  height: 95px;\n}\n.height-200px {\n  height: 200px;\n}\n.slide_container {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n}\n.slide_container::-webkit-scrollbar {\n  display: none;\n}\n.menu-container {\n  padding: 0 15px;\n  font-size: 14px;\n}\n.products_container {\n  display: flex;\n  overflow: scroll;\n}\n.products_container::-webkit-scrollbar {\n  display: none;\n}\n.products_container .image-slider-container {\n  display: flex;\n  border-radius: 10px;\n  background-color: white;\n  width: 200px;\n  border: 1px solid #BFBFBF;\n  margin: 0 10px 5px;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.products_container .image-slider-container:first-child {\n  margin: 0 10px 5px 0;\n}\n.products_container .image-slider-container:last-child {\n  margin: 0 0 5px 10px;\n}\n.products_container .image-slider-container .slider-image {\n  width: 200px;\n  height: 200px;\n  overflow: hidden;\n}\n.products_container .image-slider-container .slider-image img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%;\n  width: 100%;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.products_container .image-slider-container .slider-text {\n  line-height: 1.3;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.products_container .image-slider-container .slider-text .product-name-container {\n  display: flex;\n  flex-direction: column;\n}\n.products_container .image-slider-container .slider-text .product-name {\n  font-size: 16px;\n  font-weight: bold;\n}\n.products_container .image-slider-container .slider-text .product-price-details {\n  display: flex;\n  justify-content: space-between;\n}\n.products_container .image-slider-container .slider-text .product-price-details .price-container {\n  display: flex;\n}\n.products_container .image-slider-container .slider-text .product-price-details .price-container .price {\n  color: #2d2c2c;\n  font-size: 14px;\n}\n.products_container .image-slider-container .slider-text .product-price-details .price-container .discounted-price {\n  color: #666;\n  font-size: 14px;\n  margin-left: 5px;\n}\n.slide_container .slider {\n  display: inline-block;\n  background-color: white;\n  width: 80%;\n  margin: 0 10px 5px;\n}\n.slide_container .slider img {\n  height: 150px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 10px;\n}\n.slide_container .slider:first-child {\n  margin: 0 10px 5px 0;\n}\n.slide_container .slider:last-child {\n  margin: 0 0 5px 10px;\n}\n.slide_container .slider.s1 {\n  background-image: url('s1.jpg');\n}\n.slide_container .slider.s2 {\n  background-image: url('s2.jpg');\n}\n.slide_container .slider.s3 {\n  background-image: url('s3.jpg');\n}\n.slide_container .slider.s4 {\n  background-image: url('s4.jpeg');\n}\n.filter-bright-03 {\n  -webkit-filter: brightness(0.3);\n          filter: brightness(0.3);\n}\n.slide_container .slider.p1 {\n  background-image: url('s1.jpg');\n}\n.slide_container .slider.p2 {\n  background-image: url('s2.jpg');\n}\n.slide_container .slider.p3 {\n  background-image: url('s3.jpg');\n}\n.slide_container .slider.p4 {\n  background-image: url('s4.jpeg');\n}\n.searchbar-input.sc-ion-searchbar-ios {\n  background: white !important;\n}\n.main-container {\n  background: #d3d3d34f;\n}\n.quick_menus {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  margin: 15px 0;\n  border-radius: 10px;\n  border: 1px solid lightgray;\n  box-shadow: -3px 4px 25px #aaaaaa94;\n  padding: 7px;\n}\n.quick_menus div.menu-container {\n  flex-basis: 33%;\n  padding: 2%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.quick_menus div.menu-container:nth-child(1) {\n  border-top-left-radius: 12px;\n}\n.quick_menus div.menu-container:nth-child(3) {\n  border-top-right-radius: 12px;\n}\n.quick_menus div.menu-container:nth-child(7) {\n  border-bottom-left-radius: 12px;\n}\n.quick_menus div.menu-container:nth-child(9) {\n  border-bottom-right-radius: 12px;\n}\n.quick_menus div.menu-container .menu-image {\n  height: 65px;\n  width: 65px;\n  border: 2px solid #666;\n  padding: 1px;\n  border-radius: 50%;\n  overflow: hidden;\n  display: inline-block;\n}\n.quick_menus div.menu-container .menu-image img {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.quick_menus div.menu-container .menu-text {\n  padding-top: 5px;\n  font-size: 14px;\n  text-align: center;\n}\n.application-details {\n  margin: 15px 0 0;\n  padding: 5px 0;\n  display: flex;\n  color: white;\n  flex-direction: column;\n  background-image: url('back-3.jpg');\n  background-size: cover;\n  background-position: center center;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.application-details .owner-info-container {\n  flex-basis: 35%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.application-details .owner-info-container .owner-image {\n  width: 85px;\n}\n.application-details .owner-info-container .owner-image img {\n  max-width: 100%;\n  border: 0;\n  border-radius: 50%;\n  margin: 5px 0;\n}\n.application-details .owner-info-container .owner-name {\n  font-size: 16px;\n  text-align: center;\n}\n.application-details .owner-info-container .social-media-icons {\n  display: flex;\n  justify-content: center;\n}\n.application-details .owner-info-container .social-media-icons div {\n  border: 2px solid white;\n  display: inline-block;\n  height: 35px;\n  width: 35px;\n  transition: all 0.5s;\n  text-align: center;\n  margin: 5px 10px;\n  border-radius: 10px;\n}\n.application-details .owner-info-container .social-media-icons div .media-icon {\n  line-height: 32px;\n  font-size: 15px;\n}\n.linkedin-icon {\n  background: #0E76A8;\n}\n.fb-icon {\n  background: #3B5998;\n}\n.insta-icon {\n  background: linear-gradient(to right top, #cc2b5e, #bc2a6d, #a82e7a, #903483, #753a88);\n}\n.copy-rights {\n  padding: 5px 15px;\n  background: #cc2b5efa;\n  color: white;\n  font-weight: bold;\n  font-size: 14px;\n  text-align: center;\n}\n.end-section {\n  padding: 10px 0;\n  background-color: lightgray;\n}\n.safety-measures {\n  margin: 15px 0 10px;\n  display: flex;\n  flex-direction: column;\n  font-size: 20px;\n  text-align: center;\n  font-weight: bold;\n  border: 1px solid #BFBFBF;\n  padding: 10px 0;\n  border-radius: 10px;\n}\n.safety-measures .margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.safety-measures .logo-safe .logo-image {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n}\n.safety-measures .measures-container {\n  display: flex;\n}\n.safety-measures .measures-container .measure {\n  padding: 5px;\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.safety-measures .measures-container .measure .measure-image {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 35px;\n  height: 35px;\n  margin-bottom: 5px;\n}\n.safety-measures .measures-container .measure .measure-text {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvYXBwL3BhZ2VzL2ZlZWQvZmVlZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZlZWQvZmVlZC5wYWdlLnNjc3MiLCIvaG9tZS9sdC0xMDAvc2FuZGh5YWRlZXAxOTkzLXJlcG8vc3JjL3NhbmRoeWFkZWVwLXRoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0RGO0FERUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREVFO0VBQ0UsY0FBQTtBQ0FKO0FESUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDREY7QURFRTtFQUNFLGtDQUFBO0FDQUo7QURPQTtFQUNFLFdBQUE7QUNKRjtBRE9BO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0pGO0FES0U7RUFDRSxlRWhDVTtBRDZCZDtBRE9BO0VBQ0UsV0FBQTtBQ0pGO0FET0E7RUFDRSx1Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsNkNBQUE7RUFDQSxnQkFBQTtBQ0pGO0FET0E7RUFDRSx5Q0FBQTtBQ0pGO0FET0E7RUFDRSwrQkFBQTtBQ0pGO0FET0E7RUFDRSwrQkFBQTtBQ0pGO0FET0E7RUFDRSx1RkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0pGO0FET0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1DQUFBO0FDSkY7QURPQTtFQUNFLHVDQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsNkNBQUE7RUFDQSxhQUFBO0FDSkY7QURPQTtFQUNFLGtDQUFBO0FDSkY7QURPQTtFQUNFLGtDQUFBO0FDSkY7QURPQTtFQUNFLG9DQUFBO0FDSkY7QURPQTtFQUNFLHFDQUFBO0FDSkY7QURPQTtFQUNFLDhEQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDSkY7QURPQTtFQUNDLFlBQUE7QUNKRDtBRE9BO0VBQ0UsYUFBQTtBQ0pGO0FET0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNKRjtBREtFO0VBQ0UsYUFBQTtBQ0hKO0FET0E7RUFDRSxlQUFBO0VBQ0EsZUVqSWtCO0FENkhwQjtBRE9BO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDSkY7QURLRTtFQUNFLGFBQUE7QUNISjtBREtFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUNISjtBRElJO0VBQ0Usb0JBQUE7QUNGTjtBRElJO0VBQ0Usb0JBQUE7QUNGTjtBRElJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0ZOO0FER007RUFDRSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDRFI7QURJSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDRk47QURHTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ0RSO0FER007RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNEUjtBREdNO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDRFI7QURFUTtFQUNFLGFBQUE7QUNBVjtBRENVO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNDWjtBRENVO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NaO0FEUUE7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDTEY7QURNRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLG1CQUFBO0FDSko7QURNRTtFQUNFLG9CQUFBO0FDSko7QURNRTtFQUNFLG9CQUFBO0FDSko7QURRQTtFQUNFLCtCQUFBO0FDTEY7QURRQTtFQUNFLCtCQUFBO0FDTEY7QURRQTtFQUNFLCtCQUFBO0FDTEY7QURRQTtFQUNFLGdDQUFBO0FDTEY7QURRQTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7QUNMRjtBRFFBO0VBQ0UsK0JBQUE7QUNMRjtBRFFBO0VBQ0UsK0JBQUE7QUNMRjtBRFFBO0VBQ0UsK0JBQUE7QUNMRjtBRFFBO0VBQ0UsZ0NBQUE7QUNMRjtBRFFBO0VBQ0UsNEJBQUE7QUNMRjtBRFNBO0VBQ0UscUJBQUE7QUNORjtBRFFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxZQUFBO0FDTEY7QURPRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0xKO0FET0k7RUFDRSw0QkFBQTtBQ0xOO0FEVUk7RUFDRSw2QkFBQTtBQ1JOO0FEYUk7RUFDRSwrQkFBQTtBQ1hOO0FEY0k7RUFDRSxnQ0FBQTtBQ1pOO0FEY0k7RUFNRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUFjLGtCQUFBO0VBQW9CLGdCQUFBO0VBQWtCLHFCQUFBO0FDZDFEO0FEZU07RUFDRSxvQkFBQTtLQUFBLGlCQUFBO0FDYlI7QUQyQ0k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ3pDTjtBRDhDQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDM0NGO0FENkNFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQzNDSjtBRDRDSTtFQUNFLFdBQUE7QUMxQ047QUQyQ007RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ3pDUjtBRDZDSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQzNDTjtBRDhDSTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQzVDTjtBRDZDTTtFQUNFLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDM0NSO0FENENRO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDMUNWO0FEaURBO0VBQ0UsbUJBQUE7QUM5Q0Y7QURnREE7RUFDRSxtQkFBQTtBQzdDRjtBRCtDQTtFQUNFLHNGQUFBO0FDNUNGO0FEK0NBO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQzVDRjtBRCtDQTtFQUNFLGVBQUE7RUFDQSwyQkFBQTtBQzVDRjtBRCtDQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQzVDRjtBRDZDRTtFQUNFLG1CQUFBO0FDM0NKO0FEOENJO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUM1Q047QURnREU7RUFDRSxhQUFBO0FDOUNKO0FEK0NJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQzdDTjtBRDhDTTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDNUNSO0FEOENNO0VBQ0Usa0JBQUE7QUM1Q1IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mZWVkL2ZlZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3NhbmRoeWFkZWVwLXRoZW1lXCI7XG5cbi5sb2dvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIC5sb2dvLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIC5zbG9nYW4tdGV4dCB7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gIH1cbn1cblxuLnNlYXJjaC1iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgb3BhY2l0eTogMC41O1xuICAuc2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lciBpbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgfVxufVxuLy8uZmVlZC1pbWFnZXMge1xuLy8gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjUpO1xuLy99XG5cbi5mZWVkLXNsaWRlcnMge1xuICBoZWlnaHQ6IDQwJTtcbn1cblxuLmZlZWQtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxOHB4IDAgNXB4O1xuICAuaGVhZGluZy10ZXh0IHtcbiAgICBmb250LXNpemU6ICRoZWFkZXItc2l6ZTtcbiAgfVxufVxuXG4ua25vdy1tb3JlIHtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXIgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMzBlbTtcbn1cblxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXItb25lIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3NhbmRoeWFkZWVwX2Jhbm5lci5naWZcIik7XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLXR3byB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iZWF1dHktMi5qcGdcIik7XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLXRocmVlIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JlYXV0eS0zLmpwZ1wiKTtcbn1cblxuLmZlZWQtY29udGFpbmVyIHtcbiAgLypiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjE0ZGVnLCByZ2JhKDQwLCAyOSwgMjMyLCAxKSAtMjUlLCByZ2IoODEsIDM2LCA4MikgNjMlKTsqL1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xufVxuXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyID4gZGl2IHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQkZCRkJGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogNXB4IDEwcHggMjlweCAjYWFhYWFhOTQ7XG59XG5cbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtaW1hZ2UtaGFpciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9oYWlyLmpwZWdcIik7XG59XG5cbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtaW1hZ2Utc2tpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9za2luLmpwZWdcIik7XG59XG5cbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtaW1hZ2UtbWFrZXVwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL21ha2V1cC5qcGVnXCIpO1xufVxuXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvdXJzZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9jb3Vyc2VzLmpwZWdcIik7XG59XG5cbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtdGV4dCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMTRkZWcsIHJnYmEoNDAsIDI5LCAyMzIsIDEpIC0yNSUsIHJnYig4MSwgMzYsIDgyKSA2MyUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmhlaWdodC05NXB4IHtcbiBoZWlnaHQ6IDk1cHg7XG59XG5cbi5oZWlnaHQtMjAwcHgge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uc2xpZGVfY29udGFpbmVyIHtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5tZW51LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgZm9udC1zaXplOiAkcmVndWxhci1mb250LXNpemU7XG59XG5cbi5wcm9kdWN0c19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaW1hZ2Utc2xpZGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQkZCRkJGO1xuICAgIG1hcmdpbjogMCAxMHB4IDVweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbjogMCAxMHB4IDVweCAwO1xuICAgIH1cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luOiAwIDAgNXB4IDEwcHg7XG4gICAgfVxuICAgIC5zbGlkZXItaW1hZ2Uge1xuICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBpbWcge1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5zbGlkZXItdGV4dCB7XG4gICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLnByb2R1Y3QtbmFtZS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuICAgICAgLnByb2R1Y3QtbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgICAucHJvZHVjdC1wcmljZS1kZXRhaWxzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAucHJpY2UtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIC5wcmljZSB7XG4gICAgICAgICAgICBjb2xvcjogIzJkMmMyYztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRpc2NvdW50ZWQtcHJpY2Uge1xuICAgICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlcntcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIDEwcHggNXB4O1xuICBpbWcge1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuICAmOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW46IDAgMTBweCA1cHggMDtcbiAgfVxuICAmOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbjogMCAwIDVweCAxMHB4O1xuICB9XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlci5zMSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3MxLmpwZycpO1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIuczIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zMi5qcGcnKTtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnMzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvczMuanBnJyk7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlci5zNCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3M0LmpwZWcnKTtcbn1cblxuLmZpbHRlci1icmlnaHQtMDMge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC4zKTtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnAxIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvczEuanBnJyk7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlci5wMiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3MyLmpwZycpO1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIucDMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zMy5qcGcnKTtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnA0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvczQuanBlZycpO1xufVxuXG4uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zIHtcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuXG4ubWFpbi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZDNkM2QzNGY7XG59XG4ucXVpY2tfbWVudXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogMTVweCAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJveC1zaGFkb3c6IC0zcHggNHB4IDI1cHggI2FhYWFhYTk0O1xuICBwYWRkaW5nOiA3cHg7XG5cbiAgZGl2Lm1lbnUtY29udGFpbmVyIHtcbiAgICBmbGV4LWJhc2lzOiAzMyU7XG4gICAgcGFkZGluZzogMiU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy9ib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgJjpudGgtY2hpbGQoMSkge1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcbiAgICB9XG4gICAgLy8mOm50aC1jaGlsZCgyKSB7XG4gICAgLy8gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgLy99XG4gICAgJjpudGgtY2hpbGQoMykge1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG4gICAgfVxuICAgIC8vJjpudGgtY2hpbGQoNCkge31cbiAgICAvLyY6bnRoLWNoaWxkKDUpIHt9XG4gICAgLy8mOm50aC1jaGlsZCg2KSB7fVxuICAgICY6bnRoLWNoaWxkKDcpIHtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7XG4gICAgfVxuICAgIC8vJjpudGgtY2hpbGQoOCkge31cbiAgICAmOm50aC1jaGlsZCg5KSB7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcbiAgICB9XG4gICAgLm1lbnUtaW1hZ2Uge1xuICAgICAgLy9ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAvL2JhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgICAgIC8vYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAgICAgLy9iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3M0LmpwZWcnKTtcbiAgICAgIGhlaWdodDogNjVweDtcbiAgICAgIHdpZHRoOiA2NXB4O1xuICAgICAgYm9yZGVyOiAycHggc29saWQgIzY2NjtcbiAgICAgIHBhZGRpbmc6IDFweDsgYm9yZGVyLXJhZGl1czogNTAlOyBvdmVyZmxvdzogaGlkZGVuOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBpbWcge1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIH1cbiAgICAgIC8vJi5pbWFnZS0xIHtcbiAgICAgIC8vICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy92ZWN0b3ItaGFpcmN1dC5qcGcnKTtcbiAgICAgIC8vfVxuICAgICAgLy8mLmltYWdlLTIge1xuICAgICAgLy8gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3RocmVkZGluZzIuanBlZycpO1xuICAgICAgLy99XG4gICAgICAvLyYuaW1hZ2UtMyB7XG4gICAgICAvLyAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvdmVjdG9yX2ZhY2lhbC5qcGcnKTtcbiAgICAgIC8vfVxuICAgICAgLy8mLmltYWdlLTQge1xuICAgICAgLy8gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL21hbmljdXJlLmpwZWcnKTtcbiAgICAgIC8vfVxuICAgICAgLy8mLmltYWdlLTUge1xuICAgICAgLy8gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3Byb2R1Y3RzLmpwZWcnKTtcbiAgICAgIC8vfVxuICAgICAgLy8mLmltYWdlLTYge1xuICAgICAgLy8gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3VwcGVyTGlwcy5qcGVnJyk7XG4gICAgICAvL31cbiAgICAgIC8vJi5pbWFnZS03IHtcbiAgICAgIC8vICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9icmlkYWwuanBlZycpO1xuICAgICAgLy99XG4gICAgICAvLyYuaW1hZ2UtOCB7XG4gICAgICAvLyAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvd2F4aW5nLmpwZWcnKTtcbiAgICAgIC8vfVxuICAgICAgLy8mLmltYWdlLTkge1xuICAgICAgLy8gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2NvdXJzZXMuanBlZycpO1xuICAgICAgLy99XG4gICAgfVxuICAgIC5tZW51LXRleHQge1xuICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuLmFwcGxpY2F0aW9uLWRldGFpbHMge1xuICBtYXJnaW46IDE1cHggMCAwO1xuICBwYWRkaW5nOiA1cHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6IHdoaXRlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iYWNrLTMuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAvL2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxOTNkZWcsICNjYzJiNWUgMiUsICM3NTNhODggODQlKTtcbiAgLm93bmVyLWluZm8tY29udGFpbmVyIHtcbiAgICBmbGV4LWJhc2lzOiAzNSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAub3duZXItaW1hZ2Uge1xuICAgICAgd2lkdGg6IDg1cHg7XG4gICAgICBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5vd25lci1uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuc29jaWFsLW1lZGlhLWljb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGRpdiB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogNXB4IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIC5tZWRpYS1pY29uIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmxpbmtlZGluLWljb24ge1xuICBiYWNrZ3JvdW5kOiAjMEU3NkE4O1xufVxuLmZiLWljb24ge1xuICBiYWNrZ3JvdW5kOiAjM0I1OTk4O1xufVxuLmluc3RhLWljb24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjY2MyYjVlLCAjYmMyYTZkLCAjYTgyZTdhLCAjOTAzNDgzLCAjNzUzYTg4KTtcbn1cblxuLmNvcHktcmlnaHRzIHtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNjYzJiNWVmYTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lbmQtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuXG4uc2FmZXR5LW1lYXN1cmVzIHtcbiAgbWFyZ2luOiAxNXB4IDAgMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQkZCRkJGO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC5tYXJnaW4tYm90dG9tLTEwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5sb2dvLXNhZmUge1xuICAgIC5sb2dvLWltYWdlIHtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICAgIC5sb2dvLXRleHQge31cbiAgfVxuICAubWVhc3VyZXMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC5tZWFzdXJlIHtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIC5tZWFzdXJlLWltYWdlIHtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgIH1cbiAgICAgIC5tZWFzdXJlLXRleHQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiIsIi5sb2dvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG4ubG9nby1jb250YWluZXIgLmxvZ28tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5sb2dvLWNvbnRhaW5lciAuc2xvZ2FuLXRleHQge1xuICBmb250LXNpemU6IDhweDtcbn1cblxuLnNlYXJjaC1iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgb3BhY2l0eTogMC41O1xufVxuLnNlYXJjaC1iYXIgLnNlYXJjaGJhci1pbnB1dC1jb250YWluZXIgaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uZmVlZC1zbGlkZXJzIHtcbiAgaGVpZ2h0OiA0MCU7XG59XG5cbi5mZWVkLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMThweCAwIDVweDtcbn1cbi5mZWVkLWhlYWRpbmcgLmhlYWRpbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmtub3ctbW9yZSB7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlciB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDMwZW07XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLW9uZSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zYW5kaHlhZGVlcF9iYW5uZXIuZ2lmXCIpO1xufVxuXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci10d28ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmVhdXR5LTIuanBnXCIpO1xufVxuXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci10aHJlZSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iZWF1dHktMy5qcGdcIik7XG59XG5cbi5mZWVkLWNvbnRhaW5lciB7XG4gIC8qYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIxNGRlZywgcmdiYSg0MCwgMjksIDIzMiwgMSkgLTI1JSwgcmdiKDgxLCAzNiwgODIpIDYzJSk7Ki9cbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbn1cblxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciA+IGRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0JGQkZCRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDVweCAxMHB4IDI5cHggI2FhYWFhYTk0O1xufVxuXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLWltYWdlIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLWltYWdlLWhhaXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaGFpci5qcGVnXCIpO1xufVxuXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLWltYWdlLXNraW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvc2tpbi5qcGVnXCIpO1xufVxuXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLWltYWdlLW1ha2V1cCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9tYWtldXAuanBlZ1wiKTtcbn1cblxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb3Vyc2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvY291cnNlcy5qcGVnXCIpO1xufVxuXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLXRleHQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjE0ZGVnLCAjMjgxZGU4IC0yNSUsICM1MTI0NTIgNjMlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5oZWlnaHQtOTVweCB7XG4gIGhlaWdodDogOTVweDtcbn1cblxuLmhlaWdodC0yMDBweCB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5zbGlkZV9jb250YWluZXIge1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5zbGlkZV9jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1lbnUtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5wcm9kdWN0c19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuLnByb2R1Y3RzX2NvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnByb2R1Y3RzX2NvbnRhaW5lciAuaW1hZ2Utc2xpZGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCRkJGQkY7XG4gIG1hcmdpbjogMCAxMHB4IDVweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnByb2R1Y3RzX2NvbnRhaW5lciAuaW1hZ2Utc2xpZGVyLWNvbnRhaW5lcjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbjogMCAxMHB4IDVweCAwO1xufVxuLnByb2R1Y3RzX2NvbnRhaW5lciAuaW1hZ2Utc2xpZGVyLWNvbnRhaW5lcjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luOiAwIDAgNXB4IDEwcHg7XG59XG4ucHJvZHVjdHNfY29udGFpbmVyIC5pbWFnZS1zbGlkZXItY29udGFpbmVyIC5zbGlkZXItaW1hZ2Uge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucHJvZHVjdHNfY29udGFpbmVyIC5pbWFnZS1zbGlkZXItY29udGFpbmVyIC5zbGlkZXItaW1hZ2UgaW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuLnByb2R1Y3RzX2NvbnRhaW5lciAuaW1hZ2Utc2xpZGVyLWNvbnRhaW5lciAuc2xpZGVyLXRleHQge1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvZHVjdHNfY29udGFpbmVyIC5pbWFnZS1zbGlkZXItY29udGFpbmVyIC5zbGlkZXItdGV4dCAucHJvZHVjdC1uYW1lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucHJvZHVjdHNfY29udGFpbmVyIC5pbWFnZS1zbGlkZXItY29udGFpbmVyIC5zbGlkZXItdGV4dCAucHJvZHVjdC1uYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5wcm9kdWN0c19jb250YWluZXIgLmltYWdlLXNsaWRlci1jb250YWluZXIgLnNsaWRlci10ZXh0IC5wcm9kdWN0LXByaWNlLWRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucHJvZHVjdHNfY29udGFpbmVyIC5pbWFnZS1zbGlkZXItY29udGFpbmVyIC5zbGlkZXItdGV4dCAucHJvZHVjdC1wcmljZS1kZXRhaWxzIC5wcmljZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnByb2R1Y3RzX2NvbnRhaW5lciAuaW1hZ2Utc2xpZGVyLWNvbnRhaW5lciAuc2xpZGVyLXRleHQgLnByb2R1Y3QtcHJpY2UtZGV0YWlscyAucHJpY2UtY29udGFpbmVyIC5wcmljZSB7XG4gIGNvbG9yOiAjMmQyYzJjO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ucHJvZHVjdHNfY29udGFpbmVyIC5pbWFnZS1zbGlkZXItY29udGFpbmVyIC5zbGlkZXItdGV4dCAucHJvZHVjdC1wcmljZS1kZXRhaWxzIC5wcmljZS1jb250YWluZXIgLmRpc2NvdW50ZWQtcHJpY2Uge1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgMTBweCA1cHg7XG59XG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIgaW1nIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luOiAwIDEwcHggNXB4IDA7XG59XG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXI6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbjogMCAwIDVweCAxMHB4O1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIuczEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvczEuanBnXCIpO1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIuczIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvczIuanBnXCIpO1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIuczMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvczMuanBnXCIpO1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIuczQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvczQuanBlZ1wiKTtcbn1cblxuLmZpbHRlci1icmlnaHQtMDMge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC4zKTtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnAxIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3MxLmpwZ1wiKTtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnAyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3MyLmpwZ1wiKTtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnAzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3MzLmpwZ1wiKTtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnA0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3M0LmpwZWdcIik7XG59XG5cbi5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3Mge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZDNkM2QzNGY7XG59XG5cbi5xdWlja19tZW51cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm94LXNoYWRvdzogLTNweCA0cHggMjVweCAjYWFhYWFhOTQ7XG4gIHBhZGRpbmc6IDdweDtcbn1cbi5xdWlja19tZW51cyBkaXYubWVudS1jb250YWluZXIge1xuICBmbGV4LWJhc2lzOiAzMyU7XG4gIHBhZGRpbmc6IDIlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5xdWlja19tZW51cyBkaXYubWVudS1jb250YWluZXI6bnRoLWNoaWxkKDEpIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcbn1cbi5xdWlja19tZW51cyBkaXYubWVudS1jb250YWluZXI6bnRoLWNoaWxkKDMpIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG59XG4ucXVpY2tfbWVudXMgZGl2Lm1lbnUtY29udGFpbmVyOm50aC1jaGlsZCg3KSB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7XG59XG4ucXVpY2tfbWVudXMgZGl2Lm1lbnUtY29udGFpbmVyOm50aC1jaGlsZCg5KSB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xufVxuLnF1aWNrX21lbnVzIGRpdi5tZW51LWNvbnRhaW5lciAubWVudS1pbWFnZSB7XG4gIGhlaWdodDogNjVweDtcbiAgd2lkdGg6IDY1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM2NjY7XG4gIHBhZGRpbmc6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ucXVpY2tfbWVudXMgZGl2Lm1lbnUtY29udGFpbmVyIC5tZW51LWltYWdlIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLnF1aWNrX21lbnVzIGRpdi5tZW51LWNvbnRhaW5lciAubWVudS10ZXh0IHtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hcHBsaWNhdGlvbi1kZXRhaWxzIHtcbiAgbWFyZ2luOiAxNXB4IDAgMDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JhY2stMy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuLmFwcGxpY2F0aW9uLWRldGFpbHMgLm93bmVyLWluZm8tY29udGFpbmVyIHtcbiAgZmxleC1iYXNpczogMzUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5hcHBsaWNhdGlvbi1kZXRhaWxzIC5vd25lci1pbmZvLWNvbnRhaW5lciAub3duZXItaW1hZ2Uge1xuICB3aWR0aDogODVweDtcbn1cbi5hcHBsaWNhdGlvbi1kZXRhaWxzIC5vd25lci1pbmZvLWNvbnRhaW5lciAub3duZXItaW1hZ2UgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiA1cHggMDtcbn1cbi5hcHBsaWNhdGlvbi1kZXRhaWxzIC5vd25lci1pbmZvLWNvbnRhaW5lciAub3duZXItbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFwcGxpY2F0aW9uLWRldGFpbHMgLm93bmVyLWluZm8tY29udGFpbmVyIC5zb2NpYWwtbWVkaWEtaWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5hcHBsaWNhdGlvbi1kZXRhaWxzIC5vd25lci1pbmZvLWNvbnRhaW5lciAuc29jaWFsLW1lZGlhLWljb25zIGRpdiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDM1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uYXBwbGljYXRpb24tZGV0YWlscyAub3duZXItaW5mby1jb250YWluZXIgLnNvY2lhbC1tZWRpYS1pY29ucyBkaXYgLm1lZGlhLWljb24ge1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ubGlua2VkaW4taWNvbiB7XG4gIGJhY2tncm91bmQ6ICMwRTc2QTg7XG59XG5cbi5mYi1pY29uIHtcbiAgYmFja2dyb3VuZDogIzNCNTk5ODtcbn1cblxuLmluc3RhLWljb24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjY2MyYjVlLCAjYmMyYTZkLCAjYTgyZTdhLCAjOTAzNDgzLCAjNzUzYTg4KTtcbn1cblxuLmNvcHktcmlnaHRzIHtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNjYzJiNWVmYTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lbmQtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuXG4uc2FmZXR5LW1lYXN1cmVzIHtcbiAgbWFyZ2luOiAxNXB4IDAgMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQkZCRkJGO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uc2FmZXR5LW1lYXN1cmVzIC5tYXJnaW4tYm90dG9tLTEwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5zYWZldHktbWVhc3VyZXMgLmxvZ28tc2FmZSAubG9nby1pbWFnZSB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uc2FmZXR5LW1lYXN1cmVzIC5tZWFzdXJlcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnNhZmV0eS1tZWFzdXJlcyAubWVhc3VyZXMtY29udGFpbmVyIC5tZWFzdXJlIHtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2FmZXR5LW1lYXN1cmVzIC5tZWFzdXJlcy1jb250YWluZXIgLm1lYXN1cmUgLm1lYXN1cmUtaW1hZ2Uge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLnNhZmV0eS1tZWFzdXJlcyAubWVhc3VyZXMtY29udGFpbmVyIC5tZWFzdXJlIC5tZWFzdXJlLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59IiwiJHByaW1hcnktY29sb3I6ICNjYzJiNWU7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjNzUzYTg4O1xuXG4kcmVndWxhci1mb250LXNpemU6IDE0cHg7XG4kZm9udC1zaXplLTE6IDE2cHg7XG4kaGVhZGVyLXNpemU6IDIwcHg7XG4kZm9udC1zaXplLTM6IDMwcHg7XG5cbiRidXR0b24taGVpZ2h0OiA0NXB4O1xuXG4iXX0= */";
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
        this.brandsList = [{
          name: 'Matrix',
          url: 'assets/matrix.png'
        }, {
          name: 'Lorial',
          url: 'assets/lorial.png'
        }, {
          name: 'O3',
          url: 'assets/03.png'
        }, {
          name: 'Shehnaj',
          url: 'assets/shahnaz-husain.gif'
        }, {
          name: 'MAC',
          url: 'assets/mac.jpg'
        }, {
          name: 'olay',
          url: 'assets/olay.png'
        }];
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
  }
}]);
//# sourceMappingURL=pages-feed-feed-module-es5.js.map