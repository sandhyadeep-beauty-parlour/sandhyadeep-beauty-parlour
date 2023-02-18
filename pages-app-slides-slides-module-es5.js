function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-app-slides-slides-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app-slides/slides.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app-slides/slides.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAppSlidesSlidesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n  <ion-slide *ngFor=\"let slide of slides\">\r\n    <ion-toolbar>\r\n      <div>\r\n        <ion-button class=\"ion-float-right\" fill=\"clear\" (click)=\"onSlideSubmit()\" [color]=\"'primary'\">Skip</ion-button>\r\n      </div>\r\n    </ion-toolbar>\r\n    <div class=\"ion-slides-container\">\r\n      <img style=\"height: 300px\" *ngIf=\"slide.svg === 'img-1'\" src=\"/assets/slide-image-final-1.png\" alt=\"\">\r\n      <img style=\"height: 300px\" *ngIf=\"slide.svg === 'img-2'\" src=\"/assets/slide-image-final-2.png\" alt=\"\">\r\n    </div>\r\n    <div style=\"padding: 0 20px\">\r\n      <h2 class=\"slide-title\" [innerHTML]=\"slide.title\"></h2>\r\n      <p [innerHTML]=\"slide.description\"></p>\r\n    </div>\r\n  </ion-slide>\r\n  <ion-slide class=\"ion-slide-one\">\r\n    <ion-toolbar></ion-toolbar>\r\n    <img class=\"ion-slide-image-3\" src=\"/assets/slide-3-image-2.png\" alt=\"\">\r\n    <div style=\"padding: 0 20px;\">\r\n      <h2 class=\"slide-title\">Discover the Best Services</h2>\r\n      <p>Explore a wide range of beauty services, from hair care to skin care. Choose <br> the services that suit your needs and preferences, <br> and let us take care of the rest.</p>\r\n    </div>\r\n    <ion-button (click)=\"onSlideSubmit()\" size=\"large\" [color]=\"'primary'\">\r\n      Continue\r\n    </ion-button>\r\n  </ion-slide>\r\n</ion-slides>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/app-slides/slides-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/app-slides/slides-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: SlidesRoutingModule */

  /***/
  function srcAppPagesAppSlidesSlidesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlidesRoutingModule", function () {
      return SlidesRoutingModule;
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


    var _slides_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./slides.component */
    "./src/app/pages/app-slides/slides.component.ts");

    var routes = [{
      path: '',
      component: _slides_component__WEBPACK_IMPORTED_MODULE_3__["SlidesComponent"]
    }];

    var SlidesRoutingModule = function SlidesRoutingModule() {
      _classCallCheck(this, SlidesRoutingModule);
    };

    SlidesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SlidesRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/app-slides/slides.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/pages/app-slides/slides.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAppSlidesSlidesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-slides {\n  height: 100%;\n}\n\nion-slides ion-slide {\n  height: 100%;\n  display: block;\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n.start-button {\n  position: fixed;\n  left: 0;\n  bottom: 39px;\n  right: 0;\n  width: 70%;\n  margin: 0 auto;\n}\n\n.ion-slides-container {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n\n.ion-slide-image-1 {\n  position: absolute;\n  width: 278px;\n  top: 121px;\n  left: 46px;\n}\n\n.ion-slide-image-2 {\n  position: absolute;\n  width: 262px;\n  top: 126px;\n  z-index: 99;\n  left: 68px;\n}\n\n.ion-slide-image-3 {\n  width: 300px;\n}\n\n.ion-svg-1 {\n  height: 300px;\n}\n\n.ion-svg-2 {\n  height: 314px;\n  transform: rotate(154deg);\n}\n\n.slide-title {\n  font-weight: 600;\n  color: #614D7F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXBwLXNsaWRlcy9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcCBpb25pYyBzdGFjay9zcmNcXGFwcFxccGFnZXNcXGFwcC1zbGlkZXNcXHNsaWRlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXBwLXNsaWRlcy9zbGlkZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxZQUFBO0FDQUY7O0FESUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtBQ0RGOztBREtBO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDRkY7O0FES0E7RUFDRSxhQUFBO0VBQWUsdUJBQUE7RUFBeUIscUJBQUE7QUNBMUM7O0FER0E7RUFDRSxrQkFBQTtFQUFvQixZQUFBO0VBQWMsVUFBQTtFQUFZLFVBQUE7QUNHaEQ7O0FEQUE7RUFDRSxrQkFBQTtFQUFvQixZQUFBO0VBQWMsVUFBQTtFQUFZLFdBQUE7RUFBYSxVQUFBO0FDTzdEOztBREpBO0VBQ0UsWUFBQTtBQ09GOztBREpBO0VBQ0UsYUFBQTtBQ09GOztBREpBO0VBQ0UsYUFBQTtFQUFlLHlCQUFBO0FDUWpCOztBRExBO0VBQ0UsZ0JBQUE7RUFBa0IsY0FBQTtBQ1NwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcC1zbGlkZXMvc2xpZGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1zbGlkZXMge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuXHJcbmlvbi1zbGlkZXMgaW9uLXNsaWRle1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuXHJcbi5zdGFydC1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMzlweDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogNzAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uaW9uLXNsaWRlcy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1jb250ZW50OiBjZW50ZXJcclxufVxyXG5cclxuLmlvbi1zbGlkZS1pbWFnZS0xIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAyNzhweDsgdG9wOiAxMjFweDsgbGVmdDogNDZweDtcclxufVxyXG5cclxuLmlvbi1zbGlkZS1pbWFnZS0yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAyNjJweDsgdG9wOiAxMjZweDsgei1pbmRleDogOTk7IGxlZnQ6IDY4cHg7XHJcbn1cclxuXHJcbi5pb24tc2xpZGUtaW1hZ2UtMyB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4uaW9uLXN2Zy0xIHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4uaW9uLXN2Zy0yIHtcclxuICBoZWlnaHQ6IDMxNHB4OyB0cmFuc2Zvcm06IHJvdGF0ZSgxNTRkZWcpO1xyXG59XHJcblxyXG4uc2xpZGUtdGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjNjE0RDdGO1xyXG59XHJcbiIsImlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1zbGlkZXMgaW9uLXNsaWRlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLnN0YXJ0LWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAzOXB4O1xuICByaWdodDogMDtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5pb24tc2xpZGVzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pb24tc2xpZGUtaW1hZ2UtMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI3OHB4O1xuICB0b3A6IDEyMXB4O1xuICBsZWZ0OiA0NnB4O1xufVxuXG4uaW9uLXNsaWRlLWltYWdlLTIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNjJweDtcbiAgdG9wOiAxMjZweDtcbiAgei1pbmRleDogOTk7XG4gIGxlZnQ6IDY4cHg7XG59XG5cbi5pb24tc2xpZGUtaW1hZ2UtMyB7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLmlvbi1zdmctMSB7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbi5pb24tc3ZnLTIge1xuICBoZWlnaHQ6IDMxNHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTRkZWcpO1xufVxuXG4uc2xpZGUtdGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzYxNEQ3Rjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/app-slides/slides.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/app-slides/slides.component.ts ***!
    \******************************************************/

  /*! exports provided: SlidesComponent */

  /***/
  function srcAppPagesAppSlidesSlidesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlidesComponent", function () {
      return SlidesComponent;
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

    var SlidesComponent = /*#__PURE__*/function () {
      function SlidesComponent(router) {
        _classCallCheck(this, SlidesComponent);

        this.router = router;
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.slideOpts = {
          initialSlide: 0,
          speed: 400,
          autoplay: false
        };
        this.slides = [{
          title: "Welcome to Sandhyadeep Beauty Parlour App!",
          description: "Discover a world of beauty and wellness at your fingertips. With our app, you can book appointments, explore services, and keep track of your beauty journey.",
          image: "assets/ica-slidebox-img-1.png",
          svg: 'img-1'
        }, {
          title: "Book Your Appointments with Ease",
          description: "Book appointments at your preferred time with ease. Our app offers a range of convenient time slots for you to choose from. Beauty appointments made simple.",
          image: "assets/ica-slidebox-img-2.png",
          svg: 'img-2'
        }];
      }

      _createClass(SlidesComponent, [{
        key: "onSlideSubmit",
        value: function onSlideSubmit() {
          this.router.navigate(['login']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SlidesComponent;
    }();

    SlidesComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SlidesComponent.prototype, "onSubmit", void 0);
    SlidesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-slides',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./slides.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app-slides/slides.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./slides.component.scss */
      "./src/app/pages/app-slides/slides.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], SlidesComponent);
    /***/
  },

  /***/
  "./src/app/pages/app-slides/slides.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/app-slides/slides.module.ts ***!
    \***************************************************/

  /*! exports provided: SlidesModule */

  /***/
  function srcAppPagesAppSlidesSlidesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlidesModule", function () {
      return SlidesModule;
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


    var _slides_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./slides.component */
    "./src/app/pages/app-slides/slides.component.ts");
    /* harmony import */


    var _slides_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./slides-routing.module */
    "./src/app/pages/app-slides/slides-routing.module.ts");

    var SlidesModule = function SlidesModule() {
      _classCallCheck(this, SlidesModule);
    };

    SlidesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _slides_routing_module__WEBPACK_IMPORTED_MODULE_7__["SlidesRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"]],
      declarations: [_slides_component__WEBPACK_IMPORTED_MODULE_6__["SlidesComponent"]]
    })], SlidesModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-app-slides-slides-module-es5.js.map