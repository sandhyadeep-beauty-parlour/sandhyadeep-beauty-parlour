(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bookings-bookings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookings/bookings.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookings/bookings.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sandhyadeep-header class=\"z-index-99\"></sandhyadeep-header>\n\n<ion-content>\n  <div class=\"bookings-container\">\n    <div class=\"wizard-navigation\">\n      <ul class=\"nav nav-pills\">\n        <li (click)=\"onChangeTab('first', 'New Bookings')\"  style=\"width: 50%;\">New Bookings</li>\n        <li (click)=\"onChangeTab('second', 'History')\"  style=\"width: 50%;\" class=\"\">History</li>\n      </ul>\n      <div class=\"moving-tab\" [class.first]=\"tab === 'first'\" [class.second]=\"tab === 'second'\" >\n        {{tabName}}\n      </div>\n    </div>\n\n    <div class=\"bookings-tab\">                          \n      <div class=\"no-active-bookings\">\n        <div class=\"no-bookings-img\">\n          <img src=\"assets/no-bookings.png\" alt=\"\">\n        </div>\n        <div class=\"no-bookings-text\">\n          No Active Bookings\n        </div>\n        <div [routerLink]=\"['/home/services']\" class=\"button-container\">\n          <button class=\"search-button\">Search For Bookings</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/bookings/bookings-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/bookings/bookings-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: BookingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsRoutingModule", function() { return BookingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bookings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookings.page */ "./src/app/pages/bookings/bookings.page.ts");




const routes = [
    {
        path: '',
        component: _bookings_page__WEBPACK_IMPORTED_MODULE_3__["BookingsPage"]
    }
];
let BookingsRoutingModule = class BookingsRoutingModule {
};
BookingsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BookingsRoutingModule);



/***/ }),

/***/ "./src/app/pages/bookings/bookings.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/bookings/bookings.module.ts ***!
  \***************************************************/
/*! exports provided: BookingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsModule", function() { return BookingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _bookings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookings-routing.module */ "./src/app/pages/bookings/bookings-routing.module.ts");
/* harmony import */ var _bookings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bookings.page */ "./src/app/pages/bookings/bookings.page.ts");
/* harmony import */ var _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared-components/header-component/header-component.module */ "./src/app/shared-components/header-component/header-component.module.ts");








let BookingsModule = class BookingsModule {
};
BookingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bookings_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookingsRoutingModule"],
            _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"]
        ],
        declarations: [_bookings_page__WEBPACK_IMPORTED_MODULE_6__["BookingsPage"]]
    })
], BookingsModule);



/***/ }),

