(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n<app-logo-spinner></app-logo-spinner>\r\n\r\n<div class=\"footer-container\">\r\n  <ion-tabs>\r\n    <div class=\"footer-tab\">\r\n      <ion-tab-bar slot=\"bottom\">\r\n        <ion-tab-button class=\"menu-container\" tab=\"feed\">\r\n          <i style=\"font-size: 30px;\" class=\"fa fa-home\"></i>\r\n          <ion-label>Feed</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button class=\"menu-container\" tab=\"bookings\">\r\n          <i style=\"font-size: 30px;\" class=\"fa fa-calendar-check-o\"></i>\r\n          <ion-label>Appointments</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button class=\"menu-container\" tab=\"portfolio\">\r\n          <i style=\"font-size: 30px;\" class=\"fa fa-suitcase\"></i>\r\n          <ion-label>Portfolio</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button class=\"menu-container\" tab=\"settings\">\r\n          <i style=\"font-size: 30px;\" class=\"fa fa-user-circle-o\"></i>\r\n          <ion-label>Profile</ion-label>\r\n        </ion-tab-button>\r\n      </ion-tab-bar>\r\n    </div>\r\n  </ion-tabs>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/header-component/header-component.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/header-component/header-component.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header-container\">\r\n  <ion-header>\r\n    <div style=\"display: flex; align-items: center; justify-content: space-between; margin-right: 10px;\">\r\n      <div style=\"display: flex; align-items: center; justify-content: space-between;\">\r\n        <div *ngIf=\"showBackIcon\" (click)=\"backClicked()\" class=\"header-back\">\r\n          <i class=\"fa fa-angle-left\"></i>\r\n        </div>\r\n        <div [routerLink]=\"['/home/feed']\" style=\"width: 45px; border: 2px solid #666; padding: 1px; border-radius: 50%; overflow: hidden; display: inline-block; margin: 10px;\">\r\n          <img src=\"../../../assets/sandhyadeep-final-logo.png\">\r\n        </div>\r\n        <div class=\"logo-container\">\r\n          <div class=\"logo-text\">\r\n            Sandhyadeep\r\n          </div>\r\n          <div class=\"slogan-text\">\r\n            Have a hair affair with us\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!hideProfileIcon\" [routerLink]=\"['/home/settings']\" class=\"profileIcon\">\r\n        <img src=\"assets/icon/profile-icon.png\" alt=\"\">\r\n      </div>\r\n<!--      <div style=\"display: flex; align-items: center; justify-content: space-between;\">-->\r\n<!--        <div style=\"margin: 0 5px; position: relative;\">-->\r\n<!--          <i style=\"font-size: 22px; color: #e95c8f\" class=\"fa fa-bell\"></i>-->\r\n<!--&lt;!&ndash;          <span style=\"padding: 3px 7px; font-weight: 700; border-radius: 50%; border: 1px solid; font-size: 10px; position: absolute; left: 25%; top: -7px; background: #614d7f; color: white;\">99</span>&ndash;&gt;-->\r\n<!--        </div>-->\r\n<!--        <div style=\"margin: 0 5px\">-->\r\n<!--          <i style=\"font-size: 22px; color: #e95c8f\" class=\"fa fa-search\"></i>-->\r\n<!--        </div>-->\r\n<!--        <div style=\"margin: 0 25px 0 5px; position: relative;\">-->\r\n<!--          <i style=\"font-size: 22px; color: #e95c8f\" class=\"fa fa-shopping-cart\"></i>-->\r\n<!--          <span style=\"padding: 3px 9px; font-weight: 700; border-radius: 50%; border: 1px solid; font-size: 10px; position: absolute; left: 40%; top: -7px; background: #614d7f; color: white;\">2</span>-->\r\n<!--        </div>-->\r\n<!--      </div>-->\r\n    </div>\r\n  </ion-header>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.router */ "./src/app/home/home.router.ts");
/* harmony import */ var _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared-components/header-component/header-component.module */ "./src/app/shared-components/header-component/header-component.module.ts");
/* harmony import */ var _shared_components_logo_spinner_logo_spinner_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared-components/logo-spinner/logo-spinner.module */ "./src/app/shared-components/logo-spinner/logo-spinner.module.ts");









