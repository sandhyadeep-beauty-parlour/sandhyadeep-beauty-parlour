(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-portfolio-portfolio-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/portfolio/portfolio.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/portfolio/portfolio.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sandhyadeep-header class=\"z-index-99\"></sandhyadeep-header>\n<ion-content>\n    <div class=\"page-heading\">\n        <div (click)=\"backClicked()\" class=\"back-navigator\">\n            <i class=\"fa fa-angle-left\"></i>\n        </div>\n        <div class=\"heading-text\">\n            <b>Portfolio</b>\n        </div>\n    </div>\n    <div class=\"portfolio-container\">\n        <div class=\"photos-container\">\n            <div class=\"photo left\" *ngFor=\"let image of imagesData; let index = index\">\n                <div (dblclick)=\"onLike(imagesData, index)\" (click)=\"showImage(image.url)\" class=\"single-photo\">\n                    <svg class=\"icon icon-heart\" [class.like]=\"image.check\">\n                        <use xlink:href=\"#icon-heart\"></use>\n                    </svg>\n                    <img src=\"{{image.url}}\" />\n                </div>\n                <div class=\"photo-likes-container\">\n                    <div class=\"photo-likes\">\n                        Likes {{image.likes}}\n                    </div>\n                    <div (click)=\"onUnlike(imagesData, index)\" *ngIf=\"image.isLiked\" class=\"like-icon\"><i class=\"fa fa-heart\"></i></div>\n                    <div *ngIf=\"!image.isLiked\" class=\"like-icon\"><i class=\"fa fa-heart-o\"></i></div>\n                </div>\n            </div>\n        </div>\n        <div class=\"photos-container\">\n            <div class=\"photo right\" *ngFor=\"let image of imagesData1; let index = index\">\n                <div (dblclick)=\"onLike(imagesData1, index)\" (click)=\"showImage(image.url)\" class=\"single-photo\">\n                    <svg class=\"icon icon-heart\" [class.like]=\"image.check\">\n                        <use xlink:href=\"#icon-heart\"></use>\n                    </svg>\n                    <img src=\"{{image.url}}\" />\n                </div>\n                <div class=\"photo-likes-container\">\n                    <div class=\"photo-likes\">\n                        Likes {{image.likes}}\n                    </div>\n                    <div (click)=\"onUnlike(imagesData1, index)\"  *ngIf=\"image.isLiked\" class=\"like-icon\"><i class=\"fa fa-heart\"></i></div>\n                    <div *ngIf=\"!image.isLiked\" class=\"like-icon\"><i class=\"fa fa-heart-o\"></i></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <svg aria-hidden=\"true\" style=\"position: absolute; width: 0; height: 0; overflow: hidden;\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n        <defs>\n            <symbol id=\"icon-heart\" viewBox=\"0 0 32 32\">\n                <path d=\"M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z\"></path>\n            </symbol>\n        </defs>\n    </svg>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/portfolio/portfolio-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/portfolio/portfolio-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: PortfolioRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioRoutingModule", function() { return PortfolioRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _portfolio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio.page */ "./src/app/pages/portfolio/portfolio.page.ts");




const routes = [
    {
        path: '',
        component: _portfolio_page__WEBPACK_IMPORTED_MODULE_3__["PortfolioPage"]
    }
];
let PortfolioRoutingModule = class PortfolioRoutingModule {
};
PortfolioRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PortfolioRoutingModule);



/***/ }),

/***/ "./src/app/pages/portfolio/portfolio.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/portfolio/portfolio.module.ts ***!
  \*****************************************************/
/*! exports provided: PortfolioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioModule", function() { return PortfolioModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio-routing.module */ "./src/app/pages/portfolio/portfolio-routing.module.ts");
/* harmony import */ var _portfolio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portfolio.page */ "./src/app/pages/portfolio/portfolio.page.ts");
/* harmony import */ var _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared-components/header-component/header-component.module */ "./src/app/shared-components/header-component/header-component.module.ts");
/* harmony import */ var _shared_components_modal_popup_modal_popup_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared-components/modal-popup/modal-popup.module */ "./src/app/shared-components/modal-popup/modal-popup.module.ts");
/* harmony import */ var _shared_components_modal_popup_modal_popup_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared-components/modal-popup/modal-popup.page */ "./src/app/shared-components/modal-popup/modal-popup.page.ts");










let PortfolioModule = class PortfolioModule {
};
PortfolioModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_5__["PortfolioRoutingModule"],
            _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"],
            _shared_components_modal_popup_modal_popup_module__WEBPACK_IMPORTED_MODULE_8__["ModalPopupModule"]
        ],
        entryComponents: [_shared_components_modal_popup_modal_popup_page__WEBPACK_IMPORTED_MODULE_9__["ModalPopupPage"]],
        declarations: [_portfolio_page__WEBPACK_IMPORTED_MODULE_6__["PortfolioPage"]]
    })
], PortfolioModule);



