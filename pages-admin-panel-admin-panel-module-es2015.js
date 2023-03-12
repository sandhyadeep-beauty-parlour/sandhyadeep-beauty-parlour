(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-panel-admin-panel-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/admin-panel.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/admin-panel.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu [type]=\"'push'\" contentId=\"main-content\">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Menu Content</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content class=\"ion-padding\">\n        <ion-list>\n            <ion-menu-toggle autoHide=\"false\">\n                <ion-item [routerLink]=\"['/admin-panel/service-types']\">\n                    <!--          <ion-icon slot=\"start\" src=\"./assets/custom-icons/side-menu/forms.svg\"></ion-icon>-->\n                    <ion-label>\n                        Service Types\n                    </ion-label>\n                </ion-item>\n                <ion-item [routerLink]=\"['/admin-panel/service-sub-types']\">\n                    <ion-label>\n                        Service Sub-Types\n                    </ion-label>\n                </ion-item>\n                <ion-item [routerLink]=\"['/admin-panel/services']\">\n                    <ion-label>\n                        Services\n                    </ion-label>\n                </ion-item>\n                <ion-item [routerLink]=\"['/admin-panel/users']\">\n                    <ion-label>\n                        Users\n                    </ion-label>\n                </ion-item>\n                <ion-item [routerLink]=\"['/admin-panel/packages']\">\n                    <ion-label>\n                        Packages\n                    </ion-label>\n                </ion-item>\n                <ion-item [routerLink]=\"['/feed']\">\n                    <ion-label>\n                        Check Your Changes\n                    </ion-label>\n                </ion-item>\n            </ion-menu-toggle>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n<div class=\"ion-page\" id=\"main-content\">\n    <ion-header>\n        <ion-toolbar>\n            <ion-buttons slot=\"start\">\n                <ion-menu-button></ion-menu-button>\n            </ion-buttons>\n            <div style=\"display: flex; align-items: center; justify-content: space-between; padding: 0 12px 0 0;\">\n                <div style=\"display: flex; align-items: center\">\n                    <div style=\"width: 65px; overflow: hidden; display: inline-block; margin: 5px 0;\">\n                        <img src=\"/assets/new-theme/Sandhyadeep_logo.png\">\n                    </div>\n                    <div class=\"logo-container\">\n                        <div class=\"logo-text\">\n                            Sandhyadeep\n                        </div>\n                        <div class=\"slogan-text\">\n                            Have a hair affair with us\n                        </div>\n                    </div>\n                </div>\n                <div style=\"display: flex; justify-content: space-between; align-items: center;\">\n                    <div [routerLink]=\"['/settings']\" class=\"profileIcon\">\n                        <img src=\"assets/icon/profile-icon.png\" alt=\"\">\n                    </div>\n                </div>\n            </div>\n        </ion-toolbar>\n        <div class=\"filters-container\">\n            <div class=\"search-box\">\n                <ion-searchbar placeholder=\"Search Here\"></ion-searchbar>\n            </div>\n            <!--      <div class=\"filters-sorts\">-->\n            <!--        <div class=\"filters\">-->\n            <!--          <ion-button  fill=\"outline\">-->\n            <!--            <ion-icon slot=\"start\" name=\"funnel\"></ion-icon>-->\n            <!--            Filters-->\n            <!--          </ion-button>-->\n            <!--        </div>-->\n            <!--        <div class=\"sorts\">-->\n            <!--          <ion-button fill=\"outline\">-->\n            <!--            <ion-icon slot=\"start\" name=\"options\"></ion-icon>-->\n            <!--            Sorts-->\n            <!--          </ion-button>-->\n            <!--        </div>-->\n            <!--      </div>-->\n        </div>\n        <div class=\"page-heading\">\n            <div class=\"heading-text\">\n                {{pageTitle}}\n            </div>\n        </div>\n        <ion-progress-bar *ngIf=\"showProgressBar\" type=\"indeterminate\"></ion-progress-bar>\n    </ion-header>\n    <ion-content class=\"ion-padding\">\n        <ion-router-outlet></ion-router-outlet>\n    </ion-content>\n</div>\n");

/***/ }),

/***/ "./src/app/pages/admin-panel/admin-panel-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/admin-panel/admin-panel-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AdminPanelPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelPageRoutingModule", function() { return AdminPanelPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_panel_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-panel.page */ "./src/app/pages/admin-panel/admin-panel.page.ts");




