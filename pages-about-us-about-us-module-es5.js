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


    __webpack_exports__["default"] = "<search-header></search-header>\r\n<ion-content>\r\n    <div class=\"about-us-container\">\r\n        <div class=\"image-container\">\r\n            <div class=\"about-us-image\">\r\n                <ion-slides class=\"feed-sliders height-350\" pager=\"true\" [options]=\"slideOpts\">\r\n                    <ion-slide class=\"feed-images feed-slider feed-slider-one\">\r\n\r\n                    </ion-slide>\r\n                    <ion-slide class=\"feed-images feed-slider feed-slider-two\">\r\n\r\n                    </ion-slide>\r\n                    <ion-slide class=\"feed-images feed-slider feed-slider-three\">\r\n\r\n                    </ion-slide>\r\n                    <ion-slide class=\"feed-images feed-slider feed-slider-four\">\r\n\r\n                    </ion-slide>\r\n                    <ion-slide class=\"feed-images feed-slider feed-slider-five\">\r\n\r\n                    </ion-slide>\r\n                </ion-slides>\r\n            </div>\r\n            <div class=\"about-us-heading\">\r\n                <div class=\"heading-text\">\r\n                    <b>Sandhyadeep Beauty Parlour</b>\r\n                </div>\r\n                <div class=\"slogan-text\">\r\n                    Have a hair affair with us\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"description-container\">\r\n            <div class=\"description-toggle-menus\">\r\n                <div matRipple [matRippleCentered]=\"true\" (click)=\"onSelectMenu('about_us')\"\r\n                     class=\"toggle-menu-background about-us\"\r\n                     [class.active]=\"selectedMenu === 'about_us'\">\r\n                    <div class=\"toggle-menu\" [class.active]=\"selectedMenu === 'about_us'\">About Us</div>\r\n                </div>\r\n                <div matRipple [matRippleCentered]=\"true\" (click)=\"onSelectMenu('services')\"\r\n                     class=\"toggle-menu-background services\"\r\n                     [class.active]=\"selectedMenu === 'services'\">\r\n                    <div class=\"toggle-menu\" [class.active]=\"selectedMenu === 'services'\">Services</div>\r\n                </div>\r\n                <div matRipple [matRippleCentered]=\"true\" (click)=\"onSelectMenu('owner')\"\r\n                     class=\"toggle-menu-background owner\"\r\n                     [class.active]=\"selectedMenu === 'owner'\">\r\n                    <div class=\"toggle-menu\" [class.active]=\"selectedMenu === 'owner'\">Our Owner</div>\r\n                </div>\r\n                <div matRipple [matRippleCentered]=\"true\" (click)=\"onSelectMenu('products')\"\r\n                     class=\"toggle-menu-background product\"\r\n                     [class.active]=\"selectedMenu === 'products'\">\r\n                    <div class=\"toggle-menu\" [class.active]=\"selectedMenu === 'products'\">Products</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"description-data-container\">\r\n                <div *ngIf=\"selectedMenu === 'about_us'\" class=\"about-us-page-container\">\r\n                    <div class=\"tab-container border-bottom\">\r\n                        <div class=\"heading-text\">\r\n                            <b>Description</b>\r\n                        </div>\r\n                        <div class=\"content-div\">\r\n                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to\r\n                            demonstrate the visual form of a document or a typeface without relying on meaningful conte\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"tab-container\">\r\n                        <div class=\"heading-text\">\r\n                            <b>Information</b>\r\n                        </div>\r\n                        <div class=\"timing\">\r\n                            <div>Sunday - Friday</div>\r\n                            <div>10:00 AM - 07:00 PM</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"tab-container margin-bottom-20\">\r\n                        <div class=\"content-div\">\r\n                            5595, Near Samarth Vidya Mandir, Anandi Bazar, Ahmednagar, Maharashtra, 414001\r\n                        </div>\r\n                        <div class=\"phone-number-div\">\r\n                            <div>+91-9422086335</div>\r\n                            <div>\r\n                                <div class=\"phone-icon\">\r\n                                    <i class=\"fa fa-phone\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"selectedMenu === 'services'\" class=\"services-container\">\r\n                    <div class=\"page-container\">\r\n                        <service-list (updateAmount)=\"updateData($event)\"></service-list>\r\n                    </div>\r\n                    <ion-footer *ngIf=\"selectedMenu === 'services'\" class=\"ion-no-border\">\r\n                        <ion-toolbar>\r\n                            <div class=\"appointment-footer\">\r\n                                <div class=\"total-div-container\">\r\n                                    <div class=\"total-div\">\r\n                                        <div>Total</div>\r\n                                        <div class=\"total-div-price\">{{selectedServices}} Services</div>\r\n                                    </div>\r\n                                    <div>\r\n                                        {{amountPurchased}} ₹\r\n                                    </div>\r\n                                </div>\r\n                                <div (click)=\"onBookAppointment()\" class=\"default-button\">\r\n                                    <button> Book Appointment</button>\r\n                                </div>\r\n                            </div>\r\n                        </ion-toolbar>\r\n                    </ion-footer>\r\n                </div>\r\n                <div *ngIf=\"selectedMenu === 'owner'\" class=\"owner-container\">\r\n                    <div class=\"ion-image-slides border-bottom\">\r\n                        <ion-grid>\r\n                            <ion-row>\r\n                                <!--                                <ion-col size=\"1\">-->\r\n                                <!--                                <span class=\"slider-nav arrow-prev\" (click)=\"slidePrev(sliderTwo,slideWithNav2)\">-->\r\n                                <!--                                  <div class=\"prev-icon-custom custon-nav\" [class.disabled]=\"sliderTwo.isBeginningSlide\"></div>-->\r\n                                <!--                                </span>-->\r\n                                <!--                                </ion-col>-->\r\n                                <div class=\"scroll-arrow arrow-left\" (click)=\"slidePrev(sliderTwo,slideWithNav2)\">\r\n                                    <i class=\"fa fa-angle-left\"></i>\r\n                                </div>\r\n                                <ion-col size=\"12\">\r\n                                    <ion-slides pager=\"false\" [options]=\"slideOptsTwo\" #slideWithNav2\r\n                                                (ionSlideDidChange)=\"SlideDidChange(sliderTwo,slideWithNav2)\">\r\n                                        <ion-slide *ngFor=\"let slide of sliderTwo.slidesItems\">\r\n                                            <img style=\"object-fit: cover\" src={{slide.url}} imageViewer/>\r\n                                        </ion-slide>\r\n                                    </ion-slides>\r\n                                </ion-col>\r\n                                <div class=\"scroll-arrow arrow-right\" (click)=\"slideNext(sliderTwo,slideWithNav2)\">\r\n                                    <i class=\"fa fa-angle-right\"></i>\r\n                                </div>\r\n                                <!--                                <ion-col size=\"1\">-->\r\n                                <!--                                <span class=\"slider-nav arrow-next\" (click)=\"slideNext(sliderTwo,slideWithNav2)\">-->\r\n                                <!--                                  <div class=\"next-icon-custom custon-nav\" [class.disabled]=\"sliderTwo.isEndSlide\"></div>-->\r\n                                <!--                                </span>-->\r\n                                <!--                                </ion-col>-->\r\n                            </ion-row>\r\n                        </ion-grid>\r\n                    </div>\r\n\r\n                    <div class=\"tab-container border-bottom\">\r\n                        <div class=\"heading-text\">\r\n                            <b>Description</b>\r\n                        </div>\r\n                        <div class=\"content-div\">\r\n                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to\r\n                            demonstrate the visual form of a document or a typeface without relying on meaningful conte\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"tab-container border-bottom\">\r\n                        <div class=\"heading-text\">\r\n                            <b>Achievements</b>\r\n                        </div>\r\n                        <div class=\"content-div\">\r\n                            <ul>\r\n                                <li>Media & Beauty Makeup Diploma · Media Makeup · Fsx · Singapore</li>\r\n                                <li>Makeup Techniques with Air Brush Machine · Mumbai, Maharashtra</li>\r\n                                <li>Master Diploma in Makeup Artistry · Singapore</li>\r\n                                <li>Comite International D’Esthetique Et De Cosmetologie., Zurich.</li>\r\n                                <li>British Association of Beauty Therapy & Cosmetology, London.</li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"tab-container\">\r\n                        <div class=\"heading-text\">\r\n                            <b>Portfolio</b>\r\n                            <div (click)=\"onSeeAllPortfolios()\" class=\"know-more\">See All <i\r\n                                    class=\"fa fa-angle-right\"></i></div>\r\n                        </div>\r\n                        <div class=\"content-div\">\r\n                            <ngx-slick-carousel class=\"carousel\"\r\n                                                #slickModal=\"slick-carousel\"\r\n                                                [config]=\"slideConfig\"\r\n                                                (init)=\"slickInit($event)\"\r\n                                                (breakpoint)=\"breakpoint($event)\"\r\n                                                (afterChange)=\"afterChange($event)\"\r\n                                                (beforeChange)=\"beforeChange($event)\">\r\n                                <div ngxSlickItem *ngFor=\"let slide of slides\" class=\"slide custom-slide\">\r\n                                    <img src=\"{{ slide.img }}\" alt=\"\" width=\"100%\">\r\n                                </div>\r\n                            </ngx-slick-carousel>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"selectedMenu === 'products'\" class=\"product-container\">\r\n                    <div *ngIf=\"productList?.length > 0\">\r\n                        <app-product-list [productList]=\"productList\"></app-product-list>\r\n                    </div>\r\n                    <div *ngIf=\"productList?.length === 0\" class=\"no-data\">\r\n                        No Products Available\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <script id=\"image-modal.html\" type=\"text/ng-template\">\r\n        <div class=\"modal image-modal transparent\" ng-click=\"closeModal()\">\r\n            <ion-pane class=\"transparent\">\r\n                <img ng-src=\"{{imageSrc}}\" class=\"fullscreen-image\"/>\r\n            </ion-pane>\r\n        </div>\r\n    </script>\r\n</ion-content>\r\n\r\n";
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
    /* harmony import */


    var _shared_components_search_header_component_search_header_component_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../shared-components/search-header-component/search-header-component.module */
    "./src/app/shared-components/search-header-component/search-header-component.module.ts");
    /* harmony import */


    var _shared_components_services_list_services_list_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../shared-components/services-list/services-list.module */
    "./src/app/shared-components/services-list/services-list.module.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _shared_components_product_list_product_list_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../shared-components/product-list/product-list.module */
    "./src/app/shared-components/product-list/product-list.module.ts");

    var AboutUsPageModule = function AboutUsPageModule() {
      _classCallCheck(this, AboutUsPageModule);
    };

    AboutUsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _about_us_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutUsPageRoutingModule"], _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"], _services_services_module__WEBPACK_IMPORTED_MODULE_8__["ServicePageModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_9__["SlickCarouselModule"], _shared_components_modal_popup_modal_popup_module__WEBPACK_IMPORTED_MODULE_10__["ModalPopupModule"], _shared_components_search_header_component_search_header_component_module__WEBPACK_IMPORTED_MODULE_12__["SearchHeaderComponentModule"], _shared_components_services_list_services_list_module__WEBPACK_IMPORTED_MODULE_13__["ServicesListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"], _shared_components_product_list_product_list_module__WEBPACK_IMPORTED_MODULE_15__["ProductListModule"]],
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


    __webpack_exports__["default"] = ".top-adjust {\n  top: 65px;\n}\n\n.page-container {\n  padding: 0 15px;\n}\n\n.page-container .page-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 18px 0 5px;\n}\n\n.page-container .page-heading .heading-text {\n  font-size: 24px;\n}\n\n.down {\n  transform: rotate(90deg);\n  -webkit-transform: rotate(90deg);\n  transition: ease-in-out 300ms;\n}\n\n.color-666 {\n  color: #666;\n}\n\n.about-us-container {\n  padding: 0 15px;\n}\n\n.image-container {\n  padding: 15px 0;\n}\n\n.image-container .about-us-image .feed-sliders {\n  height: 350px;\n  border-radius: 10px;\n}\n\n.image-container .about-us-image .feed-sliders.height-200 {\n  height: 350px;\n}\n\n.image-container .about-us-image .feed-sliders .feed-slider {\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-position: center center !important;\n  max-height: 30em;\n}\n\n.image-container .about-us-image .feed-sliders .feed-slider.feed-slider-one {\n  background: url('sandhyadeep5.png');\n}\n\n.image-container .about-us-image .feed-sliders .feed-slider.feed-slider-two {\n  background: url('sandhyadeep3.png');\n}\n\n.image-container .about-us-image .feed-sliders .feed-slider.feed-slider-three {\n  background: url('sandhyadeep1.png');\n}\n\n.image-container .about-us-image .feed-sliders .feed-slider.feed-slider-four {\n  background: url('sandhyadeep2.png');\n}\n\n.image-container .about-us-image .feed-sliders .feed-slider.feed-slider-five {\n  background: url('sandhyadeep6.png');\n}\n\n.image-container .about-us-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  margin: 18px 0 5px;\n}\n\n.image-container .about-us-heading .heading-text {\n  font-size: 20px;\n}\n\n.image-container .about-us-heading .slogan-text {\n  font-size: 14px;\n}\n\n.description-container {\n  padding: 15px 0 0;\n}\n\n.description-container .description-toggle-menus {\n  display: flex;\n  justify-content: space-between;\n}\n\n.description-container .description-toggle-menus .toggle-menu-background {\n  padding-bottom: 4px;\n  width: 25%;\n  text-align: center;\n  transition: all 0.1s;\n}\n\n.description-container .description-toggle-menus .toggle-menu-background.active {\n  border-bottom: 3px solid #e95c8f;\n}\n\n.description-container .description-toggle-menus .toggle-menu-background .toggle-menu {\n  color: #666;\n}\n\n.description-container .description-toggle-menus .toggle-menu-background .toggle-menu.active {\n  color: #614d7f;\n  font-weight: bold;\n}\n\n.description-container .description-data-container {\n  padding: 5px 0 0;\n}\n\n.about-us-page-container .tab-container, .owner-container .tab-container {\n  margin-bottom: 10px;\n  padding-bottom: 5px;\n}\n\n.about-us-page-container .heading-text, .owner-container .heading-text {\n  display: flex;\n  justify-content: space-between;\n  font-size: 20px;\n  align-items: center;\n}\n\n.about-us-page-container .heading-text .know-more, .owner-container .heading-text .know-more {\n  font-size: 14px;\n}\n\n.about-us-page-container .content-div, .owner-container .content-div {\n  padding: 5px 0;\n  font-size: 14px;\n}\n\n.about-us-page-container .phone-number-div, .owner-container .phone-number-div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.about-us-page-container .phone-number-div .phone-icon, .owner-container .phone-number-div .phone-icon {\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  background-color: #614d7f;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n}\n\n.about-us-page-container .timing, .owner-container .timing {\n  color: #666;\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 0;\n}\n\n.services-container {\n  margin-bottom: 10px;\n}\n\n.services-container .heading-text {\n  font-size: 20px;\n}\n\n.product-container .no-data {\n  text-align: center;\n  padding: 30px 0;\n  color: #666;\n}\n\n.padding-bottom-15 {\n  padding-bottom: 15px !important;\n}\n\n.border-bottom {\n  border-bottom: 1px solid lightgray;\n}\n\n.appointment-footer {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 15px 0;\n}\n\n.appointment-footer .total-div-container {\n  display: flex;\n  padding: 10px;\n  background: #d3d3d37d;\n  justify-content: space-between;\n  border-radius: 7px;\n}\n\n.appointment-footer .total-div-container .total-div {\n  display: flex;\n}\n\n.appointment-footer .total-div-container .total-div .total-div-price {\n  color: #666;\n  margin-left: 15px;\n}\n\n.custon-nav {\n  height: 48px;\n  width: 20px;\n  cursor: pointer;\n  vertical-align: middle;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.prev-icon-custom {\n  background: url(https://freakyjolly.com/demo/jquery/OwlCarousel2/nav-icon.png) no-repeat scroll 0px 0px;\n}\n\n.prev-icon-custom.disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n\n.next-icon-custom {\n  background: url(https://freakyjolly.com/demo/jquery/OwlCarousel2/nav-icon.png) no-repeat scroll -32px 0px;\n}\n\n.next-icon-custom.disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n\n.slider-nav ion-icon {\n  height: 100%;\n}\n\n.slide-text {\n  position: absolute;\n  color: white;\n  bottom: 30px;\n}\n\nion-grid ion-row {\n  position: relative;\n}\n\nion-grid ion-row .ion-image-slides {\n  margin-bottom: 10px;\n  padding: 5px 0;\n}\n\n.scroll-arrow {\n  display: flex;\n  align-items: center;\n  font-size: 35px;\n  padding: 0 16px;\n  color: white;\n  position: absolute;\n  z-index: 99999;\n  height: 100%;\n  width: 50%;\n}\n\n.scroll-arrow.arrow-left {\n  background: linear-gradient(to right, #2f3032d1, #2f30327a, transparent, transparent, transparent);\n}\n\n.scroll-arrow.arrow-right {\n  justify-content: flex-end;\n  background: linear-gradient(to left, #2f3032d1, #2f30327a, transparent, transparent, transparent);\n  left: 50%;\n}\n\n.custom-slide {\n  margin: 0 5px;\n}\n\n.know-more {\n  color: #666;\n}\n\n.margin-bottom-20 {\n  margin-bottom: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQtdXMvQzpcXFVzZXJzXFxhYWJoYWd3YVxcc2FuZGh5YWRlZXAgaW9uaWMgc3RhY2svc3JjXFxhcHBcXHBhZ2VzXFxhYm91dC11c1xcYWJvdXQtdXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hYm91dC11cy9hYm91dC11cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0k7RUFDRSxlQUFBO0FDQ047O0FES0E7RUFDRSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUNGRjs7QURLQTtFQUNFLFdBQUE7QUNGRjs7QURNQTtFQUNFLGVBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7QUNIRjs7QURNSTtFQUNFLGFBQUE7RUFTQSxtQkFBQTtBQ1pOOztBRFFNO0VBQ0UsYUFBQTtBQ05SOztBRFdNO0VBQ0UsdUNBQUE7RUFDQSxpQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsZ0JBQUE7QUNUUjs7QURXUTtFQUNFLG1DQUFBO0FDVFY7O0FEWVE7RUFDRSxtQ0FBQTtBQ1ZWOztBRGFRO0VBQ0UsbUNBQUE7QUNYVjs7QURjUTtFQUNFLG1DQUFBO0FDWlY7O0FEZVE7RUFDRSxtQ0FBQTtBQ2JWOztBRG1CRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ2pCSjs7QURtQkk7RUFDRSxlQUFBO0FDakJOOztBRG9CSTtFQUNFLGVBQUE7QUNsQk47O0FEdUJBO0VBQ0UsaUJBQUE7QUNwQkY7O0FEc0JFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDcEJKOztBRHNCSTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNwQk47O0FEcUJNO0VBQ0UsZ0NBQUE7QUNuQlI7O0FEc0JNO0VBQ0UsV0FBQTtBQ3BCUjs7QURzQlE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNwQlY7O0FEdUNFO0VBQ0UsZ0JBQUE7QUNyQ0o7O0FENENFO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBQ3pDSjs7QUQ2Q0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUMzQ0o7O0FENENJO0VBQ0UsZUFBQTtBQzFDTjs7QUQ4Q0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQzVDSjs7QUQrQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQzdDSjs7QUQrQ0k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUM3Q047O0FEaURFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUMvQ0o7O0FEbURBO0VBQ0UsbUJBQUE7QUNoREY7O0FEa0RFO0VBQ0UsZUFBQTtBQ2hESjs7QUR5REU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDdERKOztBRDBEQTtFQUNFLCtCQUFBO0FDdkRGOztBRDBEQTtFQUNFLGtDQUFBO0FDdkRGOztBRDBEQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDdkRGOztBRHlERTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FDdkRKOztBRHlESTtFQUNFLGFBQUE7QUN2RE47O0FEeURNO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDdkRSOztBRDhEQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUVBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUM1REY7O0FEOERBO0VBQ0UsdUdBQUE7QUMzREY7O0FENkRBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUMxREY7O0FENERBO0VBQ0UseUdBQUE7QUN6REY7O0FEMkRBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUN4REY7O0FEMkRFO0VBQ0UsWUFBQTtBQ3hESjs7QUQ0REE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDekRGOztBRCtERTtFQUNFLGtCQUFBO0FDNURKOztBRDZESTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQzNEUjs7QURnRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQzdERjs7QUQ4REU7RUFDRSxrR0FBQTtBQzVESjs7QUQ4REU7RUFDRSx5QkFBQTtFQUNBLGlHQUFBO0VBQ0EsU0FBQTtBQzVESjs7QURzRkE7RUFDRSxhQUFBO0FDbkZGOztBRHNGQTtFQUNFLFdBQUE7QUNuRkY7O0FEc0ZBO0VBQ0UsOEJBQUE7QUNuRkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hYm91dC11cy9hYm91dC11cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLWFkanVzdCB7XHJcbiAgdG9wOiA2NXB4O1xyXG59XHJcblxyXG4ucGFnZS1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDAgMTVweDtcclxuXHJcbiAgLnBhZ2UtaGVhZGluZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMThweCAwIDVweDtcclxuXHJcbiAgICAuaGVhZGluZy10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi5kb3duIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMzAwbXM7XHJcbn1cclxuXHJcbi5jb2xvci02NjYge1xyXG4gIGNvbG9yOiAjNjY2O1xyXG59XHJcblxyXG5cclxuLmFib3V0LXVzLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMCAxNXB4O1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcblxyXG4gIC5hYm91dC11cy1pbWFnZSB7XHJcbiAgICAuZmVlZC1zbGlkZXJzIHtcclxuICAgICAgaGVpZ2h0OiAzNTBweDtcclxuXHJcbiAgICAgICYuaGVpZ2h0LTM1MCB7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuaGVpZ2h0LTIwMCB7XHJcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICAgIC5mZWVkLXNsaWRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMzBlbTtcclxuXHJcbiAgICAgICAgJi5mZWVkLXNsaWRlci1vbmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9zYW5kaHlhZGVlcDUucG5nXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5mZWVkLXNsaWRlci10d28ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9zYW5kaHlhZGVlcDMucG5nXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5mZWVkLXNsaWRlci10aHJlZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL3NhbmRoeWFkZWVwMS5wbmdcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmZlZWQtc2xpZGVyLWZvdXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9zYW5kaHlhZGVlcDIucG5nXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5mZWVkLXNsaWRlci1maXZlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvc2FuZGh5YWRlZXA2LnBuZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hYm91dC11cy1oZWFkaW5nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogMThweCAwIDVweDtcclxuXHJcbiAgICAuaGVhZGluZy10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zbG9nYW4tdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE1cHggMCAwO1xyXG5cclxuICAuZGVzY3JpcHRpb24tdG9nZ2xlLW1lbnVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgLnRvZ2dsZS1tZW51LWJhY2tncm91bmQge1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgICB3aWR0aDogMjUlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjFzO1xyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNlOTVjOGY7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50b2dnbGUtbWVudSB7XHJcbiAgICAgICAgY29sb3I6ICM2NjY7XHJcblxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgIGNvbG9yOiAjNjE0ZDdmO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmFib3V0LXVzIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnNlcnZpY2VzIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYub3duZXIge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5wcm9kdWN0IHtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kZXNjcmlwdGlvbi1kYXRhLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiA1cHggMCAwO1xyXG5cclxuXHJcbiAgfVxyXG5cclxufVxyXG4uYWJvdXQtdXMtcGFnZS1jb250YWluZXIsIC5vd25lci1jb250YWluZXIge1xyXG4gIC50YWItY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC5oZWFkaW5nLXRleHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAua25vdy1tb3JlIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQtZGl2IHtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgLnBob25lLW51bWJlci1kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLnBob25lLWljb24ge1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MTRkN2Y7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGltaW5nIHtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gIH1cclxufVxyXG5cclxuLnNlcnZpY2VzLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgLmhlYWRpbmctdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ub3duZXItY29udGFpbmVyIHtcclxuXHJcbn1cclxuXHJcbi5wcm9kdWN0LWNvbnRhaW5lciB7XHJcbiAgLm5vLWRhdGEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMzBweCAwO1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgfVxyXG59XHJcblxyXG4ucGFkZGluZy1ib3R0b20tMTUge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXItYm90dG9tIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG59XHJcblxyXG4uYXBwb2ludG1lbnQtZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogMTBweCAxNXB4IDA7XHJcblxyXG4gIC50b3RhbC1kaXYtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2QzZDNkMzdkO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG5cclxuICAgIC50b3RhbC1kaXYge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgLnRvdGFsLWRpdi1wcmljZSB7XHJcbiAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIFNsaWRlciBTdHlsZSBTVEFSVFxyXG4uY3VzdG9uLW5hdntcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuLnByZXYtaWNvbi1jdXN0b217XHJcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vZnJlYWt5am9sbHkuY29tL2RlbW8vanF1ZXJ5L093bENhcm91c2VsMi9uYXYtaWNvbi5wbmcpIG5vLXJlcGVhdCBzY3JvbGwgMHB4IDBweDtcclxufVxyXG4ucHJldi1pY29uLWN1c3RvbS5kaXNhYmxlZHtcclxuICBvcGFjaXR5OiAwLjQ7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcbi5uZXh0LWljb24tY3VzdG9te1xyXG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL2ZyZWFreWpvbGx5LmNvbS9kZW1vL2pxdWVyeS9Pd2xDYXJvdXNlbDIvbmF2LWljb24ucG5nKSBuby1yZXBlYXQgc2Nyb2xsIC0zMnB4IDBweDtcclxufVxyXG4ubmV4dC1pY29uLWN1c3RvbS5kaXNhYmxlZHtcclxuICBvcGFjaXR5OiAwLjQ7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcbi5zbGlkZXItbmF2e1xyXG4gIGlvbi1pY29ue1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLnNsaWRlLXRleHR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi8vIFN0eWxpbmcgdG8gc2hvdyB0aGUgYXJyb3cgb24gc2xpZGVzIC0gc3RhcnRcclxuXHJcbmlvbi1ncmlkIHtcclxuICBpb24tcm93IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5pb24taW1hZ2Utc2xpZGVzIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNjcm9sbC1hcnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiA5OTk5OTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDUwJTtcclxuICAmLmFycm93LWxlZnQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMmYzMDMyZDEsICMyZjMwMzI3YSwgdHJhbnNwYXJlbnQsIHRyYW5zcGFyZW50LCB0cmFuc3BhcmVudCk7XHJcbiAgfVxyXG4gICYuYXJyb3ctcmlnaHQge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMmYzMDMyZDEsICMyZjMwMzI3YSwgdHJhbnNwYXJlbnQsIHRyYW5zcGFyZW50LCB0cmFuc3BhcmVudCk7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTdHlsaW5nIHRvIHNob3cgdGhlIGFycm93IG9uIHNsaWRlcyAtIGVuZFxyXG5cclxuLy8gU3R5bGluZyB0byBzaG93IHRoZSBhcnJvdyBvbiBvdXRzaWRlIC0gc3RhcnRcclxuXHJcbi8vLmlvbi1pbWFnZS1zbGlkZXMge1xyXG4vLyAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuLy8gIHBhZGRpbmc6IDVweCAwO1xyXG4vLyAgLnNjcm9sbC1hcnJvdyB7XHJcbi8vICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICBmb250LXNpemU6IDMwcHg7XHJcbi8vICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4vLyAgICBjb2xvcjogIzY2NjtcclxuLy8gIH1cclxuLy99XHJcblxyXG4vLyBTdHlsaW5nIHRvIHNob3cgdGhlIGFycm93IG9uIG91dHNpZGUgLSBlbmRcclxuXHJcbi8vIFNsaWRlciBTdHlsZSBTVE9QXHJcbi8vXHJcblxyXG4uY3VzdG9tLXNsaWRlIHtcclxuICBtYXJnaW46IDAgNXB4O1xyXG59XHJcblxyXG4ua25vdy1tb3JlIHtcclxuICBjb2xvcjogIzY2NjtcclxufVxyXG5cclxuLm1hcmdpbi1ib3R0b20tMjAge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4iLCIudG9wLWFkanVzdCB7XG4gIHRvcDogNjVweDtcbn1cblxuLnBhZ2UtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuLnBhZ2UtY29udGFpbmVyIC5wYWdlLWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMThweCAwIDVweDtcbn1cbi5wYWdlLWNvbnRhaW5lciAucGFnZS1oZWFkaW5nIC5oZWFkaW5nLXRleHQge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5kb3duIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMzAwbXM7XG59XG5cbi5jb2xvci02NjYge1xuICBjb2xvcjogIzY2Njtcbn1cblxuLmFib3V0LXVzLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHggMDtcbn1cbi5pbWFnZS1jb250YWluZXIgLmFib3V0LXVzLWltYWdlIC5mZWVkLXNsaWRlcnMge1xuICBoZWlnaHQ6IDM1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmltYWdlLWNvbnRhaW5lciAuYWJvdXQtdXMtaW1hZ2UgLmZlZWQtc2xpZGVycy5oZWlnaHQtMjAwIHtcbiAgaGVpZ2h0OiAzNTBweDtcbn1cbi5pbWFnZS1jb250YWluZXIgLmFib3V0LXVzLWltYWdlIC5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXIgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMzBlbTtcbn1cbi5pbWFnZS1jb250YWluZXIgLmFib3V0LXVzLWltYWdlIC5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLmZlZWQtc2xpZGVyLW9uZSB7XG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvc2FuZGh5YWRlZXA1LnBuZ1wiKTtcbn1cbi5pbWFnZS1jb250YWluZXIgLmFib3V0LXVzLWltYWdlIC5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLmZlZWQtc2xpZGVyLXR3byB7XG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvc2FuZGh5YWRlZXAzLnBuZ1wiKTtcbn1cbi5pbWFnZS1jb250YWluZXIgLmFib3V0LXVzLWltYWdlIC5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLmZlZWQtc2xpZGVyLXRocmVlIHtcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9zYW5kaHlhZGVlcDEucG5nXCIpO1xufVxuLmltYWdlLWNvbnRhaW5lciAuYWJvdXQtdXMtaW1hZ2UgLmZlZWQtc2xpZGVycyAuZmVlZC1zbGlkZXIuZmVlZC1zbGlkZXItZm91ciB7XG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvc2FuZGh5YWRlZXAyLnBuZ1wiKTtcbn1cbi5pbWFnZS1jb250YWluZXIgLmFib3V0LXVzLWltYWdlIC5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLmZlZWQtc2xpZGVyLWZpdmUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL3NhbmRoeWFkZWVwNi5wbmdcIik7XG59XG4uaW1hZ2UtY29udGFpbmVyIC5hYm91dC11cy1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDE4cHggMCA1cHg7XG59XG4uaW1hZ2UtY29udGFpbmVyIC5hYm91dC11cy1oZWFkaW5nIC5oZWFkaW5nLXRleHQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uaW1hZ2UtY29udGFpbmVyIC5hYm91dC11cy1oZWFkaW5nIC5zbG9nYW4tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHggMCAwO1xufVxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lciAuZGVzY3JpcHRpb24tdG9nZ2xlLW1lbnVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lciAuZGVzY3JpcHRpb24tdG9nZ2xlLW1lbnVzIC50b2dnbGUtbWVudS1iYWNrZ3JvdW5kIHtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgd2lkdGg6IDI1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbn1cbi5kZXNjcmlwdGlvbi1jb250YWluZXIgLmRlc2NyaXB0aW9uLXRvZ2dsZS1tZW51cyAudG9nZ2xlLW1lbnUtYmFja2dyb3VuZC5hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2U5NWM4Zjtcbn1cbi5kZXNjcmlwdGlvbi1jb250YWluZXIgLmRlc2NyaXB0aW9uLXRvZ2dsZS1tZW51cyAudG9nZ2xlLW1lbnUtYmFja2dyb3VuZCAudG9nZ2xlLW1lbnUge1xuICBjb2xvcjogIzY2Njtcbn1cbi5kZXNjcmlwdGlvbi1jb250YWluZXIgLmRlc2NyaXB0aW9uLXRvZ2dsZS1tZW51cyAudG9nZ2xlLW1lbnUtYmFja2dyb3VuZCAudG9nZ2xlLW1lbnUuYWN0aXZlIHtcbiAgY29sb3I6ICM2MTRkN2Y7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lciAuZGVzY3JpcHRpb24tZGF0YS1jb250YWluZXIge1xuICBwYWRkaW5nOiA1cHggMCAwO1xufVxuXG4uYWJvdXQtdXMtcGFnZS1jb250YWluZXIgLnRhYi1jb250YWluZXIsIC5vd25lci1jb250YWluZXIgLnRhYi1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLmFib3V0LXVzLXBhZ2UtY29udGFpbmVyIC5oZWFkaW5nLXRleHQsIC5vd25lci1jb250YWluZXIgLmhlYWRpbmctdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFib3V0LXVzLXBhZ2UtY29udGFpbmVyIC5oZWFkaW5nLXRleHQgLmtub3ctbW9yZSwgLm93bmVyLWNvbnRhaW5lciAuaGVhZGluZy10ZXh0IC5rbm93LW1vcmUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uYWJvdXQtdXMtcGFnZS1jb250YWluZXIgLmNvbnRlbnQtZGl2LCAub3duZXItY29udGFpbmVyIC5jb250ZW50LWRpdiB7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uYWJvdXQtdXMtcGFnZS1jb250YWluZXIgLnBob25lLW51bWJlci1kaXYsIC5vd25lci1jb250YWluZXIgLnBob25lLW51bWJlci1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYWJvdXQtdXMtcGFnZS1jb250YWluZXIgLnBob25lLW51bWJlci1kaXYgLnBob25lLWljb24sIC5vd25lci1jb250YWluZXIgLnBob25lLW51bWJlci1kaXYgLnBob25lLWljb24ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MTRkN2Y7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYWJvdXQtdXMtcGFnZS1jb250YWluZXIgLnRpbWluZywgLm93bmVyLWNvbnRhaW5lciAudGltaW5nIHtcbiAgY29sb3I6ICM2NjY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogNXB4IDA7XG59XG5cbi5zZXJ2aWNlcy1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnNlcnZpY2VzLWNvbnRhaW5lciAuaGVhZGluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucHJvZHVjdC1jb250YWluZXIgLm5vLWRhdGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5wYWRkaW5nLWJvdHRvbS0xNSB7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cblxuLmFwcG9pbnRtZW50LWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEwcHggMTVweCAwO1xufVxuLmFwcG9pbnRtZW50LWZvb3RlciAudG90YWwtZGl2LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNkM2QzZDM3ZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG4uYXBwb2ludG1lbnQtZm9vdGVyIC50b3RhbC1kaXYtY29udGFpbmVyIC50b3RhbC1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmFwcG9pbnRtZW50LWZvb3RlciAudG90YWwtZGl2LWNvbnRhaW5lciAudG90YWwtZGl2IC50b3RhbC1kaXYtcHJpY2Uge1xuICBjb2xvcjogIzY2NjtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5jdXN0b24tbmF2IHtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5wcmV2LWljb24tY3VzdG9tIHtcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vZnJlYWt5am9sbHkuY29tL2RlbW8vanF1ZXJ5L093bENhcm91c2VsMi9uYXYtaWNvbi5wbmcpIG5vLXJlcGVhdCBzY3JvbGwgMHB4IDBweDtcbn1cblxuLnByZXYtaWNvbi1jdXN0b20uZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjQ7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLm5leHQtaWNvbi1jdXN0b20ge1xuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9mcmVha3lqb2xseS5jb20vZGVtby9qcXVlcnkvT3dsQ2Fyb3VzZWwyL25hdi1pY29uLnBuZykgbm8tcmVwZWF0IHNjcm9sbCAtMzJweCAwcHg7XG59XG5cbi5uZXh0LWljb24tY3VzdG9tLmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC40O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5zbGlkZXItbmF2IGlvbi1pY29uIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2xpZGUtdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3R0b206IDMwcHg7XG59XG5cbmlvbi1ncmlkIGlvbi1yb3cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5pb24tZ3JpZCBpb24tcm93IC5pb24taW1hZ2Utc2xpZGVzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogNXB4IDA7XG59XG5cbi5zY3JvbGwtYXJyb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDM1cHg7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA1MCU7XG59XG4uc2Nyb2xsLWFycm93LmFycm93LWxlZnQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyZjMwMzJkMSwgIzJmMzAzMjdhLCB0cmFuc3BhcmVudCwgdHJhbnNwYXJlbnQsIHRyYW5zcGFyZW50KTtcbn1cbi5zY3JvbGwtYXJyb3cuYXJyb3ctcmlnaHQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzJmMzAzMmQxLCAjMmYzMDMyN2EsIHRyYW5zcGFyZW50LCB0cmFuc3BhcmVudCwgdHJhbnNwYXJlbnQpO1xuICBsZWZ0OiA1MCU7XG59XG5cbi5jdXN0b20tc2xpZGUge1xuICBtYXJnaW46IDAgNXB4O1xufVxuXG4ua25vdy1tb3JlIHtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5tYXJnaW4tYm90dG9tLTIwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xufSJdfQ== */";
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
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");

    var AboutUsPage = /*#__PURE__*/function () {
      function AboutUsPage(adminService, modalController, router, location) {
        _classCallCheck(this, AboutUsPage);

        this.adminService = adminService;
        this.modalController = modalController;
        this.router = router;
        this.location = location;
        this.slideOpts = {
          initialSlide: 1,
          speed: 400,
          autoplay: true
        };
        this.show = true;
        this.selectedMenu = 'about_us';
        this.amountPurchased = 0;
        this.selectedServices = 0;
        this.productList = []; //Configuration for each Slider

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
          spaceBetween: 10,
          autoHeight: true,
          longSwipes: true,
          autoplay: true
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
        value: function ngOnInit() {
          this.getProducts();
        }
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
      }, {
        key: "backClicked",
        value: function backClicked() {
          this.location.back();
        }
      }, {
        key: "updateData",
        value: function updateData(data) {
          this.selectedServices = data.selectedServices;
          this.amountPurchased = data.amountPurchased;
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          var _this13 = this;

          this.adminService.getProducts().subscribe(function (res) {
            return _this13.getProductSuccess(res);
          }, function (error) {
            _this13.adminService.commonError(error);
          });
        }
      }, {
        key: "getProductSuccess",
        value: function getProductSuccess(res) {
          this.productList = res;
          this.productList = this.productList.map(function (v) {
            v.showSpinner = false;
            return v;
          });
        }
      }]);

      return AboutUsPage;
    }();

    AboutUsPage.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])], AboutUsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-about-us-about-us-module-es5.js.map