/***/ }),

/***/ "./src/app/pages/portfolio/portfolio.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/portfolio/portfolio.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".portfolio-container {\n  display: flex;\n}\n\n.photos-container .photo {\n  position: relative;\n}\n\n.photos-container .photo.left {\n  margin: 10px 5px 5px 15px;\n}\n\n.photos-container .photo.right {\n  margin: 10px 15px 5px 5px;\n}\n\n.photos-container .photo .single-photo {\n  position: relative;\n}\n\n.photos-container .photo .photo-likes-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px;\n}\n\n.photos-container .photo .photo-likes-container .photo-likes {\n  color: #666;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.photos-container .photo .photo-likes-container .like-icon i.fa.fa-heart {\n  color: red;\n}\n\n.page-heading {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  margin: 10px 15px 5px;\n}\n\n.page-heading .back-navigator {\n  font-size: 30px;\n  margin-right: 20px;\n  color: #666;\n}\n\n.page-heading .heading-text {\n  font-size: 24px;\n}\n\n.icon {\n  position: absolute;\n  display: inline-block;\n  width: 50px;\n  top: 12%;\n  left: 35%;\n  opacity: 0;\n  fill: red;\n}\n\n.icon.like {\n  -webkit-animation: 2s like-heart-animation ease-in-out forwards;\n          animation: 2s like-heart-animation ease-in-out forwards;\n}\n\n@-webkit-keyframes like-heart-animation {\n  0%, to {\n    opacity: 0;\n    transform: scale(0);\n  }\n  15% {\n    opacity: 0.9;\n    transform: scale(1.2);\n  }\n  30% {\n    transform: scale(0.95);\n  }\n  45%, 80% {\n    opacity: 0.9;\n    transform: scale(1);\n  }\n}\n\n@keyframes like-heart-animation {\n  0%, to {\n    opacity: 0;\n    transform: scale(0);\n  }\n  15% {\n    opacity: 0.9;\n    transform: scale(1.2);\n  }\n  30% {\n    transform: scale(0.95);\n  }\n  45%, 80% {\n    opacity: 0.9;\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvYXBwL3BhZ2VzL3BvcnRmb2xpby9wb3J0Zm9saW8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wb3J0Zm9saW8vcG9ydGZvbGlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURFRTtFQUNFLGtCQUFBO0FDQ0o7O0FEQUk7RUFDRSx5QkFBQTtBQ0VOOztBREFJO0VBQ0UseUJBQUE7QUNFTjs7QURBSTtFQUNFLGtCQUFBO0FDRU47O0FEQUk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNFTjs7QURETTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNHUjs7QURBVTtFQUNFLFVBQUE7QUNFWjs7QURLQTtFQU1FLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNQRjs7QURERTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNHSjs7QURHRTtFQUNFLGVBQUE7QUNESjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0ZGOztBREdFO0VBQ0UsK0RBQUE7VUFBQSx1REFBQTtBQ0RKOztBREtBO0VBQ0U7SUFFRSxVQUFBO0lBRUEsbUJBQUE7RUNIRjtFREtBO0lBQ0UsWUFBQTtJQUVBLHFCQUFBO0VDSEY7RURLQTtJQUVFLHNCQUFBO0VDSEY7RURLQTtJQUVFLFlBQUE7SUFFQSxtQkFBQTtFQ0pGO0FBQ0Y7O0FEakJBO0VBQ0U7SUFFRSxVQUFBO0lBRUEsbUJBQUE7RUNIRjtFREtBO0lBQ0UsWUFBQTtJQUVBLHFCQUFBO0VDSEY7RURLQTtJQUVFLHNCQUFBO0VDSEY7RURLQTtJQUVFLFlBQUE7SUFFQSxtQkFBQTtFQ0pGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wb3J0Zm9saW8vcG9ydGZvbGlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3J0Zm9saW8tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5waG90b3MtY29udGFpbmVyIHtcbiAgLnBob3RvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJi5sZWZ0IHtcbiAgICAgIG1hcmdpbjogMTBweCA1cHggNXB4IDE1cHg7XG4gICAgfVxuICAgICYucmlnaHQge1xuICAgICAgbWFyZ2luOiAxMHB4IDE1cHggNXB4IDVweDtcbiAgICB9XG4gICAgLnNpbmdsZS1waG90byB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC5waG90by1saWtlcy1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAucGhvdG8tbGlrZXMge1xuICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICAgIC5saWtlLWljb24ge1xuICAgICAgICAgIGkuZmEuZmEtaGVhcnQge1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5wYWdlLWhlYWRpbmcge1xuICAuYmFjay1uYXZpZ2F0b3Ige1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgY29sb3I6ICM2NjY7XG4gIH1cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDEwcHggMTVweCA1cHg7XG4gIC5oZWFkaW5nLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxufVxuXG4uaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTBweDtcbiAgdG9wOiAxMiU7XG4gIGxlZnQ6IDM1JTtcbiAgb3BhY2l0eTogMDtcbiAgZmlsbDogcmVkO1xuICAmLmxpa2Uge1xuICAgIGFuaW1hdGlvbjogMnMgbGlrZS1oZWFydC1hbmltYXRpb24gZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBsaWtlLWhlYXJ0LWFuaW1hdGlvbiB7XG4gIDAlLFxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICAxNSUge1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIH1cbiAgMzAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgfVxuICA0NSUsXG4gIDgwJSB7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4iLCIucG9ydGZvbGlvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5waG90b3MtY29udGFpbmVyIC5waG90byB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5waG90b3MtY29udGFpbmVyIC5waG90by5sZWZ0IHtcbiAgbWFyZ2luOiAxMHB4IDVweCA1cHggMTVweDtcbn1cbi5waG90b3MtY29udGFpbmVyIC5waG90by5yaWdodCB7XG4gIG1hcmdpbjogMTBweCAxNXB4IDVweCA1cHg7XG59XG4ucGhvdG9zLWNvbnRhaW5lciAucGhvdG8gLnNpbmdsZS1waG90byB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5waG90b3MtY29udGFpbmVyIC5waG90byAucGhvdG8tbGlrZXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG59XG4ucGhvdG9zLWNvbnRhaW5lciAucGhvdG8gLnBob3RvLWxpa2VzLWNvbnRhaW5lciAucGhvdG8tbGlrZXMge1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5waG90b3MtY29udGFpbmVyIC5waG90byAucGhvdG8tbGlrZXMtY29udGFpbmVyIC5saWtlLWljb24gaS5mYS5mYS1oZWFydCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5wYWdlLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweCAxNXB4IDVweDtcbn1cbi5wYWdlLWhlYWRpbmcgLmJhY2stbmF2aWdhdG9yIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuLnBhZ2UtaGVhZGluZyAuaGVhZGluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTBweDtcbiAgdG9wOiAxMiU7XG4gIGxlZnQ6IDM1JTtcbiAgb3BhY2l0eTogMDtcbiAgZmlsbDogcmVkO1xufVxuLmljb24ubGlrZSB7XG4gIGFuaW1hdGlvbjogMnMgbGlrZS1oZWFydC1hbmltYXRpb24gZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgbGlrZS1oZWFydC1hbmltYXRpb24ge1xuICAwJSwgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgMTUlIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICB9XG4gIDMwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIH1cbiAgNDUlLCA4MCUge1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/portfolio/portfolio.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/portfolio/portfolio.page.ts ***!
  \***************************************************/
/*! exports provided: PortfolioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioPage", function() { return PortfolioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_components_modal_popup_modal_popup_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared-components/modal-popup/modal-popup.page */ "./src/app/shared-components/modal-popup/modal-popup.page.ts");





