function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\r\n  <app-logo-spinner></app-logo-spinner>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/logo-spinner/logo-spinner.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/logo-spinner/logo-spinner.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsLogoSpinnerLogoSpinnerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"sharedService.showSpinner | async\" style=\"background: #1e2023;\n    opacity: 0.9;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 9999;\n    display: flex;\n    justify-content: center;\n    align-items: center;\">\n    <div class=\"spinner-box\">\n        <div style=\"display: flex;\n    position: absolute;\n    flex-direction: column;\n    color: white;\n    align-items: center;\n    justify-content: center;\">\n            <img style=\"width: 70px;z-index: 9999;\" src=\"/assets/sandhyadeep-final-logo.png\" alt=\"\">\n            <div style=\"color: #e95c8f;z-index: 999;\">Sandhyadeep</div>\n        </div>\n        <div class=\"circle-border\">\n            <div class=\"circle-core\">\n            </div>\n        </div>\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | index-index-module */
        "index-index-module").then(__webpack_require__.bind(null,
        /*! ./index/index.module */
        "./src/app/index/index.module.ts")).then(function (m) {
          return m.IndexPageModule;
        });
      }
    }, {
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "html, body {\n  font-family: \"Muli\" !important;\n}\n\nion-content {\n  font-family: \"Muli\" !important;\n}\n\nbody {\n  background-color: white !important;\n  font-size: 14px;\n}\n\n.swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #614d7f !important;\n  border: 1px solid pink;\n}\n\n.zoom-07 {\n  zoom: 0.7;\n}\n\n:root .tick-icon {\n  color: green;\n}\n\n.modal-backdrop-bg {\n  transition: opacity 300ms ease-in-out;\n  -webkit-transition: opacity 300ms ease-in-out;\n  background-color: #000;\n  opacity: 0;\n}\n\n.active .modal-backdrop-bg {\n  opacity: 0.5;\n}\n\n.default-button {\n  color: white;\n  margin: 15px 0;\n  display: flex;\n  border-radius: 7px;\n  justify-content: center;\n  text-align: center;\n  background: linear-gradient(225deg, #e95c8f 2%, #614d7f 63%);\n  height: 45px;\n  padding: 0 10px;\n}\n\n.default-button button {\n  font-size: 16px;\n  font-weight: bold;\n  background: transparent;\n  color: white;\n}\n\n.primary-add-button {\n  margin: 15px 0;\n  display: flex;\n  border-radius: 7px;\n  justify-content: center;\n  text-align: center;\n  background: white;\n  height: 45px;\n  border: 1px solid #e95c8f;\n  padding: 0 10px;\n}\n\n.primary-add-button button {\n  font-size: 16px;\n  font-weight: bold;\n  background: transparent;\n  color: #e95c8f;\n}\n\nul li {\n  margin: 5px 0;\n}\n\n.border-spacing-top {\n  border-top: 10px solid #d3d3d38f;\n}\n\n.border-spacing-bottom {\n  border-bottom: 10px solid #d3d3d38f;\n}\n\n.mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: #e95c8f;\n}\n\n.mat-tab-label {\n  opacity: 1 !important;\n  width: 100% !important;\n}\n\n.mat-tab-label .mat-tab-label-content {\n  color: #614d7f;\n}\n\nbutton:focus {\n  outline: none !important;\n}\n\n.mat-border-shadow {\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n}\n\n.border-div {\n  border-bottom: 10px solid #d3d3d37a;\n}\n\n.booking-trash-icon .mat-mini-fab .mat-button-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.alert-title.sc-ion-alert-md {\n  font-size: 16px !important;\n  font-weight: 400 !important;\n}\n\n.snackClass {\n  margin-top: 123px !important;\n  background: #614d7f;\n}\n\n.successSnack .toast-content {\n  background: #198754 !important;\n}\n\n.errorSnack .toast-content {\n  background: red !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxhYWJoYWd3YVxcc2FuZGh5YWRlZXAgaW9uaWMgc3RhY2svc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcCBpb25pYyBzdGFjay9zcmNcXHNhbmRoeWFkZWVwLXRoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSw4QkFBQTtBQ0RGOztBRElBO0VBQ0UsOEJBQUE7QUNERjs7QURJQTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtBQ0RGOztBREtBO0VBQ0UsVUFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7QUNGRjs7QURLQTtFQUNFLFNBQUE7QUNGRjs7QURNRTtFQUNFLFlBQUE7QUNISjs7QURPQTtFQUNFLHFDQUFBO0VBQ0EsNkNBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUNKRjs7QURPQTtFQUNFLFlBQUE7QUNKRjs7QURPQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDREQUFBO0VBQ0EsWUUzQ2M7RUY0Q2QsZUFBQTtBQ0pGOztBREtFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDSEo7O0FET0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ0pGOztBREtFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDSEo7O0FEU0U7RUFDRSxhQUFBO0FDTko7O0FEVUE7RUFDRSxnQ0FBQTtBQ1BGOztBRFVBO0VBQ0UsbUNBQUE7QUNQRjs7QURVQTtFQUNFLHlCQUFBO0FDUEY7O0FEVUE7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FDUEY7O0FEUUU7RUFDRSxjQUFBO0FDTko7O0FEVUE7RUFDRSx3QkFBQTtBQ1BGOztBRFVBO0VBQ0UsK0dBQUE7QUNQRjs7QURVQTtFQUNFLG1DQUFBO0FDUEY7O0FEV0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1JKOztBRFlBO0VBQ0UsMEJBQUE7RUFDQSwyQkFBQTtBQ1RGOztBRFlBO0VBQ0UsNEJBQUE7RUFDQSxtQkVwSWdCO0FEMkhsQjs7QURhRTtFQUNFLDhCQUFBO0FDVko7O0FEZUU7RUFDRSwwQkFBQTtBQ1pKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL3NhbmRoeWFkZWVwLXRoZW1lXCI7XHJcblxyXG5odG1sLCBib2R5IHtcclxuICBmb250LWZhbWlseTogJ011bGknICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICBmb250LWZhbWlseTogJ011bGknICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIC8vZm9udC1mYW1pbHk6ICdNdWxpJywgc2VyaWY7XHJcbn1cclxuXHJcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGJhY2tncm91bmQ6ICM2MTRkN2YgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBwaW5rO1xyXG59XHJcblxyXG4uem9vbS0wNyB7XHJcbiAgem9vbTogMC43O1xyXG59XHJcblxyXG46cm9vdCB7XHJcbiAgLnRpY2staWNvbiB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgfVxyXG59XHJcblxyXG4ubW9kYWwtYmFja2Ryb3AtYmcge1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmFjdGl2ZSAubW9kYWwtYmFja2Ryb3AtYmcge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLmRlZmF1bHQtYnV0dG9uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICNlOTVjOGYgMiUsICM2MTRkN2YgNjMlKTtcclxuICBoZWlnaHQ6ICRidXR0b24taGVpZ2h0O1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICBidXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi5wcmltYXJ5LWFkZC1idXR0b24ge1xyXG4gIG1hcmdpbjogMTVweCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5NWM4ZjtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogI2U5NWM4ZjtcclxuICB9XHJcbn1cclxuXHJcblxyXG51bCB7XHJcbiAgbGkge1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3JkZXItc3BhY2luZy10b3Age1xyXG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgI2QzZDNkMzhmO1xyXG59XHJcblxyXG4uYm9yZGVyLXNwYWNpbmctYm90dG9tIHtcclxuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNkM2QzZDM4ZjtcclxufVxyXG5cclxuLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC1pbmstYmFyLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5NWM4ZjtcclxufVxyXG5cclxuLm1hdC10YWItbGFiZWwge1xyXG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIC5tYXQtdGFiLWxhYmVsLWNvbnRlbnQge1xyXG4gICAgY29sb3I6ICM2MTRkN2Y7XHJcbiAgfVxyXG59XHJcblxyXG5idXR0b246Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1ib3JkZXItc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2IoMCAwIDAgLyAyMCUpLCAwIDFweCAxcHggMCByZ2IoMCAwIDAgLyAxNCUpLCAwIDFweCAzcHggMCByZ2IoMCAwIDAgLyAxMiUpO1xyXG59XHJcblxyXG4uYm9yZGVyLWRpdiB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZDNkM2QzN2E7XHJcbn1cclxuXHJcbi5ib29raW5nLXRyYXNoLWljb24ge1xyXG4gIC5tYXQtbWluaS1mYWIgLm1hdC1idXR0b24td3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmFsZXJ0LXRpdGxlLnNjLWlvbi1hbGVydC1tZCB7XHJcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc25hY2tDbGFzcyB7XHJcbiAgbWFyZ2luLXRvcDogMTIzcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG59XHJcblxyXG4uc3VjY2Vzc1NuYWNrIHtcclxuICAudG9hc3QtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTk4NzU0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uZXJyb3JTbmFjayB7XHJcbiAgLnRvYXN0LWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogcmVkICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsImh0bWwsIGJvZHkge1xuICBmb250LWZhbWlseTogXCJNdWxpXCIgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJNdWxpXCIgIWltcG9ydGFudDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kOiAjNjE0ZDdmICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHBpbms7XG59XG5cbi56b29tLTA3IHtcbiAgem9vbTogMC43O1xufVxuXG46cm9vdCAudGljay1pY29uIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ubW9kYWwtYmFja2Ryb3AtYmcge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5hY3RpdmUgLm1vZGFsLWJhY2tkcm9wLWJnIHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uZGVmYXVsdC1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMTVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICNlOTVjOGYgMiUsICM2MTRkN2YgNjMlKTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4uZGVmYXVsdC1idXR0b24gYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnByaW1hcnktYWRkLWJ1dHRvbiB7XG4gIG1hcmdpbjogMTVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOTVjOGY7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5wcmltYXJ5LWFkZC1idXR0b24gYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZTk1YzhmO1xufVxuXG51bCBsaSB7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cbi5ib3JkZXItc3BhY2luZy10b3Age1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICNkM2QzZDM4Zjtcbn1cblxuLmJvcmRlci1zcGFjaW5nLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgI2QzZDNkMzhmO1xufVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC1pbmstYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5NWM4Zjtcbn1cblxuLm1hdC10YWItbGFiZWwge1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG4ubWF0LXRhYi1sYWJlbCAubWF0LXRhYi1sYWJlbC1jb250ZW50IHtcbiAgY29sb3I6ICM2MTRkN2Y7XG59XG5cbmJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm1hdC1ib3JkZXItc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uYm9yZGVyLWRpdiB7XG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgI2QzZDNkMzdhO1xufVxuXG4uYm9va2luZy10cmFzaC1pY29uIC5tYXQtbWluaS1mYWIgLm1hdC1idXR0b24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWxlcnQtdGl0bGUuc2MtaW9uLWFsZXJ0LW1kIHtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbn1cblxuLnNuYWNrQ2xhc3Mge1xuICBtYXJnaW4tdG9wOiAxMjNweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjNjE0ZDdmO1xufVxuXG4uc3VjY2Vzc1NuYWNrIC50b2FzdC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogIzE5ODc1NCAhaW1wb3J0YW50O1xufVxuXG4uZXJyb3JTbmFjayAudG9hc3QtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHJlZCAhaW1wb3J0YW50O1xufSIsIiRwcmltYXJ5LWNvbG9yOiAjZTk1YzhmO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjNjE0ZDdmO1xyXG5cclxuJHJlZ3VsYXItZm9udC1zaXplOiAxNHB4O1xyXG4kZm9udC1zaXplLTE6IDE2cHg7XHJcbiRoZWFkZXItc2l6ZTogMjBweDtcclxuJGZvbnQtc2l6ZS0zOiAzMHB4O1xyXG5cclxuJGJ1dHRvbi1oZWlnaHQ6IDQ1cHg7XHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _shared_components_logo_spinner_logo_spinner_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./shared-components/logo-spinner/logo-spinner.module */
    "./src/app/shared-components/logo-spinner/logo-spinner.module.ts"); // import { IonicApp, IonicModule } from 'ionic-angular';
    // import { MatSlideToggleModule } from '@angular/material/slide-toggle';
    // import { MatMenuModule } from '@angular/material/menu';
    // import { MatSidenavModule } from '@angular/material/sidenav';
    // import { MatBadgeModule } from '@angular/material/badge';
    // import {FormatTimePipe} from './shared-components/custom-pipes/count-down-pipe';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _shared_components_logo_spinner_logo_spinner_module__WEBPACK_IMPORTED_MODULE_12__["LogoSpinnerModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/shared-components/logo-spinner/logo-spinner.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/shared-components/logo-spinner/logo-spinner.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsLogoSpinnerLogoSpinnerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* KEYFRAMES */\n@-webkit-keyframes spin {\n  from {\n    transform: rotate(0);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n@keyframes spin {\n  from {\n    transform: rotate(0);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n@-webkit-keyframes spin3D {\n  from {\n    transform: rotate3d(0.5, 0.5, 0.5, 360deg);\n  }\n  to {\n    transform: rotate3d(0deg);\n  }\n}\n@keyframes spin3D {\n  from {\n    transform: rotate3d(0.5, 0.5, 0.5, 360deg);\n  }\n  to {\n    transform: rotate3d(0deg);\n  }\n}\n@-webkit-keyframes configure-clockwise {\n  0% {\n    transform: rotate(0);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes configure-clockwise {\n  0% {\n    transform: rotate(0);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes configure-xclockwise {\n  0% {\n    transform: rotate(45deg);\n  }\n  25% {\n    transform: rotate(-45deg);\n  }\n  50% {\n    transform: rotate(-135deg);\n  }\n  75% {\n    transform: rotate(-225deg);\n  }\n  100% {\n    transform: rotate(-315deg);\n  }\n}\n@keyframes configure-xclockwise {\n  0% {\n    transform: rotate(45deg);\n  }\n  25% {\n    transform: rotate(-45deg);\n  }\n  50% {\n    transform: rotate(-135deg);\n  }\n  75% {\n    transform: rotate(-225deg);\n  }\n  100% {\n    transform: rotate(-315deg);\n  }\n}\n@-webkit-keyframes pulse {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: 0.25;\n    transform: scale(0.75);\n  }\n}\n@keyframes pulse {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: 0.25;\n    transform: scale(0.75);\n  }\n}\n/* GRID STYLING */\n* {\n  box-sizing: border-box;\n}\nbody {\n  min-height: 100vh;\n  background-color: #1d2630;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}\n.spinner-box {\n  width: 300px;\n  height: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent;\n}\n/* SPINNING CIRCLE */\n.leo-border-1 {\n  position: absolute;\n  width: 150px;\n  height: 150px;\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: #3ff9dc;\n  background: linear-gradient(0deg, rgba(63, 249, 220, 0.1) 33%, #3ff9dc 100%);\n  -webkit-animation: spin3D 1.8s linear 0s infinite;\n          animation: spin3D 1.8s linear 0s infinite;\n}\n.leo-core-1 {\n  width: 100%;\n  height: 100%;\n  background-color: #37474faa;\n  border-radius: 50%;\n}\n.leo-border-2 {\n  position: absolute;\n  width: 150px;\n  height: 150px;\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: #fb5b53;\n  background: linear-gradient(0deg, rgba(251, 91, 83, 0.1) 33%, #fb5b53 100%);\n  -webkit-animation: spin3D 2.2s linear 0s infinite;\n          animation: spin3D 2.2s linear 0s infinite;\n}\n.leo-core-2 {\n  width: 100%;\n  height: 100%;\n  background-color: #1d2630aa;\n  border-radius: 50%;\n}\n/* ALTERNATING ORBITS */\n.circle-border {\n  width: 150px;\n  height: 150px;\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: #e95c8f;\n  background: linear-gradient(0deg, #614d7f 33%, #e95c8f 100%);\n  -webkit-animation: spin 0.8s linear 0s infinite;\n          animation: spin 0.8s linear 0s infinite;\n}\n.circle-core {\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  border-radius: 50%;\n}\n/* X-ROTATING BOXES */\n.configure-border-1 {\n  width: 115px;\n  height: 115px;\n  padding: 3px;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fb5b53;\n  -webkit-animation: configure-clockwise 3s ease-in-out 0s infinite alternate;\n          animation: configure-clockwise 3s ease-in-out 0s infinite alternate;\n}\n.configure-border-2 {\n  width: 115px;\n  height: 115px;\n  padding: 3px;\n  left: -115px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #3ff9dc;\n  transform: rotate(45deg);\n  -webkit-animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;\n          animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;\n}\n.configure-core {\n  width: 100%;\n  height: 100%;\n  background-color: #1d2630;\n}\n/* PULSE BUBBLES */\n.pulse-container {\n  width: 120px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.pulse-bubble {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #3ff9dc;\n}\n.pulse-bubble-1 {\n  -webkit-animation: pulse 0.4s ease 0s infinite alternate;\n          animation: pulse 0.4s ease 0s infinite alternate;\n}\n.pulse-bubble-2 {\n  -webkit-animation: pulse 0.4s ease 0.2s infinite alternate;\n          animation: pulse 0.4s ease 0.2s infinite alternate;\n}\n.pulse-bubble-3 {\n  -webkit-animation: pulse 0.4s ease 0.4s infinite alternate;\n          animation: pulse 0.4s ease 0.4s infinite alternate;\n}\n/* SOLAR SYSTEM */\n.solar-system {\n  width: 250px;\n  height: 250px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.orbit {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #fafbfC;\n  border-radius: 50%;\n}\n.earth-orbit {\n  width: 165px;\n  height: 165px;\n  -webkit-animation: spin 12s linear 0s infinite;\n}\n.venus-orbit {\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 7.4s linear 0s infinite;\n}\n.mercury-orbit {\n  width: 90px;\n  height: 90px;\n  -webkit-animation: spin 3s linear 0s infinite;\n}\n.planet {\n  position: absolute;\n  top: -5px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: #3ff9dc;\n}\n.sun {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  background-color: #ffab91;\n}\n.leo {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n}\n.blue-orbit {\n  width: 165px;\n  height: 165px;\n  border: 1px solid #91daffa5;\n  -webkit-animation: spin3D 3s linear 0.2s infinite;\n}\n.green-orbit {\n  width: 120px;\n  height: 120px;\n  border: 1px solid #91ffbfa5;\n  -webkit-animation: spin3D 2s linear 0s infinite;\n}\n.red-orbit {\n  width: 90px;\n  height: 90px;\n  border: 1px solid #ffca91a5;\n  -webkit-animation: spin3D 1s linear 0s infinite;\n}\n.white-orbit {\n  width: 60px;\n  height: 60px;\n  border: 2px solid #ffffff;\n  -webkit-animation: spin3D 10s linear 0s infinite;\n}\n.w1 {\n  transform: rotate3D(1, 1, 1, 90deg);\n}\n.w2 {\n  transform: rotate3D(1, 2, 0.5, 90deg);\n}\n.w3 {\n  transform: rotate3D(0.5, 1, 2, 90deg);\n}\n.three-quarter-spinner {\n  width: 50px;\n  height: 50px;\n  border: 3px solid #fb5b53;\n  border-top: 3px solid transparent;\n  border-radius: 50%;\n  -webkit-animation: spin 0.5s linear 0s infinite;\n          animation: spin 0.5s linear 0s infinite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvbG9nby1zcGlubmVyL0M6XFxVc2Vyc1xcYWFiaGFnd2FcXHNhbmRoeWFkZWVwIGlvbmljIHN0YWNrL3NyY1xcYXBwXFxzaGFyZWQtY29tcG9uZW50c1xcbG9nby1zcGlubmVyXFxsb2dvLXNwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL2xvZ28tc3Bpbm5lci9sb2dvLXNwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBQTtBQUVBO0VBQ0U7SUFDRSxvQkFBQTtFQ0FGO0VERUE7SUFDRSx5QkFBQTtFQ0FGO0FBQ0Y7QUROQTtFQUNFO0lBQ0Usb0JBQUE7RUNBRjtFREVBO0lBQ0UseUJBQUE7RUNBRjtBQUNGO0FER0E7RUFDRTtJQUNFLDBDQUFBO0VDREY7RURHQTtJQUNFLHlCQUFBO0VDREY7QUFDRjtBRExBO0VBQ0U7SUFDRSwwQ0FBQTtFQ0RGO0VER0E7SUFDRSx5QkFBQTtFQ0RGO0FBQ0Y7QURJQTtFQUNFO0lBQ0Usb0JBQUE7RUNGRjtFRElBO0lBQ0Usd0JBQUE7RUNGRjtFRElBO0lBQ0UseUJBQUE7RUNGRjtFRElBO0lBQ0UseUJBQUE7RUNGRjtFRElBO0lBQ0UseUJBQUE7RUNGRjtBQUNGO0FEYkE7RUFDRTtJQUNFLG9CQUFBO0VDRkY7RURJQTtJQUNFLHdCQUFBO0VDRkY7RURJQTtJQUNFLHlCQUFBO0VDRkY7RURJQTtJQUNFLHlCQUFBO0VDRkY7RURJQTtJQUNFLHlCQUFBO0VDRkY7QUFDRjtBREtBO0VBQ0U7SUFDRSx3QkFBQTtFQ0hGO0VES0E7SUFDRSx5QkFBQTtFQ0hGO0VES0E7SUFDRSwwQkFBQTtFQ0hGO0VES0E7SUFDRSwwQkFBQTtFQ0hGO0VES0E7SUFDRSwwQkFBQTtFQ0hGO0FBQ0Y7QURaQTtFQUNFO0lBQ0Usd0JBQUE7RUNIRjtFREtBO0lBQ0UseUJBQUE7RUNIRjtFREtBO0lBQ0UsMEJBQUE7RUNIRjtFREtBO0lBQ0UsMEJBQUE7RUNIRjtFREtBO0lBQ0UsMEJBQUE7RUNIRjtBQUNGO0FETUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFQ0pGO0VETUE7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7RUNKRjtBQUNGO0FESkE7RUFDRTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFQ0pGO0VETUE7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7RUNKRjtBQUNGO0FET0EsaUJBQUE7QUFFQTtFQUNFLHNCQUFBO0FDTkY7QURTQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNORjtBRFNBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDTkY7QURTQSxvQkFBQTtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0RUFBQTtFQUNBLGlEQUFBO1VBQUEseUNBQUE7QUNQRjtBRFVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDUEY7QURVQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkVBQUE7RUFDQSxpREFBQTtVQUFBLHlDQUFBO0FDUEY7QURVQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQ1BGO0FEVUEsdUJBQUE7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDREQUFBO0VBQ0EsK0NBQUE7VUFBQSx1Q0FBQTtBQ1JGO0FEV0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLHVCQUFBO0VBQ0Esa0JBQUE7QUNURjtBRFlBLHFCQUFBO0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyRUFBQTtVQUFBLG1FQUFBO0FDVkY7QURhQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSw0RUFBQTtVQUFBLG9FQUFBO0FDVkY7QURhQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNWRjtBRGFBLGtCQUFBO0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNYRjtBRGNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDWEY7QURjQTtFQUNFLHdEQUFBO1VBQUEsZ0RBQUE7QUNYRjtBRGNBO0VBQ0UsMERBQUE7VUFBQSxrREFBQTtBQ1hGO0FEY0E7RUFDRSwwREFBQTtVQUFBLGtEQUFBO0FDWEY7QURjQSxpQkFBQTtBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1pGO0FEZUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ1pGO0FEZUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhDQUFBO0FDWkY7QURlQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsK0NBQUE7QUNaRjtBRGVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw2Q0FBQTtBQ1pGO0FEZUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNaRjtBRGVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDWkY7QURlQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1pGO0FEZUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsaURBQUE7QUNaRjtBRGVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLCtDQUFBO0FDWkY7QURlQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQ0FBQTtBQ1pGO0FEZUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0RBQUE7QUNaRjtBRGVBO0VBQ0UsbUNBQUE7QUNaRjtBRGVBO0VBQ0UscUNBQUE7QUNaRjtBRGVBO0VBQ0UscUNBQUE7QUNaRjtBRGVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtVQUFBLHVDQUFBO0FDWkYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9sb2dvLXNwaW5uZXIvbG9nby1zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogS0VZRlJBTUVTICovXHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4zRCB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKC41LCAuNSwgLjUsIDM2MGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNvbmZpZ3VyZS1jbG9ja3dpc2Uge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gIH1cclxuICAyNSUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY29uZmlndXJlLXhjbG9ja3dpc2Uge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB9XHJcbiAgMjUlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMjVkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zMTVkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBwdWxzZSB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogLjI1O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguNzUpO1xyXG4gIH1cclxufVxyXG5cclxuLyogR1JJRCBTVFlMSU5HICovXHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQyNjMwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuLnNwaW5uZXItYm94IHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi8qIFNQSU5OSU5HIENJUkNMRSAqL1xyXG5cclxuLmxlby1ib3JkZXItMSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIHBhZGRpbmc6IDNweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYig2MywgMjQ5LCAyMjApO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDYzLCAyNDksIDIyMCwgMC4xKSAzMyUsIHJnYmEoNjMsIDI0OSwgMjIwLCAxKSAxMDAlKTtcclxuICBhbmltYXRpb246IHNwaW4zRCAxLjhzIGxpbmVhciAwcyBpbmZpbml0ZTtcclxufVxyXG5cclxuLmxlby1jb3JlLTEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc0NzRmYWE7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4ubGVvLWJvcmRlci0yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1MSwgOTEsIDgzKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTEsIDkxLCA4MywgMC4xKSAzMyUsIHJnYmEoMjUxLCA5MSwgODMsIDEpIDEwMCUpO1xyXG4gIGFuaW1hdGlvbjogc3BpbjNEIDIuMnMgbGluZWFyIDBzIGluZmluaXRlO1xyXG59XHJcblxyXG4ubGVvLWNvcmUtMiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDI2MzBhYTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi8qIEFMVEVSTkFUSU5HIE9SQklUUyAqL1xyXG5cclxuLmNpcmNsZS1ib3JkZXIge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIHBhZGRpbmc6IDNweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6ICNlOTVjOGY7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICM2MTRkN2YgMzMlLCAjZTk1YzhmIDEwMCUpO1xyXG4gIGFuaW1hdGlvbjogc3BpbiAuOHMgbGluZWFyIDBzIGluZmluaXRlO1xyXG59XHJcblxyXG4uY2lyY2xlLWNvcmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAvL2JhY2tncm91bmQtY29sb3I6ICMxZDI2MzA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4vKiBYLVJPVEFUSU5HIEJPWEVTICovXHJcblxyXG4uY29uZmlndXJlLWJvcmRlci0xIHtcclxuICB3aWR0aDogMTE1cHg7XHJcbiAgaGVpZ2h0OiAxMTVweDtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZmI1YjUzO1xyXG4gIGFuaW1hdGlvbjogY29uZmlndXJlLWNsb2Nrd2lzZSAzcyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbn1cclxuXHJcbi5jb25maWd1cmUtYm9yZGVyLTIge1xyXG4gIHdpZHRoOiAxMTVweDtcclxuICBoZWlnaHQ6IDExNXB4O1xyXG4gIHBhZGRpbmc6IDNweDtcclxuICBsZWZ0OiAtMTE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHJnYig2MywgMjQ5LCAyMjApO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICBhbmltYXRpb246IGNvbmZpZ3VyZS14Y2xvY2t3aXNlIDNzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGFsdGVybmF0ZTtcclxufVxyXG5cclxuLmNvbmZpZ3VyZS1jb3JlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMjYzMDtcclxufVxyXG5cclxuLyogUFVMU0UgQlVCQkxFUyAqL1xyXG5cclxuLnB1bHNlLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wdWxzZS1idWJibGUge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmZjlkYztcclxufVxyXG5cclxuLnB1bHNlLWJ1YmJsZS0xIHtcclxuICBhbmltYXRpb246IHB1bHNlIC40cyBlYXNlIDBzIGluZmluaXRlIGFsdGVybmF0ZTtcclxufVxyXG5cclxuLnB1bHNlLWJ1YmJsZS0yIHtcclxuICBhbmltYXRpb246IHB1bHNlIC40cyBlYXNlIC4ycyBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbn1cclxuXHJcbi5wdWxzZS1idWJibGUtMyB7XHJcbiAgYW5pbWF0aW9uOiBwdWxzZSAuNHMgZWFzZSAuNHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG59XHJcblxyXG4vKiBTT0xBUiBTWVNURU0gKi9cclxuXHJcbi5zb2xhci1zeXN0ZW0ge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm9yYml0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmYWZiZkM7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uZWFydGgtb3JiaXQge1xyXG4gIHdpZHRoOiAxNjVweDtcclxuICBoZWlnaHQ6IDE2NXB4O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDEycyBsaW5lYXIgMHMgaW5maW5pdGU7XHJcbn1cclxuXHJcbi52ZW51cy1vcmJpdCB7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gNy40cyBsaW5lYXIgMHMgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5tZXJjdXJ5LW9yYml0IHtcclxuICB3aWR0aDogOTBweDtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gM3MgbGluZWFyIDBzIGluZmluaXRlO1xyXG59XHJcblxyXG4ucGxhbmV0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtNXB4O1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmZjlkYztcclxufVxyXG5cclxuLnN1biB7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhYjkxO1xyXG59XHJcblxyXG4ubGVvIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmJsdWUtb3JiaXQge1xyXG4gIHdpZHRoOiAxNjVweDtcclxuICBoZWlnaHQ6IDE2NXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MWRhZmZhNTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbjNEIDNzIGxpbmVhciAuMnMgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5ncmVlbi1vcmJpdCB7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzkxZmZiZmE1O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluM0QgMnMgbGluZWFyIDBzIGluZmluaXRlO1xyXG59XHJcblxyXG4ucmVkLW9yYml0IHtcclxuICB3aWR0aDogOTBweDtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmY2E5MWE1O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluM0QgMXMgbGluZWFyIDBzIGluZmluaXRlO1xyXG59XHJcblxyXG4ud2hpdGUtb3JiaXQge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluM0QgMTBzIGxpbmVhciAwcyBpbmZpbml0ZTtcclxufVxyXG5cclxuLncxIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZTNEKDEsIDEsIDEsIDkwZGVnKTtcclxufVxyXG5cclxuLncyIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZTNEKDEsIDIsIC41LCA5MGRlZyk7XHJcbn1cclxuXHJcbi53MyB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUzRCguNSwgMSwgMiwgOTBkZWcpO1xyXG59XHJcblxyXG4udGhyZWUtcXVhcnRlci1zcGlubmVyIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgI2ZiNWI1MztcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGFuaW1hdGlvbjogc3BpbiAuNXMgbGluZWFyIDBzIGluZmluaXRlO1xyXG59XHJcblxyXG4iLCIvKiBLRVlGUkFNRVMgKi9cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNwaW4zRCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMC41LCAwLjUsIDAuNSwgMzYwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBjb25maWd1cmUtY2xvY2t3aXNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgfVxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBjb25maWd1cmUteGNsb2Nrd2lzZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjI1ZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzE1ZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMC4yNTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xuICB9XG59XG4vKiBHUklEIFNUWUxJTkcgKi9cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDI2MzA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLnNwaW5uZXItYm94IHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8qIFNQSU5OSU5HIENJUkNMRSAqL1xuLmxlby1ib3JkZXItMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMzZmY5ZGM7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDYzLCAyNDksIDIyMCwgMC4xKSAzMyUsICMzZmY5ZGMgMTAwJSk7XG4gIGFuaW1hdGlvbjogc3BpbjNEIDEuOHMgbGluZWFyIDBzIGluZmluaXRlO1xufVxuXG4ubGVvLWNvcmUtMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzQ3NGZhYTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubGVvLWJvcmRlci0yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2ZiNWI1MztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjUxLCA5MSwgODMsIDAuMSkgMzMlLCAjZmI1YjUzIDEwMCUpO1xuICBhbmltYXRpb246IHNwaW4zRCAyLjJzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLmxlby1jb3JlLTIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQyNjMwYWE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLyogQUxURVJOQVRJTkcgT1JCSVRTICovXG4uY2lyY2xlLWJvcmRlciB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgcGFkZGluZzogM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZTk1YzhmO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzYxNGQ3ZiAzMyUsICNlOTVjOGYgMTAwJSk7XG4gIGFuaW1hdGlvbjogc3BpbiAwLjhzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLmNpcmNsZS1jb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLyogWC1ST1RBVElORyBCT1hFUyAqL1xuLmNvbmZpZ3VyZS1ib3JkZXItMSB7XG4gIHdpZHRoOiAxMTVweDtcbiAgaGVpZ2h0OiAxMTVweDtcbiAgcGFkZGluZzogM3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmI1YjUzO1xuICBhbmltYXRpb246IGNvbmZpZ3VyZS1jbG9ja3dpc2UgM3MgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4uY29uZmlndXJlLWJvcmRlci0yIHtcbiAgd2lkdGg6IDExNXB4O1xuICBoZWlnaHQ6IDExNXB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIGxlZnQ6IC0xMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMzZmY5ZGM7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgYW5pbWF0aW9uOiBjb25maWd1cmUteGNsb2Nrd2lzZSAzcyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi5jb25maWd1cmUtY29yZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDI2MzA7XG59XG5cbi8qIFBVTFNFIEJVQkJMRVMgKi9cbi5wdWxzZS1jb250YWluZXIge1xuICB3aWR0aDogMTIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnB1bHNlLWJ1YmJsZSB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmZjlkYztcbn1cblxuLnB1bHNlLWJ1YmJsZS0xIHtcbiAgYW5pbWF0aW9uOiBwdWxzZSAwLjRzIGVhc2UgMHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4ucHVsc2UtYnViYmxlLTIge1xuICBhbmltYXRpb246IHB1bHNlIDAuNHMgZWFzZSAwLjJzIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuLnB1bHNlLWJ1YmJsZS0zIHtcbiAgYW5pbWF0aW9uOiBwdWxzZSAwLjRzIGVhc2UgMC40cyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi8qIFNPTEFSIFNZU1RFTSAqL1xuLnNvbGFyLXN5c3RlbSB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5vcmJpdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmYWZiZkM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmVhcnRoLW9yYml0IHtcbiAgd2lkdGg6IDE2NXB4O1xuICBoZWlnaHQ6IDE2NXB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAxMnMgbGluZWFyIDBzIGluZmluaXRlO1xufVxuXG4udmVudXMtb3JiaXQge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDcuNHMgbGluZWFyIDBzIGluZmluaXRlO1xufVxuXG4ubWVyY3VyeS1vcmJpdCB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDNzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLnBsYW5ldCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNXB4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZmY5ZGM7XG59XG5cbi5zdW4ge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmFiOTE7XG59XG5cbi5sZW8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5ibHVlLW9yYml0IHtcbiAgd2lkdGg6IDE2NXB4O1xuICBoZWlnaHQ6IDE2NXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTFkYWZmYTU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluM0QgM3MgbGluZWFyIDAuMnMgaW5maW5pdGU7XG59XG5cbi5ncmVlbi1vcmJpdCB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzkxZmZiZmE1O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbjNEIDJzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLnJlZC1vcmJpdCB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmNhOTFhNTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4zRCAxcyBsaW5lYXIgMHMgaW5maW5pdGU7XG59XG5cbi53aGl0ZS1vcmJpdCB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluM0QgMTBzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLncxIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUzRCgxLCAxLCAxLCA5MGRlZyk7XG59XG5cbi53MiB7XG4gIHRyYW5zZm9ybTogcm90YXRlM0QoMSwgMiwgMC41LCA5MGRlZyk7XG59XG5cbi53MyB7XG4gIHRyYW5zZm9ybTogcm90YXRlM0QoMC41LCAxLCAyLCA5MGRlZyk7XG59XG5cbi50aHJlZS1xdWFydGVyLXNwaW5uZXIge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjZmI1YjUzO1xuICBib3JkZXItdG9wOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBzcGluIDAuNXMgbGluZWFyIDBzIGluZmluaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared-components/logo-spinner/logo-spinner.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/shared-components/logo-spinner/logo-spinner.component.ts ***!
    \**************************************************************************/

  /*! exports provided: LogoSpinnerComponent */

  /***/
  function srcAppSharedComponentsLogoSpinnerLogoSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoSpinnerComponent", function () {
      return LogoSpinnerComponent;
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


    var _shared_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared-service.service */
    "./src/app/shared-service.service.ts");

    var LogoSpinnerComponent = /*#__PURE__*/function () {
      function LogoSpinnerComponent(sharedService) {
        _classCallCheck(this, LogoSpinnerComponent);

        this.sharedService = sharedService;
      }

      _createClass(LogoSpinnerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LogoSpinnerComponent;
    }();

    LogoSpinnerComponent.ctorParameters = function () {
      return [{
        type: _shared_service_service__WEBPACK_IMPORTED_MODULE_2__["SharedServiceService"]
      }];
    };

    LogoSpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-logo-spinner',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./logo-spinner.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/logo-spinner/logo-spinner.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./logo-spinner.component.scss */
      "./src/app/shared-components/logo-spinner/logo-spinner.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_service__WEBPACK_IMPORTED_MODULE_2__["SharedServiceService"]])], LogoSpinnerComponent);
    /***/
  },

  /***/
  "./src/app/shared-components/logo-spinner/logo-spinner.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/shared-components/logo-spinner/logo-spinner.module.ts ***!
    \***********************************************************************/

  /*! exports provided: LogoSpinnerModule */

  /***/
  function srcAppSharedComponentsLogoSpinnerLogoSpinnerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoSpinnerModule", function () {
      return LogoSpinnerModule;
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


    var _logo_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./logo-spinner.component */
    "./src/app/shared-components/logo-spinner/logo-spinner.component.ts");

    var LogoSpinnerModule = function LogoSpinnerModule() {
      _classCallCheck(this, LogoSpinnerModule);
    };

    LogoSpinnerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
      exports: [_logo_spinner_component__WEBPACK_IMPORTED_MODULE_6__["LogoSpinnerComponent"]],
      declarations: [_logo_spinner_component__WEBPACK_IMPORTED_MODULE_6__["LogoSpinnerComponent"]]
    })], LogoSpinnerModule);
    /***/
  },

  /***/
  "./src/app/shared-service.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared-service.service.ts ***!
    \*******************************************/

  /*! exports provided: SharedServiceService */

  /***/
  function srcAppSharedServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedServiceService", function () {
      return SharedServiceService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SharedServiceService = function SharedServiceService() {
      _classCallCheck(this, SharedServiceService);

      this.onSettingEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
      this.showBackIcon = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
      this.showSpinner = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    };

    SharedServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SharedServiceService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      appName: 'Sandhyadeep Beauty Parlour',
      envName: 'DEV',
      test: false,
      baseURL: 'https://sandhyadeep-api.onrender.com/api/v1/',
      baseURLAdminAPIs: 'https://sandhyadeep-api.onrender.com/api/v1/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\aabhagwa\sandhyadeep ionic stack\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map