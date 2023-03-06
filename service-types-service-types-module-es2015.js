(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-types-service-types-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/components/service-types-modal/service-types-modal.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/components/service-types-modal/service-types-modal.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <div>\n        <div class=\"drawer\"></div>\n    </div>\n    <div class=\"admin-modal-title-container\">\n        <div style=\"display: flex; justify-content: end;\">\n            <i (click)=\"closeModal()\" class=\"fa fa-times close-button\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"admin-modal-title\">{{editMode ? 'Update' : 'Add'}} Service Type</div>\n    </div>\n</ion-header>\n<ion-content>\n    <form [formGroup]='serviceTypesForm'>\n        <div class=\"modal-form-image\">\n\n            <div class=\"modal-image\">\n                <img *ngIf=\"imageBase64 && !imageUrl\" src=\"{{imageBase64}}\" alt=\"\">\n                <img *ngIf=\"!imageBase64 && !imageUrl\" src=\"/assets/no-image.png\" alt=\"\">\n                <img *ngIf=\"editMode && imageUrl\" [src]=\"imageUrl\" alt=\"\">\n            </div>\n            <div class=\"image-changer\">\n                <input formControlName=\"image\" accept=\"image/*\" (change)=\"onFileChange($event)\" type=\"file\" id=\"upload\"\n                       hidden/>\n                <label style=\"margin-bottom: 0\" for=\"upload\">\n                    <ion-icon name=\"add-circle-outline\"></ion-icon>\n                </label>\n            </div>\n        </div>\n\n        <div class=\"modal-form-container\">\n            <ion-list>\n                <ion-item>\n                    <ion-label class=\"required-label\" position=\"floating\">Service Type Name</ion-label>\n                    <ion-input maxlength=\"20\" formControlName=\"name\"></ion-input>\n                    <ion-note slot=\"error\">Please Select Name</ion-note>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label position=\"floating\" class=\"required-label\">Type</ion-label>\n                    <ion-select formControlName=\"type\" okText=\"Okay\" cancelText=\"Dismiss\">\n                        <ion-select-option value=\"convincing\">Convincing</ion-select-option>\n                        <ion-select-option value=\"frequent\">Frequent</ion-select-option>\n                    </ion-select>\n                </ion-item>\n            </ion-list>\n        </div>\n    </form>\n</ion-content>\n\n<ion-footer>\n    <div style=\"display: flex; justify-content: center; padding: 10px;\">\n        <button (click)=\"onAddServiceType()\" style=\"width: 250px\"\n                mat-raised-button color=\"primary\">{{editMode ? 'Update' : 'Save'}}\n        </button>\n    </div>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/service-types/service-types.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/service-types/service-types.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <div class=\"service-type-container\">\n        <div class=\"service-types-container\">\n            <ion-card *ngFor=\"let serviceType of serviceTypes\">\n                <div class=\"service-types-image-container\">\n                    <img [src]=\"serviceType?.imageUrl\"/>\n                </div>\n                <ion-card-header>\n                    <div class=\"ion-card-header\">\n                        <div class=\"service-type-name\">{{serviceType?.name}}</div>\n                        <div *ngIf=\"serviceType?.sequence\" style=\"margin: 0 15px\">\n                            <ion-chip color=\"primary\">{{serviceType?.sequence}}</ion-chip>\n                        </div>\n                    </div>\n                </ion-card-header>\n                <mat-divider></mat-divider>\n                <ion-card-content>\n                    <div class=\"service-type-footer-icons\">\n                        <button (click)=\"onEdit(serviceType)\" color=\"primary\" mat-mini-fab>\n                            <i class=\"fa fa-pencil-square-o\"></i>\n                        </button>\n                        <button (click)=\"onDelete(serviceType)\" color=\"warn\" mat-mini-fab>\n                            <i class=\"fa fa-trash\"></i>\n                        </button>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </div>\n    <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\">\n        <ion-fab-button (click)=\"presentModal({})\" size=\"small\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/pages/admin-panel/components/service-types-modal/service-types-modal.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/admin-panel/components/service-types-modal/service-types-modal.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".drawer {\n  left: 0px;\n  right: 0px;\n  top: 5px;\n  border-radius: 8px;\n  margin-left: auto;\n  margin-right: auto;\n  position: absolute;\n  width: 36px;\n  height: 5px;\n  transform: translateZ(0px);\n  border: 0px;\n  background: var(--ion-color-step-350, #c0c0be);\n  cursor: pointer;\n  z-index: 11;\n}\n\n.admin-modal-title-container {\n  display: flex;\n  flex-direction: column;\n  padding: 15px 15px 10px;\n  border-bottom: 1px solid lightgray;\n  width: 100%;\n}\n\n.admin-modal-title-container .admin-modal-title {\n  text-align: center;\n  font-size: 18px;\n  font-weight: 800;\n}\n\n.close-button {\n  display: flex;\n  position: absolute;\n  justify-content: end;\n  right: 19px;\n  font-size: 20px;\n  color: gray;\n}\n\n.modal-form-image {\n  height: 165px;\n  background: #000000c4;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.modal-form-image .modal-image {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.modal-form-image .modal-image img {\n  height: 100%;\n}\n\n.modal-form-image .image-changer {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  padding: 10px 15px;\n}\n\n.modal-form-image .image-changer ion-icon {\n  font-size: 25px;\n  color: #ffffffba;\n}\n\n.modal-form-container ion-label {\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4tcGFuZWwvY29tcG9uZW50cy9zZXJ2aWNlLXR5cGVzLW1vZGFsL0M6XFxVc2Vyc1xcYWFiaGFnd2FcXHNhbmRoeWFkZWVwXFxzYW5kaHlhZGVlcC11aS9zcmNcXGFwcFxccGFnZXNcXGFkbWluLXBhbmVsXFxjb21wb25lbnRzXFxzZXJ2aWNlLXR5cGVzLW1vZGFsXFxzZXJ2aWNlLXR5cGVzLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hZG1pbi1wYW5lbC9jb21wb25lbnRzL3NlcnZpY2UtdHlwZXMtbW9kYWwvc2VydmljZS10eXBlcy1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSw4Q0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREFFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURFQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREFFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNFSjs7QURESTtFQUNFLFlBQUE7QUNHTjs7QURBRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURESTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0dOOztBREVFO0VBQ0UsV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW4tcGFuZWwvY29tcG9uZW50cy9zZXJ2aWNlLXR5cGVzLW1vZGFsL3NlcnZpY2UtdHlwZXMtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJhd2VyIHtcclxuICBsZWZ0OiAwcHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICB0b3A6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMzZweDtcclxuICBoZWlnaHQ6IDVweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTtcclxuICBib3JkZXI6IDBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0zNTAsICNjMGMwYmUpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB6LWluZGV4OiAxMTtcclxufVxyXG5cclxuLmFkbWluLW1vZGFsLXRpdGxlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDE1cHggMTVweCAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLmFkbWluLW1vZGFsLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgfVxyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICByaWdodDogMTlweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5tb2RhbC1mb3JtLWltYWdlIHtcclxuICBoZWlnaHQ6IDE2NXB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMDAwMDBjNDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC5tb2RhbC1pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGltZyB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgLmltYWdlLWNoYW5nZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmYmE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5tb2RhbC1mb3JtLWNvbnRhaW5lciB7XHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gIH1cclxufVxyXG4iLCIuZHJhd2VyIHtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICB0b3A6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDVweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XG4gIGJvcmRlcjogMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0zNTAsICNjMGMwYmUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDExO1xufVxuXG4uYWRtaW4tbW9kYWwtdGl0bGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTVweCAxNXB4IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmFkbWluLW1vZGFsLXRpdGxlLWNvbnRhaW5lciAuYWRtaW4tbW9kYWwtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmNsb3NlLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIHJpZ2h0OiAxOXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4ubW9kYWwtZm9ybS1pbWFnZSB7XG4gIGhlaWdodDogMTY1cHg7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDBjNDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1vZGFsLWZvcm0taW1hZ2UgLm1vZGFsLWltYWdlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubW9kYWwtZm9ybS1pbWFnZSAubW9kYWwtaW1hZ2UgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm1vZGFsLWZvcm0taW1hZ2UgLmltYWdlLWNoYW5nZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbn1cbi5tb2RhbC1mb3JtLWltYWdlIC5pbWFnZS1jaGFuZ2VyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogI2ZmZmZmZmJhO1xufVxuXG4ubW9kYWwtZm9ybS1jb250YWluZXIgaW9uLWxhYmVsIHtcbiAgY29sb3I6IGdyYXk7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/admin-panel/components/service-types-modal/service-types-modal.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/admin-panel/components/service-types-modal/service-types-modal.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ServiceTypesModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceTypesModalComponent", function() { return ServiceTypesModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared-service.service */ "./src/app/shared-service.service.ts");
/* harmony import */ var _communication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../communication.service */ "./src/app/pages/admin-panel/communication.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let ServiceTypesModalComponent = class ServiceTypesModalComponent {
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
        this.serviceTypeId = '';
        this.editMode = false;
    }
    ngOnInit() {
        this.serviceTypesForm = this.formBuilder.group({
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: false }, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: false }, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: false }, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])
        });
        this.editMode = false;
        if (this.navParams && this.navParams.data && this.navParams.data.id) {
            this.editMode = true;
            this.patchModalData(this.navParams.data);
        }
    }
    ionViewWillLeave() {
        this.editMode = false;
    }
    patchModalData(patchData) {
        this.serviceTypesForm.get('name').setValue(patchData.name);
        this.serviceTypesForm.get('type').setValue(patchData.type);
        this.serviceTypesForm.get('image').setValue(patchData.imageUrl);
        // This logic to update the image
        this.imageUrl = `${patchData.imageUrl}?${new Date().getTime()}`;
        this.serviceTypeId = patchData.id;
    }
    onAddServiceType() {
        if (this.serviceTypesForm.invalid) {
            this.sharedService.presentToast('Please fill all the mandatory fields', 'error');
            return;
        }
        if ((this.imageUrl.length === 0) && (this.imageBase64.length === 0)) {
            this.sharedService.presentToast('Please select the image', 'error');
            return;
        }
        if (this.editMode) {
            this.patchServiceType();
        }
        else {
            this.createServiceType();
        }
    }
    patchServiceType() {
        const formData = new FormData();
        formData.append('name', this.serviceTypesForm.get('name').value);
        formData.append('type', this.serviceTypesForm.get('type').value);
        if (this.imageBase64) {
            const fileName = `service-type-${(this.serviceTypesForm.get('name').value).toLowerCase().trim().split(' ').join('-')}.${this.selectedImage.name.split('.')[1]}`;
            formData.append('file', this.selectedImage, fileName);
        }
        this.adminService.updateServiceType(formData, this.serviceTypeId).subscribe(res => this.createServiceTypeSuccess(res), error => {
            this.adminService.commonError(error);
        });
    }
    createServiceType() {
        const formData = new FormData();
        const fileName = `service-type-${(this.serviceTypesForm.get('name').value).toLowerCase().trim().split(' ').join('-')}.${this.selectedImage.name.split('.')[1]}`;
        formData.append('name', this.serviceTypesForm.get('name').value);
        formData.append('type', this.serviceTypesForm.get('type').value);
        formData.append('file', this.selectedImage, fileName);
        this.adminService.createServiceType(formData).subscribe(res => this.createServiceTypeSuccess(res), error => {
            this.adminService.commonError(error);
        });
    }
    createServiceTypeSuccess(res) {
        this.closeModal();
        this.sharedService.presentToast(res.message, 'success');
    }
    closeModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.serviceTypesForm.reset();
            this.selectedImage = null;
            this.imageBase64 = '';
            const onClosedData = "Wrapped Up!";
            yield this.modalController.dismiss(onClosedData);
        });
    }
    onFileChange(event) {
        const image = event.target.files[0];
        const fileExtension = image.name.split('.')[1].toLowerCase();
        if (image && image.type.includes('image') && ['png', 'jpg', 'jpeg'].includes(fileExtension)) {
            this.getImageBase64(image);
            this.selectedImage = image;
            this.imageUrl = '';
        }
        else {
            this.sharedService.presentToast('Image format is incorrect', 'error');
        }
    }
    getImageBase64(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.imageBase64 = reader.result;
        };
    }
};
ServiceTypesModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _communication_service__WEBPACK_IMPORTED_MODULE_5__["CommunicationService"] },
    { type: _shared_service_service__WEBPACK_IMPORTED_MODULE_4__["SharedServiceService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ServiceTypesModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-service-types-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./service-types-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/components/service-types-modal/service-types-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./service-types-modal.component.scss */ "./src/app/pages/admin-panel/components/service-types-modal/service-types-modal.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _communication_service__WEBPACK_IMPORTED_MODULE_5__["CommunicationService"], _shared_service_service__WEBPACK_IMPORTED_MODULE_4__["SharedServiceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], ServiceTypesModalComponent);



/***/ }),

/***/ "./src/app/pages/admin-panel/components/service-types-modal/service-types-modal.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/admin-panel/components/service-types-modal/service-types-modal.module.ts ***!
  \************************************************************************************************/
/*! exports provided: ServiceTypesModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceTypesModalModule", function() { return ServiceTypesModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _service_types_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service-types-modal.component */ "./src/app/pages/admin-panel/components/service-types-modal/service-types-modal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");







