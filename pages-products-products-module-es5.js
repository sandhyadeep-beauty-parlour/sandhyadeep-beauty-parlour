function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-products-products-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProductsProductsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sandhyadeep-header class=\"z-index-999\"></sandhyadeep-header>\r\n\r\n<ion-content>\r\n    <div class=\"feed-heading\">\r\n        <div class=\"heading-text\">\r\n            <b>Products</b>\r\n        </div>\r\n    </div>\r\n    <div style=\"border-bottom: 10px solid #d3d3d37a;\"></div>\r\n    <app-product-list [productList]=\"productList\"></app-product-list>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/products/products-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/products/products-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ProductsRoutingModule */

  /***/
  function srcAppPagesProductsProductsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function () {
      return ProductsRoutingModule;
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


    var _products_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./products.page */
    "./src/app/pages/products/products.page.ts");

    var routes = [{
      path: '',
      component: _products_page__WEBPACK_IMPORTED_MODULE_3__["ProductsPage"]
    }];

    var ProductsRoutingModule = function ProductsRoutingModule() {
      _classCallCheck(this, ProductsRoutingModule);
    };

    ProductsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductsRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/products/products.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/products/products.module.ts ***!
    \***************************************************/

  /*! exports provided: ProductsModule */

  /***/
  function srcAppPagesProductsProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsModule", function () {
      return ProductsModule;
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


    var _products_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./products-routing.module */
    "./src/app/pages/products/products-routing.module.ts");
    /* harmony import */


    var _products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./products.page */
    "./src/app/pages/products/products.page.ts");
    /* harmony import */


    var _shared_components_search_header_component_search_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared-components/search-header-component/search-header-component.module */
    "./src/app/shared-components/search-header-component/search-header-component.module.ts");
    /* harmony import */


    var _shared_components_add_button_add_button_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared-components/add-button/add-button.module */
    "./src/app/shared-components/add-button/add-button.module.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _shared_components_product_list_product_list_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared-components/product-list/product-list.module */
    "./src/app/shared-components/product-list/product-list.module.ts");
    /* harmony import */


    var _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../shared-components/header-component/header-component.module */
    "./src/app/shared-components/header-component/header-component.module.ts");

    var ProductsModule = function ProductsModule() {
      _classCallCheck(this, ProductsModule);
    };

    ProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductsRoutingModule"], _shared_components_search_header_component_search_header_component_module__WEBPACK_IMPORTED_MODULE_7__["SearchHeaderComponentModule"], _shared_components_add_button_add_button_module__WEBPACK_IMPORTED_MODULE_8__["AddButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"], _shared_components_product_list_product_list_module__WEBPACK_IMPORTED_MODULE_10__["ProductListModule"], _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_11__["HeaderModule"]],
      declarations: [_products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]]
    })], ProductsModule);
    /***/
  },

  /***/
  "./src/app/pages/products/products.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/products/products.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProductsProductsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".feed-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px 5px;\n}\n.feed-heading .heading-text {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvQzpcXFVzZXJzXFxhYWJoYWd3YVxcc2FuZGh5YWRlZXBcXHNhbmRoeWFkZWVwLXVpL3NyY1xcYXBwXFxwYWdlc1xccHJvZHVjdHNcXHByb2R1Y3RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxzYW5kaHlhZGVlcC10aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0RGO0FERUU7RUFDRSxlRUVVO0FERmQiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2FuZGh5YWRlZXAtdGhlbWVcIjtcclxuXHJcbi5mZWVkLWhlYWRpbmcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNXB4IDE1cHggNXB4O1xyXG4gIC5oZWFkaW5nLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAkaGVhZGVyLXNpemU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsIi5mZWVkLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweCAxNXB4IDVweDtcbn1cbi5mZWVkLWhlYWRpbmcgLmhlYWRpbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iLCIvLyBwcmV2aW91cyBUaGVtZVxyXG4vLyRwcmltYXJ5LWNvbG9yOiAjZTk1YzhmO1xyXG4vLyRzZWNvbmRhcnktY29sb3I6ICM2MTRkN2Y7XHJcblxyXG4vLyBOZXcgVGhlbWVcclxuJHByaW1hcnktY29sb3I6ICNCRDFFNTE7XHJcbiRzZWNvbmRhcnktY29sb3I6ICMyNjU3OTE7XHJcblxyXG4kcmVndWxhci1mb250LXNpemU6IDE0cHg7XHJcbiRmb250LXNpemUtMTogMTZweDtcclxuJGhlYWRlci1zaXplOiAyMHB4O1xyXG4kZm9udC1zaXplLTM6IDMwcHg7XHJcblxyXG4kYnV0dG9uLWhlaWdodDogNDVweDtcclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/products/products.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/products/products.page.ts ***!
    \*************************************************/

  /*! exports provided: ProductsPage */

  /***/
  function srcAppPagesProductsProductsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsPage", function () {
      return ProductsPage;
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


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared-service.service */
    "./src/app/shared-service.service.ts");

    var ProductsPage = /*#__PURE__*/function () {
      function ProductsPage(sharedService, adminService, router) {
        _classCallCheck(this, ProductsPage);

        this.sharedService = sharedService;
        this.adminService = adminService;
        this.router = router;
        this.productList = [];
      }

      _createClass(ProductsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getProducts();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.sharedService.showSearchBox.next(true);
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.sharedService.showSearchBox.next(false);
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          var _this = this;

          this.adminService.getProducts().subscribe(function (res) {
            return _this.getProductSuccess(res);
          }, function (error) {
            _this.adminService.commonError(error);
          });
        }
      }, {
        key: "getProductSuccess",
        value: function getProductSuccess(res) {
          this.productList = res;
          this.productList = this.productList.map(function (v) {
            v.showSpinner = false;
            return v;
          });
        }
      }]);

      return ProductsPage;
    }();

    ProductsPage.ctorParameters = function () {
      return [{
        type: _shared_service_service__WEBPACK_IMPORTED_MODULE_4__["SharedServiceService"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'products',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./products.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.page.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./products.page.scss */
      "./src/app/pages/products/products.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_service__WEBPACK_IMPORTED_MODULE_4__["SharedServiceService"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], ProductsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-products-products-module-es5.js.map