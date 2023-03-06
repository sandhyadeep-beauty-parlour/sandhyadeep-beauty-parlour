function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/components/users-modal/users-modal.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/components/users-modal/users-modal.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAdminPanelComponentsUsersModalUsersModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <div>\n    <div class=\"drawer\"></div>\n  </div>\n  <div class=\"admin-modal-title-container\">\n    <div style=\"display: flex; justify-content: end;\">\n      <i (click)=\"closeModal()\" class=\"fa fa-times close-button\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"admin-modal-title\">Add Service</div>\n  </div>\n  <div class=\"modal-form-image\">\n    <div class=\"modal-image\">\n      <img src=\"/assets/icon/profile-icon.png\" alt=\"\">\n    </div>\n    <div class=\"image-changer\">\n      <ion-icon name=\"add-circle-outline\"></ion-icon>\n    </div>\n  </div>\n</ion-header>\n<ion-content>\n\n  <div class=\"modal-form-container\">\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"floating\">User Name</ion-label>\n        <ion-input></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Mobile Number</ion-label>\n        <ion-input style=\"width: 100px\" type=\"number\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-checkbox></ion-checkbox>\n        <ion-label>This is What's App Number</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-checkbox></ion-checkbox>\n        <ion-label>Active User</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Email</ion-label>\n        <ion-input type=\"email\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Date of Birth</ion-label>\n        <ion-datetime display-timezone=\"ist\"></ion-datetime>\n        <ion-label>(37 Years)</ion-label>\n      </ion-item>\n\n    </ion-list>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <div style=\"display: flex; justify-content: center; padding: 20px 10px;\">\n    <button style=\"width: 250px\"\n            mat-raised-button color=\"primary\">Save\n    </button>\n  </div>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/users/users.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/users/users.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAdminPanelUsersUsersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n    <div class=\"service-type-container\">\n\n    </div>\n    <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\">\n        <ion-fab-button (click)=\"presentModal()\" size=\"small\" >\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/pages/admin-panel/components/users-modal/users-modal.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/pages/admin-panel/components/users-modal/users-modal.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAdminPanelComponentsUsersModalUsersModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".drawer {\n  left: 0px;\n  right: 0px;\n  top: 5px;\n  border-radius: 8px;\n  margin-left: auto;\n  margin-right: auto;\n  position: absolute;\n  width: 36px;\n  height: 5px;\n  transform: translateZ(0px);\n  border: 0px;\n  background: var(--ion-color-step-350, #c0c0be);\n  cursor: pointer;\n  z-index: 11;\n}\n\n.admin-modal-title-container {\n  display: flex;\n  flex-direction: column;\n  padding: 15px 15px 10px;\n  border-bottom: 1px solid lightgray;\n  width: 100%;\n}\n\n.admin-modal-title-container .admin-modal-title {\n  text-align: center;\n  font-size: 18px;\n  font-weight: 800;\n}\n\n.close-button {\n  display: flex;\n  position: absolute;\n  justify-content: end;\n  right: 19px;\n  font-size: 20px;\n  color: gray;\n}\n\n.modal-form-image {\n  height: 165px;\n  background: #000000c4;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.modal-form-image .modal-image {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.modal-form-image .modal-image img {\n  height: 100%;\n}\n\n.modal-form-image .image-changer {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  padding: 10px;\n}\n\n.modal-form-image .image-changer ion-icon {\n  font-size: 25px;\n  color: #ffffffba;\n}\n\n.modal-form-container ion-label {\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4tcGFuZWwvY29tcG9uZW50cy91c2Vycy1tb2RhbC9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxhcHBcXHBhZ2VzXFxhZG1pbi1wYW5lbFxcY29tcG9uZW50c1xcdXNlcnMtbW9kYWxcXHVzZXJzLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hZG1pbi1wYW5lbC9jb21wb25lbnRzL3VzZXJzLW1vZGFsL3VzZXJzLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLDhDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREVBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0VKOztBRERJO0VBQ0UsWUFBQTtBQ0dOOztBREFFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDRUo7O0FEREk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNHTjs7QURFRTtFQUNFLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluLXBhbmVsL2NvbXBvbmVudHMvdXNlcnMtbW9kYWwvdXNlcnMtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJhd2VyIHtcclxuICBsZWZ0OiAwcHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICB0b3A6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMzZweDtcclxuICBoZWlnaHQ6IDVweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcclxuICBib3JkZXI6IDBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0zNTAsICNjMGMwYmUpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB6LWluZGV4OiAxMTtcclxufVxyXG5cclxuLmFkbWluLW1vZGFsLXRpdGxlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDE1cHggMTVweCAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLmFkbWluLW1vZGFsLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgfVxyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICByaWdodDogMTlweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5tb2RhbC1mb3JtLWltYWdlIHtcclxuICBoZWlnaHQ6IDE2NXB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMDAwMDBjNDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC5tb2RhbC1pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGltZyB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgLmltYWdlLWNoYW5nZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZmJhO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubW9kYWwtZm9ybS1jb250YWluZXIge1xyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICB9XHJcbn1cclxuIiwiLmRyYXdlciB7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xuICBib3JkZXI6IDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMzUwLCAjYzBjMGJlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxMTtcbn1cblxuLmFkbWluLW1vZGFsLXRpdGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDE1cHggMTVweCAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICB3aWR0aDogMTAwJTtcbn1cbi5hZG1pbi1tb2RhbC10aXRsZS1jb250YWluZXIgLmFkbWluLW1vZGFsLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5jbG9zZS1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICByaWdodDogMTlweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogZ3JheTtcbn1cblxuLm1vZGFsLWZvcm0taW1hZ2Uge1xuICBoZWlnaHQ6IDE2NXB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwYzQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tb2RhbC1mb3JtLWltYWdlIC5tb2RhbC1pbWFnZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm1vZGFsLWZvcm0taW1hZ2UgLm1vZGFsLWltYWdlIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5tb2RhbC1mb3JtLWltYWdlIC5pbWFnZS1jaGFuZ2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLm1vZGFsLWZvcm0taW1hZ2UgLmltYWdlLWNoYW5nZXIgaW9uLWljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjZmZmZmZmYmE7XG59XG5cbi5tb2RhbC1mb3JtLWNvbnRhaW5lciBpb24tbGFiZWwge1xuICBjb2xvcjogZ3JheTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/admin-panel/components/users-modal/users-modal.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/admin-panel/components/users-modal/users-modal.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: UsersModalComponent */

  /***/
  function srcAppPagesAdminPanelComponentsUsersModalUsersModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersModalComponent", function () {
      return UsersModalComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var UsersModalComponent = /*#__PURE__*/function () {
      function UsersModalComponent(modalController) {
        _classCallCheck(this, UsersModalComponent);

        this.modalController = modalController;
      }

      _createClass(UsersModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeModal",
        value: function closeModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var onClosedData;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    onClosedData = "Wrapped Up!";
                    _context.next = 3;
                    return this.modalController.dismiss(onClosedData);

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return UsersModalComponent;
    }();

    UsersModalComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    UsersModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-users-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./users-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/components/users-modal/users-modal.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./users-modal.component.scss */
      "./src/app/pages/admin-panel/components/users-modal/users-modal.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], UsersModalComponent);
    /***/
  },

  /***/
  "./src/app/pages/admin-panel/components/users-modal/users-modal.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/admin-panel/components/users-modal/users-modal.module.ts ***!
    \********************************************************************************/

  /*! exports provided: UsersModalModule */

  /***/
  function srcAppPagesAdminPanelComponentsUsersModalUsersModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersModalModule", function () {
      return UsersModalModule;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _users_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./users-modal.component */
    "./src/app/pages/admin-panel/components/users-modal/users-modal.component.ts");

    var UsersModalModule = function UsersModalModule() {
      _classCallCheck(this, UsersModalModule);
    };

    UsersModalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"]],
      exports: [_users_modal_component__WEBPACK_IMPORTED_MODULE_6__["UsersModalComponent"]],
      declarations: [_users_modal_component__WEBPACK_IMPORTED_MODULE_6__["UsersModalComponent"]],
      entryComponents: [_users_modal_component__WEBPACK_IMPORTED_MODULE_6__["UsersModalComponent"]]
    })], UsersModalModule);
    /***/
  },

  /***/
  "./src/app/pages/admin-panel/users/users-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/admin-panel/users/users-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: UsersPageRoutingModule */

  /***/
  function srcAppPagesAdminPanelUsersUsersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersPageRoutingModule", function () {
      return UsersPageRoutingModule;
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


    var _users_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./users.page */
    "./src/app/pages/admin-panel/users/users.page.ts");

    var routes = [{
      path: '',
      component: _users_page__WEBPACK_IMPORTED_MODULE_3__["UsersPage"]
    }];

    var UsersPageRoutingModule = function UsersPageRoutingModule() {
      _classCallCheck(this, UsersPageRoutingModule);
    };

    UsersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UsersPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/admin-panel/users/users.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/admin-panel/users/users.module.ts ***!
    \*********************************************************/

  /*! exports provided: UsersPageModule */

  /***/
  function srcAppPagesAdminPanelUsersUsersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersPageModule", function () {
      return UsersPageModule;
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


    var _users_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./users-routing.module */
    "./src/app/pages/admin-panel/users/users-routing.module.ts");
    /* harmony import */


    var _users_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./users.page */
    "./src/app/pages/admin-panel/users/users.page.ts");
    /* harmony import */


    var _components_users_modal_users_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/users-modal/users-modal.module */
    "./src/app/pages/admin-panel/components/users-modal/users-modal.module.ts");

    var UsersPageModule = function UsersPageModule() {
      _classCallCheck(this, UsersPageModule);
    };

    UsersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _users_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsersPageRoutingModule"], _components_users_modal_users_modal_module__WEBPACK_IMPORTED_MODULE_7__["UsersModalModule"]],
      declarations: [_users_page__WEBPACK_IMPORTED_MODULE_6__["UsersPage"]]
    })], UsersPageModule);
    /***/
  },

  /***/
  "./src/app/pages/admin-panel/users/users.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/admin-panel/users/users.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAdminPanelUsersUsersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 12px;\n  border-bottom: 6px solid #d3d3d37a;\n}\n.page-heading .heading-text {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4tcGFuZWwvdXNlcnMvQzpcXFVzZXJzXFxhYWJoYWd3YVxcc2FuZGh5YWRlZXBcXHNhbmRoeWFkZWVwLXVpL3NyY1xcYXBwXFxwYWdlc1xcYWRtaW4tcGFuZWxcXHVzZXJzXFx1c2Vycy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FkbWluLXBhbmVsL3VzZXJzL3VzZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQ0FGO0FEQ0U7RUFDRSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZG1pbi1wYW5lbC91c2Vycy91c2Vycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnBhZ2UtaGVhZGluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkICNkM2QzZDM3YTtcclxuICAuaGVhZGluZy10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuIiwiLnBhZ2UtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBib3JkZXItYm90dG9tOiA2cHggc29saWQgI2QzZDNkMzdhO1xufVxuLnBhZ2UtaGVhZGluZyAuaGVhZGluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/admin-panel/users/users.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/admin-panel/users/users.page.ts ***!
    \*******************************************************/

  /*! exports provided: UsersPage */

  /***/
  function srcAppPagesAdminPanelUsersUsersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersPage", function () {
      return UsersPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _components_users_modal_users_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../components/users-modal/users-modal.component */
    "./src/app/pages/admin-panel/components/users-modal/users-modal.component.ts");
    /* harmony import */


    var _communication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../communication.service */
    "./src/app/pages/admin-panel/communication.service.ts");

    var UsersPage = /*#__PURE__*/function () {
      function UsersPage(communicationService, modalController) {
        _classCallCheck(this, UsersPage);

        this.communicationService = communicationService;
        this.modalController = modalController;
      }

      _createClass(UsersPage, [{
        key: "presentModal",
        value: function presentModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _components_users_modal_users_modal_component__WEBPACK_IMPORTED_MODULE_3__["UsersModalComponent"],
                      cssClass: 'admin-modal-class',
                      backdropDismiss: true,
                      swipeToClose: true,
                      showBackdrop: true
                    });

                  case 2:
                    modal = _context2.sent;
                    _context2.next = 5;
                    return modal.present();

                  case 5:
                    return _context2.abrupt("return", _context2.sent);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.communicationService.pageTitle.next('Users');
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.closeModal();
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var onClosedData;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    onClosedData = 'Wrapped Up!';
                    _context3.next = 3;
                    return this.modalController.dismiss(onClosedData);

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.communicationService.pageTitle.next('Users');
        }
      }]);

      return UsersPage;
    }();

    UsersPage.ctorParameters = function () {
      return [{
        type: _communication_service__WEBPACK_IMPORTED_MODULE_4__["CommunicationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    UsersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./users.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/users/users.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./users.page.scss */
      "./src/app/pages/admin-panel/users/users.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_communication_service__WEBPACK_IMPORTED_MODULE_4__["CommunicationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], UsersPage);
    /***/
  }
}]);
//# sourceMappingURL=users-users-module-es5.js.map