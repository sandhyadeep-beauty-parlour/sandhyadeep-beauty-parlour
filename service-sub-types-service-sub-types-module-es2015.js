(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-sub-types-service-sub-types-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/components/service-sub-types-modal/service-sub-types-modal.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/components/service-sub-types-modal/service-sub-types-modal.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <div>\n    <div class=\"drawer\"></div>\n  </div>\n  <div class=\"admin-modal-title-container\">\n    <div style=\"display: flex; justify-content: end;\">\n      <i (click)=\"closeModal()\" class=\"fa fa-times close-button\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"admin-modal-title\">{{editMode ? 'Update' : 'Add'}} Sub Service</div>\n  </div>\n</ion-header>\n<ion-content>\n  <form [formGroup]='adminComponentForm'>\n    <div class=\"modal-form-container\">\n      <ion-list>\n        <ion-item>\n          <ion-label class=\"required-label\" position=\"floating\">Sub Service Name</ion-label>\n          <ion-input maxlength=\"20\" formControlName=\"name\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\" class=\"required-label\">Service Type</ion-label>\n          <ion-select formControlName=\"serviceType\" okText=\"Okay\" cancelText=\"Dismiss\">\n            <ng-container *ngFor=\"let serviceType of serviceTypes\">\n              <ion-select-option [value]=\"serviceType?.id\" >{{serviceType?.name}}</ion-select-option>\n            </ng-container>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </div>\n  </form>\n</ion-content>\n\n<ion-footer>\n  <div style=\"display: flex; justify-content: center; padding: 10px;\">\n    <button (click)=\"onAddValue()\" style=\"width: 250px\"\n            mat-raised-button color=\"primary\">{{editMode ? 'Update' : 'Save'}}\n    </button>\n  </div>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/service-sub-types/service-sub-types.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/service-sub-types/service-sub-types.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"service-type-container\">\n    <div class=\"service-types-container\">\n      <ion-card *ngFor=\"let subService of subServices\">\n        <ion-card-header>\n          <div class=\"ion-card-header\">\n            <div class=\"service-type-name\">{{subService?.name | titlecase}}</div>\n          </div>\n          <ion-card-subtitle>{{subService?.serviceType?.name}}</ion-card-subtitle>\n        </ion-card-header>\n        <mat-divider></mat-divider>\n        <ion-card-content>\n          <div class=\"service-type-footer-icons\">\n            <button (click)=\"onEdit(subService)\" color=\"primary\" mat-mini-fab>\n              <i class=\"fa fa-pencil-square-o\"></i>\n            </button>\n            <button (click)=\"onDelete(subService)\" color=\"warn\" mat-mini-fab>\n              <i class=\"fa fa-trash\"></i>\n            </button>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n  <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\">\n    <ion-fab-button (click)=\"presentModal({})\" size=\"small\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/pages/admin-panel/components/service-sub-types-modal/service-sub-types-modal.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/admin-panel/components/service-sub-types-modal/service-sub-types-modal.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".drawer {\n  left: 0px;\n  right: 0px;\n  top: 5px;\n  border-radius: 8px;\n  margin-left: auto;\n  margin-right: auto;\n  position: absolute;\n  width: 36px;\n  height: 5px;\n  transform: translateZ(0px);\n  border: 0px;\n  background: var(--ion-color-step-350, #c0c0be);\n  cursor: pointer;\n  z-index: 11;\n}\n\n.admin-modal-title-container {\n  display: flex;\n  flex-direction: column;\n  padding: 15px 15px 10px;\n  border-bottom: 1px solid lightgray;\n  width: 100%;\n}\n\n.admin-modal-title-container .admin-modal-title {\n  text-align: center;\n  font-size: 18px;\n  font-weight: 800;\n}\n\n.close-button {\n  display: flex;\n  position: absolute;\n  justify-content: end;\n  right: 19px;\n  font-size: 20px;\n  color: gray;\n}\n\n.modal-form-image {\n  height: 165px;\n  background: #000000c4;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.modal-form-image .modal-image {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.modal-form-image .modal-image img {\n  height: 100%;\n}\n\n.modal-form-image .image-changer {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  padding: 10px 15px;\n}\n\n.modal-form-image .image-changer ion-icon {\n  font-size: 25px;\n  color: #ffffffba;\n}\n\n.modal-form-container ion-label {\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL2FwcC9wYWdlcy9hZG1pbi1wYW5lbC9jb21wb25lbnRzL3NlcnZpY2Utc3ViLXR5cGVzLW1vZGFsL3NlcnZpY2Utc3ViLXR5cGVzLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hZG1pbi1wYW5lbC9jb21wb25lbnRzL3NlcnZpY2Utc3ViLXR5cGVzLW1vZGFsL3NlcnZpY2Utc3ViLXR5cGVzLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLDhDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREVBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0VKOztBRERJO0VBQ0UsWUFBQTtBQ0dOOztBREFFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0VKOztBRERJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDR047O0FERUU7RUFDRSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZG1pbi1wYW5lbC9jb21wb25lbnRzL3NlcnZpY2Utc3ViLXR5cGVzLW1vZGFsL3NlcnZpY2Utc3ViLXR5cGVzLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyYXdlciB7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpO1xuICBib3JkZXI6IDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMzUwLCAjYzBjMGJlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxMTtcbn1cblxuLmFkbWluLW1vZGFsLXRpdGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDE1cHggMTVweCAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICB3aWR0aDogMTAwJTtcbiAgLmFkbWluLW1vZGFsLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cbn1cblxuLmNsb3NlLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIHJpZ2h0OiAxOXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4ubW9kYWwtZm9ybS1pbWFnZSB7XG4gIGhlaWdodDogMTY1cHg7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDBjNDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAubW9kYWwtaW1hZ2Uge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGltZyB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG4gIC5pbWFnZS1jaGFuZ2VyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgIGNvbG9yOiAjZmZmZmZmYmE7XG4gICAgfVxuICB9XG59XG4ubW9kYWwtZm9ybS1jb250YWluZXIge1xuICBpb24tbGFiZWwge1xuICAgIGNvbG9yOiBncmF5O1xuICB9XG59XG4iLCIuZHJhd2VyIHtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICB0b3A6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDVweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XG4gIGJvcmRlcjogMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0zNTAsICNjMGMwYmUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDExO1xufVxuXG4uYWRtaW4tbW9kYWwtdGl0bGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTVweCAxNXB4IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmFkbWluLW1vZGFsLXRpdGxlLWNvbnRhaW5lciAuYWRtaW4tbW9kYWwtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmNsb3NlLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIHJpZ2h0OiAxOXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4ubW9kYWwtZm9ybS1pbWFnZSB7XG4gIGhlaWdodDogMTY1cHg7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDBjNDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1vZGFsLWZvcm0taW1hZ2UgLm1vZGFsLWltYWdlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubW9kYWwtZm9ybS1pbWFnZSAubW9kYWwtaW1hZ2UgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm1vZGFsLWZvcm0taW1hZ2UgLmltYWdlLWNoYW5nZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbn1cbi5tb2RhbC1mb3JtLWltYWdlIC5pbWFnZS1jaGFuZ2VyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogI2ZmZmZmZmJhO1xufVxuXG4ubW9kYWwtZm9ybS1jb250YWluZXIgaW9uLWxhYmVsIHtcbiAgY29sb3I6IGdyYXk7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/admin-panel/components/service-sub-types-modal/service-sub-types-modal.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/admin-panel/components/service-sub-types-modal/service-sub-types-modal.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ServiceSubTypesModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceSubTypesModalComponent", function() { return ServiceSubTypesModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _communication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../communication.service */ "./src/app/pages/admin-panel/communication.service.ts");
/* harmony import */ var _shared_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared-service.service */ "./src/app/shared-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let ServiceSubTypesModalComponent = class ServiceSubTypesModalComponent {
    constructor(navParams, router, adminService, communication, sharedService, formBuilder, modalController) {
        this.navParams = navParams;
        this.router = router;
        this.adminService = adminService;
        this.communication = communication;
        this.sharedService = sharedService;
        this.formBuilder = formBuilder;
        this.modalController = modalController;
        this.selectedImage = null;
        this.imageBase64 = '';
        this.imageUrl = '';
        this.subServiceId = '';
        this.editMode = false;
        this.serviceTypes = [];
    }
    ngOnInit() {
        this.adminComponentForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({ value: '', disabled: false }, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required
            ]),
            serviceType: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]({ value: '', disabled: false }, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required
            ])
        });
        this.getMainServices();
        this.editMode = false;
        if (this.navParams && this.navParams.data && this.navParams.data.id) {
            this.editMode = true;
            this.patchModalData(this.navParams.data);
        }
    }
    getMainServices() {
        this.adminService.getAllServiceTypes().subscribe(res => this.getMainServicesSuccess(res), error => {
            this.adminService.commonError(error);
        });
    }
    getMainServicesSuccess(res) {
        this.serviceTypes = res;
    }
    ionViewWillLeave() {
        this.editMode = false;
    }
    patchModalData(patchData) {
        this.adminComponentForm.get('name').setValue(patchData.name);
        this.adminComponentForm.get('serviceType').setValue(patchData.serviceType.id);
        this.subServiceId = patchData.id;
    }
    onAddValue() {
        if (this.adminComponentForm.invalid) {
            this.sharedService.presentToast('Please fill all the mandatory fields', 'error');
            return;
        }
        if (this.editMode) {
            this.patchSubService();
        }
        else {
            this.createSubService();
        }
    }
    patchSubService() {
        const data = {
            name: this.adminComponentForm.get('name').value,
            serviceType: this.adminComponentForm.get('serviceType').value
        };
        this.adminService.updateSubService(data, this.subServiceId).subscribe(res => this.createSubServiceSuccess(res), error => {
            this.adminService.commonError(error);
        });
    }
    createSubService() {
        const data = {
            name: this.adminComponentForm.get('name').value,
            serviceType: this.adminComponentForm.get('serviceType').value
        };
        this.adminService.createSubService(data).subscribe(res => this.createSubServiceSuccess(res), error => {
            this.adminService.commonError(error);
        });
    }
    createSubServiceSuccess(res) {
        this.sharedService.presentToast(res.message, 'success');
        this.closeModal();
    }
    closeModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.adminComponentForm.reset();
            this.selectedImage = null;
            this.imageBase64 = '';
            const onClosedData = 'Wrapped Up!';
            yield this.modalController.dismiss(onClosedData);
        });
    }
    getImageBase64(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.imageBase64 = reader.result;
        };
    }
};
ServiceSubTypesModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _communication_service__WEBPACK_IMPORTED_MODULE_5__["CommunicationService"] },
    { type: _shared_service_service__WEBPACK_IMPORTED_MODULE_6__["SharedServiceService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ServiceSubTypesModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-service-sub-types-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./service-sub-types-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/components/service-sub-types-modal/service-sub-types-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./service-sub-types-modal.component.scss */ "./src/app/pages/admin-panel/components/service-sub-types-modal/service-sub-types-modal.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
        _communication_service__WEBPACK_IMPORTED_MODULE_5__["CommunicationService"],
        _shared_service_service__WEBPACK_IMPORTED_MODULE_6__["SharedServiceService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], ServiceSubTypesModalComponent);



/***/ }),

/***/ "./src/app/pages/admin-panel/components/service-sub-types-modal/service-sub-types-modal.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/admin-panel/components/service-sub-types-modal/service-sub-types-modal.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: ServiceSubTypesModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceSubTypesModalModule", function() { return ServiceSubTypesModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _service_sub_types_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service-sub-types-modal.component */ "./src/app/pages/admin-panel/components/service-sub-types-modal/service-sub-types-modal.component.ts");







let ServiceSubTypesModalModule = class ServiceSubTypesModalModule {
};
ServiceSubTypesModalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        exports: [
            _service_sub_types_modal_component__WEBPACK_IMPORTED_MODULE_6__["ServiceSubTypesModalComponent"]
        ],
        declarations: [_service_sub_types_modal_component__WEBPACK_IMPORTED_MODULE_6__["ServiceSubTypesModalComponent"]],
        entryComponents: [_service_sub_types_modal_component__WEBPACK_IMPORTED_MODULE_6__["ServiceSubTypesModalComponent"]]
    })
], ServiceSubTypesModalModule);