let ServiceTypesModalModule = class ServiceTypesModalModule {
};
ServiceTypesModalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        exports: [
            _service_types_modal_component__WEBPACK_IMPORTED_MODULE_5__["ServiceTypesModalComponent"]
        ],
        declarations: [_service_types_modal_component__WEBPACK_IMPORTED_MODULE_5__["ServiceTypesModalComponent"]],
        entryComponents: [_service_types_modal_component__WEBPACK_IMPORTED_MODULE_5__["ServiceTypesModalComponent"]]
    })
], ServiceTypesModalModule);



/***/ }),

/***/ "./src/app/pages/admin-panel/service-types/service-types-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/admin-panel/service-types/service-types-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ServiceTypesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceTypesPageRoutingModule", function() { return ServiceTypesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_types_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-types.page */ "./src/app/pages/admin-panel/service-types/service-types.page.ts");




const routes = [
    {
        path: '',
        component: _service_types_page__WEBPACK_IMPORTED_MODULE_3__["ServiceTypesPage"]
    }
];
let ServiceTypesPageRoutingModule = class ServiceTypesPageRoutingModule {
};
ServiceTypesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ServiceTypesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/admin-panel/service-types/service-types.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/admin-panel/service-types/service-types.module.ts ***!
  \*************************************************************************/
