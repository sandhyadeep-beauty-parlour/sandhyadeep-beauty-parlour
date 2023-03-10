(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-payment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<back-logo-header></back-logo-header>-->\r\n<sandhyadeep-header [showBackIcon]=\"true\" class=\"z-index-99\"></sandhyadeep-header>\r\n<ion-content>\r\n  <div class=\"page-container\">\r\n      <div class=\"item-list\">\r\n        <div class=\"page-heading\">\r\n          <div class=\"heading-text\">\r\n            <b>Payments</b>\r\n          </div>\r\n        </div>\r\n        <div style=\"border-bottom: 5px solid #d3d3d396; border-top: 5px solid #d3d3d396; padding: 5px 0;\">\r\n          <div class=\"item-container\">\r\n            <div (click)=\"show = 'upi'\" class=\"main-item-name-container border-bottom\">\r\n              <div class=\"main-item-name-sub-container\">\r\n                <img src=\"assets/upi_payments.jpg\" alt=\"\">\r\n                <div [class.text-bold]=\"show === 'upi'\" class=\"main-item-name\">PHONE PAY/ GOOGLE PAY/ BHIM UPI</div>\r\n              </div>\r\n              <div class=\"main-item-arrow\">\r\n                <i class=\"right-icon fa fa-angle-right\" [class.down]=\"show === 'upi'\">\r\n\r\n                </i>\r\n              </div>\r\n            </div>\r\n            <div class=\"sub-item-list\" [class.opened]=\"show === 'upi'\">\r\n              <div class=\"sub-item-container\">\r\n                <div class=\"sub-item-name\">\r\n                  <label class=\"name\">jhaksjhdkjash</label>\r\n                </div>\r\n                <div class=\"sub-item-checkbox\">\r\n                  <ion-checkbox class=\"zoom-07\" color=\"primary\" ></ion-checkbox>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"item-container\">\r\n            <div (click)=\"show = 'cards'\" class=\"main-item-name-container border-bottom\">\r\n              <div class=\"main-item-name-sub-container\">\r\n                <img src=\"assets/cards-icon.png\" alt=\"\">\r\n                <div [class.text-bold]=\"show === 'cards'\" class=\"main-item-name\">CREDIT/DEBIT CARD</div>\r\n              </div>\r\n              <div class=\"main-item-arrow\">\r\n                <i class=\"right-icon fa fa-angle-right\" [class.down]=\"show === 'cards'\"></i>\r\n              </div>\r\n            </div>\r\n            <div class=\"sub-item-list\" [class.opened]=\"show === 'cards'\">\r\n              <div class=\"custom-input-container\">\r\n                <div class=\"custom-input-box\">\r\n                  <div class=\"custom-input flex-70\">\r\n                    <input placeholder=\"Card Number\" type=\"text\" />\r\n                  </div>\r\n                  <div class=\"custom-input-button\">\r\n                    <img src=\"assets/credit-card.png\" alt=\"\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"custom-input-container\">\r\n                <div class=\"custom-input-box\">\r\n                  <div class=\"custom-input flex-90\">\r\n                    <input placeholder=\"Name on card\" type=\"text\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div style=\"display: flex\">\r\n                <div style=\"padding-right: 5px; flex-basis: 70%\">\r\n                  <div class=\"custom-input-container\">\r\n                    <div class=\"custom-input-box\">\r\n                      <div class=\"custom-input flex-90\">\r\n                        <input placeholder=\"Valid Thru (MM/YY)\" type=\"text\" />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div>\r\n                  <div class=\"custom-input-container\">\r\n                    <div class=\"custom-input-box\">\r\n                      <div class=\"custom-input flex-90\">\r\n                        <input placeholder=\"CVV\" type=\"text\" />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"item-container\">\r\n            <div (click)=\"show = 'wallet'\" class=\"main-item-name-container border-bottom\">\r\n              <div class=\"main-item-name-sub-container\">\r\n                <img src=\"assets/wallet.png\" alt=\"\">\r\n                <div [class.text-bold]=\"show === 'wallet'\" class=\"main-item-name\">PAYTM/WALLETS</div>\r\n              </div>\r\n              <div class=\"main-item-arrow\">\r\n                <i class=\"right-icon fa fa-angle-right\" [class.down]=\"show === 'wallet'\"></i>\r\n              </div>\r\n            </div>\r\n            <div class=\"sub-item-list\" [class.opened]=\"show === 'wallet'\">\r\n              <div class=\"sub-item-container\">\r\n                <div class=\"sub-item-name\">\r\n                  <label class=\"name\">Debit Card</label>\r\n                </div>\r\n                <div class=\"sub-item-checkbox\">\r\n                  <ion-checkbox class=\"zoom-07\" color=\"primary\" ></ion-checkbox>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"item-container\">\r\n            <div (click)=\"show = 'net_banking'\" class=\"main-item-name-container\">\r\n              <div class=\"main-item-name-sub-container\">\r\n                <img src=\"assets/net-banking.png\" alt=\"\">\r\n                <div [class.text-bold]=\"show === 'net_banking'\" class=\"main-item-name\">NET BANKING</div>\r\n              </div>\r\n              <div class=\"main-item-arrow\">\r\n                <i class=\"right-icon fa fa-angle-right\" [class.down]=\"show === 'net_banking'\"></i>\r\n              </div>\r\n            </div>\r\n            <div class=\"sub-item-list\" [class.opened]=\"show === 'net_banking'\">\r\n              <div class=\"sub-item-container\">\r\n                <div class=\"sub-item-name\">\r\n                  <label class=\"name\">Debit Card</label>\r\n                </div>\r\n                <div class=\"sub-item-checkbox\">\r\n                  <ion-checkbox class=\"zoom-07\" color=\"primary\" ></ion-checkbox>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <div class=\"coupon-footer\">\r\n      <div class=\"coupon-button-container\">\r\n        <div class=\"coupon-discount\">600 ₹</div>\r\n        <div class=\"details\">View Details</div>\r\n      </div>\r\n      <div class=\"default-button\">\r\n        <button>PAY NOW</button>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/back-logo-component/back-logo-component.page.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/back-logo-component/back-logo-component.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header-container\">\r\n  <ion-header>\r\n    <div class=\"search-header-container\">\r\n      <div style=\"display: flex; justify-content: end; align-items: center\">\r\n        <div (click)=\"backClicked()\" class=\"header-back\">\r\n          <i class=\"fa fa-angle-left\"></i>\r\n        </div>\r\n        <div class=\"header-search\">\r\n          <div style=\"display: flex; align-items: center; justify-content: space-between;\">\r\n            <div style=\"width: 40px; border: 2px solid #666; padding: 1px; border-radius: 50%; overflow: hidden; display: inline-block; margin: 5px;\">\r\n              <img src=\"/assets/new-theme/Sandhyadeep_logo.png\">\r\n            </div>\r\n            <div class=\"logo-container\">\r\n              <div class=\"logo-text\">\r\n                Sandhyadeep\r\n              </div>\r\n              <div class=\"slogan-text\">\r\n                Have a hair affair with us\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"icons-list\">\r\n        <div class=\"icon-container\">\r\n          <i class=\"fa fa-bell\"></i>\r\n        </div>\r\n        <div class=\"icon-container \">\r\n          <i class=\"fa fa-search\"></i>\r\n        </div>\r\n        <div class=\"icon-container cart-icon\">\r\n          <i class=\"fa fa-shopping-cart\"></i>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </ion-header>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/pages/payment/payment-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/payment/payment-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PaymentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentRoutingModule", function() { return PaymentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment.page */ "./src/app/pages/payment/payment.page.ts");




const routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_3__["PaymentPage"]
    }
];
let PaymentRoutingModule = class PaymentRoutingModule {
};
PaymentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentRoutingModule);



