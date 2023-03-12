function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });

    var attachComponent = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);

                if (!el.componentOnReady) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return el.componentOnReady();

              case 11:
                return _context.abrupt("return", el);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, h */

  /***/
  function node_modulesIonicCoreDistEsmHapticCcbda579Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelectionEnd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelection;
    });
    /**
     * Check to see if the Haptic Plugin is available
     * @return Returns `true` or false if the plugin is available
     */

    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */


    var hapticSelection = function hapticSelection() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.selection();
      }
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionStart();
      }
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionChanged();
      }
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionEnd();
      }
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
    \***********************************************************************/

  /*! exports provided: S */

  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });

    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
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
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmThemeC2dc54d9Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color) {
      return typeof color === 'string' && color.length > 0 ? _defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true) : undefined;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction) {
        var router;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context2.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context2.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context2.abrupt("return", router.push(url, direction));

              case 5:
                return _context2.abrupt("return", false);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function openURL(_x6, _x7, _x8) {
        return _ref3.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/footer-component/footer-component.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/footer-component/footer-component.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsFooterComponentFooterComponentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-footer class=\"ion-no-border\">\n    <div class=\"footer-container\">\n        <div routerLink=\"/feed\" routerLinkActive=\"selected\" #FeedRLA=\"routerLinkActive\" class=\"single-tab\">\n            <img src=\"{{FeedRLA.isActive ? '/assets/new-theme/home-active.png' : '/assets/new-theme/home.png'}}\"  alt=\"\">\n            <span class=\"footer-title\">Feed</span>\n        </div>\n        <div routerLink=\"/bookings\" routerLinkActive=\"selected\" #bookingRLA=\"routerLinkActive\" class=\"single-tab\">\n            <img src=\"{{bookingRLA.isActive ? '/assets/new-theme/calendar-active.png' : '/assets/new-theme/calendar.png'}}\"  alt=\"\">\n            <span class=\"footer-title\">Appointments</span>\n        </div>\n        <div routerLink=\"/portfolio\" routerLinkActive=\"selected\" #portFolioRLA=\"routerLinkActive\" class=\"single-tab\">\n            <img src=\"{{portFolioRLA.isActive ? '/assets/new-theme/folder-active.png' : '/assets/new-theme/folder.png'}}\"  alt=\"\">\n            <span class=\"footer-title\">Portfolio</span>\n        </div>\n        <div routerLink=\"/settings\" routerLinkActive=\"selected\" #userRLA=\"routerLinkActive\" class=\"single-tab\">\n            <img src=\"{{userRLA.isActive ? '/assets/new-theme/user-active.png' : '/assets/new-theme/user.png'}}\"  alt=\"\">\n            <span class=\"footer-title\">Profile</span>\n        </div>\n    </div>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/modal-popup/modal-popup.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/modal-popup/modal-popup.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsModalPopupModalPopupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <div (click)=\"closeModal()\" class=\"cross-container\"><ion-icon class=\"cross-icon\" name=\"close-outline\"></ion-icon></div>\n</ion-header>\n<ion-content>\n  <div class=\"image-zoom-container\">\n    <ion-slides [options]=\"slideOptsTest\">\n      <ion-slide>\n        <div class=\"swiper-zoom-container\">\n          <img src=\"{{imageUrl}}\" alt=\"\">\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/shared-components/footer-component/footer-component.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/shared-components/footer-component/footer-component.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsFooterComponentFooterComponentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer-container {\n  box-shadow: 4px 17px 20px 20px #6c757d3d;\n  -webkit-box-shadow: 4px 17px 20px 20px #6c757d3d;\n  -moz-box-shadow: 4px 17px 20px 20px #6c757d3d;\n  display: flex;\n  justify-content: space-around;\n  height: 60px;\n  align-items: center;\n}\n.footer-container .single-tab {\n  flex-basis: 25%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  font-size: 14px;\n}\n.footer-container .single-tab.selected {\n  color: #BD1E51;\n  font-weight: 700;\n}\n.footer-container .footer-tab {\n  font-size: 14px;\n  padding-top: 1px;\n  background: linear-gradient(305deg, #cc2b5e 2%, #753a88 63%);\n}\n.footer-container ion-tab-bar {\n  padding: 8px 0;\n}\n.footer-container ion-tab-bar ion-tab-button {\n  color: #BD1E51;\n}\n.footer-container ion-tab-bar ion-tab-button.tab-selected {\n  color: #265791;\n}\n.footer-container ion-tab-bar ion-label {\n  font-weight: bold;\n}\n.footer-title {\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9mb290ZXItY29tcG9uZW50L2Zvb3Rlci1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL2Zvb3Rlci1jb21wb25lbnQvZm9vdGVyLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL3NhbmRoeWFkZWVwLXRoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx3Q0FBQTtFQUNBLGdEQUFBO0VBQ0EsNkNBQUE7RUFDQSxhQUFBO0VBQWUsNkJBQUE7RUFBK0IsWUFBQTtFQUFjLG1CQUFBO0FDRTlEO0FEREU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUFlLHVCQUFBO0VBQXlCLHNCQUFBO0VBQXdCLG1CQUFBO0VBQ2hFLGVFRmdCO0FEUXBCO0FETEk7RUFDRSxjRVBVO0VGUVYsZ0JBQUE7QUNPTjtBREpFO0VBQ0UsZUVUZ0I7RUZVaEIsZ0JBQUE7RUFDQSw0REFBQTtBQ01KO0FESkU7RUFPRSxjQUFBO0FDQUo7QUROSTtFQUNFLGNFbEJVO0FEMEJoQjtBRFBNO0VBQ0UsY0VuQlU7QUQ0QmxCO0FETEk7RUFDRSxpQkFBQTtBQ09OO0FERkE7RUFDRSxlQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9mb290ZXItY29tcG9uZW50L2Zvb3Rlci1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2FuZGh5YWRlZXAtdGhlbWVcIjtcblxuLmZvb3Rlci1jb250YWluZXIge1xuICBib3gtc2hhZG93OiA0cHggMTdweCAyMHB4IDIwcHggIzZjNzU3ZDNkO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDRweCAxN3B4IDIwcHggMjBweCAjNmM3NTdkM2Q7XG4gIC1tb3otYm94LXNoYWRvdzogNHB4IDE3cHggMjBweCAyMHB4ICM2Yzc1N2QzZDtcbiAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IGhlaWdodDogNjBweDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLnNpbmdsZS10YWIge1xuICAgIGZsZXgtYmFzaXM6IDI1JTtcbiAgICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6ICRyZWd1bGFyLWZvbnQtc2l6ZTtcbiAgICAmLnNlbGVjdGVkIHtcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxuICB9XG4gIC5mb290ZXItdGFiIHtcbiAgICBmb250LXNpemU6ICRyZWd1bGFyLWZvbnQtc2l6ZTtcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMDVkZWcsICNjYzJiNWUgMiUsICM3NTNhODggNjMlKTtcbiAgfVxuICBpb24tdGFiLWJhciB7XG4gICAgaW9uLXRhYi1idXR0b24ge1xuICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgJi50YWItc2VsZWN0ZWQge1xuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcGFkZGluZzogOHB4IDA7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfVxufVxuXG4uZm9vdGVyLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuIiwiLmZvb3Rlci1jb250YWluZXIge1xuICBib3gtc2hhZG93OiA0cHggMTdweCAyMHB4IDIwcHggIzZjNzU3ZDNkO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDRweCAxN3B4IDIwcHggMjBweCAjNmM3NTdkM2Q7XG4gIC1tb3otYm94LXNoYWRvdzogNHB4IDE3cHggMjBweCAyMHB4ICM2Yzc1N2QzZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGhlaWdodDogNjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mb290ZXItY29udGFpbmVyIC5zaW5nbGUtdGFiIHtcbiAgZmxleC1iYXNpczogMjUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmZvb3Rlci1jb250YWluZXIgLnNpbmdsZS10YWIuc2VsZWN0ZWQge1xuICBjb2xvcjogI0JEMUU1MTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5mb290ZXItY29udGFpbmVyIC5mb290ZXItdGFiIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzA1ZGVnLCAjY2MyYjVlIDIlLCAjNzUzYTg4IDYzJSk7XG59XG4uZm9vdGVyLWNvbnRhaW5lciBpb24tdGFiLWJhciB7XG4gIHBhZGRpbmc6IDhweCAwO1xufVxuLmZvb3Rlci1jb250YWluZXIgaW9uLXRhYi1iYXIgaW9uLXRhYi1idXR0b24ge1xuICBjb2xvcjogI0JEMUU1MTtcbn1cbi5mb290ZXItY29udGFpbmVyIGlvbi10YWItYmFyIGlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCB7XG4gIGNvbG9yOiAjMjY1NzkxO1xufVxuLmZvb3Rlci1jb250YWluZXIgaW9uLXRhYi1iYXIgaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mb290ZXItdGl0bGUge1xuICBmb250LXNpemU6IDEwcHg7XG59IiwiLy8gcHJldmlvdXMgVGhlbWVcbi8vJHByaW1hcnktY29sb3I6ICNlOTVjOGY7XG4vLyRzZWNvbmRhcnktY29sb3I6ICM2MTRkN2Y7XG5cbi8vIE5ldyBUaGVtZVxuJHByaW1hcnktY29sb3I6ICNCRDFFNTE7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjMjY1NzkxO1xuXG4kcmVndWxhci1mb250LXNpemU6IDE0cHg7XG4kZm9udC1zaXplLTE6IDE2cHg7XG4kaGVhZGVyLXNpemU6IDIwcHg7XG4kZm9udC1zaXplLTM6IDMwcHg7XG5cbiRidXR0b24taGVpZ2h0OiA0NXB4O1xuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared-components/footer-component/footer-component.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/shared-components/footer-component/footer-component.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: FooterComponentComponent */

  /***/
  function srcAppSharedComponentsFooterComponentFooterComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponentComponent", function () {
      return FooterComponentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponentComponent = /*#__PURE__*/function () {
      function FooterComponentComponent() {
        _classCallCheck(this, FooterComponentComponent);
      }

      _createClass(FooterComponentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponentComponent;
    }();

    FooterComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer-component',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer-component.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/footer-component/footer-component.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer-component.component.scss */
      "./src/app/shared-components/footer-component/footer-component.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FooterComponentComponent);
    /***/
  },

  /***/
  "./src/app/shared-components/footer-component/footer-component.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/shared-components/footer-component/footer-component.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: FooterComponentModule */

  /***/
  function srcAppSharedComponentsFooterComponentFooterComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponentModule", function () {
      return FooterComponentModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _footer_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./footer-component.component */
    "./src/app/shared-components/footer-component/footer-component.component.ts");

    var FooterComponentModule = function FooterComponentModule() {
      _classCallCheck(this, FooterComponentModule);
    };

    FooterComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
      exports: [_footer_component_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponentComponent"]],
      declarations: [_footer_component_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponentComponent"]]
    })], FooterComponentModule);
    /***/
  },

  /***/
  "./src/app/shared-components/modal-popup/modal-popup.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shared-components/modal-popup/modal-popup.module.ts ***!
    \*********************************************************************/

  /*! exports provided: ModalPopupModule */

  /***/
  function srcAppSharedComponentsModalPopupModalPopupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalPopupModule", function () {
      return ModalPopupModule;
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


    var _modal_popup_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modal-popup.page */
    "./src/app/shared-components/modal-popup/modal-popup.page.ts");

    var ModalPopupModule = function ModalPopupModule() {
      _classCallCheck(this, ModalPopupModule);
    };

    ModalPopupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
      exports: [_modal_popup_page__WEBPACK_IMPORTED_MODULE_5__["ModalPopupPage"]],
      declarations: [_modal_popup_page__WEBPACK_IMPORTED_MODULE_5__["ModalPopupPage"]]
    })], ModalPopupModule);
    /***/
  },

  /***/
  "./src/app/shared-components/modal-popup/modal-popup.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/shared-components/modal-popup/modal-popup.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsModalPopupModalPopupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: transparent;\n}\n\n.image-zoom-container {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n}\n\n.image-zoom-container ion-slides {\n  width: 100%;\n}\n\n.image-zoom-container ion-slides .swiper-slide img {\n  width: 100% !important;\n}\n\n.cross-icon {\n  color: white;\n  font-size: 30px;\n  font-weight: bold;\n  display: inline-block;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9tb2RhbC1wb3B1cC9tb2RhbC1wb3B1cC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL21vZGFsLXBvcHVwL21vZGFsLXBvcHVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFPRSxhQUFBO0VBQWUsdUJBQUE7RUFBeUIsWUFBQTtBQ0YxQzs7QURKRTtFQUNFLFdBQUE7QUNNSjs7QURMSTtFQUNFLHNCQUFBO0FDT047O0FEREE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9tb2RhbC1wb3B1cC9tb2RhbC1wb3B1cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5pbWFnZS16b29tLWNvbnRhaW5lciB7XG4gIGlvbi1zbGlkZXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5zd2lwZXItc2xpZGUgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jcm9zcy1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiByaWdodDtcbn1cbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmltYWdlLXpvb20tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbWFnZS16b29tLWNvbnRhaW5lciBpb24tc2xpZGVzIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaW1hZ2Utem9vbS1jb250YWluZXIgaW9uLXNsaWRlcyAuc3dpcGVyLXNsaWRlIGltZyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5jcm9zcy1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared-components/modal-popup/modal-popup.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/shared-components/modal-popup/modal-popup.page.ts ***!
    \*******************************************************************/

  /*! exports provided: ModalPopupPage */

  /***/
  function srcAppSharedComponentsModalPopupModalPopupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalPopupPage", function () {
      return ModalPopupPage;
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

    var ModalPopupPage = /*#__PURE__*/function () {
      function ModalPopupPage(modalController, navParams) {
        _classCallCheck(this, ModalPopupPage);

        this.modalController = modalController;
        this.navParams = navParams;
        this.slideOptsTest = {
          zoom: {
            maxRatio: 3
          }
        };
      }

      _createClass(ModalPopupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.imageUrl = this.navParams.data.imageUrl;
          this.modalTitle = this.navParams.data.paramTitle;
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
                    onClosedData = "Wrapped Up!";
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
      }]);

      return ModalPopupPage;
    }();

    ModalPopupPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }];
    };

    ModalPopupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'modal-popup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modal-popup.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/modal-popup/modal-popup.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modal-popup.page.scss */
      "./src/app/shared-components/modal-popup/modal-popup.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])], ModalPopupPage);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map