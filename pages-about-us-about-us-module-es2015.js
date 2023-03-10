(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-us-about-us-module"],{

/***/ "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js":
/*!************************************************************************!*\
  !*** ./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js ***!
  \************************************************************************/
/*! exports provided: SlickCarouselComponent, SlickCarouselModule, SlickItemDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickCarouselComponent", function() { return SlickCarouselComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickCarouselModule", function() { return SlickCarouselModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickItemDirective", function() { return SlickItemDirective; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




/**
 * @fileoverview added by tsickle
 * Generated from: slick.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Slick component
 */
class SlickCarouselComponent {
    /**
     * Constructor
     * @param {?} el
     * @param {?} zone
     * @param {?} platformId
     */
    constructor(el, zone, platformId) {
        this.el = el;
        this.zone = zone;
        this.platformId = platformId;
        this.afterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.beforeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.breakpoint = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.destroy = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.init = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // access from parent component can be a problem with change detection timing. Please use afterChange output
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
    ngOnDestroy() {
        this.unslick();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.ngAfterViewChecked();
    }
    /**
     * On component view checked
     * @return {?}
     */
    ngAfterViewChecked() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformServer"])(this.platformId)) {
            return;
        }
        if (this._addedSlides.length > 0 || this._removedSlides.length > 0) {
            /** @type {?} */
            const nextSlidesLength = this.slides.length - this._removedSlides.length + this._addedSlides.length;
            if (!this.initialized) {
                if (nextSlidesLength > 0) {
                    this.initSlick();
                }
                // if nextSlidesLength is zere, do nothing
            }
            else if (nextSlidesLength === 0) { // unslick case
                this.unslick();
            }
            else {
                this._addedSlides.forEach((/**
                 * @param {?} slickItem
                 * @return {?}
                 */
                slickItem => {
                    this.slides.push(slickItem);
                    this.zone.runOutsideAngular((/**
                     * @return {?}
                     */
                    () => {
                        this.$instance.slick('slickAdd', slickItem.el.nativeElement);
                    }));
                }));
                this._addedSlides = [];
                this._removedSlides.forEach((/**
                 * @param {?} slickItem
                 * @return {?}
                 */
                slickItem => {
                    /** @type {?} */
                    const idx = this.slides.indexOf(slickItem);
                    this.slides = this.slides.filter((/**
                     * @param {?} s
                     * @return {?}
                     */
                    s => s !== slickItem));
                    this.zone.runOutsideAngular((/**
                     * @return {?}
                     */
                    () => {
                        this.$instance.slick('slickRemove', idx);
                    }));
                }));
                this._removedSlides = [];
            }
        }
    }
    /**
     * init slick
     * @return {?}
     */
    initSlick() {
        this.slides = this._addedSlides;
        this._addedSlides = [];
        this._removedSlides = [];
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.$instance = jQuery(this.el.nativeElement);
            this.$instance.on('init', (/**
             * @param {?} event
             * @param {?} slick
             * @return {?}
             */
            (event, slick) => {
                this.zone.run((/**
                 * @return {?}
                 */
                () => {
                    this.init.emit({ event, slick });
                }));
            }));
            this.$instance.slick(this.config);
            this.zone.run((/**
             * @return {?}
             */
            () => {
                var _a;
                this.initialized = true;
                this.currentIndex = ((_a = this.config) === null || _a === void 0 ? void 0 : _a.initialSlide) || 0;
            }));
            this.$instance.on('afterChange', (/**
             * @param {?} event
             * @param {?} slick
             * @param {?} currentSlide
             * @return {?}
             */
            (event, slick, currentSlide) => {
                this.zone.run((/**
                 * @return {?}
                 */
                () => {
                    this.afterChange.emit({
                        event,
                        slick,
                        currentSlide,
                        first: currentSlide === 0,
                        last: slick.$slides.length === currentSlide + slick.options.slidesToScroll
                    });
                    this.currentIndex = currentSlide;
                }));
            }));
            this.$instance.on('beforeChange', (/**
             * @param {?} event
             * @param {?} slick
             * @param {?} currentSlide
             * @param {?} nextSlide
             * @return {?}
             */
            (event, slick, currentSlide, nextSlide) => {
                this.zone.run((/**
                 * @return {?}
                 */
                () => {
                    this.beforeChange.emit({ event, slick, currentSlide, nextSlide });
                    this.currentIndex = nextSlide;
                }));
            }));
            this.$instance.on('breakpoint', (/**
             * @param {?} event
             * @param {?} slick
             * @param {?} breakpoint
             * @return {?}
             */
            (event, slick, breakpoint) => {
                this.zone.run((/**
                 * @return {?}
                 */
                () => {
                    this.breakpoint.emit({ event, slick, breakpoint });
                }));
            }));
            this.$instance.on('destroy', (/**
             * @param {?} event
             * @param {?} slick
             * @return {?}
             */
            (event, slick) => {
                this.zone.run((/**
                 * @return {?}
                 */
                () => {
                    this.destroy.emit({ event, slick });
                    this.initialized = false;
                }));
            }));
        }));
    }
    /**
     * @param {?} slickItem
     * @return {?}
     */
    addSlide(slickItem) {
        this._addedSlides.push(slickItem);
    }
    /**
     * @param {?} slickItem
     * @return {?}
     */
    removeSlide(slickItem) {
        this._removedSlides.push(slickItem);
    }
    /**
     * Slick Method
     * @param {?} index
     * @return {?}
     */
    slickGoTo(index) {
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.$instance.slick('slickGoTo', index);
        }));
    }
    /**
     * @return {?}
     */
    slickNext() {
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.$instance.slick('slickNext');
        }));
    }
    /**
     * @return {?}
     */
    slickPrev() {
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.$instance.slick('slickPrev');
        }));
    }
    /**
     * @return {?}
     */
    slickPause() {
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.$instance.slick('slickPause');
        }));
    }
    /**
     * @return {?}
     */
    slickPlay() {
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.$instance.slick('slickPlay');
        }));
    }
    /**
     * @return {?}
     */
    unslick() {
        if (this.$instance) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.$instance.slick('unslick');
            }));
            this.$instance = undefined;
        }
        this.initialized = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.initialized) {
            /** @type {?} */
            const config = changes['config'];
            if (config.previousValue !== config.currentValue && config.currentValue !== undefined) {
                /** @type {?} */
                const refresh = config.currentValue['refresh'];
                /** @type {?} */
                const newOptions = Object.assign({}, config.currentValue);
                delete newOptions['refresh'];
                this.zone.runOutsideAngular((/**
                 * @return {?}
                 */
                () => {
                    this.$instance.slick('slickSetOption', newOptions, refresh);
                }));
            }
        }
    }
}
SlickCarouselComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'ngx-slick-carousel',
                exportAs: 'slick-carousel',
                providers: [{
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((/**
                         * @return {?}
                         */
                        () => SlickCarouselComponent)),
                        multi: true
                    }],
                template: '<ng-content></ng-content>'
            }] }
];
/** @nocollapse */
SlickCarouselComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
];
SlickCarouselComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    afterChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    beforeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    breakpoint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    destroy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    init: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
if (false) {}
class SlickItemDirective {
    /**
     * @param {?} el
     * @param {?} platformId
     * @param {?} carousel
     */
    constructor(el, platformId, carousel) {
        this.el = el;
        this.platformId = platformId;
        this.carousel = carousel;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
            this.carousel.addSlide(this);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
            this.carousel.removeSlide(this);
        }
    }
}
SlickItemDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[ngxSlickItem]',
            },] }
];
/** @nocollapse */
SlickItemDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
    { type: SlickCarouselComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SlickCarouselModule {
}
SlickCarouselModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
                ],
                declarations: [
                    SlickCarouselComponent,
                    SlickItemDirective,
                ],
                exports: [
                    SlickCarouselComponent,
                    SlickItemDirective,
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-slick-carousel.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ngx-slick-carousel.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sandhyadeep-header class=\"z-index-999\"></sandhyadeep-header>\r\n<ion-content>\r\n    <div class=\"about-us-container\">\r\n        <div class=\"image-container\">\r\n            <div class=\"about-us-image\">\r\n                <ion-slides #mainSlide class=\"feed-sliders height-350\" pager=\"true\" [options]=\"slideOpts\">\r\n                    <ion-slide class=\"feed-images feed-slider feed-slider-one\">\r\n\r\n                    </ion-slide>\r\n                    <ion-slide class=\"feed-images feed-slider feed-slider-two\">\r\n\r\n                    </ion-slide>\r\n                    <ion-slide class=\"feed-images feed-slider feed-slider-three\">\r\n\r\n                    </ion-slide>\r\n                    <ion-slide class=\"feed-images feed-slider feed-slider-four\">\r\n\r\n                    </ion-slide>\r\n                    <ion-slide class=\"feed-images feed-slider feed-slider-five\">\r\n\r\n                    </ion-slide>\r\n                </ion-slides>\r\n            </div>\r\n            <div class=\"about-us-heading\">\r\n                <div class=\"heading-text\">\r\n                    <b>Sandhyadeep Beauty Parlour</b>\r\n                </div>\r\n                <div class=\"slogan-text\">\r\n                    Have a hair affair with us\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"description-container\">\r\n            <div class=\"description-toggle-menus\">\r\n                <div matRipple [matRippleCentered]=\"true\" (click)=\"onSelectMenu('about_us')\"\r\n                     class=\"toggle-menu-background about-us\"\r\n                     [class.active]=\"selectedMenu === 'about_us'\">\r\n                    <div class=\"toggle-menu\" [class.active]=\"selectedMenu === 'about_us'\">About Us</div>\r\n                </div>\r\n                <div matRipple [matRippleCentered]=\"true\" (click)=\"onSelectMenu('services')\"\r\n                     class=\"toggle-menu-background services\"\r\n                     [class.active]=\"selectedMenu === 'services'\">\r\n                    <div class=\"toggle-menu\" [class.active]=\"selectedMenu === 'services'\">Services</div>\r\n                </div>\r\n                <div matRipple [matRippleCentered]=\"true\" (click)=\"onSelectMenu('owner')\"\r\n                     class=\"toggle-menu-background owner\"\r\n                     [class.active]=\"selectedMenu === 'owner'\">\r\n                    <div class=\"toggle-menu\" [class.active]=\"selectedMenu === 'owner'\">Our Owner</div>\r\n                </div>\r\n<!--                TODO: We removed Products for now-->\r\n<!--                <div matRipple [matRippleCentered]=\"true\" (click)=\"onSelectMenu('products')\"-->\r\n<!--                     class=\"toggle-menu-background product\"-->\r\n<!--                     [class.active]=\"selectedMenu === 'products'\">-->\r\n<!--                    <div class=\"toggle-menu\" [class.active]=\"selectedMenu === 'products'\">Products</div>-->\r\n<!--                </div>-->\r\n            </div>\r\n            <div class=\"description-data-container\">\r\n                <div *ngIf=\"selectedMenu === 'about_us'\" class=\"about-us-page-container\">\r\n                    <div class=\"tab-container border-bottom\">\r\n                        <div class=\"heading-text\">\r\n                            <b>Description</b>\r\n                        </div>\r\n                        <div class=\"content-div\">\r\n                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to\r\n                            demonstrate the visual form of a document or a typeface without relying on meaningful conte\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"tab-container\">\r\n                        <div class=\"heading-text\">\r\n                            <b>Information</b>\r\n                        </div>\r\n                        <div class=\"timing\">\r\n                            <div>Sunday - Friday</div>\r\n                            <div>10:00 AM - 07:00 PM</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"tab-container margin-bottom-20\">\r\n                        <div class=\"content-div\">\r\n                            5595, Near Samarth Vidya Mandir, Anandi Bazar, Ahmednagar, Maharashtra, 414001\r\n                        </div>\r\n                        <div class=\"phone-number-div\">\r\n                            <div>+91-9422086335</div>\r\n                            <div>\r\n                                <div class=\"phone-icon\">\r\n                                    <i class=\"fa fa-phone\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"selectedMenu === 'services'\" class=\"services-container\">\r\n                    <div class=\"page-container\">\r\n                        <service-list (updateAmount)=\"updateData($event)\"></service-list>\r\n                    </div>\r\n                    <ion-footer *ngIf=\"selectedMenu === 'services'\" class=\"ion-no-border\">\r\n                        <ion-toolbar>\r\n                            <div class=\"appointment-footer\">\r\n                                <div class=\"total-div-container\">\r\n                                    <div class=\"total-div\">\r\n                                        <div>Total</div>\r\n                                        <div class=\"total-div-price\">{{selectedServices}} Services</div>\r\n                                    </div>\r\n                                    <div>\r\n                                        {{amountPurchased}} ₹\r\n                                    </div>\r\n                                </div>\r\n                                <div (click)=\"onBookAppointment()\" class=\"default-button\">\r\n                                    <button> Book Appointment</button>\r\n                                </div>\r\n                            </div>\r\n                        </ion-toolbar>\r\n                    </ion-footer>\r\n                </div>\r\n                <div *ngIf=\"selectedMenu === 'owner'\" class=\"owner-container\">\r\n                    <div class=\"ion-image-slides border-bottom\">\r\n                        <ion-grid>\r\n                            <ion-row>\r\n                                <!--                                <ion-col size=\"1\">-->\r\n                                <!--                                <span class=\"slider-nav arrow-prev\" (click)=\"slidePrev(sliderTwo,slideWithNav2)\">-->\r\n                                <!--                                  <div class=\"prev-icon-custom custon-nav\" [class.disabled]=\"sliderTwo.isBeginningSlide\"></div>-->\r\n                                <!--                                </span>-->\r\n                                <!--                                </ion-col>-->\r\n                                <div class=\"scroll-arrow arrow-left\" (click)=\"slidePrev(sliderTwo,slideWithNav2)\">\r\n                                    <i class=\"fa fa-angle-left\"></i>\r\n                                </div>\r\n                                <ion-col size=\"12\">\r\n                                    <ion-slides pager=\"false\" [options]=\"slideOptsTwo\" #slideWithNav2\r\n                                                (ionSlideDidChange)=\"SlideDidChange(sliderTwo,slideWithNav2)\">\r\n                                        <ion-slide *ngFor=\"let slide of sliderTwo.slidesItems\">\r\n                                            <img style=\"object-fit: cover\" src={{slide.url}} imageViewer/>\r\n                                        </ion-slide>\r\n                                    </ion-slides>\r\n                                </ion-col>\r\n                                <div class=\"scroll-arrow arrow-right\" (click)=\"slideNext(sliderTwo,slideWithNav2)\">\r\n                                    <i class=\"fa fa-angle-right\"></i>\r\n                                </div>\r\n                                <!--                                <ion-col size=\"1\">-->\r\n                                <!--                                <span class=\"slider-nav arrow-next\" (click)=\"slideNext(sliderTwo,slideWithNav2)\">-->\r\n                                <!--                                  <div class=\"next-icon-custom custon-nav\" [class.disabled]=\"sliderTwo.isEndSlide\"></div>-->\r\n                                <!--                                </span>-->\r\n                                <!--                                </ion-col>-->\r\n                            </ion-row>\r\n                        </ion-grid>\r\n                    </div>\r\n\r\n                    <div class=\"tab-container border-bottom\">\r\n                        <div class=\"heading-text\">\r\n                            <b>Description</b>\r\n                        </div>\r\n                        <div class=\"content-div\">\r\n                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to\r\n                            demonstrate the visual form of a document or a typeface without relying on meaningful conte\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"tab-container border-bottom\">\r\n                        <div class=\"heading-text\">\r\n                            <b>Achievements</b>\r\n                        </div>\r\n                        <div class=\"content-div\">\r\n                            <ul>\r\n                                <li>Media & Beauty Makeup Diploma · Media Makeup · Fsx · Singapore</li>\r\n                                <li>Makeup Techniques with Air Brush Machine · Mumbai, Maharashtra</li>\r\n                                <li>Master Diploma in Makeup Artistry · Singapore</li>\r\n                                <li>Comite International D’Esthetique Et De Cosmetologie., Zurich.</li>\r\n                                <li>British Association of Beauty Therapy & Cosmetology, London.</li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"tab-container\">\r\n                        <div class=\"heading-text\">\r\n                            <b>Portfolio</b>\r\n                            <div (click)=\"onSeeAllPortfolios()\" class=\"know-more\">See All <i\r\n                                    class=\"fa fa-angle-right\"></i></div>\r\n                        </div>\r\n                        <div class=\"content-div\">\r\n                            <ngx-slick-carousel class=\"carousel\"\r\n                                                #slickModal=\"slick-carousel\"\r\n                                                [config]=\"slideConfig\"\r\n                                                (init)=\"slickInit($event)\"\r\n                                                (breakpoint)=\"breakpoint($event)\"\r\n                                                (afterChange)=\"afterChange($event)\"\r\n                                                (beforeChange)=\"beforeChange($event)\">\r\n                                <div ngxSlickItem *ngFor=\"let slide of slides\" class=\"slide custom-slide\">\r\n                                    <img src=\"{{ slide.img }}\" alt=\"\" width=\"100%\">\r\n                                </div>\r\n                            </ngx-slick-carousel>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"selectedMenu === 'products'\" class=\"product-container\">\r\n                    <div *ngIf=\"productList?.length > 0\">\r\n                        <app-product-list [productList]=\"productList\"></app-product-list>\r\n                    </div>\r\n                    <div *ngIf=\"productList?.length === 0\" class=\"no-data\">\r\n                        No Products Available\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <script id=\"image-modal.html\" type=\"text/ng-template\">\r\n        <div class=\"modal image-modal transparent\" ng-click=\"closeModal()\">\r\n            <ion-pane class=\"transparent\">\r\n                <img ng-src=\"{{imageSrc}}\" class=\"fullscreen-image\"/>\r\n            </ion-pane>\r\n        </div>\r\n    </script>\r\n</ion-content>\r\n\r\n<app-footer-component></app-footer-component>\r\n<app-logo-spinner></app-logo-spinner>\r\n");

