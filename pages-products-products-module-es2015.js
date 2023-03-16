(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-products-products-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sandhyadeep-header class=\"z-index-999\"></sandhyadeep-header>\n\n<ion-content>\n    <div class=\"feed-heading\">\n        <div class=\"heading-text\">\n            <b>Products</b>\n        </div>\n    </div>\n    <div style=\"border-bottom: 10px solid #d3d3d37a;\"></div>\n    <app-product-list [productList]=\"productList\"></app-product-list>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/search-header-component/search-header-component.page.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/search-header-component/search-header-component.page.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header-container\">\n    <ion-header>\n        <div class=\"search-header-container\">\n           <div class=\"header-back-container\">\n               <div (click)=\"backClicked()\" class=\"header-back\">\n                   <i class=\"fa fa-angle-left\"></i>\n               </div>\n               <div class=\"header-search\">\n                   <ion-searchbar color=\"light\" class=\"search-bar\" placeholder=\"Search\"></ion-searchbar>\n               </div>\n           </div>\n            <div *ngIf=\"!hideProfileIcon\" [routerLink]=\"['/settings']\" class=\"profileIcon\">\n                <img src=\"assets/icon/profile-icon.png\" alt=\"\">\n            </div>\n        </div>\n    </ion-header>\n</div>\n");

/***/ }),

/***/ "./src/app/pages/products/products-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/products/products-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function() { return ProductsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.page */ "./src/app/pages/products/products.page.ts");




const routes = [
    {
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_3__["ProductsPage"]
    }
];
let ProductsRoutingModule = class ProductsRoutingModule {
};
ProductsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductsRoutingModule);



/***/ }),

/***/ "./src/app/pages/products/products.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.module.ts ***!
  \***************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/pages/products/products-routing.module.ts");
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products.page */ "./src/app/pages/products/products.page.ts");
/* harmony import */ var _shared_components_search_header_component_search_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared-components/search-header-component/search-header-component.module */ "./src/app/shared-components/search-header-component/search-header-component.module.ts");
/* harmony import */ var _shared_components_add_button_add_button_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared-components/add-button/add-button.module */ "./src/app/shared-components/add-button/add-button.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_components_product_list_product_list_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared-components/product-list/product-list.module */ "./src/app/shared-components/product-list/product-list.module.ts");
/* harmony import */ var _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared-components/header-component/header-component.module */ "./src/app/shared-components/header-component/header-component.module.ts");












let ProductsModule = class ProductsModule {
};
ProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _products_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductsRoutingModule"],
            _shared_components_search_header_component_search_header_component_module__WEBPACK_IMPORTED_MODULE_7__["SearchHeaderComponentModule"],
            _shared_components_add_button_add_button_module__WEBPACK_IMPORTED_MODULE_8__["AddButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
            _shared_components_product_list_product_list_module__WEBPACK_IMPORTED_MODULE_10__["ProductListModule"],
            _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_11__["HeaderModule"]
        ],
        declarations: [_products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]]
    })
], ProductsModule);



/***/ }),

/***/ "./src/app/pages/products/products.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".feed-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px 5px;\n}\n.feed-heading .heading-text {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL3NhbmRoeWFkZWVwLXRoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDREY7QURFRTtFQUNFLGVFRVU7QURGZCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zYW5kaHlhZGVlcC10aGVtZVwiO1xuXG4uZmVlZC1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMTVweCA1cHg7XG4gIC5oZWFkaW5nLXRleHQge1xuICAgIGZvbnQtc2l6ZTogJGhlYWRlci1zaXplO1xuICB9XG59XG5cblxuXG4iLCIuZmVlZC1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMTVweCA1cHg7XG59XG4uZmVlZC1oZWFkaW5nIC5oZWFkaW5nLXRleHQge1xuICBmb250LXNpemU6IDIwcHg7XG59IiwiLy8gcHJldmlvdXMgVGhlbWVcbi8vJHByaW1hcnktY29sb3I6ICNlOTVjOGY7XG4vLyRzZWNvbmRhcnktY29sb3I6ICM2MTRkN2Y7XG5cbi8vIE5ldyBUaGVtZVxuJHByaW1hcnktY29sb3I6ICNCRDFFNTE7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjMjY1NzkxO1xuXG4kcmVndWxhci1mb250LXNpemU6IDE0cHg7XG4kZm9udC1zaXplLTE6IDE2cHg7XG4kaGVhZGVyLXNpemU6IDIwcHg7XG4kZm9udC1zaXplLTM6IDMwcHg7XG5cbiRidXR0b24taGVpZ2h0OiA0NXB4O1xuXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/products/products.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/products/products.page.ts ***!
  \*************************************************/
/*! exports provided: ProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPage", function() { return ProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared-service.service */ "./src/app/shared-service.service.ts");





