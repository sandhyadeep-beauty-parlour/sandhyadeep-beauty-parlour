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


    __webpack_exports__["default"] = "<sandhyadeep-header [showBackIcon]=\"true\" class=\"z-index-999\"></sandhyadeep-header>\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"onIonScroll($event)\">\n    <div class=\"page-heading\">\n        <div class=\"heading-text\">\n            <b>Portfolio</b>\n        </div>\n    </div>\n    <div class=\"portfolio-container\">\n        <div class=\"photos-container\">\n            <div class=\"photo left animate__animated animate__bounceIn animate__fast\" *ngFor=\"let image of imagesData; let index = index\">\n                <div (dblclick)=\"onLike(imagesData, index)\" (click)=\"showImage(image.url)\" class=\"single-photo\">\n                    <svg class=\"icon icon-heart\" [class.like]=\"image.check\">\n                        <use xlink:href=\"#icon-heart\"></use>\n                    </svg>\n                    <img src=\"{{image.url}}\" />\n                </div>\n                <div class=\"photo-likes-container\">\n                    <div class=\"photo-likes\">\n                        Likes {{image.likes}}\n                    </div>\n                    <div (click)=\"onUnlike(imagesData, index)\" *ngIf=\"image.isLiked\" class=\"like-icon\"><i class=\"fa fa-heart\"></i></div>\n                    <div *ngIf=\"!image.isLiked\" class=\"like-icon\"><i class=\"fa fa-heart-o\"></i></div>\n                </div>\n            </div>\n        </div>\n        <div class=\"photos-container\">\n            <div class=\"photo right animate__animated animate__bounceIn animate__fast\" *ngFor=\"let image of imagesData1; let index = index\">\n                <div (dblclick)=\"onLike(imagesData1, index)\" (click)=\"showImage(image.url)\" class=\"single-photo\">\n                    <svg class=\"icon icon-heart\" [class.like]=\"image.check\">\n                        <use xlink:href=\"#icon-heart\"></use>\n                    </svg>\n                    <img src=\"{{image.url}}\" />\n                </div>\n                <div class=\"photo-likes-container\">\n                    <div class=\"photo-likes\">\n                        Likes {{image.likes}}\n                    </div>\n                    <div (click)=\"onUnlike(imagesData1, index)\"  *ngIf=\"image.isLiked\" class=\"like-icon\"><i class=\"fa fa-heart\"></i></div>\n                    <div *ngIf=\"!image.isLiked\" class=\"like-icon\"><i class=\"fa fa-heart-o\"></i></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <svg aria-hidden=\"true\" style=\"position: absolute; width: 0; height: 0; overflow: hidden;\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n        <defs>\n            <symbol id=\"icon-heart\" viewBox=\"0 0 32 32\">\n                <path d=\"M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z\"></path>\n            </symbol>\n        </defs>\n    </svg>\n</ion-content>\n<app-logo-spinner></app-logo-spinner>\n\n";
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


    __webpack_exports__["default"] = ".portfolio-container {\n  display: flex;\n}\n\n.photos-container .photo {\n  position: relative;\n}\n\n.photos-container .photo.left {\n  margin: 10px 5px 5px 15px;\n}\n\n.photos-container .photo.right {\n  margin: 10px 15px 5px 5px;\n}\n\n.photos-container .photo .single-photo {\n  position: relative;\n}\n\n.photos-container .photo .photo-likes-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px;\n}\n\n.photos-container .photo .photo-likes-container .photo-likes {\n  color: #666;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.photos-container .photo .photo-likes-container .like-icon i.fa.fa-heart {\n  color: red;\n}\n\n.page-heading {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  margin: 10px 15px 5px;\n}\n\n.page-heading .back-navigator {\n  font-size: 30px;\n  margin-right: 20px;\n  color: #666;\n}\n\n.page-heading .heading-text {\n  font-size: 24px;\n}\n\n.icon {\n  position: absolute;\n  display: inline-block;\n  width: 50px;\n  top: 12%;\n  left: 35%;\n  opacity: 0;\n  fill: red;\n}\n\n.icon.like {\n  -webkit-animation: 2s like-heart-animation ease-in-out forwards;\n          animation: 2s like-heart-animation ease-in-out forwards;\n}\n\n@-webkit-keyframes like-heart-animation {\n  0%, to {\n    opacity: 0;\n    transform: scale(0);\n  }\n  15% {\n    opacity: 0.9;\n    transform: scale(1.2);\n  }\n  30% {\n    transform: scale(0.95);\n  }\n  45%, 80% {\n    opacity: 0.9;\n    transform: scale(1);\n  }\n}\n\n@keyframes like-heart-animation {\n  0%, to {\n    opacity: 0;\n    transform: scale(0);\n  }\n  15% {\n    opacity: 0.9;\n    transform: scale(1.2);\n  }\n  30% {\n    transform: scale(0.95);\n  }\n  45%, 80% {\n    opacity: 0.9;\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL2FwcC9wYWdlcy9wb3J0Zm9saW8vcG9ydGZvbGlvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcG9ydGZvbGlvL3BvcnRmb2xpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUU7RUFDRSxrQkFBQTtBQ0NKOztBREFJO0VBQ0UseUJBQUE7QUNFTjs7QURBSTtFQUNFLHlCQUFBO0FDRU47O0FEQUk7RUFDRSxrQkFBQTtBQ0VOOztBREFJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDRU47O0FERE07RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDR1I7O0FEQVU7RUFDRSxVQUFBO0FDRVo7O0FES0E7RUFNRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDUEY7O0FEREU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDR0o7O0FER0U7RUFDRSxlQUFBO0FDREo7O0FES0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNGRjs7QURHRTtFQUNFLCtEQUFBO1VBQUEsdURBQUE7QUNESjs7QURLQTtFQUNFO0lBRUUsVUFBQTtJQUVBLG1CQUFBO0VDSEY7RURLQTtJQUNFLFlBQUE7SUFFQSxxQkFBQTtFQ0hGO0VES0E7SUFFRSxzQkFBQTtFQ0hGO0VES0E7SUFFRSxZQUFBO0lBRUEsbUJBQUE7RUNKRjtBQUNGOztBRGpCQTtFQUNFO0lBRUUsVUFBQTtJQUVBLG1CQUFBO0VDSEY7RURLQTtJQUNFLFlBQUE7SUFFQSxxQkFBQTtFQ0hGO0VES0E7SUFFRSxzQkFBQTtFQ0hGO0VES0E7SUFFRSxZQUFBO0lBRUEsbUJBQUE7RUNKRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9ydGZvbGlvL3BvcnRmb2xpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9ydGZvbGlvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucGhvdG9zLWNvbnRhaW5lciB7XG4gIC5waG90byB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICYubGVmdCB7XG4gICAgICBtYXJnaW46IDEwcHggNXB4IDVweCAxNXB4O1xuICAgIH1cbiAgICAmLnJpZ2h0IHtcbiAgICAgIG1hcmdpbjogMTBweCAxNXB4IDVweCA1cHg7XG4gICAgfVxuICAgIC5zaW5nbGUtcGhvdG8ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICAucGhvdG8tbGlrZXMtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgLnBob3RvLWxpa2VzIHtcbiAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgICAubGlrZS1pY29uIHtcbiAgICAgICAgICBpLmZhLmZhLWhlYXJ0IHtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ucGFnZS1oZWFkaW5nIHtcbiAgLmJhY2stbmF2aWdhdG9yIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGNvbG9yOiAjNjY2O1xuICB9XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4IDE1cHggNXB4O1xuICAuaGVhZGluZy10ZXh0IHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn1cblxuLmljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwcHg7XG4gIHRvcDogMTIlO1xuICBsZWZ0OiAzNSU7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbGw6IHJlZDtcbiAgJi5saWtlIHtcbiAgICBhbmltYXRpb246IDJzIGxpa2UtaGVhcnQtYW5pbWF0aW9uIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbGlrZS1oZWFydC1hbmltYXRpb24ge1xuICAwJSxcbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgMTUlIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICB9XG4gIDMwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIH1cbiAgNDUlLFxuICA4MCUge1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuIiwiLnBvcnRmb2xpby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucGhvdG9zLWNvbnRhaW5lciAucGhvdG8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucGhvdG9zLWNvbnRhaW5lciAucGhvdG8ubGVmdCB7XG4gIG1hcmdpbjogMTBweCA1cHggNXB4IDE1cHg7XG59XG4ucGhvdG9zLWNvbnRhaW5lciAucGhvdG8ucmlnaHQge1xuICBtYXJnaW46IDEwcHggMTVweCA1cHggNXB4O1xufVxuLnBob3Rvcy1jb250YWluZXIgLnBob3RvIC5zaW5nbGUtcGhvdG8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucGhvdG9zLWNvbnRhaW5lciAucGhvdG8gLnBob3RvLWxpa2VzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4O1xufVxuLnBob3Rvcy1jb250YWluZXIgLnBob3RvIC5waG90by1saWtlcy1jb250YWluZXIgLnBob3RvLWxpa2VzIHtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ucGhvdG9zLWNvbnRhaW5lciAucGhvdG8gLnBob3RvLWxpa2VzLWNvbnRhaW5lciAubGlrZS1pY29uIGkuZmEuZmEtaGVhcnQge1xuICBjb2xvcjogcmVkO1xufVxuXG4ucGFnZS1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDEwcHggMTVweCA1cHg7XG59XG4ucGFnZS1oZWFkaW5nIC5iYWNrLW5hdmlnYXRvciB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzY2Njtcbn1cbi5wYWdlLWhlYWRpbmcgLmhlYWRpbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDUwcHg7XG4gIHRvcDogMTIlO1xuICBsZWZ0OiAzNSU7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbGw6IHJlZDtcbn1cbi5pY29uLmxpa2Uge1xuICBhbmltYXRpb246IDJzIGxpa2UtaGVhcnQtYW5pbWF0aW9uIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIGxpa2UtaGVhcnQtYW5pbWF0aW9uIHtcbiAgMCUsIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDE1JSB7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgfVxuICAzMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB9XG4gIDQ1JSwgODAlIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn0iXX0= */";
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