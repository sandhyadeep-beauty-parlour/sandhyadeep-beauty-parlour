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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/footer-component/footer-component.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/footer-component/footer-component.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-footer class=\"ion-no-border\">\r\n    <div class=\"footer-container\">\r\n        <div routerLink=\"/feed\" routerLinkActive=\"selected\" #FeedRLA=\"routerLinkActive\" class=\"single-tab\">\r\n            <img src=\"{{FeedRLA.isActive ? '/assets/new-theme/home-active.png' : '/assets/new-theme/home.png'}}\"  alt=\"\">\r\n            <span>Feed</span>\r\n        </div>\r\n        <div routerLink=\"/bookings\" routerLinkActive=\"selected\" #bookingRLA=\"routerLinkActive\" class=\"single-tab\">\r\n            <img src=\"{{bookingRLA.isActive ? '/assets/new-theme/calendar-active.png' : '/assets/new-theme/calendar.png'}}\"  alt=\"\">\r\n            <span>Appointments</span>\r\n        </div>\r\n        <div routerLink=\"/portfolio\" routerLinkActive=\"selected\" #portFolioRLA=\"routerLinkActive\" class=\"single-tab\">\r\n            <img src=\"{{portFolioRLA.isActive ? '/assets/new-theme/folder-active.png' : '/assets/new-theme/folder.png'}}\"  alt=\"\">\r\n            <span>Portfolio</span>\r\n        </div>\r\n        <div routerLink=\"/settings\" routerLinkActive=\"selected\" #userRLA=\"routerLinkActive\" class=\"single-tab\">\r\n            <img src=\"{{userRLA.isActive ? '/assets/new-theme/user-active.png' : '/assets/new-theme/user.png'}}\"  alt=\"\">\r\n            <span>Profile</span>\r\n        </div>\r\n    </div>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/modal-popup/modal-popup.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/modal-popup/modal-popup.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <div (click)=\"closeModal()\" class=\"cross-container\"><ion-icon class=\"cross-icon\" name=\"close-outline\"></ion-icon></div>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"image-zoom-container\">\r\n    <ion-slides [options]=\"slideOptsTest\">\r\n      <ion-slide>\r\n        <div class=\"swiper-zoom-container\">\r\n          <img src=\"{{imageUrl}}\" alt=\"\">\r\n        </div>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/shared-components/footer-component/footer-component.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/shared-components/footer-component/footer-component.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer-container {\n  box-shadow: 4px 17px 20px 20px #6c757d3d;\n  -webkit-box-shadow: 4px 17px 20px 20px #6c757d3d;\n  -moz-box-shadow: 4px 17px 20px 20px #6c757d3d;\n  display: flex;\n  justify-content: space-around;\n  height: 60px;\n  align-items: center;\n}\n.footer-container .single-tab {\n  flex-basis: 25%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  font-size: 14px;\n}\n.footer-container .single-tab.selected {\n  color: #BD1E51;\n  font-weight: 700;\n}\n.footer-container .footer-tab {\n  font-size: 14px;\n  padding-top: 1px;\n  background: linear-gradient(305deg, #cc2b5e 2%, #753a88 63%);\n}\n.footer-container ion-tab-bar {\n  padding: 8px 0;\n}\n.footer-container ion-tab-bar ion-tab-button {\n  color: #BD1E51;\n}\n.footer-container ion-tab-bar ion-tab-button.tab-selected {\n  color: #265791;\n}\n.footer-container ion-tab-bar ion-label {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvZm9vdGVyLWNvbXBvbmVudC9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxhcHBcXHNoYXJlZC1jb21wb25lbnRzXFxmb290ZXItY29tcG9uZW50XFxmb290ZXItY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9mb290ZXItY29tcG9uZW50L2Zvb3Rlci1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL2Zvb3Rlci1jb21wb25lbnQvQzpcXFVzZXJzXFxhYWJoYWd3YVxcc2FuZGh5YWRlZXBcXHNhbmRoeWFkZWVwLXVpL3NyY1xcc2FuZGh5YWRlZXAtdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHdDQUFBO0VBQ0EsZ0RBQUE7RUFDQSw2Q0FBQTtFQUNBLGFBQUE7RUFBZSw2QkFBQTtFQUErQixZQUFBO0VBQWMsbUJBQUE7QUNFOUQ7QURERTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQWUsdUJBQUE7RUFBeUIsc0JBQUE7RUFBd0IsbUJBQUE7RUFDaEUsZUVGZ0I7QURRcEI7QURMSTtFQUNFLGNFUFU7RUZRVixnQkFBQTtBQ09OO0FESkU7RUFDRSxlRVRnQjtFRlVoQixnQkFBQTtFQUNBLDREQUFBO0FDTUo7QURKRTtFQU9FLGNBQUE7QUNBSjtBRE5JO0VBQ0UsY0VsQlU7QUQwQmhCO0FEUE07RUFDRSxjRW5CVTtBRDRCbEI7QURMSTtFQUNFLGlCQUFBO0FDT04iLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9mb290ZXItY29tcG9uZW50L2Zvb3Rlci1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2FuZGh5YWRlZXAtdGhlbWVcIjtcclxuXHJcbi5mb290ZXItY29udGFpbmVyIHtcclxuICBib3gtc2hhZG93OiA0cHggMTdweCAyMHB4IDIwcHggIzZjNzU3ZDNkO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogNHB4IDE3cHggMjBweCAyMHB4ICM2Yzc1N2QzZDtcclxuICAtbW96LWJveC1zaGFkb3c6IDRweCAxN3B4IDIwcHggMjBweCAjNmM3NTdkM2Q7XHJcbiAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IGhlaWdodDogNjBweDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAuc2luZ2xlLXRhYiB7XHJcbiAgICBmbGV4LWJhc2lzOiAyNSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogJHJlZ3VsYXItZm9udC1zaXplO1xyXG4gICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxuICB9XHJcbiAgLmZvb3Rlci10YWIge1xyXG4gICAgZm9udC1zaXplOiAkcmVndWxhci1mb250LXNpemU7XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMwNWRlZywgI2NjMmI1ZSAyJSwgIzc1M2E4OCA2MyUpO1xyXG4gIH1cclxuICBpb24tdGFiLWJhciB7XHJcbiAgICBpb24tdGFiLWJ1dHRvbiB7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgJi50YWItc2VsZWN0ZWQge1xyXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuZm9vdGVyLWNvbnRhaW5lciB7XG4gIGJveC1zaGFkb3c6IDRweCAxN3B4IDIwcHggMjBweCAjNmM3NTdkM2Q7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogNHB4IDE3cHggMjBweCAyMHB4ICM2Yzc1N2QzZDtcbiAgLW1vei1ib3gtc2hhZG93OiA0cHggMTdweCAyMHB4IDIwcHggIzZjNzU3ZDNkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZvb3Rlci1jb250YWluZXIgLnNpbmdsZS10YWIge1xuICBmbGV4LWJhc2lzOiAyNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZm9vdGVyLWNvbnRhaW5lciAuc2luZ2xlLXRhYi5zZWxlY3RlZCB7XG4gIGNvbG9yOiAjQkQxRTUxO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmZvb3Rlci1jb250YWluZXIgLmZvb3Rlci10YWIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctdG9wOiAxcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMDVkZWcsICNjYzJiNWUgMiUsICM3NTNhODggNjMlKTtcbn1cbi5mb290ZXItY29udGFpbmVyIGlvbi10YWItYmFyIHtcbiAgcGFkZGluZzogOHB4IDA7XG59XG4uZm9vdGVyLWNvbnRhaW5lciBpb24tdGFiLWJhciBpb24tdGFiLWJ1dHRvbiB7XG4gIGNvbG9yOiAjQkQxRTUxO1xufVxuLmZvb3Rlci1jb250YWluZXIgaW9uLXRhYi1iYXIgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIHtcbiAgY29sb3I6ICMyNjU3OTE7XG59XG4uZm9vdGVyLWNvbnRhaW5lciBpb24tdGFiLWJhciBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iLCIvLyBwcmV2aW91cyBUaGVtZVxyXG4vLyRwcmltYXJ5LWNvbG9yOiAjZTk1YzhmO1xyXG4vLyRzZWNvbmRhcnktY29sb3I6ICM2MTRkN2Y7XHJcblxyXG4vLyBOZXcgVGhlbWVcclxuJHByaW1hcnktY29sb3I6ICNCRDFFNTE7XHJcbiRzZWNvbmRhcnktY29sb3I6ICMyNjU3OTE7XHJcblxyXG4kcmVndWxhci1mb250LXNpemU6IDE0cHg7XHJcbiRmb250LXNpemUtMTogMTZweDtcclxuJGhlYWRlci1zaXplOiAyMHB4O1xyXG4kZm9udC1zaXplLTM6IDMwcHg7XHJcblxyXG4kYnV0dG9uLWhlaWdodDogNDVweDtcclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/shared-components/footer-component/footer-component.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared-components/footer-component/footer-component.component.ts ***!
  \**********************************************************************************/
