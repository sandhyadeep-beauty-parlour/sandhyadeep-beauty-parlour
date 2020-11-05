function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-portfolio-portfolio-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/portfolio/portfolio.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/portfolio/portfolio.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPortfolioPortfolioPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<ion-content class=\"top-adjust\">\n    <div class=\"page-heading\">\n        <div class=\"heading-text\">\n            <b>Portfolio</b>\n        </div>\n    </div>\n    <div class=\"portfolio-container\">\n        <div class=\"photos-container\">\n            <div class=\"photo right\" *ngFor=\"let image of imagesData; let index = index\">\n                <div (tap)=\"onLike(imagesData, index)\" class=\"single-photo\">\n                    <svg class=\"icon icon-heart\" [class.like]=\"image.check\">\n                        <use xlink:href=\"#icon-heart\"></use>\n                    </svg>\n                    <img src=\"{{image.url}}\" />\n                </div>\n                <div class=\"photo-likes-container\">\n                    <div class=\"photo-likes\">\n                        Likes {{image.likes}}\n                    </div>\n                    <div (click)=\"onUnlike(imagesData, index)\" *ngIf=\"image.isLiked\" class=\"like-icon\"><i class=\"fa fa-heart\"></i></div>\n                    <div *ngIf=\"!image.isLiked\" class=\"like-icon\"><i class=\"fa fa-heart-o\"></i></div>\n                </div>\n            </div>\n        </div>\n        <div class=\"photos-container\">\n            <div class=\"photo right\" *ngFor=\"let image of imagesData1; let index = index\">\n                <div (tap)=\"onLike(imagesData1, index)\" class=\"single-photo\">\n                    <svg class=\"icon icon-heart\" [class.like]=\"image.check\">\n                        <use xlink:href=\"#icon-heart\"></use>\n                    </svg>\n                    <img src=\"{{image.url}}\" />\n                </div>\n                <div class=\"photo-likes-container\">\n                    <div class=\"photo-likes\">\n                        Likes {{image.likes}}\n                    </div>\n                    <div (click)=\"onUnlike(imagesData1, index)\"  *ngIf=\"image.isLiked\" class=\"like-icon\"><i class=\"fa fa-heart\"></i></div>\n                    <div *ngIf=\"!image.isLiked\" class=\"like-icon\"><i class=\"fa fa-heart-o\"></i></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <svg aria-hidden=\"true\" style=\"position: absolute; width: 0; height: 0; overflow: hidden;\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n        <defs>\n            <symbol id=\"icon-heart\" viewBox=\"0 0 32 32\">\n                <path d=\"M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z\"></path>\n            </symbol>\n        </defs>\n    </svg>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/portfolio/portfolio-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/portfolio/portfolio-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: PortfolioRoutingModule */

  /***/
  function srcAppPagesPortfolioPortfolioRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioRoutingModule", function () {
      return PortfolioRoutingModule;
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


    var _portfolio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./portfolio.page */
    "./src/app/pages/portfolio/portfolio.page.ts");

    var routes = [{
      path: '',
      component: _portfolio_page__WEBPACK_IMPORTED_MODULE_3__["PortfolioPage"]
    }];

    var PortfolioRoutingModule = function PortfolioRoutingModule() {
      _classCallCheck(this, PortfolioRoutingModule);
    };

    PortfolioRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PortfolioRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/portfolio/portfolio.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/portfolio/portfolio.module.ts ***!
    \*****************************************************/

  /*! exports provided: PortfolioModule */

  /***/
  function srcAppPagesPortfolioPortfolioModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioModule", function () {
      return PortfolioModule;
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


    var _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./portfolio-routing.module */
    "./src/app/pages/portfolio/portfolio-routing.module.ts");
    /* harmony import */


    var _portfolio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./portfolio.page */
    "./src/app/pages/portfolio/portfolio.page.ts");

    var PortfolioModule = function PortfolioModule() {
      _classCallCheck(this, PortfolioModule);
    };

    PortfolioModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_5__["PortfolioRoutingModule"]],
      declarations: [_portfolio_page__WEBPACK_IMPORTED_MODULE_6__["PortfolioPage"]]
    })], PortfolioModule);
    /***/
  },

  /***/
  "./src/app/pages/portfolio/portfolio.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/portfolio/portfolio.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPortfolioPortfolioPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".top-adjust {\n  top: 65px;\n}\n\n.portfolio-container {\n  display: flex;\n  margin-bottom: 65px;\n}\n\n.photos-container .photo {\n  position: relative;\n}\n\n.photos-container .photo.left {\n  margin: 10px 5px 5px 15px;\n}\n\n.photos-container .photo.right {\n  margin: 10px 15px 5px 5px;\n}\n\n.photos-container .photo .single-photo {\n  position: relative;\n}\n\n.photos-container .photo .photo-likes-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px;\n}\n\n.photos-container .photo .photo-likes-container .photo-likes {\n  color: #666;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.photos-container .photo .photo-likes-container .like-icon i.fa.fa-heart {\n  color: red;\n}\n\n.page-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 18px 15px 5px;\n}\n\n.page-heading .heading-text {\n  font-size: 24px;\n}\n\n.icon {\n  position: absolute;\n  display: inline-block;\n  width: 50px;\n  top: 12%;\n  left: 35%;\n  opacity: 0;\n  fill: red;\n}\n\n.icon.like {\n  -webkit-animation: 2s like-heart-animation ease-in-out forwards;\n          animation: 2s like-heart-animation ease-in-out forwards;\n}\n\n@-webkit-keyframes like-heart-animation {\n  0%, to {\n    opacity: 0;\n    transform: scale(0);\n  }\n  15% {\n    opacity: 0.9;\n    transform: scale(1.2);\n  }\n  30% {\n    transform: scale(0.95);\n  }\n  45%, 80% {\n    opacity: 0.9;\n    transform: scale(1);\n  }\n}\n\n@keyframes like-heart-animation {\n  0%, to {\n    opacity: 0;\n    transform: scale(0);\n  }\n  15% {\n    opacity: 0.9;\n    transform: scale(1.2);\n  }\n  30% {\n    transform: scale(0.95);\n  }\n  45%, 80% {\n    opacity: 0.9;\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvYXBwL3BhZ2VzL3BvcnRmb2xpby9wb3J0Zm9saW8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wb3J0Zm9saW8vcG9ydGZvbGlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7QUNDRjs7QURDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0VGOztBREVFO0VBQ0Usa0JBQUE7QUNDSjs7QURBSTtFQUNFLHlCQUFBO0FDRU47O0FEQUk7RUFDRSx5QkFBQTtBQ0VOOztBREFJO0VBQ0Usa0JBQUE7QUNFTjs7QURBSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0VOOztBRERNO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0dSOztBREFVO0VBQ0UsVUFBQTtBQ0VaOztBREtBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0ZGOztBREdFO0VBQ0UsZUFBQTtBQ0RKOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDRkY7O0FER0U7RUFDRSwrREFBQTtVQUFBLHVEQUFBO0FDREo7O0FES0E7RUFDRTtJQUVFLFVBQUE7SUFFQSxtQkFBQTtFQ0hGO0VES0E7SUFDRSxZQUFBO0lBRUEscUJBQUE7RUNIRjtFREtBO0lBRUUsc0JBQUE7RUNIRjtFREtBO0lBRUUsWUFBQTtJQUVBLG1CQUFBO0VDSkY7QUFDRjs7QURqQkE7RUFDRTtJQUVFLFVBQUE7SUFFQSxtQkFBQTtFQ0hGO0VES0E7SUFDRSxZQUFBO0lBRUEscUJBQUE7RUNIRjtFREtBO0lBRUUsc0JBQUE7RUNIRjtFREtBO0lBRUUsWUFBQTtJQUVBLG1CQUFBO0VDSkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BvcnRmb2xpby9wb3J0Zm9saW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC1hZGp1c3Qge1xuICB0b3A6IDY1cHg7XG59XG4ucG9ydGZvbGlvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDY1cHg7XG5cbn1cbi5waG90b3MtY29udGFpbmVyIHtcbiAgLnBob3RvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJi5sZWZ0IHtcbiAgICAgIG1hcmdpbjogMTBweCA1cHggNXB4IDE1cHg7XG4gICAgfVxuICAgICYucmlnaHQge1xuICAgICAgbWFyZ2luOiAxMHB4IDE1cHggNXB4IDVweDtcbiAgICB9XG4gICAgLnNpbmdsZS1waG90byB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC5waG90by1saWtlcy1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAucGhvdG8tbGlrZXMge1xuICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICAgIC5saWtlLWljb24ge1xuICAgICAgICAgIGkuZmEuZmEtaGVhcnQge1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5wYWdlLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMThweCAxNXB4IDVweDtcbiAgLmhlYWRpbmctdGV4dCB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG59XG5cbi5pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MHB4O1xuICB0b3A6IDEyJTtcbiAgbGVmdDogMzUlO1xuICBvcGFjaXR5OiAwO1xuICBmaWxsOiByZWQ7XG4gICYubGlrZSB7XG4gICAgYW5pbWF0aW9uOiAycyBsaWtlLWhlYXJ0LWFuaW1hdGlvbiBlYXNlLWluLW91dCBmb3J3YXJkcztcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGxpa2UtaGVhcnQtYW5pbWF0aW9uIHtcbiAgMCUsXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDE1JSB7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgfVxuICAzMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB9XG4gIDQ1JSxcbiAgODAlIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbiIsIi50b3AtYWRqdXN0IHtcbiAgdG9wOiA2NXB4O1xufVxuXG4ucG9ydGZvbGlvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDY1cHg7XG59XG5cbi5waG90b3MtY29udGFpbmVyIC5waG90byB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5waG90b3MtY29udGFpbmVyIC5waG90by5sZWZ0IHtcbiAgbWFyZ2luOiAxMHB4IDVweCA1cHggMTVweDtcbn1cbi5waG90b3MtY29udGFpbmVyIC5waG90by5yaWdodCB7XG4gIG1hcmdpbjogMTBweCAxNXB4IDVweCA1cHg7XG59XG4ucGhvdG9zLWNvbnRhaW5lciAucGhvdG8gLnNpbmdsZS1waG90byB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5waG90b3MtY29udGFpbmVyIC5waG90byAucGhvdG8tbGlrZXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG59XG4ucGhvdG9zLWNvbnRhaW5lciAucGhvdG8gLnBob3RvLWxpa2VzLWNvbnRhaW5lciAucGhvdG8tbGlrZXMge1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5waG90b3MtY29udGFpbmVyIC5waG90byAucGhvdG8tbGlrZXMtY29udGFpbmVyIC5saWtlLWljb24gaS5mYS5mYS1oZWFydCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5wYWdlLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMThweCAxNXB4IDVweDtcbn1cbi5wYWdlLWhlYWRpbmcgLmhlYWRpbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwcHg7XG4gIHRvcDogMTIlO1xuICBsZWZ0OiAzNSU7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbGw6IHJlZDtcbn1cbi5pY29uLmxpa2Uge1xuICBhbmltYXRpb246IDJzIGxpa2UtaGVhcnQtYW5pbWF0aW9uIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIGxpa2UtaGVhcnQtYW5pbWF0aW9uIHtcbiAgMCUsIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDE1JSB7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgfVxuICAzMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB9XG4gIDQ1JSwgODAlIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/portfolio/portfolio.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/portfolio/portfolio.page.ts ***!
    \***************************************************/

  /*! exports provided: PortfolioPage */

  /***/
  function srcAppPagesPortfolioPortfolioPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioPage", function () {
      return PortfolioPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PortfolioPage = /*#__PURE__*/function () {
      function PortfolioPage() {
        _classCallCheck(this, PortfolioPage);

        this.imagesData = [{
          url: 'assets/work14.jpg',
          likes: 125,
          check: false,
          isLiked: false
        }, {
          url: 'assets/work13.jpg',
          likes: 23,
          check: false,
          isLiked: false
        }, {
          url: 'assets/work12.jpg',
          likes: 89,
          check: false,
          isLiked: false
        }, {
          url: 'assets/work11.jpg',
          likes: 90,
          check: false,
          isLiked: false
        }, {
          url: 'assets/work10.jpg',
          likes: 54,
          check: false,
          isLiked: false
        }, {
          url: 'assets/work9.jpg',
          likes: 35,
          check: false,
          isLiked: false
        }];
        this.imagesData1 = [{
          url: 'assets/work10.jpg',
          likes: 76,
          check: false,
          isLiked: false
        }, {
          url: 'assets/work7.jpg',
          likes: 54,
          check: false,
          isLiked: false
        }, {
          url: 'assets/work6.jpg',
          likes: 43,
          check: false,
          isLiked: false
        }, {
          url: 'assets/work3.jpg',
          likes: 23,
          check: false,
          isLiked: false
        }, {
          url: 'assets/work2.jpg',
          likes: 18,
          check: false,
          isLiked: false
        }, {
          url: 'assets/work15.jpg',
          likes: 76,
          check: false,
          isLiked: false
        }, {
          url: 'assets/work16.jpg',
          likes: 54,
          check: false,
          isLiked: false
        }];
      }

      _createClass(PortfolioPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLike",
        value: function onLike(list, index) {
          list[index].check = true;

          if (!list[index].isLiked) {
            list[index].likes = parseInt(list[index].likes, 10) + 1;
            list[index].isLiked = true;
          }

          setTimeout(function () {
            list[index].check = false;
          }, 1200);
        }
      }, {
        key: "onUnlike",
        value: function onUnlike(list, index) {
          if (list[index].isLiked) {
            list[index].likes = parseInt(list[index].likes, 10) - 1;
            list[index].isLiked = false;
          }
        }
      }]);

      return PortfolioPage;
    }();

    PortfolioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'portfolio',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./portfolio.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/portfolio/portfolio.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./portfolio.page.scss */
      "./src/app/pages/portfolio/portfolio.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PortfolioPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-portfolio-portfolio-module-es5.js.map