/***/ "./src/app/pages/bookings/bookings.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/bookings/bookings.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bookings-container {\n  padding: 20px 15px;\n}\n.bookings-container .wizard-navigation {\n  padding: 5px;\n  border: 2px solid #cc2b5e;\n  border-radius: 10px;\n  text-align: center;\n  position: relative;\n}\n.bookings-container .moving-tab {\n  position: absolute;\n  text-align: center;\n  padding: 8px;\n  font-size: 12px;\n  text-transform: uppercase;\n  -webkit-font-smoothing: subpixel-antialiased;\n  background-color: #753a88;\n  top: -4px;\n  left: 0px;\n  color: #FFFFFF;\n  cursor: pointer;\n  font-weight: 500;\n}\n.bookings-container .first {\n  border-top-left-radius: 10px;\n  font-weight: bold;\n  border-bottom-left-radius: 10px;\n  width: 50%;\n  transform: translate3d(0, 12%, 0);\n  transition: all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1) 0s;\n}\n.bookings-container .second {\n  font-weight: bold;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  width: 50%;\n  transform: translate3d(100%, 12%, 0px);\n  transition: all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1) 0s;\n}\n.no-bookings-img {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.no-active-bookings .no-bookings-text {\n  font-size: 24px;\n  text-align: center;\n}\n.no-active-bookings .button-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.no-active-bookings .button-container button.search-button {\n  width: 80%;\n  color: white;\n  padding: 15px;\n  margin: 15px 0;\n  display: flex;\n  border-radius: 7px;\n  justify-content: center;\n  text-align: center;\n  background: linear-gradient(225deg, #cc2b5e 2%, #753a88 63%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvYXBwL3BhZ2VzL2Jvb2tpbmdzL2Jvb2tpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYm9va2luZ3MvYm9va2luZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjtBREFFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRUo7QURBRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsNENBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0VKO0FERUU7RUFDRSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0VBQVksaUNBQUE7RUFBbUMseURBQUE7QUNFbkQ7QURBRTtFQUNFLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7RUFBWSxzQ0FBQTtFQUF3Qyx5REFBQTtBQ0l4RDtBRENBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNFRjtBREVFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDQ0o7QURFRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNBSjtBRENJO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0REFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYm9va2luZ3MvYm9va2luZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvb2tpbmdzLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDIwcHggMTVweDtcbiAgLndpemFyZC1uYXZpZ2F0aW9uIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2NjMmI1ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLm1vdmluZy10YWIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NTNhODg7XG4gICAgdG9wOiAtNHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAvL2JveC1zaGFkb3c6IDAgMTZweCAyNnB4IC0xMHB4IHJnYmEoMjQ0LCA2NywgNTQsIDAuNTYpLCAwIDRweCAyNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgyNDQsIDY3LCA1NCwgMC4yKTtcbiAgfVxuXG4gIC5maXJzdCB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTIlLCAwKTsgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjksIDEuNDIsIDAuNzksIDEpIDBzO1xuICB9XG4gIC5zZWNvbmQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMTIlLCAwcHgpOyB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC4yOSwgMS40MiwgMC43OSwgMSkgMHM7XG4gIH1cblxufVxuXG4ubm8tYm9va2luZ3MtaW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubm8tYWN0aXZlLWJvb2tpbmdzIHtcblxuICAubm8tYm9va2luZ3MtdGV4dCB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBidXR0b24uc2VhcmNoLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogODAlO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIG1hcmdpbjogMTVweCAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgI2NjMmI1ZSAyJSwgIzc1M2E4OCA2MyUpO1xuICAgIH1cbiAgfVxuXG59XG4iLCIuYm9va2luZ3MtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjBweCAxNXB4O1xufVxuLmJvb2tpbmdzLWNvbnRhaW5lciAud2l6YXJkLW5hdmlnYXRpb24ge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjYzJiNWU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJvb2tpbmdzLWNvbnRhaW5lciAubW92aW5nLXRhYiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3NTNhODg7XG4gIHRvcDogLTRweDtcbiAgbGVmdDogMHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmJvb2tpbmdzLWNvbnRhaW5lciAuZmlyc3Qge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMiUsIDApO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC4yOSwgMS40MiwgMC43OSwgMSkgMHM7XG59XG4uYm9va2luZ3MtY29udGFpbmVyIC5zZWNvbmQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDEyJSwgMHB4KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjksIDEuNDIsIDAuNzksIDEpIDBzO1xufVxuXG4ubm8tYm9va2luZ3MtaW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uby1hY3RpdmUtYm9va2luZ3MgLm5vLWJvb2tpbmdzLXRleHQge1xuICBmb250LXNpemU6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5uby1hY3RpdmUtYm9va2luZ3MgLmJ1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5uby1hY3RpdmUtYm9va2luZ3MgLmJ1dHRvbi1jb250YWluZXIgYnV0dG9uLnNlYXJjaC1idXR0b24ge1xuICB3aWR0aDogODAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMTVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICNjYzJiNWUgMiUsICM3NTNhODggNjMlKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/bookings/bookings.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/bookings/bookings.page.ts ***!
  \*************************************************/
/*! exports provided: BookingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsPage", function() { return BookingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BookingsPage = class BookingsPage {
    constructor() {
        this.tab = 'first';
        this.tabName = 'New Bookings';
    }
    onChangeTab(key, tabName) {
        this.tab = key;
        this.tabName = tabName;
    }
    ngOnInit() {
    }
};
BookingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messages',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bookings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookings/bookings.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bookings.page.scss */ "./src/app/pages/bookings/bookings.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BookingsPage);



/***/ })

}]);
//# sourceMappingURL=pages-bookings-bookings-module-es2015.js.map