/*! exports provided: ServiceTypesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceTypesPageModule", function() { return ServiceTypesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _service_types_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service-types-routing.module */ "./src/app/pages/admin-panel/service-types/service-types-routing.module.ts");
/* harmony import */ var _service_types_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service-types.page */ "./src/app/pages/admin-panel/service-types/service-types.page.ts");
/* harmony import */ var _components_service_types_modal_service_types_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/service-types-modal/service-types-modal.module */ "./src/app/pages/admin-panel/components/service-types-modal/service-types-modal.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");









let ServiceTypesPageModule = class ServiceTypesPageModule {
};
ServiceTypesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _service_types_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServiceTypesPageRoutingModule"],
            _components_service_types_modal_service_types_modal_module__WEBPACK_IMPORTED_MODULE_7__["ServiceTypesModalModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"]
        ],
        declarations: [_service_types_page__WEBPACK_IMPORTED_MODULE_6__["ServiceTypesPage"]],
        entryComponents: [_service_types_page__WEBPACK_IMPORTED_MODULE_6__["ServiceTypesPage"]]
    })
], ServiceTypesPageModule);



/***/ }),

/***/ "./src/app/pages/admin-panel/service-types/service-types.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/admin-panel/service-types/service-types.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 12px;\n  border-bottom: 6px solid #d3d3d37a;\n}\n.page-heading .heading-text {\n  font-size: 18px;\n}\n.service-types-image-container {\n  height: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #000000c4;\n}\n.service-types-image-container img {\n  height: 200px;\n}\n.service-type-grid ion-row {\n  padding: 5px;\n  border-radius: 5px;\n}\n.service-type-grid ion-row:nth-child(2n+1) {\n  background: lightgray;\n}\n.service-type-footer-icons {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.service-type-footer-icons button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 10px;\n}\n.service-type-footer-icons button .mat-button-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.ion-card-header {\n  display: flex;\n  align-items: center;\n}\n.ion-card-header .service-type-name {\n  font-size: 22px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4tcGFuZWwvc2VydmljZS10eXBlcy9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxhcHBcXHBhZ2VzXFxhZG1pbi1wYW5lbFxcc2VydmljZS10eXBlc1xcc2VydmljZS10eXBlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FkbWluLXBhbmVsL3NlcnZpY2UtdHlwZXMvc2VydmljZS10eXBlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QUNBRjtBRENFO0VBQ0UsZUFBQTtBQ0NKO0FER0E7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0FGO0FEQ0U7RUFDRSxhQUFBO0FDQ0o7QURJRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0RKO0FER0U7RUFDRSxxQkFBQTtBQ0RKO0FES0E7RUFDRSxhQUFBO0VBQWUsMkJBQUE7RUFBNkIsbUJBQUE7QUNBOUM7QURDRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREFJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNFTjtBREdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQUY7QURDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW4tcGFuZWwvc2VydmljZS10eXBlcy9zZXJ2aWNlLXR5cGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ucGFnZS1oZWFkaW5nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICBib3JkZXItYm90dG9tOiA2cHggc29saWQgI2QzZDNkMzdhO1xyXG4gIC5oZWFkaW5nLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnNlcnZpY2UtdHlwZXMtaW1hZ2UtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwYzQ7XHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VydmljZS10eXBlLWdyaWQge1xyXG4gIGlvbi1yb3cge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuICBpb24tcm93Om50aC1jaGlsZCgybisxKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VydmljZS10eXBlLWZvb3Rlci1pY29ucyB7XHJcbiAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgLm1hdC1idXR0b24td3JhcHBlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmlvbi1jYXJkLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC5zZXJ2aWNlLXR5cGUtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxufVxyXG4iLCIucGFnZS1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCAjZDNkM2QzN2E7XG59XG4ucGFnZS1oZWFkaW5nIC5oZWFkaW5nLXRleHQge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zZXJ2aWNlLXR5cGVzLWltYWdlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMjAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwYzQ7XG59XG4uc2VydmljZS10eXBlcy1pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLnNlcnZpY2UtdHlwZS1ncmlkIGlvbi1yb3cge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5zZXJ2aWNlLXR5cGUtZ3JpZCBpb24tcm93Om50aC1jaGlsZCgybisxKSB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbn1cblxuLnNlcnZpY2UtdHlwZS1mb290ZXItaWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2VydmljZS10eXBlLWZvb3Rlci1pY29ucyBidXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnNlcnZpY2UtdHlwZS1mb290ZXItaWNvbnMgYnV0dG9uIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmlvbi1jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaW9uLWNhcmQtaGVhZGVyIC5zZXJ2aWNlLXR5cGUtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/admin-panel/service-types/service-types.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/admin-panel/service-types/service-types.page.ts ***!
  \***********************************************************************/