/***/ }),

/***/ "./src/app/pages/payment/payment.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.module.ts ***!
  \*************************************************/
/*! exports provided: PaymentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModule", function() { return PaymentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-routing.module */ "./src/app/pages/payment/payment-routing.module.ts");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment.page */ "./src/app/pages/payment/payment.page.ts");
/* harmony import */ var _shared_components_back_logo_component_back_logo_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared-components/back-logo-component/back-logo-component.module */ "./src/app/shared-components/back-logo-component/back-logo-component.module.ts");
/* harmony import */ var _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared-components/header-component/header-component.module */ "./src/app/shared-components/header-component/header-component.module.ts");









let PaymentModule = class PaymentModule {
};
PaymentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentRoutingModule"],
            _shared_components_back_logo_component_back_logo_component_module__WEBPACK_IMPORTED_MODULE_7__["BackLogoComponentModule"],
            _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_8__["HeaderModule"]
        ],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]]
    })
], PaymentModule);



/***/ }),

/***/ "./src/app/pages/payment/payment.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-container .total-bill-container {\n  text-align: left;\n  padding: 0 20px;\n  font-size: 16px;\n}\n.page-container .total-bill-container .bill-header {\n  padding: 10px 0 5px;\n  border-bottom: 1px solid lightgray;\n}\n.page-container .total-bill-container .bill-details {\n  padding: 5px 0;\n  border-bottom: 1px solid lightgray;\n}\n.page-container .total-bill-container .display-flex {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.page-container .total-bill-container .display-flex .apply-coupon {\n  color: #BD1E51;\n  font-size: 14px;\n}\n.page-container .total-bill-container .total-bill-details {\n  padding: 5px 0;\n}\n.border-bottom {\n  border-bottom: 1px solid #d3d3d396;\n}\n.item-list .item-container {\n  margin-bottom: 15px;\n  padding: 0 15px;\n}\n.item-list .item-container .main-item-name-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px 0;\n}\n.item-list .item-container .main-item-name-container:last-child {\n  border-bottom: none;\n}\n.item-list .item-container .main-item-name-container .main-item-name-sub-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.item-list .item-container .main-item-name-container .main-item-name-sub-container img {\n  margin-right: 10px;\n  width: 35px;\n  height: 35px;\n}\n.item-list .item-container .main-item-name-container .main-item-arrow {\n  color: #666;\n}\n.item-list .item-container .sub-item-list {\n  max-height: 0;\n  overflow-y: hidden;\n  transition: ease-in-out 400ms max-height;\n}\n.item-list .item-container .sub-item-list.opened {\n  padding: 10px 0;\n  max-height: 100%;\n  transition: ease-in-out 600ms max-height;\n}\n.item-list .item-container .sub-item-list .sub-item-container {\n  display: flex;\n  padding: 5px 0;\n  border-bottom: 1px solid #d3d3d396;\n  justify-content: space-between;\n  align-items: center;\n}\n.item-list .item-container .sub-item-list .sub-item-container .sub-item-name {\n  flex-basis: 50%;\n  line-height: 0.7;\n}\n.item-list .item-container .sub-item-list .sub-item-container .sub-item-name .name {\n  font-size: 16px;\n}\n.item-list .item-container .sub-item-list .sub-item-container .sub-item-name .time {\n  font-size: 14px;\n  color: #666;\n}\n.item-list .item-container .sub-item-list .sub-item-container .sub-item-checkbox {\n  display: flex;\n}\n.down {\n  transform: rotate(90deg);\n  -webkit-transform: rotate(90deg);\n  transition: ease-in-out 300ms;\n}\n.color-666 {\n  color: #666;\n}\n.page-heading {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  padding: 5px 15px 5px;\n}\n.page-heading .heading-text {\n  font-size: 20px;\n}\n.coupon-footer {\n  display: flex;\n  justify-content: space-around;\n  border-top: 1px solid lightgray;\n}\n.coupon-footer .coupon-button-container {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n.coupon-footer .coupon-button-container .coupon-discount {\n  font-size: 24px;\n}\n.coupon-footer .coupon-button-container .details {\n  color: #BD1E51;\n  font-weight: bold;\n}\n.custom-input-container {\n  padding: 5px;\n}\n.custom-input-container .custom-input-box {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  min-height: 44px;\n}\n.custom-input-container .custom-input-box .custom-input {\n  height: 100%;\n}\n.custom-input-container .custom-input-box .custom-input.flex-70 {\n  flex-basis: 70%;\n}\n.custom-input-container .custom-input-box .custom-input.flex-90 {\n  flex-basis: 90%;\n}\n.custom-input-container .custom-input-box .custom-input input {\n  width: 100%;\n  background: transparent;\n  border: none;\n}\n.custom-input-container .custom-input-box .custom-input input:focus {\n  border: none;\n}\n.custom-input-container .custom-input-box .custom-input-button {\n  color: #BD1E51;\n}\n.custom-input-container .custom-input-box .custom-input-button img {\n  margin-right: 10px;\n  width: 35px;\n  height: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxhcHBcXHBhZ2VzXFxwYXltZW50XFxwYXltZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGF5bWVudC9wYXltZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGF5bWVudC9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxzYW5kaHlhZGVlcC10aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0ZKO0FER0k7RUFDRSxtQkFBQTtFQUNBLGtDQUFBO0FDRE47QURJSTtFQUNFLGNBQUE7RUFDQSxrQ0FBQTtBQ0ZOO0FES0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0hOO0FESU07RUFDRSxjRWpCUTtFRmtCUixlQUFBO0FDRlI7QURNSTtFQUNFLGNBQUE7QUNKTjtBRFNBO0VBQ0Usa0NBQUE7QUNORjtBRFVFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDUEo7QURRSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ05OO0FET007RUFDRSxtQkFBQTtBQ0xSO0FET007RUFDRSxhQUFBO0VBQWUsdUJBQUE7RUFBeUIsbUJBQUE7QUNIaEQ7QURJUTtFQUNFLGtCQUFBO0VBQW9CLFdBQUE7RUFBYSxZQUFBO0FDQTNDO0FER007RUFDRSxXQUFBO0FDRFI7QURNSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FDSk47QURLTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0FDSFI7QURLTTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDSFI7QURJUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0ZWO0FER1U7RUFDRSxlQUFBO0FDRFo7QURHVTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDRFo7QURLUTtFQUNFLGFBQUE7QUNIVjtBRFNBO0VBQ0Usd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FDTkY7QURRQTtFQUNFLFdBQUE7QUNMRjtBRFFBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0xGO0FETUU7RUFDRSxlQUFBO0FDSko7QURRQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0FDTEY7QURNRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDSko7QURLSTtFQUNFLGVBQUE7QUNITjtBREtJO0VBQ0UsY0V6SFU7RUYwSFYsaUJBQUE7QUNITjtBRFFBO0VBQ0UsWUFBQTtBQ0xGO0FETUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNKSjtBREtJO0VBQ0UsWUFBQTtBQ0hOO0FESU07RUFDRSxlQUFBO0FDRlI7QURJTTtFQUNFLGVBQUE7QUNGUjtBRElNO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0ZSO0FER1E7RUFDRSxZQUFBO0FDRFY7QURLSTtFQUNFLGNFM0pVO0FEd0poQjtBRElNO0VBQ0Usa0JBQUE7RUFBb0IsV0FBQTtFQUFhLFlBQUE7QUNBekMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXltZW50L3BheW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3NhbmRoeWFkZWVwLXRoZW1lXCI7XHJcblxyXG4ucGFnZS1jb250YWluZXIge1xyXG4gIC50b3RhbC1iaWxsLWNvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLmJpbGwtaGVhZGVyIHtcclxuICAgICAgcGFkZGluZzogMTBweCAwIDVweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIH1cclxuXHJcbiAgICAuYmlsbC1kZXRhaWxzIHtcclxuICAgICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpc3BsYXktZmxleCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgLmFwcGx5LWNvdXBvbiB7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50b3RhbC1iaWxsLWRldGFpbHMge1xyXG4gICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ib3JkZXItYm90dG9tIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QzZDNkMzk2O1xyXG59XHJcblxyXG4uaXRlbS1saXN0IHtcclxuICAuaXRlbS1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIC5tYWluLWl0ZW0tbmFtZS1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgLm1haW4taXRlbS1uYW1lLXN1Yi1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IHdpZHRoOiAzNXB4OyBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5tYWluLWl0ZW0tYXJyb3cge1xyXG4gICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgIC5yaWdodC1pY29uIHtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5zdWItaXRlbS1saXN0IHtcclxuICAgICAgbWF4LWhlaWdodDogMDtcclxuICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCA0MDBtcyBtYXgtaGVpZ2h0O1xyXG4gICAgICAmLm9wZW5lZCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgNjAwbXMgbWF4LWhlaWdodDtcclxuICAgICAgfVxyXG4gICAgICAuc3ViLWl0ZW0tY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDNkM2QzOTY7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLnN1Yi1pdGVtLW5hbWUge1xyXG4gICAgICAgICAgZmxleC1iYXNpczogNTAlO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDAuNztcclxuICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRpbWUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc3ViLWl0ZW0tcHJpY2Uge31cclxuICAgICAgICAuc3ViLWl0ZW0tY2hlY2tib3gge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLmRvd24ge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAzMDBtcztcclxufVxyXG4uY29sb3ItNjY2IHtcclxuICBjb2xvcjogIzY2NjtcclxufVxyXG5cclxuLnBhZ2UtaGVhZGluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1cHggMTVweCA1cHg7XHJcbiAgLmhlYWRpbmctdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY291cG9uLWZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gIC5jb3Vwb24tYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLmNvdXBvbi1kaXNjb3VudCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxuICAgIC5kZXRhaWxzIHtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jdXN0b20taW5wdXQtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgLmN1c3RvbS1pbnB1dC1ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtaW4taGVpZ2h0OiA0NHB4O1xyXG4gICAgLmN1c3RvbS1pbnB1dCB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgJi5mbGV4LTcwIHtcclxuICAgICAgICBmbGV4LWJhc2lzOiA3MCU7XHJcbiAgICAgIH1cclxuICAgICAgJi5mbGV4LTkwIHtcclxuICAgICAgICBmbGV4LWJhc2lzOiA5MCU7XHJcbiAgICAgIH1cclxuICAgICAgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jdXN0b20taW5wdXQtYnV0dG9uIHtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDsgd2lkdGg6IDM1cHg7IGhlaWdodDogMzVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIucGFnZS1jb250YWluZXIgLnRvdGFsLWJpbGwtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ucGFnZS1jb250YWluZXIgLnRvdGFsLWJpbGwtY29udGFpbmVyIC5iaWxsLWhlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHggMCA1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4ucGFnZS1jb250YWluZXIgLnRvdGFsLWJpbGwtY29udGFpbmVyIC5iaWxsLWRldGFpbHMge1xuICBwYWRkaW5nOiA1cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5wYWdlLWNvbnRhaW5lciAudG90YWwtYmlsbC1jb250YWluZXIgLmRpc3BsYXktZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wYWdlLWNvbnRhaW5lciAudG90YWwtYmlsbC1jb250YWluZXIgLmRpc3BsYXktZmxleCAuYXBwbHktY291cG9uIHtcbiAgY29sb3I6ICNCRDFFNTE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wYWdlLWNvbnRhaW5lciAudG90YWwtYmlsbC1jb250YWluZXIgLnRvdGFsLWJpbGwtZGV0YWlscyB7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuXG4uYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDNkM2QzOTY7XG59XG5cbi5pdGVtLWxpc3QgLml0ZW0tY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuLml0ZW0tbGlzdCAuaXRlbS1jb250YWluZXIgLm1haW4taXRlbS1uYW1lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogNXB4IDA7XG59XG4uaXRlbS1saXN0IC5pdGVtLWNvbnRhaW5lciAubWFpbi1pdGVtLW5hbWUtY29udGFpbmVyOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLml0ZW0tbGlzdCAuaXRlbS1jb250YWluZXIgLm1haW4taXRlbS1uYW1lLWNvbnRhaW5lciAubWFpbi1pdGVtLW5hbWUtc3ViLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLml0ZW0tbGlzdCAuaXRlbS1jb250YWluZXIgLm1haW4taXRlbS1uYW1lLWNvbnRhaW5lciAubWFpbi1pdGVtLW5hbWUtc3ViLWNvbnRhaW5lciBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG59XG4uaXRlbS1saXN0IC5pdGVtLWNvbnRhaW5lciAubWFpbi1pdGVtLW5hbWUtY29udGFpbmVyIC5tYWluLWl0ZW0tYXJyb3cge1xuICBjb2xvcjogIzY2Njtcbn1cbi5pdGVtLWxpc3QgLml0ZW0tY29udGFpbmVyIC5zdWItaXRlbS1saXN0IHtcbiAgbWF4LWhlaWdodDogMDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCA0MDBtcyBtYXgtaGVpZ2h0O1xufVxuLml0ZW0tbGlzdCAuaXRlbS1jb250YWluZXIgLnN1Yi1pdGVtLWxpc3Qub3BlbmVkIHtcbiAgcGFkZGluZzogMTBweCAwO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCA2MDBtcyBtYXgtaGVpZ2h0O1xufVxuLml0ZW0tbGlzdCAuaXRlbS1jb250YWluZXIgLnN1Yi1pdGVtLWxpc3QgLnN1Yi1pdGVtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QzZDNkMzk2O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaXRlbS1saXN0IC5pdGVtLWNvbnRhaW5lciAuc3ViLWl0ZW0tbGlzdCAuc3ViLWl0ZW0tY29udGFpbmVyIC5zdWItaXRlbS1uYW1lIHtcbiAgZmxleC1iYXNpczogNTAlO1xuICBsaW5lLWhlaWdodDogMC43O1xufVxuLml0ZW0tbGlzdCAuaXRlbS1jb250YWluZXIgLnN1Yi1pdGVtLWxpc3QgLnN1Yi1pdGVtLWNvbnRhaW5lciAuc3ViLWl0ZW0tbmFtZSAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5pdGVtLWxpc3QgLml0ZW0tY29udGFpbmVyIC5zdWItaXRlbS1saXN0IC5zdWItaXRlbS1jb250YWluZXIgLnN1Yi1pdGVtLW5hbWUgLnRpbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuLml0ZW0tbGlzdCAuaXRlbS1jb250YWluZXIgLnN1Yi1pdGVtLWxpc3QgLnN1Yi1pdGVtLWNvbnRhaW5lciAuc3ViLWl0ZW0tY2hlY2tib3gge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZG93biB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDMwMG1zO1xufVxuXG4uY29sb3ItNjY2IHtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5wYWdlLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweCAxNXB4IDVweDtcbn1cbi5wYWdlLWhlYWRpbmcgLmhlYWRpbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmNvdXBvbi1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5jb3Vwb24tZm9vdGVyIC5jb3Vwb24tYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNvdXBvbi1mb290ZXIgLmNvdXBvbi1idXR0b24tY29udGFpbmVyIC5jb3Vwb24tZGlzY291bnQge1xuICBmb250LXNpemU6IDI0cHg7XG59XG4uY291cG9uLWZvb3RlciAuY291cG9uLWJ1dHRvbi1jb250YWluZXIgLmRldGFpbHMge1xuICBjb2xvcjogI0JEMUU1MTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jdXN0b20taW5wdXQtY29udGFpbmVyIHtcbiAgcGFkZGluZzogNXB4O1xufVxuLmN1c3RvbS1pbnB1dC1jb250YWluZXIgLmN1c3RvbS1pbnB1dC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1pbi1oZWlnaHQ6IDQ0cHg7XG59XG4uY3VzdG9tLWlucHV0LWNvbnRhaW5lciAuY3VzdG9tLWlucHV0LWJveCAuY3VzdG9tLWlucHV0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmN1c3RvbS1pbnB1dC1jb250YWluZXIgLmN1c3RvbS1pbnB1dC1ib3ggLmN1c3RvbS1pbnB1dC5mbGV4LTcwIHtcbiAgZmxleC1iYXNpczogNzAlO1xufVxuLmN1c3RvbS1pbnB1dC1jb250YWluZXIgLmN1c3RvbS1pbnB1dC1ib3ggLmN1c3RvbS1pbnB1dC5mbGV4LTkwIHtcbiAgZmxleC1iYXNpczogOTAlO1xufVxuLmN1c3RvbS1pbnB1dC1jb250YWluZXIgLmN1c3RvbS1pbnB1dC1ib3ggLmN1c3RvbS1pbnB1dCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xufVxuLmN1c3RvbS1pbnB1dC1jb250YWluZXIgLmN1c3RvbS1pbnB1dC1ib3ggLmN1c3RvbS1pbnB1dCBpbnB1dDpmb2N1cyB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5jdXN0b20taW5wdXQtY29udGFpbmVyIC5jdXN0b20taW5wdXQtYm94IC5jdXN0b20taW5wdXQtYnV0dG9uIHtcbiAgY29sb3I6ICNCRDFFNTE7XG59XG4uY3VzdG9tLWlucHV0LWNvbnRhaW5lciAuY3VzdG9tLWlucHV0LWJveCAuY3VzdG9tLWlucHV0LWJ1dHRvbiBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG59IiwiLy8gcHJldmlvdXMgVGhlbWVcclxuLy8kcHJpbWFyeS1jb2xvcjogI2U5NWM4ZjtcclxuLy8kc2Vjb25kYXJ5LWNvbG9yOiAjNjE0ZDdmO1xyXG5cclxuLy8gTmV3IFRoZW1lXHJcbiRwcmltYXJ5LWNvbG9yOiAjQkQxRTUxO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjMjY1NzkxO1xyXG5cclxuJHJlZ3VsYXItZm9udC1zaXplOiAxNHB4O1xyXG4kZm9udC1zaXplLTE6IDE2cHg7XHJcbiRoZWFkZXItc2l6ZTogMjBweDtcclxuJGZvbnQtc2l6ZS0zOiAzMHB4O1xyXG5cclxuJGJ1dHRvbi1oZWlnaHQ6IDQ1cHg7XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/payment/payment.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/payment/payment.page.ts ***!
  \***********************************************/
