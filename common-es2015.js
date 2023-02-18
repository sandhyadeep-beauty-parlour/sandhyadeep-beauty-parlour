(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/modal-popup/modal-popup.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/modal-popup/modal-popup.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <div (click)=\"closeModal()\" class=\"cross-container\"><ion-icon class=\"cross-icon\" name=\"close-outline\"></ion-icon></div>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"image-zoom-container\">\r\n    <ion-slides  zoom [options]=\"slideOptsTest\">\r\n      <ion-slide>\r\n        <div class=\"swiper-zoom-container\">\r\n          <img src=\"{{imageUrl}}\" alt=\"\">\r\n        </div>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/shared-components/modal-popup/modal-popup.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared-components/modal-popup/modal-popup.module.ts ***!
  \*********************************************************************/
/*! exports provided: ModalPopupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPopupModule", function() { return ModalPopupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _modal_popup_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-popup.page */ "./src/app/shared-components/modal-popup/modal-popup.page.ts");






let ModalPopupModule = class ModalPopupModule {
};
ModalPopupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        exports: [
            _modal_popup_page__WEBPACK_IMPORTED_MODULE_5__["ModalPopupPage"]
        ],
        declarations: [_modal_popup_page__WEBPACK_IMPORTED_MODULE_5__["ModalPopupPage"]]
    })
], ModalPopupModule);



/***/ }),

/***/ "./src/app/shared-components/modal-popup/modal-popup.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/shared-components/modal-popup/modal-popup.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: transparent;\n}\n\n.image-zoom-container {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n}\n\n.cross-icon {\n  color: white;\n  font-size: 30px;\n  font-weight: bold;\n  display: inline-block;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvbW9kYWwtcG9wdXAvQzpcXFVzZXJzXFxhYWJoYWd3YVxcc2FuZGh5YWRlZXAgaW9uaWMgc3RhY2svc3JjXFxhcHBcXHNoYXJlZC1jb21wb25lbnRzXFxtb2RhbC1wb3B1cFxcbW9kYWwtcG9wdXAucGFnZS5zY3NzIiwic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9tb2RhbC1wb3B1cC9tb2RhbC1wb3B1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtFQUFlLHVCQUFBO0VBQXlCLFlBQUE7QUNJMUM7O0FEREE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9tb2RhbC1wb3B1cC9tb2RhbC1wb3B1cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5pbWFnZS16b29tLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNyb3NzLWljb24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG4iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5pbWFnZS16b29tLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jcm9zcy1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared-components/modal-popup/modal-popup.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared-components/modal-popup/modal-popup.page.ts ***!
  \*******************************************************************/
/*! exports provided: ModalPopupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPopupPage", function() { return ModalPopupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let ModalPopupPage = class ModalPopupPage {
    constructor(modalController, navParams) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.slideOptsTest = {
            zoom: {
                maxRatio: 3,
            }
        };
    }
    ngOnInit() {
        this.imageUrl = this.navParams.data.imageUrl;
        this.modalTitle = this.navParams.data.paramTitle;
    }
    closeModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const onClosedData = "Wrapped Up!";
            yield this.modalController.dismiss(onClosedData);
        });
    }
};
ModalPopupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
];
ModalPopupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'modal-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal-popup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/modal-popup/modal-popup.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal-popup.page.scss */ "./src/app/shared-components/modal-popup/modal-popup.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
], ModalPopupPage);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map