/***/ }),

/***/ "./src/app/pages/about-us/about-us-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/about-us/about-us-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AboutUsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageRoutingModule", function() { return AboutUsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-us.page */ "./src/app/pages/about-us/about-us.page.ts");




const routes = [
    {
        path: '',
        component: _about_us_page__WEBPACK_IMPORTED_MODULE_3__["AboutUsPage"]
    }
];
let AboutUsPageRoutingModule = class AboutUsPageRoutingModule {
};
AboutUsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AboutUsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/about-us/about-us.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/about-us/about-us.module.ts ***!
  \***************************************************/
/*! exports provided: AboutUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageModule", function() { return AboutUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _about_us_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-us-routing.module */ "./src/app/pages/about-us/about-us-routing.module.ts");
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-us.page */ "./src/app/pages/about-us/about-us.page.ts");
/* harmony import */ var _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared-components/header-component/header-component.module */ "./src/app/shared-components/header-component/header-component.module.ts");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/services.module */ "./src/app/pages/services/services.module.ts");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _shared_components_modal_popup_modal_popup_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared-components/modal-popup/modal-popup.module */ "./src/app/shared-components/modal-popup/modal-popup.module.ts");
/* harmony import */ var _shared_components_modal_popup_modal_popup_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared-components/modal-popup/modal-popup.page */ "./src/app/shared-components/modal-popup/modal-popup.page.ts");
/* harmony import */ var _shared_components_search_header_component_search_header_component_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared-components/search-header-component/search-header-component.module */ "./src/app/shared-components/search-header-component/search-header-component.module.ts");
/* harmony import */ var _shared_components_services_list_services_list_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared-components/services-list/services-list.module */ "./src/app/shared-components/services-list/services-list.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_components_product_list_product_list_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared-components/product-list/product-list.module */ "./src/app/shared-components/product-list/product-list.module.ts");
/* harmony import */ var _shared_components_footer_component_footer_component_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared-components/footer-component/footer-component.module */ "./src/app/shared-components/footer-component/footer-component.module.ts");
/* harmony import */ var _shared_components_logo_spinner_logo_spinner_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared-components/logo-spinner/logo-spinner.module */ "./src/app/shared-components/logo-spinner/logo-spinner.module.ts");


