let ProductsPage = class ProductsPage {
    constructor(sharedService, adminService, router) {
        this.sharedService = sharedService;
        this.adminService = adminService;
        this.router = router;
        this.productList = [];
    }
    ngOnInit() {
        this.getProducts();
    }
    ionViewWillEnter() {
        this.sharedService.showSearchBox.next(true);
    }
    ionViewWillLeave() {
        this.sharedService.showSearchBox.next(false);
    }
    getProducts() {
        this.adminService.getProducts().subscribe(res => this.getProductSuccess(res), error => {
            this.adminService.commonError(error);
        });
    }
    getProductSuccess(res) {
        this.productList = res;
        this.productList = this.productList.map((v) => {
            v.showSpinner = false;
            return v;
        });
    }
};
ProductsPage.ctorParameters = () => [
    { type: _shared_service_service__WEBPACK_IMPORTED_MODULE_4__["SharedServiceService"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.page.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products.page.scss */ "./src/app/pages/products/products.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_service__WEBPACK_IMPORTED_MODULE_4__["SharedServiceService"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ProductsPage);



/***/ }),

/***/ "./src/app/shared-components/search-header-component/search-header-component.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/shared-components/search-header-component/search-header-component.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: SearchHeaderComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchHeaderComponentModule", function() { return SearchHeaderComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _search_header_component_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-header-component.page */ "./src/app/shared-components/search-header-component/search-header-component.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let SearchHeaderComponentModule = class SearchHeaderComponentModule {
};
SearchHeaderComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
        ],
        exports: [
            _search_header_component_page__WEBPACK_IMPORTED_MODULE_5__["SearchHeaderComponentPage"]
        ],
        declarations: [_search_header_component_page__WEBPACK_IMPORTED_MODULE_5__["SearchHeaderComponentPage"]]
    })
], SearchHeaderComponentModule);



/***/ }),

