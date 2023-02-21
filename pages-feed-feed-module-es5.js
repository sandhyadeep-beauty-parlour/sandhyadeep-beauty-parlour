function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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


    __webpack_exports__["default"] = "<sandhyadeep-header class=\"z-index-999\"></sandhyadeep-header>\r\n<ion-content (ionScroll)=\"onIonScroll($event)\"  [scrollEvents]=\"true\">\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshPage($event)\">\r\n        <ion-refresher-content pulling-icon=\"arrow-dropdown\" refreshing-spinner=\"circles\">\r\n\r\n        </ion-refresher-content>\r\n    </ion-refresher>\r\n    <ion-slides #bannerSlider (ionSlidesDidLoad)=\"slidesDidLoad($event)\" (ionSlidePrevEnd)=\"onLastBannerSlide()\"  class=\"feed-sliders\" pager=\"true\" [options]=\"slideOpts\">\r\n        <ion-slide class=\"feed-images feed-slider feed-slider-one\">\r\n\r\n        </ion-slide>\r\n        <ion-slide class=\"feed-images feed-slider feed-slider-two\">\r\n\r\n        </ion-slide>\r\n        <ion-slide class=\"feed-images feed-slider feed-slider-three\">\r\n\r\n        </ion-slide>\r\n    </ion-slides>\r\n\r\n    <div  #animationRef class=\"menu-container\">\r\n        <div class=\"quick_menus\">\r\n            <ng-container *ngFor=\"let treatment of serviceTypesList; let index = index\">\r\n                <div [ngStyle]=\"{'animation-delay': (index+1)/6 + 's'}\" [ngClass]=\"{ animate__animated: changeAnim1, animate__fadeInRight: changeAnim1 }\"  (click)=\"goServices()\" class=\"animate__animated animate__fadeInRight menu-container\">\r\n                    <div class=\"menu-image\"><img src=\"{{treatment.url}}\" alt=\"\"></div>\r\n                    <div class=\"menu-text\">{{treatment.name}}</div>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n\r\n        <div class=\"feed-heading\">\r\n            <div class=\"heading-text\">\r\n                <b>Packages</b>\r\n            </div>\r\n            <div [routerLink]=\"['//packages']\" class=\"know-more\">See All <i class=\"fa fa-angle-right\"></i></div>\r\n        </div>\r\n        <div [ngClass]=\"{ animate__animated: changeAnim2, animate__bounceIn: changeAnim2, animate__fast: changeAnim2 }\" #animationRef class=\"slide_container\">\r\n            <ion-content scroll-y=\"false\" [fullscreen]=\"true\">\r\n                <ion-slides (ionSlidePrevEnd)=\"onLastPackageSlide()\" #packagesSlider [options]=\"packagesOption\">\r\n                    <ion-slide *ngFor=\"let packageData of packageList\">\r\n                        <ion-card>\r\n                            <img src=\"{{packageData?.displayImage}}\" alt=\"\">\r\n                        </ion-card>\r\n                    </ion-slide>\r\n                </ion-slides>\r\n            </ion-content>\r\n        </div>\r\n\r\n<!--        Removed products for now -->\r\n<!--        <div class=\"feed-heading\">-->\r\n<!--            <div class=\"heading-text\">-->\r\n<!--                <b>Products</b>-->\r\n<!--            </div>-->\r\n<!--            <div [routerLink]=\"['//products']\" class=\"know-more\">See All <i class=\"fa fa-angle-right\"></i></div>-->\r\n<!--        </div>-->\r\n<!--        <div class=\"products_container\">-->\r\n<!--            <div *ngFor=\"let product of productList, let index = index\" class=\"image-slider-container\">-->\r\n<!--                <div class=\"slider-image\">-->\r\n<!--                    <img src=\"{{product.url}}\" alt=\"\">-->\r\n<!--                </div>-->\r\n<!--                <div class=\"slider-text\">-->\r\n<!--                    <div class=\"product-name-container\">-->\r\n<!--                        <div class=\"product-name\">-->\r\n<!--                            {{product.name}}-->\r\n<!--                        </div>-->\r\n<!--                        <div class=\"product-price-details\">-->\r\n<!--                            <div class=\"price-container\">-->\r\n<!--                                <div class=\"price\">-->\r\n<!--                                    {{product.price}} ₹-->\r\n<!--                                </div>-->\r\n<!--                                <div class=\"discounted-price\">-->\r\n<!--                                    <del> {{product.discountedPrice}} ₹</del>-->\r\n<!--                                </div>-->\r\n<!--                            </div>-->\r\n<!--                        </div>-->\r\n<!--                    </div>-->\r\n<!--                    <add-button (updateCounter)=\"onUpdateCounter($event, index)\"></add-button>-->\r\n<!--                </div>-->\r\n<!--            </div>-->\r\n<!--        </div>-->\r\n\r\n        <div class=\"safety-measures\">\r\n            <div class=\"margin-bottom-10\">\r\n                Best-in-class safety measures\r\n            </div>\r\n            <div class=\"measures-container margin-bottom-10\">\r\n                <div class=\"measure\">\r\n                    <div class=\"measure-image\"><img src=\"assets/mask.png\" alt=\"\"></div>\r\n                    <div class=\"measure-text\">Usage of mask & gloves</div>\r\n                </div>\r\n                <div class=\"measure\">\r\n                    <div class=\"measure-image\"><img src=\"assets/thermometer.png\" alt=\"\"></div>\r\n                    <div class=\"measure-text\">Temperature Checks</div>\r\n                </div>\r\n                <div class=\"measure\">\r\n                    <div class=\"measure-image\"><img src=\"assets/liquid-soap.png\" alt=\"\"></div>\r\n                    <div class=\"measure-text\">Sanitizations of tools & area</div>\r\n                </div>\r\n                <div class=\"measure\">\r\n                    <div class=\"measure-image\"><img src=\"assets/setu.png\" alt=\"\"></div>\r\n                    <div class=\"measure-text\">Arogya Setu to ensure Safety</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"feed-heading\">\r\n            <div class=\"heading-text\">\r\n                <b>Our Stylist</b>\r\n            </div>\r\n            <div (click)=\"onKnowMore()\" class=\"know-more\">Know More <i class=\"fa fa-angle-right\"></i></div>\r\n        </div>\r\n        <div class=\"application-details\">\r\n            <div class=\"owner-info-container\">\r\n                <div [routerLink]=\"['//about-us']\" class=\"owner-image\">\r\n                    <img src=\"../../../assets/deepaa_bhagwat.jpg\">\r\n                </div>\r\n                <div class=\"owner-details\">\r\n                    <div class=\"owner-name\">Deepaa Bhagwat</div>\r\n                    <div class=\"social-media-icons\">\r\n                        <div class=\"fb-icon\"><i class=\"media-icon fa fa-facebook\"></i></div>\r\n                        <div class=\"insta-icon\"><i class=\"media-icon fa fa-instagram\"></i></div>\r\n                        <div class=\"linkedin-icon\"><i class=\"media-icon fa fa-linkedin\"></i></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <div>\r\n                    <ul>\r\n                        <li>Media & Beauty Makeup Diploma · Media Makeup · Fsx · Singapore</li>\r\n                        <li>Makeup Techniques with Air Brush Machine · Mumbai, Maharashtra</li>\r\n                        <li>Master Diploma in Makeup Artistry · Singapore</li>\r\n                        <li>Comite International D’Esthetique Et De Cosmetologie., Zurich.</li>\r\n                        <li>British Association of Beauty Therapy & Cosmetology, London.</li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"copy-rights\">\r\n            <i class=\"fa fa-copyright\"></i> Copyright {{todayYear}} <br> Sandhyadeep Beauty Parlour <br>\r\n        </div>\r\n    </div>\r\n\r\n</ion-content>\r\n<app-footer-component></app-footer-component>\r\n<app-logo-spinner></app-logo-spinner>\r\n\r\n";
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
    /* harmony import */


    var _shared_components_logo_spinner_logo_spinner_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared-components/logo-spinner/logo-spinner.module */
    "./src/app/shared-components/logo-spinner/logo-spinner.module.ts");
    /* harmony import */


    var _shared_components_footer_component_footer_component_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared-components/footer-component/footer-component.module */
    "./src/app/shared-components/footer-component/footer-component.module.ts");

    var FeedPageModule = function FeedPageModule() {
      _classCallCheck(this, FeedPageModule);
    };

    FeedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _feed_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeedPageRoutingModule"], _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"], _shared_components_add_button_add_button_module__WEBPACK_IMPORTED_MODULE_8__["AddButtonModule"], _shared_components_logo_spinner_logo_spinner_module__WEBPACK_IMPORTED_MODULE_9__["LogoSpinnerModule"], _shared_components_footer_component_footer_component_module__WEBPACK_IMPORTED_MODULE_10__["FooterComponentModule"]],
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


    __webpack_exports__["default"] = ".logo-container {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n.logo-container .logo-text {\n  font-size: 20px;\n  font-weight: 700;\n}\n.logo-container .slogan-text {\n  font-size: 8px;\n}\n.search-bar {\n  position: absolute;\n  z-index: 999;\n  opacity: 0.5;\n}\n.search-bar .searchbar-input-container input {\n  background-color: white !important;\n}\n.feed-sliders {\n  height: 40%;\n}\n.feed-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 18px 0 5px;\n}\n.feed-heading .heading-text {\n  font-size: 20px;\n}\n.know-more {\n  color: #666;\n}\n.feed-sliders .feed-slider {\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-position: center center !important;\n  max-height: 30em;\n}\n.feed-sliders .feed-slider-one {\n  background: url('beaurty-1.jpg');\n}\n.feed-sliders .feed-slider-two {\n  background: url('beauty-2.jpg');\n}\n.feed-sliders .feed-slider-three {\n  background: url('beauty-3.jpg');\n}\n.feed-container {\n  /*background: linear-gradient(214deg, rgba(40, 29, 232, 1) -25%, rgb(81, 36, 82) 63%);*/\n  padding: 30px;\n  border: 1px solid #fff;\n}\n.feed-container .feed-image-container > div {\n  margin-bottom: 30px;\n  position: relative;\n  border: 1px solid #BFBFBF;\n  background-color: white;\n  box-shadow: 5px 10px 29px #aaaaaa94;\n}\n.feed-container .feed-image-container .feed-image {\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  cursor: pointer;\n  background-position: center center !important;\n  height: 200px;\n}\n.feed-container .feed-image-container .feed-image-hair {\n  background-image: url('hair.jpeg');\n}\n.feed-container .feed-image-container .feed-image-skin {\n  background-image: url('skin.jpeg');\n}\n.feed-container .feed-image-container .feed-image-makeup {\n  background-image: url('makeup.jpeg');\n}\n.feed-container .feed-image-container .feed-image-course {\n  background-image: url('courses.jpeg');\n}\n.feed-container .feed-image-container .feed-text {\n  background: linear-gradient(214deg, #281de8 -25%, #512452 63%);\n  text-align: center;\n  font-weight: bold;\n  color: white;\n  bottom: 0;\n  width: 100%;\n  padding: 15px;\n  font-size: 20px;\n}\n.height-95px {\n  height: 95px;\n}\n.height-200px {\n  height: 200px;\n}\n.slide_container {\n  height: 215px;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n}\n.slide_container ion-card {\n  width: 100%;\n  height: 160px;\n  box-shadow: none;\n  border-radius: 12px;\n}\n.slide_container ion-card img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 100%;\n  transform: scale(1.1, 1.1) rotate(1deg);\n  transition: 600ms all ease-in-out;\n}\n.slide_container .swiper-slide-active {\n  transform: scale(1.05, 1.05);\n}\n.slide_container .swiper-slide-active ion-card img {\n  transform: scale(1, 1);\n}\n.slide_container .swiper-slide {\n  transition: 400ms all ease-in-out;\n}\n.slide_container::-webkit-scrollbar {\n  display: none;\n}\n.menu-container {\n  padding: 0 15px;\n  font-size: 14px;\n}\n.products_container {\n  display: flex;\n  overflow: scroll;\n}\n.products_container .swiper-slide {\n  transition: 400ms all ease-in-out;\n}\n.products_container::-webkit-scrollbar {\n  display: none;\n}\n.products_container .image-slider-container {\n  display: flex;\n  border-radius: 10px;\n  background-color: white;\n  width: 200px;\n  border: 1px solid #BFBFBF;\n  margin: 0 10px 5px;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.products_container .image-slider-container:first-child {\n  margin: 0 10px 5px 0;\n}\n.products_container .image-slider-container:last-child {\n  margin: 0 0 5px 10px;\n}\n.products_container .image-slider-container .slider-image {\n  width: 200px;\n  height: 200px;\n  overflow: hidden;\n}\n.products_container .image-slider-container .slider-image img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%;\n  width: 100%;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.products_container .image-slider-container .slider-text {\n  line-height: 1.3;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.products_container .image-slider-container .slider-text .product-name-container {\n  display: flex;\n  flex-direction: column;\n}\n.products_container .image-slider-container .slider-text .product-name {\n  font-size: 16px;\n  font-weight: bold;\n}\n.products_container .image-slider-container .slider-text .product-price-details {\n  display: flex;\n  justify-content: space-between;\n}\n.products_container .image-slider-container .slider-text .product-price-details .price-container {\n  display: flex;\n}\n.products_container .image-slider-container .slider-text .product-price-details .price-container .price {\n  color: #2d2c2c;\n  font-size: 14px;\n}\n.products_container .image-slider-container .slider-text .product-price-details .price-container .discounted-price {\n  color: #666;\n  font-size: 14px;\n  margin-left: 5px;\n}\n.slide_container .slider {\n  display: inline-block;\n  background-color: white;\n  width: 80%;\n  margin: 0 10px 5px;\n}\n.slide_container .slider img {\n  height: 150px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 10px;\n}\n.slide_container .slider:first-child {\n  margin: 0 10px 5px 0;\n}\n.slide_container .slider:last-child {\n  margin: 0 0 5px 10px;\n}\n.slide_container .slider.s1 {\n  background-image: url('s1.jpg');\n}\n.slide_container .slider.s2 {\n  background-image: url('s2.jpg');\n}\n.slide_container .slider.s3 {\n  background-image: url('s3.jpg');\n}\n.slide_container .slider.s4 {\n  background-image: url('s4.jpeg');\n}\n.filter-bright-03 {\n  -webkit-filter: brightness(0.3);\n          filter: brightness(0.3);\n}\n.slide_container .slider.p1 {\n  background-image: url('s1.jpg');\n}\n.slide_container .slider.p2 {\n  background-image: url('s2.jpg');\n}\n.slide_container .slider.p3 {\n  background-image: url('s3.jpg');\n}\n.slide_container .slider.p4 {\n  background-image: url('s4.jpeg');\n}\n.searchbar-input.sc-ion-searchbar-ios {\n  background: white !important;\n}\n.main-container {\n  background: #d3d3d34f;\n}\n.quick_menus {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  margin: 15px 0;\n  border-radius: 10px;\n  border: 1px solid lightgray;\n  box-shadow: -3px 4px 25px #aaaaaa94;\n  padding: 7px;\n  justify-content: center;\n}\n.quick_menus div.menu-container {\n  flex-basis: 30%;\n  padding: 2%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 3px;\n}\n.quick_menus div.menu-container .menu-image {\n  height: 65px;\n  width: 65px;\n  border: 2px solid #666;\n  padding: 1px;\n  border-radius: 50%;\n  overflow: hidden;\n  display: inline-block;\n}\n.quick_menus div.menu-container .menu-image img {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.quick_menus div.menu-container .menu-text {\n  padding-top: 5px;\n  font-size: 14px;\n  text-align: center;\n}\n.application-details {\n  margin: 15px 0 0;\n  padding: 12px;\n  display: flex;\n  color: white;\n  flex-direction: column;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  background: #614d7f;\n}\n.application-details .owner-info-container {\n  flex-basis: 35%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.application-details .owner-info-container .owner-image {\n  width: 85px;\n}\n.application-details .owner-info-container .owner-image img {\n  max-width: 100%;\n  border: 2px solid #e95c8f;\n  border-radius: 50%;\n  margin: 5px 0;\n  padding: 2px;\n}\n.application-details .owner-info-container .owner-name {\n  font-size: 16px;\n  text-align: center;\n}\n.application-details .owner-info-container .social-media-icons {\n  display: flex;\n  justify-content: center;\n}\n.application-details .owner-info-container .social-media-icons div {\n  border: 2px solid white;\n  display: inline-block;\n  height: 35px;\n  width: 35px;\n  transition: all 0.5s;\n  text-align: center;\n  margin: 5px 10px;\n  border-radius: 10px;\n}\n.application-details .owner-info-container .social-media-icons div .media-icon {\n  line-height: 32px;\n  font-size: 15px;\n}\n.linkedin-icon {\n  background: #0E76A8;\n}\n.fb-icon {\n  background: #3B5998;\n}\n.insta-icon {\n  background: linear-gradient(to right top, #e95c8f, #bc2a6d, #a82e7a, #903483, #614d7f);\n}\n.copy-rights {\n  padding: 5px 15px;\n  background: #e95c8f;\n  color: white;\n  font-weight: bold;\n  font-size: 14px;\n  text-align: center;\n}\n.end-section {\n  padding: 10px 0;\n  background-color: lightgray;\n}\n.safety-measures {\n  margin: 15px 0 10px;\n  display: flex;\n  flex-direction: column;\n  font-size: 20px;\n  text-align: center;\n  font-weight: bold;\n  border: 1px solid #BFBFBF;\n  padding: 10px 0;\n  border-radius: 10px;\n}\n.safety-measures .margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.safety-measures .logo-safe .logo-image {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n}\n.safety-measures .measures-container {\n  display: flex;\n}\n.safety-measures .measures-container .measure {\n  padding: 5px;\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.safety-measures .measures-container .measure .measure-image {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 35px;\n  height: 35px;\n  margin-bottom: 5px;\n}\n.safety-measures .measures-container .measure .measure-text {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmVlZC9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxhcHBcXHBhZ2VzXFxmZWVkXFxmZWVkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZmVlZC9mZWVkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZmVlZC9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxzYW5kaHlhZGVlcC10aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNERjtBREVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQUo7QURFRTtFQUNFLGNBQUE7QUNBSjtBRElBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0RGO0FERUU7RUFDRSxrQ0FBQTtBQ0FKO0FET0E7RUFDRSxXQUFBO0FDSkY7QURPQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNKRjtBREtFO0VBQ0UsZUVoQ1U7QUQ2QmQ7QURPQTtFQUNFLFdBQUE7QUNKRjtBRE9BO0VBQ0UsdUNBQUE7RUFDQSxpQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsZ0JBQUE7QUNKRjtBRE9BO0VBQ0UsZ0NBQUE7QUNKRjtBRE9BO0VBQ0UsK0JBQUE7QUNKRjtBRE9BO0VBQ0UsK0JBQUE7QUNKRjtBRE9BO0VBQ0UsdUZBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNKRjtBRE9BO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQ0FBQTtBQ0pGO0FET0E7RUFDRSx1Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLDZDQUFBO0VBQ0EsYUFBQTtBQ0pGO0FET0E7RUFDRSxrQ0FBQTtBQ0pGO0FET0E7RUFDRSxrQ0FBQTtBQ0pGO0FET0E7RUFDRSxvQ0FBQTtBQ0pGO0FET0E7RUFDRSxxQ0FBQTtBQ0pGO0FET0E7RUFDRSw4REFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0pGO0FET0E7RUFDQyxZQUFBO0FDSkQ7QURPQTtFQUNFLGFBQUE7QUNKRjtBRE9BO0VBNkJFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNoQ0Y7QURDRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDRSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLGlDQUFBO0FDQ047QURHRTtFQUNFLDRCQUFBO0FDREo7QURJTTtFQUNFLHNCQUFBO0FDRlI7QURPRTtFQUNFLGlDQUFBO0FDTEo7QURXRTtFQUNFLGFBQUE7QUNUSjtBRGFBO0VBQ0UsZUFBQTtFQUNBLGVFOUprQjtBRG9KcEI7QURhQTtFQVNFLGFBQUE7RUFDQSxnQkFBQTtBQ2xCRjtBRFNFO0VBQ0UsaUNBQUE7QUNQSjtBRGdCRTtFQUNFLGFBQUE7QUNkSjtBRGdCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FDZEo7QURlSTtFQUNFLG9CQUFBO0FDYk47QURlSTtFQUNFLG9CQUFBO0FDYk47QURlSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNiTjtBRGNNO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ1pSO0FEZUk7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ2JOO0FEY007RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNaUjtBRGNNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDWlI7QURjTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ1pSO0FEYVE7RUFDRSxhQUFBO0FDWFY7QURZVTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDVlo7QURZVTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNWWjtBRG1CQTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNoQkY7QURpQkU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxtQkFBQTtBQ2ZKO0FEaUJFO0VBQ0Usb0JBQUE7QUNmSjtBRGlCRTtFQUNFLG9CQUFBO0FDZko7QURtQkE7RUFDRSwrQkFBQTtBQ2hCRjtBRG1CQTtFQUNFLCtCQUFBO0FDaEJGO0FEbUJBO0VBQ0UsK0JBQUE7QUNoQkY7QURtQkE7RUFDRSxnQ0FBQTtBQ2hCRjtBRG1CQTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7QUNoQkY7QURtQkE7RUFDRSwrQkFBQTtBQ2hCRjtBRG1CQTtFQUNFLCtCQUFBO0FDaEJGO0FEbUJBO0VBQ0UsK0JBQUE7QUNoQkY7QURtQkE7RUFDRSxnQ0FBQTtBQ2hCRjtBRG1CQTtFQUNFLDRCQUFBO0FDaEJGO0FEb0JBO0VBQ0UscUJBQUE7QUNqQkY7QURtQkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ2hCRjtBRGtCRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7QUNqQko7QURrQ0k7RUFNRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUFjLGtCQUFBO0VBQW9CLGdCQUFBO0VBQWtCLHFCQUFBO0FDbEMxRDtBRG1DTTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7QUNqQ1I7QUQrREk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQzdETjtBRGtFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUMvREY7QURpRUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDL0RKO0FEZ0VJO0VBQ0UsV0FBQTtBQzlETjtBRCtETTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUM3RFI7QURpRUk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUMvRE47QURrRUk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNoRU47QURpRU07RUFDRSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQy9EUjtBRGdFUTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQzlEVjtBRHFFQTtFQUNFLG1CQUFBO0FDbEVGO0FEb0VBO0VBQ0UsbUJBQUE7QUNqRUY7QURtRUE7RUFDRSxzRkFBQTtBQ2hFRjtBRG1FQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNoRUY7QURtRUE7RUFDRSxlQUFBO0VBQ0EsMkJBQUE7QUNoRUY7QURtRUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNoRUY7QURpRUU7RUFDRSxtQkFBQTtBQy9ESjtBRGtFSTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDaEVOO0FEb0VFO0VBQ0UsYUFBQTtBQ2xFSjtBRG1FSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNqRU47QURrRU07RUFDRSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2hFUjtBRGtFTTtFQUNFLGtCQUFBO0FDaEVSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmVlZC9mZWVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zYW5kaHlhZGVlcC10aGVtZVwiO1xyXG5cclxuLmxvZ28tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAubG9nby10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIC5zbG9nYW4tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtYmFyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICAuc2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lciBpbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4vLy5mZWVkLWltYWdlcyB7XHJcbi8vICBmaWx0ZXI6IGJyaWdodG5lc3MoMC41KTtcclxuLy99XHJcblxyXG4uZmVlZC1zbGlkZXJzIHtcclxuICBoZWlnaHQ6IDQwJTtcclxufVxyXG5cclxuLmZlZWQtaGVhZGluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDE4cHggMCA1cHg7XHJcbiAgLmhlYWRpbmctdGV4dCB7XHJcbiAgICBmb250LXNpemU6ICRoZWFkZXItc2l6ZTtcclxuICB9XHJcbn1cclxuXHJcbi5rbm93LW1vcmUge1xyXG4gIGNvbG9yOiAjNjY2O1xyXG59XHJcblxyXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlciB7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgbWF4LWhlaWdodDogMzBlbTtcclxufVxyXG5cclxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXItb25lIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmVhdXJ0eS0xLmpwZ1wiKTtcclxufVxyXG5cclxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXItdHdvIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmVhdXR5LTIuanBnXCIpO1xyXG59XHJcblxyXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci10aHJlZSB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JlYXV0eS0zLmpwZ1wiKTtcclxufVxyXG5cclxuLmZlZWQtY29udGFpbmVyIHtcclxuICAvKmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMTRkZWcsIHJnYmEoNDAsIDI5LCAyMzIsIDEpIC0yNSUsIHJnYig4MSwgMzYsIDgyKSA2MyUpOyovXHJcbiAgcGFkZGluZzogMzBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG59XHJcblxyXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyID4gZGl2IHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjQkZCRkJGO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDVweCAxMHB4IDI5cHggI2FhYWFhYTk0O1xyXG59XHJcblxyXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1oYWlyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaGFpci5qcGVnXCIpO1xyXG59XHJcblxyXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLWltYWdlLXNraW4ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9za2luLmpwZWdcIik7XHJcbn1cclxuXHJcbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtaW1hZ2UtbWFrZXVwIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbWFrZXVwLmpwZWdcIik7XHJcbn1cclxuXHJcbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtaW1hZ2UtY291cnNlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvY291cnNlcy5qcGVnXCIpO1xyXG59XHJcblxyXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLXRleHQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMTRkZWcsIHJnYmEoNDAsIDI5LCAyMzIsIDEpIC0yNSUsIHJnYig4MSwgMzYsIDgyKSA2MyUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uaGVpZ2h0LTk1cHgge1xyXG4gaGVpZ2h0OiA5NXB4O1xyXG59XHJcblxyXG4uaGVpZ2h0LTIwMHB4IHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uc2xpZGVfY29udGFpbmVyIHtcclxuICBpb24tY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSkgcm90YXRlKDFkZWcpO1xyXG4gICAgICB0cmFuc2l0aW9uOiA2MDBtcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc3dpcGVyLXNsaWRlLWFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUsIDEuMDUpO1xyXG5cclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc3dpcGVyLXNsaWRlIHtcclxuICAgIHRyYW5zaXRpb246IDQwMG1zIGFsbCBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgaGVpZ2h0OiAyMTVweDtcclxuICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5tZW51LWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMCAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogJHJlZ3VsYXItZm9udC1zaXplO1xyXG59XHJcblxyXG4ucHJvZHVjdHNfY29udGFpbmVyIHtcclxuICAuc3dpcGVyLXNsaWRlIHtcclxuICAgIHRyYW5zaXRpb246IDQwMG1zIGFsbCBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmltYWdlLXNsaWRlci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNCRkJGQkY7XHJcbiAgICBtYXJnaW46IDAgMTBweCA1cHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbjogMCAxMHB4IDVweCAwO1xyXG4gICAgfVxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luOiAwIDAgNXB4IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuc2xpZGVyLWltYWdlIHtcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2xpZGVyLXRleHQge1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC5wcm9kdWN0LW5hbWUtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIH1cclxuICAgICAgLnByb2R1Y3QtbmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgICAgIC5wcm9kdWN0LXByaWNlLWRldGFpbHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIC5wcmljZS1jb250YWluZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIC5wcmljZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMmQyYzJjO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZGlzY291bnRlZC1wcmljZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVye1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbjogMCAxMHB4IDVweDtcclxuICBpbWcge1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICAmOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbjogMCAxMHB4IDVweCAwO1xyXG4gIH1cclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luOiAwIDAgNXB4IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIuczEge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3MxLmpwZycpO1xyXG59XHJcblxyXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIuczIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3MyLmpwZycpO1xyXG59XHJcblxyXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIuczMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3MzLmpwZycpO1xyXG59XHJcblxyXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIuczQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3M0LmpwZWcnKTtcclxufVxyXG5cclxuLmZpbHRlci1icmlnaHQtMDMge1xyXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjMpO1xyXG59XHJcblxyXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIucDEge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3MxLmpwZycpO1xyXG59XHJcblxyXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIucDIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3MyLmpwZycpO1xyXG59XHJcblxyXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIucDMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3MzLmpwZycpO1xyXG59XHJcblxyXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIucDQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3M0LmpwZWcnKTtcclxufVxyXG5cclxuLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvcyB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogI2QzZDNkMzRmO1xyXG59XHJcbi5xdWlja19tZW51cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBtYXJnaW46IDE1cHggMDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBib3gtc2hhZG93OiAtM3B4IDRweCAyNXB4ICNhYWFhYWE5NDtcclxuICBwYWRkaW5nOiA3cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGRpdi5tZW51LWNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWJhc2lzOiAzMCU7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLy9ib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBtYXJnaW46IDNweDtcclxuICAgIC8vYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLy9ib3gtc2hhZG93OiByZ2IoMCAwIDAgLyA1JSkgM3B4IDNweCAxcHg7XHJcblxyXG5cclxuICAgIC8vJjpudGgtY2hpbGQoMSkge1xyXG4gICAgLy8gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEycHg7XHJcbiAgICAvL31cclxuICAgIC8vJjpudGgtY2hpbGQoMykge1xyXG4gICAgLy8gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xyXG4gICAgLy99XHJcbiAgICAvLyY6bnRoLWNoaWxkKDcpIHtcclxuICAgIC8vICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xyXG4gICAgLy99XHJcbiAgICAvLyY6bnRoLWNoaWxkKDkpIHtcclxuICAgIC8vICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcclxuICAgIC8vfVxyXG4gICAgLm1lbnUtaW1hZ2Uge1xyXG4gICAgICAvL2JvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgLy9iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gICAgICAvL2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zNC5qcGVnJyk7XHJcbiAgICAgIGhlaWdodDogNjVweDtcclxuICAgICAgd2lkdGg6IDY1cHg7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM2NjY7XHJcbiAgICAgIHBhZGRpbmc6IDFweDsgYm9yZGVyLXJhZGl1czogNTAlOyBvdmVyZmxvdzogaGlkZGVuOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLy8mLmltYWdlLTEge1xyXG4gICAgICAvLyAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvdmVjdG9yLWhhaXJjdXQuanBnJyk7XHJcbiAgICAgIC8vfVxyXG4gICAgICAvLyYuaW1hZ2UtMiB7XHJcbiAgICAgIC8vICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy90aHJlZGRpbmcyLmpwZWcnKTtcclxuICAgICAgLy99XHJcbiAgICAgIC8vJi5pbWFnZS0zIHtcclxuICAgICAgLy8gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3ZlY3Rvcl9mYWNpYWwuanBnJyk7XHJcbiAgICAgIC8vfVxyXG4gICAgICAvLyYuaW1hZ2UtNCB7XHJcbiAgICAgIC8vICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9tYW5pY3VyZS5qcGVnJyk7XHJcbiAgICAgIC8vfVxyXG4gICAgICAvLyYuaW1hZ2UtNSB7XHJcbiAgICAgIC8vICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9wcm9kdWN0cy5qcGVnJyk7XHJcbiAgICAgIC8vfVxyXG4gICAgICAvLyYuaW1hZ2UtNiB7XHJcbiAgICAgIC8vICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy91cHBlckxpcHMuanBlZycpO1xyXG4gICAgICAvL31cclxuICAgICAgLy8mLmltYWdlLTcge1xyXG4gICAgICAvLyAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvYnJpZGFsLmpwZWcnKTtcclxuICAgICAgLy99XHJcbiAgICAgIC8vJi5pbWFnZS04IHtcclxuICAgICAgLy8gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3dheGluZy5qcGVnJyk7XHJcbiAgICAgIC8vfVxyXG4gICAgICAvLyYuaW1hZ2UtOSB7XHJcbiAgICAgIC8vICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9jb3Vyc2VzLmpwZWcnKTtcclxuICAgICAgLy99XHJcbiAgICB9XHJcbiAgICAubWVudS10ZXh0IHtcclxuICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYXBwbGljYXRpb24tZGV0YWlscyB7XHJcbiAgbWFyZ2luOiAxNXB4IDAgMDtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjNjE0ZDdmO1xyXG4gIC8vYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE5M2RlZywgI2U5NWM4ZiAyJSwgIzYxNGQ3ZiA4NCUpO1xyXG4gIC5vd25lci1pbmZvLWNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWJhc2lzOiAzNSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAub3duZXItaW1hZ2Uge1xyXG4gICAgICB3aWR0aDogODVweDtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2U5NWM4ZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAub3duZXItbmFtZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5zb2NpYWwtbWVkaWEtaWNvbnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZGl2IHtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDVweCAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgLm1lZGlhLWljb24ge1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubGlua2VkaW4taWNvbiB7XHJcbiAgYmFja2dyb3VuZDogIzBFNzZBODtcclxufVxyXG4uZmItaWNvbiB7XHJcbiAgYmFja2dyb3VuZDogIzNCNTk5ODtcclxufVxyXG4uaW5zdGEtaWNvbiB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgI2U5NWM4ZiwgI2JjMmE2ZCwgI2E4MmU3YSwgIzkwMzQ4MywgIzYxNGQ3Zik7XHJcbn1cclxuXHJcbi5jb3B5LXJpZ2h0cyB7XHJcbiAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI2U5NWM4ZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmVuZC1zZWN0aW9uIHtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG59XHJcblxyXG4uc2FmZXR5LW1lYXN1cmVzIHtcclxuICBtYXJnaW46IDE1cHggMCAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNCRkJGQkY7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLm1hcmdpbi1ib3R0b20tMTAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgLmxvZ28tc2FmZSB7XHJcbiAgICAubG9nby1pbWFnZSB7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICB3aWR0aDogMzVweDtcclxuICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgICAubG9nby10ZXh0IHt9XHJcbiAgfVxyXG4gIC5tZWFzdXJlcy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5tZWFzdXJlIHtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC5tZWFzdXJlLWltYWdlIHtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5tZWFzdXJlLXRleHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIiwiLmxvZ28tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbi5sb2dvLWNvbnRhaW5lciAubG9nby10ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmxvZ28tY29udGFpbmVyIC5zbG9nYW4tdGV4dCB7XG4gIGZvbnQtc2l6ZTogOHB4O1xufVxuXG4uc2VhcmNoLWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5O1xuICBvcGFjaXR5OiAwLjU7XG59XG4uc2VhcmNoLWJhciAuc2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lciBpbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5mZWVkLXNsaWRlcnMge1xuICBoZWlnaHQ6IDQwJTtcbn1cblxuLmZlZWQtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxOHB4IDAgNXB4O1xufVxuLmZlZWQtaGVhZGluZyAuaGVhZGluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ua25vdy1tb3JlIHtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXIgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMzBlbTtcbn1cblxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXItb25lIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JlYXVydHktMS5qcGdcIik7XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLXR3byB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iZWF1dHktMi5qcGdcIik7XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLXRocmVlIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JlYXV0eS0zLmpwZ1wiKTtcbn1cblxuLmZlZWQtY29udGFpbmVyIHtcbiAgLypiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjE0ZGVnLCByZ2JhKDQwLCAyOSwgMjMyLCAxKSAtMjUlLCByZ2IoODEsIDM2LCA4MikgNjMlKTsqL1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xufVxuXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyID4gZGl2IHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQkZCRkJGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogNXB4IDEwcHggMjlweCAjYWFhYWFhOTQ7XG59XG5cbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtaW1hZ2UtaGFpciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9oYWlyLmpwZWdcIik7XG59XG5cbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtaW1hZ2Utc2tpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9za2luLmpwZWdcIik7XG59XG5cbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtaW1hZ2UtbWFrZXVwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL21ha2V1cC5qcGVnXCIpO1xufVxuXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvdXJzZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9jb3Vyc2VzLmpwZWdcIik7XG59XG5cbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtdGV4dCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMTRkZWcsICMyODFkZTggLTI1JSwgIzUxMjQ1MiA2MyUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmhlaWdodC05NXB4IHtcbiAgaGVpZ2h0OiA5NXB4O1xufVxuXG4uaGVpZ2h0LTIwMHB4IHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciB7XG4gIGhlaWdodDogMjE1cHg7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnNsaWRlX2NvbnRhaW5lciBpb24tY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE2MHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuLnNsaWRlX2NvbnRhaW5lciBpb24tY2FyZCBpbWcge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSkgcm90YXRlKDFkZWcpO1xuICB0cmFuc2l0aW9uOiA2MDBtcyBhbGwgZWFzZS1pbi1vdXQ7XG59XG4uc2xpZGVfY29udGFpbmVyIC5zd2lwZXItc2xpZGUtYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1LCAxLjA1KTtcbn1cbi5zbGlkZV9jb250YWluZXIgLnN3aXBlci1zbGlkZS1hY3RpdmUgaW9uLWNhcmQgaW1nIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbn1cbi5zbGlkZV9jb250YWluZXIgLnN3aXBlci1zbGlkZSB7XG4gIHRyYW5zaXRpb246IDQwMG1zIGFsbCBlYXNlLWluLW91dDtcbn1cbi5zbGlkZV9jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1lbnUtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5wcm9kdWN0c19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuLnByb2R1Y3RzX2NvbnRhaW5lciAuc3dpcGVyLXNsaWRlIHtcbiAgdHJhbnNpdGlvbjogNDAwbXMgYWxsIGVhc2UtaW4tb3V0O1xufVxuLnByb2R1Y3RzX2NvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnByb2R1Y3RzX2NvbnRhaW5lciAuaW1hZ2Utc2xpZGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCRkJGQkY7XG4gIG1hcmdpbjogMCAxMHB4IDVweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnByb2R1Y3RzX2NvbnRhaW5lciAuaW1hZ2Utc2xpZGVyLWNvbnRhaW5lcjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbjogMCAxMHB4IDVweCAwO1xufVxuLnByb2R1Y3RzX2NvbnRhaW5lciAuaW1hZ2Utc2xpZGVyLWNvbnRhaW5lcjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luOiAwIDAgNXB4IDEwcHg7XG59XG4ucHJvZHVjdHNfY29udGFpbmVyIC5pbWFnZS1zbGlkZXItY29udGFpbmVyIC5zbGlkZXItaW1hZ2Uge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucHJvZHVjdHNfY29udGFpbmVyIC5pbWFnZS1zbGlkZXItY29udGFpbmVyIC5zbGlkZXItaW1hZ2UgaW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuLnByb2R1Y3RzX2NvbnRhaW5lciAuaW1hZ2Utc2xpZGVyLWNvbnRhaW5lciAuc2xpZGVyLXRleHQge1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvZHVjdHNfY29udGFpbmVyIC5pbWFnZS1zbGlkZXItY29udGFpbmVyIC5zbGlkZXItdGV4dCAucHJvZHVjdC1uYW1lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucHJvZHVjdHNfY29udGFpbmVyIC5pbWFnZS1zbGlkZXItY29udGFpbmVyIC5zbGlkZXItdGV4dCAucHJvZHVjdC1uYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5wcm9kdWN0c19jb250YWluZXIgLmltYWdlLXNsaWRlci1jb250YWluZXIgLnNsaWRlci10ZXh0IC5wcm9kdWN0LXByaWNlLWRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucHJvZHVjdHNfY29udGFpbmVyIC5pbWFnZS1zbGlkZXItY29udGFpbmVyIC5zbGlkZXItdGV4dCAucHJvZHVjdC1wcmljZS1kZXRhaWxzIC5wcmljZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnByb2R1Y3RzX2NvbnRhaW5lciAuaW1hZ2Utc2xpZGVyLWNvbnRhaW5lciAuc2xpZGVyLXRleHQgLnByb2R1Y3QtcHJpY2UtZGV0YWlscyAucHJpY2UtY29udGFpbmVyIC5wcmljZSB7XG4gIGNvbG9yOiAjMmQyYzJjO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ucHJvZHVjdHNfY29udGFpbmVyIC5pbWFnZS1zbGlkZXItY29udGFpbmVyIC5zbGlkZXItdGV4dCAucHJvZHVjdC1wcmljZS1kZXRhaWxzIC5wcmljZS1jb250YWluZXIgLmRpc2NvdW50ZWQtcHJpY2Uge1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgMTBweCA1cHg7XG59XG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIgaW1nIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luOiAwIDEwcHggNXB4IDA7XG59XG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXI6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbjogMCAwIDVweCAxMHB4O1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIuczEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvczEuanBnXCIpO1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIuczIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvczIuanBnXCIpO1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIuczMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvczMuanBnXCIpO1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIuczQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvczQuanBlZ1wiKTtcbn1cblxuLmZpbHRlci1icmlnaHQtMDMge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC4zKTtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnAxIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3MxLmpwZ1wiKTtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnAyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3MyLmpwZ1wiKTtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnAzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3MzLmpwZ1wiKTtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnA0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3M0LmpwZWdcIik7XG59XG5cbi5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3Mge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZDNkM2QzNGY7XG59XG5cbi5xdWlja19tZW51cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm94LXNoYWRvdzogLTNweCA0cHggMjVweCAjYWFhYWFhOTQ7XG4gIHBhZGRpbmc6IDdweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucXVpY2tfbWVudXMgZGl2Lm1lbnUtY29udGFpbmVyIHtcbiAgZmxleC1iYXNpczogMzAlO1xuICBwYWRkaW5nOiAyJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogM3B4O1xufVxuLnF1aWNrX21lbnVzIGRpdi5tZW51LWNvbnRhaW5lciAubWVudS1pbWFnZSB7XG4gIGhlaWdodDogNjVweDtcbiAgd2lkdGg6IDY1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM2NjY7XG4gIHBhZGRpbmc6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ucXVpY2tfbWVudXMgZGl2Lm1lbnUtY29udGFpbmVyIC5tZW51LWltYWdlIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLnF1aWNrX21lbnVzIGRpdi5tZW51LWNvbnRhaW5lciAubWVudS10ZXh0IHtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hcHBsaWNhdGlvbi1kZXRhaWxzIHtcbiAgbWFyZ2luOiAxNXB4IDAgMDtcbiAgcGFkZGluZzogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6IHdoaXRlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzYxNGQ3Zjtcbn1cbi5hcHBsaWNhdGlvbi1kZXRhaWxzIC5vd25lci1pbmZvLWNvbnRhaW5lciB7XG4gIGZsZXgtYmFzaXM6IDM1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uYXBwbGljYXRpb24tZGV0YWlscyAub3duZXItaW5mby1jb250YWluZXIgLm93bmVyLWltYWdlIHtcbiAgd2lkdGg6IDg1cHg7XG59XG4uYXBwbGljYXRpb24tZGV0YWlscyAub3duZXItaW5mby1jb250YWluZXIgLm93bmVyLWltYWdlIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAycHggc29saWQgI2U5NWM4ZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDVweCAwO1xuICBwYWRkaW5nOiAycHg7XG59XG4uYXBwbGljYXRpb24tZGV0YWlscyAub3duZXItaW5mby1jb250YWluZXIgLm93bmVyLW5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hcHBsaWNhdGlvbi1kZXRhaWxzIC5vd25lci1pbmZvLWNvbnRhaW5lciAuc29jaWFsLW1lZGlhLWljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYXBwbGljYXRpb24tZGV0YWlscyAub3duZXItaW5mby1jb250YWluZXIgLnNvY2lhbC1tZWRpYS1pY29ucyBkaXYge1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAzNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmFwcGxpY2F0aW9uLWRldGFpbHMgLm93bmVyLWluZm8tY29udGFpbmVyIC5zb2NpYWwtbWVkaWEtaWNvbnMgZGl2IC5tZWRpYS1pY29uIHtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmxpbmtlZGluLWljb24ge1xuICBiYWNrZ3JvdW5kOiAjMEU3NkE4O1xufVxuXG4uZmItaWNvbiB7XG4gIGJhY2tncm91bmQ6ICMzQjU5OTg7XG59XG5cbi5pbnN0YS1pY29uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgI2U5NWM4ZiwgI2JjMmE2ZCwgI2E4MmU3YSwgIzkwMzQ4MywgIzYxNGQ3Zik7XG59XG5cbi5jb3B5LXJpZ2h0cyB7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZTk1YzhmO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmVuZC1zZWN0aW9uIHtcbiAgcGFkZGluZzogMTBweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5zYWZldHktbWVhc3VyZXMge1xuICBtYXJnaW46IDE1cHggMCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCRkJGQkY7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5zYWZldHktbWVhc3VyZXMgLm1hcmdpbi1ib3R0b20tMTAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnNhZmV0eS1tZWFzdXJlcyAubG9nby1zYWZlIC5sb2dvLWltYWdlIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5zYWZldHktbWVhc3VyZXMgLm1lYXN1cmVzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uc2FmZXR5LW1lYXN1cmVzIC5tZWFzdXJlcy1jb250YWluZXIgLm1lYXN1cmUge1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zYWZldHktbWVhc3VyZXMgLm1lYXN1cmVzLWNvbnRhaW5lciAubWVhc3VyZSAubWVhc3VyZS1pbWFnZSB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uc2FmZXR5LW1lYXN1cmVzIC5tZWFzdXJlcy1jb250YWluZXIgLm1lYXN1cmUgLm1lYXN1cmUtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCIkcHJpbWFyeS1jb2xvcjogI2U5NWM4ZjtcclxuJHNlY29uZGFyeS1jb2xvcjogIzYxNGQ3ZjtcclxuXHJcbiRyZWd1bGFyLWZvbnQtc2l6ZTogMTRweDtcclxuJGZvbnQtc2l6ZS0xOiAxNnB4O1xyXG4kaGVhZGVyLXNpemU6IDIwcHg7XHJcbiRmb250LXNpemUtMzogMzBweDtcclxuXHJcbiRidXR0b24taGVpZ2h0OiA0NXB4O1xyXG5cclxuIl19 */";
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _shared_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared-service.service */
    "./src/app/shared-service.service.ts");

    var FeedPage = /*#__PURE__*/function () {
      function FeedPage(sharedService, router, adminService) {
        _classCallCheck(this, FeedPage);

        this.sharedService = sharedService;
        this.router = router;
        this.adminService = adminService;
        this.slideOpts = {
          initialSlide: 1,
          speed: 400,
          autoplay: true,
          zoom: {
            maxRatio: 3
          },
          loop: true
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
        this.packagesOption = {
          slidesPerView: 1.5,
          centeredSlides: true,
          loop: true,
          initialSlide: 2,
          spaceBetween: 10,
          speed: 400,
          autoplay: true
        };
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
          name: 'Hairs',
          sequence: 6,
          url: 'assets/vector-icons/hair-straightener.png'
        }, {
          name: 'Body',
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
        this.serviceTypesList = [];
        this.bannerAnim1 = false;
        this.changeAnim1 = false;
        this.changeAnim2 = false;
        this.packagesSliderObservable = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"]();
        this.bannerSliderObservable = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"]();
      }

      _createClass(FeedPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          this.packagesSliderObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(3000).subscribe(function (x) {
            _this.packagesSlider.startAutoplay().then();
          });
          this.bannerSliderObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(3000).subscribe(function (x) {
            _this.bannerSlider.startAutoplay().then();
          });
        }
      }, {
        key: "onIonScroll",
        value: function onIonScroll(event) {// const eventDetails = event.detail;
          // const slideUpCssList = ['animate__animated', 'animate__slideInUp', 'animate__fast'];
          // switch (eventDetails.scrollTop) {
          //   case 200: {
          //     this.changeAnim1 = false;
          //     setTimeout(() => {
          //       this.changeAnim1 = true;
          //     }, 20);
          //     break;
          //   } case 600: {
          //     this.changeAnim2 = false;
          //     setTimeout(() => {
          //       this.changeAnim2 = true;
          //     }, 20);
          //     break;
          //   }
          // }
        }
      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          this.packagesSliderObservable.unsubscribe();
          this.bannerSliderObservable.unsubscribe();
        }
      }, {
        key: "slidesDidLoad",
        value: function slidesDidLoad(event) {
          var _this2 = this;

          setTimeout(function () {
            _this2.packagesSlider.startAutoplay().then();

            _this2.bannerSlider.startAutoplay().then();
          }, 1000);
        }
      }, {
        key: "onLastBannerSlide",
        value: function onLastBannerSlide() {
          this.bannerSlider.slideTo(2).then();
        }
      }, {
        key: "onLastPackageSlide",
        value: function onLastPackageSlide() {
          this.packagesSlider.slideTo(2).then();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPackages();
          this.getProducts();
          this.getServiceTypes();
          this.todayYear = new Date().getFullYear();
        }
      }, {
        key: "refreshPage",
        value: function refreshPage(event) {
          var _this3 = this;

          setTimeout(function () {
            _this3.getPackages();

            _this3.getProducts();

            event.target.complete();
          }, 1000);
        }
      }, {
        key: "getPackages",
        value: function getPackages() {
          var _this4 = this;

          this.sharedService.showSpinner.next(true);
          this.adminService.getServicePackage().subscribe(function (res) {
            return _this4.getServicePackageSuccess(res);
          }, function (error) {
            _this4.adminService.commonError(error);
          });
        }
      }, {
        key: "getServicePackageSuccess",
        value: function getServicePackageSuccess(res) {
          this.packageList = res;
          this.sharedService.showSpinner.next(false);
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          var _this5 = this;

          this.sharedService.showSpinner.next(true);
          this.adminService.getProducts().subscribe(function (res) {
            return _this5.getProductSuccess(res);
          }, function (error) {
            _this5.adminService.commonError(error);
          });
        }
      }, {
        key: "getProductSuccess",
        value: function getProductSuccess(res) {
          this.productList = res;
          this.sharedService.showSpinner.next(false);
        }
      }, {
        key: "getServiceTypes",
        value: function getServiceTypes() {
          var _this6 = this;

          this.sharedService.showSpinner.next(true);
          this.adminService.getAllServiceTypes().subscribe(function (res) {
            return _this6.getAllServiceTypesSuccess(res);
          }, function (error) {
            _this6.adminService.commonError(error);
          });
        }
      }, {
        key: "getAllServiceTypesSuccess",
        value: function getAllServiceTypesSuccess(res) {
          this.serviceTypesList = res;
          this.sharedService.showSpinner.next(false);
        }
      }, {
        key: "onClickPackage",
        value: function onClickPackage(id) {
          this.router.navigate(['/package-details'], {
            queryParams: {
              packageId: id
            }
          });
        }
      }, {
        key: "goServices",
        value: function goServices() {
          this.router.navigate(['/services']);
        }
      }, {
        key: "onKnowMore",
        value: function onKnowMore() {
          this.router.navigate(['/about-us']);
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
        type: _shared_service_service__WEBPACK_IMPORTED_MODULE_6__["SharedServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('packagesSlider', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])], FeedPage.prototype, "packagesSlider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bannerSlider', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])], FeedPage.prototype, "bannerSlider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('animationRef', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], FeedPage.prototype, "animationRef", void 0);
    FeedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-feed',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./feed.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed/feed.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./feed.page.scss */
      "./src/app/pages/feed/feed.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_service__WEBPACK_IMPORTED_MODULE_6__["SharedServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])], FeedPage);
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


    __webpack_exports__["default"] = ".add-item .custom-add-button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #614d7f;\n  border-radius: 5px;\n}\n.add-item .custom-add-button .add-text {\n  padding: 0 5px;\n  color: #614d7f;\n  background: #e95c8f1f;\n}\n.add-item .custom-add-button i.fa.fa-plus {\n  padding: 5px;\n  background: #e95c8f40;\n  color: #614d7f;\n  border-left: 1px solid #614d7f;\n  font-size: 10px;\n}\n.add-item .custom-add-more-button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #614d7f;\n  border-radius: 5px;\n}\n.add-item .custom-add-more-button .add-text {\n  padding: 2px 5px;\n  color: #614d7f;\n}\n.add-item .custom-add-more-button .in-cart-box {\n  padding: 0 6px;\n  color: #614d7f;\n  background: #e95c8f1f;\n}\n.add-item .custom-add-more-button i.fa.fa-plus {\n  padding: 6px;\n  background: #e95c8f40;\n  color: #614d7f;\n  font-size: 10px;\n}\n.add-item .custom-add-more-button i.fa.fa-minus {\n  padding: 6px;\n  background: #e95c8f40;\n  color: #614d7f;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYWRkLWJ1dHRvbi9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxhcHBcXHNoYXJlZC1jb21wb25lbnRzXFxhZGQtYnV0dG9uXFxhZGQtYnV0dG9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYWRkLWJ1dHRvbi9hZGQtYnV0dG9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFBZSw4QkFBQTtFQUNmLG1CQUFBO0VBQXFCLHlCQUFBO0VBQ3JCLGtCQUFBO0FDRUo7QURESTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNHTjtBRERJO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ0dOO0FEQUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNFSjtBRERJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDR047QURESTtFQUNFLGNBQUE7RUFFQSxjQUFBO0VBQ0EscUJBQUE7QUNFTjtBRENJO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNDTjtBREVJO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNBTiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL2FkZC1idXR0b24vYWRkLWJ1dHRvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWl0ZW0ge1xyXG4gIC5jdXN0b20tYWRkLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBib3JkZXI6IDFweCBzb2xpZCAjNjE0ZDdmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLmFkZC10ZXh0IHtcclxuICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICAgIGNvbG9yOiAjNjE0ZDdmO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZTk1YzhmMWY7XHJcbiAgICB9XHJcbiAgICBpLmZhLmZhLXBsdXMge1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlOTVjOGY0MDtcclxuICAgICAgY29sb3I6ICM2MTRkN2Y7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzYxNGQ3ZjtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2MTRkN2Y7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAuYWRkLXRleHQge1xyXG4gICAgICBwYWRkaW5nOiAycHggNXB4O1xyXG4gICAgICBjb2xvcjogIzYxNGQ3ZjtcclxuICAgIH1cclxuICAgIC5pbi1jYXJ0LWJveCB7XHJcbiAgICAgIHBhZGRpbmc6IDAgNnB4O1xyXG4gICAgICAvL2JvcmRlci1yaWdodDogMXB4IHNvbGlkICM2MTRkN2Y7XHJcbiAgICAgIGNvbG9yOiAjNjE0ZDdmO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZTk1YzhmMWY7XHJcbiAgICAgIC8vYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNjE0ZDdmO1xyXG4gICAgfVxyXG4gICAgaS5mYS5mYS1wbHVzIHtcclxuICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZTk1YzhmNDA7XHJcbiAgICAgIGNvbG9yOiAjNjE0ZDdmO1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcblxyXG4gICAgfVxyXG4gICAgaS5mYS5mYS1taW51cyB7XHJcbiAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgYmFja2dyb3VuZDogI2U5NWM4ZjQwO1xyXG4gICAgICBjb2xvcjogIzYxNGQ3ZjtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmFkZC1pdGVtIC5jdXN0b20tYWRkLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzYxNGQ3ZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmFkZC1pdGVtIC5jdXN0b20tYWRkLWJ1dHRvbiAuYWRkLXRleHQge1xuICBwYWRkaW5nOiAwIDVweDtcbiAgY29sb3I6ICM2MTRkN2Y7XG4gIGJhY2tncm91bmQ6ICNlOTVjOGYxZjtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1idXR0b24gaS5mYS5mYS1wbHVzIHtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZTk1YzhmNDA7XG4gIGNvbG9yOiAjNjE0ZDdmO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM2MTRkN2Y7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzYxNGQ3ZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmFkZC1pdGVtIC5jdXN0b20tYWRkLW1vcmUtYnV0dG9uIC5hZGQtdGV4dCB7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIGNvbG9yOiAjNjE0ZDdmO1xufVxuLmFkZC1pdGVtIC5jdXN0b20tYWRkLW1vcmUtYnV0dG9uIC5pbi1jYXJ0LWJveCB7XG4gIHBhZGRpbmc6IDAgNnB4O1xuICBjb2xvcjogIzYxNGQ3ZjtcbiAgYmFja2dyb3VuZDogI2U5NWM4ZjFmO1xufVxuLmFkZC1pdGVtIC5jdXN0b20tYWRkLW1vcmUtYnV0dG9uIGkuZmEuZmEtcGx1cyB7XG4gIHBhZGRpbmc6IDZweDtcbiAgYmFja2dyb3VuZDogI2U5NWM4ZjQwO1xuICBjb2xvcjogIzYxNGQ3ZjtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmFkZC1pdGVtIC5jdXN0b20tYWRkLW1vcmUtYnV0dG9uIGkuZmEuZmEtbWludXMge1xuICBwYWRkaW5nOiA2cHg7XG4gIGJhY2tncm91bmQ6ICNlOTVjOGY0MDtcbiAgY29sb3I6ICM2MTRkN2Y7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn0iXX0= */";
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