/***/ }),

/***/ "./src/app/pages/admin-panel/service-sub-types/service-sub-types-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/admin-panel/service-sub-types/service-sub-types-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ServiceSubTypesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceSubTypesPageRoutingModule", function() { return ServiceSubTypesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_sub_types_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-sub-types.page */ "./src/app/pages/admin-panel/service-sub-types/service-sub-types.page.ts");




const routes = [
    {
        path: '',
        component: _service_sub_types_page__WEBPACK_IMPORTED_MODULE_3__["ServiceSubTypesPage"]
    }
];
let ServiceSubTypesPageRoutingModule = class ServiceSubTypesPageRoutingModule {
};
ServiceSubTypesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ServiceSubTypesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/admin-panel/service-sub-types/service-sub-types.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/admin-panel/service-sub-types/service-sub-types.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ServiceSubTypesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceSubTypesPageModule", function() { return ServiceSubTypesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _service_sub_types_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service-sub-types-routing.module */ "./src/app/pages/admin-panel/service-sub-types/service-sub-types-routing.module.ts");
/* harmony import */ var _service_sub_types_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service-sub-types.page */ "./src/app/pages/admin-panel/service-sub-types/service-sub-types.page.ts");
/* harmony import */ var _components_service_sub_types_modal_service_sub_types_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/service-sub-types-modal/service-sub-types-modal.module */ "./src/app/pages/admin-panel/components/service-sub-types-modal/service-sub-types-modal.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");









