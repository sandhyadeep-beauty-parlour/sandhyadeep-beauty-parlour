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


    __webpack_exports__["default"] = "<ion-header>\n        <div style=\"display: flex; align-items: center; justify-content: space-between\">\n            <div style=\"display: flex; align-items: center; justify-content: space-between;\">\n                <div style=\"width: 45px; border: 2px solid #666; padding: 1px; border-radius: 50%; overflow: hidden; display: inline-block; margin: 10px;\">\n                    <img src=\"../../../assets/sandhyadeep-logo.jpg\">\n                </div>\n                <div style=\"font-size: 20px; font-style: italic; font-weight: 700;\">\n                    Sandhyadeep\n                </div>\n            </div>\n            <div style=\"display: flex; align-items: center; justify-content: space-between;\">\n                <div>\n                    <ion-icon style=\"font-size: 30px;margin: 0 5px; color: purple;\" name=\"search-outline\"></ion-icon>\n                </div>\n                <div>\n                    <ion-icon style=\"font-size: 30px;margin: 0 5px; color: purple;\" name=\"notifications-outline\"></ion-icon>\n                </div>\n            </div>\n        </div>\n</ion-header>\n\n<ion-content>\n    <ion-slides class=\"feed-sliders\" pager=\"false\" [options]=\"slideOpts\">\n        <ion-slide class=\"feed-slider feed-slider-one\">\n\n        </ion-slide>\n        <ion-slide class=\"feed-slider feed-slider-two\">\n\n        </ion-slide>\n        <ion-slide class=\"feed-slider feed-slider-three\">\n\n        </ion-slide>\n    </ion-slides>\n\n    <div>\n        <div class=\"slide_container\">\n            <div class=\"slider s1\"></div>\n            <div class=\"slider s2\"></div>\n            <div class=\"slider s3\"></div>\n            <div class=\"slider s4\"></div>\n        </div>\n\n        <div class=\"feed-container\">\n            <div class=\"feed-image-container\">\n                <div>\n                    <div class=\"feed-image feed-image-hair\"></div>\n                    <div class=\"feed-text\"> Hair</div>\n                </div>\n            </div>\n            <div class=\"feed-image-container\">\n                <div>\n                    <div class=\"feed-image feed-image-skin\"></div>\n                    <div class=\"feed-text\"> Skin</div>\n                </div>\n            </div>\n            <div class=\"feed-image-container\">\n                <div>\n                    <div class=\"feed-image feed-image-makeup\"></div>\n                    <div class=\"feed-text\"> Makeup</div>\n                </div>\n            </div>\n            <div class=\"feed-image-container\">\n                <div>\n                    <div class=\"feed-image feed-image-course\"></div>\n                    <div class=\"feed-text\"> Courses</div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</ion-content>\n\n\n<style>\n    .feed-sliders {\n        height: 35%;\n    }\n\n    .feed-sliders .feed-slider {\n        background-repeat: no-repeat !important;\n        background-size: cover !important;\n        background-position: center center !important;\n        max-height: 30em;\n    }\n\n    .feed-sliders .feed-slider-one {\n        background: url(\"../../../assets/beaurty-1.jpg\");\n    }\n\n    .feed-sliders .feed-slider-two {\n        background: url(\"../../../assets/beauty-2.jpg\");\n    }\n\n    .feed-sliders .feed-slider-three {\n        background: url(\"../../../assets/beauty-3.jpg\");\n    }\n\n    .feed-container {\n        /*background: linear-gradient(214deg, rgba(40, 29, 232, 1) -25%, rgb(81, 36, 82) 63%);*/\n        padding: 30px;\n        border: 1px solid #fff;\n    }\n\n    .feed-container .feed-image-container > div {\n        margin-bottom: 30px;\n        position: relative;\n        border: 1px solid #BFBFBF;\n        background-color: white;\n        box-shadow: 5px 10px 29px #aaaaaa94;\n    }\n\n    .feed-container .feed-image-container .feed-image {\n        background-repeat: no-repeat !important;\n        background-size: cover !important;\n        cursor: pointer;\n        background-position: center center !important;\n        height: 200px;\n    }\n\n    .feed-container .feed-image-container .feed-image-hair {\n        background-image: url(\"../../../assets/hair.jpeg\");\n    }\n\n    .feed-container .feed-image-container .feed-image-skin {\n        background-image: url(\"../../../assets/skin.jpeg\");\n    }\n\n    .feed-container .feed-image-container .feed-image-makeup {\n        background-image: url(\"../../../assets/makeup.jpeg\");\n    }\n\n    .feed-container .feed-image-container .feed-image-course {\n        background-image: url(\"../../../assets/courses.jpeg\");\n    }\n\n    .feed-container .feed-image-container .feed-text {\n        background: linear-gradient(214deg, rgba(40, 29, 232, 1) -25%, rgb(81, 36, 82) 63%);\n        text-align: center;\n        font-weight: bold;\n        color: white;\n        bottom: 0;\n        width: 100%;\n        padding: 15px;\n        font-size: 20px;\n    }\n\n    .slide_container {\n       height: 200px;\n        overflow-x: scroll;\n        overflow-y: hidden;\n        white-space: nowrap;\n    }\n    .slide_container .slider{\n        display: inline-block;\n        height: 75%;\n        border: 1px solid #BFBFBF;\n        background-color: white;\n        box-shadow: 5px 10px 29px #aaaaaa94;\n        width: 200px;\n        background-repeat: no-repeat !important;\n        background-size: cover !important;\n        background-position: center center !important;\n        margin: 25px 10px;\n    }\n\n    .slide_container .slider.s1 {\n        background-image: url('../../../assets/s1.jpg');\n    }\n\n    .slide_container .slider.s2 {\n        background-image: url('../../../assets/s2.jpg');\n    }\n\n    .slide_container .slider.s3 {\n        background-image: url('../../../assets/s3.jpg');\n    }\n\n    .slide_container .slider.s4 {\n        background-image: url('../../../assets/s4.jpeg');\n    }\n\n</style>\n";
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

    var FeedPageModule = function FeedPageModule() {
      _classCallCheck(this, FeedPageModule);
    };

    FeedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _feed_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeedPageRoutingModule"]],
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZlZWQvZmVlZC5wYWdlLnNjc3MifQ== */";
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

    var FeedPage = /*#__PURE__*/function () {
      function FeedPage() {
        _classCallCheck(this, FeedPage);

        this.slideOpts = {
          initialSlide: 1,
          speed: 400,
          autoplay: true
        };
      }

      _createClass(FeedPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FeedPage;
    }();

    FeedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-feed',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./feed.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed/feed.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./feed.page.scss */
      "./src/app/pages/feed/feed.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FeedPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-feed-feed-module-es5.js.map