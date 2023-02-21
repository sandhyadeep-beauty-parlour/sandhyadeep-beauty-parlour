function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-services-services-module"], {
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


    __webpack_exports__["default"] = "<div class=\"header-container\">\r\n    <ion-header>\r\n        <div class=\"search-header-container\">\r\n           <div class=\"header-back-container\">\r\n               <div (click)=\"backClicked()\" class=\"header-back\">\r\n                   <i class=\"fa fa-angle-left\"></i>\r\n               </div>\r\n               <div class=\"header-search\">\r\n                   <ion-searchbar color=\"light\" class=\"search-bar\" placeholder=\"Search\"></ion-searchbar>\r\n               </div>\r\n           </div>\r\n            <div *ngIf=\"!hideProfileIcon\" [routerLink]=\"['/settings']\" class=\"profileIcon\">\r\n                <img src=\"assets/icon/profile-icon.png\" alt=\"\">\r\n            </div>\r\n        </div>\r\n    </ion-header>\r\n</div>\r\n";
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
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SearchHeaderComponentModule = function SearchHeaderComponentModule() {
      _classCallCheck(this, SearchHeaderComponentModule);
    };

    SearchHeaderComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]],
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


    __webpack_exports__["default"] = ".header-container {\n  padding-bottom: 3px;\n  z-index: 999;\n  background: linear-gradient(305deg, #e95c8f 2%, #614d7f 63%);\n}\n.header-container ion-header {\n  background: white;\n}\n.header-container .search-header-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-right: 10px;\n}\n.header-container .search-header-container .header-back-container {\n  flex: auto;\n  display: flex;\n}\n.header-back {\n  padding: 15px;\n  font-size: 30px;\n  color: #666;\n  display: flex;\n}\n.header-search {\n  display: flex;\n  width: 80%;\n  justify-content: center;\n  align-items: center;\n}\n.icons-list {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.icons-list .icon-container {\n  margin: 0 5px;\n}\n.icons-list .icon-container.cart-icon {\n  margin: 0 15px 0 5px;\n}\n.icons-list .icon-container i {\n  font-size: 22px;\n  color: #e95c8f;\n}\n.profileIcon img {\n  width: 40px;\n  height: 40px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  overflow: hidden;\n  border-radius: 50%;\n  border: 2px solid #614d7f;\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvc2VhcmNoLWhlYWRlci1jb21wb25lbnQvQzpcXFVzZXJzXFxhYWJoYWd3YVxcc2FuZGh5YWRlZXBcXHNhbmRoeWFkZWVwLXVpL3NyY1xcYXBwXFxzaGFyZWQtY29tcG9uZW50c1xcc2VhcmNoLWhlYWRlci1jb21wb25lbnRcXHNlYXJjaC1oZWFkZXItY29tcG9uZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvc2VhcmNoLWhlYWRlci1jb21wb25lbnQvc2VhcmNoLWhlYWRlci1jb21wb25lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNERBQUE7QUNDRjtBRENFO0VBQ0UsaUJBQUE7QUNDSjtBREVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0FKO0FERUk7RUFDRSxVQUFBO0VBQ0EsYUFBQTtBQ0FOO0FES0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDRkY7QURLQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0ZGO0FEU0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ1BGO0FEU0U7RUFDRSxhQUFBO0FDUEo7QURTSTtFQUNFLG9CQUFBO0FDUE47QURVSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDUk47QURjRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNYSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL3NlYXJjaC1oZWFkZXItY29tcG9uZW50L3NlYXJjaC1oZWFkZXItY29tcG9uZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzA1ZGVnLCAjZTk1YzhmIDIlLCAjNjE0ZDdmIDYzJSk7XHJcblxyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWhlYWRlci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG5cclxuICAgIC5oZWFkZXItYmFjay1jb250YWluZXIge1xyXG4gICAgICBmbGV4OiBhdXRvO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlci1iYWNrIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogIzY2NjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaGVhZGVyLXNlYXJjaCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogODAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5zZWFyY2gtYmFyIHtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4uaWNvbnMtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgLmljb24tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcblxyXG4gICAgJi5jYXJ0LWljb24ge1xyXG4gICAgICBtYXJnaW46IDAgMTVweCAwIDVweDtcclxuICAgIH1cclxuXHJcbiAgICBpIHtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICBjb2xvcjogI2U5NWM4ZlxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnByb2ZpbGVJY29uIHtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNjE0ZDdmO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gIH1cclxufVxyXG4iLCIuaGVhZGVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIHotaW5kZXg6IDk5OTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMwNWRlZywgI2U5NWM4ZiAyJSwgIzYxNGQ3ZiA2MyUpO1xufVxuLmhlYWRlci1jb250YWluZXIgaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5oZWFkZXItYmFjay1jb250YWluZXIge1xuICBmbGV4OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaGVhZGVyLWJhY2sge1xuICBwYWRkaW5nOiAxNXB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjNjY2O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaGVhZGVyLXNlYXJjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA4MCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmljb25zLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaWNvbnMtbGlzdCAuaWNvbi1jb250YWluZXIge1xuICBtYXJnaW46IDAgNXB4O1xufVxuLmljb25zLWxpc3QgLmljb24tY29udGFpbmVyLmNhcnQtaWNvbiB7XG4gIG1hcmdpbjogMCAxNXB4IDAgNXB4O1xufVxuLmljb25zLWxpc3QgLmljb24tY29udGFpbmVyIGkge1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjZTk1YzhmO1xufVxuXG4ucHJvZmlsZUljb24gaW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgIzYxNGQ3ZjtcbiAgcGFkZGluZzogMnB4O1xufSJdfQ== */";
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
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var SearchHeaderComponentPage = /*#__PURE__*/function () {
      function SearchHeaderComponentPage(navCtrl, location) {
        _classCallCheck(this, SearchHeaderComponentPage);

        this.navCtrl = navCtrl;
        this.location = location;
        this.hideProfileIcon = false;
      }

      _createClass(SearchHeaderComponentPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "backClicked",
        value: function backClicked() {
          this.navCtrl.back();
        }
      }]);

      return SearchHeaderComponentPage;
    }();

    SearchHeaderComponentPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])], SearchHeaderComponentPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-services-services-module-es5.js.map