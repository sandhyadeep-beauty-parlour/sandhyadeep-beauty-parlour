function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-us-about-us-module"], {
  /***/
  "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js":
  /*!************************************************************************!*\
    !*** ./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js ***!
    \************************************************************************/

  /*! exports provided: SlickCarouselComponent, SlickCarouselModule, SlickItemDirective */

  /***/
  function node_modulesNgxSlickCarouselFesm2015NgxSlickCarouselJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlickCarouselComponent", function () {
      return SlickCarouselComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlickCarouselModule", function () {
      return SlickCarouselModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlickItemDirective", function () {
      return SlickItemDirective;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: slick.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Slick component
     */


    var SlickCarouselComponent = /*#__PURE__*/function () {
      /**
       * Constructor
       * @param {?} el
       * @param {?} zone
       * @param {?} platformId
       */
      function SlickCarouselComponent(el, zone, platformId) {
        _classCallCheck(this, SlickCarouselComponent);

        this.el = el;
        this.zone = zone;
        this.platformId = platformId;
        this.afterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.beforeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.breakpoint = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.destroy = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.init = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // access from parent component can be a problem with change detection timing. Please use afterChange output

        this.currentIndex = 0;
        this.slides = [];
        this.initialized = false;
        this._removedSlides = [];
        this._addedSlides = [];
      }
      /**
       * On component destroy
       * @return {?}
       */


      _createClass(SlickCarouselComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unslick();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.ngAfterViewChecked();
        }
        /**
         * On component view checked
         * @return {?}
         */

      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          var _this = this;

          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformServer"])(this.platformId)) {
            return;
          }

          if (this._addedSlides.length > 0 || this._removedSlides.length > 0) {
            /** @type {?} */
            var nextSlidesLength = this.slides.length - this._removedSlides.length + this._addedSlides.length;

            if (!this.initialized) {
              if (nextSlidesLength > 0) {
                this.initSlick();
              } // if nextSlidesLength is zere, do nothing

            } else if (nextSlidesLength === 0) {
              // unslick case
              this.unslick();
            } else {
              this._addedSlides.forEach(
              /**
              * @param {?} slickItem
              * @return {?}
              */
              function (slickItem) {
                _this.slides.push(slickItem);

                _this.zone.runOutsideAngular(
                /**
                * @return {?}
                */
                function () {
                  _this.$instance.slick('slickAdd', slickItem.el.nativeElement);
                });
              });

              this._addedSlides = [];

              this._removedSlides.forEach(
              /**
              * @param {?} slickItem
              * @return {?}
              */
              function (slickItem) {
                /** @type {?} */
                var idx = _this.slides.indexOf(slickItem);

                _this.slides = _this.slides.filter(
                /**
                * @param {?} s
                * @return {?}
                */
                function (s) {
                  return s !== slickItem;
                });

                _this.zone.runOutsideAngular(
                /**
                * @return {?}
                */
                function () {
                  _this.$instance.slick('slickRemove', idx);
                });
              });

              this._removedSlides = [];
            }
          }
        }
        /**
         * init slick
         * @return {?}
         */

      }, {
        key: "initSlick",
        value: function initSlick() {
          var _this2 = this;

          this.slides = this._addedSlides;
          this._addedSlides = [];
          this._removedSlides = [];
          this.zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this2.$instance = jQuery(_this2.el.nativeElement);

            _this2.$instance.on('init',
            /**
            * @param {?} event
            * @param {?} slick
            * @return {?}
            */
            function (event, slick) {
              _this2.zone.run(
              /**
              * @return {?}
              */
              function () {
                _this2.init.emit({
                  event: event,
                  slick: slick
                });
              });
            });

            _this2.$instance.slick(_this2.config);

            _this2.zone.run(
            /**
            * @return {?}
            */
            function () {
              var _a;

              _this2.initialized = true;
              _this2.currentIndex = ((_a = _this2.config) === null || _a === void 0 ? void 0 : _a.initialSlide) || 0;
            });

            _this2.$instance.on('afterChange',
            /**
            * @param {?} event
            * @param {?} slick
            * @param {?} currentSlide
            * @return {?}
            */
            function (event, slick, currentSlide) {
              _this2.zone.run(
              /**
              * @return {?}
              */
              function () {
                _this2.afterChange.emit({
                  event: event,
                  slick: slick,
                  currentSlide: currentSlide,
                  first: currentSlide === 0,
                  last: slick.$slides.length === currentSlide + slick.options.slidesToScroll
                });

                _this2.currentIndex = currentSlide;
              });
            });

            _this2.$instance.on('beforeChange',
            /**
            * @param {?} event
            * @param {?} slick
            * @param {?} currentSlide
            * @param {?} nextSlide
            * @return {?}
            */
            function (event, slick, currentSlide, nextSlide) {
              _this2.zone.run(
              /**
              * @return {?}
              */
              function () {
                _this2.beforeChange.emit({
                  event: event,
                  slick: slick,
                  currentSlide: currentSlide,
                  nextSlide: nextSlide
                });

                _this2.currentIndex = nextSlide;
              });
            });

            _this2.$instance.on('breakpoint',
            /**
            * @param {?} event
            * @param {?} slick
            * @param {?} breakpoint
            * @return {?}
            */
            function (event, slick, breakpoint) {
              _this2.zone.run(
              /**
              * @return {?}
              */
              function () {
                _this2.breakpoint.emit({
                  event: event,
                  slick: slick,
                  breakpoint: breakpoint
                });
              });
            });

            _this2.$instance.on('destroy',
            /**
            * @param {?} event
            * @param {?} slick
            * @return {?}
            */
            function (event, slick) {
              _this2.zone.run(
              /**
              * @return {?}
              */
              function () {
                _this2.destroy.emit({
                  event: event,
                  slick: slick
                });

                _this2.initialized = false;
              });
            });
          });
        }
        /**
         * @param {?} slickItem
         * @return {?}
         */

      }, {
        key: "addSlide",
        value: function addSlide(slickItem) {
          this._addedSlides.push(slickItem);
        }
        /**
         * @param {?} slickItem
         * @return {?}
         */

      }, {
        key: "removeSlide",
        value: function removeSlide(slickItem) {
          this._removedSlides.push(slickItem);
        }
        /**
         * Slick Method
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "slickGoTo",
        value: function slickGoTo(index) {
          var _this3 = this;

          this.zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this3.$instance.slick('slickGoTo', index);
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "slickNext",
        value: function slickNext() {
          var _this4 = this;

          this.zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this4.$instance.slick('slickNext');
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "slickPrev",
        value: function slickPrev() {
          var _this5 = this;

          this.zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this5.$instance.slick('slickPrev');
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "slickPause",
        value: function slickPause() {
          var _this6 = this;

          this.zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this6.$instance.slick('slickPause');
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "slickPlay",
        value: function slickPlay() {
          var _this7 = this;

          this.zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this7.$instance.slick('slickPlay');
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "unslick",
        value: function unslick() {
          var _this8 = this;

          if (this.$instance) {
            this.zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              _this8.$instance.slick('unslick');
            });
            this.$instance = undefined;
          }

          this.initialized = false;
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this9 = this;

          if (this.initialized) {
            /** @type {?} */
            var config = changes['config'];

            if (config.previousValue !== config.currentValue && config.currentValue !== undefined) {
              /** @type {?} */
              var refresh = config.currentValue['refresh'];
              /** @type {?} */

              var newOptions = Object.assign({}, config.currentValue);
              delete newOptions['refresh'];
              this.zone.runOutsideAngular(
              /**
              * @return {?}
              */
              function () {
                _this9.$instance.slick('slickSetOption', newOptions, refresh);
              });
            }
          }
        }
      }]);

      return SlickCarouselComponent;
    }();

    SlickCarouselComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
      args: [{
        selector: 'ngx-slick-carousel',
        exportAs: 'slick-carousel',
        providers: [{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return SlickCarouselComponent;
          }),
          multi: true
        }],
        template: '<ng-content></ng-content>'
      }]
    }];
    /** @nocollapse */

    SlickCarouselComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
        }]
      }];
    };

    SlickCarouselComponent.propDecorators = {
      config: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      afterChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      beforeChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      breakpoint: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      destroy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      init: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };

    if (false) {}

    var SlickItemDirective = /*#__PURE__*/function () {
      /**
       * @param {?} el
       * @param {?} platformId
       * @param {?} carousel
       */
      function SlickItemDirective(el, platformId, carousel) {
        _classCallCheck(this, SlickItemDirective);

        this.el = el;
        this.platformId = platformId;
        this.carousel = carousel;
      }
      /**
       * @return {?}
       */


      _createClass(SlickItemDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
            this.carousel.addSlide(this);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
            this.carousel.removeSlide(this);
          }
        }
      }]);

      return SlickItemDirective;
    }();

    SlickItemDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[ngxSlickItem]'
      }]
    }];
    /** @nocollapse */

    SlickItemDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
        }]
      }, {
        type: SlickCarouselComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
        }]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var SlickCarouselModule = function SlickCarouselModule() {
      _classCallCheck(this, SlickCarouselModule);
    };

    SlickCarouselModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
        declarations: [SlickCarouselComponent, SlickItemDirective],
        exports: [SlickCarouselComponent, SlickItemDirective]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: ngx-slick-carousel.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ngx-slick-carousel.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAboutUsAboutUsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"top-adjust\">\n    <div class=\"about-us-container\">\n        <div class=\"image-container\">\n            <div class=\"about-us-image\">\n                <ion-slides class=\"feed-sliders height-350\" pager=\"true\" [options]=\"slideOpts\">\n                    <ion-slide class=\"feed-images feed-slider feed-slider-one\">\n\n                    </ion-slide>\n                    <ion-slide class=\"feed-images feed-slider feed-slider-two\">\n\n                    </ion-slide>\n                    <ion-slide class=\"feed-images feed-slider feed-slider-three\">\n\n                    </ion-slide>\n                    <ion-slide class=\"feed-images feed-slider feed-slider-four\">\n\n                    </ion-slide>\n                    <ion-slide class=\"feed-images feed-slider feed-slider-five\">\n\n                    </ion-slide>\n                </ion-slides>\n            </div>\n            <div class=\"about-us-heading\">\n                <div class=\"heading-text\">\n                    <b>Sandhyadeep Beauty Parlour</b>\n                </div>\n                <div class=\"slogan-text\">\n                    Have a hair affair with us\n                </div>\n            </div>\n        </div>\n        <div class=\"description-container\">\n            <div class=\"description-toggle-menus\">\n                <div (click)=\"onSelectMenu('about_us')\" class=\"toggle-menu-background about-us\"\n                     [class.active]=\"selectedMenu === 'about_us'\">\n                    <div class=\"toggle-menu\" [class.active]=\"selectedMenu === 'about_us'\">About Us</div>\n                </div>\n                <div (click)=\"onSelectMenu('services')\" class=\"toggle-menu-background services\"\n                     [class.active]=\"selectedMenu === 'services'\">\n                    <div class=\"toggle-menu\" [class.active]=\"selectedMenu === 'services'\">Services</div>\n                </div>\n                <div (click)=\"onSelectMenu('owner')\" class=\"toggle-menu-background owner\"\n                     [class.active]=\"selectedMenu === 'owner'\">\n                    <div class=\"toggle-menu\" [class.active]=\"selectedMenu === 'owner'\">Our Owner</div>\n                </div>\n                <div (click)=\"onSelectMenu('products')\" class=\"toggle-menu-background product\"\n                     [class.active]=\"selectedMenu === 'products'\">\n                    <div class=\"toggle-menu\" [class.active]=\"selectedMenu === 'products'\">Products</div>\n                </div>\n            </div>\n            <div class=\"description-data-container\">\n                <div *ngIf=\"selectedMenu === 'about_us'\" class=\"about-us-page-container\">\n                    <div class=\"tab-container border-bottom\">\n                        <div class=\"heading-text\">\n                            <b>Description</b>\n                        </div>\n                        <div class=\"content-div\">\n                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to\n                            demonstrate the visual form of a document or a typeface without relying on meaningful conte\n                        </div>\n                    </div>\n                    <div class=\"tab-container\">\n                        <div class=\"heading-text\">\n                            <b>Information</b>\n                        </div>\n                        <div class=\"timing\">\n                            <div>Sunday - Friday</div>\n                            <div>10:00 AM - 07:00 PM</div>\n                        </div>\n                    </div>\n                    <div class=\"tab-container\">\n                        <div class=\"content-div\">\n                            5595, Near Samarth Vidya Mandir, Anandi Bazar, Ahmednagar, Maharashtra, 414001\n                        </div>\n                        <div class=\"phone-number-div\">\n                            <div>+91-9422086335</div>\n                            <div>\n                                <div class=\"phone-icon\">\n                                    <i class=\"fa fa-phone\"></i>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"selectedMenu === 'services'\" class=\"services-container\">\n                    <div class=\"page-container\">\n                        <div class=\"page-heading\">\n                            <div class=\"heading-text\">\n                                <b>Services</b>\n                            </div>\n                        </div>\n                        <div class=\"item-list\">\n                            <div class=\"item-container\">\n                                <div (click)=\"show = !show\" class=\"main-item-name-container\">\n                                    <div class=\"main-item-name\">Name</div>\n                                    <div class=\"main-item-arrow\">\n                                        <i class=\"right-icon fa fa-angle-right\" [class.down]=\"show\"></i>\n                                    </div>\n                                </div>\n                                <div class=\"sub-item-list\" [class.opened]=\"show\">\n                                    <div class=\"sub-item-container\">\n                                        <div class=\"sub-item-name\">\n                                            <div class=\"name\">Sub Item Name</div>\n                                            <div class=\"time\">15 Minutes</div>\n                                        </div>\n                                        <div class=\"sub-item-price\">\n                                            <div class=\"color-666\">Price:</div>\n                                            30$\n                                        </div>\n                                        <div class=\"sub-item-checkbox\">\n                                            <ion-checkbox color=\"primary\"></ion-checkbox>\n                                        </div>\n                                    </div>\n                                    <div class=\"sub-item-container\">\n                                        <div class=\"sub-item-name\">\n                                            <div class=\"name\">Sub Item Name</div>\n                                            <div class=\"time\">15 Minutes</div>\n                                        </div>\n                                        <div class=\"sub-item-price\">\n                                            <div class=\"color-666\">Price:</div>\n                                            30$\n                                        </div>\n                                        <div class=\"sub-item-checkbox\">\n                                            <ion-checkbox color=\"primary\"></ion-checkbox>\n                                        </div>\n                                    </div>\n                                    <div class=\"sub-item-container\">\n                                        <div class=\"sub-item-name\">\n                                            <div class=\"name\">Sub Item Name</div>\n                                            <div class=\"time\">15 Minutes</div>\n                                        </div>\n                                        <div class=\"sub-item-price\">\n                                            <div class=\"color-666\">Price:</div>\n                                            30$\n                                        </div>\n                                        <div class=\"sub-item-checkbox\">\n                                            <ion-checkbox color=\"primary\"></ion-checkbox>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"item-container\">\n                                <div (click)=\"show1 = !show1\" class=\"main-item-name-container\">\n                                    <div class=\"main-item-name\">Name</div>\n                                    <div class=\"main-item-arrow\">\n                                        <i class=\"right-icon fa fa-angle-right\" [class.down]=\"show1\"></i>\n                                    </div>\n                                </div>\n                                <div class=\"sub-item-list\" [class.opened]=\"show1\">\n                                    <div class=\"sub-item-container\">\n                                        <div class=\"sub-item-name\">\n                                            <div class=\"name\">Sub Item Name</div>\n                                            <div class=\"time\">15 Minutes</div>\n                                        </div>\n                                        <div class=\"sub-item-price\">\n                                            <div class=\"color-666\">Price:</div>\n                                            30$\n                                        </div>\n                                        <div class=\"sub-item-checkbox\">\n                                            <ion-checkbox color=\"primary\"></ion-checkbox>\n                                        </div>\n                                    </div>\n                                    <div class=\"sub-item-container\">\n                                        <div class=\"sub-item-name\">\n                                            <div class=\"name\">Sub Item Name</div>\n                                            <div class=\"time\">15 Minutes</div>\n                                        </div>\n                                        <div class=\"sub-item-price\">\n                                            <div class=\"color-666\">Price:</div>\n                                            30$\n                                        </div>\n                                        <div class=\"sub-item-checkbox\">\n                                            <ion-checkbox color=\"primary\"></ion-checkbox>\n                                        </div>\n                                    </div>\n                                    <div class=\"sub-item-container\">\n                                        <div class=\"sub-item-name\">\n                                            <div class=\"name\">Sub Item Name</div>\n                                            <div class=\"time\">15 Minutes</div>\n                                        </div>\n                                        <div class=\"sub-item-price\">\n                                            <div class=\"color-666\">Price:</div>\n                                            30$\n                                        </div>\n                                        <div class=\"sub-item-checkbox\">\n                                            <ion-checkbox color=\"primary\"></ion-checkbox>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <ion-footer class=\"ion-no-border\">\n                            <ion-toolbar>\n                                <div class=\"appointment-footer\">\n                                    <div class=\"total-div-container\">\n                                        <div class=\"total-div\">\n                                            <div>Total</div>\n                                            <div class=\"total-div-price\">3 Services</div>\n                                        </div>\n                                        <div>\n                                            $354\n                                        </div>\n                                    </div>\n                                    <div class=\"default-button\">\n                                        <button (click)=\"onBookAppointment()\"> Book Appointment</button>\n                                    </div>\n                                </div>\n                            </ion-toolbar>\n                        </ion-footer>\n                    </div>\n                </div>\n                <div *ngIf=\"selectedMenu === 'owner'\" class=\"owner-container\">\n                    <div class=\"ion-image-slides border-bottom\">\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col size=\"1\">\n                                <span class=\"slider-nav arrow-prev\" (click)=\"slidePrev(sliderTwo,slideWithNav2)\">\n                                  <div class=\"prev-icon-custom custon-nav\" [class.disabled]=\"sliderTwo.isBeginningSlide\"></div>\n                                </span>\n                                </ion-col>\n                                <ion-col size=\"10\">\n                                    <ion-slides pager=\"false\" [options]=\"slideOptsTwo\" #slideWithNav2\n                                                (ionSlideDidChange)=\"SlideDidChange(sliderTwo,slideWithNav2)\">\n                                        <ion-slide *ngFor=\"let slide of sliderTwo.slidesItems\">\n                                            <img src={{slide.url}}>\n                                        </ion-slide>\n                                    </ion-slides>\n                                </ion-col>\n                                <ion-col size=\"1\">\n                                <span class=\"slider-nav arrow-next\" (click)=\"slideNext(sliderTwo,slideWithNav2)\">\n                                  <div class=\"next-icon-custom custon-nav\" [class.disabled]=\"sliderTwo.isEndSlide\"></div>\n                                </span>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </div>\n\n                    <div class=\"tab-container border-bottom\">\n                        <div class=\"heading-text\">\n                            <b>Description</b>\n                        </div>\n                        <div class=\"content-div\">\n                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to\n                            demonstrate the visual form of a document or a typeface without relying on meaningful conte\n                        </div>\n                    </div>\n                    <div class=\"tab-container border-bottom\">\n                        <div class=\"heading-text\">\n                            <b>Achievements</b>\n                        </div>\n                        <div class=\"content-div\">\n                            <ul>\n                                <li>Media & Beauty Makeup Diploma · Media Makeup · Fsx · Singapore</li>\n                                <li>Makeup Techniques with Air Brush Machine · Mumbai, Maharashtra</li>\n                                <li>Master Diploma in Makeup Artistry · Singapore</li>\n                                <li>Comite International D’Esthetique Et De Cosmetologie., Zurich.</li>\n                                <li>British Association of Beauty Therapy & Cosmetology, London.</li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"tab-container feed-heading\">\n                        <div class=\"heading-text\">\n                            <b>Portfolio</b>\n                            <div (click)=\"onSeeAllPortfolios()\" class=\"know-more\">See All <i class=\"fa fa-angle-right\"></i></div>\n                        </div>\n                        <div class=\"content-div\">\n                            <ngx-slick-carousel class=\"carousel\"\n                                                #slickModal=\"slick-carousel\"\n                                                [config]=\"slideConfig\"\n                                                (init)=\"slickInit($event)\"\n                                                (breakpoint)=\"breakpoint($event)\"\n                                                (afterChange)=\"afterChange($event)\"\n                                                (beforeChange)=\"beforeChange($event)\">\n                                <div ngxSlickItem *ngFor=\"let slide of slides\" class=\"slide custom-slide\">\n                                    <img src=\"{{ slide.img }}\" alt=\"\" width=\"100%\">\n                                </div>\n                            </ngx-slick-carousel>\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"selectedMenu === 'products'\" class=\"product-container\">\n                    <div class=\"no-data\">\n                        Currently No Products Available\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <script id=\"image-modal.html\" type=\"text/ng-template\">\n        <div class=\"modal image-modal transparent\" ng-click=\"closeModal()\">\n            <ion-pane class=\"transparent\">\n                <img ng-src=\"{{imageSrc}}\" class=\"fullscreen-image\"/>\n            </ion-pane>\n        </div>\n    </script>\n</ion-content>\n";
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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-title>my-modal</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n        ID : {{modelId}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n        <ion-button (click)=\"closeModal()\">Close Modal</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n";
    /***/
  },

  /***/
  "./src/app/pages/about-us/about-us-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/about-us/about-us-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: AboutUsPageRoutingModule */

  /***/
  function srcAppPagesAboutUsAboutUsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutUsPageRoutingModule", function () {
      return AboutUsPageRoutingModule;
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


    var _about_us_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./about-us.page */
    "./src/app/pages/about-us/about-us.page.ts");

    var routes = [{
      path: '',
      component: _about_us_page__WEBPACK_IMPORTED_MODULE_3__["AboutUsPage"]
    }];

    var AboutUsPageRoutingModule = function AboutUsPageRoutingModule() {
      _classCallCheck(this, AboutUsPageRoutingModule);
    };

    AboutUsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AboutUsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/about-us/about-us.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/about-us/about-us.module.ts ***!
    \***************************************************/

  /*! exports provided: AboutUsPageModule */

  /***/
  function srcAppPagesAboutUsAboutUsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutUsPageModule", function () {
      return AboutUsPageModule;
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


    var _about_us_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./about-us-routing.module */
    "./src/app/pages/about-us/about-us-routing.module.ts");
    /* harmony import */


    var _about_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./about-us.page */
    "./src/app/pages/about-us/about-us.page.ts");
    /* harmony import */


    var _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared-components/header-component/header-component.module */
    "./src/app/shared-components/header-component/header-component.module.ts");
    /* harmony import */


    var _services_services_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/services.module */
    "./src/app/pages/services/services.module.ts");
    /* harmony import */


    var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-slick-carousel */
    "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");
    /* harmony import */


    var _shared_components_modal_popup_modal_popup_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared-components/modal-popup/modal-popup.module */
    "./src/app/shared-components/modal-popup/modal-popup.module.ts");
    /* harmony import */


    var _shared_components_modal_popup_modal_popup_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../shared-components/modal-popup/modal-popup.page */
    "./src/app/shared-components/modal-popup/modal-popup.page.ts");

    var AboutUsPageModule = function AboutUsPageModule() {
      _classCallCheck(this, AboutUsPageModule);
    };

    AboutUsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _about_us_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutUsPageRoutingModule"], _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"], _services_services_module__WEBPACK_IMPORTED_MODULE_8__["ServicePageModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_9__["SlickCarouselModule"], _shared_components_modal_popup_modal_popup_module__WEBPACK_IMPORTED_MODULE_10__["ModalPopupModule"]],
      entryComponents: [_shared_components_modal_popup_modal_popup_page__WEBPACK_IMPORTED_MODULE_11__["ModalPopupPage"]],
      declarations: [_about_us_page__WEBPACK_IMPORTED_MODULE_6__["AboutUsPage"]]
    })], AboutUsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/about-us/about-us.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/about-us/about-us.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAboutUsAboutUsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".top-adjust {\n  top: 65px;\n}\n\n.page-container {\n  padding: 0 15px;\n}\n\n.page-container .page-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 18px 0 5px;\n}\n\n.page-container .page-heading .heading-text {\n  font-size: 24px;\n}\n\n.item-list .item-container {\n  margin-bottom: 15px;\n}\n\n.item-list .item-container .main-item-name-container {\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 0;\n  border-bottom: 1px solid lightgray;\n}\n\n.item-list .item-container .main-item-name-container .main-item-name {\n  font-size: 18px;\n}\n\n.item-list .item-container .main-item-name-container .main-item-arrow {\n  color: #666;\n}\n\n.item-list .item-container .sub-item-list {\n  max-height: 0;\n  overflow-y: hidden;\n  transition: ease-in-out 400ms max-height;\n}\n\n.item-list .item-container .sub-item-list.opened {\n  max-height: 500px;\n  transition: ease-in-out 600ms max-height;\n}\n\n.item-list .item-container .sub-item-list .sub-item-container {\n  display: flex;\n  padding: 5px 0;\n  border-bottom: 1px solid lightgray;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.item-list .item-container .sub-item-list .sub-item-container .sub-item-name {\n  flex-basis: 50%;\n}\n\n.item-list .item-container .sub-item-list .sub-item-container .sub-item-name .name {\n  font-size: 16px;\n}\n\n.item-list .item-container .sub-item-list .sub-item-container .sub-item-name .time {\n  font-size: 14px;\n  color: #666;\n}\n\n.item-list .item-container .sub-item-list .sub-item-container .sub-item-checkbox {\n  display: flex;\n}\n\n.down {\n  transform: rotate(90deg);\n  -webkit-transform: rotate(90deg);\n  transition: ease-in-out 300ms;\n}\n\n.color-666 {\n  color: #666;\n}\n\n.about-us-container {\n  padding: 0 15px;\n  margin-bottom: 65px;\n}\n\n.image-container {\n  padding: 15px 0;\n}\n\n.image-container .about-us-image .feed-sliders {\n  height: 350px;\n  border-radius: 10px;\n}\n\n.image-container .about-us-image .feed-sliders.height-200 {\n  height: 350px;\n}\n\n.image-container .about-us-image .feed-sliders .feed-slider {\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-position: center center !important;\n  max-height: 30em;\n}\n\n.image-container .about-us-image .feed-sliders .feed-slider.feed-slider-one {\n  background: url('sandhyadeep5.png');\n}\n\n.image-container .about-us-image .feed-sliders .feed-slider.feed-slider-two {\n  background: url('sandhyadeep3.png');\n}\n\n.image-container .about-us-image .feed-sliders .feed-slider.feed-slider-three {\n  background: url('sandhyadeep1.png');\n}\n\n.image-container .about-us-image .feed-sliders .feed-slider.feed-slider-four {\n  background: url('sandhyadeep2.png');\n}\n\n.image-container .about-us-image .feed-sliders .feed-slider.feed-slider-five {\n  background: url('sandhyadeep6.png');\n}\n\n.image-container .about-us-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  margin: 18px 0 5px;\n}\n\n.image-container .about-us-heading .heading-text {\n  font-size: 20px;\n}\n\n.image-container .about-us-heading .slogan-text {\n  font-size: 14px;\n}\n\n.description-container {\n  padding: 15px 0;\n}\n\n.description-container .description-toggle-menus {\n  display: flex;\n  justify-content: space-between;\n}\n\n.description-container .description-toggle-menus .toggle-menu-background {\n  padding-bottom: 4px;\n}\n\n.description-container .description-toggle-menus .toggle-menu-background.active {\n  border-bottom: 3px solid #cc2b5e;\n}\n\n.description-container .description-toggle-menus .toggle-menu-background .toggle-menu {\n  color: #666;\n}\n\n.description-container .description-toggle-menus .toggle-menu-background .toggle-menu.active {\n  color: #753a88;\n  font-weight: bold;\n}\n\n.description-container .description-data-container {\n  padding: 15px 0;\n}\n\n.description-container .description-data-container .about-us-page-container .tab-container, .description-container .description-data-container .owner-container .tab-container {\n  margin-bottom: 10px;\n  padding-bottom: 5px;\n}\n\n.description-container .description-data-container .about-us-page-container .heading-text, .description-container .description-data-container .owner-container .heading-text {\n  display: flex;\n  justify-content: space-between;\n  font-size: 20px;\n  align-items: center;\n}\n\n.description-container .description-data-container .about-us-page-container .heading-text .know-more, .description-container .description-data-container .owner-container .heading-text .know-more {\n  font-size: 14px;\n}\n\n.description-container .description-data-container .about-us-page-container .content-div, .description-container .description-data-container .owner-container .content-div {\n  padding: 10px 0;\n  font-size: 14px;\n}\n\n.description-container .description-data-container .about-us-page-container .phone-number-div, .description-container .description-data-container .owner-container .phone-number-div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.description-container .description-data-container .about-us-page-container .phone-number-div .phone-icon, .description-container .description-data-container .owner-container .phone-number-div .phone-icon {\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  background-color: #753a88;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n}\n\n.description-container .description-data-container .about-us-page-container .timing, .description-container .description-data-container .owner-container .timing {\n  color: #666;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 0;\n}\n\n.description-container .description-data-container .services-container {\n  margin-bottom: 10px;\n}\n\n.description-container .description-data-container .services-container .heading-text {\n  font-size: 20px;\n}\n\n.description-container .description-data-container .product-container .no-data {\n  text-align: center;\n  padding: 30px 0;\n  color: #666;\n}\n\n.padding-bottom-15 {\n  padding-bottom: 15px !important;\n}\n\n.border-bottom {\n  border-bottom: 1px solid lightgray;\n}\n\n.appointment-footer {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 15px;\n}\n\n.appointment-footer .total-div-container {\n  display: flex;\n  padding: 10px;\n  background: #d3d3d37d;\n  justify-content: space-between;\n  border-radius: 7px;\n}\n\n.appointment-footer .total-div-container .total-div {\n  display: flex;\n}\n\n.appointment-footer .total-div-container .total-div .total-div-price {\n  color: #666;\n  margin-left: 15px;\n}\n\n.default-button {\n  color: white;\n  padding: 15px;\n  margin: 15px 0;\n  display: flex;\n  border-radius: 7px;\n  justify-content: center;\n  text-align: center;\n  background: linear-gradient(225deg, #cc2b5e 2%, #753a88 63%);\n}\n\n.default-button button {\n  font-size: 16px;\n  font-weight: bold;\n  background: transparent;\n  color: white;\n}\n\n.custon-nav {\n  height: 48px;\n  width: 20px;\n  cursor: pointer;\n  vertical-align: middle;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.prev-icon-custom {\n  background: url(https://freakyjolly.com/demo/jquery/OwlCarousel2/nav-icon.png) no-repeat scroll 0px 0px;\n}\n\n.prev-icon-custom.disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n\n.next-icon-custom {\n  background: url(https://freakyjolly.com/demo/jquery/OwlCarousel2/nav-icon.png) no-repeat scroll -32px 0px;\n}\n\n.next-icon-custom.disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n\n.slider-nav ion-icon {\n  height: 100%;\n}\n\n.slide-text {\n  position: absolute;\n  color: white;\n  bottom: 30px;\n}\n\n.ion-image-slides {\n  margin-bottom: 10px;\n  padding: 5px 0;\n}\n\n.custom-slide {\n  margin: 0 5px;\n}\n\n.know-more {\n  color: #666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvYXBwL3BhZ2VzL2Fib3V0LXVzL2Fib3V0LXVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWJvdXQtdXMvYWJvdXQtdXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBRENFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENJO0VBQ0UsZUFBQTtBQ0NOOztBREtFO0VBQ0UsbUJBQUE7QUNGSjs7QURJSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtBQ0ZOOztBRElNO0VBQ0UsZUFBQTtBQ0ZSOztBREtNO0VBQ0UsV0FBQTtBQ0hSOztBRFVJO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUNSTjs7QURVTTtFQUNFLGlCQUFBO0VBQ0Esd0NBQUE7QUNSUjs7QURXTTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDVFI7O0FEV1E7RUFDRSxlQUFBO0FDVFY7O0FEV1U7RUFDRSxlQUFBO0FDVFo7O0FEWVU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ1ZaOztBRGlCUTtFQUNFLGFBQUE7QUNmVjs7QURzQkE7RUFDRSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUNuQkY7O0FEc0JBO0VBQ0UsV0FBQTtBQ25CRjs7QUR1QkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNwQkY7O0FEdUJBO0VBQ0UsZUFBQTtBQ3BCRjs7QUR1Qkk7RUFDRSxhQUFBO0VBU0EsbUJBQUE7QUM3Qk47O0FEeUJNO0VBQ0UsYUFBQTtBQ3ZCUjs7QUQ0Qk07RUFDRSx1Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsNkNBQUE7RUFDQSxnQkFBQTtBQzFCUjs7QUQ0QlE7RUFDRSxtQ0FBQTtBQzFCVjs7QUQ2QlE7RUFDRSxtQ0FBQTtBQzNCVjs7QUQ4QlE7RUFDRSxtQ0FBQTtBQzVCVjs7QUQrQlE7RUFDRSxtQ0FBQTtBQzdCVjs7QURnQ1E7RUFDRSxtQ0FBQTtBQzlCVjs7QURvQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNsQ0o7O0FEb0NJO0VBQ0UsZUFBQTtBQ2xDTjs7QURxQ0k7RUFDRSxlQUFBO0FDbkNOOztBRHdDQTtFQUNFLGVBQUE7QUNyQ0Y7O0FEdUNFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDckNKOztBRHVDSTtFQUNFLG1CQUFBO0FDckNOOztBRHVDTTtFQUNFLGdDQUFBO0FDckNSOztBRHdDTTtFQUNFLFdBQUE7QUN0Q1I7O0FEd0NRO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDdENWOztBRHlERTtFQUNFLGVBQUE7QUN2REo7O0FEMERNO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBQ3hEUjs7QUQ0RE07RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUMxRFI7O0FEMkRRO0VBQ0UsZUFBQTtBQ3pEVjs7QUQ2RE07RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQzNEUjs7QUQ4RE07RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQzVEUjs7QUQ4RFE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUM1RFY7O0FEZ0VNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUM5RFI7O0FEa0VJO0VBQ0UsbUJBQUE7QUNoRU47O0FEa0VNO0VBQ0UsZUFBQTtBQ2hFUjs7QUR5RU07RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDdkVSOztBRCtFQTtFQUNFLCtCQUFBO0FDNUVGOztBRCtFQTtFQUNFLGtDQUFBO0FDNUVGOztBRCtFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDNUVGOztBRDhFRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FDNUVKOztBRDhFSTtFQUNFLGFBQUE7QUM1RU47O0FEOEVNO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDNUVSOztBRGtGQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0REFBQTtBQy9FRjs7QURpRkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUMvRUo7O0FEcUZBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBRUEsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ25GRjs7QURxRkE7RUFDRSx1R0FBQTtBQ2xGRjs7QURvRkE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ2pGRjs7QURtRkE7RUFDRSx5R0FBQTtBQ2hGRjs7QURrRkE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQy9FRjs7QURrRkU7RUFDRSxZQUFBO0FDL0VKOztBRG1GQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNoRkY7O0FEa0ZBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FDL0VGOztBRG9GQTtFQUNFLGFBQUE7QUNqRkY7O0FEb0ZBO0VBQ0UsV0FBQTtBQ2pGRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0LXVzL2Fib3V0LXVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtYWRqdXN0IHtcbiAgdG9wOiA2NXB4O1xufVxuXG4ucGFnZS1jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDE1cHg7XG5cbiAgLnBhZ2UtaGVhZGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDE4cHggMCA1cHg7XG5cbiAgICAuaGVhZGluZy10ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG4gIH1cbn1cblxuLml0ZW0tbGlzdCB7XG4gIC5pdGVtLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcblxuICAgIC5tYWluLWl0ZW0tbmFtZS1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcblxuICAgICAgLm1haW4taXRlbS1uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuXG4gICAgICAubWFpbi1pdGVtLWFycm93IHtcbiAgICAgICAgY29sb3I6ICM2NjY7XG5cbiAgICAgICAgLnJpZ2h0LWljb24ge1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN1Yi1pdGVtLWxpc3Qge1xuICAgICAgbWF4LWhlaWdodDogMDtcbiAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDQwMG1zIG1heC1oZWlnaHQ7XG5cbiAgICAgICYub3BlbmVkIHtcbiAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDYwMG1zIG1heC1oZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIC5zdWItaXRlbS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5zdWItaXRlbS1uYW1lIHtcbiAgICAgICAgICBmbGV4LWJhc2lzOiA1MCU7XG5cbiAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRpbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnN1Yi1pdGVtLXByaWNlIHtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdWItaXRlbS1jaGVja2JveCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZG93biB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDMwMG1zO1xufVxuXG4uY29sb3ItNjY2IHtcbiAgY29sb3I6ICM2NjY7XG59XG5cblxuLmFib3V0LXVzLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNjVweDtcbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHggMDtcblxuICAuYWJvdXQtdXMtaW1hZ2Uge1xuICAgIC5mZWVkLXNsaWRlcnMge1xuICAgICAgaGVpZ2h0OiAzNTBweDtcblxuICAgICAgJi5oZWlnaHQtMzUwIHtcbiAgICAgIH1cblxuICAgICAgJi5oZWlnaHQtMjAwIHtcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgIH1cblxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgICAgLmZlZWQtc2xpZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgbWF4LWhlaWdodDogMzBlbTtcblxuICAgICAgICAmLmZlZWQtc2xpZGVyLW9uZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9zYW5kaHlhZGVlcDUucG5nXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5mZWVkLXNsaWRlci10d28ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvc2FuZGh5YWRlZXAzLnBuZ1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuZmVlZC1zbGlkZXItdGhyZWUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvc2FuZGh5YWRlZXAxLnBuZ1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuZmVlZC1zbGlkZXItZm91ciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9zYW5kaHlhZGVlcDIucG5nXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5mZWVkLXNsaWRlci1maXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL3NhbmRoeWFkZWVwNi5wbmdcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYWJvdXQtdXMtaGVhZGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMThweCAwIDVweDtcblxuICAgIC5oZWFkaW5nLXRleHQge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cblxuICAgIC5zbG9nYW4tdGV4dCB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICB9XG59XG5cbi5kZXNjcmlwdGlvbi1jb250YWluZXIge1xuICBwYWRkaW5nOiAxNXB4IDA7XG5cbiAgLmRlc2NyaXB0aW9uLXRvZ2dsZS1tZW51cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAudG9nZ2xlLW1lbnUtYmFja2dyb3VuZCB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuXG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjY2MyYjVlO1xuICAgICAgfVxuXG4gICAgICAudG9nZ2xlLW1lbnUge1xuICAgICAgICBjb2xvcjogIzY2NjtcblxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgY29sb3I6ICM3NTNhODg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLmFib3V0LXVzIHtcblxuICAgICAgICB9XG5cbiAgICAgICAgJi5zZXJ2aWNlcyB7XG4gICAgICAgIH1cblxuICAgICAgICAmLm93bmVyIHtcbiAgICAgICAgfVxuXG4gICAgICAgICYucHJvZHVjdCB7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZGVzY3JpcHRpb24tZGF0YS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE1cHggMDtcblxuICAgIC5hYm91dC11cy1wYWdlLWNvbnRhaW5lciwgLm93bmVyLWNvbnRhaW5lciB7XG4gICAgICAudGFiLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICB9XG5cblxuICAgICAgLmhlYWRpbmctdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAua25vdy1tb3JlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmNvbnRlbnQtZGl2IHtcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG5cbiAgICAgIC5waG9uZS1udW1iZXItZGl2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5waG9uZS1pY29uIHtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3NTNhODg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAudGltaW5nIHtcbiAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zZXJ2aWNlcy1jb250YWluZXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgLmhlYWRpbmctdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAub3duZXItY29udGFpbmVyIHtcblxuICAgIH1cblxuICAgIC5wcm9kdWN0LWNvbnRhaW5lciB7XG4gICAgICAubm8tZGF0YSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMzBweCAwO1xuICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG5cbi5wYWRkaW5nLWJvdHRvbS0xNSB7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cblxuLmFwcG9pbnRtZW50LWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcblxuICAudG90YWwtZGl2LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNkM2QzZDM3ZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuXG4gICAgLnRvdGFsLWRpdiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAudG90YWwtZGl2LXByaWNlIHtcbiAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZGVmYXVsdC1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMTVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICNjYzJiNWUgMiUsICM3NTNhODggNjMlKTtcblxuICBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuXG4vLyBTbGlkZXIgU3R5bGUgU1RBUlRcbi5jdXN0b24tbmF2e1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLnByZXYtaWNvbi1jdXN0b217XG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL2ZyZWFreWpvbGx5LmNvbS9kZW1vL2pxdWVyeS9Pd2xDYXJvdXNlbDIvbmF2LWljb24ucG5nKSBuby1yZXBlYXQgc2Nyb2xsIDBweCAwcHg7XG59XG4ucHJldi1pY29uLWN1c3RvbS5kaXNhYmxlZHtcbiAgb3BhY2l0eTogMC40O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4ubmV4dC1pY29uLWN1c3RvbXtcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vZnJlYWt5am9sbHkuY29tL2RlbW8vanF1ZXJ5L093bENhcm91c2VsMi9uYXYtaWNvbi5wbmcpIG5vLXJlcGVhdCBzY3JvbGwgLTMycHggMHB4O1xufVxuLm5leHQtaWNvbi1jdXN0b20uZGlzYWJsZWR7XG4gIG9wYWNpdHk6IDAuNDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLnNsaWRlci1uYXZ7XG4gIGlvbi1pY29ue1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuXG4uc2xpZGUtdGV4dHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvdHRvbTogMzBweDtcbn1cbi5pb24taW1hZ2Utc2xpZGVzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogNXB4IDA7XG59XG4vLyBTbGlkZXIgU3R5bGUgU1RPUFxuLy9cblxuLmN1c3RvbS1zbGlkZSB7XG4gIG1hcmdpbjogMCA1cHg7XG59XG5cbi5rbm93LW1vcmUge1xuICBjb2xvcjogIzY2Njtcbn1cbiIsIi50b3AtYWRqdXN0IHtcbiAgdG9wOiA2NXB4O1xufVxuXG4ucGFnZS1jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG4ucGFnZS1jb250YWluZXIgLnBhZ2UtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxOHB4IDAgNXB4O1xufVxuLnBhZ2UtY29udGFpbmVyIC5wYWdlLWhlYWRpbmcgLmhlYWRpbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLml0ZW0tbGlzdCAuaXRlbS1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLml0ZW0tbGlzdCAuaXRlbS1jb250YWluZXIgLm1haW4taXRlbS1uYW1lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4uaXRlbS1saXN0IC5pdGVtLWNvbnRhaW5lciAubWFpbi1pdGVtLW5hbWUtY29udGFpbmVyIC5tYWluLWl0ZW0tbmFtZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5pdGVtLWxpc3QgLml0ZW0tY29udGFpbmVyIC5tYWluLWl0ZW0tbmFtZS1jb250YWluZXIgLm1haW4taXRlbS1hcnJvdyB7XG4gIGNvbG9yOiAjNjY2O1xufVxuLml0ZW0tbGlzdCAuaXRlbS1jb250YWluZXIgLnN1Yi1pdGVtLWxpc3Qge1xuICBtYXgtaGVpZ2h0OiAwO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDQwMG1zIG1heC1oZWlnaHQ7XG59XG4uaXRlbS1saXN0IC5pdGVtLWNvbnRhaW5lciAuc3ViLWl0ZW0tbGlzdC5vcGVuZWQge1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgNjAwbXMgbWF4LWhlaWdodDtcbn1cbi5pdGVtLWxpc3QgLml0ZW0tY29udGFpbmVyIC5zdWItaXRlbS1saXN0IC5zdWItaXRlbS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA1cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLml0ZW0tbGlzdCAuaXRlbS1jb250YWluZXIgLnN1Yi1pdGVtLWxpc3QgLnN1Yi1pdGVtLWNvbnRhaW5lciAuc3ViLWl0ZW0tbmFtZSB7XG4gIGZsZXgtYmFzaXM6IDUwJTtcbn1cbi5pdGVtLWxpc3QgLml0ZW0tY29udGFpbmVyIC5zdWItaXRlbS1saXN0IC5zdWItaXRlbS1jb250YWluZXIgLnN1Yi1pdGVtLW5hbWUgLm5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uaXRlbS1saXN0IC5pdGVtLWNvbnRhaW5lciAuc3ViLWl0ZW0tbGlzdCAuc3ViLWl0ZW0tY29udGFpbmVyIC5zdWItaXRlbS1uYW1lIC50aW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY2Njtcbn1cbi5pdGVtLWxpc3QgLml0ZW0tY29udGFpbmVyIC5zdWItaXRlbS1saXN0IC5zdWItaXRlbS1jb250YWluZXIgLnN1Yi1pdGVtLWNoZWNrYm94IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmRvd24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAzMDBtcztcbn1cblxuLmNvbG9yLTY2NiB7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4uYWJvdXQtdXMtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiA2NXB4O1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTVweCAwO1xufVxuLmltYWdlLWNvbnRhaW5lciAuYWJvdXQtdXMtaW1hZ2UgLmZlZWQtc2xpZGVycyB7XG4gIGhlaWdodDogMzUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uaW1hZ2UtY29udGFpbmVyIC5hYm91dC11cy1pbWFnZSAuZmVlZC1zbGlkZXJzLmhlaWdodC0yMDAge1xuICBoZWlnaHQ6IDM1MHB4O1xufVxuLmltYWdlLWNvbnRhaW5lciAuYWJvdXQtdXMtaW1hZ2UgLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXIge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAzMGVtO1xufVxuLmltYWdlLWNvbnRhaW5lciAuYWJvdXQtdXMtaW1hZ2UgLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXIuZmVlZC1zbGlkZXItb25lIHtcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9zYW5kaHlhZGVlcDUucG5nXCIpO1xufVxuLmltYWdlLWNvbnRhaW5lciAuYWJvdXQtdXMtaW1hZ2UgLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXIuZmVlZC1zbGlkZXItdHdvIHtcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9zYW5kaHlhZGVlcDMucG5nXCIpO1xufVxuLmltYWdlLWNvbnRhaW5lciAuYWJvdXQtdXMtaW1hZ2UgLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXIuZmVlZC1zbGlkZXItdGhyZWUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL3NhbmRoeWFkZWVwMS5wbmdcIik7XG59XG4uaW1hZ2UtY29udGFpbmVyIC5hYm91dC11cy1pbWFnZSAuZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci5mZWVkLXNsaWRlci1mb3VyIHtcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9zYW5kaHlhZGVlcDIucG5nXCIpO1xufVxuLmltYWdlLWNvbnRhaW5lciAuYWJvdXQtdXMtaW1hZ2UgLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXIuZmVlZC1zbGlkZXItZml2ZSB7XG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvc2FuZGh5YWRlZXA2LnBuZ1wiKTtcbn1cbi5pbWFnZS1jb250YWluZXIgLmFib3V0LXVzLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMThweCAwIDVweDtcbn1cbi5pbWFnZS1jb250YWluZXIgLmFib3V0LXVzLWhlYWRpbmcgLmhlYWRpbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5pbWFnZS1jb250YWluZXIgLmFib3V0LXVzLWhlYWRpbmcgLnNsb2dhbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZGVzY3JpcHRpb24tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTVweCAwO1xufVxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lciAuZGVzY3JpcHRpb24tdG9nZ2xlLW1lbnVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lciAuZGVzY3JpcHRpb24tdG9nZ2xlLW1lbnVzIC50b2dnbGUtbWVudS1iYWNrZ3JvdW5kIHtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbn1cbi5kZXNjcmlwdGlvbi1jb250YWluZXIgLmRlc2NyaXB0aW9uLXRvZ2dsZS1tZW51cyAudG9nZ2xlLW1lbnUtYmFja2dyb3VuZC5hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2NjMmI1ZTtcbn1cbi5kZXNjcmlwdGlvbi1jb250YWluZXIgLmRlc2NyaXB0aW9uLXRvZ2dsZS1tZW51cyAudG9nZ2xlLW1lbnUtYmFja2dyb3VuZCAudG9nZ2xlLW1lbnUge1xuICBjb2xvcjogIzY2Njtcbn1cbi5kZXNjcmlwdGlvbi1jb250YWluZXIgLmRlc2NyaXB0aW9uLXRvZ2dsZS1tZW51cyAudG9nZ2xlLW1lbnUtYmFja2dyb3VuZCAudG9nZ2xlLW1lbnUuYWN0aXZlIHtcbiAgY29sb3I6ICM3NTNhODg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lciAuZGVzY3JpcHRpb24tZGF0YS1jb250YWluZXIge1xuICBwYWRkaW5nOiAxNXB4IDA7XG59XG4uZGVzY3JpcHRpb24tY29udGFpbmVyIC5kZXNjcmlwdGlvbi1kYXRhLWNvbnRhaW5lciAuYWJvdXQtdXMtcGFnZS1jb250YWluZXIgLnRhYi1jb250YWluZXIsIC5kZXNjcmlwdGlvbi1jb250YWluZXIgLmRlc2NyaXB0aW9uLWRhdGEtY29udGFpbmVyIC5vd25lci1jb250YWluZXIgLnRhYi1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lciAuZGVzY3JpcHRpb24tZGF0YS1jb250YWluZXIgLmFib3V0LXVzLXBhZ2UtY29udGFpbmVyIC5oZWFkaW5nLXRleHQsIC5kZXNjcmlwdGlvbi1jb250YWluZXIgLmRlc2NyaXB0aW9uLWRhdGEtY29udGFpbmVyIC5vd25lci1jb250YWluZXIgLmhlYWRpbmctdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lciAuZGVzY3JpcHRpb24tZGF0YS1jb250YWluZXIgLmFib3V0LXVzLXBhZ2UtY29udGFpbmVyIC5oZWFkaW5nLXRleHQgLmtub3ctbW9yZSwgLmRlc2NyaXB0aW9uLWNvbnRhaW5lciAuZGVzY3JpcHRpb24tZGF0YS1jb250YWluZXIgLm93bmVyLWNvbnRhaW5lciAuaGVhZGluZy10ZXh0IC5rbm93LW1vcmUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZGVzY3JpcHRpb24tY29udGFpbmVyIC5kZXNjcmlwdGlvbi1kYXRhLWNvbnRhaW5lciAuYWJvdXQtdXMtcGFnZS1jb250YWluZXIgLmNvbnRlbnQtZGl2LCAuZGVzY3JpcHRpb24tY29udGFpbmVyIC5kZXNjcmlwdGlvbi1kYXRhLWNvbnRhaW5lciAub3duZXItY29udGFpbmVyIC5jb250ZW50LWRpdiB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lciAuZGVzY3JpcHRpb24tZGF0YS1jb250YWluZXIgLmFib3V0LXVzLXBhZ2UtY29udGFpbmVyIC5waG9uZS1udW1iZXItZGl2LCAuZGVzY3JpcHRpb24tY29udGFpbmVyIC5kZXNjcmlwdGlvbi1kYXRhLWNvbnRhaW5lciAub3duZXItY29udGFpbmVyIC5waG9uZS1udW1iZXItZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lciAuZGVzY3JpcHRpb24tZGF0YS1jb250YWluZXIgLmFib3V0LXVzLXBhZ2UtY29udGFpbmVyIC5waG9uZS1udW1iZXItZGl2IC5waG9uZS1pY29uLCAuZGVzY3JpcHRpb24tY29udGFpbmVyIC5kZXNjcmlwdGlvbi1kYXRhLWNvbnRhaW5lciAub3duZXItY29udGFpbmVyIC5waG9uZS1udW1iZXItZGl2IC5waG9uZS1pY29uIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzUzYTg4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lciAuZGVzY3JpcHRpb24tZGF0YS1jb250YWluZXIgLmFib3V0LXVzLXBhZ2UtY29udGFpbmVyIC50aW1pbmcsIC5kZXNjcmlwdGlvbi1jb250YWluZXIgLmRlc2NyaXB0aW9uLWRhdGEtY29udGFpbmVyIC5vd25lci1jb250YWluZXIgLnRpbWluZyB7XG4gIGNvbG9yOiAjNjY2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi5kZXNjcmlwdGlvbi1jb250YWluZXIgLmRlc2NyaXB0aW9uLWRhdGEtY29udGFpbmVyIC5zZXJ2aWNlcy1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lciAuZGVzY3JpcHRpb24tZGF0YS1jb250YWluZXIgLnNlcnZpY2VzLWNvbnRhaW5lciAuaGVhZGluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lciAuZGVzY3JpcHRpb24tZGF0YS1jb250YWluZXIgLnByb2R1Y3QtY29udGFpbmVyIC5uby1kYXRhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4ucGFkZGluZy1ib3R0b20tMTUge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cbi5hcHBvaW50bWVudC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG4uYXBwb2ludG1lbnQtZm9vdGVyIC50b3RhbC1kaXYtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogI2QzZDNkMzdkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cbi5hcHBvaW50bWVudC1mb290ZXIgLnRvdGFsLWRpdi1jb250YWluZXIgLnRvdGFsLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYXBwb2ludG1lbnQtZm9vdGVyIC50b3RhbC1kaXYtY29udGFpbmVyIC50b3RhbC1kaXYgLnRvdGFsLWRpdi1wcmljZSB7XG4gIGNvbG9yOiAjNjY2O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLmRlZmF1bHQtYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDE1cHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjY2MyYjVlIDIlLCAjNzUzYTg4IDYzJSk7XG59XG4uZGVmYXVsdC1idXR0b24gYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmN1c3Rvbi1uYXYge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLnByZXYtaWNvbi1jdXN0b20ge1xuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9mcmVha3lqb2xseS5jb20vZGVtby9qcXVlcnkvT3dsQ2Fyb3VzZWwyL25hdi1pY29uLnBuZykgbm8tcmVwZWF0IHNjcm9sbCAwcHggMHB4O1xufVxuXG4ucHJldi1pY29uLWN1c3RvbS5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4ubmV4dC1pY29uLWN1c3RvbSB7XG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL2ZyZWFreWpvbGx5LmNvbS9kZW1vL2pxdWVyeS9Pd2xDYXJvdXNlbDIvbmF2LWljb24ucG5nKSBuby1yZXBlYXQgc2Nyb2xsIC0zMnB4IDBweDtcbn1cblxuLm5leHQtaWNvbi1jdXN0b20uZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjQ7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLnNsaWRlci1uYXYgaW9uLWljb24ge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zbGlkZS10ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvdHRvbTogMzBweDtcbn1cblxuLmlvbi1pbWFnZS1zbGlkZXMge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiA1cHggMDtcbn1cblxuLmN1c3RvbS1zbGlkZSB7XG4gIG1hcmdpbjogMCA1cHg7XG59XG5cbi5rbm93LW1vcmUge1xuICBjb2xvcjogIzY2Njtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/about-us/about-us.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/about-us/about-us.page.ts ***!
    \*************************************************/

  /*! exports provided: AboutUsPage */

  /***/
  function srcAppPagesAboutUsAboutUsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutUsPage", function () {
      return AboutUsPage;
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


    var _shared_components_modal_popup_modal_popup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared-components/modal-popup/modal-popup.page */
    "./src/app/shared-components/modal-popup/modal-popup.page.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AboutUsPage = /*#__PURE__*/function () {
      function AboutUsPage(modalController, router) {
        _classCallCheck(this, AboutUsPage);

        this.modalController = modalController;
        this.router = router;
        this.slideOpts = {
          initialSlide: 1,
          speed: 400,
          autoplay: true
        };
        this.show = true;
        this.selectedMenu = 'about_us'; //Configuration for each Slider

        this.slideOptsOne = {
          initialSlide: 0,
          slidesPerView: 1,
          autoplay: true
        };
        this.slideOptsTwo = {
          initialSlide: 1,
          slidesPerView: 2,
          loop: true,
          centeredSlides: true,
          spaceBetween: 20
        };
        this.slideOptsThree = {
          initialSlide: 0,
          slidesPerView: 3
        };
        this.slides = [{
          img: "assets/work1.jpg"
        }, {
          img: "assets/work2.jpg"
        }, {
          img: "assets/work3.jpg"
        }, {
          img: "assets/work6.jpg"
        }, {
          img: "assets/work7.jpg"
        }];
        this.slideConfig = {
          "slidesToShow": 3,
          "slidesToScroll": 1,
          "dots": false,
          "infinite": true,
          "autoplay": true,
          "autoplaySpeed": 1500
        }; //Item object for Nature

        this.sliderOne = {
          isBeginningSlide: true,
          isEndSlide: false,
          slidesItems: [{
            id: 995
          }, {
            id: 925
          }, {
            id: 940
          }, {
            id: 943
          }, {
            id: 944
          }]
        }; //Item object for Food

        this.sliderTwo = {
          isBeginningSlide: true,
          isEndSlide: false,
          slidesItems: [{
            url: 'assets/deepaa1.jpg'
          }, {
            url: 'assets/deepaa2.jpg'
          }, {
            url: 'assets/deepaa3.jpg'
          }, {
            url: 'assets/deepaa4.jpg'
          }, {
            url: 'assets/deepaa6.jpg'
          }]
        }; //Item object for Fashion

        this.sliderThree = {
          isBeginningSlide: true,
          isEndSlide: false,
          slidesItems: [{
            id: 643
          }, {
            id: 532
          }, {
            id: 232
          }, {
            id: 874
          }, {
            id: 193
          }]
        };
      }

      _createClass(AboutUsPage, [{
        key: "openModal",
        value: function openModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this10 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _shared_components_modal_popup_modal_popup_page__WEBPACK_IMPORTED_MODULE_3__["ModalPopupPage"],
                      componentProps: {
                        "paramID": 123,
                        "paramTitle": "Test Title"
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (dataReturned) {
                      if (dataReturned !== null) {
                        _this10.dataReturned = dataReturned.data; //alert('Modal Sent Data :'+ dataReturned);
                      }
                    });
                    _context.next = 6;
                    return modal.present();

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onSelectMenu",
        value: function onSelectMenu(key) {
          this.selectedMenu = key;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onBookAppointment",
        value: function onBookAppointment() {
          console.log('here');
        } //Move to Next slide

      }, {
        key: "slideNext",
        value: function slideNext(object, slideView) {
          var _this11 = this;

          slideView.slideNext(500).then(function () {
            _this11.checkIfNavDisabled(object, slideView);
          });
        } //Move to previous slide

      }, {
        key: "slidePrev",
        value: function slidePrev(object, slideView) {
          var _this12 = this;

          slideView.slidePrev(500).then(function () {
            _this12.checkIfNavDisabled(object, slideView);
          });
        } //Call methods to check if slide is first or last to enable disbale navigation

      }, {
        key: "checkIfNavDisabled",
        value: function checkIfNavDisabled(object, slideView) {
          this.checkisBeginning(object, slideView);
          this.checkisEnd(object, slideView);
        }
      }, {
        key: "checkisBeginning",
        value: function checkisBeginning(object, slideView) {
          slideView.isBeginning().then(function (istrue) {
            object.isBeginningSlide = istrue;
          });
        }
      }, {
        key: "checkisEnd",
        value: function checkisEnd(object, slideView) {
          slideView.isEnd().then(function (isTrue) {
            object.isEndSlide = isTrue;
          });
        } //Method called when slide is changed by drag or navigation

      }, {
        key: "SlideDidChange",
        value: function SlideDidChange(object, slideView) {
          this.checkIfNavDisabled(object, slideView);
        }
      }, {
        key: "addSlide",
        value: function addSlide() {
          this.slides.push({
            img: "http://placehold.it/350x150/777777"
          });
        }
      }, {
        key: "removeSlide",
        value: function removeSlide() {
          this.slides.length = this.slides.length - 1;
        }
      }, {
        key: "slickInit",
        value: function slickInit(e) {
          console.log('slick initialized');
        }
      }, {
        key: "breakpoint",
        value: function breakpoint(e) {
          console.log('breakpoint');
        }
      }, {
        key: "afterChange",
        value: function afterChange(e) {
          console.log('afterChange');
        }
      }, {
        key: "beforeChange",
        value: function beforeChange(e) {
          console.log('beforeChange');
        }
      }, {
        key: "onSeeAllPortfolios",
        value: function onSeeAllPortfolios() {
          this.router.navigate(['home/portfolio']);
        }
      }]);

      return AboutUsPage;
    }();

    AboutUsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideWithNav', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], AboutUsPage.prototype, "slideWithNav", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideWithNav2', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], AboutUsPage.prototype, "slideWithNav2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideWithNav3', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], AboutUsPage.prototype, "slideWithNav3", void 0);
    AboutUsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about-us',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about-us.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about-us.page.scss */
      "./src/app/pages/about-us/about-us.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], AboutUsPage);
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL21vZGFsLXBvcHVwL21vZGFsLXBvcHVwLnBhZ2Uuc2NzcyJ9 */";
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
      }

      _createClass(ModalPopupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.table(this.navParams);
          this.modelId = this.navParams.data.paramID;
          this.modalTitle = this.navParams.data.paramTitle;
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var onClosedData;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    onClosedData = "Wrapped Up!";
                    _context2.next = 3;
                    return this.modalController.dismiss(onClosedData);

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
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
//# sourceMappingURL=pages-about-us-about-us-module-es5.js.map