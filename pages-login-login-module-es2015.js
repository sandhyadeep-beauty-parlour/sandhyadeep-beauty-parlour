(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-content>\r\n    <div class=\"login-main-container\">\r\n\r\n        <div class=\"login-container\">\r\n            <div *ngIf=\"isContinue\" class=\"back-container\">\r\n                <div (click)=\"isContinue = !isContinue\" class=\"back-button\">\r\n                    <i class=\"fa fa-angle-left\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"logo-container\">\r\n                <div class=\"logo-image\"></div>\r\n                <div class=\"logo-text\">\r\n                    Sandhyadeep\r\n                </div>\r\n                <div class=\"slogan-text\">\r\n                    Have a hair affair with us\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"!isContinue\" class=\"login-buttons\">\r\n                <div (click)=\"onContinue()\" class=\"create-account-button fb-button\">\r\n                    <i class=\"fa fa-facebook-square\"></i> <div> Login with Facebook </div>\r\n                </div>\r\n                <div (click)=\"onContinue()\" class=\"create-account-button insta-button\">\r\n                    <i class=\"fa fa-instagram\"></i> <div> Login with Instagram </div>\r\n                </div>\r\n                <div (click)=\"onContinue()\" class=\"create-account-button only-button\">\r\n                    <i class=\"fa fa-user-circle\"></i> <div> Create New Account </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"isContinue\" class=\"form-main-container\">\r\n                <form [formGroup]='loginForm'>\r\n                    <div class=\"form-container\">\r\n                        <div class=\"form-input-container\">\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>\r\n                                <input formControlName=\"name\" type=\"text\" class=\"default form-control\" name=\"name\" placeholder=\"Enter Your Name\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-input-container\">\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\"><i class=\"fa fa-phone\"></i></span>\r\n                                <input formControlName=\"mobileNumber\" type=\"text\" class=\"default form-control\" name=\"email\" placeholder=\"Enter Mobile Number\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-input-container\">\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\r\n                                <ion-datetime formControlName=\"dob\" class=\"default form-control\" placeholder=\"Date of Birth\" display-timezone=\"ist\"></ion-datetime>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-input-container\">\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\"><i class=\"fa fa-at\"></i></span>\r\n                                <input  formControlName=\"email\" type=\"email\" class=\"default form-control\" name=\"email\" placeholder=\"Enter Email\">\r\n                            </div>\r\n                        </div>\r\n                        <div (click)=\"onLogIn()\" class=\"login-button\">\r\n                            <button> Continue <i class=\"fa fa-arrow-right\"></i></button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/notification-service.service.ts":
/*!*************************************************!*\
  !*** ./src/app/notification-service.service.ts ***!
  \*************************************************/
/*! exports provided: NotificationServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationServiceService", function() { return NotificationServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotificationServiceService = class NotificationServiceService {
};
NotificationServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NotificationServiceService);



/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input-group {\n  margin-bottom: 10px;\n  height: 45px;\n}\n.input-group .input-group-addon {\n  padding: 6px 12px;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  background-color: #901180;\n  border: 1px solid #901180;\n  display: flex;\n  align-items: center;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n  min-width: 42px;\n  justify-content: center;\n}\ninput.default {\n  border: 1px solid #901180 !important;\n}\nion-datetime.default {\n  border: 1px solid #901180 !important;\n}\n.login-main-container {\n  /*background: linear-gradient(214deg, rgba(40, 29, 232, 1) -25%, rgb(147, 18, 152) 63%);*/\n  background: url('image.jpg');\n  height: 100%;\n  display: flex;\n  font-size: 14px;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  background-size: cover;\n}\n.login-main-container .login-container {\n  width: 80%;\n  padding: 15px;\n  background: #ffffff78;\n  border-radius: 15px;\n}\n.login-main-container .login-container .logo-container {\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  line-height: 1.2;\n}\n.login-main-container .login-container .logo-container .logo-image {\n  background-image: url('sandhyadeep-final-logo.png');\n  width: 100px;\n  height: 100px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  background-position: center center;\n}\n.login-main-container .login-container .logo-container .slogan-text {\n  color: #901180;\n  margin-bottom: 10%;\n  font-size: 12px;\n}\n.login-main-container .login-container .logo-container .logo-text {\n  font-size: 30px;\n  color: #901180;\n  font-weight: 700;\n}\n.login-main-container .login-container .form-main-container {\n  display: flex;\n  justify-content: center;\n}\n.login-main-container .login-container .form-main-container form {\n  width: 90%;\n}\n.login-main-container .login-container .form-main-container .form-container .link-signup {\n  text-align: center;\n}\n.login-main-container .login-container .form-main-container .form-container .link-signup a {\n  font-size: 12px;\n  font-weight: bold;\n  color: #901180;\n}\n.login-main-container .login-container .form-main-container .form-container .login-button {\n  color: white;\n  padding: 9px 15px;\n  margin: 30px 0 5px;\n  display: flex;\n  border-radius: 5px;\n  justify-content: center;\n  text-align: center;\n  background: linear-gradient(225deg, #cc2b5e 2%, #753a88 63%);\n  height: 45px;\n}\n.login-main-container .login-container .form-main-container .form-container .login-button button {\n  font-size: 16px;\n  font-weight: bold;\n  background: transparent;\n  color: white;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container input {\n  font-size: 16px;\n  height: 100%;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container ion-datetime {\n  font-size: 16px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container .form-input::-webkit-input-placeholder {\n  color: white;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container .form-input::-moz-placeholder {\n  color: white;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container .form-input::-ms-input-placeholder {\n  color: white;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container .form-input::placeholder {\n  color: white;\n}\n.login-main-container .login-container .form-main-container .form-container .form-input-container .form-input {\n  padding: 15px;\n  border: 1px solid #fff;\n  margin: 10px;\n  color: white;\n  border-radius: 25px;\n  background-color: transparent;\n}\n.login-buttons {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.login-buttons .create-account-button {\n  padding: 6px;\n  width: 90%;\n  text-align: center;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  margin: 5px 0;\n  border-radius: 0.25rem;\n  height: 45px;\n}\n.login-buttons .create-account-button.only-button {\n  background: linear-gradient(225deg, #cc2b5e 2%, #753a88 63%);\n  color: white;\n}\n.login-buttons .create-account-button.fb-button {\n  background: #3B5999;\n  color: white;\n}\n.login-buttons .create-account-button.insta-button {\n  color: white;\n  background: #c32aa3;\n}\n.login-buttons .create-account-button i {\n  margin: 0 12px;\n  font-size: 22px;\n}\n.login-buttons img {\n  height: 40px;\n}\n.back-container {\n  position: absolute;\n}\n.back-container .back-button {\n  display: inline-block;\n  padding: 2px 7px;\n  border-radius: 0.25rem;\n  color: #901180;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxhYWJoYWd3YVxcc2FuZGh5YWRlZXAgaW9uaWMgc3RhY2svc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL0M6XFxVc2Vyc1xcYWFiaGFnd2FcXHNhbmRoeWFkZWVwIGlvbmljIHN0YWNrL3NyY1xcc2FuZGh5YWRlZXAtdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ0RGO0FERUU7RUFDRSxpQkFBQTtFQUNBLGVFSFU7RUZJVixnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0FKO0FESUE7RUFDRSxvQ0FBQTtBQ0RGO0FESUE7RUFDRSxvQ0FBQTtBQ0RGO0FESUE7RUFDRSx5RkFBQTtFQUVBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlRWxDa0I7RUZtQ2xCLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDRkY7QURLQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0ZGO0FES0E7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDRkY7QURLQTtFQUNFLG1EQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQ0ZGO0FES0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRkY7QURJQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNERjtBRElBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDREY7QURFRTtFQUNFLFVBQUE7QUNBSjtBRE9BO0VBTUUsa0JBQUE7QUNURjtBRElFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0ZKO0FET0E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0REFBQTtFQUNBLFlFdEdjO0FEa0doQjtBRE9BO0VBQ0UsZUU5R1k7RUYrR1osaUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNKRjtBRFFFO0VBQ0UsZUV0SFU7RUZ1SFYsWUFBQTtBQ0xKO0FET0U7RUFDRSxlRTFIVTtFRjJIVixZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDTEo7QURTQTtFQUNFLFlBQUE7QUNORjtBREtBO0VBQ0UsWUFBQTtBQ05GO0FES0E7RUFDRSxZQUFBO0FDTkY7QURLQTtFQUNFLFlBQUE7QUNORjtBRFNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDTkY7QURTQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNORjtBRE9FO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVFdkpVO0VGd0pWLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNMSjtBRE1JO0VBQ0UsNERBQUE7RUFDQSxZQUFBO0FDSk47QURPSTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ0xOO0FEUUk7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNOTjtBRFNJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNQTjtBRFdFO0VBQ0UsWUFBQTtBQ1RKO0FEYUE7RUFDRSxrQkFBQTtBQ1ZGO0FEV0U7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUU1TFU7QURtTGQiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2FuZGh5YWRlZXAtdGhlbWVcIjtcclxuXHJcbi5pbnB1dC1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgLmlucHV0LWdyb3VwLWFkZG9uIHtcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLTE7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MDExODA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTAxMTgwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAuMjVyZW07XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuMjVyZW07XHJcbiAgICBtaW4td2lkdGg6IDQycHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbmlucHV0LmRlZmF1bHQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MDExODAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWRhdGV0aW1lLmRlZmF1bHQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MDExODAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvZ2luLW1haW4tY29udGFpbmVyIHtcclxuICAvKmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMTRkZWcsIHJnYmEoNDAsIDI5LCAyMzIsIDEpIC0yNSUsIHJnYigxNDcsIDE4LCAxNTIpIDYzJSk7Ki9cclxuICAvL2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMTRkZWcsIHJnYmEoNDAsIDI5LCAyMzIsIDEpIC0yNSUsIHJnYig4MSwgMzYsIDgyKSA2MyUpO1xyXG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvaW1hZ2UuanBnXCIpO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogJHJlZ3VsYXItZm9udC1zaXplO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIHtcclxuICB3aWR0aDogODAlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjc4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5sb2dvLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG59XHJcblxyXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAubG9nby1jb250YWluZXIgLmxvZ28taW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zYW5kaHlhZGVlcC1maW5hbC1sb2dvLnBuZ1wiKTtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5sb2dvLWNvbnRhaW5lciAuc2xvZ2FuLXRleHQge1xyXG4gIGNvbG9yOiAjOTAxMTgwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmxvZ28tY29udGFpbmVyIC5sb2dvLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogIzkwMTE4MDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1tYWluLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb3JtIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1tYWluLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIge1xyXG59XHJcblxyXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1tYWluLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgLmxpbmstc2lnbnVwIHtcclxuICBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICM5MDExODA7XHJcbiAgfVxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5sb2dpbi1idXR0b24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA5cHggMTVweDtcclxuICBtYXJnaW46IDMwcHggMCA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICNjYzJiNWUgMiUsICM3NTNhODggNjMlKTtcclxuICBoZWlnaHQ6ICRidXR0b24taGVpZ2h0O1xyXG59XHJcblxyXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1tYWluLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgLmxvZ2luLWJ1dHRvbiBidXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS0xO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5mb3JtLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLTE7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIGlvbi1kYXRldGltZSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtMTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5mb3JtLWlucHV0LWNvbnRhaW5lciAuZm9ybS1pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5mb3JtLWlucHV0LWNvbnRhaW5lciAuZm9ybS1pbnB1dCB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmxvZ2luLWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC5jcmVhdGUtYWNjb3VudC1idXR0b24ge1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS0xO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgICYub25seS1idXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjY2MyYjVlIDIlLCAjNzUzYTg4IDYzJSk7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAmLmZiLWJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMzQjU5OTk7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAmLmluc3RhLWJ1dHRvbiB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYmFja2dyb3VuZDogI2MzMmFhMztcclxuICAgIH1cclxuXHJcbiAgICBpIHtcclxuICAgICAgbWFyZ2luOiAwIDEycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYmFjay1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAuYmFjay1idXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMnB4IDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICBjb2xvcjogIzkwMTE4MDtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS0zO1xyXG4gIH1cclxufVxyXG4iLCIuaW5wdXQtZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG59XG4uaW5wdXQtZ3JvdXAgLmlucHV0LWdyb3VwLWFkZG9uIHtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MDExODA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MDExODA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuMjVyZW07XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuMjVyZW07XG4gIG1pbi13aWR0aDogNDJweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlucHV0LmRlZmF1bHQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTAxMTgwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1kYXRldGltZS5kZWZhdWx0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzkwMTE4MCAhaW1wb3J0YW50O1xufVxuXG4ubG9naW4tbWFpbi1jb250YWluZXIge1xuICAvKmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMTRkZWcsIHJnYmEoNDAsIDI5LCAyMzIsIDEpIC0yNSUsIHJnYigxNDcsIDE4LCAxNTIpIDYzJSk7Ki9cbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9pbWFnZS5qcGdcIik7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY3ODtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmxvZ28tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5cbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5sb2dvLWNvbnRhaW5lciAubG9nby1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zYW5kaHlhZGVlcC1maW5hbC1sb2dvLnBuZ1wiKTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG5cbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5sb2dvLWNvbnRhaW5lciAuc2xvZ2FuLXRleHQge1xuICBjb2xvcjogIzkwMTE4MDtcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5sb2dvLWNvbnRhaW5lciAubG9nby10ZXh0IHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzkwMTE4MDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5mb3JtLW1haW4tY29udGFpbmVyIGZvcm0ge1xuICB3aWR0aDogOTAlO1xufVxuXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1tYWluLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgLmxpbmstc2lnbnVwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5saW5rLXNpZ251cCBhIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM5MDExODA7XG59XG5cbi5sb2dpbi1tYWluLWNvbnRhaW5lciAubG9naW4tY29udGFpbmVyIC5mb3JtLW1haW4tY29udGFpbmVyIC5mb3JtLWNvbnRhaW5lciAubG9naW4tYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA5cHggMTVweDtcbiAgbWFyZ2luOiAzMHB4IDAgNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICNjYzJiNWUgMiUsICM3NTNhODggNjMlKTtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1tYWluLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgLmxvZ2luLWJ1dHRvbiBidXR0b24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1tYWluLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgLmZvcm0taW5wdXQtY29udGFpbmVyIGlucHV0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1tYWluLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgLmZvcm0taW5wdXQtY29udGFpbmVyIGlvbi1kYXRldGltZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9naW4tbWFpbi1jb250YWluZXIgLmxvZ2luLWNvbnRhaW5lciAuZm9ybS1tYWluLWNvbnRhaW5lciAuZm9ybS1jb250YWluZXIgLmZvcm0taW5wdXQtY29udGFpbmVyIC5mb3JtLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxvZ2luLW1haW4tY29udGFpbmVyIC5sb2dpbi1jb250YWluZXIgLmZvcm0tbWFpbi1jb250YWluZXIgLmZvcm0tY29udGFpbmVyIC5mb3JtLWlucHV0LWNvbnRhaW5lciAuZm9ybS1pbnB1dCB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIG1hcmdpbjogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmxvZ2luLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5sb2dpbi1idXR0b25zIC5jcmVhdGUtYWNjb3VudC1idXR0b24ge1xuICBwYWRkaW5nOiA2cHg7XG4gIHdpZHRoOiA5MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDVweCAwO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBoZWlnaHQ6IDQ1cHg7XG59XG4ubG9naW4tYnV0dG9ucyAuY3JlYXRlLWFjY291bnQtYnV0dG9uLm9ubHktYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgI2NjMmI1ZSAyJSwgIzc1M2E4OCA2MyUpO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubG9naW4tYnV0dG9ucyAuY3JlYXRlLWFjY291bnQtYnV0dG9uLmZiLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMzQjU5OTk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5sb2dpbi1idXR0b25zIC5jcmVhdGUtYWNjb3VudC1idXR0b24uaW5zdGEtYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjYzMyYWEzO1xufVxuLmxvZ2luLWJ1dHRvbnMgLmNyZWF0ZS1hY2NvdW50LWJ1dHRvbiBpIHtcbiAgbWFyZ2luOiAwIDEycHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5sb2dpbi1idXR0b25zIGltZyB7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmJhY2stY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmJhY2stY29udGFpbmVyIC5iYWNrLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMnB4IDdweDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgY29sb3I6ICM5MDExODA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn0iLCIkcHJpbWFyeS1jb2xvcjogI2NjMmI1ZTtcclxuJHNlY29uZGFyeS1jb2xvcjogIzc1M2E4ODtcclxuXHJcbiRyZWd1bGFyLWZvbnQtc2l6ZTogMTRweDtcclxuJGZvbnQtc2l6ZS0xOiAxNnB4O1xyXG4kaGVhZGVyLXNpemU6IDIwcHg7XHJcbiRmb250LXNpemUtMzogMzBweDtcclxuXHJcbiRidXR0b24taGVpZ2h0OiA0NXB4O1xyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _notification_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../notification-service.service */ "./src/app/notification-service.service.ts");






let LoginPage = class LoginPage {
    constructor(router, formBuilder, toastController, notification) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.notification = notification;
        this.isContinue = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: false }, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: false }, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: false }, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: false }, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])
        });
        this.loginForm.get('dob').setValue('1990-01-01T15:43:40.394Z');
    }
    onContinue() {
        this.isContinue = true;
    }
    goToSignup() {
        this.router.navigate(['signup']);
    }
    onLogIn() {
        if (this.loginForm.invalid) {
            this.presentToast('Please fill all the mandatory fields');
            return;
        }
        this.router.navigate(['home/feed']);
    }
    presentToast(displayMessage) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: displayMessage,
                position: 'top',
                cssClass: 'customToastClass',
                duration: 2000,
            });
            toast.present();
        });
    }
    presentToastWithOptions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: 'Toast header',
                message: 'Click to Close',
                position: 'top',
                buttons: [
                    {
                        side: 'start',
                        icon: 'star',
                        text: 'Favorite',
                        handler: () => {
                            console.log('Favorite clicked');
                        }
                    }, {
                        text: 'Done',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            toast.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _notification_service_service__WEBPACK_IMPORTED_MODULE_5__["NotificationServiceService"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _notification_service_service__WEBPACK_IMPORTED_MODULE_5__["NotificationServiceService"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map