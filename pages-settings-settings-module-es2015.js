(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sandhyadeep-header class=\"z-index-99\"></sandhyadeep-header>\r\n<ion-content>\r\n    <svg class=\"wave-blob\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\">\r\n        <path fill=\"#00008B\" fill-opacity=\"1\" d=\"M0,128L80,117.3C160,107,320,85,480,106.7C640,128,800,192,960,208C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z\"></path>\r\n    </svg>\r\n    <svg class=\"wave-blob-1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\">\r\n        <path fill=\"#e95c8f\" fill-opacity=\"1\" d=\"M0,320L40,309.3C80,299,160,277,240,245.3C320,213,400,171,480,160C560,149,640,171,720,192C800,213,880,235,960,213.3C1040,192,1120,128,1200,90.7C1280,53,1360,43,1400,37.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z\"></path>\r\n    </svg>\r\n    <div class=\"profile-bg\"></div>\r\n    <div class=\"profile-image-container\">\r\n        <img alt=\"\" src=\"/assets/icon/profile-icon.png\">\r\n        <div class=\"profile-text-container\">\r\n            <div class=\"profile-text\"> {{userDetails.name}}</div>\r\n            <div class=\"user-type\">{{(userDetails?.roleId?.name ? userDetails?.roleId?.name : 'Customer')}}</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"login-container\">\r\n        <div class=\"login-menus\">\r\n            <div><button mat-button color=\"primary\">Manage Profile</button></div>\r\n            <div><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></div>\r\n        </div>\r\n        <div class=\"login-menus\">\r\n            <div><button mat-button color=\"primary\">Mobile Number</button></div>\r\n            <div>{{userDetails.mobileNo}}</div>\r\n        </div>\r\n<!--        <div class=\"login-menus\">-->\r\n<!--            <div><button mat-button color=\"primary\">Email</button></div>-->\r\n<!--            <div>aashishbhagwat@gmail.com</div>-->\r\n<!--        </div>-->\r\n        <hr/>\r\n\r\n        <div class=\"login-menus\">\r\n            <div><button mat-button color=\"primary\">Wallet Amount</button></div>\r\n            <div>0.0 (₹)</div>\r\n        </div>\r\n        <div (click)=\"presentAlert()\" class=\"login-menus\">\r\n            <div><button mat-button color=\"primary\">Log Out</button></div>\r\n            <div><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "./src/app/pages/settings/settings-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/settings/settings-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "./src/app/pages/settings/settings.page.ts");




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/settings/settings.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/pages/settings/settings-routing.module.ts");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/pages/settings/settings.page.ts");
/* harmony import */ var _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared-components/header-component/header-component.module */ "./src/app/shared-components/header-component/header-component.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_components_logo_spinner_logo_spinner_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared-components/logo-spinner/logo-spinner.module */ "./src/app/shared-components/logo-spinner/logo-spinner.module.ts");










