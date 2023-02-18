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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/back-logo-component/back-logo-component.page.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/back-logo-component/back-logo-component.page.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header-container\">\n  <ion-header>\n    <div class=\"search-header-container\">\n      <div style=\"display: flex; justify-content: end; align-items: center\">\n        <div (click)=\"backClicked()\" class=\"header-back\">\n          <i class=\"fa fa-angle-left\"></i>\n        </div>\n        <div class=\"header-search\">\n          <div style=\"display: flex; align-items: center; justify-content: space-between;\">\n            <div style=\"width: 40px; border: 2px solid #666; padding: 1px; border-radius: 50%; overflow: hidden; display: inline-block; margin: 5px;\">\n              <img src=\"../../../assets/sandhyadeep-final-logo.png\">\n            </div>\n            <div class=\"logo-container\">\n              <div class=\"logo-text\">\n                Sandhyadeep\n              </div>\n              <div class=\"slogan-text\">\n                Have a hair affair with us\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"icons-list\">\n        <div class=\"icon-container\">\n          <i class=\"fa fa-bell\"></i>\n        </div>\n        <div class=\"icon-container \">\n          <i class=\"fa fa-search\"></i>\n        </div>\n        <div class=\"icon-container cart-icon\">\n          <i class=\"fa fa-shopping-cart\"></i>\n        </div>\n\n      </div>\n    </div>\n  </ion-header>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/modal-popup/modal-popup.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/modal-popup/modal-popup.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <div (click)=\"closeModal()\" class=\"cross-container\"><ion-icon class=\"cross-icon\" name=\"close-outline\"></ion-icon></div>\n</ion-header>\n<ion-content>\n  <div class=\"image-zoom-container\">\n    <ion-slides  zoom [options]=\"slideOptsTest\">\n      <ion-slide>\n        <div class=\"swiper-zoom-container\">\n          <img src=\"{{imageUrl}}\" alt=\"\">\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/shared-components/back-logo-component/back-logo-component.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/shared-components/back-logo-component/back-logo-component.module.ts ***!
  \*************************************************************************************/
/*! exports provided: BackLogoComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackLogoComponentModule", function() { return BackLogoComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _back_logo_component_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./back-logo-component.page */ "./src/app/shared-components/back-logo-component/back-logo-component.page.ts");






let BackLogoComponentModule = class BackLogoComponentModule {
};
BackLogoComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        exports: [
            _back_logo_component_page__WEBPACK_IMPORTED_MODULE_5__["BackLogoComponentPage"]
        ],
        declarations: [_back_logo_component_page__WEBPACK_IMPORTED_MODULE_5__["BackLogoComponentPage"]]
    })
], BackLogoComponentModule);



/***/ }),

