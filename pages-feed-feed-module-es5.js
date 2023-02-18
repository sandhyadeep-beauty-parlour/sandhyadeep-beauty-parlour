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


    __webpack_exports__["default"] = "<ion-content class=\"top-adjust\">\n    <ion-searchbar color=\"light\" class=\"search-bar\" placeholder=\"Search\"></ion-searchbar>\n    <ion-slides class=\"feed-sliders\" pager=\"true\" [options]=\"slideOpts\">\n        <ion-slide class=\"feed-images feed-slider feed-slider-one\">\n\n        </ion-slide>\n        <ion-slide class=\"feed-images feed-slider feed-slider-two\">\n\n        </ion-slide>\n        <ion-slide class=\"feed-images feed-slider feed-slider-three\">\n\n        </ion-slide>\n    </ion-slides>\n    <div class=\"menu-container feed-container\">\n<!--        <div class=\"feed-heading\">-->\n<!--            <h2><b>Services</b></h2>-->\n<!--        </div>-->\n<!--        <div class=\"height-95px slide_container\">-->\n<!--            <div class=\"slider s1 filter-bright-03\"></div>-->\n<!--            <div class=\"slider s2 filter-bright-03\"></div>-->\n<!--            <div class=\"slider s3 filter-bright-03\"></div>-->\n<!--            <div class=\"slider s4 filter-bright-03\"></div>-->\n<!--        </div>-->\n\n        <div class=\"quick_menus\">\n            <div (click)=\"goServices()\" class=\"menu-container\">\n                <div class=\"menu-image image-1\"></div>\n                <div class=\"menu-text\">Hair Cuts</div>\n            </div>\n            <div (click)=\"goServices()\" class=\"menu-container\">\n                <div class=\"menu-image image-2\"></div>\n                <div class=\"menu-text\">Eye Brows</div>\n            </div>\n            <div (click)=\"goServices()\" class=\"menu-container\">\n                <div class=\"menu-image image-3\"></div>\n                <div class=\"menu-text\">Facials</div>\n            </div>\n            <div (click)=\"goServices()\" class=\"menu-container\">\n                <div class=\"menu-image image-4\"></div>\n                <div class=\"menu-text\">Manicure</div>\n            </div>\n            <div (click)=\"goServices()\" class=\"menu-container\">\n                <div class=\"menu-image image-5\"></div>\n                <div class=\"menu-text\">Products</div>\n            </div>\n            <div (click)=\"goServices()\" class=\"menu-container\">\n                <div class=\"menu-image image-6\"></div>\n                <div class=\"menu-text\">Upper lips</div>\n            </div>\n            <div (click)=\"goServices()\" class=\"menu-container\">\n                <div class=\"menu-image image-7\"></div>\n                <div class=\"menu-text\">Bridal Makeup</div>\n            </div>\n            <div (click)=\"goServices()\" class=\"menu-container\">\n                <div class=\"menu-image image-8\"></div>\n                <div class=\"menu-text\">Waxing</div>\n            </div>\n            <div (click)=\"goServices()\" class=\"menu-container\">\n                <div class=\"menu-image image-9\"></div>\n                <div class=\"menu-text\">Courses</div>\n            </div>\n        </div>\n\n        <div class=\"feed-heading\">\n            <div class=\"heading-text\">\n                <b>Packages</b>\n            </div>\n            <div class=\"know-more\">See All <i class=\"fa fa-angle-right\"></i></div>\n        </div>\n        <div class=\"height-200px slide_container\">\n            <div class=\"slider p1\"></div>\n            <div class=\"slider p2\"></div>\n            <div class=\"slider p3\"></div>\n            <div class=\"slider p4\"></div>\n        </div>\n        <div class=\"feed-heading\">\n            <div class=\"heading-text\">\n                <b>Our Stylist</b>\n            </div>\n            <div (click)=\"onKnowMore()\" class=\"know-more\">Know More <i class=\"fa fa-angle-right\"></i></div>\n        </div>\n        <div class=\"application-details\">\n            <div class=\"owner-info-container\">\n                <div class=\"owner-image\">\n                    <img src=\"../../../assets/deepaa_bhagwat.jpg\">\n                </div>\n                <div class=\"owner-details\">\n                    <div class=\"owner-name\">Deepaa Bhagwat</div>\n                    <div class=\"social-media-icons\">\n                        <div class=\"fb-icon\"><i class=\"media-icon fa fa-facebook\"></i></div>\n                        <div class=\"insta-icon\"><i class=\"media-icon fa fa-instagram\"></i></div>\n                        <div class=\"linkedin-icon\"><i class=\"media-icon fa fa-linkedin\"></i></div>\n                    </div>\n                </div>\n            </div>\n            <div>\n                <div>\n                    <ul>\n                        <li>Media & Beauty Makeup Diploma · Media Makeup · Fsx · Singapore</li>\n                        <li>Makeup Techniques with Air Brush Machine · Mumbai, Maharashtra</li>\n                        <li>Master Diploma in Makeup Artistry · Singapore</li>\n                        <li>Comite International D’Esthetique Et De Cosmetologie., Zurich.</li>\n                        <li>British Association of Beauty Therapy & Cosmetology, London.</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"copy-rights\">\n            <i class=\"fa fa-copyright\"></i> Copyright 2020 <br> Sandhyadeep Beauty Parlour. <br>\n        </div>\n<!--        <div class=\"feed-container\">-->\n<!--            <div class=\"feed-image-container\">-->\n<!--                <div>-->\n<!--                    <div class=\"feed-image feed-image-hair\"></div>-->\n<!--                    <div class=\"feed-text\"> Hair</div>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--            <div class=\"feed-image-container\">-->\n<!--                <div>-->\n<!--                    <div class=\"feed-image feed-image-skin\"></div>-->\n<!--                    <div class=\"feed-text\"> Skin</div>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--            <div class=\"feed-image-container\">-->\n<!--                <div>-->\n<!--                    <div class=\"feed-image feed-image-makeup\"></div>-->\n<!--                    <div class=\"feed-text\"> Makeup</div>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--            <div class=\"feed-image-container\">-->\n<!--                <div>-->\n<!--                    <div class=\"feed-image feed-image-course\"></div>-->\n<!--                    <div class=\"feed-text\"> Courses</div>-->\n<!--                </div>-->\n<!--            </div>-->\n<!--        </div>-->\n    </div>\n\n</ion-content>\n\n";
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

    var FeedPageModule = function FeedPageModule() {
      _classCallCheck(this, FeedPageModule);
    };

    FeedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _feed_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeedPageRoutingModule"], _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"]],
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


    __webpack_exports__["default"] = ".top-adjust {\n  top: 65px;\n}\n\n.logo-container {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n\n.logo-container .logo-text {\n  font-size: 20px;\n  font-weight: 700;\n}\n\n.logo-container .slogan-text {\n  font-size: 8px;\n}\n\n.search-bar {\n  position: absolute;\n  z-index: 999;\n  opacity: 0.5;\n}\n\n.search-bar .searchbar-input-container input {\n  background-color: white !important;\n}\n\n.feed-sliders {\n  height: 40%;\n}\n\n.feed-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 18px 0 5px;\n}\n\n.feed-heading .heading-text {\n  font-size: 24px;\n}\n\n.know-more {\n  color: #666;\n}\n\n.feed-sliders .feed-slider {\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-position: center center !important;\n  max-height: 30em;\n}\n\n.feed-sliders .feed-slider-one {\n  background: url('beaurty-1.jpg');\n}\n\n.feed-sliders .feed-slider-two {\n  background: url('beauty-2.jpg');\n}\n\n.feed-sliders .feed-slider-three {\n  background: url('beauty-3.jpg');\n}\n\n.feed-container {\n  /*background: linear-gradient(214deg, rgba(40, 29, 232, 1) -25%, rgb(81, 36, 82) 63%);*/\n  padding: 30px;\n  border: 1px solid #fff;\n}\n\n.feed-container .feed-image-container > div {\n  margin-bottom: 30px;\n  position: relative;\n  border: 1px solid #BFBFBF;\n  background-color: white;\n  box-shadow: 5px 10px 29px #aaaaaa94;\n}\n\n.feed-container .feed-image-container .feed-image {\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  cursor: pointer;\n  background-position: center center !important;\n  height: 200px;\n}\n\n.feed-container .feed-image-container .feed-image-hair {\n  background-image: url('hair.jpeg');\n}\n\n.feed-container .feed-image-container .feed-image-skin {\n  background-image: url('skin.jpeg');\n}\n\n.feed-container .feed-image-container .feed-image-makeup {\n  background-image: url('makeup.jpeg');\n}\n\n.feed-container .feed-image-container .feed-image-course {\n  background-image: url('courses.jpeg');\n}\n\n.feed-container .feed-image-container .feed-text {\n  background: linear-gradient(214deg, #281de8 -25%, #512452 63%);\n  text-align: center;\n  font-weight: bold;\n  color: white;\n  bottom: 0;\n  width: 100%;\n  padding: 15px;\n  font-size: 20px;\n}\n\n.height-95px {\n  height: 95px;\n}\n\n.height-200px {\n  height: 200px;\n}\n\n.slide_container {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n}\n\n.menu-container {\n  padding: 0 15px;\n}\n\n.feed-container {\n  margin-bottom: 65px;\n}\n\n.slide_container .slider {\n  display: inline-block;\n  height: 95%;\n  border-radius: 10px;\n  border: 1px solid #BFBFBF;\n  background-color: white;\n  width: 200px;\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-position: center center !important;\n  margin: 0 10px 5px;\n}\n\n.slide_container .slider:first-child {\n  margin: 0 10px 5px 0;\n}\n\n.slide_container .slider:last-child {\n  margin: 0 0 5px 10px;\n}\n\n.slide_container .slider.s1 {\n  background-image: url('s1.jpg');\n}\n\n.slide_container .slider.s2 {\n  background-image: url('s2.jpg');\n}\n\n.slide_container .slider.s3 {\n  background-image: url('s3.jpg');\n}\n\n.slide_container .slider.s4 {\n  background-image: url('s4.jpeg');\n}\n\n.filter-bright-03 {\n  -webkit-filter: brightness(0.3);\n          filter: brightness(0.3);\n}\n\n.slide_container .slider.p1 {\n  background-image: url('s1.jpg');\n}\n\n.slide_container .slider.p2 {\n  background-image: url('s2.jpg');\n}\n\n.slide_container .slider.p3 {\n  background-image: url('s3.jpg');\n}\n\n.slide_container .slider.p4 {\n  background-image: url('s4.jpeg');\n}\n\n.searchbar-input.sc-ion-searchbar-ios {\n  background: white !important;\n}\n\n.main-container {\n  background: #d3d3d34f;\n}\n\n.quick_menus {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  margin: 15px 0;\n  border-radius: 10px;\n  border: 1px solid lightgray;\n  box-shadow: -3px 4px 25px #aaaaaa94;\n  padding: 7px;\n}\n\n.quick_menus div.menu-container {\n  flex-basis: 33%;\n  padding: 2%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.quick_menus div.menu-container:nth-child(1) {\n  border-top-left-radius: 12px;\n}\n\n.quick_menus div.menu-container:nth-child(3) {\n  border-top-right-radius: 12px;\n}\n\n.quick_menus div.menu-container:nth-child(7) {\n  border-bottom-left-radius: 12px;\n}\n\n.quick_menus div.menu-container:nth-child(9) {\n  border-bottom-right-radius: 12px;\n}\n\n.quick_menus div.menu-container .menu-image {\n  height: 65px;\n  background-size: cover;\n  background-position: center center;\n  width: 65px;\n  border: 2px solid #666;\n  padding: 1px;\n  border-radius: 50%;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.quick_menus div.menu-container .menu-image.image-1 {\n  background-image: url('vector-haircut.jpg');\n}\n\n.quick_menus div.menu-container .menu-image.image-2 {\n  background-image: url('thredding2.jpeg');\n}\n\n.quick_menus div.menu-container .menu-image.image-3 {\n  background-image: url('vector_facial.jpg');\n}\n\n.quick_menus div.menu-container .menu-image.image-4 {\n  background-image: url('manicure.jpeg');\n}\n\n.quick_menus div.menu-container .menu-image.image-5 {\n  background-image: url('products.jpeg');\n}\n\n.quick_menus div.menu-container .menu-image.image-6 {\n  background-image: url('upperLips.jpeg');\n}\n\n.quick_menus div.menu-container .menu-image.image-7 {\n  background-image: url('bridal.jpeg');\n}\n\n.quick_menus div.menu-container .menu-image.image-8 {\n  background-image: url('waxing.jpeg');\n}\n\n.quick_menus div.menu-container .menu-image.image-9 {\n  background-image: url('courses.jpeg');\n}\n\n.quick_menus div.menu-container .menu-text {\n  padding-top: 5px;\n  font-size: 14px;\n}\n\n.application-details {\n  margin: 15px 0 0;\n  padding: 5px 0;\n  display: flex;\n  color: white;\n  flex-direction: column;\n  background-image: url('back-3.jpg');\n  background-size: cover;\n  background-position: center center;\n}\n\n.application-details .owner-info-container {\n  flex-basis: 35%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 15px;\n}\n\n.application-details .owner-info-container .owner-image {\n  width: 85px;\n}\n\n.application-details .owner-info-container .owner-image img {\n  max-width: 100%;\n  border: 0;\n  border-radius: 50%;\n  margin: 5px 0;\n}\n\n.application-details .owner-info-container .owner-name {\n  font-size: 16px;\n  text-align: center;\n}\n\n.application-details .owner-info-container .social-media-icons {\n  display: flex;\n  justify-content: center;\n}\n\n.application-details .owner-info-container .social-media-icons div {\n  border: 2px solid white;\n  display: inline-block;\n  height: 35px;\n  width: 35px;\n  transition: all 0.5s;\n  text-align: center;\n  margin: 5px 10px;\n  border-radius: 10px;\n}\n\n.application-details .owner-info-container .social-media-icons div .media-icon {\n  line-height: 32px;\n  font-size: 15px;\n}\n\n.linkedin-icon {\n  background: #0E76A8;\n}\n\n.fb-icon {\n  background: #3B5998;\n}\n\n.insta-icon {\n  background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);\n}\n\n.copy-rights {\n  padding: 5px 15px;\n  background: #cc2b5efa;\n  color: white;\n  font-weight: bold;\n  font-size: 14px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvYXBwL3BhZ2VzL2ZlZWQvZmVlZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZlZWQvZmVlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRERFO0VBQ0UsZUFBQTtFQUFpQixnQkFBQTtBQ0lyQjs7QURGRTtFQUNFLGNBQUE7QUNJSjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNHRjs7QURGRTtFQUNFLGtDQUFBO0FDSUo7O0FER0E7RUFDRSxXQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FEQ0U7RUFDRSxlQUFBO0FDQ0o7O0FER0E7RUFDRSxXQUFBO0FDQUY7O0FER0E7RUFDRSx1Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsNkNBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0NBQUE7QUNBRjs7QURHQTtFQUNFLCtCQUFBO0FDQUY7O0FER0E7RUFDRSwrQkFBQTtBQ0FGOztBREdBO0VBQ0UsdUZBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUNBQUE7QUNBRjs7QURHQTtFQUNFLHVDQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsNkNBQUE7RUFDQSxhQUFBO0FDQUY7O0FER0E7RUFDRSxrQ0FBQTtBQ0FGOztBREdBO0VBQ0Usa0NBQUE7QUNBRjs7QURHQTtFQUNFLG9DQUFBO0FDQUY7O0FER0E7RUFDRSxxQ0FBQTtBQ0FGOztBREdBO0VBQ0UsOERBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxX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Y2VzQ29udGVudCI6WyIudG9wLWFkanVzdCB7XG4gIHRvcDogNjVweDtcbn1cbi5sb2dvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIC5sb2dvLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMjBweDsgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICAuc2xvZ2FuLXRleHQge1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICB9XG59XG5cbi5zZWFyY2gtYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG4gIG9wYWNpdHk6IDAuNTtcbiAgLnNlYXJjaGJhci1pbnB1dC1jb250YWluZXIgaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi8vLmZlZWQtaW1hZ2VzIHtcbi8vICBmaWx0ZXI6IGJyaWdodG5lc3MoMC41KTtcbi8vfVxuXG4uZmVlZC1zbGlkZXJzIHtcbiAgaGVpZ2h0OiA0MCU7XG59XG5cbi5mZWVkLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMThweCAwIDVweDtcbiAgLmhlYWRpbmctdGV4dCB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG59XG5cbi5rbm93LW1vcmUge1xuICBjb2xvcjogIzY2Njtcbn1cblxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXIge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAzMGVtO1xufVxuXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci1vbmUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmVhdXJ0eS0xLmpwZ1wiKTtcbn1cblxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXItdHdvIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JlYXV0eS0yLmpwZ1wiKTtcbn1cblxuLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXItdGhyZWUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmVhdXR5LTMuanBnXCIpO1xufVxuXG4uZmVlZC1jb250YWluZXIge1xuICAvKmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMTRkZWcsIHJnYmEoNDAsIDI5LCAyMzIsIDEpIC0yNSUsIHJnYig4MSwgMzYsIDgyKSA2MyUpOyovXG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG59XG5cbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgPiBkaXYge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCRkJGQkY7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiA1cHggMTBweCAyOXB4ICNhYWFhYWE5NDtcbn1cblxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciAuZmVlZC1pbWFnZSB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXIgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1oYWlyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2hhaXIuanBlZ1wiKTtcbn1cblxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1za2luIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3NraW4uanBlZ1wiKTtcbn1cblxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1tYWtldXAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbWFrZXVwLmpwZWdcIik7XG59XG5cbi5mZWVkLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb250YWluZXIgLmZlZWQtaW1hZ2UtY291cnNlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2NvdXJzZXMuanBlZ1wiKTtcbn1cblxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciAuZmVlZC10ZXh0IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIxNGRlZywgcmdiYSg0MCwgMjksIDIzMiwgMSkgLTI1JSwgcmdiKDgxLCAzNiwgODIpIDYzJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaGVpZ2h0LTk1cHgge1xuIGhlaWdodDogOTVweDtcbn1cblxuLmhlaWdodC0yMDBweCB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5zbGlkZV9jb250YWluZXIge1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLm1lbnUtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4uZmVlZC1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiA2NXB4O1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXJ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiA5NSU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCRkJGQkY7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAvL2JveC1zaGFkb3c6IDVweCAxMHB4IDI5cHggI2FhYWFhYTk0O1xuICB3aWR0aDogMjAwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAxMHB4IDVweDtcbiAgJjpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luOiAwIDEwcHggNXB4IDA7XG4gIH1cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW46IDAgMCA1cHggMTBweDtcbiAgfVxufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIuczEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zMS5qcGcnKTtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnMyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvczIuanBnJyk7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlci5zMyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3MzLmpwZycpO1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIuczQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zNC5qcGVnJyk7XG59XG5cbi5maWx0ZXItYnJpZ2h0LTAzIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuMyk7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlci5wMSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3MxLmpwZycpO1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIucDIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zMi5qcGcnKTtcbn1cblxuLnNsaWRlX2NvbnRhaW5lciAuc2xpZGVyLnAzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvczMuanBnJyk7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlci5wNCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3M0LmpwZWcnKTtcbn1cblxuLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvcyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNkM2QzZDM0Zjtcbn1cbi5xdWlja19tZW51cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm94LXNoYWRvdzogLTNweCA0cHggMjVweCAjYWFhYWFhOTQ7XG4gIHBhZGRpbmc6IDdweDtcblxuICBkaXYubWVudS1jb250YWluZXIge1xuICAgIGZsZXgtYmFzaXM6IDMzJTtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvL2JvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAmOm50aC1jaGlsZCgxKSB7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xuICAgIH1cbiAgICAvLyY6bnRoLWNoaWxkKDIpIHtcbiAgICAvLyAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAvL31cbiAgICAmOm50aC1jaGlsZCgzKSB7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcbiAgICB9XG4gICAgLy8mOm50aC1jaGlsZCg0KSB7fVxuICAgIC8vJjpudGgtY2hpbGQoNSkge31cbiAgICAvLyY6bnRoLWNoaWxkKDYpIHt9XG4gICAgJjpudGgtY2hpbGQoNykge1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDtcbiAgICB9XG4gICAgLy8mOm50aC1jaGlsZCg4KSB7fVxuICAgICY6bnRoLWNoaWxkKDkpIHtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xuICAgIH1cbiAgICAubWVudS1pbWFnZSB7XG4gICAgICAvL2JvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIC8vYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICAgICAgLy9iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gICAgICAvL2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvczQuanBlZycpO1xuICAgICAgaGVpZ2h0OiA2NXB4O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICB3aWR0aDogNjVweDtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM2NjY7XG4gICAgICBwYWRkaW5nOiAxcHg7IGJvcmRlci1yYWRpdXM6IDUwJTsgb3ZlcmZsb3c6IGhpZGRlbjsgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgJi5pbWFnZS0xIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvdmVjdG9yLWhhaXJjdXQuanBnJyk7XG4gICAgICB9XG4gICAgICAmLmltYWdlLTIge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy90aHJlZGRpbmcyLmpwZWcnKTtcbiAgICAgIH1cbiAgICAgICYuaW1hZ2UtMyB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3ZlY3Rvcl9mYWNpYWwuanBnJyk7XG4gICAgICB9XG4gICAgICAmLmltYWdlLTQge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9tYW5pY3VyZS5qcGVnJyk7XG4gICAgICB9XG4gICAgICAmLmltYWdlLTUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9wcm9kdWN0cy5qcGVnJyk7XG4gICAgICB9XG4gICAgICAmLmltYWdlLTYge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy91cHBlckxpcHMuanBlZycpO1xuICAgICAgfVxuICAgICAgJi5pbWFnZS03IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvYnJpZGFsLmpwZWcnKTtcbiAgICAgIH1cbiAgICAgICYuaW1hZ2UtOCB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3dheGluZy5qcGVnJyk7XG4gICAgICB9XG4gICAgICAmLmltYWdlLTkge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9jb3Vyc2VzLmpwZWcnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLm1lbnUtdGV4dCB7XG4gICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxufVxuXG4uYXBwbGljYXRpb24tZGV0YWlscyB7XG4gIG1hcmdpbjogMTVweCAwIDA7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2JhY2stMy5qcGcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgLy9iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTkzZGVnLCAjY2MyYjVlIDIlLCAjNzUzYTg4IDg0JSk7XG4gIC5vd25lci1pbmZvLWNvbnRhaW5lciB7XG4gICAgZmxleC1iYXNpczogMzUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgLm93bmVyLWltYWdlIHtcbiAgICAgIHdpZHRoOiA4NXB4O1xuICAgICAgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAub3duZXItbmFtZSB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnNvY2lhbC1tZWRpYS1pY29ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBkaXYge1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDVweCAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAubWVkaWEtaWNvbiB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5saW5rZWRpbi1pY29uIHtcbiAgYmFja2dyb3VuZDogIzBFNzZBODtcbn1cbi5mYi1pY29uIHtcbiAgYmFja2dyb3VuZDogIzNCNTk5ODtcbn1cbi5pbnN0YS1pY29uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNDA1ZGU2LCAjNTg1MWRiLCAjODMzYWI0LCAjYzEzNTg0LCAjZTEzMDZjLCAjZmQxZDFkKTs7XG59XG5cbi5jb3B5LXJpZ2h0cyB7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjY2MyYjVlZmE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cblxuIiwiLnRvcC1hZGp1c3Qge1xuICB0b3A6IDY1cHg7XG59XG5cbi5sb2dvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG4ubG9nby1jb250YWluZXIgLmxvZ28tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5sb2dvLWNvbnRhaW5lciAuc2xvZ2FuLXRleHQge1xuICBmb250LXNpemU6IDhweDtcbn1cblxuLnNlYXJjaC1iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgb3BhY2l0eTogMC41O1xufVxuLnNlYXJjaC1iYXIgLnNlYXJjaGJhci1pbnB1dC1jb250YWluZXIgaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uZmVlZC1zbGlkZXJzIHtcbiAgaGVpZ2h0OiA0MCU7XG59XG5cbi5mZWVkLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMThweCAwIDVweDtcbn1cbi5mZWVkLWhlYWRpbmcgLmhlYWRpbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmtub3ctbW9yZSB7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlciB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDMwZW07XG59XG5cbi5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLW9uZSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iZWF1cnR5LTEuanBnXCIpO1xufVxuXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci10d28ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmVhdXR5LTIuanBnXCIpO1xufVxuXG4uZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci10aHJlZSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iZWF1dHktMy5qcGdcIik7XG59XG5cbi5mZWVkLWNvbnRhaW5lciB7XG4gIC8qYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIxNGRlZywgcmdiYSg0MCwgMjksIDIzMiwgMSkgLTI1JSwgcmdiKDgxLCAzNiwgODIpIDYzJSk7Ki9cbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbn1cblxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciA+IGRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0JGQkZCRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDVweCAxMHB4IDI5cHggI2FhYWFhYTk0O1xufVxuXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLWltYWdlIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLWltYWdlLWhhaXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaGFpci5qcGVnXCIpO1xufVxuXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLWltYWdlLXNraW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvc2tpbi5qcGVnXCIpO1xufVxuXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLWltYWdlLW1ha2V1cCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9tYWtldXAuanBlZ1wiKTtcbn1cblxuLmZlZWQtY29udGFpbmVyIC5mZWVkLWltYWdlLWNvbnRhaW5lciAuZmVlZC1pbWFnZS1jb3Vyc2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvY291cnNlcy5qcGVnXCIpO1xufVxuXG4uZmVlZC1jb250YWluZXIgLmZlZWQtaW1hZ2UtY29udGFpbmVyIC5mZWVkLXRleHQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjE0ZGVnLCAjMjgxZGU4IC0yNSUsICM1MTI0NTIgNjMlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5oZWlnaHQtOTVweCB7XG4gIGhlaWdodDogOTVweDtcbn1cblxuLmhlaWdodC0yMDBweCB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5zbGlkZV9jb250YWluZXIge1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLm1lbnUtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4uZmVlZC1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiA2NXB4O1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogOTUlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQkZCRkJGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgMTBweCA1cHg7XG59XG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXI6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW46IDAgMTBweCA1cHggMDtcbn1cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlcjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luOiAwIDAgNXB4IDEwcHg7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlci5zMSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zMS5qcGdcIik7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlci5zMiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zMi5qcGdcIik7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlci5zMyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zMy5qcGdcIik7XG59XG5cbi5zbGlkZV9jb250YWluZXIgLnNsaWRlci5zNCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zNC5qcGVnXCIpO1xufVxuXG4uZmlsdGVyLWJyaWdodC0wMyB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjMpO1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIucDEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvczEuanBnXCIpO1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIucDIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvczIuanBnXCIpO1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIucDMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvczMuanBnXCIpO1xufVxuXG4uc2xpZGVfY29udGFpbmVyIC5zbGlkZXIucDQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvczQuanBlZ1wiKTtcbn1cblxuLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvcyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNkM2QzZDM0Zjtcbn1cblxuLnF1aWNrX21lbnVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW46IDE1cHggMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3gtc2hhZG93OiAtM3B4IDRweCAyNXB4ICNhYWFhYWE5NDtcbiAgcGFkZGluZzogN3B4O1xufVxuLnF1aWNrX21lbnVzIGRpdi5tZW51LWNvbnRhaW5lciB7XG4gIGZsZXgtYmFzaXM6IDMzJTtcbiAgcGFkZGluZzogMiU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnF1aWNrX21lbnVzIGRpdi5tZW51LWNvbnRhaW5lcjpudGgtY2hpbGQoMSkge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xufVxuLnF1aWNrX21lbnVzIGRpdi5tZW51LWNvbnRhaW5lcjpudGgtY2hpbGQoMykge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcbn1cbi5xdWlja19tZW51cyBkaXYubWVudS1jb250YWluZXI6bnRoLWNoaWxkKDcpIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDtcbn1cbi5xdWlja19tZW51cyBkaXYubWVudS1jb250YWluZXI6bnRoLWNoaWxkKDkpIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEycHg7XG59XG4ucXVpY2tfbWVudXMgZGl2Lm1lbnUtY29udGFpbmVyIC5tZW51LWltYWdlIHtcbiAgaGVpZ2h0OiA2NXB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICB3aWR0aDogNjVweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzY2NjtcbiAgcGFkZGluZzogMXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5xdWlja19tZW51cyBkaXYubWVudS1jb250YWluZXIgLm1lbnUtaW1hZ2UuaW1hZ2UtMSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy92ZWN0b3ItaGFpcmN1dC5qcGdcIik7XG59XG4ucXVpY2tfbWVudXMgZGl2Lm1lbnUtY29udGFpbmVyIC5tZW51LWltYWdlLmltYWdlLTIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvdGhyZWRkaW5nMi5qcGVnXCIpO1xufVxuLnF1aWNrX21lbnVzIGRpdi5tZW51LWNvbnRhaW5lciAubWVudS1pbWFnZS5pbWFnZS0zIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3ZlY3Rvcl9mYWNpYWwuanBnXCIpO1xufVxuLnF1aWNrX21lbnVzIGRpdi5tZW51LWNvbnRhaW5lciAubWVudS1pbWFnZS5pbWFnZS00IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL21hbmljdXJlLmpwZWdcIik7XG59XG4ucXVpY2tfbWVudXMgZGl2Lm1lbnUtY29udGFpbmVyIC5tZW51LWltYWdlLmltYWdlLTUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvcHJvZHVjdHMuanBlZ1wiKTtcbn1cbi5xdWlja19tZW51cyBkaXYubWVudS1jb250YWluZXIgLm1lbnUtaW1hZ2UuaW1hZ2UtNiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy91cHBlckxpcHMuanBlZ1wiKTtcbn1cbi5xdWlja19tZW51cyBkaXYubWVudS1jb250YWluZXIgLm1lbnUtaW1hZ2UuaW1hZ2UtNyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9icmlkYWwuanBlZ1wiKTtcbn1cbi5xdWlja19tZW51cyBkaXYubWVudS1jb250YWluZXIgLm1lbnUtaW1hZ2UuaW1hZ2UtOCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy93YXhpbmcuanBlZ1wiKTtcbn1cbi5xdWlja19tZW51cyBkaXYubWVudS1jb250YWluZXIgLm1lbnUtaW1hZ2UuaW1hZ2UtOSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9jb3Vyc2VzLmpwZWdcIik7XG59XG4ucXVpY2tfbWVudXMgZGl2Lm1lbnUtY29udGFpbmVyIC5tZW51LXRleHQge1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5hcHBsaWNhdGlvbi1kZXRhaWxzIHtcbiAgbWFyZ2luOiAxNXB4IDAgMDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JhY2stMy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG4uYXBwbGljYXRpb24tZGV0YWlscyAub3duZXItaW5mby1jb250YWluZXIge1xuICBmbGV4LWJhc2lzOiAzNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmFwcGxpY2F0aW9uLWRldGFpbHMgLm93bmVyLWluZm8tY29udGFpbmVyIC5vd25lci1pbWFnZSB7XG4gIHdpZHRoOiA4NXB4O1xufVxuLmFwcGxpY2F0aW9uLWRldGFpbHMgLm93bmVyLWluZm8tY29udGFpbmVyIC5vd25lci1pbWFnZSBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDVweCAwO1xufVxuLmFwcGxpY2F0aW9uLWRldGFpbHMgLm93bmVyLWluZm8tY29udGFpbmVyIC5vd25lci1uYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYXBwbGljYXRpb24tZGV0YWlscyAub3duZXItaW5mby1jb250YWluZXIgLnNvY2lhbC1tZWRpYS1pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmFwcGxpY2F0aW9uLWRldGFpbHMgLm93bmVyLWluZm8tY29udGFpbmVyIC5zb2NpYWwtbWVkaWEtaWNvbnMgZGl2IHtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMzVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5hcHBsaWNhdGlvbi1kZXRhaWxzIC5vd25lci1pbmZvLWNvbnRhaW5lciAuc29jaWFsLW1lZGlhLWljb25zIGRpdiAubWVkaWEtaWNvbiB7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5saW5rZWRpbi1pY29uIHtcbiAgYmFja2dyb3VuZDogIzBFNzZBODtcbn1cblxuLmZiLWljb24ge1xuICBiYWNrZ3JvdW5kOiAjM0I1OTk4O1xufVxuXG4uaW5zdGEtaWNvbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzQwNWRlNiwgIzU4NTFkYiwgIzgzM2FiNCwgI2MxMzU4NCwgI2UxMzA2YywgI2ZkMWQxZCk7XG59XG5cbi5jb3B5LXJpZ2h0cyB7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjY2MyYjVlZmE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
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

    var FeedPage = /*#__PURE__*/function () {
      function FeedPage(router) {
        _classCallCheck(this, FeedPage);

        this.router = router;
        this.slideOpts = {
          initialSlide: 1,
          speed: 400,
          autoplay: true
        };
      }

      _createClass(FeedPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
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
      }]);

      return FeedPage;
    }();

    FeedPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], FeedPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-feed-feed-module-es5.js.map