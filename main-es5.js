function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
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


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n\n  <ng-container>\n<!--    <sandhyadeep-header class=\"z-index-999\"></sandhyadeep-header>-->\n    <div class=\"no-internet-container\" *ngIf=\"status === 'OFFLINE'\">\n      <div class=\"no-internet-image-container\">\n        <img src=\"assets/no-internet.png\" alt=\"\">\n      </div>\n      <div class=\"no-internet-message\">\n        <h1>Oops!</h1>\n        <div>\n          <span>It seems there is something wrong with your</span>\n          <span>internet connection. Please connect to the</span>\n          <span>internet and refresh again</span>\n        </div>\n      </div>\n      <div class=\"no-internet-footer\">\n        <button (click)=\"refreshPage()\"\n                mat-raised-button color=\"primary\">Try Again\n        </button>\n      </div>\n    </div>\n  </ng-container>\n</ion-app>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/header-component/header-component.page.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/header-component/header-component.page.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsHeaderComponentHeaderComponentPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header-container\">\n  <ion-header>\n    <div style=\"display: flex; align-items: center; justify-content: space-between; margin-right: 10px; height: 65px\">\n      <div style=\"display: flex; align-items: center; justify-content: space-between;\">\n        <div *ngIf=\"showBackIcon\" (click)=\"backClicked()\" class=\"header-back\">\n          <i class=\"fa fa-angle-left\"></i>\n        </div>\n        <div *ngIf=\"!showSearchBox\" [routerLink]=\"['/feed']\" style=\"width: 65px; overflow: hidden; display: inline-block;\">\n          <img src=\"/assets/new-theme/Sandhyadeep_logo.png\">\n        </div>\n        <ng-container *ngIf=\"showSearchBox\">\n          <div style=\"width: 230px\">\n            <ion-searchbar [(ngModel)]=\"searchTerm\" (ionInput)=\"setFilteredItems($event)\"></ion-searchbar>\n          </div>\n        </ng-container>\n        <div *ngIf=\"!showSearchBox\" class=\"logo-container\">\n          <div class=\"logo-text\">\n            Sandhyadeep\n          </div>\n          <div class=\"slogan-text\">\n            Have a hair affair with us\n          </div>\n        </div>\n      </div>\n      <div style=\"display: flex; justify-content: space-between; align-items: center;\">\n        <div *ngIf=\"cartDetails && cartDetails.length > 0\" class=\"demo-section\">\n          <mat-icon [routerLink]=\"['/schedule-appointment']\"  color=\"primary\" matBadge=\"{{cartDetails.length}}\" matBadgeColor=\"warn\">shopping_cart</mat-icon>\n        </div>\n        <div *ngIf=\"!hideProfileIcon\" [routerLink]=\"['/settings']\" class=\"profileIcon\">\n          <img src=\"assets/icon/profile-icon.png\" alt=\"\">\n        </div>\n      </div>\n    </div>\n  </ion-header>\n</div>\n";
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


    __webpack_exports__["default"] = "<div *ngIf=\"sharedService.showSpinner | async\" style=\"background: white;\n    opacity: 0.9;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 99;\n    display: flex;\n    top: 0;\n    justify-content: center;\n    align-items: center;\">\n    <div class=\"spinner-box\">\n        <div style=\"display: flex;\n    position: absolute;\n    flex-direction: column;\n    color: white;\n    align-items: center;\n    justify-content: center;\">\n            <img style=\"width: 50px;z-index: 9999;\" src=\"/assets/new-theme/Sandhyadeep_logo.png\" alt=\"\">\n            <div class=\"sandhyadeep-title-spinner\">Sandhyadeep</div>\n        </div>\n        <div class=\"circle-border\">\n            <div class=\"circle-core\">\n            </div>\n        </div>\n    </div>\n</div>\n\n";
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
  "./src/app/api.service.ts":
  /*!********************************!*\
    !*** ./src/app/api.service.ts ***!
    \********************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared-service.service */
    "./src/app/shared-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_components_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared-components/storage.service */
    "./src/app/shared-components/storage.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../assets/constants/app-constants */
    "./src/assets/constants/app-constants.ts");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(storageService, router, sharedService, http, toastController) {
        _classCallCheck(this, ApiService);

        this.storageService = storageService;
        this.router = router;
        this.sharedService = sharedService;
        this.http = http;
        this.toastController = toastController; // Init with null to filter out the first value in a guard!

        this.isAuthenticated = new rxjs__WEBPACK_IMPORTED_MODULE_10__["BehaviorSubject"](null);
        this.currentAccessToken = null;
        this.authUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseAuthUrl;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseURLAdminAPIs;
        this.country = new rxjs__WEBPACK_IMPORTED_MODULE_10__["BehaviorSubject"]('');
        this.loadToken();
      }

      _createClass(ApiService, [{
        key: "loginWithOtp",
        value: function loginWithOtp(phoneData) {
          return this.http.post("".concat(this.authUrl, "loginWithOtp"), phoneData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
            return res;
          }));
        } // Sign in a user and store access and refres token

      }, {
        key: "verifyOtp",
        value: function verifyOtp(credentials) {
          var _this = this;

          return this.http.post("".concat(this.authUrl, "verifyOtp"), credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (response) {
            _this.storageService.storeValue(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_11__["appConstants"].USER_INFO, response.data.user);

            _this.storageService.storeValue(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_11__["appConstants"].ACCESS_TOKEN_KEY, response.data.tokens.access.token);

            _this.storageService.storeValue(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_11__["appConstants"].REFRESH_TOKEN_KEY, response.data.tokens.refresh.token);

            _this.isAuthenticated.next(true);
          }));
        } // Load accessToken on startup

      }, {
        key: "loadToken",
        value: function loadToken() {
          var token = this.storageService.getStorageValue(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_11__["appConstants"].ACCESS_TOKEN_KEY);

          if (token) {
            this.currentAccessToken = token;
            this.isAuthenticated.next(true);
          } else {
            this.isAuthenticated.next(false);
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var token;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.storageService.getStoredValue(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_11__["appConstants"].REFRESH_TOKEN_KEY);

                  case 2:
                    token = _context.sent;
                    return _context.abrupt("return", this.http.post("".concat(this.authUrl, "logout"), {
                      refreshToken: token
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (_) {
                      _this2.isAuthenticated.next(false);

                      _this2.storageService.removeStoredItem(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_11__["appConstants"].REFRESH_TOKEN_KEY);

                      _this2.storageService.removeStoredItem(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_11__["appConstants"].ACCESS_TOKEN_KEY);

                      _this2.storageService.removeStoredItem(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_11__["appConstants"].USER_INFO);
                    })).subscribe(function () {
                      _this2.isAuthenticated.next(false);

                      _this2.storageService.removeStoredItem(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_11__["appConstants"].REFRESH_TOKEN_KEY);

                      _this2.storageService.removeStoredItem(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_11__["appConstants"].ACCESS_TOKEN_KEY);

                      _this2.storageService.removeStoredItem(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_11__["appConstants"].USER_INFO);

                      _this2.router.navigate(['/login']);
                    }));

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } // Load the refresh token from storage
        // then attach it as the header for one specific API call

      }, {
        key: "getNewAccessToken",
        value: function getNewAccessToken() {
          var _this3 = this;

          var refreshToken = Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["from"])(this.storageService.getStoredValue(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_11__["appConstants"].REFRESH_TOKEN_KEY));
          return refreshToken.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (token) {
            if (token) {
              var resBody = {
                refreshToken: token
              };
              return _this3.http.post("".concat(_this3.authUrl, "refresh-tokens"), resBody);
            } else {
              // No stored refresh token
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])(null);
            }
          }));
        } // Store a new access token

      }, {
        key: "storeAccessToken",
        value: function storeAccessToken(accessToken) {
          this.currentAccessToken = accessToken;
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["from"])(this.storageService.storeValue(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_11__["appConstants"].ACCESS_TOKEN_KEY, accessToken));
        }
      }, {
        key: "updateUser",
        value: function updateUser(data, userId) {
          return this.http.patch("".concat(this.baseURL, "users/").concat(userId), data, {});
        }
      }, {
        key: "createUser",
        value: function createUser(data) {
          return this.http.post("".concat(this.baseURL, "users"), data, {});
        }
      }, {
        key: "getUserDetails",
        value: function getUserDetails(userId) {
          return this.http.get("".concat(this.baseURL, "users/").concat(userId), {});
        }
      }, {
        key: "getAllUserDetails",
        value: function getAllUserDetails() {
          return this.http.get("".concat(this.baseURL, "users/all"), {});
        }
      }, {
        key: "getAllServiceTypes",
        value: function getAllServiceTypes() {
          return this.http.get("".concat(this.baseURL, "serviceTypes"), {});
        }
      }, {
        key: "getAllServices",
        value: function getAllServices() {
          return this.http.get("".concat(this.baseURL, "services"), {});
        }
      }, {
        key: "deleteServiceType",
        value: function deleteServiceType(serviceTypeId) {
          return this.http["delete"]("".concat(this.baseURL, "serviceTypes/").concat(serviceTypeId), {});
        }
      }, {
        key: "createServiceType",
        value: function createServiceType(data) {
          return this.http.post("".concat(this.baseURL, "serviceTypes"), data, {});
        }
      }, {
        key: "updateServiceType",
        value: function updateServiceType(data, id) {
          return this.http.patch("".concat(this.baseURL, "serviceTypes/").concat(id), data, {});
        }
      }, {
        key: "createSubService",
        value: function createSubService(data) {
          return this.http.post("".concat(this.baseURL, "subServices"), data, {});
        }
      }, {
        key: "updateSubService",
        value: function updateSubService(data, id) {
          return this.http.patch("".concat(this.baseURL, "subServices/").concat(id), data, {});
        }
      }, {
        key: "getAllSubService",
        value: function getAllSubService() {
          return this.http.get("".concat(this.baseURL, "subServices"), {});
        }
      }, {
        key: "deleteSubService",
        value: function deleteSubService(serviceTypeId) {
          return this.http["delete"]("".concat(this.baseURL, "subServices/").concat(serviceTypeId), {});
        }
      }, {
        key: "createService",
        value: function createService(data) {
          return this.http.post("".concat(this.baseURL, "services"), data, {});
        }
      }, {
        key: "updateService",
        value: function updateService(data, id) {
          return this.http.patch("".concat(this.baseURL, "services/").concat(id), data, {});
        }
      }, {
        key: "deleteService",
        value: function deleteService(serviceId) {
          return this.http["delete"]("".concat(this.baseURL, "services/").concat(serviceId), {});
        } // -------------------------  JSON APIS ------------------------------

      }, {
        key: "getBrands",
        value: function getBrands() {
          var localUrl = 'assets/json_files/brands.json';
          return this.http.get(localUrl);
        }
      }, {
        key: "getSkinTypes",
        value: function getSkinTypes() {
          var localUrl = 'assets/json_files/skinTypes.json';
          return this.http.get(localUrl);
        }
      }, {
        key: "getUserRole",
        value: function getUserRole() {
          return localStorage.getItem('role');
        }
      }, {
        key: "setHeaderToken",
        value: function setHeaderToken() {
          var token = localStorage.getItem('token');
          this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            Authorization: "Bearer ".concat(token)
          });
        }
      }, {
        key: "getServicesData",
        value: function getServicesData() {
          var localUrl = 'assets/json_files/services.json';
          return this.http.get(localUrl);
        }
      }, {
        key: "getMainServiceData",
        value: function getMainServiceData() {
          var localUrl = 'assets/json_files/MainServices.json';
          return this.http.get(localUrl);
        }
      }, {
        key: "getCombos",
        value: function getCombos() {
          var localUrl = 'assets/json_files/packages.json';
          return this.http.get(localUrl);
        }
      }, {
        key: "getCoupons",
        value: function getCoupons() {
          var localUrl = 'assets/json_files/coupons.json';
          return this.http.get(localUrl);
        }
      }, {
        key: "getServicePackage",
        value: function getServicePackage() {
          var localUrl = 'assets/json_files/service-packages.json';
          return this.http.get(localUrl);
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          var localUrl = 'assets/json_files/products.json';
          return this.http.get(localUrl);
        }
      }, {
        key: "getBookings",
        value: function getBookings() {
          var localUrl = 'assets/json_files/bookings.json';
          return this.http.get(localUrl);
        }
      }, {
        key: "commonError",
        value: function commonError(err) {
          var errCode = err.status;
          var errorMessage = err.error.message;

          switch (errCode) {
            case 401:
              {
                this.sharedService.removeAllUserDetails();
                this.router.navigate(['login']);
                break;
              }

            case 0:
              {
                errorMessage = 'No Internet Connection';
                break;
              }
          }

          this.presentToast(errorMessage).then();
        }
      }, {
        key: "presentToast",
        value: function presentToast(displayMessage) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastController.create({
                      message: displayMessage,
                      position: 'top',
                      cssClass: 'ionic-error-toast',
                      duration: 2000
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "setSession",
        value: function setSession(authResult) {
          if (authResult.data.id) {
            this.sharedService.setUserId(authResult.data.id);
          }
        }
      }, {
        key: "setToken",
        value: function setToken(authResult) {
          if (authResult.data.token) {
            this.sharedService.setToken(authResult.data.token);
          }
        } //
        // logout() {
        //   localStorage.removeItem("id_token");
        //   localStorage.removeItem("expires_at");
        // }

      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return moment__WEBPACK_IMPORTED_MODULE_5__().isBefore(this.getExpiration());
        }
      }, {
        key: "isLoggedOut",
        value: function isLoggedOut() {
          return !this.isLoggedIn();
        }
      }, {
        key: "getExpiration",
        value: function getExpiration() {
          var expiration = localStorage.getItem('expires_at');
          var expiresAt = JSON.parse(expiration);
          return moment__WEBPACK_IMPORTED_MODULE_5__(expiresAt);
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _shared_components_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }, {
        type: _shared_service_service__WEBPACK_IMPORTED_MODULE_7__["SharedServiceService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }];
    };

    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_components_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _shared_service_service__WEBPACK_IMPORTED_MODULE_7__["SharedServiceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])], ApiService);
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
    /* harmony import */


    var _shared_components_authentication_auth_guards_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared-components/authentication/auth-guards.service */
    "./src/app/shared-components/authentication/auth-guards.service.ts");
    /* harmony import */


    var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage-angular */
    "./node_modules/@ionic/storage-angular/fesm2015/ionic-storage-angular.js");

    var routes = [{
      path: '',
      canActivate: [_shared_components_authentication_auth_guards_service__WEBPACK_IMPORTED_MODULE_3__["PreLogin"]],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-app-slides-slides-module */
        "pages-app-slides-slides-module").then(__webpack_require__.bind(null,
        /*! ./pages/app-slides/slides.module */
        "./src/app/pages/app-slides/slides.module.ts")).then(function (e) {
          return e.SlidesModule;
        });
      }
    }, {
      path: 'login',
      canActivate: [_shared_components_authentication_auth_guards_service__WEBPACK_IMPORTED_MODULE_3__["PreLogin"]],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-login-login-module */
        "pages-login-login-module").then(__webpack_require__.bind(null,
        /*! ./pages/login/login.module */
        "./src/app/pages/login/login.module.ts")).then(function (e) {
          return e.LoginPageModule;
        });
      }
    }, {
      path: 'sign-up',
      canActivate: [_shared_components_authentication_auth_guards_service__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-signup-signup-module */
        "pages-signup-signup-module").then(__webpack_require__.bind(null,
        /*! ./pages/signup/signup.module */
        "./src/app/pages/signup/signup.module.ts")).then(function (e) {
          return e.SignupPageModule;
        });
      }
    }, {
      path: 'feed',
      canActivate: [_shared_components_authentication_auth_guards_service__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]],
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-feed-feed-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-feed-feed-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/feed/feed.module */
        "./src/app/pages/feed/feed.module.ts")).then(function (e) {
          return e.FeedPageModule;
        });
      }
    }, {
      path: 'services',
      canActivate: [_shared_components_authentication_auth_guards_service__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-services-services-module */
        "default~pages-about-us-about-us-module~pages-services-services-module").then(__webpack_require__.bind(null,
        /*! ./pages/services/services.module */
        "./src/app/pages/services/services.module.ts")).then(function (e) {
          return e.ServicePageModule;
        });
      }
    }, {
      path: 'about-us',
      canActivate: [_shared_components_authentication_auth_guards_service__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]],
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-about-us-about-us-module */
        [__webpack_require__.e("default~pages-about-us-about-us-module~pages-services-services-module"), __webpack_require__.e("default~pages-about-us-about-us-module~pages-products-products-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-about-us-about-us-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/about-us/about-us.module */
        "./src/app/pages/about-us/about-us.module.ts")).then(function (e) {
          return e.AboutUsPageModule;
        });
      }
    }, {
      path: 'portfolio',
      canActivate: [_shared_components_authentication_auth_guards_service__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]],
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-portfolio-portfolio-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-portfolio-portfolio-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/portfolio/portfolio.module */
        "./src/app/pages/portfolio/portfolio.module.ts")).then(function (e) {
          return e.PortfolioModule;
        });
      }
    }, {
      path: 'notifications',
      canActivate: [_shared_components_authentication_auth_guards_service__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-notifications-notifications-module */
        "pages-notifications-notifications-module").then(__webpack_require__.bind(null,
        /*! ./pages/notifications/notifications.module */
        "./src/app/pages/notifications/notifications.module.ts")).then(function (e) {
          return e.NotificationsPageModule;
        });
      }
    }, {
      path: 'messages',
      canActivate: [_shared_components_authentication_auth_guards_service__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-messages-messages-module */
        "pages-messages-messages-module").then(__webpack_require__.bind(null,
        /*! ./pages/messages/messages.module */
        "./src/app/pages/messages/messages.module.ts")).then(function (e) {
          return e.MessagesPageModule;
        });
      }
    }, {
      path: 'settings',
      canActivate: [_shared_components_authentication_auth_guards_service__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-settings-settings-module */
        "pages-settings-settings-module").then(__webpack_require__.bind(null,
        /*! ./pages/settings/settings.module */
        "./src/app/pages/settings/settings.module.ts")).then(function (e) {
          return e.SettingsPageModule;
        });
      }
    }, {
      path: 'packages',
      canActivate: [_shared_components_authentication_auth_guards_service__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]],
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-packages-packages-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-packages-packages-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/packages/packages.module */
        "./src/app/pages/packages/packages.module.ts")).then(function (e) {
          return e.PackagesModule;
        });
      }
    }, {
      path: 'products',
      canActivate: [_shared_components_authentication_auth_guards_service__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]],
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-products-products-module */
        [__webpack_require__.e("default~pages-about-us-about-us-module~pages-products-products-module"), __webpack_require__.e("pages-products-products-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/products/products.module */
        "./src/app/pages/products/products.module.ts")).then(function (e) {
          return e.ProductsModule;
        });
      }
    }, {
      path: 'bookings',
      canActivate: [_shared_components_authentication_auth_guards_service__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]],
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-bookings-bookings-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-bookings-bookings-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/bookings/bookings.module */
        "./src/app/pages/bookings/bookings.module.ts")).then(function (e) {
          return e.BookingsModule;
        });
      }
    }, {
      path: 'apply-coupon',
      canActivate: [_shared_components_authentication_auth_guards_service__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-apply-coupon-apply-coupon-module */
        "pages-apply-coupon-apply-coupon-module").then(__webpack_require__.bind(null,
        /*! ./pages/apply-coupon/apply-coupon.module */
        "./src/app/pages/apply-coupon/apply-coupon.module.ts")).then(function (e) {
          return e.ApplyCouponModule;
        });
      }
    }, {
      path: 'schedule-appointment',
      canActivate: [_shared_components_authentication_auth_guards_service__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-schedule-appointment-schedule-appointment-module */
        "pages-schedule-appointment-schedule-appointment-module").then(__webpack_require__.bind(null,
        /*! ./pages/schedule-appointment/schedule-appointment.module */
        "./src/app/pages/schedule-appointment/schedule-appointment.module.ts")).then(function (e) {
          return e.ScheduleAppointmentModule;
        });
      }
    }, {
      path: 'payments',
      canActivate: [_shared_components_authentication_auth_guards_service__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-payment-payment-module */
        "pages-payment-payment-module").then(__webpack_require__.bind(null,
        /*! ./pages/payment/payment.module */
        "./src/app/pages/payment/payment.module.ts")).then(function (e) {
          return e.PaymentModule;
        });
      }
    }, {
      path: 'package-details',
      canActivate: [_shared_components_authentication_auth_guards_service__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-packages-package-details-package-details-module */
        "pages-packages-package-details-package-details-module").then(__webpack_require__.bind(null,
        /*! ./pages/packages/package-details/package-details.module */
        "./src/app/pages/packages/package-details/package-details.module.ts")).then(function (e) {
          return e.PackageDetailsModule;
        });
      }
    }, {
      path: 'product-details',
      canActivate: [_shared_components_authentication_auth_guards_service__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-products-product-details-product-details-module */
        "pages-products-product-details-product-details-module").then(__webpack_require__.bind(null,
        /*! ./pages/products/product-details/product-details.module */
        "./src/app/pages/products/product-details/product-details.module.ts")).then(function (e) {
          return e.ProductDetailsModule;
        });
      }
    }, {
      path: 'admin-panel',
      canActivate: [_shared_components_authentication_auth_guards_service__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-admin-panel-admin-panel-module */
        "pages-admin-panel-admin-panel-module").then(__webpack_require__.bind(null,
        /*! ./pages/admin-panel/admin-panel.module */
        "./src/app/pages/admin-panel/admin-panel.module.ts")).then(function (m) {
          return m.AdminPanelPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__["IonicStorageModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"],
        useHash: true
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


    __webpack_exports__["default"] = "html, body {\n  font-family: \"Muli\" !important;\n}\n\nion-content, ion-button, ion-header, ion-searchbar, ion-toolbar, ion-item, ion-label {\n  font-family: \"Muli\" !important;\n}\n\nbody {\n  background-color: white !important;\n  font-size: 14px;\n  font-family: \"Muli\" !important;\n}\n\n.swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #265791 !important;\n  border: 1px solid pink;\n}\n\n.zoom-07 {\n  zoom: 0.7;\n}\n\n:root .tick-icon {\n  color: green;\n}\n\n.modal-backdrop-bg {\n  transition: opacity 300ms ease-in-out;\n  -webkit-transition: opacity 300ms ease-in-out;\n  background-color: #000;\n  opacity: 0;\n}\n\n.active .modal-backdrop-bg {\n  opacity: 0.5;\n}\n\n.default-button {\n  color: white;\n  margin: 15px 0;\n  display: flex;\n  border-radius: 7px;\n  justify-content: center;\n  text-align: center;\n  background: linear-gradient(225deg, #BD1E51 2%, #265791 63%);\n  height: 45px;\n  padding: 0 10px;\n}\n\n.default-button button {\n  font-size: 16px;\n  font-weight: bold;\n  background: transparent;\n  color: white;\n}\n\n.primary-add-button {\n  margin: 15px 0;\n  display: flex;\n  border-radius: 7px;\n  justify-content: center;\n  text-align: center;\n  background: white;\n  height: 45px;\n  border: 1px solid #BD1E51;\n  padding: 0 10px;\n}\n\n.primary-add-button button {\n  font-size: 16px;\n  font-weight: bold;\n  background: transparent;\n  color: #BD1E51;\n}\n\n.border-spacing-top {\n  border-top: 10px solid #d3d3d38f;\n}\n\n.border-spacing-bottom {\n  border-bottom: 10px solid #d3d3d38f;\n}\n\n.mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: #BD1E51;\n}\n\n.mat-tab-label {\n  opacity: 1 !important;\n  width: 100% !important;\n}\n\n.mat-tab-label .mat-tab-label-content {\n  color: #265791;\n}\n\nbutton:focus {\n  outline: none !important;\n}\n\n.mat-border-shadow {\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n}\n\n.border-div {\n  border-bottom: 10px solid #d3d3d37a;\n}\n\n.booking-trash-icon .mat-mini-fab .mat-button-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.alert-title.sc-ion-alert-md {\n  font-size: 16px !important;\n  font-weight: 400 !important;\n}\n\n.snackClass {\n  margin-top: 123px !important;\n  background: #265791;\n}\n\n.successSnack .toast-content {\n  background: #198754 !important;\n}\n\n.errorSnack .toast-content {\n  background: red !important;\n}\n\n.z-index-999 {\n  z-index: 9999;\n}\n\n.no-internet-container {\n  background: white;\n  height: 100%;\n  width: 100%;\n  z-index: 9999;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  font-size: 16px;\n}\n\n.no-internet-container .no-internet-image-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 250px;\n}\n\n.no-internet-container .no-internet-message {\n  text-align: center;\n}\n\n.no-internet-container .no-internet-message h1 {\n  font-weight: 800;\n}\n\n.no-internet-footer {\n  display: flex;\n  justify-content: center;\n  margin: 30px 0;\n}\n\n.no-internet-footer button {\n  width: 200px;\n}\n\n.service-checkbox mat-checkbox .mat-checkbox-inner-container {\n  width: 12px !important;\n  height: 12px !important;\n}\n\n.search-box {\n  padding: 5px 0 5px;\n}\n\n.search-box ion-searchbar {\n  height: 50px !important;\n}\n\n.search-box ion-searchbar .searchbar-input-container {\n  border: 1px solid #265791;\n  border-radius: 10px;\n}\n\n.search-box ion-searchbar .searchbar-input-container input {\n  background: white !important;\n  font-size: 14px;\n}\n\n.admin-modal-class .ion-page {\n  margin: 40px 0 0;\n  border-top-left-radius: 10px !important;\n  border-top-right-radius: 10px !important;\n  background: white;\n}\n\n.required-label::after {\n  content: \"*\";\n  color: red;\n}\n\n.mat-mini-fab .mat-button-wrapper {\n  display: flex !important;\n}\n\n.modal-form-container .service-textarea .textarea-wrapper textarea {\n  height: 300px;\n}\n\nion-chip {\n  color: #265791 !important;\n}\n\ninput, textarea, ion-select, ion-datetime {\n  color: #666 !important;\n}\n\n.service-list-accordion {\n  border-bottom: 10px solid #d3d3d37a;\n}\n\n.service-list-accordion .expansion-header {\n  margin: 10px 0px;\n  border-left: 4px solid #BD1E51;\n  border-radius: 0px;\n  height: 50px;\n}\n\n.service-list-accordion .mat-expansion-panel-body {\n  padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL3NhbmRoeWFkZWVwLXRoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSw4QkFBQTtBQ0RGOztBRElBO0VBQ0UsOEJBQUE7QUNERjs7QURJQTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FDREY7O0FETUE7RUFDRSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBQ0hGOztBRE1BO0VBQ0UsU0FBQTtBQ0hGOztBRE9FO0VBQ0UsWUFBQTtBQ0pKOztBRFFBO0VBQ0UscUNBQUE7RUFDQSw2Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQ0xGOztBRFFBO0VBQ0UsWUFBQTtBQ0xGOztBRFFBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNERBQUE7RUFDQSxZRXhDYztFRnlDZCxlQUFBO0FDTEY7O0FETUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNKSjs7QURRQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDTEY7O0FETUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNFeEVZO0FEb0VoQjs7QURRQTtFQUNFLGdDQUFBO0FDTEY7O0FEUUE7RUFDRSxtQ0FBQTtBQ0xGOztBRFFBO0VBQ0UseUJFckZjO0FEZ0ZoQjs7QURRQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QUNMRjs7QURNRTtFQUNFLGNFM0ZjO0FEdUZsQjs7QURRQTtFQUNFLHdCQUFBO0FDTEY7O0FEUUE7RUFDRSwrR0FBQTtBQ0xGOztBRFFBO0VBQ0UsbUNBQUE7QUNMRjs7QURTRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDTko7O0FEVUE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0FDUEY7O0FEVUE7RUFDRSw0QkFBQTtFQUNBLG1CRTFIZ0I7QURtSGxCOztBRFdFO0VBQ0UsOEJBQUE7QUNSSjs7QURhRTtFQUNFLDBCQUFBO0FDVko7O0FEY0E7RUFDRSxhQUFBO0FDWEY7O0FEY0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDWEY7O0FEWUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUNWSjs7QURZRTtFQUNFLGtCQUFBO0FDVko7O0FEV0k7RUFDRSxnQkFBQTtBQ1ROOztBRGNBO0VBQ0UsYUFBQTtFQUFlLHVCQUFBO0VBQXlCLGNBQUE7QUNUMUM7O0FEVUU7RUFDRSxZQUFBO0FDUko7O0FEWUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FDVEY7O0FEWUE7RUFDRSxrQkFBQTtBQ1RGOztBRFVFO0VBQ0UsdUJBQUE7QUNSSjs7QURTSTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUNQTjs7QURRTTtFQUNFLDRCQUFBO0VBQ0EsZUFBQTtBQ05SOztBRGFFO0VBQ0UsZ0JBQUE7RUFDQSx1Q0FBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7QUNWSjs7QURjQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0FDWEY7O0FEY0E7RUFDRSx3QkFBQTtBQ1hGOztBRGlCTTtFQUNFLGFBQUE7QUNkUjs7QURvQkE7RUFDRSx5QkFBQTtBQ2pCRjs7QURvQkE7RUFDRSxzQkFBQTtBQ2pCRjs7QURxQkE7RUFPRSxtQ0FBQTtBQ3hCRjs7QURrQkU7RUFDRSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDaEJKOztBRG1CRTtFQUNFLHFCQUFBO0FDakJKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL3NhbmRoeWFkZWVwLXRoZW1lXCI7XG5cbmh0bWwsIGJvZHkge1xuICBmb250LWZhbWlseTogJ011bGknICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50LCBpb24tYnV0dG9uLCBpb24taGVhZGVyLCBpb24tc2VhcmNoYmFyLCBpb24tdG9vbGJhciwgaW9uLWl0ZW0sIGlvbi1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiAnTXVsaScgIWltcG9ydGFudDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6ICdNdWxpJyAhaW1wb3J0YW50O1xuXG4gIC8vZm9udC1mYW1pbHk6ICdNdWxpJywgc2VyaWY7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZDogJHNlY29uZGFyeS1jb2xvciAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCBwaW5rO1xufVxuXG4uem9vbS0wNyB7XG4gIHpvb206IDAuNztcbn1cblxuOnJvb3Qge1xuICAudGljay1pY29uIHtcbiAgICBjb2xvcjogZ3JlZW47XG4gIH1cbn1cblxuLm1vZGFsLWJhY2tkcm9wLWJnIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uYWN0aXZlIC5tb2RhbC1iYWNrZHJvcC1iZyB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmRlZmF1bHQtYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDE1cHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAkcHJpbWFyeS1jb2xvciAyJSwgJHNlY29uZGFyeS1jb2xvciA2MyUpO1xuICBoZWlnaHQ6ICRidXR0b24taGVpZ2h0O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuXG4ucHJpbWFyeS1hZGQtYnV0dG9uIHtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktY29sb3I7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICB9XG59XG5cbi5ib3JkZXItc3BhY2luZy10b3Age1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICNkM2QzZDM4Zjtcbn1cblxuLmJvcmRlci1zcGFjaW5nLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgI2QzZDNkMzhmO1xufVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC1pbmstYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG59XG5cbi5tYXQtdGFiLWxhYmVsIHtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAubWF0LXRhYi1sYWJlbC1jb250ZW50IHtcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgfVxufVxuXG5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtYm9yZGVyLXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYigwIDAgMCAvIDIwJSksIDAgMXB4IDFweCAwIHJnYigwIDAgMCAvIDE0JSksIDAgMXB4IDNweCAwIHJnYigwIDAgMCAvIDEyJSk7XG59XG5cbi5ib3JkZXItZGl2IHtcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZDNkM2QzN2E7XG59XG5cbi5ib29raW5nLXRyYXNoLWljb24ge1xuICAubWF0LW1pbmktZmFiIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuXG4uYWxlcnQtdGl0bGUuc2MtaW9uLWFsZXJ0LW1kIHtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbn1cblxuLnNuYWNrQ2xhc3Mge1xuICBtYXJnaW4tdG9wOiAxMjNweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5LWNvbG9yO1xufVxuXG4uc3VjY2Vzc1NuYWNrIHtcbiAgLnRvYXN0LWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6ICMxOTg3NTQgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uZXJyb3JTbmFjayB7XG4gIC50b2FzdC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiByZWQgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uei1pbmRleC05OTkgIHtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLm5vLWludGVybmV0LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTk5O1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LXNpemU6IDE2cHg7XG4gIC5uby1pbnRlcm5ldC1pbWFnZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICB9XG4gIC5uby1pbnRlcm5ldC1tZXNzYWdlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaDEge1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICB9XG4gIH1cbn1cblxuLm5vLWludGVybmV0LWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBtYXJnaW46IDMwcHggMDtcbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbn1cblxuLnNlcnZpY2UtY2hlY2tib3ggbWF0LWNoZWNrYm94IC5tYXQtY2hlY2tib3gtaW5uZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDEycHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2gtYm94IHtcbiAgcGFkZGluZzogNXB4IDAgNXB4O1xuICBpb24tc2VhcmNoYmFyIHtcbiAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgICAuc2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lciB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGlucHV0IHtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uYWRtaW4tbW9kYWwtY2xhc3Mge1xuICAuaW9uLXBhZ2Uge1xuICAgIG1hcmdpbjogNDBweCAwIDA7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cbn1cblxuLnJlcXVpcmVkLWxhYmVsOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiKlwiO1xuICBjb2xvcjogcmVkO1xufVxuXG4ubWF0LW1pbmktZmFiIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1mb3JtLWNvbnRhaW5lciB7XG4gIC5zZXJ2aWNlLXRleHRhcmVhIHtcbiAgICAudGV4dGFyZWEtd3JhcHBlciB7XG4gICAgICB0ZXh0YXJlYSB7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmlvbi1jaGlwIHtcbiAgY29sb3I6ICRzZWNvbmRhcnktY29sb3IgIWltcG9ydGFudDtcbn1cblxuaW5wdXQsIHRleHRhcmVhLCBpb24tc2VsZWN0LCBpb24tZGF0ZXRpbWUge1xuICBjb2xvcjogIzY2NiAhaW1wb3J0YW50O1xufVxuXG5cbi5zZXJ2aWNlLWxpc3QtYWNjb3JkaW9uIHtcbiAgLmV4cGFuc2lvbi1oZWFkZXIge1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjQkQxRTUxO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZDNkM2QzN2E7XG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHkge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgfVxufVxuIiwiaHRtbCwgYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGlcIiAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCwgaW9uLWJ1dHRvbiwgaW9uLWhlYWRlciwgaW9uLXNlYXJjaGJhciwgaW9uLXRvb2xiYXIsIGlvbi1pdGVtLCBpb24tbGFiZWwge1xuICBmb250LWZhbWlseTogXCJNdWxpXCIgIWltcG9ydGFudDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaVwiICFpbXBvcnRhbnQ7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZDogIzI2NTc5MSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCBwaW5rO1xufVxuXG4uem9vbS0wNyB7XG4gIHpvb206IDAuNztcbn1cblxuOnJvb3QgLnRpY2staWNvbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLm1vZGFsLWJhY2tkcm9wLWJnIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uYWN0aXZlIC5tb2RhbC1iYWNrZHJvcC1iZyB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmRlZmF1bHQtYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDE1cHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjQkQxRTUxIDIlLCAjMjY1NzkxIDYzJSk7XG4gIGhlaWdodDogNDVweDtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLmRlZmF1bHQtYnV0dG9uIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wcmltYXJ5LWFkZC1idXR0b24ge1xuICBtYXJnaW46IDE1cHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQkQxRTUxO1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4ucHJpbWFyeS1hZGQtYnV0dG9uIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI0JEMUU1MTtcbn1cblxuLmJvcmRlci1zcGFjaW5nLXRvcCB7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgI2QzZDNkMzhmO1xufVxuXG4uYm9yZGVyLXNwYWNpbmctYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZDNkM2QzOGY7XG59XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhciwgLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkQxRTUxO1xufVxuXG4ubWF0LXRhYi1sYWJlbCB7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbi5tYXQtdGFiLWxhYmVsIC5tYXQtdGFiLWxhYmVsLWNvbnRlbnQge1xuICBjb2xvcjogIzI2NTc5MTtcbn1cblxuYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWJvcmRlci1zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5ib3JkZXItZGl2IHtcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZDNkM2QzN2E7XG59XG5cbi5ib29raW5nLXRyYXNoLWljb24gLm1hdC1taW5pLWZhYiAubWF0LWJ1dHRvbi13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hbGVydC10aXRsZS5zYy1pb24tYWxlcnQtbWQge1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xufVxuXG4uc25hY2tDbGFzcyB7XG4gIG1hcmdpbi10b3A6IDEyM3B4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICMyNjU3OTE7XG59XG5cbi5zdWNjZXNzU25hY2sgLnRvYXN0LWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMTk4NzU0ICFpbXBvcnRhbnQ7XG59XG5cbi5lcnJvclNuYWNrIC50b2FzdC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogcmVkICFpbXBvcnRhbnQ7XG59XG5cbi56LWluZGV4LTk5OSB7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi5uby1pbnRlcm5ldC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTk5OTtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLm5vLWludGVybmV0LWNvbnRhaW5lciAubm8taW50ZXJuZXQtaW1hZ2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMjUwcHg7XG59XG4ubm8taW50ZXJuZXQtY29udGFpbmVyIC5uby1pbnRlcm5ldC1tZXNzYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm5vLWludGVybmV0LWNvbnRhaW5lciAubm8taW50ZXJuZXQtbWVzc2FnZSBoMSB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5uby1pbnRlcm5ldC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAzMHB4IDA7XG59XG4ubm8taW50ZXJuZXQtZm9vdGVyIGJ1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNlcnZpY2UtY2hlY2tib3ggbWF0LWNoZWNrYm94IC5tYXQtY2hlY2tib3gtaW5uZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDEycHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2gtYm94IHtcbiAgcGFkZGluZzogNXB4IDAgNXB4O1xufVxuLnNlYXJjaC1ib3ggaW9uLXNlYXJjaGJhciB7XG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xufVxuLnNlYXJjaC1ib3ggaW9uLXNlYXJjaGJhciAuc2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNjU3OTE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uc2VhcmNoLWJveCBpb24tc2VhcmNoYmFyIC5zZWFyY2hiYXItaW5wdXQtY29udGFpbmVyIGlucHV0IHtcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYWRtaW4tbW9kYWwtY2xhc3MgLmlvbi1wYWdlIHtcbiAgbWFyZ2luOiA0MHB4IDAgMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnJlcXVpcmVkLWxhYmVsOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiKlwiO1xuICBjb2xvcjogcmVkO1xufVxuXG4ubWF0LW1pbmktZmFiIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1mb3JtLWNvbnRhaW5lciAuc2VydmljZS10ZXh0YXJlYSAudGV4dGFyZWEtd3JhcHBlciB0ZXh0YXJlYSB7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbmlvbi1jaGlwIHtcbiAgY29sb3I6ICMyNjU3OTEgIWltcG9ydGFudDtcbn1cblxuaW5wdXQsIHRleHRhcmVhLCBpb24tc2VsZWN0LCBpb24tZGF0ZXRpbWUge1xuICBjb2xvcjogIzY2NiAhaW1wb3J0YW50O1xufVxuXG4uc2VydmljZS1saXN0LWFjY29yZGlvbiB7XG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgI2QzZDNkMzdhO1xufVxuLnNlcnZpY2UtbGlzdC1hY2NvcmRpb24gLmV4cGFuc2lvbi1oZWFkZXIge1xuICBtYXJnaW46IDEwcHggMHB4O1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNCRDFFNTE7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLnNlcnZpY2UtbGlzdC1hY2NvcmRpb24gLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn0iLCIvLyBwcmV2aW91cyBUaGVtZVxuLy8kcHJpbWFyeS1jb2xvcjogI2U5NWM4Zjtcbi8vJHNlY29uZGFyeS1jb2xvcjogIzYxNGQ3ZjtcblxuLy8gTmV3IFRoZW1lXG4kcHJpbWFyeS1jb2xvcjogI0JEMUU1MTtcbiRzZWNvbmRhcnktY29sb3I6ICMyNjU3OTE7XG5cbiRyZWd1bGFyLWZvbnQtc2l6ZTogMTRweDtcbiRmb250LXNpemUtMTogMTZweDtcbiRoZWFkZXItc2l6ZTogMjBweDtcbiRmb250LXNpemUtMzogMzBweDtcblxuJGJ1dHRvbi1oZWlnaHQ6IDQ1cHg7XG5cbiJdfQ== */";
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
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/dist/esm/index.js");
    /* harmony import */


    var ng_connection_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng-connection-service */
    "./node_modules/ng-connection-service/fesm2015/ng-connection-service.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_components_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared-components/storage.service */
    "./src/app/shared-components/storage.service.ts");
    /* harmony import */


    var _shared_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared-service.service */
    "./src/app/shared-service.service.ts");
    /* harmony import */


    var _assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../assets/constants/app-constants */
    "./src/assets/constants/app-constants.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, router, storage, ConnectionServiceService, storageService, sharedService) {
        var _this4 = this;

        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.storage = storage;
        this.ConnectionServiceService = ConnectionServiceService;
        this.storageService = storageService;
        this.sharedService = sharedService;
        this.status = 'ONLINE';
        this.isConnected = true;
        this.initializeApp();
        this.storageService.getStoredValue(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_10__["appConstants"].ACCESS_TOKEN_KEY).then(function (token) {
          _this4.sharedService.onLoadToken.next(token);
        });
        this.ConnectionServiceService.monitor().subscribe(function (isConnected) {
          // debugger;
          _this4.isConnected = isConnected;

          if (_this4.isConnected.hasNetworkConnection) {
            _this4.status = "ONLINE";
          } else {
            _this4.status = "OFFLINE";
          }

          console.log(_this4.status, 'this.status');
        });
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this5 = this;

          this.platform.ready().then(function () {
            _this5.statusBar.styleDefault();

            _this5.splashScreen.hide();
          });
        }
      }, {
        key: "refreshPage",
        value: function refreshPage() {
          this.router.navigate(['']);
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
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }, {
        type: ng_connection_service__WEBPACK_IMPORTED_MODULE_6__["ConnectionService"]
      }, {
        type: _shared_components_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]
      }, {
        type: _shared_service_service__WEBPACK_IMPORTED_MODULE_9__["SharedServiceService"]
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], ng_connection_service__WEBPACK_IMPORTED_MODULE_6__["ConnectionService"], _shared_components_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"], _shared_service_service__WEBPACK_IMPORTED_MODULE_9__["SharedServiceService"]])], AppComponent);
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
    "./src/app/shared-components/logo-spinner/logo-spinner.module.ts");
    /* harmony import */


    var _shared_components_authentication_http_token_interceptor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./shared-components/authentication/http-token-interceptor.service */
    "./src/app/shared-components/authentication/http-token-interceptor.service.ts");
    /* harmony import */


    var _shared_components_authentication_auth_guards_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./shared-components/authentication/auth-guards.service */
    "./src/app/shared-components/authentication/auth-guards.service.ts");
    /* harmony import */


    var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic/storage-angular */
    "./node_modules/@ionic/storage-angular/fesm2015/ionic-storage-angular.js");
    /* harmony import */


    var _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./shared-components/header-component/header-component.module */
    "./src/app/shared-components/header-component/header-component.module.ts");
    /* harmony import */


    var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ngx-skeleton-loader */
    "./node_modules/ngx-skeleton-loader/fesm2015/ngx-skeleton-loader.js"); // import { IonicApp, IonicModule } from 'ionic-angular';
    // import { MatSlideToggleModule } from '@angular/material/slide-toggle';
    // import { MatMenuModule } from '@angular/material/menu';
    // import { MatSidenavModule } from '@angular/material/sidenav';
    // import { MatBadgeModule } from '@angular/material/badge';
    // import { DebounceClickDirective } from './shared-components/debounc-click.directive';
    // import {FormatTimePipe} from './shared-components/custom-pipes/count-down-pipe';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_17__["NgxSkeletonLoaderModule"], // IonicModule.forRoot({navAnimation: fancyAnimation}),
      // IonicModule.forRoot({navAnimation: customAnimation}),
      _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _shared_components_logo_spinner_logo_spinner_module__WEBPACK_IMPORTED_MODULE_12__["LogoSpinnerModule"], _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_15__["IonicStorageModule"].forRoot(), _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_16__["HeaderModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _shared_components_authentication_auth_guards_service__WEBPACK_IMPORTED_MODULE_14__["LoginGuard"], _shared_components_authentication_auth_guards_service__WEBPACK_IMPORTED_MODULE_14__["PreLogin"], _shared_components_authentication_auth_guards_service__WEBPACK_IMPORTED_MODULE_14__["AdminGuard"], _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_15__["Storage"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
        useClass: _shared_components_authentication_http_token_interceptor_service__WEBPACK_IMPORTED_MODULE_13__["HttpTokenInterceptorService"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/shared-components/authentication/auth-guards.service.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/shared-components/authentication/auth-guards.service.ts ***!
    \*************************************************************************/

  /*! exports provided: LoginGuard, PreLogin, AdminGuard */

  /***/
  function srcAppSharedComponentsAuthenticationAuthGuardsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginGuard", function () {
      return LoginGuard;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreLogin", function () {
      return PreLogin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminGuard", function () {
      return AdminGuard;
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


    var _shared_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared-service.service */
    "./src/app/shared-service.service.ts");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../storage.service */
    "./src/app/shared-components/storage.service.ts");
    /* harmony import */


    var _assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../assets/constants/app-constants */
    "./src/assets/constants/app-constants.ts");

    var LoginGuard = /*#__PURE__*/function () {
      function LoginGuard(storageService, apiService, router, sharedService) {
        _classCallCheck(this, LoginGuard);

        this.storageService = storageService;
        this.apiService = apiService;
        this.router = router;
        this.sharedService = sharedService;
      }

      _createClass(LoginGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var _this6 = this;

          return this.apiService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (val) {
            return val !== null;
          }), // Filter out initial Behaviour subject value
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), // Otherwise the Observable doesn't complete!
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (isAuthenticated) {
            if (isAuthenticated) {
              return true;
            } else {
              _this6.router.navigate(['/login']);

              return false;
            }
          }));
        }
      }]);

      return LoginGuard;
    }();

    LoginGuard.ctorParameters = function () {
      return [{
        type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _shared_service_service__WEBPACK_IMPORTED_MODULE_3__["SharedServiceService"]
      }];
    };

    LoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_service_service__WEBPACK_IMPORTED_MODULE_3__["SharedServiceService"]])], LoginGuard);

    var PreLogin = /*#__PURE__*/function () {
      function PreLogin(apiService, router, sharedService) {
        _classCallCheck(this, PreLogin);

        this.apiService = apiService;
        this.router = router;
        this.sharedService = sharedService;
      }

      _createClass(PreLogin, [{
        key: "canActivate",
        value: function canActivate() {
          var _this7 = this;

          return this.apiService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (val) {
            return val !== null;
          }), // Filter out initial Behaviour subject value
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), // Otherwise the Observable doesn't complete!
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (isAuthenticated) {
            if (isAuthenticated) {
              _this7.router.navigate(['/feed']);

              return false;
            } else {
              return true;
            }
          }));
        }
      }]);

      return PreLogin;
    }();

    PreLogin.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _shared_service_service__WEBPACK_IMPORTED_MODULE_3__["SharedServiceService"]
      }];
    };

    PreLogin = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_service_service__WEBPACK_IMPORTED_MODULE_3__["SharedServiceService"]])], PreLogin);

    var AdminGuard = /*#__PURE__*/function () {
      function AdminGuard(storageService, apiService, router, sharedService) {
        _classCallCheck(this, AdminGuard);

        this.storageService = storageService;
        this.apiService = apiService;
        this.router = router;
        this.sharedService = sharedService;
      }

      _createClass(AdminGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var _this8 = this;

          return this.apiService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (val) {
            return val !== null;
          }), // Filter out initial Behaviour subject value
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), // Otherwise the Observable doesn't complete!
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (isAuthenticated) {
            var userData = _this8.storageService.getStorageValue(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_7__["appConstants"].USER_INFO);

            if (isAuthenticated && userData.roleId.name === 'admin') {
              return true;
            } else {
              _this8.router.navigate(['/login']);

              return false;
            }
          }));
        }
      }]);

      return AdminGuard;
    }();

    AdminGuard.ctorParameters = function () {
      return [{
        type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _shared_service_service__WEBPACK_IMPORTED_MODULE_3__["SharedServiceService"]
      }];
    };

    AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_service_service__WEBPACK_IMPORTED_MODULE_3__["SharedServiceService"]])], AdminGuard);
    /***/
  },

  /***/
  "./src/app/shared-components/authentication/http-token-interceptor.service.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/shared-components/authentication/http-token-interceptor.service.ts ***!
    \************************************************************************************/

  /*! exports provided: HttpTokenInterceptorService */

  /***/
  function srcAppSharedComponentsAuthenticationHttpTokenInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpTokenInterceptorService", function () {
      return HttpTokenInterceptorService;
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
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _shared_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared-service.service */
    "./src/app/shared-service.service.ts");
    /* harmony import */


    var _storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../storage.service */
    "./src/app/shared-components/storage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../assets/constants/app-constants */
    "./src/assets/constants/app-constants.ts");

    var HttpTokenInterceptorService = /*#__PURE__*/function () {
      // tslint:disable-next-line:max-line-length
      function HttpTokenInterceptorService(router, storageService, sharedService, toastCtrl, apiService) {
        _classCallCheck(this, HttpTokenInterceptorService);

        this.router = router;
        this.storageService = storageService;
        this.sharedService = sharedService;
        this.toastCtrl = toastCtrl;
        this.apiService = apiService;
        this.tokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.isRefreshingToken = false;
      }

      _createClass(HttpTokenInterceptorService, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this9 = this;

          // Check if we need additional token logic or not
          if (this.isInBlockedList(request.url)) {
            return next.handle(request);
          } else {
            return next.handle(this.addToken(request)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
              if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                switch (err.status) {
                  case 400:
                    return _this9.handle400Errors(err);

                  case 401:
                    return _this9.handle401Error(request, next);

                  default:
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
                }
              } else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
              }
            }));
          }
        } // Filter out URLs where you don't want to add the token!

      }, {
        key: "isInBlockedList",
        value: function isInBlockedList(url) {
          // Example: Filter out our login and logout API call
          return url === "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseAuthUrl, "loginWithOtp") || url === "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseAuthUrl, "verifyOtp") || url === "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseAuthUrl, "logout");
        } // Add our current access token from the service if present

      }, {
        key: "addToken",
        value: function addToken(req) {
          if (this.apiService.currentAccessToken) {
            return req.clone({
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                Authorization: "Bearer ".concat(this.apiService.currentAccessToken)
              })
            });
          } else {
            return req;
          }
        } // We are not just authorized, we couldn't refresh token
        // or something else along the caching went wrong!

      }, {
        key: "handle400Errors",
        value: function handle400Errors(err) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.t0 = err.status;
                    _context3.next = _context3.t0 === 400 ? 3 : _context3.t0 === 404 ? 6 : 12;
                    break;

                  case 3:
                    this.sharedService.presentToast('Logged out due to authentication mismatch', 'error');
                    this.apiService.logout();
                    return _context3.abrupt("break", 12);

                  case 6:
                    this.apiService.isAuthenticated.next(false);
                    this.storageService.removeStoredItem(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_11__["appConstants"].REFRESH_TOKEN_KEY);
                    this.storageService.removeStoredItem(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_11__["appConstants"].ACCESS_TOKEN_KEY);
                    this.storageService.removeStoredItem(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_11__["appConstants"].USER_INFO);
                    this.router.navigate(['/login']);
                    return _context3.abrupt("break", 12);

                  case 12:
                    return _context3.abrupt("return", Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null));

                  case 13:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } // Indicates our access token is invalid, try to load a new one

      }, {
        key: "handle401Error",
        value: function handle401Error(request, next) {
          var _this10 = this;

          // Check if another call is already using the refresh logic
          if (!this.isRefreshingToken) {
            // Set to null so other requests will wait
            // until we got a new token!
            this.tokenSubject.next(null);
            this.isRefreshingToken = true;
            this.apiService.currentAccessToken = null; // First, get a new access token

            return this.apiService.getNewAccessToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (token) {
              if (token) {
                // Store the new token
                var accessToken = token.access.token;
                return _this10.apiService.storeAccessToken(accessToken).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (_) {
                  // Use the subject so other calls can continue with the new token
                  _this10.tokenSubject.next(accessToken); // Perform the initial request again with the new token


                  return next.handle(_this10.addToken(request));
                }));
              } else {
                // No new token or other problem occurred
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              // Unblock the token reload logic when everything is done
              _this10.isRefreshingToken = false;
            }));
          } else {
            // "Queue" other calls while we load a new token
            return this.tokenSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (token) {
              return token !== null;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (token) {
              // Perform the request again now that we got a new token!
              return next.handle(_this10.addToken(request));
            }));
          }
        }
      }]);

      return HttpTokenInterceptorService;
    }();

    HttpTokenInterceptorService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
      }, {
        type: _storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"]
      }, {
        type: _shared_service_service__WEBPACK_IMPORTED_MODULE_8__["SharedServiceService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }];
    };

    HttpTokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"], _shared_service_service__WEBPACK_IMPORTED_MODULE_8__["SharedServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"], _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])], HttpTokenInterceptorService);
    /***/
  },

  /***/
  "./src/app/shared-components/header-component/header-component.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/shared-components/header-component/header-component.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: HeaderModule */

  /***/
  function srcAppSharedComponentsHeaderComponentHeaderComponentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderModule", function () {
      return HeaderModule;
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


    var _header_component_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./header-component.page */
    "./src/app/shared-components/header-component/header-component.page.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var HeaderModule = function HeaderModule() {
      _classCallCheck(this, HeaderModule);
    };

    HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"]],
      exports: [_header_component_page__WEBPACK_IMPORTED_MODULE_5__["HeaderComponentPage"]],
      declarations: [_header_component_page__WEBPACK_IMPORTED_MODULE_5__["HeaderComponentPage"]]
    })], HeaderModule);
    /***/
  },

  /***/
  "./src/app/shared-components/header-component/header-component.page.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/shared-components/header-component/header-component.page.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsHeaderComponentHeaderComponentPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-container {\n  padding-bottom: 3px;\n  box-shadow: 0 3px 11px 0 #6c757d3d;\n}\n.header-container ion-header {\n  background: white;\n}\n.logo-container {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.1;\n}\n.logo-container .logo-text {\n  font-size: 25px;\n  font-weight: 700;\n}\n.logo-container .slogan-text {\n  font-size: 10px;\n  padding: 0 5px;\n}\n.profileIcon img {\n  width: 40px;\n  height: 40px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  overflow: hidden;\n  border-radius: 50%;\n  border: 2px solid #265791;\n  padding: 2px;\n}\n.header-back {\n  padding: 10px;\n  font-size: 30px;\n  color: #666;\n}\n.demo-section {\n  margin-right: 20px;\n  display: flex;\n  align-items: center;\n}\n.demo-section mat-icon {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9oZWFkZXItY29tcG9uZW50L2hlYWRlci1jb21wb25lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9oZWFkZXItY29tcG9uZW50L2hlYWRlci1jb21wb25lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUJBQUE7RUFDQSxrQ0FBQTtBQ0RGO0FERUU7RUFDRSxpQkFBQTtBQ0FKO0FER0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0FGO0FEQ0U7RUFDRSxlQUFBO0VBQWlCLGdCQUFBO0FDRXJCO0FEQUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0VKO0FER0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDQUo7QURJQTtFQUNFLGFBQUE7RUFBZSxlQUFBO0VBQWlCLFdBQUE7QUNDbEM7QURFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURBRTtFQUNFLGVBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL2hlYWRlci1jb21wb25lbnQvaGVhZGVyLWNvbXBvbmVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2FuZGh5YWRlZXAtdGhlbWVcIjtcblxuLmhlYWRlci1jb250YWluZXIge1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBib3gtc2hhZG93OiAwIDNweCAxMXB4IDAgIzZjNzU3ZDNkO1xuICBpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgfVxufVxuLmxvZ28tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgLmxvZ28tdGV4dCB7XG4gICAgZm9udC1zaXplOiAyNXB4OyBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIC5zbG9nYW4tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHBhZGRpbmc6IDAgNXB4O1xuICB9XG59XG5cbi5wcm9maWxlSWNvbiB7XG4gIGltZyB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XG4gICAgcGFkZGluZzogMnB4O1xuICB9XG59XG5cbi5oZWFkZXItYmFjayB7XG4gIHBhZGRpbmc6IDEwcHg7IGZvbnQtc2l6ZTogMzBweDsgY29sb3I6ICM2NjY7XG59XG5cbi5kZW1vLXNlY3Rpb24ge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hdC1pY29uIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cbn1cblxuIiwiLmhlYWRlci1jb250YWluZXIge1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBib3gtc2hhZG93OiAwIDNweCAxMXB4IDAgIzZjNzU3ZDNkO1xufVxuLmhlYWRlci1jb250YWluZXIgaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4ubG9nby1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBsaW5lLWhlaWdodDogMS4xO1xufVxuLmxvZ28tY29udGFpbmVyIC5sb2dvLXRleHQge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4ubG9nby1jb250YWluZXIgLnNsb2dhbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiAwIDVweDtcbn1cblxuLnByb2ZpbGVJY29uIGltZyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyNjU3OTE7XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuLmhlYWRlci1iYWNrIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzY2Njtcbn1cblxuLmRlbW8tc2VjdGlvbiB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5kZW1vLXNlY3Rpb24gbWF0LWljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared-components/header-component/header-component.page.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/shared-components/header-component/header-component.page.ts ***!
    \*****************************************************************************/

  /*! exports provided: HeaderComponentPage */

  /***/
  function srcAppSharedComponentsHeaderComponentHeaderComponentPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponentPage", function () {
      return HeaderComponentPage;
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
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../storage.service */
    "./src/app/shared-components/storage.service.ts");
    /* harmony import */


    var _assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../assets/constants/app-constants */
    "./src/assets/constants/app-constants.ts");

    var HeaderComponentPage = /*#__PURE__*/function () {
      function HeaderComponentPage(storageService, router, navCtrl, sharedService, location) {
        _classCallCheck(this, HeaderComponentPage);

        this.storageService = storageService;
        this.router = router;
        this.navCtrl = navCtrl;
        this.sharedService = sharedService;
        this.location = location;
        this.hideProfileIcon = false;
        this.previousUrl = '';
        this.searchTerm = '';
        this.showSearchBox = false;
        this.showBackIcon = false;
        this.cartDetails = [];
      }

      _createClass(HeaderComponentPage, [{
        key: "setFilteredItems",
        value: function setFilteredItems(event) {
          console.log(event);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.sharedService.onSettingEvent.subscribe(function (res) {
            _this11.hideProfileIcon = res;
          });
          this.sharedService.showSearchBox.subscribe(function (res) {
            _this11.showSearchBox = res;
            _this11.showBackIcon = res;
          });
          this.sharedService.showBackIcon.subscribe(function (res) {
            _this11.showBackIcon = res;
          });
          this.storageService.getStoredValue(_assets_constants_app_constants__WEBPACK_IMPORTED_MODULE_7__["appConstants"].SELECTED_SERVICES).then(function (val) {
            _this11.cartDetails = val;
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this12 = this;

          this.sharedService.updateCart.subscribe(function (res) {
            _this12.cartDetails = res;
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this13 = this;

          this.sharedService.onSettingEvent.subscribe(function (res) {
            _this13.hideProfileIcon = res;
          });
          this.sharedService.showSearchBox.subscribe(function (res) {
            _this13.showSearchBox = res;
            _this13.hideProfileIcon = !res;
          });
        }
      }, {
        key: "backClicked",
        value: function backClicked() {
          if (this.router.url === '/feed') {
            this.router.navigate(['admin-panel']);
            return;
          }

          this.navCtrl.back();
        }
      }]);

      return HeaderComponentPage;
    }();

    HeaderComponentPage.ctorParameters = function () {
      return [{
        type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _shared_service_service__WEBPACK_IMPORTED_MODULE_2__["SharedServiceService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], HeaderComponentPage.prototype, "showBackIcon", void 0);
    HeaderComponentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sandhyadeep-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header-component.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/header-component/header-component.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header-component.page.scss */
      "./src/app/shared-components/header-component/header-component.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _shared_service_service__WEBPACK_IMPORTED_MODULE_2__["SharedServiceService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])], HeaderComponentPage);
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


    __webpack_exports__["default"] = "/* KEYFRAMES */\n@-webkit-keyframes spin {\n  from {\n    transform: rotate(0);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n@keyframes spin {\n  from {\n    transform: rotate(0);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n@-webkit-keyframes spin3D {\n  from {\n    transform: rotate3d(0.5, 0.5, 0.5, 360deg);\n  }\n  to {\n    transform: rotate3d(0deg);\n  }\n}\n@keyframes spin3D {\n  from {\n    transform: rotate3d(0.5, 0.5, 0.5, 360deg);\n  }\n  to {\n    transform: rotate3d(0deg);\n  }\n}\n@-webkit-keyframes configure-clockwise {\n  0% {\n    transform: rotate(0);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes configure-clockwise {\n  0% {\n    transform: rotate(0);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes configure-xclockwise {\n  0% {\n    transform: rotate(45deg);\n  }\n  25% {\n    transform: rotate(-45deg);\n  }\n  50% {\n    transform: rotate(-135deg);\n  }\n  75% {\n    transform: rotate(-225deg);\n  }\n  100% {\n    transform: rotate(-315deg);\n  }\n}\n@keyframes configure-xclockwise {\n  0% {\n    transform: rotate(45deg);\n  }\n  25% {\n    transform: rotate(-45deg);\n  }\n  50% {\n    transform: rotate(-135deg);\n  }\n  75% {\n    transform: rotate(-225deg);\n  }\n  100% {\n    transform: rotate(-315deg);\n  }\n}\n@-webkit-keyframes pulse {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: 0.25;\n    transform: scale(0.75);\n  }\n}\n@keyframes pulse {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: 0.25;\n    transform: scale(0.75);\n  }\n}\n/* GRID STYLING */\n* {\n  box-sizing: border-box;\n}\nbody {\n  min-height: 100vh;\n  background-color: white;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}\n.spinner-box {\n  width: 300px;\n  height: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent;\n}\n/* SPINNING CIRCLE */\n.leo-border-1 {\n  position: absolute;\n  width: 110px;\n  height: 110px;\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: #3ff9dc;\n  background: linear-gradient(0deg, rgba(63, 249, 220, 0.1) 33%, #3ff9dc 100%);\n  -webkit-animation: spin3D 1.8s linear 0s infinite;\n          animation: spin3D 1.8s linear 0s infinite;\n}\n.leo-core-1 {\n  width: 100%;\n  height: 100%;\n  background-color: #37474faa;\n  border-radius: 50%;\n}\n.leo-border-2 {\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: #fb5b53;\n  background: linear-gradient(0deg, rgba(251, 91, 83, 0.1) 33%, #fb5b53 100%);\n  -webkit-animation: spin3D 2.2s linear 0s infinite;\n          animation: spin3D 2.2s linear 0s infinite;\n}\n.leo-core-2 {\n  width: 100%;\n  height: 100%;\n  background-color: whiteaa;\n  border-radius: 50%;\n}\n/* ALTERNATING ORBITS */\n.circle-border {\n  width: 110px;\n  height: 110px;\n  padding: 2px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: #BD1E51;\n  background: linear-gradient(0deg, #265791 33%, #BD1E51 100%);\n  -webkit-animation: spin 0.8s linear 0s infinite;\n          animation: spin 0.8s linear 0s infinite;\n}\n.circle-core {\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  border-radius: 50%;\n}\n/* X-ROTATING BOXES */\n.configure-border-1 {\n  width: 115px;\n  height: 115px;\n  padding: 3px;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fb5b53;\n  -webkit-animation: configure-clockwise 3s ease-in-out 0s infinite alternate;\n          animation: configure-clockwise 3s ease-in-out 0s infinite alternate;\n}\n.configure-border-2 {\n  width: 115px;\n  height: 115px;\n  padding: 3px;\n  left: -115px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #3ff9dc;\n  transform: rotate(45deg);\n  -webkit-animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;\n          animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;\n}\n.configure-core {\n  width: 100%;\n  height: 100%;\n  background-color: white;\n}\n/* PULSE BUBBLES */\n.pulse-container {\n  width: 120px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.pulse-bubble {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #3ff9dc;\n}\n.pulse-bubble-1 {\n  -webkit-animation: pulse 0.4s ease 0s infinite alternate;\n          animation: pulse 0.4s ease 0s infinite alternate;\n}\n.pulse-bubble-2 {\n  -webkit-animation: pulse 0.4s ease 0.2s infinite alternate;\n          animation: pulse 0.4s ease 0.2s infinite alternate;\n}\n.pulse-bubble-3 {\n  -webkit-animation: pulse 0.4s ease 0.4s infinite alternate;\n          animation: pulse 0.4s ease 0.4s infinite alternate;\n}\n/* SOLAR SYSTEM */\n.solar-system {\n  width: 250px;\n  height: 250px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.orbit {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #fafbfC;\n  border-radius: 50%;\n}\n.earth-orbit {\n  width: 165px;\n  height: 165px;\n  -webkit-animation: spin 12s linear 0s infinite;\n}\n.venus-orbit {\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 7.4s linear 0s infinite;\n}\n.mercury-orbit {\n  width: 90px;\n  height: 90px;\n  -webkit-animation: spin 3s linear 0s infinite;\n}\n.planet {\n  position: absolute;\n  top: -5px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: #3ff9dc;\n}\n.sun {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  background-color: #ffab91;\n}\n.leo {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n}\n.blue-orbit {\n  width: 165px;\n  height: 165px;\n  border: 1px solid #91daffa5;\n  -webkit-animation: spin3D 3s linear 0.2s infinite;\n}\n.green-orbit {\n  width: 120px;\n  height: 120px;\n  border: 1px solid #91ffbfa5;\n  -webkit-animation: spin3D 2s linear 0s infinite;\n}\n.red-orbit {\n  width: 90px;\n  height: 90px;\n  border: 1px solid #ffca91a5;\n  -webkit-animation: spin3D 1s linear 0s infinite;\n}\n.white-orbit {\n  width: 60px;\n  height: 60px;\n  border: 2px solid #ffffff;\n  -webkit-animation: spin3D 10s linear 0s infinite;\n}\n.w1 {\n  transform: rotate3D(1, 1, 1, 90deg);\n}\n.w2 {\n  transform: rotate3D(1, 2, 0.5, 90deg);\n}\n.w3 {\n  transform: rotate3D(0.5, 1, 2, 90deg);\n}\n.three-quarter-spinner {\n  width: 50px;\n  height: 50px;\n  border: 3px solid #fb5b53;\n  border-top: 3px solid transparent;\n  border-radius: 50%;\n  -webkit-animation: spin 0.5s linear 0s infinite;\n          animation: spin 0.5s linear 0s infinite;\n}\n.sandhyadeep-title-spinner {\n  font-size: 13px;\n  color: #265791;\n  z-index: 999;\n  font-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9sb2dvLXNwaW5uZXIvbG9nby1zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9sb2dvLXNwaW5uZXIvbG9nby1zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2Fhc2hpc2hiaGFnd2F0L0RvY3VtZW50cy9zYW5kaHlhZGVlcC11aS9zYW5kaHlhZGVlcC1iZWF1dHktcGFybG91ci9zcmMvc2FuZGh5YWRlZXAtdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxjQUFBO0FBRUE7RUFDRTtJQUNFLG9CQUFBO0VDRkY7RURJQTtJQUNFLHlCQUFBO0VDRkY7QUFDRjtBREpBO0VBQ0U7SUFDRSxvQkFBQTtFQ0ZGO0VESUE7SUFDRSx5QkFBQTtFQ0ZGO0FBQ0Y7QURLQTtFQUNFO0lBQ0UsMENBQUE7RUNIRjtFREtBO0lBQ0UseUJBQUE7RUNIRjtBQUNGO0FESEE7RUFDRTtJQUNFLDBDQUFBO0VDSEY7RURLQTtJQUNFLHlCQUFBO0VDSEY7QUFDRjtBRE1BO0VBQ0U7SUFDRSxvQkFBQTtFQ0pGO0VETUE7SUFDRSx3QkFBQTtFQ0pGO0VETUE7SUFDRSx5QkFBQTtFQ0pGO0VETUE7SUFDRSx5QkFBQTtFQ0pGO0VETUE7SUFDRSx5QkFBQTtFQ0pGO0FBQ0Y7QURYQTtFQUNFO0lBQ0Usb0JBQUE7RUNKRjtFRE1BO0lBQ0Usd0JBQUE7RUNKRjtFRE1BO0lBQ0UseUJBQUE7RUNKRjtFRE1BO0lBQ0UseUJBQUE7RUNKRjtFRE1BO0lBQ0UseUJBQUE7RUNKRjtBQUNGO0FET0E7RUFDRTtJQUNFLHdCQUFBO0VDTEY7RURPQTtJQUNFLHlCQUFBO0VDTEY7RURPQTtJQUNFLDBCQUFBO0VDTEY7RURPQTtJQUNFLDBCQUFBO0VDTEY7RURPQTtJQUNFLDBCQUFBO0VDTEY7QUFDRjtBRFZBO0VBQ0U7SUFDRSx3QkFBQTtFQ0xGO0VET0E7SUFDRSx5QkFBQTtFQ0xGO0VET0E7SUFDRSwwQkFBQTtFQ0xGO0VET0E7SUFDRSwwQkFBQTtFQ0xGO0VET0E7SUFDRSwwQkFBQTtFQ0xGO0FBQ0Y7QURRQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLG1CQUFBO0VDTkY7RURRQTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtFQ05GO0FBQ0Y7QURGQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLG1CQUFBO0VDTkY7RURRQTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtFQ05GO0FBQ0Y7QURTQSxpQkFBQTtBQUVBO0VBQ0Usc0JBQUE7QUNSRjtBRFdBO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ1JGO0FEV0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUNSRjtBRFdBLG9CQUFBO0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRFQUFBO0VBQ0EsaURBQUE7VUFBQSx5Q0FBQTtBQ1RGO0FEWUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNURjtBRFlBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyRUFBQTtFQUNBLGlEQUFBO1VBQUEseUNBQUE7QUNURjtBRFlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDVEY7QURZQSx1QkFBQTtBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CRTlJYztFRitJZCw0REFBQTtFQUNBLCtDQUFBO1VBQUEsdUNBQUE7QUNWRjtBRGFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSx1QkFBQTtFQUNBLGtCQUFBO0FDWEY7QURjQSxxQkFBQTtBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkVBQUE7VUFBQSxtRUFBQTtBQ1pGO0FEZUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEVBQUE7VUFBQSxvRUFBQTtBQ1pGO0FEZUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDWkY7QURlQSxrQkFBQTtBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDYkY7QURnQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNiRjtBRGdCQTtFQUNFLHdEQUFBO1VBQUEsZ0RBQUE7QUNiRjtBRGdCQTtFQUNFLDBEQUFBO1VBQUEsa0RBQUE7QUNiRjtBRGdCQTtFQUNFLDBEQUFBO1VBQUEsa0RBQUE7QUNiRjtBRGdCQSxpQkFBQTtBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ2RGO0FEaUJBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNkRjtBRGlCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOENBQUE7QUNkRjtBRGlCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsK0NBQUE7QUNkRjtBRGlCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7QUNkRjtBRGlCQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ2RGO0FEaUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDZEY7QURpQkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNkRjtBRGlCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxpREFBQTtBQ2RGO0FEaUJBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLCtDQUFBO0FDZEY7QURpQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsK0NBQUE7QUNkRjtBRGlCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnREFBQTtBQ2RGO0FEaUJBO0VBQ0UsbUNBQUE7QUNkRjtBRGlCQTtFQUNFLHFDQUFBO0FDZEY7QURpQkE7RUFDRSxxQ0FBQTtBQ2RGO0FEaUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtVQUFBLHVDQUFBO0FDZEY7QURpQkE7RUFDRSxlQUFBO0VBQWlCLGNFdFVEO0VGc1UwQixZQUFBO0VBQWMsZ0JBQUE7QUNYMUQiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9sb2dvLXNwaW5uZXIvbG9nby1zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3NhbmRoeWFkZWVwLXRoZW1lXCI7XG5cbi8qIEtFWUZSQU1FUyAqL1xuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW4zRCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoLjUsIC41LCAuNSwgMzYwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGNvbmZpZ3VyZS1jbG9ja3dpc2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB9XG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgY29uZmlndXJlLXhjbG9ja3dpc2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB9XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICB9XG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTIyNWRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTMxNWRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogLjI1O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjc1KTtcbiAgfVxufVxuXG4vKiBHUklEIFNUWUxJTkcgKi9cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLnNwaW5uZXItYm94IHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8qIFNQSU5OSU5HIENJUkNMRSAqL1xuXG4ubGVvLWJvcmRlci0xIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogMTEwcHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmdiKDYzLCAyNDksIDIyMCk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDYzLCAyNDksIDIyMCwgMC4xKSAzMyUsIHJnYmEoNjMsIDI0OSwgMjIwLCAxKSAxMDAlKTtcbiAgYW5pbWF0aW9uOiBzcGluM0QgMS44cyBsaW5lYXIgMHMgaW5maW5pdGU7XG59XG5cbi5sZW8tY29yZS0xIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NDc0ZmFhO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5sZW8tYm9yZGVyLTIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcGFkZGluZzogM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjUxLCA5MSwgODMpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTEsIDkxLCA4MywgMC4xKSAzMyUsIHJnYmEoMjUxLCA5MSwgODMsIDEpIDEwMCUpO1xuICBhbmltYXRpb246IHNwaW4zRCAyLjJzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLmxlby1jb3JlLTIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZWFhO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIEFMVEVSTkFUSU5HIE9SQklUUyAqL1xuXG4uY2lyY2xlLWJvcmRlciB7XG4gIHdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgcGFkZGluZzogMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICRzZWNvbmRhcnktY29sb3IgMzMlLCAkcHJpbWFyeS1jb2xvciAxMDAlKTtcbiAgYW5pbWF0aW9uOiBzcGluIC44cyBsaW5lYXIgMHMgaW5maW5pdGU7XG59XG5cbi5jaXJjbGUtY29yZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8vYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIFgtUk9UQVRJTkcgQk9YRVMgKi9cblxuLmNvbmZpZ3VyZS1ib3JkZXItMSB7XG4gIHdpZHRoOiAxMTVweDtcbiAgaGVpZ2h0OiAxMTVweDtcbiAgcGFkZGluZzogM3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmI1YjUzO1xuICBhbmltYXRpb246IGNvbmZpZ3VyZS1jbG9ja3dpc2UgM3MgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4uY29uZmlndXJlLWJvcmRlci0yIHtcbiAgd2lkdGg6IDExNXB4O1xuICBoZWlnaHQ6IDExNXB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIGxlZnQ6IC0xMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYig2MywgMjQ5LCAyMjApO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGFuaW1hdGlvbjogY29uZmlndXJlLXhjbG9ja3dpc2UgM3MgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4uY29uZmlndXJlLWNvcmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLyogUFVMU0UgQlVCQkxFUyAqL1xuXG4ucHVsc2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wdWxzZS1idWJibGUge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZmY5ZGM7XG59XG5cbi5wdWxzZS1idWJibGUtMSB7XG4gIGFuaW1hdGlvbjogcHVsc2UgLjRzIGVhc2UgMHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4ucHVsc2UtYnViYmxlLTIge1xuICBhbmltYXRpb246IHB1bHNlIC40cyBlYXNlIC4ycyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi5wdWxzZS1idWJibGUtMyB7XG4gIGFuaW1hdGlvbjogcHVsc2UgLjRzIGVhc2UgLjRzIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuLyogU09MQVIgU1lTVEVNICovXG5cbi5zb2xhci1zeXN0ZW0ge1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ub3JiaXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmFmYmZDO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5lYXJ0aC1vcmJpdCB7XG4gIHdpZHRoOiAxNjVweDtcbiAgaGVpZ2h0OiAxNjVweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMTJzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLnZlbnVzLW9yYml0IHtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiA3LjRzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLm1lcmN1cnktb3JiaXQge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAzcyBsaW5lYXIgMHMgaW5maW5pdGU7XG59XG5cbi5wbGFuZXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTVweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZmOWRjO1xufVxuXG4uc3VuIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhYjkxO1xufVxuXG4ubGVvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uYmx1ZS1vcmJpdCB7XG4gIHdpZHRoOiAxNjVweDtcbiAgaGVpZ2h0OiAxNjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzkxZGFmZmE1O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbjNEIDNzIGxpbmVhciAuMnMgaW5maW5pdGU7XG59XG5cbi5ncmVlbi1vcmJpdCB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzkxZmZiZmE1O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbjNEIDJzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLnJlZC1vcmJpdCB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmNhOTFhNTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4zRCAxcyBsaW5lYXIgMHMgaW5maW5pdGU7XG59XG5cbi53aGl0ZS1vcmJpdCB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluM0QgMTBzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLncxIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUzRCgxLCAxLCAxLCA5MGRlZyk7XG59XG5cbi53MiB7XG4gIHRyYW5zZm9ybTogcm90YXRlM0QoMSwgMiwgLjUsIDkwZGVnKTtcbn1cblxuLnczIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUzRCguNSwgMSwgMiwgOTBkZWcpO1xufVxuXG4udGhyZWUtcXVhcnRlci1zcGlubmVyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgI2ZiNWI1MztcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogc3BpbiAuNXMgbGluZWFyIDBzIGluZmluaXRlO1xufVxuXG4uc2FuZGh5YWRlZXAtdGl0bGUtc3Bpbm5lciB7XG4gIGZvbnQtc2l6ZTogMTNweDsgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7IHotaW5kZXg6IDk5OTsgZm9udC13ZWlnaHQ6IDkwMFxufVxuIiwiLyogS0VZRlJBTUVTICovXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzcGluM0Qge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAuNSwgMC41LCAwLjUsIDM2MGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgY29uZmlndXJlLWNsb2Nrd2lzZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICAyNSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgY29uZmlndXJlLXhjbG9ja3dpc2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB9XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICB9XG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTIyNWRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTMxNWRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDAuMjU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcbiAgfVxufVxuLyogR1JJRCBTVFlMSU5HICovXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uc3Bpbm5lci1ib3gge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLyogU1BJTk5JTkcgQ0lSQ0xFICovXG4ubGVvLWJvcmRlci0xIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogMTEwcHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzNmZjlkYztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoNjMsIDI0OSwgMjIwLCAwLjEpIDMzJSwgIzNmZjlkYyAxMDAlKTtcbiAgYW5pbWF0aW9uOiBzcGluM0QgMS44cyBsaW5lYXIgMHMgaW5maW5pdGU7XG59XG5cbi5sZW8tY29yZS0xIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NDc0ZmFhO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5sZW8tYm9yZGVyLTIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcGFkZGluZzogM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmI1YjUzO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTEsIDkxLCA4MywgMC4xKSAzMyUsICNmYjViNTMgMTAwJSk7XG4gIGFuaW1hdGlvbjogc3BpbjNEIDIuMnMgbGluZWFyIDBzIGluZmluaXRlO1xufVxuXG4ubGVvLWNvcmUtMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlYWE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLyogQUxURVJOQVRJTkcgT1JCSVRTICovXG4uY2lyY2xlLWJvcmRlciB7XG4gIHdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgcGFkZGluZzogMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjQkQxRTUxO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzI2NTc5MSAzMyUsICNCRDFFNTEgMTAwJSk7XG4gIGFuaW1hdGlvbjogc3BpbiAwLjhzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLmNpcmNsZS1jb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLyogWC1ST1RBVElORyBCT1hFUyAqL1xuLmNvbmZpZ3VyZS1ib3JkZXItMSB7XG4gIHdpZHRoOiAxMTVweDtcbiAgaGVpZ2h0OiAxMTVweDtcbiAgcGFkZGluZzogM3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmI1YjUzO1xuICBhbmltYXRpb246IGNvbmZpZ3VyZS1jbG9ja3dpc2UgM3MgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4uY29uZmlndXJlLWJvcmRlci0yIHtcbiAgd2lkdGg6IDExNXB4O1xuICBoZWlnaHQ6IDExNXB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIGxlZnQ6IC0xMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMzZmY5ZGM7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgYW5pbWF0aW9uOiBjb25maWd1cmUteGNsb2Nrd2lzZSAzcyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi5jb25maWd1cmUtY29yZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4vKiBQVUxTRSBCVUJCTEVTICovXG4ucHVsc2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wdWxzZS1idWJibGUge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZmY5ZGM7XG59XG5cbi5wdWxzZS1idWJibGUtMSB7XG4gIGFuaW1hdGlvbjogcHVsc2UgMC40cyBlYXNlIDBzIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuLnB1bHNlLWJ1YmJsZS0yIHtcbiAgYW5pbWF0aW9uOiBwdWxzZSAwLjRzIGVhc2UgMC4ycyBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi5wdWxzZS1idWJibGUtMyB7XG4gIGFuaW1hdGlvbjogcHVsc2UgMC40cyBlYXNlIDAuNHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4vKiBTT0xBUiBTWVNURU0gKi9cbi5zb2xhci1zeXN0ZW0ge1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ub3JiaXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmFmYmZDO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5lYXJ0aC1vcmJpdCB7XG4gIHdpZHRoOiAxNjVweDtcbiAgaGVpZ2h0OiAxNjVweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMTJzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLnZlbnVzLW9yYml0IHtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiA3LjRzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLm1lcmN1cnktb3JiaXQge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAzcyBsaW5lYXIgMHMgaW5maW5pdGU7XG59XG5cbi5wbGFuZXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTVweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZmOWRjO1xufVxuXG4uc3VuIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhYjkxO1xufVxuXG4ubGVvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uYmx1ZS1vcmJpdCB7XG4gIHdpZHRoOiAxNjVweDtcbiAgaGVpZ2h0OiAxNjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzkxZGFmZmE1O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbjNEIDNzIGxpbmVhciAwLjJzIGluZmluaXRlO1xufVxuXG4uZ3JlZW4tb3JiaXQge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MWZmYmZhNTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4zRCAycyBsaW5lYXIgMHMgaW5maW5pdGU7XG59XG5cbi5yZWQtb3JiaXQge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZjYTkxYTU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluM0QgMXMgbGluZWFyIDBzIGluZmluaXRlO1xufVxuXG4ud2hpdGUtb3JiaXQge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbjNEIDEwcyBsaW5lYXIgMHMgaW5maW5pdGU7XG59XG5cbi53MSB7XG4gIHRyYW5zZm9ybTogcm90YXRlM0QoMSwgMSwgMSwgOTBkZWcpO1xufVxuXG4udzIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZTNEKDEsIDIsIDAuNSwgOTBkZWcpO1xufVxuXG4udzMge1xuICB0cmFuc2Zvcm06IHJvdGF0ZTNEKDAuNSwgMSwgMiwgOTBkZWcpO1xufVxuXG4udGhyZWUtcXVhcnRlci1zcGlubmVyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgI2ZiNWI1MztcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogc3BpbiAwLjVzIGxpbmVhciAwcyBpbmZpbml0ZTtcbn1cblxuLnNhbmRoeWFkZWVwLXRpdGxlLXNwaW5uZXIge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjMjY1NzkxO1xuICB6LWluZGV4OiA5OTk7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59IiwiLy8gcHJldmlvdXMgVGhlbWVcbi8vJHByaW1hcnktY29sb3I6ICNlOTVjOGY7XG4vLyRzZWNvbmRhcnktY29sb3I6ICM2MTRkN2Y7XG5cbi8vIE5ldyBUaGVtZVxuJHByaW1hcnktY29sb3I6ICNCRDFFNTE7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjMjY1NzkxO1xuXG4kcmVndWxhci1mb250LXNpemU6IDE0cHg7XG4kZm9udC1zaXplLTE6IDE2cHg7XG4kaGVhZGVyLXNpemU6IDIwcHg7XG4kZm9udC1zaXplLTM6IDMwcHg7XG5cbiRidXR0b24taGVpZ2h0OiA0NXB4O1xuXG4iXX0= */";
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
  "./src/app/shared-components/storage.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared-components/storage.service.ts ***!
    \******************************************************/

  /*! exports provided: StorageService */

  /***/
  function srcAppSharedComponentsStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageService", function () {
      return StorageService;
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


    var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage-angular */
    "./node_modules/@ionic/storage-angular/fesm2015/ionic-storage-angular.js");

    var StorageService = /*#__PURE__*/function () {
      function StorageService(storage) {
        _classCallCheck(this, StorageService);

        this.storage = storage;
      }

      _createClass(StorageService, [{
        key: "storeValue",
        value: function storeValue(storageKey, value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var encryptedValue;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    encryptedValue = btoa(escape(JSON.stringify(value)));
                    localStorage.setItem(storageKey, encryptedValue);

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));
        }
      }, {
        key: "getStoredValue",
        value: function getStoredValue(storageKey) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    return _context5.abrupt("return", new Promise(function (resolve) {
                      var value = localStorage.getItem(storageKey);

                      if (value) {
                        resolve(JSON.parse(unescape(atob(value))));
                      } else {
                        resolve(false);
                      }
                    }));

                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }));
        }
      }, {
        key: "removeStoredItem",
        value: function removeStoredItem(storageKey) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    localStorage.removeItem(storageKey);

                  case 1:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6);
          }));
        }
      }, {
        key: "getStorageValue",
        value: function getStorageValue(storageKey) {
          var storedVal = localStorage.getItem(storageKey);
          return storedVal ? JSON.parse(unescape(atob(storedVal))) : null;
        }
      }]);

      return StorageService;
    }();

    StorageService.ctorParameters = function () {
      return [{
        type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }];
    };

    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__["Storage"]])], StorageService);
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
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var SharedServiceService = /*#__PURE__*/function () {
      function SharedServiceService(toastController) {
        _classCallCheck(this, SharedServiceService);

        this.toastController = toastController;
        this.onSettingEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.showSearchBox = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.showBackIcon = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.showSpinner = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.selectedProduct = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.showSkeletonSpinner = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.updateCart = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.onLoadToken = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.updateServiceTotal = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.selectedServicesCount = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
      }

      _createClass(SharedServiceService, [{
        key: "presentToast",
        value: function presentToast(displayMessage, status) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var toast;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.toastController.create({
                      message: displayMessage,
                      position: 'top',
                      cssClass: "ionic-".concat(status, "-toast"),
                      duration: 2000
                    });

                  case 2:
                    toast = _context7.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem('token');
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          var token = this.getToken();
          return !!(token && token.length > 0);
        }
      }, {
        key: "getApiKey",
        value: function getApiKey() {
          var apiKey = 'fYsd4AW5pKz9_uV';
          return apiKey;
        }
      }, {
        key: "setToken",
        value: function setToken(token) {
          localStorage.setItem('token', token);
        }
      }, {
        key: "removeAllUserDetails",
        value: function removeAllUserDetails() {
          localStorage.removeItem('userId');
          localStorage.removeItem('token');
          localStorage.removeItem('userName');
        }
      }, {
        key: "setUserId",
        value: function setUserId(userId) {
          localStorage.setItem('userId', userId);
        }
      }, {
        key: "setUserName",
        value: function setUserName(userName) {
          localStorage.setItem('userName', userName);
        }
      }, {
        key: "getRole",
        value: function getRole() {
          return localStorage.getItem('role');
        }
      }, {
        key: "getUserName",
        value: function getUserName() {
          return localStorage.getItem('userName');
        }
      }, {
        key: "getUserId",
        value: function getUserId() {
          return localStorage.getItem('userId');
        }
      }, {
        key: "getFranchiseId",
        value: function getFranchiseId() {
          return localStorage.getItem('franchiseId');
        }
      }, {
        key: "isFranchise",
        value: function isFranchise() {
          return this.getRole() === 'franchise';
        }
      }]);

      return SharedServiceService;
    }();

    SharedServiceService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }];
    };

    SharedServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])], SharedServiceService);
    /***/
  },

  /***/
  "./src/assets/constants/app-constants.ts":
  /*!***********************************************!*\
    !*** ./src/assets/constants/app-constants.ts ***!
    \***********************************************/

  /*! exports provided: appConstants */

  /***/
  function srcAssetsConstantsAppConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appConstants", function () {
      return appConstants;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var appConstants = {
      ACCESS_TOKEN_KEY: 'my-access-token',
      REFRESH_TOKEN_KEY: 'my-refresh-token',
      USER_INFO: 'user-info',
      SELECTED_SERVICES: 'selected-services'
    };
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
      // baseAuthUrl: 'https://sandhyadeep-beauty-parlour-api.onrender.com/v1/auth/',
      // baseURLAdminAPIs: 'https://sandhyadeep-beauty-parlour-api.onrender.com/v1/',
      // domainUrlApi: 'https://sandhyadeep-beauty-parlour-api.onrender.com/',
      // sandhyadeep-production
      baseAuthUrl: 'https://www.sandhyadeep.in/api/v1/auth/',
      baseURLAdminAPIs: 'https://www.sandhyadeep.in/api/v1/',
      domainUrlApi: 'https://www.sandhyadeep.in/api/'
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
    /*! /Users/aashishbhagwat/Documents/sandhyadeep-ui/sandhyadeep-beauty-parlour/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map