let AboutUsPageModule = class AboutUsPageModule {
};
AboutUsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _about_us_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutUsPageRoutingModule"],
            _shared_components_header_component_header_component_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"],
            _services_services_module__WEBPACK_IMPORTED_MODULE_8__["ServicePageModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_9__["SlickCarouselModule"],
            _shared_components_modal_popup_modal_popup_module__WEBPACK_IMPORTED_MODULE_10__["ModalPopupModule"],
            _shared_components_search_header_component_search_header_component_module__WEBPACK_IMPORTED_MODULE_12__["SearchHeaderComponentModule"],
            _shared_components_services_list_services_list_module__WEBPACK_IMPORTED_MODULE_13__["ServicesListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"],
            _shared_components_product_list_product_list_module__WEBPACK_IMPORTED_MODULE_15__["ProductListModule"],
            _shared_components_footer_component_footer_component_module__WEBPACK_IMPORTED_MODULE_16__["FooterComponentModule"],
            _shared_components_logo_spinner_logo_spinner_module__WEBPACK_IMPORTED_MODULE_17__["LogoSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"]
        ],
        entryComponents: [_shared_components_modal_popup_modal_popup_page__WEBPACK_IMPORTED_MODULE_11__["ModalPopupPage"]],
        declarations: [_about_us_page__WEBPACK_IMPORTED_MODULE_6__["AboutUsPage"]]
    })
], AboutUsPageModule);



