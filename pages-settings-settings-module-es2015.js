(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sandhyadeep-header class=\"z-index-99\"></sandhyadeep-header>\n<ion-content>\n    <div class=\"profile-bg\"></div>\n    <div class=\"profile-image-container\">\n      <img src=\"assets/bridal.jpeg\" alt=\"\">\n      <div class=\"profile-text-container\">\n        <div class=\"profile-text\"> Alexander Jimmy</div>\n        <div>Customer</div>\n      </div>\n    </div>\n    <div class=\"before-login\">\n      <div>\n        <div>Login/Signup</div>\n      </div>\n      <div>\n        <div>About Sandhyadeep</div>\n      </div>\n      <div>\n        <div>Terms & Conditions</div>\n      </div>\n    </div>\n</ion-content>\n");

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








let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"],
            _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"]
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
/* harmony default export */ __webpack_exports__["default"] = (".settings-container {\n  margin: 10px 15px;\n}\n\n.profile-bg {\n  height: 180px;\n  width: 400px;\n  box-shadow: 0 1px 10px rgba(98, 140, 255, 0.5);\n  transform: rotate(-15deg);\n  border-radius: 10px 10px 10px 50px;\n  margin-left: -18px;\n  margin-top: -48px;\n  margin-bottom: 60px;\n  background: linear-gradient(225deg, #cc2b5e 2%, #753a88 63%);\n}\n\n.profile-image-container {\n  position: absolute;\n  top: 30px;\n  left: 10%;\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n\n.profile-image-container .profile-text-container {\n  padding: 10px 20px;\n  line-height: 1.3;\n  color: white;\n}\n\n.profile-image-container .profile-text-container .profile-text {\n  font-size: 20px;\n}\n\n.profile-image-container img {\n  width: 90px;\n  height: 90px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  overflow: hidden;\n  border-radius: 50%;\n  border: 3px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsOENBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNERBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDRUY7O0FEREU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0dKOztBREZJO0VBQ0UsZUFBQTtBQ0lOOztBRERFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dGluZ3MtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XG59XG5cbi5wcm9maWxlLWJnIHtcbiAgaGVpZ2h0OiAxODBweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAxMHB4IHJnYmEoOTgsIDE0MCwgMjU1LCAwLjUpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCA1MHB4O1xuICBtYXJnaW4tbGVmdDogLTE4cHg7XG4gIG1hcmdpbi10b3A6IC00OHB4O1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjY2MyYjVlIDIlLCAjNzUzYTg4IDYzJSk7XG59XG4ucHJvZmlsZS1pbWFnZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzBweDtcbiAgbGVmdDogMTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLnByb2ZpbGUtdGV4dC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAucHJvZmlsZS10ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gIH1cbiAgaW1nIHtcbiAgICB3aWR0aDogOTBweDtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG4gIH1cbn1cbiIsIi5zZXR0aW5ncy1jb250YWluZXIge1xuICBtYXJnaW46IDEwcHggMTVweDtcbn1cblxuLnByb2ZpbGUtYmcge1xuICBoZWlnaHQ6IDE4MHB4O1xuICB3aWR0aDogNDAwcHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDEwcHggcmdiYSg5OCwgMTQwLCAyNTUsIDAuNSk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMThweDtcbiAgbWFyZ2luLXRvcDogLTQ4cHg7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICNjYzJiNWUgMiUsICM3NTNhODggNjMlKTtcbn1cblxuLnByb2ZpbGUtaW1hZ2UtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwcHg7XG4gIGxlZnQ6IDEwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvZmlsZS1pbWFnZS1jb250YWluZXIgLnByb2ZpbGUtdGV4dC1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5wcm9maWxlLWltYWdlLWNvbnRhaW5lciAucHJvZmlsZS10ZXh0LWNvbnRhaW5lciAucHJvZmlsZS10ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLnByb2ZpbGUtaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xufSJdfQ== */");

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


let SettingsPage = class SettingsPage {
    constructor() { }
    ngOnInit() {
    }
};
SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.page.scss */ "./src/app/pages/settings/settings.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SettingsPage);



/***/ })

}]);
//# sourceMappingURL=pages-settings-settings-module-es2015.js.map