let ServiceSubTypesPageModule = class ServiceSubTypesPageModule {
};
ServiceSubTypesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _service_sub_types_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServiceSubTypesPageRoutingModule"],
            _components_service_sub_types_modal_service_sub_types_modal_module__WEBPACK_IMPORTED_MODULE_7__["ServiceSubTypesModalModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        ],
        declarations: [_service_sub_types_page__WEBPACK_IMPORTED_MODULE_6__["ServiceSubTypesPage"]]
    })
], ServiceSubTypesPageModule);



/***/ }),

/***/ "./src/app/pages/admin-panel/service-sub-types/service-sub-types.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/admin-panel/service-sub-types/service-sub-types.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 12px;\n  border-bottom: 6px solid #d3d3d37a;\n}\n.page-heading .heading-text {\n  font-size: 18px;\n}\n.service-types-image-container {\n  height: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #000000c4;\n}\n.service-types-image-container img {\n  height: 200px;\n}\n.service-type-grid ion-row {\n  padding: 5px;\n  border-radius: 5px;\n}\n.service-type-grid ion-row:nth-child(2n+1) {\n  background: lightgray;\n}\n.service-type-footer-icons {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.service-type-footer-icons button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 10px;\n}\n.service-type-footer-icons button .mat-button-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.ion-card-header {\n  display: flex;\n  align-items: center;\n}\n.ion-card-header .service-type-name {\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL2FwcC9wYWdlcy9hZG1pbi1wYW5lbC9zZXJ2aWNlLXN1Yi10eXBlcy9zZXJ2aWNlLXN1Yi10eXBlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FkbWluLXBhbmVsL3NlcnZpY2Utc3ViLXR5cGVzL3NlcnZpY2Utc3ViLXR5cGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQ0FGO0FEQ0U7RUFDRSxlQUFBO0FDQ0o7QURHQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQUY7QURDRTtFQUNFLGFBQUE7QUNDSjtBRElFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDREo7QURHRTtFQUNFLHFCQUFBO0FDREo7QURLQTtFQUNFLGFBQUE7RUFBZSwyQkFBQTtFQUE2QixtQkFBQTtBQ0E5QztBRENFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQUk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0VOO0FER0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNBRjtBRENFO0VBQ0UsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW4tcGFuZWwvc2VydmljZS1zdWItdHlwZXMvc2VydmljZS1zdWItdHlwZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucGFnZS1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCAjZDNkM2QzN2E7XG4gIC5oZWFkaW5nLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuXG4uc2VydmljZS10eXBlcy1pbWFnZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzAwMDAwMGM0O1xuICBpbWcge1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cbn1cblxuLnNlcnZpY2UtdHlwZS1ncmlkIHtcbiAgaW9uLXJvdyB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuICBpb24tcm93Om50aC1jaGlsZCgybisxKSB7XG4gICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICB9XG59XG5cbi5zZXJ2aWNlLXR5cGUtZm9vdGVyLWljb25zIHtcbiAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyBhbGlnbi1pdGVtczogY2VudGVyO1xuICBidXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgLm1hdC1idXR0b24td3JhcHBlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgfVxufVxuXG4uaW9uLWNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLnNlcnZpY2UtdHlwZS1uYW1lIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbn1cbiIsIi5wYWdlLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkICNkM2QzZDM3YTtcbn1cbi5wYWdlLWhlYWRpbmcgLmhlYWRpbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnNlcnZpY2UtdHlwZXMtaW1hZ2UtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDBjNDtcbn1cbi5zZXJ2aWNlLXR5cGVzLWltYWdlLWNvbnRhaW5lciBpbWcge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uc2VydmljZS10eXBlLWdyaWQgaW9uLXJvdyB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnNlcnZpY2UtdHlwZS1ncmlkIGlvbi1yb3c6bnRoLWNoaWxkKDJuKzEpIHtcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xufVxuXG4uc2VydmljZS10eXBlLWZvb3Rlci1pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zZXJ2aWNlLXR5cGUtZm9vdGVyLWljb25zIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uc2VydmljZS10eXBlLWZvb3Rlci1pY29ucyBidXR0b24gLm1hdC1idXR0b24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW9uLWNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pb24tY2FyZC1oZWFkZXIgLnNlcnZpY2UtdHlwZS1uYW1lIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/admin-panel/service-sub-types/service-sub-types.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/admin-panel/service-sub-types/service-sub-types.page.ts ***!
  \*******************************************************************************/