/***/ }),

/***/ "./src/app/pages/about-us/about-us.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/about-us/about-us.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top-adjust {\n  top: 65px;\n}\n\n.page-container {\n  padding: 0 15px;\n}\n\n.page-container .page-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 18px 0 5px;\n}\n\n.page-container .page-heading .heading-text {\n  font-size: 24px;\n}\n\n.down {\n  transform: rotate(90deg);\n  -webkit-transform: rotate(90deg);\n  transition: ease-in-out 300ms;\n}\n\n.color-666 {\n  color: #666;\n}\n\n.about-us-container {\n  padding: 0 15px;\n}\n\n.image-container {\n  padding: 15px 0;\n}\n\n.image-container .about-us-image .feed-sliders {\n  height: 350px;\n  border-radius: 10px;\n}\n\n.image-container .about-us-image .feed-sliders.height-200 {\n  height: 350px;\n}\n\n.image-container .about-us-image .feed-sliders .feed-slider {\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-position: center center !important;\n  max-height: 30em;\n}\n\n.image-container .about-us-image .feed-sliders .feed-slider.feed-slider-one {\n  background: url('sandhyadeep5.png');\n}\n\n.image-container .about-us-image .feed-sliders .feed-slider.feed-slider-two {\n  background: url('sandhyadeep3.png');\n}\n\n.image-container .about-us-image .feed-sliders .feed-slider.feed-slider-three {\n  background: url('sandhyadeep1.png');\n}\n\n.image-container .about-us-image .feed-sliders .feed-slider.feed-slider-four {\n  background: url('sandhyadeep2.png');\n}\n\n.image-container .about-us-image .feed-sliders .feed-slider.feed-slider-five {\n  background: url('sandhyadeep6.png');\n}\n\n.image-container .about-us-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  margin: 18px 0 5px;\n}\n\n.image-container .about-us-heading .heading-text {\n  font-size: 20px;\n}\n\n.image-container .about-us-heading .slogan-text {\n  font-size: 14px;\n}\n\n.description-container {\n  padding: 15px 0 0;\n}\n\n.description-container .description-toggle-menus {\n  display: flex;\n  justify-content: space-between;\n}\n\n.description-container .description-toggle-menus .toggle-menu-background {\n  padding-bottom: 4px;\n  width: 25%;\n  text-align: center;\n  transition: all 0.1s;\n}\n\n.description-container .description-toggle-menus .toggle-menu-background.active {\n  border-bottom: 3px solid #BD1E51;\n}\n\n.description-container .description-toggle-menus .toggle-menu-background .toggle-menu {\n  color: #666;\n}\n\n.description-container .description-toggle-menus .toggle-menu-background .toggle-menu.active {\n  color: #265791;\n  font-weight: bold;\n}\n\n.description-container .description-data-container {\n  padding: 5px 0 0;\n}\n\n.about-us-page-container .tab-container, .owner-container .tab-container {\n  margin-bottom: 10px;\n  padding-bottom: 5px;\n}\n\n.about-us-page-container .heading-text, .owner-container .heading-text {\n  display: flex;\n  justify-content: space-between;\n  font-size: 20px;\n  align-items: center;\n}\n\n.about-us-page-container .heading-text .know-more, .owner-container .heading-text .know-more {\n  font-size: 14px;\n}\n\n.about-us-page-container .content-div, .owner-container .content-div {\n  padding: 5px 0;\n  font-size: 14px;\n}\n\n.about-us-page-container .phone-number-div, .owner-container .phone-number-div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.about-us-page-container .phone-number-div .phone-icon, .owner-container .phone-number-div .phone-icon {\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  background-color: #265791;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n}\n\n.about-us-page-container .timing, .owner-container .timing {\n  color: #666;\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 0;\n}\n\n.services-container {\n  margin-bottom: 10px;\n}\n\n.services-container .heading-text {\n  font-size: 20px;\n}\n\n.product-container .no-data {\n  text-align: center;\n  padding: 30px 0;\n  color: #666;\n}\n\n.padding-bottom-15 {\n  padding-bottom: 15px !important;\n}\n\n.border-bottom {\n  border-bottom: 1px solid lightgray;\n}\n\n.appointment-footer {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 15px 0;\n}\n\n.appointment-footer .total-div-container {\n  display: flex;\n  padding: 10px;\n  background: #d3d3d37d;\n  justify-content: space-between;\n  border-radius: 7px;\n}\n\n.appointment-footer .total-div-container .total-div {\n  display: flex;\n}\n\n.appointment-footer .total-div-container .total-div .total-div-price {\n  color: #666;\n  margin-left: 15px;\n}\n\n.custon-nav {\n  height: 48px;\n  width: 20px;\n  cursor: pointer;\n  vertical-align: middle;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.prev-icon-custom {\n  background: url(https://freakyjolly.com/demo/jquery/OwlCarousel2/nav-icon.png) no-repeat scroll 0px 0px;\n}\n\n.prev-icon-custom.disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n\n.next-icon-custom {\n  background: url(https://freakyjolly.com/demo/jquery/OwlCarousel2/nav-icon.png) no-repeat scroll -32px 0px;\n}\n\n.next-icon-custom.disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n\n.slider-nav ion-icon {\n  height: 100%;\n}\n\n.slide-text {\n  position: absolute;\n  color: white;\n  bottom: 30px;\n}\n\nion-grid ion-row {\n  position: relative;\n}\n\nion-grid ion-row .ion-image-slides {\n  margin-bottom: 10px;\n  padding: 5px 0;\n}\n\n.scroll-arrow {\n  display: flex;\n  align-items: center;\n  font-size: 35px;\n  padding: 0 16px;\n  color: white;\n  position: absolute;\n  z-index: 99999;\n  height: 100%;\n  width: 50%;\n}\n\n.scroll-arrow.arrow-left {\n  background: linear-gradient(to right, #2f3032d1, #2f30327a, transparent, transparent, transparent);\n}\n\n.scroll-arrow.arrow-right {\n  justify-content: flex-end;\n  background: linear-gradient(to left, #2f3032d1, #2f30327a, transparent, transparent, transparent);\n  left: 50%;\n}\n\n.custom-slide {\n  margin: 0 5px;\n}\n\n.know-more {\n  color: #666;\n}\n\n.margin-bottom-20 {\n  margin-bottom: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQtdXMvQzpcXFVzZXJzXFxhYWJoYWd3YVxcc2FuZGh5YWRlZXBcXHNhbmRoeWFkZWVwLXVpL3NyY1xcYXBwXFxwYWdlc1xcYWJvdXQtdXNcXGFib3V0LXVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWJvdXQtdXMvYWJvdXQtdXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hYm91dC11cy9DOlxcVXNlcnNcXGFhYmhhZ3dhXFxzYW5kaHlhZGVlcFxcc2FuZGh5YWRlZXAtdWkvc3JjXFxzYW5kaHlhZGVlcC10aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsU0FBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtBQ0RGOztBREdFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0RKOztBREdJO0VBQ0UsZUFBQTtBQ0ROOztBRE9BO0VBQ0Usd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FDSkY7O0FET0E7RUFDRSxXQUFBO0FDSkY7O0FEUUE7RUFDRSxlQUFBO0FDTEY7O0FEUUE7RUFDRSxlQUFBO0FDTEY7O0FEUUk7RUFDRSxhQUFBO0VBU0EsbUJBQUE7QUNkTjs7QURVTTtFQUNFLGFBQUE7QUNSUjs7QURhTTtFQUNFLHVDQUFBO0VBQ0EsaUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0FDWFI7O0FEYVE7RUFDRSxtQ0FBQTtBQ1hWOztBRGNRO0VBQ0UsbUNBQUE7QUNaVjs7QURlUTtFQUNFLG1DQUFBO0FDYlY7O0FEZ0JRO0VBQ0UsbUNBQUE7QUNkVjs7QURpQlE7RUFDRSxtQ0FBQTtBQ2ZWOztBRHFCRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ25CSjs7QURxQkk7RUFDRSxlQUFBO0FDbkJOOztBRHNCSTtFQUNFLGVBQUE7QUNwQk47O0FEeUJBO0VBQ0UsaUJBQUE7QUN0QkY7O0FEd0JFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDdEJKOztBRHdCSTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUN0Qk47O0FEdUJNO0VBQ0UsZ0NBQUE7QUNyQlI7O0FEd0JNO0VBQ0UsV0FBQTtBQ3RCUjs7QUR3QlE7RUFDRSxjRWpIUTtFRmtIUixpQkFBQTtBQ3RCVjs7QUR5Q0U7RUFDRSxnQkFBQTtBQ3ZDSjs7QUQ4Q0U7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FDM0NKOztBRCtDRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQzdDSjs7QUQ4Q0k7RUFDRSxlQUFBO0FDNUNOOztBRGdERTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDOUNKOztBRGlERTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDL0NKOztBRGlESTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkUzS1k7RUY0S1osYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDL0NOOztBRG1ERTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FDakRKOztBRHFEQTtFQUNFLG1CQUFBO0FDbERGOztBRG9ERTtFQUNFLGVBQUE7QUNsREo7O0FEMkRFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ3hESjs7QUQ0REE7RUFDRSwrQkFBQTtBQ3pERjs7QUQ0REE7RUFDRSxrQ0FBQTtBQ3pERjs7QUQ0REE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQ3pERjs7QUQyREU7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQ3pESjs7QUQyREk7RUFDRSxhQUFBO0FDekROOztBRDJETTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ3pEUjs7QURnRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDOURGOztBRGdFQTtFQUNFLHVHQUFBO0FDN0RGOztBRCtEQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDNURGOztBRDhEQTtFQUNFLHlHQUFBO0FDM0RGOztBRDZEQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDMURGOztBRDZERTtFQUNFLFlBQUE7QUMxREo7O0FEOERBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQzNERjs7QURpRUU7RUFDRSxrQkFBQTtBQzlESjs7QUQrREk7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUM3RFI7O0FEa0VBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUMvREY7O0FEZ0VFO0VBQ0Usa0dBQUE7QUM5REo7O0FEZ0VFO0VBQ0UseUJBQUE7RUFDQSxpR0FBQTtFQUNBLFNBQUE7QUM5REo7O0FEd0ZBO0VBQ0UsYUFBQTtBQ3JGRjs7QUR3RkE7RUFDRSxXQUFBO0FDckZGOztBRHdGQTtFQUNFLDhCQUFBO0FDckZGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWJvdXQtdXMvYWJvdXQtdXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3NhbmRoeWFkZWVwLXRoZW1lXCI7XHJcblxyXG4udG9wLWFkanVzdCB7XHJcbiAgdG9wOiA2NXB4O1xyXG59XHJcblxyXG4ucGFnZS1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDAgMTVweDtcclxuXHJcbiAgLnBhZ2UtaGVhZGluZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMThweCAwIDVweDtcclxuXHJcbiAgICAuaGVhZGluZy10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi5kb3duIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMzAwbXM7XHJcbn1cclxuXHJcbi5jb2xvci02NjYge1xyXG4gIGNvbG9yOiAjNjY2O1xyXG59XHJcblxyXG5cclxuLmFib3V0LXVzLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMCAxNXB4O1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcblxyXG4gIC5hYm91dC11cy1pbWFnZSB7XHJcbiAgICAuZmVlZC1zbGlkZXJzIHtcclxuICAgICAgaGVpZ2h0OiAzNTBweDtcclxuXHJcbiAgICAgICYuaGVpZ2h0LTM1MCB7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuaGVpZ2h0LTIwMCB7XHJcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICAgIC5mZWVkLXNsaWRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMzBlbTtcclxuXHJcbiAgICAgICAgJi5mZWVkLXNsaWRlci1vbmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9zYW5kaHlhZGVlcDUucG5nXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5mZWVkLXNsaWRlci10d28ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9zYW5kaHlhZGVlcDMucG5nXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5mZWVkLXNsaWRlci10aHJlZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL3NhbmRoeWFkZWVwMS5wbmdcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmZlZWQtc2xpZGVyLWZvdXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9zYW5kaHlhZGVlcDIucG5nXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5mZWVkLXNsaWRlci1maXZlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvc2FuZGh5YWRlZXA2LnBuZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hYm91dC11cy1oZWFkaW5nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogMThweCAwIDVweDtcclxuXHJcbiAgICAuaGVhZGluZy10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zbG9nYW4tdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE1cHggMCAwO1xyXG5cclxuICAuZGVzY3JpcHRpb24tdG9nZ2xlLW1lbnVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgLnRvZ2dsZS1tZW51LWJhY2tncm91bmQge1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgICB3aWR0aDogMjUlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjFzO1xyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudG9nZ2xlLW1lbnUge1xyXG4gICAgICAgIGNvbG9yOiAjNjY2O1xyXG5cclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5hYm91dC11cyB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5zZXJ2aWNlcyB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLm93bmVyIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYucHJvZHVjdCB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZGVzY3JpcHRpb24tZGF0YS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogNXB4IDAgMDtcclxuXHJcblxyXG4gIH1cclxuXHJcbn1cclxuLmFib3V0LXVzLXBhZ2UtY29udGFpbmVyLCAub3duZXItY29udGFpbmVyIHtcclxuICAudGFiLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICB9XHJcblxyXG5cclxuICAuaGVhZGluZy10ZXh0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLmtub3ctbW9yZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250ZW50LWRpdiB7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG4gIC5waG9uZS1udW1iZXItZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC5waG9uZS1pY29uIHtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRpbWluZyB7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICB9XHJcbn1cclxuXHJcbi5zZXJ2aWNlcy1jb250YWluZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gIC5oZWFkaW5nLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm93bmVyLWNvbnRhaW5lciB7XHJcblxyXG59XHJcblxyXG4ucHJvZHVjdC1jb250YWluZXIge1xyXG4gIC5uby1kYXRhIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDMwcHggMDtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gIH1cclxufVxyXG5cclxuLnBhZGRpbmctYm90dG9tLTE1IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9yZGVyLWJvdHRvbSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLmFwcG9pbnRtZW50LWZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweCAwO1xyXG5cclxuICAudG90YWwtZGl2LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNkM2QzZDM3ZDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuXHJcbiAgICAudG90YWwtZGl2IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgIC50b3RhbC1kaXYtcHJpY2Uge1xyXG4gICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTbGlkZXIgU3R5bGUgU1RBUlRcclxuLmN1c3Rvbi1uYXZ7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcbi5wcmV2LWljb24tY3VzdG9te1xyXG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL2ZyZWFreWpvbGx5LmNvbS9kZW1vL2pxdWVyeS9Pd2xDYXJvdXNlbDIvbmF2LWljb24ucG5nKSBuby1yZXBlYXQgc2Nyb2xsIDBweCAwcHg7XHJcbn1cclxuLnByZXYtaWNvbi1jdXN0b20uZGlzYWJsZWR7XHJcbiAgb3BhY2l0eTogMC40O1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG4ubmV4dC1pY29uLWN1c3RvbXtcclxuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9mcmVha3lqb2xseS5jb20vZGVtby9qcXVlcnkvT3dsQ2Fyb3VzZWwyL25hdi1pY29uLnBuZykgbm8tcmVwZWF0IHNjcm9sbCAtMzJweCAwcHg7XHJcbn1cclxuLm5leHQtaWNvbi1jdXN0b20uZGlzYWJsZWR7XHJcbiAgb3BhY2l0eTogMC40O1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG4uc2xpZGVyLW5hdntcclxuICBpb24taWNvbntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5zbGlkZS10ZXh0e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4vLyBTdHlsaW5nIHRvIHNob3cgdGhlIGFycm93IG9uIHNsaWRlcyAtIHN0YXJ0XHJcblxyXG5pb24tZ3JpZCB7XHJcbiAgaW9uLXJvdyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAuaW9uLWltYWdlLXNsaWRlcyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zY3JvbGwtYXJyb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogOTk5OTk7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgJi5hcnJvdy1sZWZ0IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzJmMzAzMmQxLCAjMmYzMDMyN2EsIHRyYW5zcGFyZW50LCB0cmFuc3BhcmVudCwgdHJhbnNwYXJlbnQpO1xyXG4gIH1cclxuICAmLmFycm93LXJpZ2h0IHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzJmMzAzMmQxLCAjMmYzMDMyN2EsIHRyYW5zcGFyZW50LCB0cmFuc3BhcmVudCwgdHJhbnNwYXJlbnQpO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gIH1cclxufVxyXG5cclxuLy8gU3R5bGluZyB0byBzaG93IHRoZSBhcnJvdyBvbiBzbGlkZXMgLSBlbmRcclxuXHJcbi8vIFN0eWxpbmcgdG8gc2hvdyB0aGUgYXJyb3cgb24gb3V0c2lkZSAtIHN0YXJ0XHJcblxyXG4vLy5pb24taW1hZ2Utc2xpZGVzIHtcclxuLy8gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbi8vICBwYWRkaW5nOiA1cHggMDtcclxuLy8gIC5zY3JvbGwtYXJyb3cge1xyXG4vLyAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgZm9udC1zaXplOiAzMHB4O1xyXG4vLyAgICBwYWRkaW5nOiAwIDVweDtcclxuLy8gICAgY29sb3I6ICM2NjY7XHJcbi8vICB9XHJcbi8vfVxyXG5cclxuLy8gU3R5bGluZyB0byBzaG93IHRoZSBhcnJvdyBvbiBvdXRzaWRlIC0gZW5kXHJcblxyXG4vLyBTbGlkZXIgU3R5bGUgU1RPUFxyXG4vL1xyXG5cclxuLmN1c3RvbS1zbGlkZSB7XHJcbiAgbWFyZ2luOiAwIDVweDtcclxufVxyXG5cclxuLmtub3ctbW9yZSB7XHJcbiAgY29sb3I6ICM2NjY7XHJcbn1cclxuXHJcbi5tYXJnaW4tYm90dG9tLTIwIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLnRvcC1hZGp1c3Qge1xuICB0b3A6IDY1cHg7XG59XG5cbi5wYWdlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbi5wYWdlLWNvbnRhaW5lciAucGFnZS1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDE4cHggMCA1cHg7XG59XG4ucGFnZS1jb250YWluZXIgLnBhZ2UtaGVhZGluZyAuaGVhZGluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uZG93biB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDMwMG1zO1xufVxuXG4uY29sb3ItNjY2IHtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5hYm91dC11cy1jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICBwYWRkaW5nOiAxNXB4IDA7XG59XG4uaW1hZ2UtY29udGFpbmVyIC5hYm91dC11cy1pbWFnZSAuZmVlZC1zbGlkZXJzIHtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5pbWFnZS1jb250YWluZXIgLmFib3V0LXVzLWltYWdlIC5mZWVkLXNsaWRlcnMuaGVpZ2h0LTIwMCB7XG4gIGhlaWdodDogMzUwcHg7XG59XG4uaW1hZ2UtY29udGFpbmVyIC5hYm91dC11cy1pbWFnZSAuZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlciB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDMwZW07XG59XG4uaW1hZ2UtY29udGFpbmVyIC5hYm91dC11cy1pbWFnZSAuZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci5mZWVkLXNsaWRlci1vbmUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL3NhbmRoeWFkZWVwNS5wbmdcIik7XG59XG4uaW1hZ2UtY29udGFpbmVyIC5hYm91dC11cy1pbWFnZSAuZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci5mZWVkLXNsaWRlci10d28ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL3NhbmRoeWFkZWVwMy5wbmdcIik7XG59XG4uaW1hZ2UtY29udGFpbmVyIC5hYm91dC11cy1pbWFnZSAuZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci5mZWVkLXNsaWRlci10aHJlZSB7XG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvc2FuZGh5YWRlZXAxLnBuZ1wiKTtcbn1cbi5pbWFnZS1jb250YWluZXIgLmFib3V0LXVzLWltYWdlIC5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLmZlZWQtc2xpZGVyLWZvdXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL3NhbmRoeWFkZWVwMi5wbmdcIik7XG59XG4uaW1hZ2UtY29udGFpbmVyIC5hYm91dC11cy1pbWFnZSAuZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci5mZWVkLXNsaWRlci1maXZlIHtcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9zYW5kaHlhZGVlcDYucG5nXCIpO1xufVxuLmltYWdlLWNvbnRhaW5lciAuYWJvdXQtdXMtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAxOHB4IDAgNXB4O1xufVxuLmltYWdlLWNvbnRhaW5lciAuYWJvdXQtdXMtaGVhZGluZyAuaGVhZGluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmltYWdlLWNvbnRhaW5lciAuYWJvdXQtdXMtaGVhZGluZyAuc2xvZ2FuLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5kZXNjcmlwdGlvbi1jb250YWluZXIge1xuICBwYWRkaW5nOiAxNXB4IDAgMDtcbn1cbi5kZXNjcmlwdGlvbi1jb250YWluZXIgLmRlc2NyaXB0aW9uLXRvZ2dsZS1tZW51cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5kZXNjcmlwdGlvbi1jb250YWluZXIgLmRlc2NyaXB0aW9uLXRvZ2dsZS1tZW51cyAudG9nZ2xlLW1lbnUtYmFja2dyb3VuZCB7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gIHdpZHRoOiAyNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG59XG4uZGVzY3JpcHRpb24tY29udGFpbmVyIC5kZXNjcmlwdGlvbi10b2dnbGUtbWVudXMgLnRvZ2dsZS1tZW51LWJhY2tncm91bmQuYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNCRDFFNTE7XG59XG4uZGVzY3JpcHRpb24tY29udGFpbmVyIC5kZXNjcmlwdGlvbi10b2dnbGUtbWVudXMgLnRvZ2dsZS1tZW51LWJhY2tncm91bmQgLnRvZ2dsZS1tZW51IHtcbiAgY29sb3I6ICM2NjY7XG59XG4uZGVzY3JpcHRpb24tY29udGFpbmVyIC5kZXNjcmlwdGlvbi10b2dnbGUtbWVudXMgLnRvZ2dsZS1tZW51LWJhY2tncm91bmQgLnRvZ2dsZS1tZW51LmFjdGl2ZSB7XG4gIGNvbG9yOiAjMjY1NzkxO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5kZXNjcmlwdGlvbi1jb250YWluZXIgLmRlc2NyaXB0aW9uLWRhdGEtY29udGFpbmVyIHtcbiAgcGFkZGluZzogNXB4IDAgMDtcbn1cblxuLmFib3V0LXVzLXBhZ2UtY29udGFpbmVyIC50YWItY29udGFpbmVyLCAub3duZXItY29udGFpbmVyIC50YWItY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5hYm91dC11cy1wYWdlLWNvbnRhaW5lciAuaGVhZGluZy10ZXh0LCAub3duZXItY29udGFpbmVyIC5oZWFkaW5nLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hYm91dC11cy1wYWdlLWNvbnRhaW5lciAuaGVhZGluZy10ZXh0IC5rbm93LW1vcmUsIC5vd25lci1jb250YWluZXIgLmhlYWRpbmctdGV4dCAua25vdy1tb3JlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmFib3V0LXVzLXBhZ2UtY29udGFpbmVyIC5jb250ZW50LWRpdiwgLm93bmVyLWNvbnRhaW5lciAuY29udGVudC1kaXYge1xuICBwYWRkaW5nOiA1cHggMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmFib3V0LXVzLXBhZ2UtY29udGFpbmVyIC5waG9uZS1udW1iZXItZGl2LCAub3duZXItY29udGFpbmVyIC5waG9uZS1udW1iZXItZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFib3V0LXVzLXBhZ2UtY29udGFpbmVyIC5waG9uZS1udW1iZXItZGl2IC5waG9uZS1pY29uLCAub3duZXItY29udGFpbmVyIC5waG9uZS1udW1iZXItZGl2IC5waG9uZS1pY29uIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY1NzkxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmFib3V0LXVzLXBhZ2UtY29udGFpbmVyIC50aW1pbmcsIC5vd25lci1jb250YWluZXIgLnRpbWluZyB7XG4gIGNvbG9yOiAjNjY2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuXG4uc2VydmljZXMtY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5zZXJ2aWNlcy1jb250YWluZXIgLmhlYWRpbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnByb2R1Y3QtY29udGFpbmVyIC5uby1kYXRhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4ucGFkZGluZy1ib3R0b20tMTUge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cbi5hcHBvaW50bWVudC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxMHB4IDE1cHggMDtcbn1cbi5hcHBvaW50bWVudC1mb290ZXIgLnRvdGFsLWRpdi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZDNkM2QzN2Q7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuLmFwcG9pbnRtZW50LWZvb3RlciAudG90YWwtZGl2LWNvbnRhaW5lciAudG90YWwtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5hcHBvaW50bWVudC1mb290ZXIgLnRvdGFsLWRpdi1jb250YWluZXIgLnRvdGFsLWRpdiAudG90YWwtZGl2LXByaWNlIHtcbiAgY29sb3I6ICM2NjY7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uY3VzdG9uLW5hdiB7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4ucHJldi1pY29uLWN1c3RvbSB7XG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL2ZyZWFreWpvbGx5LmNvbS9kZW1vL2pxdWVyeS9Pd2xDYXJvdXNlbDIvbmF2LWljb24ucG5nKSBuby1yZXBlYXQgc2Nyb2xsIDBweCAwcHg7XG59XG5cbi5wcmV2LWljb24tY3VzdG9tLmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC40O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5uZXh0LWljb24tY3VzdG9tIHtcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vZnJlYWt5am9sbHkuY29tL2RlbW8vanF1ZXJ5L093bENhcm91c2VsMi9uYXYtaWNvbi5wbmcpIG5vLXJlcGVhdCBzY3JvbGwgLTMycHggMHB4O1xufVxuXG4ubmV4dC1pY29uLWN1c3RvbS5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4uc2xpZGVyLW5hdiBpb24taWNvbiB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNsaWRlLXRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm90dG9tOiAzMHB4O1xufVxuXG5pb24tZ3JpZCBpb24tcm93IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaW9uLWdyaWQgaW9uLXJvdyAuaW9uLWltYWdlLXNsaWRlcyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuXG4uc2Nyb2xsLWFycm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5OTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNTAlO1xufVxuLnNjcm9sbC1hcnJvdy5hcnJvdy1sZWZ0IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMmYzMDMyZDEsICMyZjMwMzI3YSwgdHJhbnNwYXJlbnQsIHRyYW5zcGFyZW50LCB0cmFuc3BhcmVudCk7XG59XG4uc2Nyb2xsLWFycm93LmFycm93LXJpZ2h0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyZjMwMzJkMSwgIzJmMzAzMjdhLCB0cmFuc3BhcmVudCwgdHJhbnNwYXJlbnQsIHRyYW5zcGFyZW50KTtcbiAgbGVmdDogNTAlO1xufVxuXG4uY3VzdG9tLXNsaWRlIHtcbiAgbWFyZ2luOiAwIDVweDtcbn1cblxuLmtub3ctbW9yZSB7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4ubWFyZ2luLWJvdHRvbS0yMCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcbn0iLCIvLyBwcmV2aW91cyBUaGVtZVxyXG4vLyRwcmltYXJ5LWNvbG9yOiAjZTk1YzhmO1xyXG4vLyRzZWNvbmRhcnktY29sb3I6ICM2MTRkN2Y7XHJcblxyXG4vLyBOZXcgVGhlbWVcclxuJHByaW1hcnktY29sb3I6ICNCRDFFNTE7XHJcbiRzZWNvbmRhcnktY29sb3I6ICMyNjU3OTE7XHJcblxyXG4kcmVndWxhci1mb250LXNpemU6IDE0cHg7XHJcbiRmb250LXNpemUtMTogMTZweDtcclxuJGhlYWRlci1zaXplOiAyMHB4O1xyXG4kZm9udC1zaXplLTM6IDMwcHg7XHJcblxyXG4kYnV0dG9uLWhlaWdodDogNDVweDtcclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/about-us/about-us.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/about-us/about-us.page.ts ***!
  \*************************************************/