/***/ "./src/app/shared-components/search-header-component/search-header-component.page.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/shared-components/search-header-component/search-header-component.page.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-container {\n  padding-bottom: 3px;\n  z-index: 999;\n  background: linear-gradient(305deg, #BD1E51 2%, #265791 63%);\n}\n.header-container ion-header {\n  background: white;\n}\n.header-container .search-header-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-right: 10px;\n}\n.header-container .search-header-container .header-back-container {\n  flex: auto;\n  display: flex;\n}\n.header-back {\n  padding: 15px;\n  font-size: 30px;\n  color: #666;\n  display: flex;\n}\n.header-search {\n  display: flex;\n  width: 80%;\n  justify-content: center;\n  align-items: center;\n}\n.icons-list {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.icons-list .icon-container {\n  margin: 0 5px;\n}\n.icons-list .icon-container.cart-icon {\n  margin: 0 15px 0 5px;\n}\n.icons-list .icon-container i {\n  font-size: 22px;\n  color: #BD1E51;\n}\n.profileIcon img {\n  width: 40px;\n  height: 40px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  overflow: hidden;\n  border-radius: 50%;\n  border: 2px solid #265791;\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9zZWFyY2gtaGVhZGVyLWNvbXBvbmVudC9zZWFyY2gtaGVhZGVyLWNvbXBvbmVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL3NlYXJjaC1oZWFkZXItY29tcG9uZW50L3NlYXJjaC1oZWFkZXItY29tcG9uZW50LnBhZ2Uuc2NzcyIsIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL3NhbmRoeWFkZWVwLXRoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw0REFBQTtBQ0RGO0FER0U7RUFDRSxpQkFBQTtBQ0RKO0FESUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDRko7QURJSTtFQUNFLFVBQUE7RUFDQSxhQUFBO0FDRk47QURPQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNKRjtBRE9BO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDSkY7QURXQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDVEY7QURXRTtFQUNFLGFBQUE7QUNUSjtBRFdJO0VBQ0Usb0JBQUE7QUNUTjtBRFlJO0VBQ0UsZUFBQTtFQUNBLGNFbkRVO0FEeUNoQjtBRGdCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNiSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL3NlYXJjaC1oZWFkZXItY29tcG9uZW50L3NlYXJjaC1oZWFkZXItY29tcG9uZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zYW5kaHlhZGVlcC10aGVtZVwiO1xuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIHotaW5kZXg6IDk5OTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMwNWRlZywgJHByaW1hcnktY29sb3IgMiUsICRzZWNvbmRhcnktY29sb3IgNjMlKTtcblxuICBpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgfVxuXG4gIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuXG4gICAgLmhlYWRlci1iYWNrLWNvbnRhaW5lciB7XG4gICAgICBmbGV4OiBhdXRvO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gIH1cbn1cblxuLmhlYWRlci1iYWNrIHtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzY2NjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmhlYWRlci1zZWFyY2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogODAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAuc2VhcmNoLWJhciB7XG5cbiAgfVxufVxuXG4uaWNvbnMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAuaWNvbi1jb250YWluZXIge1xuICAgIG1hcmdpbjogMCA1cHg7XG5cbiAgICAmLmNhcnQtaWNvbiB7XG4gICAgICBtYXJnaW46IDAgMTVweCAwIDVweDtcbiAgICB9XG5cbiAgICBpIHtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvclxuICAgIH1cbiAgfVxufVxuXG4ucHJvZmlsZUljb24ge1xuICBpbWcge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgfVxufVxuIiwiLmhlYWRlci1jb250YWluZXIge1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICB6LWluZGV4OiA5OTk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMDVkZWcsICNCRDFFNTEgMiUsICMyNjU3OTEgNjMlKTtcbn1cbi5oZWFkZXItY29udGFpbmVyIGlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAuaGVhZGVyLWJhY2stY29udGFpbmVyIHtcbiAgZmxleDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmhlYWRlci1iYWNrIHtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzY2NjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmhlYWRlci1zZWFyY2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogODAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pY29ucy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmljb25zLWxpc3QgLmljb24tY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIDVweDtcbn1cbi5pY29ucy1saXN0IC5pY29uLWNvbnRhaW5lci5jYXJ0LWljb24ge1xuICBtYXJnaW46IDAgMTVweCAwIDVweDtcbn1cbi5pY29ucy1saXN0IC5pY29uLWNvbnRhaW5lciBpIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI0JEMUU1MTtcbn1cblxuLnByb2ZpbGVJY29uIGltZyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyNjU3OTE7XG4gIHBhZGRpbmc6IDJweDtcbn0iLCIvLyBwcmV2aW91cyBUaGVtZVxuLy8kcHJpbWFyeS1jb2xvcjogI2U5NWM4Zjtcbi8vJHNlY29uZGFyeS1jb2xvcjogIzYxNGQ3ZjtcblxuLy8gTmV3IFRoZW1lXG4kcHJpbWFyeS1jb2xvcjogI0JEMUU1MTtcbiRzZWNvbmRhcnktY29sb3I6ICMyNjU3OTE7XG5cbiRyZWd1bGFyLWZvbnQtc2l6ZTogMTRweDtcbiRmb250LXNpemUtMTogMTZweDtcbiRoZWFkZXItc2l6ZTogMjBweDtcbiRmb250LXNpemUtMzogMzBweDtcblxuJGJ1dHRvbi1oZWlnaHQ6IDQ1cHg7XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/shared-components/search-header-component/search-header-component.page.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/shared-components/search-header-component/search-header-component.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: SearchHeaderComponentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchHeaderComponentPage", function() { return SearchHeaderComponentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let SearchHeaderComponentPage = class SearchHeaderComponentPage {
    constructor(navCtrl, location) {
        this.navCtrl = navCtrl;
        this.location = location;
        this.hideProfileIcon = false;
    }
    ngOnInit() { }
    backClicked() {
        this.navCtrl.back();
    }
};
SearchHeaderComponentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
SearchHeaderComponentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'search-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-header-component.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/search-header-component/search-header-component.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-header-component.page.scss */ "./src/app/shared-components/search-header-component/search-header-component.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
], SearchHeaderComponentPage);



/***/ })

}]);
//# sourceMappingURL=pages-products-products-module-es2015.js.map