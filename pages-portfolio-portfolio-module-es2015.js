(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-portfolio-portfolio-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/portfolio/portfolio.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/portfolio/portfolio.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"top-adjust\">\n    <div class=\"page-heading\">\n        <div class=\"heading-text\">\n            <b>Portfolio</b>\n        </div>\n    </div>\n    <div class=\"portfolio-container\">\n        <div class=\"photos-container\">\n            <div class=\"photo left\" *ngFor=\"let image of imagesData\">\n                <div class=\"single-photo\">\n                    <img src=\"{{image.url}}\" />\n                </div>\n                <div class=\"photo-likes-container\">\n                    <div class=\"photo-likes\">\n                        Likes {{image.likes}}\n                    </div>\n                    <div class=\"like-icon\"><i class=\"fa fa-heart\"></i></div>\n                </div>\n            </div>\n        </div>\n        <div class=\"photos-container\">\n            <div class=\"photo right\" *ngFor=\"let image of imagesData1\">\n                <div class=\"single-photo\">\n                    <img src=\"{{image.url}}\" />\n                </div>\n                <div class=\"photo-likes-container\">\n                    <div class=\"photo-likes\">\n                        Likes {{image.likes}}\n                    </div>\n                    <div class=\"like-icon\"><i class=\"fa fa-heart\"></i></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</ion-content>\n");

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







let PortfolioModule = class PortfolioModule {
};
PortfolioModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_5__["PortfolioRoutingModule"]
        ],
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
/* harmony default export */ __webpack_exports__["default"] = (".top-adjust {\n  top: 65px;\n}\n\n.portfolio-container {\n  display: flex;\n  margin-bottom: 65px;\n}\n\n.photos-container .photo.left {\n  margin: 10px 5px 5px 15px;\n}\n\n.photos-container .photo.right {\n  margin: 10px 15px 5px 5px;\n}\n\n.photos-container .photo .single-photo img {\n  border-radius: 15px;\n}\n\n.photos-container .photo .photo-likes-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px;\n}\n\n.photos-container .photo .photo-likes-container .photo-likes {\n  color: #666;\n  font-weight: bold;\n}\n\n.photos-container .photo .photo-likes-container .like-icon i.fa.fa-heart {\n  color: red;\n}\n\n.page-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 18px 15px 5px;\n}\n\n.page-heading .heading-text {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvYXBwL3BhZ2VzL3BvcnRmb2xpby9wb3J0Zm9saW8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wb3J0Zm9saW8vcG9ydGZvbGlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7QUNDRjs7QURDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0VGOztBREdJO0VBQ0UseUJBQUE7QUNBTjs7QURFSTtFQUNFLHlCQUFBO0FDQU47O0FER007RUFDRSxtQkFBQTtBQ0RSOztBRElJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDRk47O0FER007RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUNEUjs7QURJVTtFQUNFLFVBQUE7QUNGWjs7QURTQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNORjs7QURPRTtFQUNFLGVBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BvcnRmb2xpby9wb3J0Zm9saW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC1hZGp1c3Qge1xuICB0b3A6IDY1cHg7XG59XG4ucG9ydGZvbGlvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDY1cHg7XG5cbn1cbi5waG90b3MtY29udGFpbmVyIHtcbiAgLnBob3RvIHtcbiAgICAmLmxlZnQge1xuICAgICAgbWFyZ2luOiAxMHB4IDVweCA1cHggMTVweDtcbiAgICB9XG4gICAgJi5yaWdodCB7XG4gICAgICBtYXJnaW46IDEwcHggMTVweCA1cHggNXB4O1xuICAgIH1cbiAgICAuc2luZ2xlLXBob3RvIHtcbiAgICAgIGltZyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5waG90by1saWtlcy1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAucGhvdG8tbGlrZXMge1xuICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgICAubGlrZS1pY29uIHtcbiAgICAgICAgICBpLmZhLmZhLWhlYXJ0IHtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ucGFnZS1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDE4cHggMTVweCA1cHg7XG4gIC5oZWFkaW5nLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxufVxuIiwiLnRvcC1hZGp1c3Qge1xuICB0b3A6IDY1cHg7XG59XG5cbi5wb3J0Zm9saW8tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogNjVweDtcbn1cblxuLnBob3Rvcy1jb250YWluZXIgLnBob3RvLmxlZnQge1xuICBtYXJnaW46IDEwcHggNXB4IDVweCAxNXB4O1xufVxuLnBob3Rvcy1jb250YWluZXIgLnBob3RvLnJpZ2h0IHtcbiAgbWFyZ2luOiAxMHB4IDE1cHggNXB4IDVweDtcbn1cbi5waG90b3MtY29udGFpbmVyIC5waG90byAuc2luZ2xlLXBob3RvIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG4ucGhvdG9zLWNvbnRhaW5lciAucGhvdG8gLnBob3RvLWxpa2VzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4O1xufVxuLnBob3Rvcy1jb250YWluZXIgLnBob3RvIC5waG90by1saWtlcy1jb250YWluZXIgLnBob3RvLWxpa2VzIHtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnBob3Rvcy1jb250YWluZXIgLnBob3RvIC5waG90by1saWtlcy1jb250YWluZXIgLmxpa2UtaWNvbiBpLmZhLmZhLWhlYXJ0IHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnBhZ2UtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxOHB4IDE1cHggNXB4O1xufVxuLnBhZ2UtaGVhZGluZyAuaGVhZGluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xufSJdfQ== */");

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


let PortfolioPage = class PortfolioPage {
    constructor() {
        this.imagesData = [
            {
                url: 'assets/work14.jpg',
                likes: '300',
                isLiked: false
            }, {
                url: 'assets/work13.jpg',
                likes: '300',
                isLiked: false
            }, {
                url: 'assets/work12.jpg',
                likes: '300',
                isLiked: false
            }, {
                url: 'assets/work11.jpg',
                likes: '300',
                isLiked: false
            }, {
                url: 'assets/work10.jpg',
                likes: '300',
                isLiked: false
            }, {
                url: 'assets/work9.jpg',
                likes: '300',
                isLiked: false
            }
        ];
        this.imagesData1 = [{
                url: 'assets/work10.jpg',
                likes: '300',
                isLiked: false
            }, {
                url: 'assets/work7.jpg',
                likes: '300',
                isLiked: false
            }, {
                url: 'assets/work6.jpg',
                likes: '300',
                isLiked: false
            }, {
                url: 'assets/work3.jpg',
                likes: '300',
                isLiked: false
            }, {
                url: 'assets/work2.jpg',
                likes: '300',
                isLiked: false
            }, {
                url: 'assets/work15.jpg',
                likes: '300',
                isLiked: false
            }, {
                url: 'assets/work16.jpg',
                likes: '300',
                isLiked: false
            }
        ];
    }
    ngOnInit() {
    }
};
PortfolioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'portfolio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./portfolio.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/portfolio/portfolio.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./portfolio.page.scss */ "./src/app/pages/portfolio/portfolio.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PortfolioPage);



/***/ })

}]);
//# sourceMappingURL=pages-portfolio-portfolio-module-es2015.js.map