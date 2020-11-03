(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-feed-feed-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed/feed.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed/feed.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n        <div style=\"display: flex; align-items: center; justify-content: space-between\">\n            <div style=\"display: flex; align-items: center; justify-content: space-between;\">\n                <div style=\"width: 45px; border: 2px solid #666; padding: 1px; border-radius: 50%; overflow: hidden; display: inline-block; margin: 10px;\">\n                    <img src=\"../../../assets/sandhyadeep-logo.jpg\">\n                </div>\n                <div class=\"logo-container\">\n                    <div class=\"logo-text\">\n                        Sandhyadeep\n                    </div>\n                    <div class=\"slogan-text\">\n                        Have a hair affair with us\n                    </div>\n                </div>\n            </div>\n<!--            <div style=\"display: flex; align-items: center; justify-content: space-between;\">-->\n<!--                <div>-->\n<!--                    <ion-icon style=\"font-size: 30px;margin: 0 5px; color: purple;\" name=\"search-outline\"></ion-icon>-->\n<!--                </div>-->\n<!--                <div>-->\n<!--                    <ion-icon style=\"font-size: 30px;margin: 0 5px; color: purple;\" name=\"notifications-outline\"></ion-icon>-->\n<!--                </div>-->\n<!--            </div>-->\n        </div>\n</ion-header>\n\n<ion-content>\n    <ion-slides class=\"feed-sliders\" pager=\"false\" [options]=\"slideOpts\">\n        <ion-slide class=\"feed-slider feed-slider-one\">\n\n        </ion-slide>\n        <ion-slide class=\"feed-slider feed-slider-two\">\n\n        </ion-slide>\n        <ion-slide class=\"feed-slider feed-slider-three\">\n\n        </ion-slide>\n    </ion-slides>\n\n    <div>\n        <div class=\"slide_container\">\n            <div class=\"slider s1\"></div>\n            <div class=\"slider s2\"></div>\n            <div class=\"slider s3\"></div>\n            <div class=\"slider s4\"></div>\n        </div>\n\n        <div class=\"feed-container\">\n            <div class=\"feed-image-container\">\n                <div>\n                    <div class=\"feed-image feed-image-hair\"></div>\n                    <div class=\"feed-text\"> Hair</div>\n                </div>\n            </div>\n            <div class=\"feed-image-container\">\n                <div>\n                    <div class=\"feed-image feed-image-skin\"></div>\n                    <div class=\"feed-text\"> Skin</div>\n                </div>\n            </div>\n            <div class=\"feed-image-container\">\n                <div>\n                    <div class=\"feed-image feed-image-makeup\"></div>\n                    <div class=\"feed-text\"> Makeup</div>\n                </div>\n            </div>\n            <div class=\"feed-image-container\">\n                <div>\n                    <div class=\"feed-image feed-image-course\"></div>\n                    <div class=\"feed-text\"> Courses</div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</ion-content>\n\n\n<style>\n    .feed-sliders {\n        height: 35%;\n    }\n\n    .feed-sliders .feed-slider {\n        background-repeat: no-repeat !important;\n        background-size: cover !important;\n        background-position: center center !important;\n        max-height: 30em;\n    }\n\n    .feed-sliders .feed-slider-one {\n        background: url(\"../../../assets/beaurty-1.jpg\");\n    }\n\n    .feed-sliders .feed-slider-two {\n        background: url(\"../../../assets/beauty-2.jpg\");\n    }\n\n    .feed-sliders .feed-slider-three {\n        background: url(\"../../../assets/beauty-3.jpg\");\n    }\n\n    .feed-container {\n        /*background: linear-gradient(214deg, rgba(40, 29, 232, 1) -25%, rgb(81, 36, 82) 63%);*/\n        padding: 30px;\n        border: 1px solid #fff;\n    }\n\n    .feed-container .feed-image-container > div {\n        margin-bottom: 30px;\n        position: relative;\n        border: 1px solid #BFBFBF;\n        background-color: white;\n        box-shadow: 5px 10px 29px #aaaaaa94;\n    }\n\n    .feed-container .feed-image-container .feed-image {\n        background-repeat: no-repeat !important;\n        background-size: cover !important;\n        cursor: pointer;\n        background-position: center center !important;\n        height: 200px;\n    }\n\n    .feed-container .feed-image-container .feed-image-hair {\n        background-image: url(\"../../../assets/hair.jpeg\");\n    }\n\n    .feed-container .feed-image-container .feed-image-skin {\n        background-image: url(\"../../../assets/skin.jpeg\");\n    }\n\n    .feed-container .feed-image-container .feed-image-makeup {\n        background-image: url(\"../../../assets/makeup.jpeg\");\n    }\n\n    .feed-container .feed-image-container .feed-image-course {\n        background-image: url(\"../../../assets/courses.jpeg\");\n    }\n\n    .feed-container .feed-image-container .feed-text {\n        background: linear-gradient(214deg, rgba(40, 29, 232, 1) -25%, rgb(81, 36, 82) 63%);\n        text-align: center;\n        font-weight: bold;\n        color: white;\n        bottom: 0;\n        width: 100%;\n        padding: 15px;\n        font-size: 20px;\n    }\n\n    .slide_container {\n       height: 200px;\n        overflow-x: scroll;\n        overflow-y: hidden;\n        white-space: nowrap;\n    }\n    .slide_container .slider{\n        display: inline-block;\n        height: 75%;\n        border: 1px solid #BFBFBF;\n        background-color: white;\n        box-shadow: 5px 10px 29px #aaaaaa94;\n        width: 200px;\n        background-repeat: no-repeat !important;\n        background-size: cover !important;\n        background-position: center center !important;\n        margin: 25px 10px;\n    }\n\n    .slide_container .slider.s1 {\n        background-image: url('../../../assets/s1.jpg');\n    }\n\n    .slide_container .slider.s2 {\n        background-image: url('../../../assets/s2.jpg');\n    }\n\n    .slide_container .slider.s3 {\n        background-image: url('../../../assets/s3.jpg');\n    }\n\n    .slide_container .slider.s4 {\n        background-image: url('../../../assets/s4.jpeg');\n    }\n\n</style>\n");

