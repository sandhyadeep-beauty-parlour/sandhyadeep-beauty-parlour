function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-packages-packages-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/packages/packages.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/packages/packages.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPackagesPackagesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<search-header></search-header>\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/search-header-component/search-header-component.page.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/search-header-component/search-header-component.page.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsSearchHeaderComponentSearchHeaderComponentPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header-container\">\n  <ion-header>\n    <div class=\"search-header-container\">\n      <div (click)=\"backClicked()\" class=\"header-back\">\n        <i class=\"fa fa-angle-left\"></i>\n      </div>\n      <div class=\"header-search\">\n        <ion-searchbar color=\"light\" class=\"search-bar\" placeholder=\"Search\"></ion-searchbar>\n      </div>\n      <div class=\"icons-list\">\n        <div class=\"icon-container\">\n          <i class=\"fa fa-bell\"></i>\n        </div>\n        <div class=\"icon-container \">\n          <i class=\"fa fa-search\"></i>\n        </div>\n        <div class=\"icon-container cart-icon\">\n          <i class=\"fa fa-shopping-cart\"></i>\n        </div>\n\n      </div>\n    </div>\n  </ion-header>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/pages/packages/packages-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/packages/packages-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: PackagesRoutingModule */

  /***/
  function srcAppPagesPackagesPackagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PackagesRoutingModule", function () {
      return PackagesRoutingModule;
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


    var _packages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./packages.page */
    "./src/app/pages/packages/packages.page.ts");

    var routes = [{
      path: '',
      component: _packages_page__WEBPACK_IMPORTED_MODULE_3__["PackagesPage"]
    }];

    var PackagesRoutingModule = function PackagesRoutingModule() {
      _classCallCheck(this, PackagesRoutingModule);
    };

    PackagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PackagesRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/packages/packages.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/packages/packages.module.ts ***!
    \***************************************************/

  /*! exports provided: PackagesModule */

  /***/
  function srcAppPagesPackagesPackagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PackagesModule", function () {
      return PackagesModule;
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


    var _packages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./packages-routing.module */
    "./src/app/pages/packages/packages-routing.module.ts");
    /* harmony import */


    var _packages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./packages.page */
    "./src/app/pages/packages/packages.page.ts");
    /* harmony import */


    var _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared-components/header-component/header-component.module */
    "./src/app/shared-components/header-component/header-component.module.ts");
    /* harmony import */


    var _shared_components_search_header_component_search_header_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared-components/search-header-component/search-header-component.module */
    "./src/app/shared-components/search-header-component/search-header-component.module.ts");

    var PackagesModule = function PackagesModule() {
      _classCallCheck(this, PackagesModule);
    };

    PackagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _packages_routing_module__WEBPACK_IMPORTED_MODULE_5__["PackagesRoutingModule"], _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"], _shared_components_search_header_component_search_header_component_module__WEBPACK_IMPORTED_MODULE_8__["SearchHeaderComponentModule"]],
      declarations: [_packages_page__WEBPACK_IMPORTED_MODULE_6__["PackagesPage"]]
    })], PackagesModule);
    /***/
  },

  /***/
  "./src/app/pages/packages/packages.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/packages/packages.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPackagesPackagesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhY2thZ2VzL3BhY2thZ2VzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/packages/packages.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/packages/packages.page.ts ***!
    \*************************************************/

  /*! exports provided: PackagesPage */

  /***/
  function srcAppPagesPackagesPackagesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PackagesPage", function () {
      return PackagesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PackagesPage = /*#__PURE__*/function () {
      function PackagesPage() {
        _classCallCheck(this, PackagesPage);
      }

      _createClass(PackagesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PackagesPage;
    }();

    PackagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-messages',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./packages.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/packages/packages.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./packages.page.scss */
      "./src/app/pages/packages/packages.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PackagesPage);
    /***/
  },

  /***/
  "./src/app/shared-components/search-header-component/search-header-component.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/shared-components/search-header-component/search-header-component.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: SearchHeaderComponentModule */

  /***/
  function srcAppSharedComponentsSearchHeaderComponentSearchHeaderComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchHeaderComponentModule", function () {
      return SearchHeaderComponentModule;
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


    var _search_header_component_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./search-header-component.page */
    "./src/app/shared-components/search-header-component/search-header-component.page.ts");

    var SearchHeaderComponentModule = function SearchHeaderComponentModule() {
      _classCallCheck(this, SearchHeaderComponentModule);
    };

    SearchHeaderComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
      exports: [_search_header_component_page__WEBPACK_IMPORTED_MODULE_5__["SearchHeaderComponentPage"]],
      declarations: [_search_header_component_page__WEBPACK_IMPORTED_MODULE_5__["SearchHeaderComponentPage"]]
    })], SearchHeaderComponentModule);
    /***/
  },

  /***/
  "./src/app/shared-components/search-header-component/search-header-component.page.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/shared-components/search-header-component/search-header-component.page.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsSearchHeaderComponentSearchHeaderComponentPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-container {\n  padding-bottom: 3px;\n  background: linear-gradient(305deg, #cc2b5e 2%, #753a88 63%);\n}\n.header-container ion-header {\n  background: white;\n}\n.header-container .search-header-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-container .search-header-container .header-back {\n  padding: 15px;\n  font-size: 30px;\n  color: #666;\n}\n.header-container .search-header-container .header-search {\n  display: flex;\n  flex-basis: 70%;\n}\n.header-container .search-header-container .icons-list {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-container .search-header-container .icons-list .icon-container {\n  margin: 0 5px;\n}\n.header-container .search-header-container .icons-list .icon-container.cart-icon {\n  margin: 0 15px 0 5px;\n}\n.header-container .search-header-container .icons-list .icon-container i {\n  font-size: 22px;\n  color: #cc2b5e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL3NlYXJjaC1oZWFkZXItY29tcG9uZW50L3NlYXJjaC1oZWFkZXItY29tcG9uZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvc2VhcmNoLWhlYWRlci1jb21wb25lbnQvc2VhcmNoLWhlYWRlci1jb21wb25lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSw0REFBQTtBQ0NGO0FEQUU7RUFDRSxpQkFBQTtBQ0VKO0FEQUU7RUFDRSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsOEJBQUE7QUNJeEM7QURISTtFQUNFLGFBQUE7RUFBZSxlQUFBO0VBQWlCLFdBQUE7QUNPdEM7QURMSTtFQUNFLGFBQUE7RUFBZSxlQUFBO0FDUXJCO0FESEk7RUFDRSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsOEJBQUE7QUNPMUM7QUROTTtFQUNFLGFBQUE7QUNRUjtBRFBRO0VBQ0Usb0JBQUE7QUNTVjtBRFBRO0VBQ0UsZUFBQTtFQUFpQixjQUFBO0FDVTNCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvc2VhcmNoLWhlYWRlci1jb21wb25lbnQvc2VhcmNoLWhlYWRlci1jb21wb25lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1jb250YWluZXIge1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzA1ZGVnLCAjY2MyYjVlIDIlLCAjNzUzYTg4IDYzJSk7XG4gIGlvbi1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICB9XG4gIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC5oZWFkZXItYmFjayB7XG4gICAgICBwYWRkaW5nOiAxNXB4OyBmb250LXNpemU6IDMwcHg7IGNvbG9yOiAjNjY2O1xuICAgIH1cbiAgICAuaGVhZGVyLXNlYXJjaCB7XG4gICAgICBkaXNwbGF5OiBmbGV4OyBmbGV4LWJhc2lzOiA3MCU7XG4gICAgICAuc2VhcmNoLWJhciB7XG5cbiAgICAgIH1cbiAgICB9XG4gICAgLmljb25zLWxpc3Qge1xuICAgICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgLmljb24tY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgJi5jYXJ0LWljb24ge1xuICAgICAgICAgIG1hcmdpbjogMCAxNXB4IDAgNXB4O1xuICAgICAgICB9XG4gICAgICAgIGkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDsgY29sb3I6ICNjYzJiNWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmhlYWRlci1jb250YWluZXIge1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzA1ZGVnLCAjY2MyYjVlIDIlLCAjNzUzYTg4IDYzJSk7XG59XG4uaGVhZGVyLWNvbnRhaW5lciBpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIgLmhlYWRlci1iYWNrIHtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzY2Njtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyLXNlYXJjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtYmFzaXM6IDcwJTtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAuaWNvbnMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAuaWNvbnMtbGlzdCAuaWNvbi1jb250YWluZXIge1xuICBtYXJnaW46IDAgNXB4O1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5pY29ucy1saXN0IC5pY29uLWNvbnRhaW5lci5jYXJ0LWljb24ge1xuICBtYXJnaW46IDAgMTVweCAwIDVweDtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAuaWNvbnMtbGlzdCAuaWNvbi1jb250YWluZXIgaSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICNjYzJiNWU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared-components/search-header-component/search-header-component.page.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/shared-components/search-header-component/search-header-component.page.ts ***!
    \*******************************************************************************************/

  /*! exports provided: SearchHeaderComponentPage */

  /***/
  function srcAppSharedComponentsSearchHeaderComponentSearchHeaderComponentPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchHeaderComponentPage", function () {
      return SearchHeaderComponentPage;
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

    var SearchHeaderComponentPage = /*#__PURE__*/function () {
      function SearchHeaderComponentPage(location) {
        _classCallCheck(this, SearchHeaderComponentPage);

        this.location = location;
      }

      _createClass(SearchHeaderComponentPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "backClicked",
        value: function backClicked() {
          this.location.back();
        }
      }]);

      return SearchHeaderComponentPage;
    }();

    SearchHeaderComponentPage.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }];
    };

    SearchHeaderComponentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'search-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search-header-component.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/search-header-component/search-header-component.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search-header-component.page.scss */
      "./src/app/shared-components/search-header-component/search-header-component.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])], SearchHeaderComponentPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-packages-packages-module-es5.js.map