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


    __webpack_exports__["default"] = "<sandhyadeep-header class=\"z-index-999\"></sandhyadeep-header>\n<ion-content>\n    <div class=\"about-us-container\">\n        <div class=\"image-container\">\n            <div class=\"about-us-image\">\n                <ion-slides #mainSlide class=\"feed-sliders height-350\" pager=\"true\" [options]=\"slideOpts\">\n                    <ion-slide class=\"feed-images feed-slider feed-slider-one\">\n\n                    </ion-slide>\n                    <ion-slide class=\"feed-images feed-slider feed-slider-two\">\n\n                    </ion-slide>\n                    <ion-slide class=\"feed-images feed-slider feed-slider-three\">\n\n                    </ion-slide>\n                    <ion-slide class=\"feed-images feed-slider feed-slider-four\">\n\n                    </ion-slide>\n                    <ion-slide class=\"feed-images feed-slider feed-slider-five\">\n\n                    </ion-slide>\n                </ion-slides>\n            </div>\n            <div class=\"about-us-heading\">\n                <div class=\"heading-text\">\n                    <b>Sandhyadeep Beauty Parlour</b>\n                </div>\n                <div class=\"slogan-text\">\n                    Have a hair affair with us\n                </div>\n            </div>\n        </div>\n        <div class=\"description-container\">\n            <div class=\"description-toggle-menus\">\n                <div matRipple [matRippleCentered]=\"true\" (click)=\"onSelectMenu('about_us')\"\n                     class=\"toggle-menu-background about-us\"\n                     [class.active]=\"selectedMenu === 'about_us'\">\n                    <div class=\"toggle-menu\" [class.active]=\"selectedMenu === 'about_us'\">About Us</div>\n                </div>\n                <div matRipple [matRippleCentered]=\"true\" (click)=\"onSelectMenu('services')\"\n                     class=\"toggle-menu-background services\"\n                     [class.active]=\"selectedMenu === 'services'\">\n                    <div class=\"toggle-menu\" [class.active]=\"selectedMenu === 'services'\">Services</div>\n                </div>\n                <div matRipple [matRippleCentered]=\"true\" (click)=\"onSelectMenu('owner')\"\n                     class=\"toggle-menu-background owner\"\n                     [class.active]=\"selectedMenu === 'owner'\">\n                    <div class=\"toggle-menu\" [class.active]=\"selectedMenu === 'owner'\">Our Owner</div>\n                </div>\n<!--                TODO: We removed Products for now-->\n<!--                <div matRipple [matRippleCentered]=\"true\" (click)=\"onSelectMenu('products')\"-->\n<!--                     class=\"toggle-menu-background product\"-->\n<!--                     [class.active]=\"selectedMenu === 'products'\">-->\n<!--                    <div class=\"toggle-menu\" [class.active]=\"selectedMenu === 'products'\">Products</div>-->\n<!--                </div>-->\n            </div>\n            <div class=\"description-data-container\">\n                <div *ngIf=\"selectedMenu === 'about_us'\" class=\"about-us-page-container\">\n                    <div class=\"tab-container border-bottom\">\n                        <div class=\"heading-text\">\n                            <b>Description</b>\n                        </div>\n                        <div class=\"content-div\">\n                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to\n                            demonstrate the visual form of a document or a typeface without relying on meaningful conte\n                        </div>\n                    </div>\n                    <div class=\"tab-container\">\n                        <div class=\"heading-text\">\n                            <b>Information</b>\n                        </div>\n                        <div class=\"timing\">\n                            <div>Sunday - Friday</div>\n                            <div>10:00 AM - 07:00 PM</div>\n                        </div>\n                    </div>\n                    <div class=\"tab-container margin-bottom-20\">\n                        <div class=\"content-div\">\n                            5595, Near Samarth Vidya Mandir, Anandi Bazar, Ahmednagar, Maharashtra, 414001\n                        </div>\n                        <div class=\"phone-number-div\">\n                            <div>+91-9422086335</div>\n                            <div>\n                                <div class=\"phone-icon\">\n                                    <i class=\"fa fa-phone\"></i>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"selectedMenu === 'services'\" class=\"services-container\">\n                    <div class=\"page-container\">\n                        <service-list (updateAmount)=\"updateData($event)\"></service-list>\n                    </div>\n                    <ion-footer *ngIf=\"selectedMenu === 'services'\" class=\"ion-no-border\">\n                        <ion-toolbar>\n                            <div class=\"appointment-footer\">\n                                <div class=\"total-div-container\">\n                                    <div class=\"total-div\">\n                                        <div>Total</div>\n                                        <div class=\"total-div-price\">{{selectedServices}} Services</div>\n                                    </div>\n                                    <div>\n                                        {{amountPurchased}} ₹\n                                    </div>\n                                </div>\n                                <div (click)=\"onBookAppointment()\" class=\"default-button\">\n                                    <button> Book Appointment</button>\n                                </div>\n                            </div>\n                        </ion-toolbar>\n                    </ion-footer>\n                </div>\n                <div *ngIf=\"selectedMenu === 'owner'\" class=\"owner-container\">\n                    <div class=\"ion-image-slides border-bottom\">\n                        <ion-grid>\n                            <ion-row>\n                                <!--                                <ion-col size=\"1\">-->\n                                <!--                                <span class=\"slider-nav arrow-prev\" (click)=\"slidePrev(sliderTwo,slideWithNav2)\">-->\n                                <!--                                  <div class=\"prev-icon-custom custon-nav\" [class.disabled]=\"sliderTwo.isBeginningSlide\"></div>-->\n                                <!--                                </span>-->\n                                <!--                                </ion-col>-->\n                                <div class=\"scroll-arrow arrow-left\" (click)=\"slidePrev(sliderTwo,slideWithNav2)\">\n                                    <i class=\"fa fa-angle-left\"></i>\n                                </div>\n                                <ion-col size=\"12\">\n                                    <ion-slides pager=\"false\" [options]=\"slideOptsTwo\" #slideWithNav2\n                                                (ionSlideDidChange)=\"SlideDidChange(sliderTwo,slideWithNav2)\">\n                                        <ion-slide *ngFor=\"let slide of sliderTwo.slidesItems\">\n                                            <img style=\"object-fit: cover\" src={{slide.url}} imageViewer/>\n                                        </ion-slide>\n                                    </ion-slides>\n                                </ion-col>\n                                <div class=\"scroll-arrow arrow-right\" (click)=\"slideNext(sliderTwo,slideWithNav2)\">\n                                    <i class=\"fa fa-angle-right\"></i>\n                                </div>\n                                <!--                                <ion-col size=\"1\">-->\n                                <!--                                <span class=\"slider-nav arrow-next\" (click)=\"slideNext(sliderTwo,slideWithNav2)\">-->\n                                <!--                                  <div class=\"next-icon-custom custon-nav\" [class.disabled]=\"sliderTwo.isEndSlide\"></div>-->\n                                <!--                                </span>-->\n                                <!--                                </ion-col>-->\n                            </ion-row>\n                        </ion-grid>\n                    </div>\n\n                    <div class=\"tab-container border-bottom\">\n                        <div class=\"heading-text\">\n                            <b>Description</b>\n                        </div>\n                        <div class=\"content-div\">\n                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to\n                            demonstrate the visual form of a document or a typeface without relying on meaningful conte\n                        </div>\n                    </div>\n                    <div class=\"tab-container border-bottom\">\n                        <div class=\"heading-text\">\n                            <b>Achievements</b>\n                        </div>\n                        <div class=\"content-div\">\n                            <ul>\n                                <li>Media & Beauty Makeup Diploma · Media Makeup · Fsx · Singapore</li>\n                                <li>Makeup Techniques with Air Brush Machine · Mumbai, Maharashtra</li>\n                                <li>Master Diploma in Makeup Artistry · Singapore</li>\n                                <li>Comite International D’Esthetique Et De Cosmetologie., Zurich.</li>\n                                <li>British Association of Beauty Therapy & Cosmetology, London.</li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"tab-container\">\n                        <div class=\"heading-text\">\n                            <b>Portfolio</b>\n                            <div (click)=\"onSeeAllPortfolios()\" class=\"know-more\">See All <i\n                                    class=\"fa fa-angle-right\"></i></div>\n                        </div>\n                        <div class=\"content-div\">\n                            <ngx-slick-carousel class=\"carousel\"\n                                                #slickModal=\"slick-carousel\"\n                                                [config]=\"slideConfig\"\n                                                (init)=\"slickInit($event)\"\n                                                (breakpoint)=\"breakpoint($event)\"\n                                                (afterChange)=\"afterChange($event)\"\n                                                (beforeChange)=\"beforeChange($event)\">\n                                <div ngxSlickItem *ngFor=\"let slide of slides\" class=\"slide custom-slide\">\n                                    <img src=\"{{ slide.img }}\" alt=\"\" width=\"100%\">\n                                </div>\n                            </ngx-slick-carousel>\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"selectedMenu === 'products'\" class=\"product-container\">\n                    <div *ngIf=\"productList?.length > 0\">\n                        <app-product-list [productList]=\"productList\"></app-product-list>\n                    </div>\n                    <div *ngIf=\"productList?.length === 0\" class=\"no-data\">\n                        No Products Available\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <script id=\"image-modal.html\" type=\"text/ng-template\">\n        <div class=\"modal image-modal transparent\" ng-click=\"closeModal()\">\n            <ion-pane class=\"transparent\">\n                <img ng-src=\"{{imageSrc}}\" class=\"fullscreen-image\"/>\n            </ion-pane>\n        </div>\n    </script>\n</ion-content>\n\n<app-footer-component></app-footer-component>\n<app-logo-spinner></app-logo-spinner>\n";
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
    /* harmony import */


    var _shared_components_footer_component_footer_component_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../shared-components/footer-component/footer-component.module */
    "./src/app/shared-components/footer-component/footer-component.module.ts");
    /* harmony import */


    var _shared_components_logo_spinner_logo_spinner_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../shared-components/logo-spinner/logo-spinner.module */
    "./src/app/shared-components/logo-spinner/logo-spinner.module.ts");

    var AboutUsPageModule = function AboutUsPageModule() {
      _classCallCheck(this, AboutUsPageModule);
    };

    AboutUsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _about_us_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutUsPageRoutingModule"], _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"], _services_services_module__WEBPACK_IMPORTED_MODULE_8__["ServicePageModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_9__["SlickCarouselModule"], _shared_components_modal_popup_modal_popup_module__WEBPACK_IMPORTED_MODULE_10__["ModalPopupModule"], _shared_components_search_header_component_search_header_component_module__WEBPACK_IMPORTED_MODULE_12__["SearchHeaderComponentModule"], _shared_components_services_list_services_list_module__WEBPACK_IMPORTED_MODULE_13__["ServicesListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"], _shared_components_product_list_product_list_module__WEBPACK_IMPORTED_MODULE_15__["ProductListModule"], _shared_components_footer_component_footer_component_module__WEBPACK_IMPORTED_MODULE_16__["FooterComponentModule"], _shared_components_logo_spinner_logo_spinner_module__WEBPACK_IMPORTED_MODULE_17__["LogoSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"]],
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


    __webpack_exports__["default"] = ".top-adjust {\n  top: 65px;\n}\n\n.page-container {\n  padding: 0 15px;\n}\n\n.page-container .page-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 18px 0 5px;\n}\n\n.page-container .page-heading .heading-text {\n  font-size: 24px;\n}\n\n.down {\n  transform: rotate(90deg);\n  -webkit-transform: rotate(90deg);\n  transition: ease-in-out 300ms;\n}\n\n.color-666 {\n  color: #666;\n}\n\n.about-us-container {\n  padding: 0 15px;\n}\n\n.image-container {\n  padding: 15px 0;\n}\n\n.image-container .about-us-image .feed-sliders {\n  height: 350px;\n  border-radius: 10px;\n}\n\n.image-container .about-us-image .feed-sliders.height-200 {\n  height: 350px;\n}\n\n.image-container .about-us-image .feed-sliders .feed-slider {\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-position: center center !important;\n  max-height: 30em;\n}\n\n.image-container .about-us-image .feed-sliders .feed-slider.feed-slider-one {\n  background: url('sandhyadeep5.png');\n}\n\n.image-container .about-us-image .feed-sliders .feed-slider.feed-slider-two {\n  background: url('sandhyadeep3.png');\n}\n\n.image-container .about-us-image .feed-sliders .feed-slider.feed-slider-three {\n  background: url('sandhyadeep1.png');\n}\n\n.image-container .about-us-image .feed-sliders .feed-slider.feed-slider-four {\n  background: url('sandhyadeep2.png');\n}\n\n.image-container .about-us-image .feed-sliders .feed-slider.feed-slider-five {\n  background: url('sandhyadeep6.png');\n}\n\n.image-container .about-us-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  margin: 18px 0 5px;\n}\n\n.image-container .about-us-heading .heading-text {\n  font-size: 20px;\n}\n\n.image-container .about-us-heading .slogan-text {\n  font-size: 14px;\n}\n\n.description-container {\n  padding: 15px 0 0;\n}\n\n.description-container .description-toggle-menus {\n  display: flex;\n  justify-content: space-between;\n}\n\n.description-container .description-toggle-menus .toggle-menu-background {\n  padding-bottom: 4px;\n  width: 25%;\n  text-align: center;\n  transition: all 0.1s;\n}\n\n.description-container .description-toggle-menus .toggle-menu-background.active {\n  border-bottom: 3px solid #BD1E51;\n}\n\n.description-container .description-toggle-menus .toggle-menu-background .toggle-menu {\n  color: #666;\n}\n\n.description-container .description-toggle-menus .toggle-menu-background .toggle-menu.active {\n  color: #265791;\n  font-weight: bold;\n}\n\n.description-container .description-data-container {\n  padding: 5px 0 0;\n}\n\n.about-us-page-container .tab-container, .owner-container .tab-container {\n  margin-bottom: 10px;\n  padding-bottom: 5px;\n}\n\n.about-us-page-container .heading-text, .owner-container .heading-text {\n  display: flex;\n  justify-content: space-between;\n  font-size: 20px;\n  align-items: center;\n}\n\n.about-us-page-container .heading-text .know-more, .owner-container .heading-text .know-more {\n  font-size: 14px;\n}\n\n.about-us-page-container .content-div, .owner-container .content-div {\n  padding: 5px 0;\n  font-size: 14px;\n}\n\n.about-us-page-container .phone-number-div, .owner-container .phone-number-div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.about-us-page-container .phone-number-div .phone-icon, .owner-container .phone-number-div .phone-icon {\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  background-color: #265791;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n}\n\n.about-us-page-container .timing, .owner-container .timing {\n  color: #666;\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 0;\n}\n\n.services-container {\n  margin-bottom: 10px;\n}\n\n.services-container .heading-text {\n  font-size: 20px;\n}\n\n.product-container .no-data {\n  text-align: center;\n  padding: 30px 0;\n  color: #666;\n}\n\n.padding-bottom-15 {\n  padding-bottom: 15px !important;\n}\n\n.border-bottom {\n  border-bottom: 1px solid lightgray;\n}\n\n.appointment-footer {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 15px 0;\n}\n\n.appointment-footer .total-div-container {\n  display: flex;\n  padding: 10px;\n  background: #d3d3d37d;\n  justify-content: space-between;\n  border-radius: 7px;\n}\n\n.appointment-footer .total-div-container .total-div {\n  display: flex;\n}\n\n.appointment-footer .total-div-container .total-div .total-div-price {\n  color: #666;\n  margin-left: 15px;\n}\n\n.custon-nav {\n  height: 48px;\n  width: 20px;\n  cursor: pointer;\n  vertical-align: middle;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.prev-icon-custom {\n  background: url(https://freakyjolly.com/demo/jquery/OwlCarousel2/nav-icon.png) no-repeat scroll 0px 0px;\n}\n\n.prev-icon-custom.disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n\n.next-icon-custom {\n  background: url(https://freakyjolly.com/demo/jquery/OwlCarousel2/nav-icon.png) no-repeat scroll -32px 0px;\n}\n\n.next-icon-custom.disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n\n.slider-nav ion-icon {\n  height: 100%;\n}\n\n.slide-text {\n  position: absolute;\n  color: white;\n  bottom: 30px;\n}\n\nion-grid ion-row {\n  position: relative;\n}\n\nion-grid ion-row .ion-image-slides {\n  margin-bottom: 10px;\n  padding: 5px 0;\n}\n\n.scroll-arrow {\n  display: flex;\n  align-items: center;\n  font-size: 35px;\n  padding: 0 16px;\n  color: white;\n  position: absolute;\n  z-index: 99999;\n  height: 100%;\n  width: 50%;\n}\n\n.scroll-arrow.arrow-left {\n  background: linear-gradient(to right, #2f3032d1, #2f30327a, transparent, transparent, transparent);\n}\n\n.scroll-arrow.arrow-right {\n  justify-content: flex-end;\n  background: linear-gradient(to left, #2f3032d1, #2f30327a, transparent, transparent, transparent);\n  left: 50%;\n}\n\n.custom-slide {\n  margin: 0 5px;\n}\n\n.know-more {\n  color: #666;\n}\n\n.margin-bottom-20 {\n  margin-bottom: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL2FwcC9wYWdlcy9hYm91dC11cy9hYm91dC11cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Fib3V0LXVzL2Fib3V0LXVzLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9hYXNoaXNoYmhhZ3dhdC9Eb2N1bWVudHMvc2FuZGh5YWRlZXAtdWkvc2FuZGh5YWRlZXAtYmVhdXR5LXBhcmxvdXIvc3JjL3NhbmRoeWFkZWVwLXRoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxTQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0FDREY7O0FER0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FER0k7RUFDRSxlQUFBO0FDRE47O0FET0E7RUFDRSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7QUNKRjs7QURRQTtFQUNFLGVBQUE7QUNMRjs7QURRQTtFQUNFLGVBQUE7QUNMRjs7QURRSTtFQUNFLGFBQUE7RUFTQSxtQkFBQTtBQ2ROOztBRFVNO0VBQ0UsYUFBQTtBQ1JSOztBRGFNO0VBQ0UsdUNBQUE7RUFDQSxpQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsZ0JBQUE7QUNYUjs7QURhUTtFQUNFLG1DQUFBO0FDWFY7O0FEY1E7RUFDRSxtQ0FBQTtBQ1pWOztBRGVRO0VBQ0UsbUNBQUE7QUNiVjs7QURnQlE7RUFDRSxtQ0FBQTtBQ2RWOztBRGlCUTtFQUNFLG1DQUFBO0FDZlY7O0FEcUJFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDbkJKOztBRHFCSTtFQUNFLGVBQUE7QUNuQk47O0FEc0JJO0VBQ0UsZUFBQTtBQ3BCTjs7QUR5QkE7RUFDRSxpQkFBQTtBQ3RCRjs7QUR3QkU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUN0Qko7O0FEd0JJO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ3RCTjs7QUR1Qk07RUFDRSxnQ0FBQTtBQ3JCUjs7QUR3Qk07RUFDRSxXQUFBO0FDdEJSOztBRHdCUTtFQUNFLGNFakhRO0VGa0hSLGlCQUFBO0FDdEJWOztBRHlDRTtFQUNFLGdCQUFBO0FDdkNKOztBRDhDRTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUMzQ0o7O0FEK0NFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDN0NKOztBRDhDSTtFQUNFLGVBQUE7QUM1Q047O0FEZ0RFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUM5Q0o7O0FEaURFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUMvQ0o7O0FEaURJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCRTNLWTtFRjRLWixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUMvQ047O0FEbURFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUNqREo7O0FEcURBO0VBQ0UsbUJBQUE7QUNsREY7O0FEb0RFO0VBQ0UsZUFBQTtBQ2xESjs7QUQyREU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDeERKOztBRDREQTtFQUNFLCtCQUFBO0FDekRGOztBRDREQTtFQUNFLGtDQUFBO0FDekRGOztBRDREQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDekRGOztBRDJERTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FDekRKOztBRDJESTtFQUNFLGFBQUE7QUN6RE47O0FEMkRNO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDekRSOztBRGdFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUVBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUM5REY7O0FEZ0VBO0VBQ0UsdUdBQUE7QUM3REY7O0FEK0RBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUM1REY7O0FEOERBO0VBQ0UseUdBQUE7QUMzREY7O0FENkRBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUMxREY7O0FENkRFO0VBQ0UsWUFBQTtBQzFESjs7QUQ4REE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDM0RGOztBRGlFRTtFQUNFLGtCQUFBO0FDOURKOztBRCtESTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQzdEUjs7QURrRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQy9ERjs7QURnRUU7RUFDRSxrR0FBQTtBQzlESjs7QURnRUU7RUFDRSx5QkFBQTtFQUNBLGlHQUFBO0VBQ0EsU0FBQTtBQzlESjs7QUR3RkE7RUFDRSxhQUFBO0FDckZGOztBRHdGQTtFQUNFLFdBQUE7QUNyRkY7O0FEd0ZBO0VBQ0UsOEJBQUE7QUNyRkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hYm91dC11cy9hYm91dC11cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2FuZGh5YWRlZXAtdGhlbWVcIjtcblxuLnRvcC1hZGp1c3Qge1xuICB0b3A6IDY1cHg7XG59XG5cbi5wYWdlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgMTVweDtcblxuICAucGFnZS1oZWFkaW5nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMThweCAwIDVweDtcblxuICAgIC5oZWFkaW5nLXRleHQge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cbiAgfVxufVxuXG5cbi5kb3duIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMzAwbXM7XG59XG5cbi5jb2xvci02NjYge1xuICBjb2xvcjogIzY2Njtcbn1cblxuXG4uYWJvdXQtdXMtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTVweCAwO1xuXG4gIC5hYm91dC11cy1pbWFnZSB7XG4gICAgLmZlZWQtc2xpZGVycyB7XG4gICAgICBoZWlnaHQ6IDM1MHB4O1xuXG4gICAgICAmLmhlaWdodC0zNTAge1xuICAgICAgfVxuXG4gICAgICAmLmhlaWdodC0yMDAge1xuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgfVxuXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgICAuZmVlZC1zbGlkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICBtYXgtaGVpZ2h0OiAzMGVtO1xuXG4gICAgICAgICYuZmVlZC1zbGlkZXItb25lIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL3NhbmRoeWFkZWVwNS5wbmdcIik7XG4gICAgICAgIH1cblxuICAgICAgICAmLmZlZWQtc2xpZGVyLXR3byB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9zYW5kaHlhZGVlcDMucG5nXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5mZWVkLXNsaWRlci10aHJlZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9zYW5kaHlhZGVlcDEucG5nXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5mZWVkLXNsaWRlci1mb3VyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL3NhbmRoeWFkZWVwMi5wbmdcIik7XG4gICAgICAgIH1cblxuICAgICAgICAmLmZlZWQtc2xpZGVyLWZpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvc2FuZGh5YWRlZXA2LnBuZ1wiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5hYm91dC11cy1oZWFkaW5nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAxOHB4IDAgNXB4O1xuXG4gICAgLmhlYWRpbmctdGV4dCB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuXG4gICAgLnNsb2dhbi10ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cbn1cblxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHggMCAwO1xuXG4gIC5kZXNjcmlwdGlvbi10b2dnbGUtbWVudXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgLnRvZ2dsZS1tZW51LWJhY2tncm91bmQge1xuICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgICAgIHdpZHRoOiAyNSU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAudG9nZ2xlLW1lbnUge1xuICAgICAgICBjb2xvcjogIzY2NjtcblxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLmFib3V0LXVzIHtcblxuICAgICAgICB9XG5cbiAgICAgICAgJi5zZXJ2aWNlcyB7XG4gICAgICAgIH1cblxuICAgICAgICAmLm93bmVyIHtcbiAgICAgICAgfVxuXG4gICAgICAgICYucHJvZHVjdCB7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZGVzY3JpcHRpb24tZGF0YS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDVweCAwIDA7XG5cblxuICB9XG5cbn1cbi5hYm91dC11cy1wYWdlLWNvbnRhaW5lciwgLm93bmVyLWNvbnRhaW5lciB7XG4gIC50YWItY29udGFpbmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIH1cblxuXG4gIC5oZWFkaW5nLXRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC5rbm93LW1vcmUge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxuXG4gIC5jb250ZW50LWRpdiB7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLnBob25lLW51bWJlci1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAucGhvbmUtaWNvbiB7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICB3aWR0aDogMzBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxuXG4gIC50aW1pbmcge1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICB9XG59XG5cbi5zZXJ2aWNlcy1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gIC5oZWFkaW5nLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuXG4ub3duZXItY29udGFpbmVyIHtcblxufVxuXG4ucHJvZHVjdC1jb250YWluZXIge1xuICAubm8tZGF0YSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDMwcHggMDtcbiAgICBjb2xvcjogIzY2NjtcbiAgfVxufVxuXG4ucGFkZGluZy1ib3R0b20tMTUge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cbi5hcHBvaW50bWVudC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxMHB4IDE1cHggMDtcblxuICAudG90YWwtZGl2LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNkM2QzZDM3ZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuXG4gICAgLnRvdGFsLWRpdiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAudG90YWwtZGl2LXByaWNlIHtcbiAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBTbGlkZXIgU3R5bGUgU1RBUlRcbi5jdXN0b24tbmF2e1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLnByZXYtaWNvbi1jdXN0b217XG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL2ZyZWFreWpvbGx5LmNvbS9kZW1vL2pxdWVyeS9Pd2xDYXJvdXNlbDIvbmF2LWljb24ucG5nKSBuby1yZXBlYXQgc2Nyb2xsIDBweCAwcHg7XG59XG4ucHJldi1pY29uLWN1c3RvbS5kaXNhYmxlZHtcbiAgb3BhY2l0eTogMC40O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4ubmV4dC1pY29uLWN1c3RvbXtcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vZnJlYWt5am9sbHkuY29tL2RlbW8vanF1ZXJ5L093bENhcm91c2VsMi9uYXYtaWNvbi5wbmcpIG5vLXJlcGVhdCBzY3JvbGwgLTMycHggMHB4O1xufVxuLm5leHQtaWNvbi1jdXN0b20uZGlzYWJsZWR7XG4gIG9wYWNpdHk6IDAuNDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLnNsaWRlci1uYXZ7XG4gIGlvbi1pY29ue1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuXG4uc2xpZGUtdGV4dHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvdHRvbTogMzBweDtcbn1cblxuLy8gU3R5bGluZyB0byBzaG93IHRoZSBhcnJvdyBvbiBzbGlkZXMgLSBzdGFydFxuXG5pb24tZ3JpZCB7XG4gIGlvbi1yb3cge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuaW9uLWltYWdlLXNsaWRlcyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIH1cbiAgfVxufVxuXG4uc2Nyb2xsLWFycm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5OTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNTAlO1xuICAmLmFycm93LWxlZnQge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzJmMzAzMmQxLCAjMmYzMDMyN2EsIHRyYW5zcGFyZW50LCB0cmFuc3BhcmVudCwgdHJhbnNwYXJlbnQpO1xuICB9XG4gICYuYXJyb3ctcmlnaHQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyZjMwMzJkMSwgIzJmMzAzMjdhLCB0cmFuc3BhcmVudCwgdHJhbnNwYXJlbnQsIHRyYW5zcGFyZW50KTtcbiAgICBsZWZ0OiA1MCU7XG4gIH1cbn1cblxuLy8gU3R5bGluZyB0byBzaG93IHRoZSBhcnJvdyBvbiBzbGlkZXMgLSBlbmRcblxuLy8gU3R5bGluZyB0byBzaG93IHRoZSBhcnJvdyBvbiBvdXRzaWRlIC0gc3RhcnRcblxuLy8uaW9uLWltYWdlLXNsaWRlcyB7XG4vLyAgbWFyZ2luLWJvdHRvbTogMTBweDtcbi8vICBwYWRkaW5nOiA1cHggMDtcbi8vICAuc2Nyb2xsLWFycm93IHtcbi8vICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICBmb250LXNpemU6IDMwcHg7XG4vLyAgICBwYWRkaW5nOiAwIDVweDtcbi8vICAgIGNvbG9yOiAjNjY2O1xuLy8gIH1cbi8vfVxuXG4vLyBTdHlsaW5nIHRvIHNob3cgdGhlIGFycm93IG9uIG91dHNpZGUgLSBlbmRcblxuLy8gU2xpZGVyIFN0eWxlIFNUT1Bcbi8vXG5cbi5jdXN0b20tc2xpZGUge1xuICBtYXJnaW46IDAgNXB4O1xufVxuXG4ua25vdy1tb3JlIHtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5tYXJnaW4tYm90dG9tLTIwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xufVxuIiwiLnRvcC1hZGp1c3Qge1xuICB0b3A6IDY1cHg7XG59XG5cbi5wYWdlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbi5wYWdlLWNvbnRhaW5lciAucGFnZS1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDE4cHggMCA1cHg7XG59XG4ucGFnZS1jb250YWluZXIgLnBhZ2UtaGVhZGluZyAuaGVhZGluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uZG93biB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDMwMG1zO1xufVxuXG4uY29sb3ItNjY2IHtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5hYm91dC11cy1jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICBwYWRkaW5nOiAxNXB4IDA7XG59XG4uaW1hZ2UtY29udGFpbmVyIC5hYm91dC11cy1pbWFnZSAuZmVlZC1zbGlkZXJzIHtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5pbWFnZS1jb250YWluZXIgLmFib3V0LXVzLWltYWdlIC5mZWVkLXNsaWRlcnMuaGVpZ2h0LTIwMCB7XG4gIGhlaWdodDogMzUwcHg7XG59XG4uaW1hZ2UtY29udGFpbmVyIC5hYm91dC11cy1pbWFnZSAuZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlciB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDMwZW07XG59XG4uaW1hZ2UtY29udGFpbmVyIC5hYm91dC11cy1pbWFnZSAuZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci5mZWVkLXNsaWRlci1vbmUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL3NhbmRoeWFkZWVwNS5wbmdcIik7XG59XG4uaW1hZ2UtY29udGFpbmVyIC5hYm91dC11cy1pbWFnZSAuZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci5mZWVkLXNsaWRlci10d28ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL3NhbmRoeWFkZWVwMy5wbmdcIik7XG59XG4uaW1hZ2UtY29udGFpbmVyIC5hYm91dC11cy1pbWFnZSAuZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci5mZWVkLXNsaWRlci10aHJlZSB7XG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvc2FuZGh5YWRlZXAxLnBuZ1wiKTtcbn1cbi5pbWFnZS1jb250YWluZXIgLmFib3V0LXVzLWltYWdlIC5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLmZlZWQtc2xpZGVyLWZvdXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL3NhbmRoeWFkZWVwMi5wbmdcIik7XG59XG4uaW1hZ2UtY29udGFpbmVyIC5hYm91dC11cy1pbWFnZSAuZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci5mZWVkLXNsaWRlci1maXZlIHtcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9zYW5kaHlhZGVlcDYucG5nXCIpO1xufVxuLmltYWdlLWNvbnRhaW5lciAuYWJvdXQtdXMtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAxOHB4IDAgNXB4O1xufVxuLmltYWdlLWNvbnRhaW5lciAuYWJvdXQtdXMtaGVhZGluZyAuaGVhZGluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmltYWdlLWNvbnRhaW5lciAuYWJvdXQtdXMtaGVhZGluZyAuc2xvZ2FuLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5kZXNjcmlwdGlvbi1jb250YWluZXIge1xuICBwYWRkaW5nOiAxNXB4IDAgMDtcbn1cbi5kZXNjcmlwdGlvbi1jb250YWluZXIgLmRlc2NyaXB0aW9uLXRvZ2dsZS1tZW51cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5kZXNjcmlwdGlvbi1jb250YWluZXIgLmRlc2NyaXB0aW9uLXRvZ2dsZS1tZW51cyAudG9nZ2xlLW1lbnUtYmFja2dyb3VuZCB7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gIHdpZHRoOiAyNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG59XG4uZGVzY3JpcHRpb24tY29udGFpbmVyIC5kZXNjcmlwdGlvbi10b2dnbGUtbWVudXMgLnRvZ2dsZS1tZW51LWJhY2tncm91bmQuYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNCRDFFNTE7XG59XG4uZGVzY3JpcHRpb24tY29udGFpbmVyIC5kZXNjcmlwdGlvbi10b2dnbGUtbWVudXMgLnRvZ2dsZS1tZW51LWJhY2tncm91bmQgLnRvZ2dsZS1tZW51IHtcbiAgY29sb3I6ICM2NjY7XG59XG4uZGVzY3JpcHRpb24tY29udGFpbmVyIC5kZXNjcmlwdGlvbi10b2dnbGUtbWVudXMgLnRvZ2dsZS1tZW51LWJhY2tncm91bmQgLnRvZ2dsZS1tZW51LmFjdGl2ZSB7XG4gIGNvbG9yOiAjMjY1NzkxO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5kZXNjcmlwdGlvbi1jb250YWluZXIgLmRlc2NyaXB0aW9uLWRhdGEtY29udGFpbmVyIHtcbiAgcGFkZGluZzogNXB4IDAgMDtcbn1cblxuLmFib3V0LXVzLXBhZ2UtY29udGFpbmVyIC50YWItY29udGFpbmVyLCAub3duZXItY29udGFpbmVyIC50YWItY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5hYm91dC11cy1wYWdlLWNvbnRhaW5lciAuaGVhZGluZy10ZXh0LCAub3duZXItY29udGFpbmVyIC5oZWFkaW5nLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hYm91dC11cy1wYWdlLWNvbnRhaW5lciAuaGVhZGluZy10ZXh0IC5rbm93LW1vcmUsIC5vd25lci1jb250YWluZXIgLmhlYWRpbmctdGV4dCAua25vdy1tb3JlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmFib3V0LXVzLXBhZ2UtY29udGFpbmVyIC5jb250ZW50LWRpdiwgLm93bmVyLWNvbnRhaW5lciAuY29udGVudC1kaXYge1xuICBwYWRkaW5nOiA1cHggMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmFib3V0LXVzLXBhZ2UtY29udGFpbmVyIC5waG9uZS1udW1iZXItZGl2LCAub3duZXItY29udGFpbmVyIC5waG9uZS1udW1iZXItZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFib3V0LXVzLXBhZ2UtY29udGFpbmVyIC5waG9uZS1udW1iZXItZGl2IC5waG9uZS1pY29uLCAub3duZXItY29udGFpbmVyIC5waG9uZS1udW1iZXItZGl2IC5waG9uZS1pY29uIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY1NzkxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmFib3V0LXVzLXBhZ2UtY29udGFpbmVyIC50aW1pbmcsIC5vd25lci1jb250YWluZXIgLnRpbWluZyB7XG4gIGNvbG9yOiAjNjY2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuXG4uc2VydmljZXMtY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5zZXJ2aWNlcy1jb250YWluZXIgLmhlYWRpbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnByb2R1Y3QtY29udGFpbmVyIC5uby1kYXRhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4ucGFkZGluZy1ib3R0b20tMTUge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cbi5hcHBvaW50bWVudC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxMHB4IDE1cHggMDtcbn1cbi5hcHBvaW50bWVudC1mb290ZXIgLnRvdGFsLWRpdi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZDNkM2QzN2Q7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuLmFwcG9pbnRtZW50LWZvb3RlciAudG90YWwtZGl2LWNvbnRhaW5lciAudG90YWwtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5hcHBvaW50bWVudC1mb290ZXIgLnRvdGFsLWRpdi1jb250YWluZXIgLnRvdGFsLWRpdiAudG90YWwtZGl2LXByaWNlIHtcbiAgY29sb3I6ICM2NjY7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uY3VzdG9uLW5hdiB7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4ucHJldi1pY29uLWN1c3RvbSB7XG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL2ZyZWFreWpvbGx5LmNvbS9kZW1vL2pxdWVyeS9Pd2xDYXJvdXNlbDIvbmF2LWljb24ucG5nKSBuby1yZXBlYXQgc2Nyb2xsIDBweCAwcHg7XG59XG5cbi5wcmV2LWljb24tY3VzdG9tLmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC40O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5uZXh0LWljb24tY3VzdG9tIHtcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vZnJlYWt5am9sbHkuY29tL2RlbW8vanF1ZXJ5L093bENhcm91c2VsMi9uYXYtaWNvbi5wbmcpIG5vLXJlcGVhdCBzY3JvbGwgLTMycHggMHB4O1xufVxuXG4ubmV4dC1pY29uLWN1c3RvbS5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4uc2xpZGVyLW5hdiBpb24taWNvbiB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNsaWRlLXRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm90dG9tOiAzMHB4O1xufVxuXG5pb24tZ3JpZCBpb24tcm93IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaW9uLWdyaWQgaW9uLXJvdyAuaW9uLWltYWdlLXNsaWRlcyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuXG4uc2Nyb2xsLWFycm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5OTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNTAlO1xufVxuLnNjcm9sbC1hcnJvdy5hcnJvdy1sZWZ0IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMmYzMDMyZDEsICMyZjMwMzI3YSwgdHJhbnNwYXJlbnQsIHRyYW5zcGFyZW50LCB0cmFuc3BhcmVudCk7XG59XG4uc2Nyb2xsLWFycm93LmFycm93LXJpZ2h0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyZjMwMzJkMSwgIzJmMzAzMjdhLCB0cmFuc3BhcmVudCwgdHJhbnNwYXJlbnQsIHRyYW5zcGFyZW50KTtcbiAgbGVmdDogNTAlO1xufVxuXG4uY3VzdG9tLXNsaWRlIHtcbiAgbWFyZ2luOiAwIDVweDtcbn1cblxuLmtub3ctbW9yZSB7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4ubWFyZ2luLWJvdHRvbS0yMCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcbn0iLCIvLyBwcmV2aW91cyBUaGVtZVxuLy8kcHJpbWFyeS1jb2xvcjogI2U5NWM4Zjtcbi8vJHNlY29uZGFyeS1jb2xvcjogIzYxNGQ3ZjtcblxuLy8gTmV3IFRoZW1lXG4kcHJpbWFyeS1jb2xvcjogI0JEMUU1MTtcbiRzZWNvbmRhcnktY29sb3I6ICMyNjU3OTE7XG5cbiRyZWd1bGFyLWZvbnQtc2l6ZTogMTRweDtcbiRmb250LXNpemUtMTogMTZweDtcbiRoZWFkZXItc2l6ZTogMjBweDtcbiRmb250LXNpemUtMzogMzBweDtcblxuJGJ1dHRvbi1oZWlnaHQ6IDQ1cHg7XG5cbiJdfQ== */";
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
    /* harmony import */


    var _shared_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared-service.service */
    "./src/app/shared-service.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AboutUsPage = /*#__PURE__*/function () {
      function AboutUsPage(sharedService, adminService, modalController, router, location) {
        _classCallCheck(this, AboutUsPage);

        this.sharedService = sharedService;
        this.adminService = adminService;
        this.modalController = modalController;
        this.router = router;
        this.location = location;
        this.slideOpts = {
          initialSlide: 1,
          speed: 400,
          autoplay: true,
          loop: true
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
        };
        this.mainSliderObservable = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"](); //Item object for Nature

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
                      swipeToClose: true,
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
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this11 = this;

          this.mainSliderObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["interval"])(3000).subscribe(function (x) {
            _this11.mainSlide.startAutoplay().then();
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.sharedService.showBackIcon.next(true);
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.sharedService.showBackIcon.next(false);
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
          var _this12 = this;

          slideView.slideNext(500).then(function () {
            _this12.checkIfNavDisabled(object, slideView);
          });
        } //Move to previous slide

      }, {
        key: "slidePrev",
        value: function slidePrev(object, slideView) {
          var _this13 = this;

          slideView.slidePrev(500).then(function () {
            _this13.checkIfNavDisabled(object, slideView);
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
          this.router.navigate(['/portfolio']);
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
          var _this14 = this;

          this.adminService.getProducts().subscribe(function (res) {
            return _this14.getProductSuccess(res);
          }, function (error) {
            _this14.adminService.commonError(error);
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
        type: _shared_service_service__WEBPACK_IMPORTED_MODULE_7__["SharedServiceService"]
      }, {
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mainSlide', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], AboutUsPage.prototype, "mainSlide", void 0);
    AboutUsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about-us',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about-us.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about-us.page.scss */
      "./src/app/pages/about-us/about-us.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_service__WEBPACK_IMPORTED_MODULE_7__["SharedServiceService"], _api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])], AboutUsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-about-us-about-us-module-es5.js.map