const routes = [
    {
        path: '',
        component: _admin_panel_page__WEBPACK_IMPORTED_MODULE_3__["AdminPanelPage"],
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | service-types-service-types-module */ "service-types-service-types-module").then(__webpack_require__.bind(null, /*! ./service-types/service-types.module */ "./src/app/pages/admin-panel/service-types/service-types.module.ts")).then(m => m.ServiceTypesPageModule)
            },
            {
                path: 'service-types',
                loadChildren: () => __webpack_require__.e(/*! import() | service-types-service-types-module */ "service-types-service-types-module").then(__webpack_require__.bind(null, /*! ./service-types/service-types.module */ "./src/app/pages/admin-panel/service-types/service-types.module.ts")).then(m => m.ServiceTypesPageModule)
            },
            {
                path: 'service-sub-types',
                loadChildren: () => __webpack_require__.e(/*! import() | service-sub-types-service-sub-types-module */ "service-sub-types-service-sub-types-module").then(__webpack_require__.bind(null, /*! ./service-sub-types/service-sub-types.module */ "./src/app/pages/admin-panel/service-sub-types/service-sub-types.module.ts")).then(m => m.ServiceSubTypesPageModule)
            },
            {
                path: 'services',
                loadChildren: () => __webpack_require__.e(/*! import() | services-services-module */ "services-services-module").then(__webpack_require__.bind(null, /*! ./services/services.module */ "./src/app/pages/admin-panel/services/services.module.ts")).then(m => m.ServicesPageModule)
            },
            {
                path: 'users',
                loadChildren: () => __webpack_require__.e(/*! import() | users-users-module */ "users-users-module").then(__webpack_require__.bind(null, /*! ./users/users.module */ "./src/app/pages/admin-panel/users/users.module.ts")).then(m => m.UsersPageModule)
            },
            {
                path: 'packages',
                loadChildren: () => __webpack_require__.e(/*! import() | packages-packages-module */ "packages-packages-module").then(__webpack_require__.bind(null, /*! ./packages/packages.module */ "./src/app/pages/admin-panel/packages/packages.module.ts")).then(m => m.PackagesPageModule)
            }
        ]
    }
];
let AdminPanelPageRoutingModule = class AdminPanelPageRoutingModule {
};
AdminPanelPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdminPanelPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/admin-panel/admin-panel.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/admin-panel/admin-panel.module.ts ***!
  \*********************************************************/
/*! exports provided: AdminPanelPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelPageModule", function() { return AdminPanelPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _admin_panel_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-panel-routing.module */ "./src/app/pages/admin-panel/admin-panel-routing.module.ts");
/* harmony import */ var _admin_panel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-panel.page */ "./src/app/pages/admin-panel/admin-panel.page.ts");







let AdminPanelPageModule = class AdminPanelPageModule {
};
AdminPanelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _admin_panel_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminPanelPageRoutingModule"]
        ],
        declarations: [_admin_panel_page__WEBPACK_IMPORTED_MODULE_6__["AdminPanelPage"]]
    })
], AdminPanelPageModule);



/***/ }),

