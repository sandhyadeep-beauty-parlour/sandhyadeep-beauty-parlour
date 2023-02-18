(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-portfolio-portfolio-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/portfolio/portfolio.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/portfolio/portfolio.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sandhyadeep-header [showBackIcon]=\"true\" class=\"z-index-99\"></sandhyadeep-header>\r\n<ion-content>\r\n    <div class=\"page-heading\">\r\n        <div class=\"heading-text\">\r\n            <b>Portfolio</b>\r\n        </div>\r\n    </div>\r\n    <div class=\"portfolio-container\">\r\n        <div class=\"photos-container\">\r\n            <div class=\"photo left\" *ngFor=\"let image of imagesData; let index = index\">\r\n                <div (dblclick)=\"onLike(imagesData, index)\" (click)=\"showImage(image.url)\" class=\"single-photo\">\r\n                    <svg class=\"icon icon-heart\" [class.like]=\"image.check\">\r\n                        <use xlink:href=\"#icon-heart\"></use>\r\n                    </svg>\r\n                    <img src=\"{{image.url}}\" />\r\n                </div>\r\n                <div class=\"photo-likes-container\">\r\n                    <div class=\"photo-likes\">\r\n                        Likes {{image.likes}}\r\n                    </div>\r\n                    <div (click)=\"onUnlike(imagesData, index)\" *ngIf=\"image.isLiked\" class=\"like-icon\"><i class=\"fa fa-heart\"></i></div>\r\n                    <div *ngIf=\"!image.isLiked\" class=\"like-icon\"><i class=\"fa fa-heart-o\"></i></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"photos-container\">\r\n            <div class=\"photo right\" *ngFor=\"let image of imagesData1; let index = index\">\r\n                <div (dblclick)=\"onLike(imagesData1, index)\" (click)=\"showImage(image.url)\" class=\"single-photo\">\r\n                    <svg class=\"icon icon-heart\" [class.like]=\"image.check\">\r\n                        <use xlink:href=\"#icon-heart\"></use>\r\n                    </svg>\r\n                    <img src=\"{{image.url}}\" />\r\n                </div>\r\n                <div class=\"photo-likes-container\">\r\n                    <div class=\"photo-likes\">\r\n                        Likes {{image.likes}}\r\n                    </div>\r\n                    <div (click)=\"onUnlike(imagesData1, index)\"  *ngIf=\"image.isLiked\" class=\"like-icon\"><i class=\"fa fa-heart\"></i></div>\r\n                    <div *ngIf=\"!image.isLiked\" class=\"like-icon\"><i class=\"fa fa-heart-o\"></i></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <svg aria-hidden=\"true\" style=\"position: absolute; width: 0; height: 0; overflow: hidden;\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n        <defs>\r\n            <symbol id=\"icon-heart\" viewBox=\"0 0 32 32\">\r\n                <path d=\"M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z\"></path>\r\n            </symbol>\r\n        </defs>\r\n    </svg>\r\n</ion-content>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".portfolio-container {\n  display: flex;\n}\n\n.photos-container .photo {\n  position: relative;\n}\n\n.photos-container .photo.left {\n  margin: 10px 5px 5px 15px;\n}\n\n.photos-container .photo.right {\n  margin: 10px 15px 5px 5px;\n}\n\n.photos-container .photo .single-photo {\n  position: relative;\n}\n\n.photos-container .photo .photo-likes-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px;\n}\n\n.photos-container .photo .photo-likes-container .photo-likes {\n  color: #666;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.photos-container .photo .photo-likes-container .like-icon i.fa.fa-heart {\n  color: red;\n}\n\n.page-heading {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  margin: 10px 15px 5px;\n}\n\n.page-heading .back-navigator {\n  font-size: 30px;\n  margin-right: 20px;\n  color: #666;\n}\n\n.page-heading .heading-text {\n  font-size: 24px;\n}\n\n.icon {\n  position: absolute;\n  display: inline-block;\n  width: 50px;\n  top: 12%;\n  left: 35%;\n  opacity: 0;\n  fill: red;\n}\n\n.icon.like {\n  -webkit-animation: 2s like-heart-animation ease-in-out forwards;\n          animation: 2s like-heart-animation ease-in-out forwards;\n}\n\n@-webkit-keyframes like-heart-animation {\n  0%, to {\n    opacity: 0;\n    transform: scale(0);\n  }\n  15% {\n    opacity: 0.9;\n    transform: scale(1.2);\n  }\n  30% {\n    transform: scale(0.95);\n  }\n  45%, 80% {\n    opacity: 0.9;\n    transform: scale(1);\n  }\n}\n\n@keyframes like-heart-animation {\n  0%, to {\n    opacity: 0;\n    transform: scale(0);\n  }\n  15% {\n    opacity: 0.9;\n    transform: scale(1.2);\n  }\n  30% {\n    transform: scale(0.95);\n  }\n  45%, 80% {\n    opacity: 0.9;\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9ydGZvbGlvL0M6XFxVc2Vyc1xcYWFiaGFnd2FcXHNhbmRoeWFkZWVwIGlvbmljIHN0YWNrL3NyY1xcYXBwXFxwYWdlc1xccG9ydGZvbGlvXFxwb3J0Zm9saW8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wb3J0Zm9saW8vcG9ydGZvbGlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURFRTtFQUNFLGtCQUFBO0FDQ0o7O0FEQUk7RUFDRSx5QkFBQTtBQ0VOOztBREFJO0VBQ0UseUJBQUE7QUNFTjs7QURBSTtFQUNFLGtCQUFBO0FDRU47O0FEQUk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNFTjs7QURETTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNHUjs7QURBVTtFQUNFLFVBQUE7QUNFWjs7QURLQTtFQU1FLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNQRjs7QURERTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNHSjs7QURHRTtFQUNFLGVBQUE7QUNESjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0ZGOztBREdFO0VBQ0UsK0RBQUE7VUFBQSx1REFBQTtBQ0RKOztBREtBO0VBQ0U7SUFFRSxVQUFBO0lBRUEsbUJBQUE7RUNIRjtFREtBO0lBQ0UsWUFBQTtJQUVBLHFCQUFBO0VDSEY7RURLQTtJQUVFLHNCQUFBO0VDSEY7RURLQTtJQUVFLFlBQUE7SUFFQSxtQkFBQTtFQ0pGO0FBQ0Y7O0FEakJBO0VBQ0U7SUFFRSxVQUFBO0lBRUEsbUJBQUE7RUNIRjtFREtBO0lBQ0UsWUFBQTtJQUVBLHFCQUFBO0VDSEY7RURLQTtJQUVFLHNCQUFBO0VDSEY7RURLQTtJQUVFLFlBQUE7SUFFQSxtQkFBQTtFQ0pGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wb3J0Zm9saW8vcG9ydGZvbGlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3J0Zm9saW8tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5waG90b3MtY29udGFpbmVyIHtcclxuICAucGhvdG8ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJi5sZWZ0IHtcclxuICAgICAgbWFyZ2luOiAxMHB4IDVweCA1cHggMTVweDtcclxuICAgIH1cclxuICAgICYucmlnaHQge1xyXG4gICAgICBtYXJnaW46IDEwcHggMTVweCA1cHggNXB4O1xyXG4gICAgfVxyXG4gICAgLnNpbmdsZS1waG90byB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5waG90by1saWtlcy1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgLnBob3RvLWxpa2VzIHtcclxuICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmxpa2UtaWNvbiB7XHJcbiAgICAgICAgICBpLmZhLmZhLWhlYXJ0IHtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnBhZ2UtaGVhZGluZyB7XHJcbiAgLmJhY2stbmF2aWdhdG9yIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gIH1cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMTBweCAxNXB4IDVweDtcclxuICAuaGVhZGluZy10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIHRvcDogMTIlO1xyXG4gIGxlZnQ6IDM1JTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGZpbGw6IHJlZDtcclxuICAmLmxpa2Uge1xyXG4gICAgYW5pbWF0aW9uOiAycyBsaWtlLWhlYXJ0LWFuaW1hdGlvbiBlYXNlLWluLW91dCBmb3J3YXJkcztcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbGlrZS1oZWFydC1hbmltYXRpb24ge1xyXG4gIDAlLFxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIH1cclxuICAxNSUge1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgfVxyXG4gIDMwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIH1cclxuICA0NSUsXHJcbiAgODAlIHtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG59XHJcbiIsIi5wb3J0Zm9saW8tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnBob3Rvcy1jb250YWluZXIgLnBob3RvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBob3Rvcy1jb250YWluZXIgLnBob3RvLmxlZnQge1xuICBtYXJnaW46IDEwcHggNXB4IDVweCAxNXB4O1xufVxuLnBob3Rvcy1jb250YWluZXIgLnBob3RvLnJpZ2h0IHtcbiAgbWFyZ2luOiAxMHB4IDE1cHggNXB4IDVweDtcbn1cbi5waG90b3MtY29udGFpbmVyIC5waG90byAuc2luZ2xlLXBob3RvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBob3Rvcy1jb250YWluZXIgLnBob3RvIC5waG90by1saWtlcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5waG90b3MtY29udGFpbmVyIC5waG90byAucGhvdG8tbGlrZXMtY29udGFpbmVyIC5waG90by1saWtlcyB7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnBob3Rvcy1jb250YWluZXIgLnBob3RvIC5waG90by1saWtlcy1jb250YWluZXIgLmxpa2UtaWNvbiBpLmZhLmZhLWhlYXJ0IHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnBhZ2UtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4IDE1cHggNXB4O1xufVxuLnBhZ2UtaGVhZGluZyAuYmFjay1uYXZpZ2F0b3Ige1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgY29sb3I6ICM2NjY7XG59XG4ucGFnZS1oZWFkaW5nIC5oZWFkaW5nLXRleHQge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MHB4O1xuICB0b3A6IDEyJTtcbiAgbGVmdDogMzUlO1xuICBvcGFjaXR5OiAwO1xuICBmaWxsOiByZWQ7XG59XG4uaWNvbi5saWtlIHtcbiAgYW5pbWF0aW9uOiAycyBsaWtlLWhlYXJ0LWFuaW1hdGlvbiBlYXNlLWluLW91dCBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBsaWtlLWhlYXJ0LWFuaW1hdGlvbiB7XG4gIDAlLCB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICAxNSUge1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIH1cbiAgMzAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgfVxuICA0NSUsIDgwJSB7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59Il19 */");

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
/* harmony import */ var _shared_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared-service.service */ "./src/app/shared-service.service.ts");






let PortfolioPage = class PortfolioPage {
    constructor(sharedService, location, modalController) {
        this.sharedService = sharedService;
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
    ngOnInit() { }
    ionViewDidEnter() {
        this.sharedService.showSpinner.next(true);
        setTimeout(() => {
            this.sharedService.showSpinner.next(false);
        }, 1000);
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
    { type: _shared_service_service__WEBPACK_IMPORTED_MODULE_5__["SharedServiceService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
PortfolioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'portfolio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./portfolio.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/portfolio/portfolio.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./portfolio.page.scss */ "./src/app/pages/portfolio/portfolio.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_service__WEBPACK_IMPORTED_MODULE_5__["SharedServiceService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], PortfolioPage);



/***/ })

}]);
//# sourceMappingURL=pages-portfolio-portfolio-module-es2015.js.map