let PortfolioPage = class PortfolioPage {
    constructor(location, modalController) {
        this.location = location;
        this.modalController = modalController;
        this.imagesData = [
            {
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
            }
        ];
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
            }
        ];
    }
    ngOnInit() {
    }
    onLike(list, index) {
        list[index].check = true;
        if (!list[index].isLiked) {
            list[index].likes = parseInt(list[index].likes, 10) + 1;
            list[index].isLiked = true;
        }
        setTimeout(() => {
            list[index].check = false;
        }, 1200);
    }
    showImage(image) {
        this.openModal(image);
    }
    onUnlike(list, index) {
        if (list[index].isLiked) {
            list[index].likes = parseInt(list[index].likes, 10) - 1;
            list[index].isLiked = false;
        }
    }
    backClicked() {
        this.location.back();
    }
    openModal(image) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _shared_components_modal_popup_modal_popup_page__WEBPACK_IMPORTED_MODULE_4__["ModalPopupPage"],
                componentProps: {
                    "imageUrl": image,
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                    //alert('Modal Sent Data :'+ dataReturned);
                }
            });
            return yield modal.present();
        });
    }
};
PortfolioPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
PortfolioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'portfolio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./portfolio.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/portfolio/portfolio.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./portfolio.page.scss */ "./src/app/pages/portfolio/portfolio.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], PortfolioPage);



/***/ })

}]);
//# sourceMappingURL=pages-portfolio-portfolio-module-es2015.js.map