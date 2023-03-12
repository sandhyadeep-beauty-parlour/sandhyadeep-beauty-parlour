(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sandhyadeep-header class=\"z-index-99\"></sandhyadeep-header>\n<ion-content>\n    <div class=\"profile-bg\"></div>\n    <div class=\"profile-image-container\">\n        <img alt=\"\" src=\"/assets/icon/profile-icon.png\">\n        <div class=\"profile-text-container\">\n            <div class=\"profile-text\"> {{userDetails.name}}</div>\n            <div class=\"user-type\">{{(userDetails?.roleId?.name ? userDetails?.roleId?.name : 'Customer') | titlecase}}</div>\n        </div>\n    </div>\n    <div class=\"login-container\">\n        <div class=\"login-menus\">\n            <div><button mat-button color=\"primary\">Manage Profile</button></div>\n            <div><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></div>\n        </div>\n        <div class=\"login-menus\">\n            <div><button mat-button color=\"primary\">Mobile Number</button></div>\n            <div>{{userDetails.mobileNo}}</div>\n        </div>\n<!--        <div class=\"login-menus\">-->\n<!--            <div><button mat-button color=\"primary\">Email</button></div>-->\n<!--            <div>aashishbhagwat@gmail.com</div>-->\n<!--        </div>-->\n        <hr/>\n\n        <div class=\"login-menus\">\n            <div><button mat-button color=\"primary\">Wallet Amount</button></div>\n            <div>0.0 (₹)</div>\n        </div>\n        <div (click)=\"presentAlert()\" class=\"login-menus\">\n            <div><button mat-button color=\"primary\">Log Out</button></div>\n            <div><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></div>\n        </div>\n\n    </div>\n\n\n</ion-content>\n\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".settings-container {\n  margin: 10px 15px;\n}\n\n.profile-bg {\n  height: 209px;\n  width: 130%;\n  box-shadow: 0 1px 10px rgba(98, 140, 255, 0.5);\n  transform: rotate(15deg);\n  margin-left: -18px;\n  margin-top: -82px;\n  margin-bottom: 60px;\n  background: linear-gradient(318deg, #BD1E51 2%, #265791 63%);\n}\n\n.profile-image-container {\n  position: absolute;\n  top: 20px;\n  left: 10%;\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n\n.profile-image-container img {\n  width: 90px;\n  height: 90px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  overflow: hidden;\n  border-radius: 50%;\n  border: 2px solid white;\n}\n\n.profile-image-container .profile-text-container {\n  padding: 10px 20px;\n  line-height: 1.3;\n  color: white;\n}\n\n.profile-image-container .profile-text-container .user-type {\n  opacity: 0.6;\n  text-align: center;\n}\n\n.profile-image-container .profile-text-container .profile-text {\n  font-size: 23px;\n}\n\n.login-container {\n  margin: 25px;\n  z-index: 999999999;\n}\n\n.login-container .login-menus {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.login-container .login-menus div {\n  display: flex;\n  flex-basis: 50%;\n}\n\n.login-container .login-menus div:nth-child(2) {\n  justify-content: right;\n}\n\n.wave-blob {\n  z-index: 1;\n  width: 141%;\n  position: absolute;\n  left: -24%;\n  bottom: 0;\n  opacity: 0.2;\n  transform: rotate(360deg);\n  height: 116px;\n}\n\n.wave-blob-1 {\n  z-index: 1;\n  width: 141%;\n  position: absolute;\n  left: -24%;\n  opacity: 0.2;\n  transform: rotate(360deg);\n  bottom: 0;\n  height: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL2FwcC9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlCQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDhDQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0REFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNERjs7QURFRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0FKOztBRElBO0VBQ0UsZUFBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDREY7O0FERUU7RUFDRSxhQUFBO0VBQWUsOEJBQUE7RUFBZ0MsbUJBQUE7QUNFbkQ7O0FEREk7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQ0dOOztBREZNO0VBQ0Usc0JBQUE7QUNJUjs7QURFQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zYW5kaHlhZGVlcC10aGVtZVwiO1xuXG4uc2V0dGluZ3MtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XG59XG5cbi5wcm9maWxlLWJnIHtcbiAgaGVpZ2h0OiAyMDlweDtcbiAgd2lkdGg6IDEzMCU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDEwcHggcmdiYSg5OCwgMTQwLCAyNTUsIDAuNSk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTtcbiAgbWFyZ2luLWxlZnQ6IC0xOHB4O1xuICBtYXJnaW4tdG9wOiAtODJweDtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxOGRlZywgI0JEMUU1MSAyJSwgIzI2NTc5MSA2MyUpO1xufVxuXG4ucHJvZmlsZS1pbWFnZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogMTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2ZpbGUtaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xufVxuXG4ucHJvZmlsZS1pbWFnZS1jb250YWluZXIgLnByb2ZpbGUtdGV4dC1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLnVzZXItdHlwZSB7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG4ucHJvZmlsZS1pbWFnZS1jb250YWluZXIgLnByb2ZpbGUtdGV4dC1jb250YWluZXIgLnByb2ZpbGUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMjVweDtcbiAgei1pbmRleDogOTk5OTk5OTk5O1xuICAubG9naW4tbWVudXMge1xuICAgIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXYge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtYmFzaXM6IDUwJTtcbiAgICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiByaWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLndhdmUtYmxvYiB7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxNDElO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0yNCU7XG4gIGJvdHRvbTogMDtcbiAgb3BhY2l0eTogMC4yO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICBoZWlnaHQ6IDExNnB4O1xufVxuXG4ud2F2ZS1ibG9iLTEge1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTQxJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMjQlO1xuICBvcGFjaXR5OiAwLjI7XG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuIiwiLnNldHRpbmdzLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMTBweCAxNXB4O1xufVxuXG4ucHJvZmlsZS1iZyB7XG4gIGhlaWdodDogMjA5cHg7XG4gIHdpZHRoOiAxMzAlO1xuICBib3gtc2hhZG93OiAwIDFweCAxMHB4IHJnYmEoOTgsIDE0MCwgMjU1LCAwLjUpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XG4gIG1hcmdpbi1sZWZ0OiAtMThweDtcbiAgbWFyZ2luLXRvcDogLTgycHg7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMThkZWcsICNCRDFFNTEgMiUsICMyNjU3OTEgNjMlKTtcbn1cblxuLnByb2ZpbGUtaW1hZ2UtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDEwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9maWxlLWltYWdlLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuLnByb2ZpbGUtaW1hZ2UtY29udGFpbmVyIC5wcm9maWxlLXRleHQtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBjb2xvcjogd2hpdGU7XG59XG4ucHJvZmlsZS1pbWFnZS1jb250YWluZXIgLnByb2ZpbGUtdGV4dC1jb250YWluZXIgLnVzZXItdHlwZSB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJvZmlsZS1pbWFnZS1jb250YWluZXIgLnByb2ZpbGUtdGV4dC1jb250YWluZXIgLnByb2ZpbGUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMjVweDtcbiAgei1pbmRleDogOTk5OTk5OTk5O1xufVxuLmxvZ2luLWNvbnRhaW5lciAubG9naW4tbWVudXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubG9naW4tY29udGFpbmVyIC5sb2dpbi1tZW51cyBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWJhc2lzOiA1MCU7XG59XG4ubG9naW4tY29udGFpbmVyIC5sb2dpbi1tZW51cyBkaXY6bnRoLWNoaWxkKDIpIHtcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcbn1cblxuLndhdmUtYmxvYiB7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxNDElO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0yNCU7XG4gIGJvdHRvbTogMDtcbiAgb3BhY2l0eTogMC4yO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICBoZWlnaHQ6IDExNnB4O1xufVxuXG4ud2F2ZS1ibG9iLTEge1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTQxJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMjQlO1xuICBvcGFjaXR5OiAwLjI7XG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA5MHB4O1xufSJdfQ== */");

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
/* harmony import */ var _shared_components_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared-components/storage.service */ "./src/app/shared-components/storage.service.ts");
/* harmony import */ var _assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/constants/app-constants */ "./src/assets/constants/app-constants.ts");








let SettingsPage = class SettingsPage {
    constructor(storageService, apiService, alertController, router, sharedService) {
        this.storageService = storageService;
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
        this.userDetails = this.storageService.getStorageValue(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_7__["appConstants"].USER_INFO);
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
    { type: _shared_components_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_components_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_service_service__WEBPACK_IMPORTED_MODULE_2__["SharedServiceService"]])
], SettingsPage);



/***/ })

}]);
//# sourceMappingURL=pages-settings-settings-module-es2015.js.map