let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_router__WEBPACK_IMPORTED_MODULE_6__["HomeRouter"],
            _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"],
            _shared_components_logo_spinner_logo_spinner_module__WEBPACK_IMPORTED_MODULE_8__["LogoSpinnerModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".z-index-99 {\n  z-index: 99;\n}\n\n.margin-top-25 {\n  top: 25px;\n}\n\n.width-30 {\n  width: 30px;\n}\n\n.footer-container .footer-tab {\n  font-size: 14px;\n  padding-top: 1px;\n  background: linear-gradient(305deg, #cc2b5e 2%, #753a88 63%);\n}\n\n.footer-container ion-tab-bar {\n  padding: 8px 0;\n}\n\n.footer-container ion-tab-bar ion-tab-button {\n  color: #e95c8f;\n}\n\n.footer-container ion-tab-bar ion-tab-button.tab-selected {\n  color: #614d7f;\n}\n\n.footer-container ion-tab-bar ion-label {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcCBpb25pYyBzdGFjay9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvQzpcXFVzZXJzXFxhYWJoYWd3YVxcc2FuZGh5YWRlZXAgaW9uaWMgc3RhY2svc3JjXFxzYW5kaHlhZGVlcC10aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtBQ0RGOztBRElBO0VBQ0UsU0FBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtBQ0RGOztBREtFO0VBT0UsZUVuQmdCO0VGb0JoQixnQkFBQTtFQUNBLDREQUFBO0FDUko7O0FEVUU7RUFPRSxjQUFBO0FDZEo7O0FEUUk7RUFDRSxjQUFBO0FDTk47O0FET007RUFDRSxjQUFBO0FDTFI7O0FEU0k7RUFDRSxpQkFBQTtBQ1BOIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zYW5kaHlhZGVlcC10aGVtZVwiO1xyXG5cclxuLnotaW5kZXgtOTkge1xyXG4gIHotaW5kZXg6IDk5O1xyXG59XHJcblxyXG4ubWFyZ2luLXRvcC0yNSB7XHJcbiAgdG9wOiAyNXB4O1xyXG59XHJcblxyXG4ud2lkdGgtMzAge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG59XHJcblxyXG4uZm9vdGVyLWNvbnRhaW5lciB7XHJcbiAgLmZvb3Rlci10YWIge1xyXG4gICAgLy9mb250LXNpemU6ICRyZWd1bGFyLWZvbnQtc2l6ZTtcclxuICAgIC8vbWFyZ2luOiA1cHg7XHJcbiAgICAvL3BhZGRpbmc6IDJweDtcclxuICAgIC8vYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMyOWRlZywgI2U5NWM4ZiAyNSUsICM2MTRkN2YgNjQlKTtcclxuICAgIC8vYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgIGZvbnQtc2l6ZTogJHJlZ3VsYXItZm9udC1zaXplO1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMDVkZWcsICNjYzJiNWUgMiUsICM3NTNhODggNjMlKTtcclxuICB9XHJcbiAgaW9uLXRhYi1iYXIge1xyXG4gICAgaW9uLXRhYi1idXR0b24ge1xyXG4gICAgICBjb2xvcjogI2U5NWM4ZjtcclxuICAgICAgJi50YWItc2VsZWN0ZWQge1xyXG4gICAgICAgIGNvbG9yOiAjNjE0ZDdmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuei1pbmRleC05OSB7XG4gIHotaW5kZXg6IDk5O1xufVxuXG4ubWFyZ2luLXRvcC0yNSB7XG4gIHRvcDogMjVweDtcbn1cblxuLndpZHRoLTMwIHtcbiAgd2lkdGg6IDMwcHg7XG59XG5cbi5mb290ZXItY29udGFpbmVyIC5mb290ZXItdGFiIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzA1ZGVnLCAjY2MyYjVlIDIlLCAjNzUzYTg4IDYzJSk7XG59XG4uZm9vdGVyLWNvbnRhaW5lciBpb24tdGFiLWJhciB7XG4gIHBhZGRpbmc6IDhweCAwO1xufVxuLmZvb3Rlci1jb250YWluZXIgaW9uLXRhYi1iYXIgaW9uLXRhYi1idXR0b24ge1xuICBjb2xvcjogI2U5NWM4Zjtcbn1cbi5mb290ZXItY29udGFpbmVyIGlvbi10YWItYmFyIGlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCB7XG4gIGNvbG9yOiAjNjE0ZDdmO1xufVxuLmZvb3Rlci1jb250YWluZXIgaW9uLXRhYi1iYXIgaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59IiwiJHByaW1hcnktY29sb3I6ICNlOTVjOGY7XHJcbiRzZWNvbmRhcnktY29sb3I6ICM2MTRkN2Y7XHJcblxyXG4kcmVndWxhci1mb250LXNpemU6IDE0cHg7XHJcbiRmb250LXNpemUtMTogMTZweDtcclxuJGhlYWRlci1zaXplOiAyMHB4O1xyXG4kZm9udC1zaXplLTM6IDMwcHg7XHJcblxyXG4kYnV0dG9uLWhlaWdodDogNDVweDtcclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomePage = class HomePage {
    constructor() { }
    ngOnInit() {
    }
};
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomePage);



/***/ }),