/***/ "./src/app/shared-components/back-logo-component/back-logo-component.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/shared-components/back-logo-component/back-logo-component.page.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-container {\n  padding-bottom: 3px;\n  background: linear-gradient(305deg, #cc2b5e 2%, #753a88 63%);\n}\n.header-container ion-header {\n  background: white;\n}\n.header-container .search-header-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-container .search-header-container .header-back {\n  padding: 10px;\n  font-size: 30px;\n  color: #666;\n}\n.header-container .search-header-container .logo-container {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.1;\n}\n.header-container .search-header-container .logo-container .logo-text {\n  font-size: 25px;\n  font-weight: 700;\n}\n.header-container .search-header-container .logo-container .slogan-text {\n  font-size: 10px;\n  padding: 0 5px;\n}\n.header-container .search-header-container .icons-list {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header-container .search-header-container .icons-list .icon-container {\n  margin: 0 5px;\n}\n.header-container .search-header-container .icons-list .icon-container.cart-icon {\n  margin: 0 15px 0 5px;\n}\n.header-container .search-header-container .icons-list .icon-container i {\n  font-size: 22px;\n  color: #cc2b5e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL2JhY2stbG9nby1jb21wb25lbnQvYmFjay1sb2dvLWNvbXBvbmVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL2JhY2stbG9nby1jb21wb25lbnQvYmFjay1sb2dvLWNvbXBvbmVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLDREQUFBO0FDQ0Y7QURBRTtFQUNFLGlCQUFBO0FDRUo7QURBRTtFQUNFLGFBQUE7RUFBZSxtQkFBQTtFQUFxQiw4QkFBQTtBQ0l4QztBREhJO0VBQ0UsYUFBQTtFQUFlLGVBQUE7RUFBaUIsV0FBQTtBQ090QztBRExJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNPTjtBRE5NO0VBQ0UsZUFBQTtFQUFpQixnQkFBQTtBQ1N6QjtBRFBNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNTUjtBRE5JO0VBQ0UsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLDhCQUFBO0FDVTFDO0FEVE07RUFDRSxhQUFBO0FDV1I7QURWUTtFQUNFLG9CQUFBO0FDWVY7QURWUTtFQUNFLGVBQUE7RUFBaUIsY0FBQTtBQ2EzQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL2JhY2stbG9nby1jb21wb25lbnQvYmFjay1sb2dvLWNvbXBvbmVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMDVkZWcsICNjYzJiNWUgMiUsICM3NTNhODggNjMlKTtcbiAgaW9uLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cbiAgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLmhlYWRlci1iYWNrIHtcbiAgICAgIHBhZGRpbmc6IDEwcHg7IGZvbnQtc2l6ZTogMzBweDsgY29sb3I6ICM2NjY7XG4gICAgfVxuICAgIC5sb2dvLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgICAubG9nby10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4OyBmb250LXdlaWdodDogNzAwO1xuICAgICAgfVxuICAgICAgLnNsb2dhbi10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmljb25zLWxpc3Qge1xuICAgICAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgLmljb24tY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgJi5jYXJ0LWljb24ge1xuICAgICAgICAgIG1hcmdpbjogMCAxNXB4IDAgNXB4O1xuICAgICAgICB9XG4gICAgICAgIGkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDsgY29sb3I6ICNjYzJiNWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmhlYWRlci1jb250YWluZXIge1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzA1ZGVnLCAjY2MyYjVlIDIlLCAjNzUzYTg4IDYzJSk7XG59XG4uaGVhZGVyLWNvbnRhaW5lciBpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIgLmhlYWRlci1iYWNrIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzY2Njtcbn1cbi5oZWFkZXItY29udGFpbmVyIC5zZWFyY2gtaGVhZGVyLWNvbnRhaW5lciAubG9nby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBsaW5lLWhlaWdodDogMS4xO1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5sb2dvLWNvbnRhaW5lciAubG9nby10ZXh0IHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5sb2dvLWNvbnRhaW5lciAuc2xvZ2FuLXRleHQge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5pY29ucy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5pY29ucy1saXN0IC5pY29uLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCA1cHg7XG59XG4uaGVhZGVyLWNvbnRhaW5lciAuc2VhcmNoLWhlYWRlci1jb250YWluZXIgLmljb25zLWxpc3QgLmljb24tY29udGFpbmVyLmNhcnQtaWNvbiB7XG4gIG1hcmdpbjogMCAxNXB4IDAgNXB4O1xufVxuLmhlYWRlci1jb250YWluZXIgLnNlYXJjaC1oZWFkZXItY29udGFpbmVyIC5pY29ucy1saXN0IC5pY29uLWNvbnRhaW5lciBpIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI2NjMmI1ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared-components/back-logo-component/back-logo-component.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shared-components/back-logo-component/back-logo-component.page.ts ***!
  \***********************************************************************************/
/*! exports provided: BackLogoComponentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackLogoComponentPage", function() { return BackLogoComponentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let BackLogoComponentPage = class BackLogoComponentPage {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() { }
    backClicked() {
        this.location.back();
    }
};
BackLogoComponentPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
BackLogoComponentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'back-logo-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./back-logo-component.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/back-logo-component/back-logo-component.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./back-logo-component.page.scss */ "./src/app/shared-components/back-logo-component/back-logo-component.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
], BackLogoComponentPage);



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
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: transparent;\n}\n\n.image-zoom-container {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n}\n\n.cross-icon {\n  color: white;\n  font-size: 30px;\n  font-weight: bold;\n  display: inline-block;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL21vZGFsLXBvcHVwL21vZGFsLXBvcHVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvbW9kYWwtcG9wdXAvbW9kYWwtcG9wdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjs7QURDQTtFQUNFLGFBQUE7RUFBZSx1QkFBQTtFQUF5QixZQUFBO0FDSTFDOztBRERBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ0lGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvbW9kYWwtcG9wdXAvbW9kYWwtcG9wdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uaW1hZ2Utem9vbS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY3Jvc3MtaWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogcmlnaHQ7XG59XG4iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5pbWFnZS16b29tLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jcm9zcy1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */");

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