/***/ "./src/app/pages/admin-panel/admin-panel.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/admin-panel/admin-panel.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".filters-sorts {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 12px 10px;\n}\n.filters-sorts .filters, .filters-sorts .sorts {\n  flex-basis: 48%;\n}\n.filters-sorts .filters ion-button, .filters-sorts .sorts ion-button {\n  font-size: 14px;\n  width: 100%;\n  background: white;\n  height: 32px;\n}\n.filters-sorts .filters ion-button ion-icon, .filters-sorts .sorts ion-button ion-icon {\n  font-size: 14px;\n}\n.filters-container {\n  background: #d3d3d347;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n}\n.logo-container {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.1;\n}\n.logo-container .logo-text {\n  font-size: 25px;\n  font-weight: 700;\n}\n.logo-container .slogan-text {\n  font-size: 10px;\n  padding: 0 5px;\n}\n.profileIcon img {\n  width: 40px;\n  height: 40px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  overflow: hidden;\n  border-radius: 50%;\n  border: 2px solid #265791;\n  padding: 2px;\n}\n.page-heading {\n  padding: 10px 12px;\n  border-bottom: 6px solid #d3d3d37a;\n}\n.page-heading .heading-text {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL2FwcC9wYWdlcy9hZG1pbi1wYW5lbC9hZG1pbi1wYW5lbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FkbWluLXBhbmVsL2FkbWluLXBhbmVsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FDREY7QURFRTtFQUNFLGVBQUE7QUNBSjtBRENJO0VBSUUsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNGTjtBREpNO0VBQ0UsZUFBQTtBQ01SO0FESUE7RUFDRSxxQkFBQTtFQUNBLCtHQUFBO0FDREY7QURJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDREY7QURFRTtFQUNFLGVBQUE7RUFBaUIsZ0JBQUE7QUNDckI7QURDRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDQ0o7QURJRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNESjtBREtBO0VBQ0Usa0JBQUE7RUFDQSxrQ0FBQTtBQ0ZGO0FER0U7RUFDRSxlQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZG1pbi1wYW5lbC9hZG1pbi1wYW5lbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2FuZGh5YWRlZXAtdGhlbWVcIjtcblxuLmZpbHRlcnMtc29ydHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgMTJweCAxMHB4O1xuICAuZmlsdGVycywgLnNvcnRzIHtcbiAgICBmbGV4LWJhc2lzOiA0OCU7XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgfVxuICB9XG59XG5cbi5maWx0ZXJzLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNkM2QzZDM0NztcbiAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggcmdiKDAgMCAwIC8gMjAlKSwgMCAxcHggMXB4IDAgcmdiKDAgMCAwIC8gMTQlKSwgMCAxcHggM3B4IDAgcmdiKDAgMCAwIC8gMTIlKTtcbn1cblxuLmxvZ28tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgLmxvZ28tdGV4dCB7XG4gICAgZm9udC1zaXplOiAyNXB4OyBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIC5zbG9nYW4tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHBhZGRpbmc6IDAgNXB4O1xuICB9XG59XG5cbi5wcm9maWxlSWNvbiB7XG4gIGltZyB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XG4gICAgcGFkZGluZzogMnB4O1xuICB9XG59XG5cbi5wYWdlLWhlYWRpbmcge1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCAjZDNkM2QzN2E7XG4gIC5oZWFkaW5nLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuIiwiLmZpbHRlcnMtc29ydHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgMTJweCAxMHB4O1xufVxuLmZpbHRlcnMtc29ydHMgLmZpbHRlcnMsIC5maWx0ZXJzLXNvcnRzIC5zb3J0cyB7XG4gIGZsZXgtYmFzaXM6IDQ4JTtcbn1cbi5maWx0ZXJzLXNvcnRzIC5maWx0ZXJzIGlvbi1idXR0b24sIC5maWx0ZXJzLXNvcnRzIC5zb3J0cyBpb24tYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogMzJweDtcbn1cbi5maWx0ZXJzLXNvcnRzIC5maWx0ZXJzIGlvbi1idXR0b24gaW9uLWljb24sIC5maWx0ZXJzLXNvcnRzIC5zb3J0cyBpb24tYnV0dG9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZmlsdGVycy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZDNkM2QzNDc7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmxvZ28tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbn1cbi5sb2dvLWNvbnRhaW5lciAubG9nby10ZXh0IHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmxvZ28tY29udGFpbmVyIC5zbG9nYW4tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogMCA1cHg7XG59XG5cbi5wcm9maWxlSWNvbiBpbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjY1NzkxO1xuICBwYWRkaW5nOiAycHg7XG59XG5cbi5wYWdlLWhlYWRpbmcge1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCAjZDNkM2QzN2E7XG59XG4ucGFnZS1oZWFkaW5nIC5oZWFkaW5nLXRleHQge1xuICBmb250LXNpemU6IDE4cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/admin-panel/admin-panel.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/admin-panel/admin-panel.page.ts ***!
  \*******************************************************/
/*! exports provided: AdminPanelPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelPage", function() { return AdminPanelPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _communication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./communication.service */ "./src/app/pages/admin-panel/communication.service.ts");




let AdminPanelPage = class AdminPanelPage {
    constructor(communicationService, actionSheetCtrl) {
        this.communicationService = communicationService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.pages = [
            { title: 'Service Type' }
        ];
        this.showProgressBar = false;
        this.pageTitle = '';
    }
    ngOnInit() {
        this.communicationService.showAdminSpinner.subscribe((res) => {
            this.showProgressBar = res;
        });
        this.communicationService.pageTitle.subscribe((res) => {
            this.pageTitle = res;
        });
    }
};
AdminPanelPage.ctorParameters = () => [
    { type: _communication_service__WEBPACK_IMPORTED_MODULE_3__["CommunicationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] }
];
AdminPanelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-panel.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/admin-panel.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-panel.page.scss */ "./src/app/pages/admin-panel/admin-panel.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_communication_service__WEBPACK_IMPORTED_MODULE_3__["CommunicationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]])
], AdminPanelPage);



/***/ }),

/***/ "./src/app/pages/admin-panel/communication.service.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/admin-panel/communication.service.ts ***!
  \************************************************************/
/*! exports provided: CommunicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationService", function() { return CommunicationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let CommunicationService = class CommunicationService {
    constructor() {
        this.showAdminSpinner = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.pageTitle = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
    }
};
CommunicationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CommunicationService);



/***/ })

}]);
//# sourceMappingURL=pages-admin-panel-admin-panel-module-es2015.js.map