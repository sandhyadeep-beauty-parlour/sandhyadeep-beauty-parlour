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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header-container\">\r\n  <ion-header>\r\n    <div class=\"search-header-container\">\r\n      <div style=\"display: flex; justify-content: end; align-items: center\">\r\n        <div (click)=\"backClicked()\" class=\"header-back\">\r\n          <i class=\"fa fa-angle-left\"></i>\r\n        </div>\r\n        <div class=\"header-search\">\r\n          <div style=\"display: flex; align-items: center; justify-content: space-between;\">\r\n            <div style=\"width: 40px; border: 2px solid #666; padding: 1px; border-radius: 50%; overflow: hidden; display: inline-block; margin: 5px;\">\r\n              <img src=\"../../../assets/sandhyadeep-final-logo.png\">\r\n            </div>\r\n            <div class=\"logo-container\">\r\n              <div class=\"logo-text\">\r\n                Sandhyadeep\r\n              </div>\r\n              <div class=\"slogan-text\">\r\n                Have a hair affair with us\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"icons-list\">\r\n        <div class=\"icon-container\">\r\n          <i class=\"fa fa-bell\"></i>\r\n        </div>\r\n        <div class=\"icon-container \">\r\n          <i class=\"fa fa-search\"></i>\r\n        </div>\r\n        <div class=\"icon-container cart-icon\">\r\n          <i class=\"fa fa-shopping-cart\"></i>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </ion-header>\r\n</div>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".page-container .total-bill-container {\n  text-align: left;\n  padding: 0 20px;\n  font-size: 16px;\n}\n.page-container .total-bill-container .bill-header {\n  padding: 10px 0 5px;\n  border-bottom: 1px solid lightgray;\n}\n.page-container .total-bill-container .bill-details {\n  padding: 5px 0;\n  border-bottom: 1px solid lightgray;\n}\n.page-container .total-bill-container .display-flex {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.page-container .total-bill-container .display-flex .apply-coupon {\n  color: #e95c8f;\n  font-size: 14px;\n}\n.page-container .total-bill-container .total-bill-details {\n  padding: 5px 0;\n}\n.border-bottom {\n  border-bottom: 1px solid #d3d3d396;\n}\n.item-list .item-container {\n  margin-bottom: 15px;\n  padding: 0 15px;\n}\n.item-list .item-container .main-item-name-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px 0;\n}\n.item-list .item-container .main-item-name-container:last-child {\n  border-bottom: none;\n}\n.item-list .item-container .main-item-name-container .main-item-name-sub-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.item-list .item-container .main-item-name-container .main-item-name-sub-container img {\n  margin-right: 10px;\n  width: 35px;\n  height: 35px;\n}\n.item-list .item-container .main-item-name-container .main-item-arrow {\n  color: #666;\n}\n.item-list .item-container .sub-item-list {\n  max-height: 0;\n  overflow-y: hidden;\n  transition: ease-in-out 400ms max-height;\n}\n.item-list .item-container .sub-item-list.opened {\n  padding: 10px 0;\n  max-height: 100%;\n  transition: ease-in-out 600ms max-height;\n}\n.item-list .item-container .sub-item-list .sub-item-container {\n  display: flex;\n  padding: 5px 0;\n  border-bottom: 1px solid #d3d3d396;\n  justify-content: space-between;\n  align-items: center;\n}\n.item-list .item-container .sub-item-list .sub-item-container .sub-item-name {\n  flex-basis: 50%;\n  line-height: 0.7;\n}\n.item-list .item-container .sub-item-list .sub-item-container .sub-item-name .name {\n  font-size: 16px;\n}\n.item-list .item-container .sub-item-list .sub-item-container .sub-item-name .time {\n  font-size: 14px;\n  color: #666;\n}\n.item-list .item-container .sub-item-list .sub-item-container .sub-item-checkbox {\n  display: flex;\n}\n.down {\n  transform: rotate(90deg);\n  -webkit-transform: rotate(90deg);\n  transition: ease-in-out 300ms;\n}\n.color-666 {\n  color: #666;\n}\n.page-heading {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  padding: 5px 15px 5px;\n}\n.page-heading .heading-text {\n  font-size: 20px;\n}\n.coupon-footer {\n  display: flex;\n  justify-content: space-around;\n  border-top: 1px solid lightgray;\n}\n.coupon-footer .coupon-button-container {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n.coupon-footer .coupon-button-container .coupon-discount {\n  font-size: 24px;\n}\n.coupon-footer .coupon-button-container .details {\n  color: #e95c8f;\n  font-weight: bold;\n}\n.custom-input-container {\n  padding: 5px;\n}\n.custom-input-container .custom-input-box {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  min-height: 44px;\n}\n.custom-input-container .custom-input-box .custom-input {\n  height: 100%;\n}\n.custom-input-container .custom-input-box .custom-input.flex-70 {\n  flex-basis: 70%;\n}\n.custom-input-container .custom-input-box .custom-input.flex-90 {\n  flex-basis: 90%;\n}\n.custom-input-container .custom-input-box .custom-input input {\n  width: 100%;\n  background: transparent;\n  border: none;\n}\n.custom-input-container .custom-input-box .custom-input input:focus {\n  border: none;\n}\n.custom-input-container .custom-input-box .custom-input-button {\n  color: #e95c8f;\n}\n.custom-input-container .custom-input-box .custom-input-button img {\n  margin-right: 10px;\n  width: 35px;\n  height: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxhcHBcXHBhZ2VzXFxwYXltZW50XFxwYXltZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGF5bWVudC9wYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNBSjtBRENJO0VBQ0UsbUJBQUE7RUFDQSxrQ0FBQTtBQ0NOO0FERUk7RUFDRSxjQUFBO0VBQ0Esa0NBQUE7QUNBTjtBREdJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNETjtBREVNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNBUjtBRElJO0VBQ0UsY0FBQTtBQ0ZOO0FET0E7RUFDRSxrQ0FBQTtBQ0pGO0FEUUU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUNMSjtBRE1JO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FDSk47QURLTTtFQUNFLG1CQUFBO0FDSFI7QURLTTtFQUNFLGFBQUE7RUFBZSx1QkFBQTtFQUF5QixtQkFBQTtBQ0RoRDtBREVRO0VBQ0Usa0JBQUE7RUFBb0IsV0FBQTtFQUFhLFlBQUE7QUNFM0M7QURDTTtFQUNFLFdBQUE7QUNDUjtBRElJO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUNGTjtBREdNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7QUNEUjtBREdNO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNEUjtBREVRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQVY7QURDVTtFQUNFLGVBQUE7QUNDWjtBRENVO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNDWjtBREdRO0VBQ0UsYUFBQTtBQ0RWO0FET0E7RUFDRSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUNKRjtBRE1BO0VBQ0UsV0FBQTtBQ0hGO0FETUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDSEY7QURJRTtFQUNFLGVBQUE7QUNGSjtBRE1BO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7QUNIRjtBRElFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNGSjtBREdJO0VBQ0UsZUFBQTtBQ0ROO0FER0k7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNETjtBRE1BO0VBQ0UsWUFBQTtBQ0hGO0FESUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBREdJO0VBQ0UsWUFBQTtBQ0ROO0FERU07RUFDRSxlQUFBO0FDQVI7QURFTTtFQUNFLGVBQUE7QUNBUjtBREVNO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0FSO0FEQ1E7RUFDRSxZQUFBO0FDQ1Y7QURHSTtFQUNFLGNBQUE7QUNETjtBREVNO0VBQ0Usa0JBQUE7RUFBb0IsV0FBQTtFQUFhLFlBQUE7QUNFekMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXltZW50L3BheW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVyIHtcclxuICAudG90YWwtYmlsbC1jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIC5iaWxsLWhlYWRlciB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMCA1cHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgLmJpbGwtZGV0YWlscyB7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgfVxyXG5cclxuICAgIC5kaXNwbGF5LWZsZXgge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC5hcHBseS1jb3Vwb24ge1xyXG4gICAgICAgIGNvbG9yOiAjZTk1YzhmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50b3RhbC1iaWxsLWRldGFpbHMge1xyXG4gICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ib3JkZXItYm90dG9tIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QzZDNkMzk2O1xyXG59XHJcblxyXG4uaXRlbS1saXN0IHtcclxuICAuaXRlbS1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIC5tYWluLWl0ZW0tbmFtZS1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgLm1haW4taXRlbS1uYW1lLXN1Yi1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IHdpZHRoOiAzNXB4OyBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5tYWluLWl0ZW0tYXJyb3cge1xyXG4gICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgIC5yaWdodC1pY29uIHtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5zdWItaXRlbS1saXN0IHtcclxuICAgICAgbWF4LWhlaWdodDogMDtcclxuICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCA0MDBtcyBtYXgtaGVpZ2h0O1xyXG4gICAgICAmLm9wZW5lZCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgNjAwbXMgbWF4LWhlaWdodDtcclxuICAgICAgfVxyXG4gICAgICAuc3ViLWl0ZW0tY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDNkM2QzOTY7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLnN1Yi1pdGVtLW5hbWUge1xyXG4gICAgICAgICAgZmxleC1iYXNpczogNTAlO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDAuNztcclxuICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRpbWUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc3ViLWl0ZW0tcHJpY2Uge31cclxuICAgICAgICAuc3ViLWl0ZW0tY2hlY2tib3gge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLmRvd24ge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAzMDBtcztcclxufVxyXG4uY29sb3ItNjY2IHtcclxuICBjb2xvcjogIzY2NjtcclxufVxyXG5cclxuLnBhZ2UtaGVhZGluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1cHggMTVweCA1cHg7XHJcbiAgLmhlYWRpbmctdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY291cG9uLWZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gIC5jb3Vwb24tYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLmNvdXBvbi1kaXNjb3VudCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxuICAgIC5kZXRhaWxzIHtcclxuICAgICAgY29sb3I6ICNlOTVjOGY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmN1c3RvbS1pbnB1dC1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICAuY3VzdG9tLWlucHV0LWJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQ0cHg7XHJcbiAgICAuY3VzdG9tLWlucHV0IHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAmLmZsZXgtNzAge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDcwJTtcclxuICAgICAgfVxyXG4gICAgICAmLmZsZXgtOTAge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDkwJTtcclxuICAgICAgfVxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmN1c3RvbS1pbnB1dC1idXR0b24ge1xyXG4gICAgICBjb2xvcjogI2U5NWM4ZjtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IHdpZHRoOiAzNXB4OyBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnBhZ2UtY29udGFpbmVyIC50b3RhbC1iaWxsLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLnBhZ2UtY29udGFpbmVyIC50b3RhbC1iaWxsLWNvbnRhaW5lciAuYmlsbC1oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4IDAgNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuLnBhZ2UtY29udGFpbmVyIC50b3RhbC1iaWxsLWNvbnRhaW5lciAuYmlsbC1kZXRhaWxzIHtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4ucGFnZS1jb250YWluZXIgLnRvdGFsLWJpbGwtY29udGFpbmVyIC5kaXNwbGF5LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucGFnZS1jb250YWluZXIgLnRvdGFsLWJpbGwtY29udGFpbmVyIC5kaXNwbGF5LWZsZXggLmFwcGx5LWNvdXBvbiB7XG4gIGNvbG9yOiAjZTk1YzhmO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ucGFnZS1jb250YWluZXIgLnRvdGFsLWJpbGwtY29udGFpbmVyIC50b3RhbC1iaWxsLWRldGFpbHMge1xuICBwYWRkaW5nOiA1cHggMDtcbn1cblxuLmJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QzZDNkMzk2O1xufVxuXG4uaXRlbS1saXN0IC5pdGVtLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbi5pdGVtLWxpc3QgLml0ZW0tY29udGFpbmVyIC5tYWluLWl0ZW0tbmFtZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuLml0ZW0tbGlzdCAuaXRlbS1jb250YWluZXIgLm1haW4taXRlbS1uYW1lLWNvbnRhaW5lcjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5pdGVtLWxpc3QgLml0ZW0tY29udGFpbmVyIC5tYWluLWl0ZW0tbmFtZS1jb250YWluZXIgLm1haW4taXRlbS1uYW1lLXN1Yi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pdGVtLWxpc3QgLml0ZW0tY29udGFpbmVyIC5tYWluLWl0ZW0tbmFtZS1jb250YWluZXIgLm1haW4taXRlbS1uYW1lLXN1Yi1jb250YWluZXIgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuLml0ZW0tbGlzdCAuaXRlbS1jb250YWluZXIgLm1haW4taXRlbS1uYW1lLWNvbnRhaW5lciAubWFpbi1pdGVtLWFycm93IHtcbiAgY29sb3I6ICM2NjY7XG59XG4uaXRlbS1saXN0IC5pdGVtLWNvbnRhaW5lciAuc3ViLWl0ZW0tbGlzdCB7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgNDAwbXMgbWF4LWhlaWdodDtcbn1cbi5pdGVtLWxpc3QgLml0ZW0tY29udGFpbmVyIC5zdWItaXRlbS1saXN0Lm9wZW5lZCB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgNjAwbXMgbWF4LWhlaWdodDtcbn1cbi5pdGVtLWxpc3QgLml0ZW0tY29udGFpbmVyIC5zdWItaXRlbS1saXN0IC5zdWItaXRlbS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA1cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkM2QzZDM5NjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLml0ZW0tbGlzdCAuaXRlbS1jb250YWluZXIgLnN1Yi1pdGVtLWxpc3QgLnN1Yi1pdGVtLWNvbnRhaW5lciAuc3ViLWl0ZW0tbmFtZSB7XG4gIGZsZXgtYmFzaXM6IDUwJTtcbiAgbGluZS1oZWlnaHQ6IDAuNztcbn1cbi5pdGVtLWxpc3QgLml0ZW0tY29udGFpbmVyIC5zdWItaXRlbS1saXN0IC5zdWItaXRlbS1jb250YWluZXIgLnN1Yi1pdGVtLW5hbWUgLm5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uaXRlbS1saXN0IC5pdGVtLWNvbnRhaW5lciAuc3ViLWl0ZW0tbGlzdCAuc3ViLWl0ZW0tY29udGFpbmVyIC5zdWItaXRlbS1uYW1lIC50aW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY2Njtcbn1cbi5pdGVtLWxpc3QgLml0ZW0tY29udGFpbmVyIC5zdWItaXRlbS1saXN0IC5zdWItaXRlbS1jb250YWluZXIgLnN1Yi1pdGVtLWNoZWNrYm94IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmRvd24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAzMDBtcztcbn1cblxuLmNvbG9yLTY2NiB7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4ucGFnZS1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMTVweCA1cHg7XG59XG4ucGFnZS1oZWFkaW5nIC5oZWFkaW5nLXRleHQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5jb3Vwb24tZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4uY291cG9uLWZvb3RlciAuY291cG9uLWJ1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jb3Vwb24tZm9vdGVyIC5jb3Vwb24tYnV0dG9uLWNvbnRhaW5lciAuY291cG9uLWRpc2NvdW50IHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLmNvdXBvbi1mb290ZXIgLmNvdXBvbi1idXR0b24tY29udGFpbmVyIC5kZXRhaWxzIHtcbiAgY29sb3I6ICNlOTVjOGY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY3VzdG9tLWlucHV0LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5jdXN0b20taW5wdXQtY29udGFpbmVyIC5jdXN0b20taW5wdXQtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtaW4taGVpZ2h0OiA0NHB4O1xufVxuLmN1c3RvbS1pbnB1dC1jb250YWluZXIgLmN1c3RvbS1pbnB1dC1ib3ggLmN1c3RvbS1pbnB1dCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jdXN0b20taW5wdXQtY29udGFpbmVyIC5jdXN0b20taW5wdXQtYm94IC5jdXN0b20taW5wdXQuZmxleC03MCB7XG4gIGZsZXgtYmFzaXM6IDcwJTtcbn1cbi5jdXN0b20taW5wdXQtY29udGFpbmVyIC5jdXN0b20taW5wdXQtYm94IC5jdXN0b20taW5wdXQuZmxleC05MCB7XG4gIGZsZXgtYmFzaXM6IDkwJTtcbn1cbi5jdXN0b20taW5wdXQtY29udGFpbmVyIC5jdXN0b20taW5wdXQtYm94IC5jdXN0b20taW5wdXQgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5jdXN0b20taW5wdXQtY29udGFpbmVyIC5jdXN0b20taW5wdXQtYm94IC5jdXN0b20taW5wdXQgaW5wdXQ6Zm9jdXMge1xuICBib3JkZXI6IG5vbmU7XG59XG4uY3VzdG9tLWlucHV0LWNvbnRhaW5lciAuY3VzdG9tLWlucHV0LWJveCAuY3VzdG9tLWlucHV0LWJ1dHRvbiB7XG4gIGNvbG9yOiAjZTk1YzhmO1xufVxuLmN1c3RvbS1pbnB1dC1jb250YWluZXIgLmN1c3RvbS1pbnB1dC1ib3ggLmN1c3RvbS1pbnB1dC1idXR0b24gaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = (".header-container {\n  padding-bottom: 3px;\n  background: linear-gradient(305deg, #e95c8f 2%, #614d7f 63%);\n}\n.header-container ion-header {\n  background: white;\n}\n.header-container .search-header-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-container .search-header-container .header-back {\n  padding: 10px;\n  font-size: 30px;\n  color: #666;\n}\n.header-container .search-header-container .logo-container {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.1;\n}\n.header-container .search-header-container .logo-container .logo-text {\n  font-size: 25px;\n  font-weight: 700;\n}\n.header-container .search-header-container .logo-container .slogan-text {\n  font-size: 10px;\n  padding: 0 5px;\n}\n.header-container .search-header-container .icons-list {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-container .search-header-container .icons-list .icon-container {\n  margin: 0 5px;\n}\n.header-container .search-header-container .icons-list .icon-container.cart-icon {\n  margin: 0 15px 0 5px;\n}\n.header-container .search-header-container .icons-list .icon-container i {\n  font-size: 22px;\n  color: #e95c8f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYmFjay1sb2dvLWNvbXBvbmVudC9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxhcHBcXHNoYXJlZC1jb21wb25lbnRzXFxiYWNrLWxvZ28tY29tcG9uZW50XFxiYWNrLWxvZ28tY29tcG9uZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYmFjay1sb2dvLWNvbXBvbmVudC9iYWNrLWxvZ28tY29tcG9uZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsNERBQUE7QUNDRjtBREFFO0VBQ0UsaUJBQUE7QUNFSjtBREFFO0VBQ0UsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLDhCQUFBO0FDSXhDO0FESEk7RUFDRSxhQUFBO0VBQWUsZUFBQTtFQUFpQixXQUFBO0FDT3RDO0FETEk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ09OO0FETk07RUFDRSxlQUFBO0VBQWlCLGdCQUFBO0FDU3pCO0FEUE07RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ1NSO0FETkk7RUFDRSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsOEJBQUE7QUNVMUM7QURUTTtFQUNFLGFBQUE7QUNXUjtBRFZRO0VBQ0Usb0JBQUE7QUNZVjtBRFZRO0VBQ0UsZUFBQTtFQUFpQixjQUFBO0FDYTNCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYmFjay1sb2dvLWNvbXBvbmVudC9iYWNrLWxvZ28tY29tcG9uZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMDVkZWcsICNlOTVjOGYgMiUsICM2MTRkN2YgNjMlKTtcclxuICBpb24taGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIH1cclxuICAuc2VhcmNoLWhlYWRlci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLmhlYWRlci1iYWNrIHtcclxuICAgICAgcGFkZGluZzogMTBweDsgZm9udC1zaXplOiAzMHB4OyBjb2xvcjogIzY2NjtcclxuICAgIH1cclxuICAgIC5sb2dvLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgICAgIC5sb2dvLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDsgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgfVxyXG4gICAgICAuc2xvZ2FuLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmljb25zLWxpc3Qge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIC5pY29uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgICAmLmNhcnQtaWNvbiB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMTVweCAwIDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7IGNvbG9yOiAjZTk1YzhmXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5oZWFkZXItY29udGFpbmVyIHtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMwNWRlZywgI2U5NWM4ZiAyJSwgIzYxNGQ3ZiA2MyUpO1xufVxuLmhlYWRlci1jb250YWluZXIgaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5oZWFkZXItYmFjayB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICM2NjY7XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIgLmxvZ28tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAubG9nby1jb250YWluZXIgLmxvZ28tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAubG9nby1jb250YWluZXIgLnNsb2dhbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiAwIDVweDtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAuaWNvbnMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAuaWNvbnMtbGlzdCAuaWNvbi1jb250YWluZXIge1xuICBtYXJnaW46IDAgNXB4O1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5pY29ucy1saXN0IC5pY29uLWNvbnRhaW5lci5jYXJ0LWljb24ge1xuICBtYXJnaW46IDAgMTVweCAwIDVweDtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAuaWNvbnMtbGlzdCAuaWNvbi1jb250YWluZXIgaSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICNlOTVjOGY7XG59Il19 */");

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