/*! exports provided: PaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPage", function() { return PaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaymentPage = class PaymentPage {
    constructor() {
        this.show = '';
        this.imageUrl = '';
        this.selectedServices = [];
        this.serviceAmount = 0;
    }
    ngOnInit() {
    }
};
PaymentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'payments',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment.page.scss */ "./src/app/pages/payment/payment.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PaymentPage);



/***/ }),

/***/ "./src/app/shared-components/back-logo-component/back-logo-component.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/shared-components/back-logo-component/back-logo-component.module.ts ***!
  \*************************************************************************************/
/*! exports provided: BackLogoComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackLogoComponentModule", function() { return BackLogoComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _back_logo_component_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./back-logo-component.page */ "./src/app/shared-components/back-logo-component/back-logo-component.page.ts");






let BackLogoComponentModule = class BackLogoComponentModule {
};
BackLogoComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        exports: [
            _back_logo_component_page__WEBPACK_IMPORTED_MODULE_5__["BackLogoComponentPage"]
        ],
        declarations: [_back_logo_component_page__WEBPACK_IMPORTED_MODULE_5__["BackLogoComponentPage"]]
    })
], BackLogoComponentModule);



/***/ }),

/***/ "./src/app/shared-components/back-logo-component/back-logo-component.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/shared-components/back-logo-component/back-logo-component.page.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-container {\n  padding-bottom: 3px;\n  background: linear-gradient(305deg, #BD1E51 2%, #265791 63%);\n}\n.header-container ion-header {\n  background: white;\n}\n.header-container .search-header-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-container .search-header-container .header-back {\n  padding: 10px;\n  font-size: 30px;\n  color: #666;\n}\n.header-container .search-header-container .logo-container {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.1;\n}\n.header-container .search-header-container .logo-container .logo-text {\n  font-size: 25px;\n  font-weight: 700;\n}\n.header-container .search-header-container .logo-container .slogan-text {\n  font-size: 10px;\n  padding: 0 5px;\n}\n.header-container .search-header-container .icons-list {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-container .search-header-container .icons-list .icon-container {\n  margin: 0 5px;\n}\n.header-container .search-header-container .icons-list .icon-container.cart-icon {\n  margin: 0 15px 0 5px;\n}\n.header-container .search-header-container .icons-list .icon-container i {\n  font-size: 22px;\n  color: #BD1E51;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYmFjay1sb2dvLWNvbXBvbmVudC9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxhcHBcXHNoYXJlZC1jb21wb25lbnRzXFxiYWNrLWxvZ28tY29tcG9uZW50XFxiYWNrLWxvZ28tY29tcG9uZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYmFjay1sb2dvLWNvbXBvbmVudC9iYWNrLWxvZ28tY29tcG9uZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYmFjay1sb2dvLWNvbXBvbmVudC9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxzYW5kaHlhZGVlcC10aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUJBQUE7RUFDQSw0REFBQTtBQ0RGO0FERUU7RUFDRSxpQkFBQTtBQ0FKO0FERUU7RUFDRSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsOEJBQUE7QUNFeEM7QURESTtFQUNFLGFBQUE7RUFBZSxlQUFBO0VBQWlCLFdBQUE7QUNLdEM7QURISTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDS047QURKTTtFQUNFLGVBQUE7RUFBaUIsZ0JBQUE7QUNPekI7QURMTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDT1I7QURKSTtFQUNFLGFBQUE7RUFBZSxtQkFBQTtFQUFxQiw4QkFBQTtBQ1ExQztBRFBNO0VBQ0UsYUFBQTtBQ1NSO0FEUlE7RUFDRSxvQkFBQTtBQ1VWO0FEUlE7RUFDRSxlQUFBO0VBQWlCLGNFNUJYO0FEdUNoQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL2JhY2stbG9nby1jb21wb25lbnQvYmFjay1sb2dvLWNvbXBvbmVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2FuZGh5YWRlZXAtdGhlbWVcIjtcclxuXHJcbi5oZWFkZXItY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMDVkZWcsICRwcmltYXJ5LWNvbG9yIDIlLCAkc2Vjb25kYXJ5LWNvbG9yIDYzJSk7XHJcbiAgaW9uLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcbiAgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIC5oZWFkZXItYmFjayB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7IGZvbnQtc2l6ZTogMzBweDsgY29sb3I6ICM2NjY7XHJcbiAgICB9XHJcbiAgICAubG9nby1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgICAubG9nby10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7IGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIH1cclxuICAgICAgLnNsb2dhbi10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pY29ucy1saXN0IHtcclxuICAgICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAuaWNvbi1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgICAgJi5jYXJ0LWljb24ge1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDE1cHggMCA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4OyBjb2xvcjogJHByaW1hcnktY29sb3JcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmhlYWRlci1jb250YWluZXIge1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzA1ZGVnLCAjQkQxRTUxIDIlLCAjMjY1NzkxIDYzJSk7XG59XG4uaGVhZGVyLWNvbnRhaW5lciBpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIgLmhlYWRlci1iYWNrIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzY2Njtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAubG9nby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBsaW5lLWhlaWdodDogMS4xO1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5sb2dvLWNvbnRhaW5lciAubG9nby10ZXh0IHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5sb2dvLWNvbnRhaW5lciAuc2xvZ2FuLXRleHQge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5pY29ucy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5pY29ucy1saXN0IC5pY29uLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCA1cHg7XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIgLmljb25zLWxpc3QgLmljb24tY29udGFpbmVyLmNhcnQtaWNvbiB7XG4gIG1hcmdpbjogMCAxNXB4IDAgNXB4O1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5pY29ucy1saXN0IC5pY29uLWNvbnRhaW5lciBpIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI0JEMUU1MTtcbn0iLCIvLyBwcmV2aW91cyBUaGVtZVxyXG4vLyRwcmltYXJ5LWNvbG9yOiAjZTk1YzhmO1xyXG4vLyRzZWNvbmRhcnktY29sb3I6ICM2MTRkN2Y7XHJcblxyXG4vLyBOZXcgVGhlbWVcclxuJHByaW1hcnktY29sb3I6ICNCRDFFNTE7XHJcbiRzZWNvbmRhcnktY29sb3I6ICMyNjU3OTE7XHJcblxyXG4kcmVndWxhci1mb250LXNpemU6IDE0cHg7XHJcbiRmb250LXNpemUtMTogMTZweDtcclxuJGhlYWRlci1zaXplOiAyMHB4O1xyXG4kZm9udC1zaXplLTM6IDMwcHg7XHJcblxyXG4kYnV0dG9uLWhlaWdodDogNDVweDtcclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/shared-components/back-logo-component/back-logo-component.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shared-components/back-logo-component/back-logo-component.page.ts ***!
  \***********************************************************************************/
/*! exports provided: BackLogoComponentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackLogoComponentPage", function() { return BackLogoComponentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let BackLogoComponentPage = class BackLogoComponentPage {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() { }
    backClicked() {
        this.location.back();
    }
};
BackLogoComponentPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
BackLogoComponentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'back-logo-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./back-logo-component.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/back-logo-component/back-logo-component.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./back-logo-component.page.scss */ "./src/app/shared-components/back-logo-component/back-logo-component.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
], BackLogoComponentPage);



/***/ })

}]);
//# sourceMappingURL=pages-payment-payment-module-es2015.js.map