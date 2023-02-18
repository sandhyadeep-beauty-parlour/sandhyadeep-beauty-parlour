function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSettingsSettingsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sandhyadeep-header class=\"z-index-99\"></sandhyadeep-header>\r\n\r\n<ion-content>\r\n    <div class=\"profile-bg\"></div>\r\n    <div class=\"profile-image-container\">\r\n        <img alt=\"\" src=\"/assets/icon/profile-icon.png\">\r\n        <div class=\"profile-text-container\">\r\n            <div class=\"profile-text\"> Alexander Jimmy</div>\r\n            <div class=\"user-type\">Customer</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"login-container\">\r\n        <div class=\"login-menus\">\r\n            <div><button mat-button color=\"primary\">Manage Profile</button></div>\r\n            <div><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></div>\r\n        </div>\r\n        <div class=\"login-menus\">\r\n            <div><button mat-button color=\"primary\">Mobile Number</button></div>\r\n            <div>99xxxxxx765</div>\r\n        </div>\r\n        <div class=\"login-menus\">\r\n            <div><button mat-button color=\"primary\">Email</button></div>\r\n            <div>aashishbhagwat@gmail.com</div>\r\n        </div>\r\n        <div class=\"login-menus\">\r\n            <div><button mat-button color=\"primary\">change Password</button></div>\r\n            <div><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></div>\r\n        </div>\r\n\r\n        <hr/>\r\n\r\n        <div class=\"login-menus\">\r\n            <div><button mat-button color=\"primary\">Wallet Amount</button></div>\r\n            <div>0.0 (₹)</div>\r\n        </div>\r\n        <div class=\"login-menus\">\r\n            <div><button mat-button color=\"primary\">Log Out</button></div>\r\n            <div><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/settings/settings-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/settings/settings-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: SettingsPageRoutingModule */

  /***/
  function srcAppPagesSettingsSettingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function () {
      return SettingsPageRoutingModule;
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


    var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./settings.page */
    "./src/app/pages/settings/settings.page.ts");

    var routes = [{
      path: '',
      component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }];

    var SettingsPageRoutingModule = function SettingsPageRoutingModule() {
      _classCallCheck(this, SettingsPageRoutingModule);
    };

    SettingsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SettingsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/settings/settings.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/settings/settings.module.ts ***!
    \***************************************************/

  /*! exports provided: SettingsPageModule */

  /***/
  function srcAppPagesSettingsSettingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function () {
      return SettingsPageModule;
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


    var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./settings-routing.module */
    "./src/app/pages/settings/settings-routing.module.ts");
    /* harmony import */


    var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./settings.page */
    "./src/app/pages/settings/settings.page.ts");
    /* harmony import */


    var _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared-components/header-component/header-component.module */
    "./src/app/shared-components/header-component/header-component.module.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var SettingsPageModule = function SettingsPageModule() {
      _classCallCheck(this, SettingsPageModule);
    };

    SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"], _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"]],
      declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })], SettingsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/settings/settings.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/settings/settings.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSettingsSettingsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".settings-container {\n  margin: 10px 15px;\n}\n\n.profile-bg {\n  height: 209px;\n  width: 110%;\n  box-shadow: 0 1px 10px rgba(98, 140, 255, 0.5);\n  transform: rotate(-14deg);\n  border-radius: 24px 10px 35px 100px;\n  margin-left: -18px;\n  margin-top: -81px;\n  margin-bottom: 60px;\n  background: linear-gradient(225deg, #e95c8f 2%, #614d7f 63%);\n}\n\n.profile-image-container {\n  position: absolute;\n  top: 20px;\n  left: 10%;\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n\n.profile-image-container img {\n  width: 90px;\n  height: 90px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  overflow: hidden;\n  border-radius: 50%;\n  border: 2px solid white;\n}\n\n.profile-image-container .profile-text-container {\n  padding: 10px 20px;\n  line-height: 1.3;\n  color: white;\n}\n\n.profile-image-container .profile-text-container .user-type {\n  opacity: 0.6;\n}\n\n.profile-image-container .profile-text-container .profile-text {\n  font-size: 23px;\n}\n\n.login-container {\n  margin: 0 25px;\n}\n\n.login-container .login-menus {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.login-container .login-menus div {\n  display: flex;\n  flex-basis: 50%;\n}\n\n.login-container .login-menus div:nth-child(2) {\n  justify-content: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2V0dGluZ3MvQzpcXFVzZXJzXFxhYWJoYWd3YVxcc2FuZGh5YWRlZXAgaW9uaWMgc3RhY2svc3JjXFxhcHBcXHBhZ2VzXFxzZXR0aW5nc1xcc2V0dGluZ3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSw4Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0REFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURBRTtFQUNFLFlBQUE7QUNFSjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURBRTtFQUNFLGFBQUE7RUFBZSw4QkFBQTtFQUFnQyxtQkFBQTtBQ0luRDs7QURISTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FDS047O0FESk07RUFDRSxzQkFBQTtBQ01SIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldHRpbmdzLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLWJnIHtcclxuICBoZWlnaHQ6IDIwOXB4O1xyXG4gIHdpZHRoOiAxMTAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDEwcHggcmdiKDk4IDE0MCAyNTUgLyA1MCUpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC0xNGRlZyk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjRweCAxMHB4IDM1cHggMTAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xOHB4O1xyXG4gIG1hcmdpbi10b3A6IC04MXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgI2U5NWM4ZiAyJSwgIzYxNGQ3ZiA2MyUpO1xyXG59XHJcblxyXG4ucHJvZmlsZS1pbWFnZS1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwcHg7XHJcbiAgbGVmdDogMTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2ZpbGUtaW1hZ2UtY29udGFpbmVyIGltZyB7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4ucHJvZmlsZS1pbWFnZS1jb250YWluZXIgLnByb2ZpbGUtdGV4dC1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBsaW5lLWhlaWdodDogMS4zO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAudXNlci10eXBlIHtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9maWxlLWltYWdlLWNvbnRhaW5lciAucHJvZmlsZS10ZXh0LWNvbnRhaW5lciAucHJvZmlsZS10ZXh0IHtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIge1xyXG4gIG1hcmdpbjogMCAyNXB4O1xyXG4gIC5sb2dpbi1tZW51cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXYge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWJhc2lzOiA1MCU7XHJcbiAgICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5zZXR0aW5ncy1jb250YWluZXIge1xuICBtYXJnaW46IDEwcHggMTVweDtcbn1cblxuLnByb2ZpbGUtYmcge1xuICBoZWlnaHQ6IDIwOXB4O1xuICB3aWR0aDogMTEwJTtcbiAgYm94LXNoYWRvdzogMCAxcHggMTBweCByZ2JhKDk4LCAxNDAsIDI1NSwgMC41KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE0ZGVnKTtcbiAgYm9yZGVyLXJhZGl1czogMjRweCAxMHB4IDM1cHggMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMThweDtcbiAgbWFyZ2luLXRvcDogLTgxcHg7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICNlOTVjOGYgMiUsICM2MTRkN2YgNjMlKTtcbn1cblxuLnByb2ZpbGUtaW1hZ2UtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDEwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9maWxlLWltYWdlLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuLnByb2ZpbGUtaW1hZ2UtY29udGFpbmVyIC5wcm9maWxlLXRleHQtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBjb2xvcjogd2hpdGU7XG59XG4ucHJvZmlsZS1pbWFnZS1jb250YWluZXIgLnByb2ZpbGUtdGV4dC1jb250YWluZXIgLnVzZXItdHlwZSB7XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuLnByb2ZpbGUtaW1hZ2UtY29udGFpbmVyIC5wcm9maWxlLXRleHQtY29udGFpbmVyIC5wcm9maWxlLXRleHQge1xuICBmb250LXNpemU6IDIzcHg7XG59XG5cbi5sb2dpbi1jb250YWluZXIge1xuICBtYXJnaW46IDAgMjVweDtcbn1cbi5sb2dpbi1jb250YWluZXIgLmxvZ2luLW1lbnVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxvZ2luLWNvbnRhaW5lciAubG9naW4tbWVudXMgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1iYXNpczogNTAlO1xufVxuLmxvZ2luLWNvbnRhaW5lciAubG9naW4tbWVudXMgZGl2Om50aC1jaGlsZCgyKSB7XG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/settings/settings.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/settings/settings.page.ts ***!
    \*************************************************/

  /*! exports provided: SettingsPage */

  /***/
  function srcAppPagesSettingsSettingsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPage", function () {
      return SettingsPage;
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


    var _shared_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared-service.service */
    "./src/app/shared-service.service.ts");

    var SettingsPage = /*#__PURE__*/function () {
      function SettingsPage(sharedService) {
        _classCallCheck(this, SettingsPage);

        this.sharedService = sharedService;
      }

      _createClass(SettingsPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.sharedService.onSettingEvent.next(true);
        } // when Application will leave the page

      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.sharedService.onSettingEvent.next(false);
        }
      }]);

      return SettingsPage;
    }();

    SettingsPage.ctorParameters = function () {
      return [{
        type: _shared_service_service__WEBPACK_IMPORTED_MODULE_2__["SharedServiceService"]
      }];
    };

    SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./settings.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./settings.page.scss */
      "./src/app/pages/settings/settings.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_service__WEBPACK_IMPORTED_MODULE_2__["SharedServiceService"]])], SettingsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-settings-settings-module-es5.js.map