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


    __webpack_exports__["default"] = "<sandhyadeep-header class=\"z-index-999\"></sandhyadeep-header>\r\n<ion-content (ionScroll)=\"onIonScroll($event)\"  [scrollEvents]=\"true\">\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshPage($event)\">\r\n        <ion-refresher-content pulling-icon=\"arrow-dropdown\" refreshing-spinner=\"circles\">\r\n\r\n        </ion-refresher-content>\r\n    </ion-refresher>\r\n    <ion-slides #bannerSlider (ionSlidesDidLoad)=\"slidesDidLoad($event)\" (ionSlidePrevEnd)=\"onLastBannerSlide()\"  class=\"feed-sliders\" pager=\"true\" [options]=\"slideOpts\">\r\n<!--        <ion-slide class=\"feed-images feed-slider feed-slider-one\">-->\r\n\r\n<!--        </ion-slide>-->\r\n        <ion-slide class=\"feed-images feed-slider feed-slider-two\">\r\n\r\n        </ion-slide>\r\n        <ion-slide class=\"feed-images feed-slider feed-slider-three\">\r\n\r\n        </ion-slide>\r\n    </ion-slides>\r\n\r\n    <div  #animationRef class=\"menu-container\">\r\n        <div class=\"quick_menus\">\r\n            <ng-container *ngFor=\"let treatment of serviceTypesList; let index = index\">\r\n                <div [ngStyle]=\"{'animation-delay': (index+1)/6 + 's'}\" [ngClass]=\"{ animate__animated: changeAnim1, animate__fadeInRight: changeAnim1 }\"  (click)=\"goServices()\" class=\"animate__animated animate__fadeInRight menu-container\">\r\n                    <div class=\"menu-image\"><img src=\"{{treatment.imageUrl}}\" alt=\"\"></div>\r\n                    <div class=\"menu-text\">{{treatment.name}}</div>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n\r\n        <div class=\"feed-heading\">\r\n            <div class=\"heading-text\">\r\n                <b>Packages</b>\r\n            </div>\r\n            <div [routerLink]=\"['//packages']\" class=\"know-more\">See All <i class=\"fa fa-angle-right\"></i></div>\r\n        </div>\r\n        <div [ngClass]=\"{ animate__animated: changeAnim2, animate__bounceIn: changeAnim2, animate__fast: changeAnim2 }\" #animationRef class=\"slide_container\">\r\n            <ion-content scroll-y=\"false\" [fullscreen]=\"true\">\r\n                <ion-slides (ionSlideReachEnd)=\"onLastPackageSlide()\" #packagesSlider [options]=\"packagesOption\">\r\n                    <ion-slide *ngFor=\"let packageData of packageList\">\r\n                        <ion-card>\r\n                            <img src=\"{{packageData?.displayImage}}\" alt=\"\">\r\n                        </ion-card>\r\n                    </ion-slide>\r\n                </ion-slides>\r\n            </ion-content>\r\n        </div>\r\n\r\n<!--        Removed products for now -->\r\n<!--        <div class=\"feed-heading\">-->\r\n<!--            <div class=\"heading-text\">-->\r\n<!--                <b>Products</b>-->\r\n<!--            </div>-->\r\n<!--            <div [routerLink]=\"['//products']\" class=\"know-more\">See All <i class=\"fa fa-angle-right\"></i></div>-->\r\n<!--        </div>-->\r\n<!--        <div class=\"products_container\">-->\r\n<!--            <div *ngFor=\"let product of productList, let index = index\" class=\"image-slider-container\">-->\r\n<!--                <div class=\"slider-image\">-->\r\n<!--                    <img src=\"{{product.url}}\" alt=\"\">-->\r\n<!--                </div>-->\r\n<!--                <div class=\"slider-text\">-->\r\n<!--                    <div class=\"product-name-container\">-->\r\n<!--                        <div class=\"product-name\">-->\r\n<!--                            {{product.name}}-->\r\n<!--                        </div>-->\r\n<!--                        <div class=\"product-price-details\">-->\r\n<!--                            <div class=\"price-container\">-->\r\n<!--                                <div class=\"price\">-->\r\n<!--                                    {{product.price}} ₹-->\r\n<!--                                </div>-->\r\n<!--                                <div class=\"discounted-price\">-->\r\n<!--                                    <del> {{product.discountedPrice}} ₹</del>-->\r\n<!--                                </div>-->\r\n<!--                            </div>-->\r\n<!--                        </div>-->\r\n<!--                    </div>-->\r\n<!--                    <add-button (updateCounter)=\"onUpdateCounter($event, index)\"></add-button>-->\r\n<!--                </div>-->\r\n<!--            </div>-->\r\n<!--        </div>-->\r\n\r\n        <div class=\"safety-measures\">\r\n            <div class=\"margin-bottom-10\">\r\n                Best-in-class safety measures\r\n            </div>\r\n            <div class=\"measures-container margin-bottom-10\">\r\n                <div class=\"measure\">\r\n                    <div class=\"measure-image\"><img src=\"assets/mask.png\" alt=\"\"></div>\r\n                    <div class=\"measure-text\">Usage of mask & gloves</div>\r\n                </div>\r\n                <div class=\"measure\">\r\n                    <div class=\"measure-image\"><img src=\"assets/thermometer.png\" alt=\"\"></div>\r\n                    <div class=\"measure-text\">Temperature Checks</div>\r\n                </div>\r\n                <div class=\"measure\">\r\n                    <div class=\"measure-image\"><img src=\"assets/liquid-soap.png\" alt=\"\"></div>\r\n                    <div class=\"measure-text\">Sanitizations of tools & area</div>\r\n                </div>\r\n                <div class=\"measure\">\r\n                    <div class=\"measure-image\"><img src=\"assets/setu.png\" alt=\"\"></div>\r\n                    <div class=\"measure-text\">Arogya Setu to ensure Safety</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"feed-heading\">\r\n            <div class=\"heading-text\">\r\n                <b>Our Stylist</b>\r\n            </div>\r\n            <div (click)=\"onKnowMore()\" class=\"know-more\">Know More <i class=\"fa fa-angle-right\"></i></div>\r\n        </div>\r\n        <div class=\"application-details\">\r\n            <div class=\"owner-info-container\">\r\n                <div [routerLink]=\"['//about-us']\" class=\"owner-image\">\r\n                    <img src=\"../../../assets/deepaa_bhagwat.jpg\">\r\n                </div>\r\n                <div class=\"owner-details\">\r\n                    <div class=\"owner-name\">Deepaa Bhagwat</div>\r\n                    <div class=\"social-media-icons\">\r\n                        <div class=\"fb-icon\"><i class=\"media-icon fa fa-facebook\"></i></div>\r\n                        <div class=\"insta-icon\"><i class=\"media-icon fa fa-instagram\"></i></div>\r\n                        <div class=\"linkedin-icon\"><i class=\"media-icon fa fa-linkedin\"></i></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <div>\r\n                    <ul>\r\n                        <li>Media & Beauty Makeup Diploma · Media Makeup · Fsx · Singapore</li>\r\n                        <li>Makeup Techniques with Air Brush Machine · Mumbai, Maharashtra</li>\r\n                        <li>Master Diploma in Makeup Artistry · Singapore</li>\r\n                        <li>Comite International D’Esthetique Et De Cosmetologie., Zurich.</li>\r\n                        <li>British Association of Beauty Therapy & Cosmetology, London.</li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"copy-rights\">\r\n            <i class=\"fa fa-copyright\"></i> Copyright {{todayYear}} <br> Sandhyadeep Beauty Parlour <br>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n<app-skeleton-loader></app-skeleton-loader>\r\n<app-footer-component></app-footer-component>\r\n<!--<app-logo-spinner></app-logo-spinner>-->\r\n";
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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/skeleton-loader/skeleton-loader.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/skeleton-loader/skeleton-loader.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsSkeletonLoaderSkeletonLoaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"skeleton-container\" *ngIf=\"showSkeletonSpinner\">\r\n\r\n    <ngx-skeleton-loader appearance=\"line\" [theme]=\"{width: '100%', height: '100px'}\"\r\n            ></ngx-skeleton-loader>\r\n\r\n    <div class=\"middle-box\">\r\n        <ngx-skeleton-loader appearance=\"line\" [theme]=\"{width: '60px', height: '60px'}\"\r\n        ></ngx-skeleton-loader>\r\n        <ngx-skeleton-loader appearance=\"line\" [theme]=\"{width: '60px', height: '60px'}\"\r\n        ></ngx-skeleton-loader>\r\n        <ngx-skeleton-loader appearance=\"line\" [theme]=\"{width: '60px', height: '60px'}\"\r\n        ></ngx-skeleton-loader>\r\n        <ngx-skeleton-loader appearance=\"line\" [theme]=\"{width: '60px', height: '60px'}\"\r\n        ></ngx-skeleton-loader>\r\n        <ngx-skeleton-loader appearance=\"line\" [theme]=\"{width: '60px', height: '60px'}\"\r\n        ></ngx-skeleton-loader>\r\n        <ngx-skeleton-loader appearance=\"line\" [theme]=\"{width: '60px', height: '60px'}\"\r\n        ></ngx-skeleton-loader>\r\n        <ngx-skeleton-loader appearance=\"line\" [theme]=\"{width: '60px', height: '60px'}\"\r\n        ></ngx-skeleton-loader>\r\n        <ngx-skeleton-loader appearance=\"line\" [theme]=\"{width: '60px', height: '60px'}\"\r\n        ></ngx-skeleton-loader>\r\n        <ngx-skeleton-loader appearance=\"line\" [theme]=\"{width: '60px', height: '60px'}\"\r\n        ></ngx-skeleton-loader>\r\n    </div>\r\n    <ngx-skeleton-loader count=\"1\" appearance=\"line\" [theme]=\"{width: '100%', height: '30px'}\"\r\n    ></ngx-skeleton-loader>\r\n    <ngx-skeleton-loader count=\"1\" appearance=\"line\" [theme]=\"{width: '100%', height: '30px'}\"\r\n    ></ngx-skeleton-loader>\r\n\r\n    <div class=\"footer-menu\">\r\n        <div>\r\n            <ngx-skeleton-loader appearance=\"line\" [theme]=\"{width: '30px', height: '30px'}\"\r\n            ></ngx-skeleton-loader>\r\n        </div>\r\n        <div>\r\n            <ngx-skeleton-loader appearance=\"line\" [theme]=\"{width: '30px', height: '30px'}\"\r\n            ></ngx-skeleton-loader>\r\n        </div>\r\n        <div>\r\n            <ngx-skeleton-loader appearance=\"line\" [theme]=\"{width: '30px', height: '30px'}\"\r\n            ></ngx-skeleton-loader>\r\n        </div>\r\n        <div>\r\n            <ngx-skeleton-loader appearance=\"line\" [theme]=\"{width: '30px', height: '30px'}\"\r\n            ></ngx-skeleton-loader>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n";
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
    /* harmony import */


    var _shared_components_skeleton_loader_skeleton_loader_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../shared-components/skeleton-loader/skeleton-loader.module */
    "./src/app/shared-components/skeleton-loader/skeleton-loader.module.ts");

    var FeedPageModule = function FeedPageModule() {
      _classCallCheck(this, FeedPageModule);
    };

    FeedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _feed_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeedPageRoutingModule"], _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"], _shared_components_add_button_add_button_module__WEBPACK_IMPORTED_MODULE_8__["AddButtonModule"], _shared_components_logo_spinner_logo_spinner_module__WEBPACK_IMPORTED_MODULE_9__["LogoSpinnerModule"], _shared_components_footer_component_footer_component_module__WEBPACK_IMPORTED_MODULE_10__["FooterComponentModule"], _shared_components_skeleton_loader_skeleton_loader_module__WEBPACK_IMPORTED_MODULE_11__["SkeletonLoaderModule"]],
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


    __webpack_exports__["default"] = ".logo-container {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n.logo-container .logo-text {\n  font-size: 20px;\n  font-weight: 700;\n}\n.logo-container .slogan-text {\n  font-size: 8px;\n}\n.search-bar {\n  position: absolute;\n  z-index: 999;\n  opacity: 0.5;\n}\n.search-bar .searchbar-input-container input {\n  background-color: white !important;\n}\n.feed-sliders {\n  height: 40%;\n}\n.feed-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 18px 0 5px;\n}\n.feed-heading .heading-text {\n  font-size: 20px;\n}\n.know-more {\n  color: #666;\n}\n.feed-sliders .feed-slider {\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-position: center center !important;\n  max-height: 30em;\n}\n.feed-sliders .feed-slider-one {\n  background: url('banner-123.gif');\n}\n.feed-sliders .feed-slider-two {\n  background: url('feed-banner-1.jpeg');\n}\n.feed-sliders .feed-slider-three {\n  background: url('feed-banner-2.jpeg');\n}\n.feed-container {\n  /*background: linear-gradient(214deg, rgba(40, 29, 232, 1) -25%, rgb(81, 36, 82) 63%);*/\n  padding: 30px;\n  border: 1px solid #fff;\n}\n.feed-container .feed-image-container > div {\n  margin-bottom: 30px;\n  position: relative;\n  border: 1px solid #BFBFBF;\n  background-color: white;\n  box-shadow: 5px 10px 29px #aaaaaa94;\n}\n.feed-container .feed-image-container .feed-image {\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  cursor: pointer;\n  background-position: center center !important;\n  height: 200px;\n}\n.feed-container .feed-image-container .feed-image-hair {\n  background-image: url('hair.jpeg');\n}\n.feed-container .feed-image-container .feed-image-skin {\n  background-image: url('skin.jpeg');\n}\n.feed-container .feed-image-container .feed-image-makeup {\n  background-image: url('makeup.jpeg');\n}\n.feed-container .feed-image-container .feed-image-course {\n  background-image: url('courses.jpeg');\n}\n.feed-container .feed-image-container .feed-text {\n  background: linear-gradient(214deg, #281de8 -25%, #512452 63%);\n  text-align: center;\n  font-weight: bold;\n  color: white;\n  bottom: 0;\n  width: 100%;\n  padding: 15px;\n  font-size: 20px;\n}\n.height-95px {\n  height: 95px;\n}\n.height-200px {\n  height: 200px;\n}\n.slide_container {\n  height: 215px;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n}\n.slide_container ion-card {\n  width: 100%;\n  height: 160px;\n  box-shadow: none;\n  border-radius: 12px;\n}\n.slide_container ion-card img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 100%;\n  transform: scale(1.1, 1.1) rotate(1deg);\n  transition: 600ms all ease-in-out;\n}\n.slide_container .swiper-slide-active {\n  transform: scale(1.05, 1.05);\n}\n.slide_container .swiper-slide-active ion-card img {\n  transform: scale(1, 1);\n}\n.slide_container .swiper-slide {\n  transition: 400ms all ease-in-out;\n}\n.slide_container::-webkit-scrollbar {\n  display: none;\n}\n.menu-container {\n  padding: 0 15px;\n  font-size: 14px;\n}\n.products_container {\n  display: flex;\n  overflow: scroll;\n}\n.products_container .swiper-slide {\n  transition: 400ms all ease-in-out;\n}\n.products_container::-webkit-scrollbar {\n  display: none;\n}\n.products_container .image-slider-container {\n  display: flex;\n  border-radius: 10px;\n  background-color: white;\n  width: 200px;\n  border: 1px solid #BFBFBF;\n  margin: 0 10px 5px;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.products_container .image-slider-container:first-child {\n  margin: 0 10px 5px 0;\n}\n.products_container .image-slider-container:last-child {\n  margin: 0 0 5px 10px;\n}\n.products_container .image-slider-container .slider-image {\n  width: 200px;\n  height: 200px;\n  overflow: hidden;\n}\n.products_container .image-slider-container .slider-image img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%;\n  width: 100%;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.products_container .image-slider-container .slider-text {\n  line-height: 1.3;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.products_container .image-slider-container .slider-text .product-name-container {\n  display: flex;\n  flex-direction: column;\n}\n.products_container .image-slider-container .slider-text .product-name {\n  font-size: 16px;\n  font-weight: bold;\n}\n.products_container .image-slider-container .slider-text .product-price-details {\n  display: flex;\n  justify-content: space-between;\n}\n.products_container .image-slider-container .slider-text .product-price-details .price-container {\n  display: flex;\n}\n.products_container .image-slider-container .slider-text .product-price-details .price-container .price {\n  color: #2d2c2c;\n  font-size: 14px;\n}\n.products_container .image-slider-container .slider-text .product-price-details .price-container .discounted-price {\n  color: #666;\n  font-size: 14px;\n  margin-left: 5px;\n}\n.slide_container .slider {\n  display: inline-block;\n  background-color: white;\n  width: 80%;\n  margin: 0 10px 5px;\n}\n.slide_container .slider img {\n  height: 150px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 10px;\n}\n.slide_container .slider:first-child {\n  margin: 0 10px 5px 0;\n}\n.slide_container .slider:last-child {\n  margin: 0 0 5px 10px;\n}\n.slide_container .slider.s1 {\n  background-image: url('s1.jpg');\n}\n.slide_container .slider.s2 {\n  background-image: url('s2.jpg');\n}\n.slide_container .slider.s3 {\n  background-image: url('s3.jpg');\n}\n.slide_container .slider.s4 {\n  background-image: url('s4.jpeg');\n}\n.filter-bright-03 {\n  -webkit-filter: brightness(0.3);\n          filter: brightness(0.3);\n}\n.slide_container .slider.p1 {\n  background-image: url('s1.jpg');\n}\n.slide_container .slider.p2 {\n  background-image: url('s2.jpg');\n}\n.slide_container .slider.p3 {\n  background-image: url('s3.jpg');\n}\n.slide_container .slider.p4 {\n  background-image: url('s4.jpeg');\n}\n.searchbar-input.sc-ion-searchbar-ios {\n  background: white !important;\n}\n.main-container {\n  background: #d3d3d34f;\n}\n.quick_menus {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  margin: 15px 0;\n  border-radius: 10px;\n  border: 1px solid lightgray;\n  box-shadow: 1px 1px 4px #aaaaaa94;\n  padding: 7px;\n  justify-content: center;\n}\n.quick_menus div.menu-container {\n  flex-basis: 30%;\n  padding: 2%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 3px;\n}\n.quick_menus div.menu-container .menu-image {\n  height: 65px;\n  width: 65px;\n  padding: 1px;\n  border-radius: 50%;\n  overflow: hidden;\n  display: inline-block;\n}\n.quick_menus div.menu-container .menu-image img {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.quick_menus div.menu-container .menu-text {\n  padding-top: 5px;\n  font-size: 14px;\n  text-align: center;\n}\n.application-details {\n  margin: 15px 0 0;\n  padding: 12px;\n  display: flex;\n  color: white;\n  flex-direction: column;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  background: #265791;\n}\n.application-details .owner-info-container {\n  flex-basis: 35%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 15px;\n}\n.application-details .owner-info-container .owner-image {\n  width: 85px;\n}\n.application-details .owner-info-container .owner-image img {\n  max-width: 100%;\n  border: 2px solid #BD1E51;\n  border-radius: 50%;\n  margin: 5px 0;\n  padding: 2px;\n}\n.application-details .owner-info-container .owner-name {\n  font-size: 16px;\n  text-align: center;\n}\n.application-details .owner-info-container .social-media-icons {\n  display: flex;\n  justify-content: center;\n}\n.application-details .owner-info-container .social-media-icons div {\n  border: 2px solid white;\n  display: inline-block;\n  height: 35px;\n  width: 35px;\n  transition: all 0.5s;\n  text-align: center;\n  margin: 5px 10px;\n  border-radius: 10px;\n}\n.application-details .owner-info-container .social-media-icons div .media-icon {\n  line-height: 32px;\n  font-size: 15px;\n}\n.linkedin-icon {\n  background: #0E76A8;\n}\n.fb-icon {\n  background: #3B5998;\n}\n.insta-icon {\n  background: linear-gradient(to right top, #BD1E51, #bc2a6d, #a82e7a, #903483, #265791);\n}\n.copy-rights {\n  padding: 5px 15px;\n  background: #BD1E51;\n  color: white;\n  font-weight: bold;\n  font-size: 14px;\n  text-align: center;\n}\n.end-section {\n  padding: 10px 0;\n  background-color: lightgray;\n}\n.safety-measures {\n  margin: 15px 0 10px;\n  display: flex;\n  flex-direction: column;\n  font-size: 20px;\n  text-align: center;\n  font-weight: bold;\n  border: 1px solid #BFBFBF;\n  padding: 10px 0;\n  border-radius: 10px;\n}\n.safety-measures .margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.safety-measures .logo-safe .logo-image {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n}\n.safety-measures .measures-container {\n  display: flex;\n}\n.safety-measures .measures-container .measure {\n  padding: 5px;\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.safety-measures .measures-container .measure .measure-image {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 35px;\n  height: 35px;\n  margin-bottom: 5px;\n}\n.safety-measures .measures-container .measure .measure-text {\n  text-align: center;\n}\n.customise-fab {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: white;\n  padding: 10px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmVlZC9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxhcHBcXHBhZ2VzXFxmZWVkXFxmZWVkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZmVlZC9mZWVkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZmVlZC9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxzYW5kaHlhZGVlcC10aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNERjtBREVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQUo7QURFRTtFQUNFLGNBQUE7QUNBSjtBRElBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0RGO0FERUU7RUFDRSxrQ0FBQTtBQ0FKO0FET0E7RUFDRSxXQUFBO0FDSkY7QURPQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNKRjtBREtFO0VBQ0UsZUUzQlU7QUR3QmQ7QURPQTtFQUNFLFdBQUE7QUNKRjtBRE9BO0VBQ0UsdUNBQUE7RUFDQSxpQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsZ0JBQUE7QUNKRjtBRE9BO0VBQ0UsaUNBQUE7QUNKRjtBRE9BO0VBQ0UscUNBQUE7QUNKRjtBRE9BO0VBQ0UscUNBQUE7QUNKRjtBRE9BO0VBQ0UsdUZBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNKRjtBRE9BO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQ0FBQTtBQ0pGO0FET0E7RUFDRSx1Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLDZDQUFBO0VBQ0EsYUFBQTtBQ0pGO0FET0E7RUFDRSxrQ0FBQTtBQ0pGO0FET0E7RUFDRSxrQ0FBQTtBQ0pGO0FET0E7RUFDRSxvQ0FBQTtBQ0pGO0FET0E7RUFDRSxxQ0FBQTtBQ0pGO0FET0E7RUFDRSw4REFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0pGO0FET0E7RUFDQyxZQUFBO0FDSkQ7QURPQTtFQUNFLGFBQUE7QUNKRjtBRE9BO0VBNkJFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNoQ0Y7QURDRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDRSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLGlDQUFBO0FDQ047QURHRTtFQUNFLDRCQUFBO0FDREo7QURJTTtFQUNFLHNCQUFBO0FDRlI7QURPRTtFQUNFLGlDQUFBO0FDTEo7QURXRTtFQUNFLGFBQUE7QUNUSjtBRGFBO0VBQ0UsZUFBQTtFQUNBLGVFekprQjtBRCtJcEI7QURhQTtFQVNFLGFBQUE7RUFDQSxnQkFBQTtBQ2xCRjtBRFNFO0VBQ0UsaUNBQUE7QUNQSjtBRGdCRTtFQUNFLGFBQUE7QUNkSjtBRGdCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FDZEo7QURlSTtFQUNFLG9CQUFBO0FDYk47QURlSTtFQUNFLG9CQUFBO0FDYk47QURlSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNiTjtBRGNNO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ1pSO0FEZUk7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ2JOO0FEY007RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNaUjtBRGNNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDWlI7QURjTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ1pSO0FEYVE7RUFDRSxhQUFBO0FDWFY7QURZVTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDVlo7QURZVTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNWWjtBRG1CQTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNoQkY7QURpQkU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxtQkFBQTtBQ2ZKO0FEaUJFO0VBQ0Usb0JBQUE7QUNmSjtBRGlCRTtFQUNFLG9CQUFBO0FDZko7QURtQkE7RUFDRSwrQkFBQTtBQ2hCRjtBRG1CQTtFQUNFLCtCQUFBO0FDaEJGO0FEbUJBO0VBQ0UsK0JBQUE7QUNoQkY7QURtQkE7RUFDRSxnQ0FBQTtBQ2hCRjtBRG1CQTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7QUNoQkY7QURtQkE7RUFDRSwrQkFBQTtBQ2hCRjtBRG1CQTtFQUNFLCtCQUFBO0FDaEJGO0FEbUJBO0VBQ0UsK0JBQUE7QUNoQkY7QURtQkE7RUFDRSxnQ0FBQTtBQ2hCRjtBRG1CQTtFQUNFLDRCQUFBO0FDaEJGO0FEb0JBO0VBQ0UscUJBQUE7QUNqQkY7QURtQkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ2hCRjtBRGtCRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7QUNqQko7QURrQ0k7RUFNRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFBYyxrQkFBQTtFQUFvQixnQkFBQTtFQUFrQixxQkFBQTtBQ2xDMUQ7QURtQ007RUFDRSxvQkFBQTtLQUFBLGlCQUFBO0FDakNSO0FEK0RJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUM3RE47QURrRUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CRXJZZ0I7QURzVWxCO0FEaUVFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQy9ESjtBRGdFSTtFQUNFLFdBQUE7QUM5RE47QUQrRE07RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDN0RSO0FEaUVJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDL0ROO0FEa0VJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDaEVOO0FEaUVNO0VBQ0UsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUMvRFI7QURnRVE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUM5RFY7QURxRUE7RUFDRSxtQkFBQTtBQ2xFRjtBRG9FQTtFQUNFLG1CQUFBO0FDakVGO0FEbUVBO0VBQ0Usc0ZBQUE7QUNoRUY7QURtRUE7RUFDRSxpQkFBQTtFQUNBLG1CRWhjYztFRmljZCxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNoRUY7QURtRUE7RUFDRSxlQUFBO0VBQ0EsMkJBQUE7QUNoRUY7QURtRUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNoRUY7QURpRUU7RUFDRSxtQkFBQTtBQy9ESjtBRGtFSTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDaEVOO0FEb0VFO0VBQ0UsYUFBQTtBQ2xFSjtBRG1FSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNqRU47QURrRU07RUFDRSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2hFUjtBRGtFTTtFQUNFLGtCQUFBO0FDaEVSO0FEc0VBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ25FRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZlZWQvZmVlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2FuZGh5YWRlZXAtdGhlbWVcIjtcclxuXHJcbi5sb2dvLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgLmxvZ28tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICAuc2xvZ2FuLXRleHQge1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VhcmNoLWJhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgLnNlYXJjaGJhci1pbnB1dC1jb250YWluZXIgaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLy8uZmVlZC1pbWFnZXMge1xyXG4vLyAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNSk7XHJcbi8vfVxyXG5cclxuLmZlZWQtc2xpZGVycyB7XHJcbiAgaGVpZ2h0OiA0MCU7XHJcbn1cclxuXHJcbi5mZWVkLWhlYWRpbmcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxOHB4IDAgNXB4O1xyXG4gIC5oZWFkaW5nLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAkaGVhZGVyLXNpemU7XHJcbiAgfVxyXG59XHJcblxyXG4ua25vdy1tb3JlIHtcclxuICBjb2xvcjogIzY2NjtcclxufVxyXG5cclxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXIge1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIG1heC1oZWlnaHQ6IDMwZW07XHJcbn1cclxuXHJcbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLW9uZSB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2Jhbm5lci0xMjMuZ2lmXCIpO1xyXG59XHJcblxyXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci10d28ge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9uZXctdGhlbWUvZmVlZC1iYW5uZXItMS5qcGVnXCIpO1xyXG59XHJcblxyXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci10aHJlZSB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL25ldy10aGVtZS9mZWVkLWJhbm5lci0yLmpwZWdcIik7XHJcbn1cclxuXHJcbi5mZWVkLWNvbnRhaW5lciB7XHJcbiAgLypiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjE0ZGVnLCByZ2JhKDQwLCAyOSwgMjMyLCAxKSAtMjUlLCByZ2IoODEsIDM2LCA4MikgNjMlKTsqL1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxufVxyXG5cclxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciA+IGRpdiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0JGQkZCRjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiA1cHggMTBweCAyOXB4ICNhYWFhYWE5NDtcclxufVxyXG5cclxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciAuZmVlZC1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtaW1hZ2UtaGFpciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2hhaXIuanBlZ1wiKTtcclxufVxyXG5cclxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1za2luIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvc2tpbi5qcGVnXCIpO1xyXG59XHJcblxyXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLWltYWdlLW1ha2V1cCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL21ha2V1cC5qcGVnXCIpO1xyXG59XHJcblxyXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvdXJzZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2NvdXJzZXMuanBlZ1wiKTtcclxufVxyXG5cclxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciAuZmVlZC10ZXh0IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjE0ZGVnLCByZ2JhKDQwLCAyOSwgMjMyLCAxKSAtMjUlLCByZ2IoODEsIDM2LCA4MikgNjMlKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmhlaWdodC05NXB4IHtcclxuIGhlaWdodDogOTVweDtcclxufVxyXG5cclxuLmhlaWdodC0yMDBweCB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLnNsaWRlX2NvbnRhaW5lciB7XHJcbiAgaW9uLWNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpIHJvdGF0ZSgxZGVnKTtcclxuICAgICAgdHJhbnNpdGlvbjogNjAwbXMgYWxsIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnN3aXBlci1zbGlkZS1hY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1LCAxLjA1KTtcclxuXHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICB0cmFuc2l0aW9uOiA0MDBtcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIGhlaWdodDogMjE1cHg7XHJcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4ubWVudS1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDAgMTVweDtcclxuICBmb250LXNpemU6ICRyZWd1bGFyLWZvbnQtc2l6ZTtcclxufVxyXG5cclxuLnByb2R1Y3RzX2NvbnRhaW5lciB7XHJcbiAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICB0cmFuc2l0aW9uOiA0MDBtcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5pbWFnZS1zbGlkZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQkZCRkJGO1xyXG4gICAgbWFyZ2luOiAwIDEwcHggNXB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW46IDAgMTBweCA1cHggMDtcclxuICAgIH1cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbjogMCAwIDVweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnNsaWRlci1pbWFnZSB7XHJcbiAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNsaWRlci10ZXh0IHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAucHJvZHVjdC1uYW1lLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB9XHJcbiAgICAgIC5wcm9kdWN0LW5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gICAgICAucHJvZHVjdC1wcmljZS1kZXRhaWxzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAucHJpY2UtY29udGFpbmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAucHJpY2Uge1xyXG4gICAgICAgICAgICBjb2xvcjogIzJkMmMyYztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRpc2NvdW50ZWQtcHJpY2Uge1xyXG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5zbGlkZV9jb250YWluZXIgLnNsaWRlcntcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IDAgMTBweCA1cHg7XHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW46IDAgMTBweCA1cHggMDtcclxuICB9XHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbjogMCAwIDVweCAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnMxIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zMS5qcGcnKTtcclxufVxyXG5cclxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnMyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zMi5qcGcnKTtcclxufVxyXG5cclxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnMzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zMy5qcGcnKTtcclxufVxyXG5cclxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnM0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zNC5qcGVnJyk7XHJcbn1cclxuXHJcbi5maWx0ZXItYnJpZ2h0LTAzIHtcclxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC4zKTtcclxufVxyXG5cclxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnAxIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zMS5qcGcnKTtcclxufVxyXG5cclxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnAyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zMi5qcGcnKTtcclxufVxyXG5cclxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnAzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zMy5qcGcnKTtcclxufVxyXG5cclxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnA0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zNC5qcGVnJyk7XHJcbn1cclxuXHJcbi5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3Mge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4ubWFpbi1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6ICNkM2QzZDM0ZjtcclxufVxyXG4ucXVpY2tfbWVudXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggI2FhYWFhYTk0O1xyXG4gIHBhZGRpbmc6IDdweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgZGl2Lm1lbnUtY29udGFpbmVyIHtcclxuICAgIGZsZXgtYmFzaXM6IDMwJTtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvL2JvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIG1hcmdpbjogM3B4O1xyXG4gICAgLy9ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAvL2JveC1zaGFkb3c6IHJnYigwIDAgMCAvIDUlKSAzcHggM3B4IDFweDtcclxuXHJcblxyXG4gICAgLy8mOm50aC1jaGlsZCgxKSB7XHJcbiAgICAvLyAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcclxuICAgIC8vfVxyXG4gICAgLy8mOm50aC1jaGlsZCgzKSB7XHJcbiAgICAvLyAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XHJcbiAgICAvL31cclxuICAgIC8vJjpudGgtY2hpbGQoNykge1xyXG4gICAgLy8gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7XHJcbiAgICAvL31cclxuICAgIC8vJjpudGgtY2hpbGQoOSkge1xyXG4gICAgLy8gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xyXG4gICAgLy99XHJcbiAgICAubWVudS1pbWFnZSB7XHJcbiAgICAgIC8vYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAvL2JhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICAgICAgLy9iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3M0LmpwZWcnKTtcclxuICAgICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgICB3aWR0aDogNjVweDtcclxuICAgICAgcGFkZGluZzogMXB4OyBib3JkZXItcmFkaXVzOiA1MCU7IG92ZXJmbG93OiBoaWRkZW47IGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgaW1nIHtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgfVxyXG4gICAgICAvLyYuaW1hZ2UtMSB7XHJcbiAgICAgIC8vICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy92ZWN0b3ItaGFpcmN1dC5qcGcnKTtcclxuICAgICAgLy99XHJcbiAgICAgIC8vJi5pbWFnZS0yIHtcclxuICAgICAgLy8gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3RocmVkZGluZzIuanBlZycpO1xyXG4gICAgICAvL31cclxuICAgICAgLy8mLmltYWdlLTMge1xyXG4gICAgICAvLyAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvdmVjdG9yX2ZhY2lhbC5qcGcnKTtcclxuICAgICAgLy99XHJcbiAgICAgIC8vJi5pbWFnZS00IHtcclxuICAgICAgLy8gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL21hbmljdXJlLmpwZWcnKTtcclxuICAgICAgLy99XHJcbiAgICAgIC8vJi5pbWFnZS01IHtcclxuICAgICAgLy8gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3Byb2R1Y3RzLmpwZWcnKTtcclxuICAgICAgLy99XHJcbiAgICAgIC8vJi5pbWFnZS02IHtcclxuICAgICAgLy8gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3VwcGVyTGlwcy5qcGVnJyk7XHJcbiAgICAgIC8vfVxyXG4gICAgICAvLyYuaW1hZ2UtNyB7XHJcbiAgICAgIC8vICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9icmlkYWwuanBlZycpO1xyXG4gICAgICAvL31cclxuICAgICAgLy8mLmltYWdlLTgge1xyXG4gICAgICAvLyAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvd2F4aW5nLmpwZWcnKTtcclxuICAgICAgLy99XHJcbiAgICAgIC8vJi5pbWFnZS05IHtcclxuICAgICAgLy8gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2NvdXJzZXMuanBlZycpO1xyXG4gICAgICAvL31cclxuICAgIH1cclxuICAgIC5tZW51LXRleHQge1xyXG4gICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hcHBsaWNhdGlvbi1kZXRhaWxzIHtcclxuICBtYXJnaW46IDE1cHggMCAwO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgLy9iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTkzZGVnLCAkcHJpbWFyeS1jb2xvciAyJSwgJHNlY29uZGFyeS1jb2xvciA4NCUpO1xyXG4gIC5vd25lci1pbmZvLWNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWJhc2lzOiAzNSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAub3duZXItaW1hZ2Uge1xyXG4gICAgICB3aWR0aDogODVweDtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm93bmVyLW5hbWUge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuc29jaWFsLW1lZGlhLWljb25zIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGRpdiB7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIC5tZWRpYS1pY29uIHtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxpbmtlZGluLWljb24ge1xyXG4gIGJhY2tncm91bmQ6ICMwRTc2QTg7XHJcbn1cclxuLmZiLWljb24ge1xyXG4gIGJhY2tncm91bmQ6ICMzQjU5OTg7XHJcbn1cclxuLmluc3RhLWljb24ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICRwcmltYXJ5LWNvbG9yLCAjYmMyYTZkLCAjYTgyZTdhLCAjOTAzNDgzLCAkc2Vjb25kYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuLmNvcHktcmlnaHRzIHtcclxuICBwYWRkaW5nOiA1cHggMTVweDtcclxuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmVuZC1zZWN0aW9uIHtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG59XHJcblxyXG4uc2FmZXR5LW1lYXN1cmVzIHtcclxuICBtYXJnaW46IDE1cHggMCAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNCRkJGQkY7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLm1hcmdpbi1ib3R0b20tMTAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgLmxvZ28tc2FmZSB7XHJcbiAgICAubG9nby1pbWFnZSB7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICB3aWR0aDogMzVweDtcclxuICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgICAubG9nby10ZXh0IHt9XHJcbiAgfVxyXG4gIC5tZWFzdXJlcy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5tZWFzdXJlIHtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC5tZWFzdXJlLWltYWdlIHtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5tZWFzdXJlLXRleHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmN1c3RvbWlzZS1mYWIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4iLCIubG9nby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuLmxvZ28tY29udGFpbmVyIC5sb2dvLXRleHQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4ubG9nby1jb250YWluZXIgLnNsb2dhbi10ZXh0IHtcbiAgZm9udC1zaXplOiA4cHg7XG59XG5cbi5zZWFyY2gtYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5zZWFyY2gtYmFyIC5zZWFyY2hiYXItaW5wdXQtY29udGFpbmVyIGlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmZlZWQtc2xpZGVycyB7XG4gIGhlaWdodDogNDAlO1xufVxuXG4uZmVlZC1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDE4cHggMCA1cHg7XG59XG4uZmVlZC1oZWFkaW5nIC5oZWFkaW5nLXRleHQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5rbm93LW1vcmUge1xuICBjb2xvcjogIzY2Njtcbn1cblxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXIge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAzMGVtO1xufVxuXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci1vbmUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmFubmVyLTEyMy5naWZcIik7XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLXR3byB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9uZXctdGhlbWUvZmVlZC1iYW5uZXItMS5qcGVnXCIpO1xufVxuXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci10aHJlZSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9uZXctdGhlbWUvZmVlZC1iYW5uZXItMi5qcGVnXCIpO1xufVxuXG4uZmVlZC1jb250YWluZXIge1xuICAvKmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMTRkZWcsIHJnYmEoNDAsIDI5LCAyMzIsIDEpIC0yNSUsIHJnYig4MSwgMzYsIDgyKSA2MyUpOyovXG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG59XG5cbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgPiBkaXYge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCRkJGQkY7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiA1cHggMTBweCAyOXB4ICNhYWFhYWE5NDtcbn1cblxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciAuZmVlZC1pbWFnZSB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXIgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1oYWlyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2hhaXIuanBlZ1wiKTtcbn1cblxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1za2luIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3NraW4uanBlZ1wiKTtcbn1cblxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1tYWtldXAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbWFrZXVwLmpwZWdcIik7XG59XG5cbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtaW1hZ2UtY291cnNlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2NvdXJzZXMuanBlZ1wiKTtcbn1cblxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciAuZmVlZC10ZXh0IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIxNGRlZywgIzI4MWRlOCAtMjUlLCAjNTEyNDUyIDYzJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaGVpZ2h0LTk1cHgge1xuICBoZWlnaHQ6IDk1cHg7XG59XG5cbi5oZWlnaHQtMjAwcHgge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uc2xpZGVfY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAyMTVweDtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uc2xpZGVfY29udGFpbmVyIGlvbi1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTYwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG4uc2xpZGVfY29udGFpbmVyIGlvbi1jYXJkIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKSByb3RhdGUoMWRlZyk7XG4gIHRyYW5zaXRpb246IDYwMG1zIGFsbCBlYXNlLWluLW91dDtcbn1cbi5zbGlkZV9jb250YWluZXIgLnN3aXBlci1zbGlkZS1hY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUsIDEuMDUpO1xufVxuLnNsaWRlX2NvbnRhaW5lciAuc3dpcGVyLXNsaWRlLWFjdGl2ZSBpb24tY2FyZCBpbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xufVxuLnNsaWRlX2NvbnRhaW5lciAuc3dpcGVyLXNsaWRlIHtcbiAgdHJhbnNpdGlvbjogNDAwbXMgYWxsIGVhc2UtaW4tb3V0O1xufVxuLnNsaWRlX2NvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWVudS1jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnByb2R1Y3RzX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG4ucHJvZHVjdHNfY29udGFpbmVyIC5zd2lwZXItc2xpZGUge1xuICB0cmFuc2l0aW9uOiA0MDBtcyBhbGwgZWFzZS1pbi1vdXQ7XG59XG4ucHJvZHVjdHNfY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucHJvZHVjdHNfY29udGFpbmVyIC5pbWFnZS1zbGlkZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAyMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0JGQkZCRjtcbiAgbWFyZ2luOiAwIDEwcHggNXB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucHJvZHVjdHNfY29udGFpbmVyIC5pbWFnZS1zbGlkZXItY29udGFpbmVyOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luOiAwIDEwcHggNXB4IDA7XG59XG4ucHJvZHVjdHNfY29udGFpbmVyIC5pbWFnZS1zbGlkZXItY29udGFpbmVyOmxhc3QtY2hpbGQge1xuICBtYXJnaW46IDAgMCA1cHggMTBweDtcbn1cbi5wcm9kdWN0c19jb250YWluZXIgLmltYWdlLXNsaWRlci1jb250YWluZXIgLnNsaWRlci1pbWFnZSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wcm9kdWN0c19jb250YWluZXIgLmltYWdlLXNsaWRlci1jb250YWluZXIgLnNsaWRlci1pbWFnZSBpbWcge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG4ucHJvZHVjdHNfY29udGFpbmVyIC5pbWFnZS1zbGlkZXItY29udGFpbmVyIC5zbGlkZXItdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcm9kdWN0c19jb250YWluZXIgLmltYWdlLXNsaWRlci1jb250YWluZXIgLnNsaWRlci10ZXh0IC5wcm9kdWN0LW5hbWUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5wcm9kdWN0c19jb250YWluZXIgLmltYWdlLXNsaWRlci1jb250YWluZXIgLnNsaWRlci10ZXh0IC5wcm9kdWN0LW5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnByb2R1Y3RzX2NvbnRhaW5lciAuaW1hZ2Utc2xpZGVyLWNvbnRhaW5lciAuc2xpZGVyLXRleHQgLnByb2R1Y3QtcHJpY2UtZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5wcm9kdWN0c19jb250YWluZXIgLmltYWdlLXNsaWRlci1jb250YWluZXIgLnNsaWRlci10ZXh0IC5wcm9kdWN0LXByaWNlLWRldGFpbHMgLnByaWNlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucHJvZHVjdHNfY29udGFpbmVyIC5pbWFnZS1zbGlkZXItY29udGFpbmVyIC5zbGlkZXItdGV4dCAucHJvZHVjdC1wcmljZS1kZXRhaWxzIC5wcmljZS1jb250YWluZXIgLnByaWNlIHtcbiAgY29sb3I6ICMyZDJjMmM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wcm9kdWN0c19jb250YWluZXIgLmltYWdlLXNsaWRlci1jb250YWluZXIgLnNsaWRlci10ZXh0IC5wcm9kdWN0LXByaWNlLWRldGFpbHMgLnByaWNlLWNvbnRhaW5lciAuZGlzY291bnRlZC1wcmljZSB7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCAxMHB4IDVweDtcbn1cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlciBpbWcge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXI6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW46IDAgMTBweCA1cHggMDtcbn1cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlcjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luOiAwIDAgNXB4IDEwcHg7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlci5zMSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zMS5qcGdcIik7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlci5zMiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zMi5qcGdcIik7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlci5zMyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zMy5qcGdcIik7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlci5zNCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zNC5qcGVnXCIpO1xufVxuXG4uZmlsdGVyLWJyaWdodC0wMyB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjMpO1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIucDEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvczEuanBnXCIpO1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIucDIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvczIuanBnXCIpO1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIucDMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvczMuanBnXCIpO1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIucDQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvczQuanBlZ1wiKTtcbn1cblxuLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvcyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNkM2QzZDM0Zjtcbn1cblxuLnF1aWNrX21lbnVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW46IDE1cHggMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCAjYWFhYWFhOTQ7XG4gIHBhZGRpbmc6IDdweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucXVpY2tfbWVudXMgZGl2Lm1lbnUtY29udGFpbmVyIHtcbiAgZmxleC1iYXNpczogMzAlO1xuICBwYWRkaW5nOiAyJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogM3B4O1xufVxuLnF1aWNrX21lbnVzIGRpdi5tZW51LWNvbnRhaW5lciAubWVudS1pbWFnZSB7XG4gIGhlaWdodDogNjVweDtcbiAgd2lkdGg6IDY1cHg7XG4gIHBhZGRpbmc6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ucXVpY2tfbWVudXMgZGl2Lm1lbnUtY29udGFpbmVyIC5tZW51LWltYWdlIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLnF1aWNrX21lbnVzIGRpdi5tZW51LWNvbnRhaW5lciAubWVudS10ZXh0IHtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hcHBsaWNhdGlvbi1kZXRhaWxzIHtcbiAgbWFyZ2luOiAxNXB4IDAgMDtcbiAgcGFkZGluZzogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6IHdoaXRlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzI2NTc5MTtcbn1cbi5hcHBsaWNhdGlvbi1kZXRhaWxzIC5vd25lci1pbmZvLWNvbnRhaW5lciB7XG4gIGZsZXgtYmFzaXM6IDM1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uYXBwbGljYXRpb24tZGV0YWlscyAub3duZXItaW5mby1jb250YWluZXIgLm93bmVyLWltYWdlIHtcbiAgd2lkdGg6IDg1cHg7XG59XG4uYXBwbGljYXRpb24tZGV0YWlscyAub3duZXItaW5mby1jb250YWluZXIgLm93bmVyLWltYWdlIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAycHggc29saWQgI0JEMUU1MTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDVweCAwO1xuICBwYWRkaW5nOiAycHg7XG59XG4uYXBwbGljYXRpb24tZGV0YWlscyAub3duZXItaW5mby1jb250YWluZXIgLm93bmVyLW5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hcHBsaWNhdGlvbi1kZXRhaWxzIC5vd25lci1pbmZvLWNvbnRhaW5lciAuc29jaWFsLW1lZGlhLWljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYXBwbGljYXRpb24tZGV0YWlscyAub3duZXItaW5mby1jb250YWluZXIgLnNvY2lhbC1tZWRpYS1pY29ucyBkaXYge1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAzNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmFwcGxpY2F0aW9uLWRldGFpbHMgLm93bmVyLWluZm8tY29udGFpbmVyIC5zb2NpYWwtbWVkaWEtaWNvbnMgZGl2IC5tZWRpYS1pY29uIHtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmxpbmtlZGluLWljb24ge1xuICBiYWNrZ3JvdW5kOiAjMEU3NkE4O1xufVxuXG4uZmItaWNvbiB7XG4gIGJhY2tncm91bmQ6ICMzQjU5OTg7XG59XG5cbi5pbnN0YS1pY29uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgI0JEMUU1MSwgI2JjMmE2ZCwgI2E4MmU3YSwgIzkwMzQ4MywgIzI2NTc5MSk7XG59XG5cbi5jb3B5LXJpZ2h0cyB7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjQkQxRTUxO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmVuZC1zZWN0aW9uIHtcbiAgcGFkZGluZzogMTBweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5zYWZldHktbWVhc3VyZXMge1xuICBtYXJnaW46IDE1cHggMCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCRkJGQkY7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5zYWZldHktbWVhc3VyZXMgLm1hcmdpbi1ib3R0b20tMTAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnNhZmV0eS1tZWFzdXJlcyAubG9nby1zYWZlIC5sb2dvLWltYWdlIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5zYWZldHktbWVhc3VyZXMgLm1lYXN1cmVzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uc2FmZXR5LW1lYXN1cmVzIC5tZWFzdXJlcy1jb250YWluZXIgLm1lYXN1cmUge1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zYWZldHktbWVhc3VyZXMgLm1lYXN1cmVzLWNvbnRhaW5lciAubWVhc3VyZSAubWVhc3VyZS1pbWFnZSB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uc2FmZXR5LW1lYXN1cmVzIC5tZWFzdXJlcy1jb250YWluZXIgLm1lYXN1cmUgLm1lYXN1cmUtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmN1c3RvbWlzZS1mYWIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn0iLCIvLyBwcmV2aW91cyBUaGVtZVxyXG4vLyRwcmltYXJ5LWNvbG9yOiAjZTk1YzhmO1xyXG4vLyRzZWNvbmRhcnktY29sb3I6ICM2MTRkN2Y7XHJcblxyXG4vLyBOZXcgVGhlbWVcclxuJHByaW1hcnktY29sb3I6ICNCRDFFNTE7XHJcbiRzZWNvbmRhcnktY29sb3I6ICMyNjU3OTE7XHJcblxyXG4kcmVndWxhci1mb250LXNpemU6IDE0cHg7XHJcbiRmb250LXNpemUtMTogMTZweDtcclxuJGhlYWRlci1zaXplOiAyMHB4O1xyXG4kZm9udC1zaXplLTM6IDMwcHg7XHJcblxyXG4kYnV0dG9uLWhlaWdodDogNDVweDtcclxuXHJcbiJdfQ== */";
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
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _shared_components_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared-components/storage.service */
    "./src/app/shared-components/storage.service.ts");
    /* harmony import */


    var _assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../assets/constants/app-constants */
    "./src/assets/constants/app-constants.ts");

    var FeedPage = /*#__PURE__*/function () {
      function FeedPage(storageService, sharedService, router, adminService) {
        _classCallCheck(this, FeedPage);

        this.storageService = storageService;
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
          initialSlide: 2,
          spaceBetween: 10,
          speed: 400,
          autoplay: true,
          loop: true
        };
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
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getPackages();
          this.getProducts();
          this.getServiceTypes();
          this.todayYear = new Date().getFullYear();
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          this.sharedService.onSettingEvent.next(false);
          this.sharedService.showBackIcon.next(false);
          var userData = this.storageService.getStorageValue(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_9__["appConstants"].USER_INFO);

          if (userData.roleId.name === 'admin') {
            this.sharedService.showBackIcon.next(true);
          }

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
          var _this3 = this;

          setTimeout(function () {
            _this3.packagesSlider.slideTo(0).then();
          }, 3000);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "refreshPage",
        value: function refreshPage(event) {
          var _this4 = this;

          setTimeout(function () {
            _this4.getServiceTypes();

            event.target.complete();
          }, 1000);
        }
      }, {
        key: "getPackages",
        value: function getPackages() {
          var _this5 = this;

          this.sharedService.showSkeletonSpinner.next(true);
          this.adminService.getServicePackage().subscribe(function (res) {
            return _this5.getServicePackageSuccess(res);
          }, function (error) {
            _this5.adminService.commonError(error);
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
          var _this6 = this;

          this.sharedService.showSkeletonSpinner.next(true);
          this.adminService.getProducts().subscribe(function (res) {
            return _this6.getProductSuccess(res);
          }, function (error) {
            _this6.adminService.commonError(error);
          });
        }
      }, {
        key: "getProductSuccess",
        value: function getProductSuccess(res) {
          this.productList = res;
        }
      }, {
        key: "getServiceTypes",
        value: function getServiceTypes() {
          var _this7 = this;

          this.sharedService.showSkeletonSpinner.next(true);
          this.adminService.getAllServiceTypes().subscribe(function (res) {
            return _this7.getAllServiceTypesSuccess(res);
          }, function (error) {
            _this7.adminService.commonError(error);
          });
        }
      }, {
        key: "getAllServiceTypesSuccess",
        value: function getAllServiceTypesSuccess(res) {
          this.serviceTypesList = res;
          this.serviceTypesList = this.serviceTypesList.map(function (ser) {
            // Adding the api url and also updating image with timestamp
            ser.imageUrl = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].domainUrlApi).concat(ser.imageUrl, "?").concat(new Date().getTime());
            return ser;
          });
          this.sharedService.showSkeletonSpinner.next(false);
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
        type: _shared_components_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]
      }, {
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_components_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"], _shared_service_service__WEBPACK_IMPORTED_MODULE_6__["SharedServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])], FeedPage);
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


    __webpack_exports__["default"] = ".add-item .custom-add-button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #265791;\n  border-radius: 5px;\n}\n.add-item .custom-add-button .add-text {\n  padding: 0 5px;\n  color: #265791;\n  background: #e95c8f1f;\n}\n.add-item .custom-add-button i.fa.fa-plus {\n  padding: 5px;\n  background: #e95c8f40;\n  color: #265791;\n  border-left: 1px solid #265791;\n  font-size: 10px;\n}\n.add-item .custom-add-more-button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #265791;\n  border-radius: 5px;\n}\n.add-item .custom-add-more-button .add-text {\n  padding: 2px 5px;\n  color: #265791;\n}\n.add-item .custom-add-more-button .in-cart-box {\n  padding: 0 6px;\n  color: #265791;\n  background: #e95c8f1f;\n}\n.add-item .custom-add-more-button i.fa.fa-plus {\n  padding: 6px;\n  background: #e95c8f40;\n  color: #265791;\n  font-size: 10px;\n}\n.add-item .custom-add-more-button i.fa.fa-minus {\n  padding: 6px;\n  background: #e95c8f40;\n  color: #265791;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYWRkLWJ1dHRvbi9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxhcHBcXHNoYXJlZC1jb21wb25lbnRzXFxhZGQtYnV0dG9uXFxhZGQtYnV0dG9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYWRkLWJ1dHRvbi9hZGQtYnV0dG9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYWRkLWJ1dHRvbi9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxzYW5kaHlhZGVlcC10aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsYUFBQTtFQUFlLDhCQUFBO0VBQ2YsbUJBQUE7RUFBcUIseUJBQUE7RUFDckIsa0JBQUE7QUNBSjtBRENJO0VBQ0UsY0FBQTtFQUNBLGNFSFk7RUZJWixxQkFBQTtBQ0NOO0FEQ0k7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxjRVRZO0VGVVosOEJBQUE7RUFDQSxlQUFBO0FDQ047QURFRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0FKO0FEQ0k7RUFDRSxnQkFBQTtFQUNBLGNFdEJZO0FEdUJsQjtBRENJO0VBQ0UsY0FBQTtFQUVBLGNFM0JZO0VGNEJaLHFCQUFBO0FDQU47QURHSTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGNFbENZO0VGbUNaLGVBQUE7QUNETjtBRElJO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0V6Q1k7RUYwQ1osZUFBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYWRkLWJ1dHRvbi9hZGQtYnV0dG9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zYW5kaHlhZGVlcC10aGVtZVwiO1xyXG5cclxuLmFkZC1pdGVtIHtcclxuICAuY3VzdG9tLWFkZC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC5hZGQtdGV4dCB7XHJcbiAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgYmFja2dyb3VuZDogI2U5NWM4ZjFmO1xyXG4gICAgfVxyXG4gICAgaS5mYS5mYS1wbHVzIHtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZTk1YzhmNDA7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmN1c3RvbS1hZGQtbW9yZS1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLmFkZC10ZXh0IHtcclxuICAgICAgcGFkZGluZzogMnB4IDVweDtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICB9XHJcbiAgICAuaW4tY2FydC1ib3gge1xyXG4gICAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgICAgLy9ib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgYmFja2dyb3VuZDogI2U5NWM4ZjFmO1xyXG4gICAgICAvL2JvcmRlci1sZWZ0OiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgIH1cclxuICAgIGkuZmEuZmEtcGx1cyB7XHJcbiAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgYmFja2dyb3VuZDogI2U5NWM4ZjQwO1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG5cclxuICAgIH1cclxuICAgIGkuZmEuZmEtbWludXMge1xyXG4gICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlOTVjOGY0MDtcclxuICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNjU3OTE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1idXR0b24gLmFkZC10ZXh0IHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGNvbG9yOiAjMjY1NzkxO1xuICBiYWNrZ3JvdW5kOiAjZTk1YzhmMWY7XG59XG4uYWRkLWl0ZW0gLmN1c3RvbS1hZGQtYnV0dG9uIGkuZmEuZmEtcGx1cyB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZDogI2U5NWM4ZjQwO1xuICBjb2xvcjogIzI2NTc5MTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMjY1NzkxO1xuICBmb250LXNpemU6IDEwcHg7XG59XG4uYWRkLWl0ZW0gLmN1c3RvbS1hZGQtbW9yZS1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNjU3OTE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiAuYWRkLXRleHQge1xuICBwYWRkaW5nOiAycHggNXB4O1xuICBjb2xvcjogIzI2NTc5MTtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiAuaW4tY2FydC1ib3gge1xuICBwYWRkaW5nOiAwIDZweDtcbiAgY29sb3I6ICMyNjU3OTE7XG4gIGJhY2tncm91bmQ6ICNlOTVjOGYxZjtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiBpLmZhLmZhLXBsdXMge1xuICBwYWRkaW5nOiA2cHg7XG4gIGJhY2tncm91bmQ6ICNlOTVjOGY0MDtcbiAgY29sb3I6ICMyNjU3OTE7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5hZGQtaXRlbSAuY3VzdG9tLWFkZC1tb3JlLWJ1dHRvbiBpLmZhLmZhLW1pbnVzIHtcbiAgcGFkZGluZzogNnB4O1xuICBiYWNrZ3JvdW5kOiAjZTk1YzhmNDA7XG4gIGNvbG9yOiAjMjY1NzkxO1xuICBmb250LXNpemU6IDEwcHg7XG59IiwiLy8gcHJldmlvdXMgVGhlbWVcclxuLy8kcHJpbWFyeS1jb2xvcjogI2U5NWM4ZjtcclxuLy8kc2Vjb25kYXJ5LWNvbG9yOiAjNjE0ZDdmO1xyXG5cclxuLy8gTmV3IFRoZW1lXHJcbiRwcmltYXJ5LWNvbG9yOiAjQkQxRTUxO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjMjY1NzkxO1xyXG5cclxuJHJlZ3VsYXItZm9udC1zaXplOiAxNHB4O1xyXG4kZm9udC1zaXplLTE6IDE2cHg7XHJcbiRoZWFkZXItc2l6ZTogMjBweDtcclxuJGZvbnQtc2l6ZS0zOiAzMHB4O1xyXG5cclxuJGJ1dHRvbi1oZWlnaHQ6IDQ1cHg7XHJcblxyXG4iXX0= */";
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
  },

  /***/
  "./src/app/shared-components/skeleton-loader/skeleton-loader.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/shared-components/skeleton-loader/skeleton-loader.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsSkeletonLoaderSkeletonLoaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".skeleton-container {\n  z-index: 999;\n  background: white;\n  top: 0;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  padding: 80px 15px 20px;\n}\n\n.middle-box {\n  flex-wrap: wrap;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.middle-box ngx-skeleton-loader {\n  flex-basis: 30%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 15px 0;\n}\n\n.footer-menu {\n  display: flex;\n  justify-content: space-around;\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  padding: 10px 0;\n  align-items: center;\n  border-top: 1px solid #eff1f6;\n}\n\n.footer-menu div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvc2tlbGV0b24tbG9hZGVyL0M6XFxVc2Vyc1xcYWFiaGFnd2FcXHNhbmRoeWFkZWVwXFxzYW5kaHlhZGVlcC11aS9zcmNcXGFwcFxcc2hhcmVkLWNvbXBvbmVudHNcXHNrZWxldG9uLWxvYWRlclxcc2tlbGV0b24tbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9za2VsZXRvbi1sb2FkZXIvc2tlbGV0b24tbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsTUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRUo7O0FERUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ0NGOztBREFFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL3NrZWxldG9uLWxvYWRlci9za2VsZXRvbi1sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tlbGV0b24tY29udGFpbmVyIHtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgdG9wOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogODBweCAxNXB4IDIwcHg7XHJcbn1cclxuXHJcbi5taWRkbGUtYm94IHtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG5neC1za2VsZXRvbi1sb2FkZXIge1xyXG4gICAgZmxleC1iYXNpczogMzAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICB9XHJcbn1cclxuXHJcbi5mb290ZXItbWVudSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWZmMWY2O1xyXG4gIGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxufVxyXG4iLCIuc2tlbGV0b24tY29udGFpbmVyIHtcbiAgei1pbmRleDogOTk5O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdG9wOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDgwcHggMTVweCAyMHB4O1xufVxuXG4ubWlkZGxlLWJveCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWlkZGxlLWJveCBuZ3gtc2tlbGV0b24tbG9hZGVyIHtcbiAgZmxleC1iYXNpczogMzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweCAwO1xufVxuXG4uZm9vdGVyLW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWZmMWY2O1xufVxuLmZvb3Rlci1tZW51IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared-components/skeleton-loader/skeleton-loader.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/shared-components/skeleton-loader/skeleton-loader.component.ts ***!
    \********************************************************************************/

  /*! exports provided: SkeletonLoaderComponent */

  /***/
  function srcAppSharedComponentsSkeletonLoaderSkeletonLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkeletonLoaderComponent", function () {
      return SkeletonLoaderComponent;
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


    var _shared_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared-service.service */
    "./src/app/shared-service.service.ts");

    var SkeletonLoaderComponent = /*#__PURE__*/function () {
      function SkeletonLoaderComponent(sharedServiceService) {
        _classCallCheck(this, SkeletonLoaderComponent);

        this.sharedServiceService = sharedServiceService;
        this.showSkeletonSpinner = false;
      }

      _createClass(SkeletonLoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.sharedServiceService.showSkeletonSpinner.subscribe(function (res) {
            _this8.showSkeletonSpinner = res;
          });
        }
      }]);

      return SkeletonLoaderComponent;
    }();

    SkeletonLoaderComponent.ctorParameters = function () {
      return [{
        type: _shared_service_service__WEBPACK_IMPORTED_MODULE_2__["SharedServiceService"]
      }];
    };

    SkeletonLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-skeleton-loader',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./skeleton-loader.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/skeleton-loader/skeleton-loader.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./skeleton-loader.component.scss */
      "./src/app/shared-components/skeleton-loader/skeleton-loader.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_service__WEBPACK_IMPORTED_MODULE_2__["SharedServiceService"]])], SkeletonLoaderComponent);
    /***/
  },

  /***/
  "./src/app/shared-components/skeleton-loader/skeleton-loader.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/shared-components/skeleton-loader/skeleton-loader.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: SkeletonLoaderModule */

  /***/
  function srcAppSharedComponentsSkeletonLoaderSkeletonLoaderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkeletonLoaderModule", function () {
      return SkeletonLoaderModule;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _skeleton_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./skeleton-loader.component */
    "./src/app/shared-components/skeleton-loader/skeleton-loader.component.ts");
    /* harmony import */


    var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-skeleton-loader */
    "./node_modules/ngx-skeleton-loader/fesm2015/ngx-skeleton-loader.js");

    var SkeletonLoaderModule = function SkeletonLoaderModule() {
      _classCallCheck(this, SkeletonLoaderModule);
    };

    SkeletonLoaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_7__["NgxSkeletonLoaderModule"]],
      exports: [_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_6__["SkeletonLoaderComponent"]],
      declarations: [_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_6__["SkeletonLoaderComponent"]]
    })], SkeletonLoaderModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-feed-feed-module-es5.js.map