/***/ "./src/app/home/home.router.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.router.ts ***!
  \*************************************/
/*! exports provided: HomeRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRouter", function() { return HomeRouter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: 'home',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
        children: [
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() | pages-feed-feed-module */[__webpack_require__.e("default~pages-about-us-about-us-module~pages-apply-coupon-apply-coupon-module~pages-bookings-booking~83a2ce79"), __webpack_require__.e("pages-feed-feed-module")]).then(__webpack_require__.bind(null, /*! ../pages/feed/feed.module */ "./src/app/pages/feed/feed.module.ts")).then((e) => e.FeedPageModule)
            },
            {
                path: 'feed',
                loadChildren: () => Promise.all(/*! import() | pages-feed-feed-module */[__webpack_require__.e("default~pages-about-us-about-us-module~pages-apply-coupon-apply-coupon-module~pages-bookings-booking~83a2ce79"), __webpack_require__.e("pages-feed-feed-module")]).then(__webpack_require__.bind(null, /*! ../pages/feed/feed.module */ "./src/app/pages/feed/feed.module.ts")).then((e) => e.FeedPageModule)
            },
            {
                path: 'about-us',
                loadChildren: () => Promise.all(/*! import() | pages-about-us-about-us-module */[__webpack_require__.e("default~pages-about-us-about-us-module~pages-apply-coupon-apply-coupon-module~pages-bookings-booking~83a2ce79"), __webpack_require__.e("default~pages-about-us-about-us-module~pages-app-slides-slides-module~pages-apply-coupon-apply-coupo~8876a910"), __webpack_require__.e("default~pages-about-us-about-us-module~pages-products-products-module"), __webpack_require__.e("default~pages-about-us-about-us-module~pages-services-services-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-about-us-about-us-module")]).then(__webpack_require__.bind(null, /*! ../pages/about-us/about-us.module */ "./src/app/pages/about-us/about-us.module.ts")).then((e) => e.AboutUsPageModule)
            },
            {
                path: 'services',
                loadChildren: () => Promise.all(/*! import() | pages-services-services-module */[__webpack_require__.e("default~pages-about-us-about-us-module~pages-apply-coupon-apply-coupon-module~pages-bookings-booking~83a2ce79"), __webpack_require__.e("default~pages-about-us-about-us-module~pages-app-slides-slides-module~pages-apply-coupon-apply-coupo~8876a910"), __webpack_require__.e("default~pages-about-us-about-us-module~pages-services-services-module"), __webpack_require__.e("pages-services-services-module")]).then(__webpack_require__.bind(null, /*! ../pages/services/services.module */ "./src/app/pages/services/services.module.ts")).then((e) => e.ServicePageModule)
            }, {
                path: 'portfolio',
                loadChildren: () => Promise.all(/*! import() | pages-portfolio-portfolio-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-portfolio-portfolio-module")]).then(__webpack_require__.bind(null, /*! ../pages/portfolio/portfolio.module */ "./src/app/pages/portfolio/portfolio.module.ts")).then((e) => e.PortfolioModule)
            }, {
                path: 'notifications',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-notifications-notifications-module */ "pages-notifications-notifications-module").then(__webpack_require__.bind(null, /*! ../pages/notifications/notifications.module */ "./src/app/pages/notifications/notifications.module.ts")).then((e) => e.NotificationsPageModule)
            }, {
                path: 'messages',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-messages-messages-module */ "pages-messages-messages-module").then(__webpack_require__.bind(null, /*! ../pages/messages/messages.module */ "./src/app/pages/messages/messages.module.ts")).then((e) => e.MessagesPageModule)
            }, {
                path: 'settings',
                loadChildren: () => Promise.all(/*! import() | pages-settings-settings-module */[__webpack_require__.e("default~pages-about-us-about-us-module~pages-apply-coupon-apply-coupon-module~pages-bookings-booking~83a2ce79"), __webpack_require__.e("default~pages-about-us-about-us-module~pages-app-slides-slides-module~pages-apply-coupon-apply-coupo~8876a910"), __webpack_require__.e("pages-settings-settings-module")]).then(__webpack_require__.bind(null, /*! ../pages/settings/settings.module */ "./src/app/pages/settings/settings.module.ts")).then((e) => e.SettingsPageModule)
            }, {
                path: 'packages',
                loadChildren: () => Promise.all(/*! import() | pages-packages-packages-module */[__webpack_require__.e("default~pages-about-us-about-us-module~pages-apply-coupon-apply-coupon-module~pages-bookings-booking~83a2ce79"), __webpack_require__.e("default~pages-about-us-about-us-module~pages-app-slides-slides-module~pages-apply-coupon-apply-coupo~8876a910"), __webpack_require__.e("common"), __webpack_require__.e("pages-packages-packages-module")]).then(__webpack_require__.bind(null, /*! ../pages/packages/packages.module */ "./src/app/pages/packages/packages.module.ts")).then((e) => e.PackagesModule)
            }, {
                path: 'products',
                loadChildren: () => Promise.all(/*! import() | pages-products-products-module */[__webpack_require__.e("default~pages-about-us-about-us-module~pages-apply-coupon-apply-coupon-module~pages-bookings-booking~83a2ce79"), __webpack_require__.e("default~pages-about-us-about-us-module~pages-app-slides-slides-module~pages-apply-coupon-apply-coupo~8876a910"), __webpack_require__.e("default~pages-about-us-about-us-module~pages-products-products-module"), __webpack_require__.e("pages-products-products-module")]).then(__webpack_require__.bind(null, /*! ../pages/products/products.module */ "./src/app/pages/products/products.module.ts")).then((e) => e.ProductsModule)
            }, {
                path: 'bookings',
                loadChildren: () => Promise.all(/*! import() | pages-bookings-bookings-module */[__webpack_require__.e("default~pages-about-us-about-us-module~pages-apply-coupon-apply-coupon-module~pages-bookings-booking~83a2ce79"), __webpack_require__.e("default~pages-about-us-about-us-module~pages-app-slides-slides-module~pages-apply-coupon-apply-coupo~8876a910"), __webpack_require__.e("pages-bookings-bookings-module")]).then(__webpack_require__.bind(null, /*! ../pages/bookings/bookings.module */ "./src/app/pages/bookings/bookings.module.ts")).then((e) => e.BookingsModule)
            }, {
                path: 'apply-coupon',
                loadChildren: () => Promise.all(/*! import() | pages-apply-coupon-apply-coupon-module */[__webpack_require__.e("default~pages-about-us-about-us-module~pages-apply-coupon-apply-coupon-module~pages-bookings-booking~83a2ce79"), __webpack_require__.e("default~pages-about-us-about-us-module~pages-app-slides-slides-module~pages-apply-coupon-apply-coupo~8876a910"), __webpack_require__.e("pages-apply-coupon-apply-coupon-module")]).then(__webpack_require__.bind(null, /*! ../pages/apply-coupon/apply-coupon.module */ "./src/app/pages/apply-coupon/apply-coupon.module.ts")).then((e) => e.ApplyCouponModule)
            }, {
                path: 'schedule-appointment',
                loadChildren: () => Promise.all(/*! import() | pages-schedule-appointment-schedule-appointment-module */[__webpack_require__.e("default~pages-about-us-about-us-module~pages-apply-coupon-apply-coupon-module~pages-bookings-booking~83a2ce79"), __webpack_require__.e("default~pages-about-us-about-us-module~pages-app-slides-slides-module~pages-apply-coupon-apply-coupo~8876a910"), __webpack_require__.e("pages-schedule-appointment-schedule-appointment-module")]).then(__webpack_require__.bind(null, /*! ../pages/schedule-appointment/schedule-appointment.module */ "./src/app/pages/schedule-appointment/schedule-appointment.module.ts"))
                    .then((e) => e.ScheduleAppointmentModule)
            }, {
                path: 'payments',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-payment-payment-module */ "pages-payment-payment-module").then(__webpack_require__.bind(null, /*! ../pages/payment/payment.module */ "./src/app/pages/payment/payment.module.ts"))
                    .then((e) => e.PaymentModule)
            }, {
                path: 'package-details',
                loadChildren: () => Promise.all(/*! import() | pages-packages-package-details-package-details-module */[__webpack_require__.e("default~pages-about-us-about-us-module~pages-apply-coupon-apply-coupon-module~pages-bookings-booking~83a2ce79"), __webpack_require__.e("pages-packages-package-details-package-details-module")]).then(__webpack_require__.bind(null, /*! ../pages/packages/package-details/package-details.module */ "./src/app/pages/packages/package-details/package-details.module.ts"))
                    .then((e) => e.PackageDetailsModule)
            }, {
                path: 'product-details',
                loadChildren: () => Promise.all(/*! import() | pages-products-product-details-product-details-module */[__webpack_require__.e("default~pages-about-us-about-us-module~pages-apply-coupon-apply-coupon-module~pages-bookings-booking~83a2ce79"), __webpack_require__.e("pages-products-product-details-product-details-module")]).then(__webpack_require__.bind(null, /*! ../pages/products/product-details/product-details.module */ "./src/app/pages/products/product-details/product-details.module.ts"))
                    .then((e) => e.ProductDetailsModule)
            }
        ]
    }
];
let HomeRouter = class HomeRouter {
};
HomeRouter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeRouter);