/*! exports provided: ServiceTypesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceTypesPage", function() { return ServiceTypesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _components_service_types_modal_service_types_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/service-types-modal/service-types-modal.component */ "./src/app/pages/admin-panel/components/service-types-modal/service-types-modal.component.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _communication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../communication.service */ "./src/app/pages/admin-panel/communication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared-service.service */ "./src/app/shared-service.service.ts");








// import { CheckboxCustomEvent } from '@ionic/angular';
let ServiceTypesPage = class ServiceTypesPage {
    constructor(sharedService, alertController, communicationService, adminService, modalController) {
        this.sharedService = sharedService;
        this.alertController = alertController;
        this.communicationService = communicationService;
        this.adminService = adminService;
        this.modalController = modalController;
        this.serviceTypes = [];
        this.selectedServiceType = null;
    }
    presentModal(componentData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_service_types_modal_service_types_modal_component__WEBPACK_IMPORTED_MODULE_3__["ServiceTypesModalComponent"],
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
        this.adminService.deleteServiceType(serviceTypeId).subscribe(res => this.deleteServiceTypeSuccess(res), error => {
            this.adminService.commonError(error);
        });
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
    deleteServiceTypeSuccess(res) {
        this.sharedService.presentToast('service Type deleted Successfully.', 'success');
        this.getMainServices();
        this.communicationService.showAdminSpinner.next(false);
    }
    ionViewWillEnter() {
        this.communicationService.pageTitle.next('Service Types');
    }
    ngOnInit() {
        this.communicationService.pageTitle.next('Service Types');
        this.getMainServices();
    }
    getMainServices() {
        this.adminService.getAllServiceTypes().subscribe(res => this.getMainServicesSuccess(res), error => {
            this.adminService.commonError(error);
        });
    }
    getMainServicesSuccess(res) {
        this.serviceTypes = res;
        if (this.serviceTypes && this.serviceTypes.length) {
            this.serviceTypes = this.serviceTypes.map((ser) => {
                // Adding the api url and also updating image with timestamp
                ser.imageUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].domainUrlApi}${ser.imageUrl}?${new Date().getTime()}`;
                return ser;
            });
        }
        console.log(this.serviceTypes, 'this.serviceTypes');
    }
};
ServiceTypesPage.ctorParameters = () => [
    { type: _shared_service_service__WEBPACK_IMPORTED_MODULE_7__["SharedServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _communication_service__WEBPACK_IMPORTED_MODULE_5__["CommunicationService"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ServiceTypesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-service-types',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./service-types.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-panel/service-types/service-types.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./service-types.page.scss */ "./src/app/pages/admin-panel/service-types/service-types.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_service__WEBPACK_IMPORTED_MODULE_7__["SharedServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _communication_service__WEBPACK_IMPORTED_MODULE_5__["CommunicationService"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], ServiceTypesPage);



/***/ })

}]);
//# sourceMappingURL=service-types-service-types-module-es2015.js.map