/*! exports provided: AboutUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPage", function() { return AboutUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_components_modal_popup_modal_popup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared-components/modal-popup/modal-popup.page */ "./src/app/shared-components/modal-popup/modal-popup.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _shared_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared-service.service */ "./src/app/shared-service.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");









let AboutUsPage = class AboutUsPage {
    constructor(sharedService, adminService, modalController, router, location) {
        this.sharedService = sharedService;
        this.adminService = adminService;
        this.modalController = modalController;
        this.router = router;
        this.location = location;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400,
            autoplay: true,
            loop: true,
        };
        this.show = true;
        this.selectedMenu = 'about_us';
        this.amountPurchased = 0;
        this.selectedServices = 0;
        this.productList = [];
        //Configuration for each Slider
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
            autoplay: true,
        };
        this.slideOptsThree = {
            initialSlide: 0,
            slidesPerView: 3
        };
        this.slides = [
            { img: "assets/work1.jpg" },
            { img: "assets/work2.jpg" },
            { img: "assets/work3.jpg" },
            { img: "assets/work6.jpg" },
            { img: "assets/work7.jpg" }
        ];
        this.slideConfig = {
            "slidesToShow": 3,
            "slidesToScroll": 1,
            "dots": false,
            "infinite": true,
            "autoplay": true,
            "autoplaySpeed": 1500
        };
        this.mainSliderObservable = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"]();
        //Item object for Nature
        this.sliderOne =
            {
                isBeginningSlide: true,
                isEndSlide: false,
                slidesItems: [
                    {
                        id: 995
                    },
                    {
                        id: 925
                    },
                    {
                        id: 940
                    },
                    {
                        id: 943
                    },
                    {
                        id: 944
                    }
                ]
            };
        //Item object for Food
        this.sliderTwo =
            {
                isBeginningSlide: true,
                isEndSlide: false,
                slidesItems: [
                    {
                        url: 'assets/deepaa1.jpg'
                    },
                    {
                        url: 'assets/deepaa2.jpg'
                    },
                    {
                        url: 'assets/deepaa3.jpg'
                    },
                    {
                        url: 'assets/deepaa4.jpg'
                    },
                    {
                        url: 'assets/deepaa6.jpg'
                    }
                ]
            };
        //Item object for Fashion
        this.sliderThree =
            {
                isBeginningSlide: true,
                isEndSlide: false,
                slidesItems: [
                    {
                        id: 643
                    },
                    {
                        id: 532
                    },
                    {
                        id: 232
                    },
                    {
                        id: 874
                    },
                    {
                        id: 193
                    }
                ]
            };
    }
    openModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _shared_components_modal_popup_modal_popup_page__WEBPACK_IMPORTED_MODULE_3__["ModalPopupPage"],
                swipeToClose: true,
                componentProps: {
                    "paramID": 123,
                    "paramTitle": "Test Title"
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                    //alert('Modal Sent Data :'+ dataReturned);
                }
            });
            return yield modal.present();
        });
    }
    ionViewDidEnter() {
        this.mainSliderObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["interval"])(3000).subscribe(x => {
            this.mainSlide.startAutoplay().then();
        });
    }
    ionViewWillEnter() {
        this.sharedService.showBackIcon.next(true);
    }
    ionViewWillLeave() {
        this.sharedService.showBackIcon.next(false);
    }
    onSelectMenu(key) {
        this.selectedMenu = key;
    }
    ngOnInit() {
        this.getProducts();
    }
    onBookAppointment() {
        console.log('here');
    }
    //Move to Next slide
    slideNext(object, slideView) {
        slideView.slideNext(500).then(() => {
            this.checkIfNavDisabled(object, slideView);
        });
    }
    //Move to previous slide
    slidePrev(object, slideView) {
        slideView.slidePrev(500).then(() => {
            this.checkIfNavDisabled(object, slideView);
        });
    }
    //Call methods to check if slide is first or last to enable disbale navigation
    checkIfNavDisabled(object, slideView) {
        this.checkisBeginning(object, slideView);
        this.checkisEnd(object, slideView);
    }
    checkisBeginning(object, slideView) {
        slideView.isBeginning().then((istrue) => {
            object.isBeginningSlide = istrue;
        });
    }
    checkisEnd(object, slideView) {
        slideView.isEnd().then((isTrue) => {
            object.isEndSlide = isTrue;
        });
    }
    //Method called when slide is changed by drag or navigation
    SlideDidChange(object, slideView) {
        this.checkIfNavDisabled(object, slideView);
    }
    addSlide() {
        this.slides.push({ img: "http://placehold.it/350x150/777777" });
    }
    removeSlide() {
        this.slides.length = this.slides.length - 1;
    }
    slickInit(e) {
        console.log('slick initialized');
    }
    breakpoint(e) {
        console.log('breakpoint');
    }
    afterChange(e) {
        console.log('afterChange');
    }
    beforeChange(e) {
        console.log('beforeChange');
    }
    onSeeAllPortfolios() {
        this.router.navigate(['/portfolio']);
    }
    backClicked() {
        this.location.back();
    }
    updateData(data) {
        this.selectedServices = data.selectedServices;
        this.amountPurchased = data.amountPurchased;
    }
    getProducts() {
        this.adminService.getProducts().subscribe(res => this.getProductSuccess(res), error => {
            this.adminService.commonError(error);
        });
    }
    getProductSuccess(res) {
        this.productList = res;
        this.productList = this.productList.map((v) => {
            v.showSpinner = false;
            return v;
        });
    }
};
AboutUsPage.ctorParameters = () => [
    { type: _shared_service_service__WEBPACK_IMPORTED_MODULE_7__["SharedServiceService"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideWithNav', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], AboutUsPage.prototype, "slideWithNav", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideWithNav2', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], AboutUsPage.prototype, "slideWithNav2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideWithNav3', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], AboutUsPage.prototype, "slideWithNav3", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mainSlide', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], AboutUsPage.prototype, "mainSlide", void 0);
AboutUsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-us.page.scss */ "./src/app/pages/about-us/about-us.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_service__WEBPACK_IMPORTED_MODULE_7__["SharedServiceService"], _api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
], AboutUsPage);



/***/ })

}]);
//# sourceMappingURL=pages-about-us-about-us-module-es2015.js.map