/***/ }),

/***/ "./src/app/shared-components/header-component/header-component.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared-components/header-component/header-component.module.ts ***!
  \*******************************************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _header_component_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header-component.page */ "./src/app/shared-components/header-component/header-component.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let HeaderModule = class HeaderModule {
};
HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
        ],
        exports: [
            _header_component_page__WEBPACK_IMPORTED_MODULE_5__["HeaderComponentPage"]
        ],
        declarations: [_header_component_page__WEBPACK_IMPORTED_MODULE_5__["HeaderComponentPage"]]
    })
], HeaderModule);



/***/ }),

/***/ "./src/app/shared-components/header-component/header-component.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/shared-components/header-component/header-component.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-container {\n  padding-bottom: 3px;\n  background: linear-gradient(305deg, #e95c8f 2%, #614d7f 63%);\n}\n.header-container ion-header {\n  background: white;\n}\n.logo-container {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.1;\n}\n.logo-container .logo-text {\n  font-size: 25px;\n  font-weight: 700;\n}\n.logo-container .slogan-text {\n  font-size: 10px;\n  padding: 0 5px;\n}\n.profileIcon img {\n  width: 40px;\n  height: 40px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  overflow: hidden;\n  border-radius: 50%;\n  border: 2px solid #614d7f;\n  padding: 2px;\n}\n.header-back {\n  padding: 10px;\n  font-size: 30px;\n  color: #666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvaGVhZGVyLWNvbXBvbmVudC9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcCBpb25pYyBzdGFjay9zcmNcXGFwcFxcc2hhcmVkLWNvbXBvbmVudHNcXGhlYWRlci1jb21wb25lbnRcXGhlYWRlci1jb21wb25lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9oZWFkZXItY29tcG9uZW50L2hlYWRlci1jb21wb25lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSw0REFBQTtBQ0NGO0FEQUU7RUFDRSxpQkFBQTtBQ0VKO0FEQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0VGO0FEREU7RUFDRSxlQUFBO0VBQWlCLGdCQUFBO0FDSXJCO0FERkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0lKO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDRUo7QURFQTtFQUNFLGFBQUE7RUFBZSxlQUFBO0VBQWlCLFdBQUE7QUNHbEMiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9oZWFkZXItY29tcG9uZW50L2hlYWRlci1jb21wb25lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1jb250YWluZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMwNWRlZywgI2U5NWM4ZiAyJSwgIzYxNGQ3ZiA2MyUpO1xyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgfVxyXG59XHJcbi5sb2dvLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgLmxvZ28tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7IGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIC5zbG9nYW4tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDVweDtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9maWxlSWNvbiB7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzYxNGQ3ZjtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICB9XHJcbn1cclxuXHJcbi5oZWFkZXItYmFjayB7XHJcbiAgcGFkZGluZzogMTBweDsgZm9udC1zaXplOiAzMHB4OyBjb2xvcjogIzY2NjtcclxufVxyXG4iLCIuaGVhZGVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMDVkZWcsICNlOTVjOGYgMiUsICM2MTRkN2YgNjMlKTtcbn1cbi5oZWFkZXItY29udGFpbmVyIGlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmxvZ28tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbn1cbi5sb2dvLWNvbnRhaW5lciAubG9nby10ZXh0IHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmxvZ28tY29udGFpbmVyIC5zbG9nYW4tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogMCA1cHg7XG59XG5cbi5wcm9maWxlSWNvbiBpbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNjE0ZDdmO1xuICBwYWRkaW5nOiAycHg7XG59XG5cbi5oZWFkZXItYmFjayB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICM2NjY7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared-components/header-component/header-component.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared-components/header-component/header-component.page.ts ***!
  \*****************************************************************************/
/*! exports provided: HeaderComponentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponentPage", function() { return HeaderComponentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared-service.service */ "./src/app/shared-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let HeaderComponentPage = class HeaderComponentPage {
    constructor(sharedService, location) {
        this.sharedService = sharedService;
        this.location = location;
        this.hideProfileIcon = false;
        this.showBackIcon = false;
    }
    ngOnInit() {
        this.sharedService.onSettingEvent.subscribe((res) => {
            this.hideProfileIcon = res;
        });
    }
    backClicked() {
        this.location.back();
    }
};
HeaderComponentPage.ctorParameters = () => [
    { type: _shared_service_service__WEBPACK_IMPORTED_MODULE_2__["SharedServiceService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HeaderComponentPage.prototype, "showBackIcon", void 0);
HeaderComponentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sandhyadeep-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header-component.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/header-component/header-component.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header-component.page.scss */ "./src/app/shared-components/header-component/header-component.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_service__WEBPACK_IMPORTED_MODULE_2__["SharedServiceService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
], HeaderComponentPage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map