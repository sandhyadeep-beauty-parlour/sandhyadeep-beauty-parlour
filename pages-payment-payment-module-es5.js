function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-payment-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPaymentPaymentPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<back-logo-header></back-logo-header>\n<ion-content>\n  <div class=\"page-container\">\n      <div class=\"item-list\">\n        <div class=\"page-heading\">\n          <div class=\"heading-text\">\n            <b>Payments</b>\n          </div>\n        </div>\n        <div style=\"border-bottom: 5px solid #d3d3d396; border-top: 5px solid #d3d3d396; padding: 5px 0;\">\n          <div class=\"item-container\">\n            <div (click)=\"show = 'upi'\" class=\"main-item-name-container border-bottom\">\n              <div class=\"main-item-name-sub-container\">\n                <img src=\"assets/upi_payments.jpg\" alt=\"\">\n                <div [class.text-bold]=\"show === 'upi'\" class=\"main-item-name\">PHONE PAY/ GOOGLE PAY/ BHIM UPI</div>\n              </div>\n              <div class=\"main-item-arrow\">\n                <i class=\"right-icon fa fa-angle-right\" [class.down]=\"show === 'upi'\">\n\n                </i>\n              </div>\n            </div>\n            <div class=\"sub-item-list\" [class.opened]=\"show === 'upi'\">\n              <div class=\"sub-item-container\">\n                <div class=\"sub-item-name\">\n                  <label class=\"name\">jhaksjhdkjash</label>\n                </div>\n                <div class=\"sub-item-checkbox\">\n                  <ion-checkbox class=\"zoom-07\" color=\"primary\" ></ion-checkbox>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"item-container\">\n            <div (click)=\"show = 'cards'\" class=\"main-item-name-container border-bottom\">\n              <div class=\"main-item-name-sub-container\">\n                <img src=\"assets/cards-icon.png\" alt=\"\">\n                <div [class.text-bold]=\"show === 'cards'\" class=\"main-item-name\">CREDIT/DEBIT CARD</div>\n              </div>\n              <div class=\"main-item-arrow\">\n                <i class=\"right-icon fa fa-angle-right\" [class.down]=\"show === 'cards'\"></i>\n              </div>\n            </div>\n            <div class=\"sub-item-list\" [class.opened]=\"show === 'cards'\">\n              <div class=\"custom-input-container\">\n                <div class=\"custom-input-box\">\n                  <div class=\"custom-input flex-70\">\n                    <input placeholder=\"Card Number\" type=\"text\" />\n                  </div>\n                  <div class=\"custom-input-button\">\n                    <img src=\"assets/credit-card.png\" alt=\"\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"custom-input-container\">\n                <div class=\"custom-input-box\">\n                  <div class=\"custom-input flex-90\">\n                    <input placeholder=\"Name on card\" type=\"text\" />\n                  </div>\n                </div>\n              </div>\n              <div style=\"display: flex\">\n                <div style=\"padding-right: 5px; flex-basis: 70%\">\n                  <div class=\"custom-input-container\">\n                    <div class=\"custom-input-box\">\n                      <div class=\"custom-input flex-90\">\n                        <input placeholder=\"Valid Thru (MM/YY)\" type=\"text\" />\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div>\n                  <div class=\"custom-input-container\">\n                    <div class=\"custom-input-box\">\n                      <div class=\"custom-input flex-90\">\n                        <input placeholder=\"CVV\" type=\"text\" />\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"item-container\">\n            <div (click)=\"show = 'wallet'\" class=\"main-item-name-container border-bottom\">\n              <div class=\"main-item-name-sub-container\">\n                <img src=\"assets/wallet.png\" alt=\"\">\n                <div [class.text-bold]=\"show === 'wallet'\" class=\"main-item-name\">PAYTM/WALLETS</div>\n              </div>\n              <div class=\"main-item-arrow\">\n                <i class=\"right-icon fa fa-angle-right\" [class.down]=\"show === 'wallet'\"></i>\n              </div>\n            </div>\n            <div class=\"sub-item-list\" [class.opened]=\"show === 'wallet'\">\n              <div class=\"sub-item-container\">\n                <div class=\"sub-item-name\">\n                  <label class=\"name\">Debit Card</label>\n                </div>\n                <div class=\"sub-item-checkbox\">\n                  <ion-checkbox class=\"zoom-07\" color=\"primary\" ></ion-checkbox>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"item-container\">\n            <div (click)=\"show = 'net_banking'\" class=\"main-item-name-container\">\n              <div class=\"main-item-name-sub-container\">\n                <img src=\"assets/net-banking.png\" alt=\"\">\n                <div [class.text-bold]=\"show === 'net_banking'\" class=\"main-item-name\">NET BANKING</div>\n              </div>\n              <div class=\"main-item-arrow\">\n                <i class=\"right-icon fa fa-angle-right\" [class.down]=\"show === 'net_banking'\"></i>\n              </div>\n            </div>\n            <div class=\"sub-item-list\" [class.opened]=\"show === 'net_banking'\">\n              <div class=\"sub-item-container\">\n                <div class=\"sub-item-name\">\n                  <label class=\"name\">Debit Card</label>\n                </div>\n                <div class=\"sub-item-checkbox\">\n                  <ion-checkbox class=\"zoom-07\" color=\"primary\" ></ion-checkbox>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n    <div class=\"coupon-footer\">\n      <div class=\"coupon-button-container\">\n        <div class=\"coupon-discount\">600 ₹</div>\n        <div class=\"details\">View Details</div>\n      </div>\n      <div class=\"default-button\">\n        <button>PAY NOW</button>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/pages/payment/payment-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/payment/payment-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: PaymentRoutingModule */

  /***/
  function srcAppPagesPaymentPaymentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentRoutingModule", function () {
      return PaymentRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./payment.page */
    "./src/app/pages/payment/payment.page.ts");

    var routes = [{
      path: '',
      component: _payment_page__WEBPACK_IMPORTED_MODULE_3__["PaymentPage"]
    }];

    var PaymentRoutingModule = function PaymentRoutingModule() {
      _classCallCheck(this, PaymentRoutingModule);
    };

    PaymentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PaymentRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/payment/payment.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/payment/payment.module.ts ***!
    \*************************************************/

  /*! exports provided: PaymentModule */

  /***/
  function srcAppPagesPaymentPaymentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentModule", function () {
      return PaymentModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./payment-routing.module */
    "./src/app/pages/payment/payment-routing.module.ts");
    /* harmony import */


    var _payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./payment.page */
    "./src/app/pages/payment/payment.page.ts");
    /* harmony import */


    var _shared_components_back_logo_component_back_logo_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared-components/back-logo-component/back-logo-component.module */
    "./src/app/shared-components/back-logo-component/back-logo-component.module.ts");

    var PaymentModule = function PaymentModule() {
      _classCallCheck(this, PaymentModule);
    };

    PaymentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentRoutingModule"], _shared_components_back_logo_component_back_logo_component_module__WEBPACK_IMPORTED_MODULE_7__["BackLogoComponentModule"]],
      declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]]
    })], PaymentModule);
    /***/
  },

  /***/
  "./src/app/pages/payment/payment.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/payment/payment.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPaymentPaymentPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-container .total-bill-container {\n  text-align: left;\n  padding: 0 20px;\n  font-size: 16px;\n}\n.page-container .total-bill-container .bill-header {\n  padding: 10px 0 5px;\n  border-bottom: 1px solid lightgray;\n}\n.page-container .total-bill-container .bill-details {\n  padding: 5px 0;\n  border-bottom: 1px solid lightgray;\n}\n.page-container .total-bill-container .display-flex {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.page-container .total-bill-container .display-flex .apply-coupon {\n  color: #cc2b5e;\n  font-size: 14px;\n}\n.page-container .total-bill-container .total-bill-details {\n  padding: 5px 0;\n}\n.border-bottom {\n  border-bottom: 1px solid #d3d3d396;\n}\n.item-list .item-container {\n  margin-bottom: 15px;\n  padding: 0 15px;\n}\n.item-list .item-container .main-item-name-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px 0;\n}\n.item-list .item-container .main-item-name-container:last-child {\n  border-bottom: none;\n}\n.item-list .item-container .main-item-name-container .main-item-name-sub-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.item-list .item-container .main-item-name-container .main-item-name-sub-container img {\n  margin-right: 10px;\n  width: 35px;\n  height: 35px;\n}\n.item-list .item-container .main-item-name-container .main-item-arrow {\n  color: #666;\n}\n.item-list .item-container .sub-item-list {\n  max-height: 0;\n  overflow-y: hidden;\n  transition: ease-in-out 400ms max-height;\n}\n.item-list .item-container .sub-item-list.opened {\n  padding: 10px 0;\n  max-height: 100%;\n  transition: ease-in-out 600ms max-height;\n}\n.item-list .item-container .sub-item-list .sub-item-container {\n  display: flex;\n  padding: 5px 0;\n  border-bottom: 1px solid #d3d3d396;\n  justify-content: space-between;\n  align-items: center;\n}\n.item-list .item-container .sub-item-list .sub-item-container .sub-item-name {\n  flex-basis: 50%;\n  line-height: 0.7;\n}\n.item-list .item-container .sub-item-list .sub-item-container .sub-item-name .name {\n  font-size: 16px;\n}\n.item-list .item-container .sub-item-list .sub-item-container .sub-item-name .time {\n  font-size: 14px;\n  color: #666;\n}\n.item-list .item-container .sub-item-list .sub-item-container .sub-item-checkbox {\n  display: flex;\n}\n.down {\n  transform: rotate(90deg);\n  -webkit-transform: rotate(90deg);\n  transition: ease-in-out 300ms;\n}\n.color-666 {\n  color: #666;\n}\n.page-heading {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  padding: 5px 15px 5px;\n}\n.page-heading .heading-text {\n  font-size: 20px;\n}\n.coupon-footer {\n  display: flex;\n  justify-content: space-around;\n  border-top: 1px solid lightgray;\n}\n.coupon-footer .coupon-button-container {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n.coupon-footer .coupon-button-container .coupon-discount {\n  font-size: 24px;\n}\n.coupon-footer .coupon-button-container .details {\n  color: #cc2b5e;\n  font-weight: bold;\n}\n.default-button {\n  color: white;\n  padding: 15px;\n  margin: 15px 0;\n  display: flex;\n  border-radius: 7px;\n  justify-content: center;\n  text-align: center;\n  background: linear-gradient(225deg, #cc2b5e 2%, #753a88 63%);\n}\n.default-button button {\n  font-size: 16px;\n  font-weight: bold;\n  background: transparent;\n  color: white;\n}\n.custom-input-container {\n  padding: 5px;\n}\n.custom-input-container .custom-input-box {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  min-height: 44px;\n}\n.custom-input-container .custom-input-box .custom-input {\n  height: 100%;\n}\n.custom-input-container .custom-input-box .custom-input.flex-70 {\n  flex-basis: 70%;\n}\n.custom-input-container .custom-input-box .custom-input.flex-90 {\n  flex-basis: 90%;\n}\n.custom-input-container .custom-input-box .custom-input input {\n  width: 100%;\n  background: transparent;\n  border: none;\n}\n.custom-input-container .custom-input-box .custom-input input:focus {\n  border: none;\n}\n.custom-input-container .custom-input-box .custom-input-button {\n  color: #cc2b5e;\n}\n.custom-input-container .custom-input-box .custom-input-button img {\n  margin-right: 10px;\n  width: 35px;\n  height: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvYXBwL3BhZ2VzL3BheW1lbnQvcGF5bWVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BheW1lbnQvcGF5bWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDQUo7QURDSTtFQUNFLG1CQUFBO0VBQ0Esa0NBQUE7QUNDTjtBREVJO0VBQ0UsY0FBQTtFQUNBLGtDQUFBO0FDQU47QURHSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDRE47QURFTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDQVI7QURJSTtFQUNFLGNBQUE7QUNGTjtBRE9BO0VBQ0Usa0NBQUE7QUNKRjtBRFFFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDTEo7QURNSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ0pOO0FES007RUFDRSxtQkFBQTtBQ0hSO0FES007RUFDRSxhQUFBO0VBQWUsdUJBQUE7RUFBeUIsbUJBQUE7QUNEaEQ7QURFUTtFQUNFLGtCQUFBO0VBQW9CLFdBQUE7RUFBYSxZQUFBO0FDRTNDO0FEQ007RUFDRSxXQUFBO0FDQ1I7QURJSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FDRk47QURHTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0FDRFI7QURHTTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDRFI7QURFUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0FWO0FEQ1U7RUFDRSxlQUFBO0FDQ1o7QURDVTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDQ1o7QURHUTtFQUNFLGFBQUE7QUNEVjtBRE9BO0VBQ0Usd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FDSkY7QURNQTtFQUNFLFdBQUE7QUNIRjtBRE1BO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0hGO0FESUU7RUFDRSxlQUFBO0FDRko7QURNQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0FDSEY7QURJRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDRko7QURHSTtFQUNFLGVBQUE7QUNETjtBREdJO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDRE47QURNQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0REFBQTtBQ0hGO0FESUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNGSjtBRE1BO0VBQ0UsWUFBQTtBQ0hGO0FESUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBREdJO0VBQ0UsWUFBQTtBQ0ROO0FERU07RUFDRSxlQUFBO0FDQVI7QURFTTtFQUNFLGVBQUE7QUNBUjtBREVNO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0FSO0FEQ1E7RUFDRSxZQUFBO0FDQ1Y7QURHSTtFQUNFLGNBQUE7QUNETjtBREVNO0VBQ0Usa0JBQUE7RUFBb0IsV0FBQTtFQUFhLFlBQUE7QUNFekMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXltZW50L3BheW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVyIHtcbiAgLnRvdGFsLWJpbGwtY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgLmJpbGwtaGVhZGVyIHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMCA1cHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIH1cblxuICAgIC5iaWxsLWRldGFpbHMge1xuICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIH1cblxuICAgIC5kaXNwbGF5LWZsZXgge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAuYXBwbHktY291cG9uIHtcbiAgICAgICAgY29sb3I6ICNjYzJiNWU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudG90YWwtYmlsbC1kZXRhaWxzIHtcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIH1cbiAgfVxufVxuXG4uYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDNkM2QzOTY7XG59XG5cbi5pdGVtLWxpc3Qge1xuICAuaXRlbS1jb250YWluZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICAgIC5tYWluLWl0ZW0tbmFtZS1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICB9XG4gICAgICAubWFpbi1pdGVtLW5hbWUtc3ViLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBpbWcge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDsgd2lkdGg6IDM1cHg7IGhlaWdodDogMzVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLm1haW4taXRlbS1hcnJvdyB7XG4gICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAucmlnaHQtaWNvbiB7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnN1Yi1pdGVtLWxpc3Qge1xuICAgICAgbWF4LWhlaWdodDogMDtcbiAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDQwMG1zIG1heC1oZWlnaHQ7XG4gICAgICAmLm9wZW5lZCB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgNjAwbXMgbWF4LWhlaWdodDtcbiAgICAgIH1cbiAgICAgIC5zdWItaXRlbS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkM2QzZDM5NjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAuc3ViLWl0ZW0tbmFtZSB7XG4gICAgICAgICAgZmxleC1iYXNpczogNTAlO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjc7XG4gICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGltZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnN1Yi1pdGVtLXByaWNlIHt9XG4gICAgICAgIC5zdWItaXRlbS1jaGVja2JveCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLmRvd24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAzMDBtcztcbn1cbi5jb2xvci02NjYge1xuICBjb2xvcjogIzY2Njtcbn1cblxuLnBhZ2UtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDE1cHggNXB4O1xuICAuaGVhZGluZy10ZXh0IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cblxuLmNvdXBvbi1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgLmNvdXBvbi1idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLmNvdXBvbi1kaXNjb3VudCB7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuICAgIC5kZXRhaWxzIHtcbiAgICAgIGNvbG9yOiAjY2MyYjVlO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG59XG5cbi5kZWZhdWx0LWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgI2NjMmI1ZSAyJSwgIzc1M2E4OCA2MyUpO1xuICBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuLmN1c3RvbS1pbnB1dC1jb250YWluZXIge1xuICBwYWRkaW5nOiA1cHg7XG4gIC5jdXN0b20taW5wdXQtYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1pbi1oZWlnaHQ6IDQ0cHg7XG4gICAgLmN1c3RvbS1pbnB1dCB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAmLmZsZXgtNzAge1xuICAgICAgICBmbGV4LWJhc2lzOiA3MCU7XG4gICAgICB9XG4gICAgICAmLmZsZXgtOTAge1xuICAgICAgICBmbGV4LWJhc2lzOiA5MCU7XG4gICAgICB9XG4gICAgICBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmN1c3RvbS1pbnB1dC1idXR0b24ge1xuICAgICAgY29sb3I6ICNjYzJiNWU7XG4gICAgICBpbWcge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IHdpZHRoOiAzNXB4OyBoZWlnaHQ6IDM1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIucGFnZS1jb250YWluZXIgLnRvdGFsLWJpbGwtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ucGFnZS1jb250YWluZXIgLnRvdGFsLWJpbGwtY29udGFpbmVyIC5iaWxsLWhlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHggMCA1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4ucGFnZS1jb250YWluZXIgLnRvdGFsLWJpbGwtY29udGFpbmVyIC5iaWxsLWRldGFpbHMge1xuICBwYWRkaW5nOiA1cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5wYWdlLWNvbnRhaW5lciAudG90YWwtYmlsbC1jb250YWluZXIgLmRpc3BsYXktZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wYWdlLWNvbnRhaW5lciAudG90YWwtYmlsbC1jb250YWluZXIgLmRpc3BsYXktZmxleCAuYXBwbHktY291cG9uIHtcbiAgY29sb3I6ICNjYzJiNWU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wYWdlLWNvbnRhaW5lciAudG90YWwtYmlsbC1jb250YWluZXIgLnRvdGFsLWJpbGwtZGV0YWlscyB7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuXG4uYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDNkM2QzOTY7XG59XG5cbi5pdGVtLWxpc3QgLml0ZW0tY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuLml0ZW0tbGlzdCAuaXRlbS1jb250YWluZXIgLm1haW4taXRlbS1uYW1lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogNXB4IDA7XG59XG4uaXRlbS1saXN0IC5pdGVtLWNvbnRhaW5lciAubWFpbi1pdGVtLW5hbWUtY29udGFpbmVyOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLml0ZW0tbGlzdCAuaXRlbS1jb250YWluZXIgLm1haW4taXRlbS1uYW1lLWNvbnRhaW5lciAubWFpbi1pdGVtLW5hbWUtc3ViLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLml0ZW0tbGlzdCAuaXRlbS1jb250YWluZXIgLm1haW4taXRlbS1uYW1lLWNvbnRhaW5lciAubWFpbi1pdGVtLW5hbWUtc3ViLWNvbnRhaW5lciBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG59XG4uaXRlbS1saXN0IC5pdGVtLWNvbnRhaW5lciAubWFpbi1pdGVtLW5hbWUtY29udGFpbmVyIC5tYWluLWl0ZW0tYXJyb3cge1xuICBjb2xvcjogIzY2Njtcbn1cbi5pdGVtLWxpc3QgLml0ZW0tY29udGFpbmVyIC5zdWItaXRlbS1saXN0IHtcbiAgbWF4LWhlaWdodDogMDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCA0MDBtcyBtYXgtaGVpZ2h0O1xufVxuLml0ZW0tbGlzdCAuaXRlbS1jb250YWluZXIgLnN1Yi1pdGVtLWxpc3Qub3BlbmVkIHtcbiAgcGFkZGluZzogMTBweCAwO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCA2MDBtcyBtYXgtaGVpZ2h0O1xufVxuLml0ZW0tbGlzdCAuaXRlbS1jb250YWluZXIgLnN1Yi1pdGVtLWxpc3QgLnN1Yi1pdGVtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QzZDNkMzk2O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaXRlbS1saXN0IC5pdGVtLWNvbnRhaW5lciAuc3ViLWl0ZW0tbGlzdCAuc3ViLWl0ZW0tY29udGFpbmVyIC5zdWItaXRlbS1uYW1lIHtcbiAgZmxleC1iYXNpczogNTAlO1xuICBsaW5lLWhlaWdodDogMC43O1xufVxuLml0ZW0tbGlzdCAuaXRlbS1jb250YWluZXIgLnN1Yi1pdGVtLWxpc3QgLnN1Yi1pdGVtLWNvbnRhaW5lciAuc3ViLWl0ZW0tbmFtZSAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5pdGVtLWxpc3QgLml0ZW0tY29udGFpbmVyIC5zdWItaXRlbS1saXN0IC5zdWItaXRlbS1jb250YWluZXIgLnN1Yi1pdGVtLW5hbWUgLnRpbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjY2O1xufVxuLml0ZW0tbGlzdCAuaXRlbS1jb250YWluZXIgLnN1Yi1pdGVtLWxpc3QgLnN1Yi1pdGVtLWNvbnRhaW5lciAuc3ViLWl0ZW0tY2hlY2tib3gge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZG93biB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDMwMG1zO1xufVxuXG4uY29sb3ItNjY2IHtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5wYWdlLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweCAxNXB4IDVweDtcbn1cbi5wYWdlLWhlYWRpbmcgLmhlYWRpbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmNvdXBvbi1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5jb3Vwb24tZm9vdGVyIC5jb3Vwb24tYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNvdXBvbi1mb290ZXIgLmNvdXBvbi1idXR0b24tY29udGFpbmVyIC5jb3Vwb24tZGlzY291bnQge1xuICBmb250LXNpemU6IDI0cHg7XG59XG4uY291cG9uLWZvb3RlciAuY291cG9uLWJ1dHRvbi1jb250YWluZXIgLmRldGFpbHMge1xuICBjb2xvcjogI2NjMmI1ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kZWZhdWx0LWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgI2NjMmI1ZSAyJSwgIzc1M2E4OCA2MyUpO1xufVxuLmRlZmF1bHQtYnV0dG9uIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0b20taW5wdXQtY29udGFpbmVyIHtcbiAgcGFkZGluZzogNXB4O1xufVxuLmN1c3RvbS1pbnB1dC1jb250YWluZXIgLmN1c3RvbS1pbnB1dC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1pbi1oZWlnaHQ6IDQ0cHg7XG59XG4uY3VzdG9tLWlucHV0LWNvbnRhaW5lciAuY3VzdG9tLWlucHV0LWJveCAuY3VzdG9tLWlucHV0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmN1c3RvbS1pbnB1dC1jb250YWluZXIgLmN1c3RvbS1pbnB1dC1ib3ggLmN1c3RvbS1pbnB1dC5mbGV4LTcwIHtcbiAgZmxleC1iYXNpczogNzAlO1xufVxuLmN1c3RvbS1pbnB1dC1jb250YWluZXIgLmN1c3RvbS1pbnB1dC1ib3ggLmN1c3RvbS1pbnB1dC5mbGV4LTkwIHtcbiAgZmxleC1iYXNpczogOTAlO1xufVxuLmN1c3RvbS1pbnB1dC1jb250YWluZXIgLmN1c3RvbS1pbnB1dC1ib3ggLmN1c3RvbS1pbnB1dCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xufVxuLmN1c3RvbS1pbnB1dC1jb250YWluZXIgLmN1c3RvbS1pbnB1dC1ib3ggLmN1c3RvbS1pbnB1dCBpbnB1dDpmb2N1cyB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5jdXN0b20taW5wdXQtY29udGFpbmVyIC5jdXN0b20taW5wdXQtYm94IC5jdXN0b20taW5wdXQtYnV0dG9uIHtcbiAgY29sb3I6ICNjYzJiNWU7XG59XG4uY3VzdG9tLWlucHV0LWNvbnRhaW5lciAuY3VzdG9tLWlucHV0LWJveCAuY3VzdG9tLWlucHV0LWJ1dHRvbiBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/payment/payment.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/payment/payment.page.ts ***!
    \***********************************************/

  /*! exports provided: PaymentPage */

  /***/
  function srcAppPagesPaymentPaymentPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentPage", function () {
      return PaymentPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PaymentPage = /*#__PURE__*/function () {
      function PaymentPage() {
        _classCallCheck(this, PaymentPage);

        this.show = '';
        this.imageUrl = '';
        this.selectedServices = [];
        this.serviceAmount = 0;
      }

      _createClass(PaymentPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PaymentPage;
    }();

    PaymentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'payments',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./payment.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./payment.page.scss */
      "./src/app/pages/payment/payment.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PaymentPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-payment-payment-module-es5.js.map