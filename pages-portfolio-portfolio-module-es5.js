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


    __webpack_exports__["default"] = "<sandhyadeep-header [showBackIcon]=\"true\" class=\"z-index-999\"></sandhyadeep-header>\r\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"onIonScroll($event)\">\r\n    <div class=\"page-heading\">\r\n        <div class=\"heading-text\">\r\n            <b>Portfolio</b>\r\n        </div>\r\n    </div>\r\n    <div class=\"portfolio-container\">\r\n        <div class=\"photos-container\">\r\n            <div class=\"photo left animate__animated animate__bounceIn animate__fast\" *ngFor=\"let image of imagesData; let index = index\">\r\n                <div (dblclick)=\"onLike(imagesData, index)\" (click)=\"showImage(image.url)\" class=\"single-photo\">\r\n                    <svg class=\"icon icon-heart\" [class.like]=\"image.check\">\r\n                        <use xlink:href=\"#icon-heart\"></use>\r\n                    </svg>\r\n                    <img src=\"{{image.url}}\" />\r\n                </div>\r\n                <div class=\"photo-likes-container\">\r\n                    <div class=\"photo-likes\">\r\n                        Likes {{image.likes}}\r\n                    </div>\r\n                    <div (click)=\"onUnlike(imagesData, index)\" *ngIf=\"image.isLiked\" class=\"like-icon\"><i class=\"fa fa-heart\"></i></div>\r\n                    <div *ngIf=\"!image.isLiked\" class=\"like-icon\"><i class=\"fa fa-heart-o\"></i></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"photos-container\">\r\n            <div class=\"photo right animate__animated animate__bounceIn animate__fast\" *ngFor=\"let image of imagesData1; let index = index\">\r\n                <div (dblclick)=\"onLike(imagesData1, index)\" (click)=\"showImage(image.url)\" class=\"single-photo\">\r\n                    <svg class=\"icon icon-heart\" [class.like]=\"image.check\">\r\n                        <use xlink:href=\"#icon-heart\"></use>\r\n                    </svg>\r\n                    <img src=\"{{image.url}}\" />\r\n                </div>\r\n                <div class=\"photo-likes-container\">\r\n                    <div class=\"photo-likes\">\r\n                        Likes {{image.likes}}\r\n                    </div>\r\n                    <div (click)=\"onUnlike(imagesData1, index)\"  *ngIf=\"image.isLiked\" class=\"like-icon\"><i class=\"fa fa-heart\"></i></div>\r\n                    <div *ngIf=\"!image.isLiked\" class=\"like-icon\"><i class=\"fa fa-heart-o\"></i></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <svg aria-hidden=\"true\" style=\"position: absolute; width: 0; height: 0; overflow: hidden;\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n        <defs>\r\n            <symbol id=\"icon-heart\" viewBox=\"0 0 32 32\">\r\n                <path d=\"M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z\"></path>\r\n            </symbol>\r\n        </defs>\r\n    </svg>\r\n</ion-content>\r\n<app-logo-spinner></app-logo-spinner>\r\n\r\n";
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
    /* harmony import */


    var _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared-components/header-component/header-component.module */
    "./src/app/shared-components/header-component/header-component.module.ts");
    /* harmony import */


    var _shared_components_modal_popup_modal_popup_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared-components/modal-popup/modal-popup.module */
    "./src/app/shared-components/modal-popup/modal-popup.module.ts");
    /* harmony import */


    var _shared_components_modal_popup_modal_popup_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared-components/modal-popup/modal-popup.page */
    "./src/app/shared-components/modal-popup/modal-popup.page.ts");
    /* harmony import */


    var _shared_components_logo_spinner_logo_spinner_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared-components/logo-spinner/logo-spinner.module */
    "./src/app/shared-components/logo-spinner/logo-spinner.module.ts");

    var PortfolioModule = function PortfolioModule() {
      _classCallCheck(this, PortfolioModule);
    };

    PortfolioModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_5__["PortfolioRoutingModule"], _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"], _shared_components_modal_popup_modal_popup_module__WEBPACK_IMPORTED_MODULE_8__["ModalPopupModule"], _shared_components_logo_spinner_logo_spinner_module__WEBPACK_IMPORTED_MODULE_10__["LogoSpinnerModule"]],
      entryComponents: [_shared_components_modal_popup_modal_popup_page__WEBPACK_IMPORTED_MODULE_9__["ModalPopupPage"]],
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


    __webpack_exports__["default"] = ".portfolio-container {\n  display: flex;\n}\n\n.photos-container .photo {\n  position: relative;\n}\n\n.photos-container .photo.left {\n  margin: 10px 5px 5px 15px;\n}\n\n.photos-container .photo.right {\n  margin: 10px 15px 5px 5px;\n}\n\n.photos-container .photo .single-photo {\n  position: relative;\n}\n\n.photos-container .photo .photo-likes-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px;\n}\n\n.photos-container .photo .photo-likes-container .photo-likes {\n  color: #666;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.photos-container .photo .photo-likes-container .like-icon i.fa.fa-heart {\n  color: red;\n}\n\n.page-heading {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  margin: 10px 15px 5px;\n}\n\n.page-heading .back-navigator {\n  font-size: 30px;\n  margin-right: 20px;\n  color: #666;\n}\n\n.page-heading .heading-text {\n  font-size: 24px;\n}\n\n.icon {\n  position: absolute;\n  display: inline-block;\n  width: 50px;\n  top: 12%;\n  left: 35%;\n  opacity: 0;\n  fill: red;\n}\n\n.icon.like {\n  -webkit-animation: 2s like-heart-animation ease-in-out forwards;\n          animation: 2s like-heart-animation ease-in-out forwards;\n}\n\n@-webkit-keyframes like-heart-animation {\n  0%, to {\n    opacity: 0;\n    transform: scale(0);\n  }\n  15% {\n    opacity: 0.9;\n    transform: scale(1.2);\n  }\n  30% {\n    transform: scale(0.95);\n  }\n  45%, 80% {\n    opacity: 0.9;\n    transform: scale(1);\n  }\n}\n\n@keyframes like-heart-animation {\n  0%, to {\n    opacity: 0;\n    transform: scale(0);\n  }\n  15% {\n    opacity: 0.9;\n    transform: scale(1.2);\n  }\n  30% {\n    transform: scale(0.95);\n  }\n  45%, 80% {\n    opacity: 0.9;\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9ydGZvbGlvL0M6XFxVc2Vyc1xcYWFiaGFnd2FcXHNhbmRoeWFkZWVwXFxzYW5kaHlhZGVlcC11aS9zcmNcXGFwcFxccGFnZXNcXHBvcnRmb2xpb1xccG9ydGZvbGlvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcG9ydGZvbGlvL3BvcnRmb2xpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUU7RUFDRSxrQkFBQTtBQ0NKOztBREFJO0VBQ0UseUJBQUE7QUNFTjs7QURBSTtFQUNFLHlCQUFBO0FDRU47O0FEQUk7RUFDRSxrQkFBQTtBQ0VOOztBREFJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDRU47O0FERE07RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDR1I7O0FEQVU7RUFDRSxVQUFBO0FDRVo7O0FES0E7RUFNRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDUEY7O0FEREU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDR0o7O0FER0U7RUFDRSxlQUFBO0FDREo7O0FES0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNGRjs7QURHRTtFQUNFLCtEQUFBO1VBQUEsdURBQUE7QUNESjs7QURLQTtFQUNFO0lBRUUsVUFBQTtJQUVBLG1CQUFBO0VDSEY7RURLQTtJQUNFLFlBQUE7SUFFQSxxQkFBQTtFQ0hGO0VES0E7SUFFRSxzQkFBQTtFQ0hGO0VES0E7SUFFRSxZQUFBO0lBRUEsbUJBQUE7RUNKRjtBQUNGOztBRGpCQTtFQUNFO0lBRUUsVUFBQTtJQUVBLG1CQUFBO0VDSEY7RURLQTtJQUNFLFlBQUE7SUFFQSxxQkFBQTtFQ0hGO0VES0E7SUFFRSxzQkFBQTtFQ0hGO0VES0E7SUFFRSxZQUFBO0lBRUEsbUJBQUE7RUNKRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9ydGZvbGlvL3BvcnRmb2xpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9ydGZvbGlvLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4ucGhvdG9zLWNvbnRhaW5lciB7XHJcbiAgLnBob3RvIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICYubGVmdCB7XHJcbiAgICAgIG1hcmdpbjogMTBweCA1cHggNXB4IDE1cHg7XHJcbiAgICB9XHJcbiAgICAmLnJpZ2h0IHtcclxuICAgICAgbWFyZ2luOiAxMHB4IDE1cHggNXB4IDVweDtcclxuICAgIH1cclxuICAgIC5zaW5nbGUtcGhvdG8ge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICAucGhvdG8tbGlrZXMtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIC5waG90by1saWtlcyB7XHJcbiAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5saWtlLWljb24ge1xyXG4gICAgICAgICAgaS5mYS5mYS1oZWFydCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wYWdlLWhlYWRpbmcge1xyXG4gIC5iYWNrLW5hdmlnYXRvciB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICB9XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDEwcHggMTVweCA1cHg7XHJcbiAgLmhlYWRpbmctdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNTBweDtcclxuICB0b3A6IDEyJTtcclxuICBsZWZ0OiAzNSU7XHJcbiAgb3BhY2l0eTogMDtcclxuICBmaWxsOiByZWQ7XHJcbiAgJi5saWtlIHtcclxuICAgIGFuaW1hdGlvbjogMnMgbGlrZS1oZWFydC1hbmltYXRpb24gZWFzZS1pbi1vdXQgZm9yd2FyZHM7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxpa2UtaGVhcnQtYW5pbWF0aW9uIHtcclxuICAwJSxcclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB9XHJcbiAgMTUlIHtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gIH1cclxuICAzMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICB9XHJcbiAgNDUlLFxyXG4gIDgwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxufVxyXG4iLCIucG9ydGZvbGlvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5waG90b3MtY29udGFpbmVyIC5waG90byB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5waG90b3MtY29udGFpbmVyIC5waG90by5sZWZ0IHtcbiAgbWFyZ2luOiAxMHB4IDVweCA1cHggMTVweDtcbn1cbi5waG90b3MtY29udGFpbmVyIC5waG90by5yaWdodCB7XG4gIG1hcmdpbjogMTBweCAxNXB4IDVweCA1cHg7XG59XG4ucGhvdG9zLWNvbnRhaW5lciAucGhvdG8gLnNpbmdsZS1waG90byB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5waG90b3MtY29udGFpbmVyIC5waG90byAucGhvdG8tbGlrZXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG59XG4ucGhvdG9zLWNvbnRhaW5lciAucGhvdG8gLnBob3RvLWxpa2VzLWNvbnRhaW5lciAucGhvdG8tbGlrZXMge1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5waG90b3MtY29udGFpbmVyIC5waG90byAucGhvdG8tbGlrZXMtY29udGFpbmVyIC5saWtlLWljb24gaS5mYS5mYS1oZWFydCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5wYWdlLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweCAxNXB4IDVweDtcbn1cbi5wYWdlLWhlYWRpbmcgLmJhY2stbmF2aWdhdG9yIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuLnBhZ2UtaGVhZGluZyAuaGVhZGluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTBweDtcbiAgdG9wOiAxMiU7XG4gIGxlZnQ6IDM1JTtcbiAgb3BhY2l0eTogMDtcbiAgZmlsbDogcmVkO1xufVxuLmljb24ubGlrZSB7XG4gIGFuaW1hdGlvbjogMnMgbGlrZS1oZWFydC1hbmltYXRpb24gZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgbGlrZS1oZWFydC1hbmltYXRpb24ge1xuICAwJSwgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgMTUlIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICB9XG4gIDMwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIH1cbiAgNDUlLCA4MCUge1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufSJdfQ== */";
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
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _shared_components_modal_popup_modal_popup_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared-components/modal-popup/modal-popup.page */
    "./src/app/shared-components/modal-popup/modal-popup.page.ts");
    /* harmony import */


    var _shared_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared-service.service */
    "./src/app/shared-service.service.ts");

    var PortfolioPage = /*#__PURE__*/function () {
      function PortfolioPage(sharedService, location, modalController) {
        _classCallCheck(this, PortfolioPage);

        this.sharedService = sharedService;
        this.location = location;
        this.modalController = modalController;
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
        this.changeToggleAnim = false;
      }

      _createClass(PortfolioPage, [{
        key: "onIonScroll",
        value: function onIonScroll(event) {// const eventDetails = event.detail;
          // this.changeToggleAnim = false;
          // setTimeout(() => {
          //   this.changeToggleAnim = true;
          // }, 500);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          this.sharedService.showSpinner.next(true);
          this.sharedService.showBackIcon.next(true);
          setTimeout(function () {
            _this.sharedService.showSpinner.next(false);
          }, 1000);
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.sharedService.showBackIcon.next(false);
        }
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
        key: "showImage",
        value: function showImage(image) {
          this.openModal(image);
        }
      }, {
        key: "onUnlike",
        value: function onUnlike(list, index) {
          if (list[index].isLiked) {
            list[index].likes = parseInt(list[index].likes, 10) - 1;
            list[index].isLiked = false;
          }
        }
      }, {
        key: "backClicked",
        value: function backClicked() {
          this.location.back();
        }
      }, {
        key: "openModal",
        value: function openModal(image) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _shared_components_modal_popup_modal_popup_page__WEBPACK_IMPORTED_MODULE_4__["ModalPopupPage"],
                      componentProps: {
                        "imageUrl": image
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (dataReturned) {
                      if (dataReturned !== null) {
                        _this2.dataReturned = dataReturned.data; //alert('Modal Sent Data :'+ dataReturned);
                      }
                    });
                    _context.next = 6;
                    return modal.present();

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return PortfolioPage;
    }();

    PortfolioPage.ctorParameters = function () {
      return [{
        type: _shared_service_service__WEBPACK_IMPORTED_MODULE_5__["SharedServiceService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }];
    };

    PortfolioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'portfolio',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./portfolio.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/portfolio/portfolio.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./portfolio.page.scss */
      "./src/app/pages/portfolio/portfolio.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_service__WEBPACK_IMPORTED_MODULE_5__["SharedServiceService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])], PortfolioPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-portfolio-portfolio-module-es5.js.map