/***/ }),

/***/ "./src/app/pages/feed/feed-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/feed/feed-routing.module.ts ***!
  \***************************************************/
/*! exports provided: FeedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageRoutingModule", function() { return FeedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _feed_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feed.page */ "./src/app/pages/feed/feed.page.ts");




const routes = [
    {
        path: '',
        component: _feed_page__WEBPACK_IMPORTED_MODULE_3__["FeedPage"]
    }
];
let FeedPageRoutingModule = class FeedPageRoutingModule {
};
FeedPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FeedPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/feed/feed.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/feed/feed.module.ts ***!
  \*******************************************/
/*! exports provided: FeedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function() { return FeedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _feed_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feed-routing.module */ "./src/app/pages/feed/feed-routing.module.ts");
/* harmony import */ var _feed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feed.page */ "./src/app/pages/feed/feed.page.ts");







let FeedPageModule = class FeedPageModule {
};
FeedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _feed_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeedPageRoutingModule"]
        ],
        declarations: [_feed_page__WEBPACK_IMPORTED_MODULE_6__["FeedPage"]]
    })
], FeedPageModule);



/***/ }),

/***/ "./src/app/pages/feed/feed.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/feed/feed.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo-container {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n.logo-container .logo-text {\n  font-size: 20px;\n  font-style: italic;\n  font-weight: 700;\n}\n.logo-container .slogan-text {\n  font-size: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvYXBwL3BhZ2VzL2ZlZWQvZmVlZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZlZWQvZmVlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0FGO0FEQ0U7RUFDRSxlQUFBO0VBQWlCLGtCQUFBO0VBQW9CLGdCQUFBO0FDR3pDO0FEREU7RUFDRSxjQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mZWVkL2ZlZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubG9nby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICAubG9nby10ZXh0IHtcbiAgICBmb250LXNpemU6IDIwcHg7IGZvbnQtc3R5bGU6IGl0YWxpYzsgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICAuc2xvZ2FuLXRleHQge1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICB9XG59XG5cbiIsIi5sb2dvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG4ubG9nby1jb250YWluZXIgLmxvZ28tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmxvZ28tY29udGFpbmVyIC5zbG9nYW4tdGV4dCB7XG4gIGZvbnQtc2l6ZTogOHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/feed/feed.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/feed/feed.page.ts ***!
  \*****************************************/
/*! exports provided: FeedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPage", function() { return FeedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FeedPage = class FeedPage {
    constructor() {
        this.slideOpts = {
            initialSlide: 1,
            speed: 400,
            autoplay: true
        };
    }
    ngOnInit() {
    }
};
FeedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feed',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feed.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed/feed.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feed.page.scss */ "./src/app/pages/feed/feed.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FeedPage);



/***/ })

}]);
//# sourceMappingURL=pages-feed-feed-module-es2015.js.map