let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"],
            _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _shared_components_logo_spinner_logo_spinner_module__WEBPACK_IMPORTED_MODULE_9__["LogoSpinnerModule"]
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "./src/app/pages/settings/settings.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".settings-container {\n  margin: 10px 15px;\n}\n\n.profile-bg {\n  height: 209px;\n  width: 110%;\n  box-shadow: 0 1px 10px rgba(98, 140, 255, 0.5);\n  transform: rotate(-14deg);\n  border-radius: 24px 10px 35px 100px;\n  margin-left: -18px;\n  margin-top: -81px;\n  margin-bottom: 60px;\n  background: linear-gradient(225deg, #e95c8f 2%, #614d7f 63%);\n}\n\n.profile-image-container {\n  position: absolute;\n  top: 20px;\n  left: 10%;\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n\n.profile-image-container img {\n  width: 90px;\n  height: 90px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  overflow: hidden;\n  border-radius: 50%;\n  border: 2px solid white;\n}\n\n.profile-image-container .profile-text-container {\n  padding: 10px 20px;\n  line-height: 1.3;\n  color: white;\n}\n\n.profile-image-container .profile-text-container .user-type {\n  opacity: 0.6;\n}\n\n.profile-image-container .profile-text-container .profile-text {\n  font-size: 23px;\n}\n\n.login-container {\n  margin: 25px;\n  z-index: 999999999;\n}\n\n.login-container .login-menus {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.login-container .login-menus div {\n  display: flex;\n  flex-basis: 50%;\n}\n\n.login-container .login-menus div:nth-child(2) {\n  justify-content: right;\n}\n\n.wave-blob {\n  z-index: 1;\n  width: 141%;\n  position: absolute;\n  left: -24%;\n  bottom: 0;\n  opacity: 0.2;\n  transform: rotate(360deg);\n  height: 116px;\n}\n\n.wave-blob-1 {\n  z-index: 1;\n  width: 141%;\n  position: absolute;\n  left: -24%;\n  opacity: 0.2;\n  transform: rotate(360deg);\n  bottom: 0;\n  height: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2V0dGluZ3MvQzpcXFVzZXJzXFxhYWJoYWd3YVxcc2FuZGh5YWRlZXBcXHNhbmRoeWFkZWVwLXVpL3NyY1xcYXBwXFxwYWdlc1xcc2V0dGluZ3NcXHNldHRpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsOENBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNERBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQUU7RUFDRSxZQUFBO0FDRUo7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURBRTtFQUNFLGFBQUE7RUFBZSw4QkFBQTtFQUFnQyxtQkFBQTtBQ0luRDs7QURISTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FDS047O0FESk07RUFDRSxzQkFBQTtBQ01SOztBREFBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQ0dGOztBREFBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldHRpbmdzLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLWJnIHtcclxuICBoZWlnaHQ6IDIwOXB4O1xyXG4gIHdpZHRoOiAxMTAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDEwcHggcmdiKDk4IDE0MCAyNTUgLyA1MCUpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC0xNGRlZyk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjRweCAxMHB4IDM1cHggMTAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xOHB4O1xyXG4gIG1hcmdpbi10b3A6IC04MXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgI2U5NWM4ZiAyJSwgIzYxNGQ3ZiA2MyUpO1xyXG59XHJcblxyXG4ucHJvZmlsZS1pbWFnZS1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwcHg7XHJcbiAgbGVmdDogMTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2ZpbGUtaW1hZ2UtY29udGFpbmVyIGltZyB7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4ucHJvZmlsZS1pbWFnZS1jb250YWluZXIgLnByb2ZpbGUtdGV4dC1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBsaW5lLWhlaWdodDogMS4zO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAudXNlci10eXBlIHtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9maWxlLWltYWdlLWNvbnRhaW5lciAucHJvZmlsZS10ZXh0LWNvbnRhaW5lciAucHJvZmlsZS10ZXh0IHtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIge1xyXG4gIG1hcmdpbjogMjVweDtcclxuICB6LWluZGV4OiA5OTk5OTk5OTk7XHJcbiAgLmxvZ2luLW1lbnVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtYmFzaXM6IDUwJTtcclxuICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi53YXZlLWJsb2Ige1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDE0MSU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IC0yNCU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG9wYWNpdHk6IDAuMjtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIGhlaWdodDogMTE2cHg7XHJcbn1cclxuXHJcbi53YXZlLWJsb2ItMSB7XHJcbiAgei1pbmRleDogMTtcclxuICB3aWR0aDogMTQxJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTI0JTtcclxuICBvcGFjaXR5OiAwLjI7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICBib3R0b206IDA7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG59XHJcbiIsIi5zZXR0aW5ncy1jb250YWluZXIge1xuICBtYXJnaW46IDEwcHggMTVweDtcbn1cblxuLnByb2ZpbGUtYmcge1xuICBoZWlnaHQ6IDIwOXB4O1xuICB3aWR0aDogMTEwJTtcbiAgYm94LXNoYWRvdzogMCAxcHggMTBweCByZ2JhKDk4LCAxNDAsIDI1NSwgMC41KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE0ZGVnKTtcbiAgYm9yZGVyLXJhZGl1czogMjRweCAxMHB4IDM1cHggMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMThweDtcbiAgbWFyZ2luLXRvcDogLTgxcHg7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICNlOTVjOGYgMiUsICM2MTRkN2YgNjMlKTtcbn1cblxuLnByb2ZpbGUtaW1hZ2UtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDEwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9maWxlLWltYWdlLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuLnByb2ZpbGUtaW1hZ2UtY29udGFpbmVyIC5wcm9maWxlLXRleHQtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBjb2xvcjogd2hpdGU7XG59XG4ucHJvZmlsZS1pbWFnZS1jb250YWluZXIgLnByb2ZpbGUtdGV4dC1jb250YWluZXIgLnVzZXItdHlwZSB7XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuLnByb2ZpbGUtaW1hZ2UtY29udGFpbmVyIC5wcm9maWxlLXRleHQtY29udGFpbmVyIC5wcm9maWxlLXRleHQge1xuICBmb250LXNpemU6IDIzcHg7XG59XG5cbi5sb2dpbi1jb250YWluZXIge1xuICBtYXJnaW46IDI1cHg7XG4gIHotaW5kZXg6IDk5OTk5OTk5OTtcbn1cbi5sb2dpbi1jb250YWluZXIgLmxvZ2luLW1lbnVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxvZ2luLWNvbnRhaW5lciAubG9naW4tbWVudXMgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1iYXNpczogNTAlO1xufVxuLmxvZ2luLWNvbnRhaW5lciAubG9naW4tbWVudXMgZGl2Om50aC1jaGlsZCgyKSB7XG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG59XG5cbi53YXZlLWJsb2Ige1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTQxJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMjQlO1xuICBib3R0b206IDA7XG4gIG9wYWNpdHk6IDAuMjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgaGVpZ2h0OiAxMTZweDtcbn1cblxuLndhdmUtYmxvYi0xIHtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDE0MSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTI0JTtcbiAgb3BhY2l0eTogMC4yO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogOTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/settings/settings.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/settings/settings.page.ts ***!
  \*************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared-service.service */ "./src/app/shared-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");






let SettingsPage = class SettingsPage {
    constructor(apiService, alertController, router, sharedService) {
        this.apiService = apiService;
        this.alertController = alertController;
        this.router = router;
        this.sharedService = sharedService;
        this.handlerMessage = '';
        this.userDetails = {};
    }
    ionViewWillEnter() {
        this.sharedService.onSettingEvent.next(true);
        this.sharedService.showBackIcon.next(true);
        this.apiService.userSubject.subscribe((data) => {
            this.userDetails = data;
        });
    }
    // when Application will leave the page
    ionViewWillLeave() {
        this.sharedService.onSettingEvent.next(false);
        this.sharedService.showBackIcon.next(false);
    }
    onLogout() {
        this.apiService.logout();
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Do you want to Logout',
                cssClass: 'alert-popup',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            this.handlerMessage = 'Alert canceled';
                        },
                    },
                    {
                        text: 'OK',
                        role: 'confirm',
                        handler: () => {
                            this.sharedService.removeAllUserDetails();
                            this.onLogout();
                            this.handlerMessage = 'Alert confirmed';
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
};
SettingsPage.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_service_service__WEBPACK_IMPORTED_MODULE_2__["SharedServiceService"] }
];
SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.page.scss */ "./src/app/pages/settings/settings.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_service_service__WEBPACK_IMPORTED_MODULE_2__["SharedServiceService"]])
], SettingsPage);



/***/ })

}]);
//# sourceMappingURL=pages-settings-settings-module-es2015.js.map