/*! exports provided: ServiceSubTypesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceSubTypesPage", function() { return ServiceSubTypesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _components_service_sub_types_modal_service_sub_types_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/service-sub-types-modal/service-sub-types-modal.component */ "./src/app/pages/admin-panel/components/service-sub-types-modal/service-sub-types-modal.component.ts");
/* harmony import */ var _communication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../communication.service */ "./src/app/pages/admin-panel/communication.service.ts");
/* harmony import */ var _shared_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared-service.service */ "./src/app/shared-service.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../api.service */ "./src/app/api.service.ts");







let ServiceSubTypesPage = class ServiceSubTypesPage {
    constructor(sharedService, alertController, communicationService, adminService, modalController) {
        this.sharedService = sharedService;
        this.alertController = alertController;
        this.communicationService = communicationService;
        this.adminService = adminService;
        this.modalController = modalController;
        this.subServices = [];
        this.selectedServiceType = null;
    }
    presentModal(componentData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_service_sub_types_modal_service_sub_types_modal_component__WEBPACK_IMPORTED_MODULE_3__["ServiceSubTypesModalComponent"],
                cssClass: 'admin-modal-class',
                backdropDismiss: true,
                swipeToClose: true,
                showBackdrop: true,
                componentProps: componentData
            });
            modal.onWillDismiss().then(() => {
                this.getMainServices();
            });
            return yield modal.present();
        });
    }
    onEdit(serviceType) {
        this.selectedServiceType = serviceType;
        this.presentModal(serviceType);
    }
    onDelete(serviceType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.communicationService.showAdminSpinner.next(true);
            const serviceTypeId = serviceType.id;
            const alert = yield this.alertController.create({
                header: `Do you want to delete ${serviceType.name}?`,
                cssClass: 'alert-popup',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            this.communicationService.showAdminSpinner.next(false);
                        },
                    },
                    {
                        text: 'OK',
                        role: 'confirm',
                        handler: () => {
                            this.deleteServiceType(serviceTypeId);
                        },
                    },
                ]
            });
            yield alert.present();
        });
    }
    deleteServiceType(serviceTypeId) {
        this.adminService.deleteSubService(serviceTypeId).subscribe(res => this.deleteServiceTypeSuccess(res), error => {
            this.adminService.commonError(error);
        });
    }
    deleteServiceTypeSuccess(res) {
        this.sharedService.presentToast('Sub Service deleted Successfully.', 'success');
        this.getMainServices();
        this.communicationService.showAdminSpinner.next(false);
    }
    ionViewWillEnter() {
        this.communicationService.pageTitle.next('Sub Services');
    }
    ionViewWillLeave() {
        this.closeModal();
    }
    closeModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const onClosedData = 'Wrapped Up!';
            yield this.modalController.dismiss(onClosedData);
        });
    }
    ngOnInit() {
        this.communicationService.pageTitle.next('Sub Services');
        this.getMainServices();
    }
    getMainServices() {
        this.adminService.getAllSubService().subscribe(res => this.getAllSubServiceSuccess(res), error => {
            this.adminService.commonError(error);
        });
    }
    getAllSubServiceSuccess(res) {
        this.subServices = res;
        console.log(this.subServices, 'this.subServices');
    }
};
ServiceSubTypesPage.ctorParameters = () => [
    { type: _shared_service_service__WEBPACK_IMPORTED_MODULE_5__["SharedServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _communication_service__WEBPACK_IMPORTED_MODULE_4__["CommunicationService"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ServiceSubTypesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-service-sub-types',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./service-sub-types.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/service-sub-types/service-sub-types.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./service-sub-types.page.scss */ "./src/app/pages/admin-panel/service-sub-types/service-sub-types.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_service__WEBPACK_IMPORTED_MODULE_5__["SharedServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _communication_service__WEBPACK_IMPORTED_MODULE_4__["CommunicationService"], _api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], ServiceSubTypesPage);



/***/ })

}]);
//# sourceMappingURL=service-sub-types-service-sub-types-module-es2015.js.map