/*! exports provided: FooterComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponentComponent", function() { return FooterComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponentComponent = class FooterComponentComponent {
    constructor() { }
    ngOnInit() { }
};
FooterComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/footer-component/footer-component.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer-component.component.scss */ "./src/app/shared-components/footer-component/footer-component.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponentComponent);



/***/ }),

/***/ "./src/app/shared-components/footer-component/footer-component.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared-components/footer-component/footer-component.module.ts ***!
  \*******************************************************************************/
/*! exports provided: FooterComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponentModule", function() { return FooterComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _footer_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer-component.component */ "./src/app/shared-components/footer-component/footer-component.component.ts");







let FooterComponentModule = class FooterComponentModule {
};
FooterComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        ],
        exports: [
            _footer_component_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponentComponent"]
        ],
        declarations: [_footer_component_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponentComponent"]]
    })
], FooterComponentModule);



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
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: transparent;\n}\n\n.image-zoom-container {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n}\n\n.image-zoom-container ion-slides {\n  width: 100%;\n}\n\n.image-zoom-container ion-slides .swiper-slide img {\n  width: 100% !important;\n}\n\n.cross-icon {\n  color: white;\n  font-size: 30px;\n  font-weight: bold;\n  display: inline-block;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvbW9kYWwtcG9wdXAvQzpcXFVzZXJzXFxhYWJoYWd3YVxcc2FuZGh5YWRlZXBcXHNhbmRoeWFkZWVwLXVpL3NyY1xcYXBwXFxzaGFyZWQtY29tcG9uZW50c1xcbW9kYWwtcG9wdXBcXG1vZGFsLXBvcHVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvbW9kYWwtcG9wdXAvbW9kYWwtcG9wdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjs7QURDQTtFQU9FLGFBQUE7RUFBZSx1QkFBQTtFQUF5QixZQUFBO0FDRjFDOztBREpFO0VBQ0UsV0FBQTtBQ01KOztBRExJO0VBQ0Usc0JBQUE7QUNPTjs7QUREQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL21vZGFsLXBvcHVwL21vZGFsLXBvcHVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmltYWdlLXpvb20tY29udGFpbmVyIHtcclxuICBpb24tc2xpZGVzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLnN3aXBlci1zbGlkZSBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY3Jvc3MtaWNvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmltYWdlLXpvb20tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbWFnZS16b29tLWNvbnRhaW5lciBpb24tc2xpZGVzIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaW1hZ2Utem9vbS1jb250YWluZXIgaW9uLXNsaWRlcyAuc3dpcGVyLXNsaWRlIGltZyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5jcm9zcy1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */");

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