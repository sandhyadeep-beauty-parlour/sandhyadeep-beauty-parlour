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
/* harmony default export */ __webpack_exports__["default"] = ("<search-header></search-header>\n<ion-content>\n    <div class=\"about-us-container\">\n        <div class=\"image-container\">\n            <div class=\"about-us-image\">\n                <ion-slides class=\"feed-sliders height-350\" pager=\"true\" [options]=\"slideOpts\">\n                    <ion-slide class=\"feed-images feed-slider feed-slider-one\">\n\n                    </ion-slide>\n                    <ion-slide class=\"feed-images feed-slider feed-slider-two\">\n\n                    </ion-slide>\n                    <ion-slide class=\"feed-images feed-slider feed-slider-three\">\n\n                    </ion-slide>\n                    <ion-slide class=\"feed-images feed-slider feed-slider-four\">\n\n                    </ion-slide>\n                    <ion-slide class=\"feed-images feed-slider feed-slider-five\">\n\n                    </ion-slide>\n                </ion-slides>\n            </div>\n            <div class=\"about-us-heading\">\n                <div class=\"heading-text\">\n                    <b>Sandhyadeep Beauty Parlour</b>\n                </div>\n                <div class=\"slogan-text\">\n                    Have a hair affair with us\n                </div>\n            </div>\n        </div>\n        <div class=\"description-container\">\n            <div class=\"description-toggle-menus\">\n                <div (click)=\"onSelectMenu('about_us')\" class=\"toggle-menu-background about-us\"\n                     [class.active]=\"selectedMenu === 'about_us'\">\n                    <div class=\"toggle-menu\" [class.active]=\"selectedMenu === 'about_us'\">About Us</div>\n                </div>\n                <div (click)=\"onSelectMenu('services')\" class=\"toggle-menu-background services\"\n                     [class.active]=\"selectedMenu === 'services'\">\n                    <div class=\"toggle-menu\" [class.active]=\"selectedMenu === 'services'\">Services</div>\n                </div>\n                <div (click)=\"onSelectMenu('owner')\" class=\"toggle-menu-background owner\"\n                     [class.active]=\"selectedMenu === 'owner'\">\n                    <div class=\"toggle-menu\" [class.active]=\"selectedMenu === 'owner'\">Our Owner</div>\n                </div>\n                <div (click)=\"onSelectMenu('products')\" class=\"toggle-menu-background product\"\n                     [class.active]=\"selectedMenu === 'products'\">\n                    <div class=\"toggle-menu\" [class.active]=\"selectedMenu === 'products'\">Products</div>\n                </div>\n            </div>\n            <div class=\"description-data-container\">\n                <div *ngIf=\"selectedMenu === 'about_us'\" class=\"about-us-page-container\">\n                    <div class=\"tab-container border-bottom\">\n                        <div class=\"heading-text\">\n                            <b>Description</b>\n                        </div>\n                        <div class=\"content-div\">\n                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to\n                            demonstrate the visual form of a document or a typeface without relying on meaningful conte\n                        </div>\n                    </div>\n                    <div class=\"tab-container\">\n                        <div class=\"heading-text\">\n                            <b>Information</b>\n                        </div>\n                        <div class=\"timing\">\n                            <div>Sunday - Friday</div>\n                            <div>10:00 AM - 07:00 PM</div>\n                        </div>\n                    </div>\n                    <div class=\"tab-container margin-bottom-20\">\n                        <div class=\"content-div\">\n                            5595, Near Samarth Vidya Mandir, Anandi Bazar, Ahmednagar, Maharashtra, 414001\n                        </div>\n                        <div class=\"phone-number-div\">\n                            <div>+91-9422086335</div>\n                            <div>\n                                <div class=\"phone-icon\">\n                                    <i class=\"fa fa-phone\"></i>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"selectedMenu === 'services'\" class=\"services-container\">\n                    <div class=\"page-container\">\n                        <service-list (updateAmount)=\"updateData($event)\"></service-list>\n                    </div>\n                    <ion-footer *ngIf=\"selectedMenu === 'services'\" class=\"ion-no-border\">\n                        <ion-toolbar>\n                            <div class=\"appointment-footer\">\n                                <div class=\"total-div-container\">\n                                    <div class=\"total-div\">\n                                        <div>Total</div>\n                                        <div class=\"total-div-price\">{{selectedServices}} Services</div>\n                                    </div>\n                                    <div>\n                                        {{amountPurchased}} ₹\n                                    </div>\n                                </div>\n                                <div (click)=\"onBookAppointment()\" class=\"default-button\">\n                                    <button> Book Appointment</button>\n                                </div>\n                            </div>\n                        </ion-toolbar>\n                    </ion-footer>\n                </div>\n                <div *ngIf=\"selectedMenu === 'owner'\" class=\"owner-container\">\n                    <div class=\"ion-image-slides border-bottom\">\n                        <ion-grid>\n                            <ion-row>\n<!--                                <ion-col size=\"1\">-->\n<!--                                <span class=\"slider-nav arrow-prev\" (click)=\"slidePrev(sliderTwo,slideWithNav2)\">-->\n<!--                                  <div class=\"prev-icon-custom custon-nav\" [class.disabled]=\"sliderTwo.isBeginningSlide\"></div>-->\n<!--                                </span>-->\n<!--                                </ion-col>-->\n                                <div class=\"scroll-arrow\" (click)=\"slidePrev(sliderTwo,slideWithNav2)\">\n                                    <i class=\"fa fa-angle-left\"></i>\n                                </div>\n                                <ion-col size=\"10\">\n                                    <ion-slides pager=\"false\" [options]=\"slideOptsTwo\" #slideWithNav2\n                                                (ionSlideDidChange)=\"SlideDidChange(sliderTwo,slideWithNav2)\">\n                                        <ion-slide *ngFor=\"let slide of sliderTwo.slidesItems\">\n                                            <img style=\"object-fit: cover\" src={{slide.url}} imageViewer />\n                                        </ion-slide>\n                                    </ion-slides>\n                                </ion-col>\n                                <div class=\"scroll-arrow\" (click)=\"slideNext(sliderTwo,slideWithNav2)\">\n                                    <i class=\"fa fa-angle-right\"></i>\n                                </div>\n<!--                                <ion-col size=\"1\">-->\n<!--                                <span class=\"slider-nav arrow-next\" (click)=\"slideNext(sliderTwo,slideWithNav2)\">-->\n<!--                                  <div class=\"next-icon-custom custon-nav\" [class.disabled]=\"sliderTwo.isEndSlide\"></div>-->\n<!--                                </span>-->\n<!--                                </ion-col>-->\n                            </ion-row>\n                        </ion-grid>\n                    </div>\n\n                    <div class=\"tab-container border-bottom\">\n                        <div class=\"heading-text\">\n                            <b>Description</b>\n                        </div>\n                        <div class=\"content-div\">\n                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to\n                            demonstrate the visual form of a document or a typeface without relying on meaningful conte\n                        </div>\n                    </div>\n                    <div class=\"tab-container border-bottom\">\n                        <div class=\"heading-text\">\n                            <b>Achievements</b>\n                        </div>\n                        <div class=\"content-div\">\n                            <ul>\n                                <li>Media & Beauty Makeup Diploma · Media Makeup · Fsx · Singapore</li>\n                                <li>Makeup Techniques with Air Brush Machine · Mumbai, Maharashtra</li>\n                                <li>Master Diploma in Makeup Artistry · Singapore</li>\n                                <li>Comite International D’Esthetique Et De Cosmetologie., Zurich.</li>\n                                <li>British Association of Beauty Therapy & Cosmetology, London.</li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"tab-container feed-heading\">\n                        <div class=\"heading-text\">\n                            <b>Portfolio</b>\n                            <div (click)=\"onSeeAllPortfolios()\" class=\"know-more\">See All <i class=\"fa fa-angle-right\"></i></div>\n                        </div>\n                        <div class=\"content-div\">\n                            <ngx-slick-carousel class=\"carousel\"\n                                                #slickModal=\"slick-carousel\"\n                                                [config]=\"slideConfig\"\n                                                (init)=\"slickInit($event)\"\n                                                (breakpoint)=\"breakpoint($event)\"\n                                                (afterChange)=\"afterChange($event)\"\n                                                (beforeChange)=\"beforeChange($event)\">\n                                <div ngxSlickItem *ngFor=\"let slide of slides\" class=\"slide custom-slide\">\n                                    <img src=\"{{ slide.img }}\" alt=\"\" width=\"100%\">\n                                </div>\n                            </ngx-slick-carousel>\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"selectedMenu === 'products'\" class=\"product-container\">\n                    <div class=\"no-data\">\n                        Currently No Products Available\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <script id=\"image-modal.html\" type=\"text/ng-template\">\n        <div class=\"modal image-modal transparent\" ng-click=\"closeModal()\">\n            <ion-pane class=\"transparent\">\n                <img ng-src=\"{{imageSrc}}\" class=\"fullscreen-image\"/>\n            </ion-pane>\n        </div>\n    </script>\n</ion-content>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/modal-popup/modal-popup.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/modal-popup/modal-popup.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-title>my-modal</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n        ID : {{modelId}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n        <ion-button (click)=\"closeModal()\">Close Modal</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n");

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
            _shared_components_services_list_services_list_module__WEBPACK_IMPORTED_MODULE_13__["ServicesListModule"]
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
/* harmony default export */ __webpack_exports__["default"] = (".top-adjust {\n  top: 65px;\n}\n\n.page-container {\n  padding: 0 15px;\n}\n\n.page-container .page-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 18px 0 5px;\n}\n\n.page-container .page-heading .heading-text {\n  font-size: 24px;\n}\n\n.down {\n  transform: rotate(90deg);\n  -webkit-transform: rotate(90deg);\n  transition: ease-in-out 300ms;\n}\n\n.color-666 {\n  color: #666;\n}\n\n.about-us-container {\n  padding: 0 15px;\n}\n\n.image-container {\n  padding: 15px 0;\n}\n\n.image-container .about-us-image .feed-sliders {\n  height: 350px;\n  border-radius: 10px;\n}\n\n.image-container .about-us-image .feed-sliders.height-200 {\n  height: 350px;\n}\n\n.image-container .about-us-image .feed-sliders .feed-slider {\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-position: center center !important;\n  max-height: 30em;\n}\n\n.image-container .about-us-image .feed-sliders .feed-slider.feed-slider-one {\n  background: url('sandhyadeep5.png');\n}\n\n.image-container .about-us-image .feed-sliders .feed-slider.feed-slider-two {\n  background: url('sandhyadeep3.png');\n}\n\n.image-container .about-us-image .feed-sliders .feed-slider.feed-slider-three {\n  background: url('sandhyadeep1.png');\n}\n\n.image-container .about-us-image .feed-sliders .feed-slider.feed-slider-four {\n  background: url('sandhyadeep2.png');\n}\n\n.image-container .about-us-image .feed-sliders .feed-slider.feed-slider-five {\n  background: url('sandhyadeep6.png');\n}\n\n.image-container .about-us-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  margin: 18px 0 5px;\n}\n\n.image-container .about-us-heading .heading-text {\n  font-size: 20px;\n}\n\n.image-container .about-us-heading .slogan-text {\n  font-size: 14px;\n}\n\n.description-container {\n  padding: 15px 0 0;\n}\n\n.description-container .description-toggle-menus {\n  display: flex;\n  justify-content: space-between;\n}\n\n.description-container .description-toggle-menus .toggle-menu-background {\n  padding-bottom: 4px;\n}\n\n.description-container .description-toggle-menus .toggle-menu-background.active {\n  border-bottom: 3px solid #cc2b5e;\n}\n\n.description-container .description-toggle-menus .toggle-menu-background .toggle-menu {\n  color: #666;\n}\n\n.description-container .description-toggle-menus .toggle-menu-background .toggle-menu.active {\n  color: #753a88;\n  font-weight: bold;\n}\n\n.description-container .description-data-container {\n  padding: 5px 0 0;\n}\n\n.description-container .description-data-container .about-us-page-container .tab-container, .description-container .description-data-container .owner-container .tab-container {\n  margin-bottom: 10px;\n  padding-bottom: 5px;\n}\n\n.description-container .description-data-container .about-us-page-container .heading-text, .description-container .description-data-container .owner-container .heading-text {\n  display: flex;\n  justify-content: space-between;\n  font-size: 20px;\n  align-items: center;\n}\n\n.description-container .description-data-container .about-us-page-container .heading-text .know-more, .description-container .description-data-container .owner-container .heading-text .know-more {\n  font-size: 14px;\n}\n\n.description-container .description-data-container .about-us-page-container .content-div, .description-container .description-data-container .owner-container .content-div {\n  padding: 5px 0;\n  font-size: 14px;\n}\n\n.description-container .description-data-container .about-us-page-container .phone-number-div, .description-container .description-data-container .owner-container .phone-number-div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.description-container .description-data-container .about-us-page-container .phone-number-div .phone-icon, .description-container .description-data-container .owner-container .phone-number-div .phone-icon {\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  background-color: #753a88;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n}\n\n.description-container .description-data-container .about-us-page-container .timing, .description-container .description-data-container .owner-container .timing {\n  color: #666;\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 0;\n}\n\n.description-container .description-data-container .services-container {\n  margin-bottom: 10px;\n}\n\n.description-container .description-data-container .services-container .heading-text {\n  font-size: 20px;\n}\n\n.description-container .description-data-container .product-container .no-data {\n  text-align: center;\n  padding: 30px 0;\n  color: #666;\n}\n\n.padding-bottom-15 {\n  padding-bottom: 15px !important;\n}\n\n.border-bottom {\n  border-bottom: 1px solid lightgray;\n}\n\n.appointment-footer {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 15px 0;\n}\n\n.appointment-footer .total-div-container {\n  display: flex;\n  padding: 10px;\n  background: #d3d3d37d;\n  justify-content: space-between;\n  border-radius: 7px;\n}\n\n.appointment-footer .total-div-container .total-div {\n  display: flex;\n}\n\n.appointment-footer .total-div-container .total-div .total-div-price {\n  color: #666;\n  margin-left: 15px;\n}\n\n.default-button {\n  color: white;\n  padding: 15px;\n  margin: 15px 0;\n  display: flex;\n  border-radius: 7px;\n  justify-content: center;\n  text-align: center;\n  background: linear-gradient(225deg, #cc2b5e 2%, #753a88 63%);\n}\n\n.default-button button {\n  font-size: 16px;\n  font-weight: bold;\n  background: transparent;\n  color: white;\n}\n\n.custon-nav {\n  height: 48px;\n  width: 20px;\n  cursor: pointer;\n  vertical-align: middle;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.prev-icon-custom {\n  background: url(https://freakyjolly.com/demo/jquery/OwlCarousel2/nav-icon.png) no-repeat scroll 0px 0px;\n}\n\n.prev-icon-custom.disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n\n.next-icon-custom {\n  background: url(https://freakyjolly.com/demo/jquery/OwlCarousel2/nav-icon.png) no-repeat scroll -32px 0px;\n}\n\n.next-icon-custom.disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n\n.slider-nav ion-icon {\n  height: 100%;\n}\n\n.slide-text {\n  position: absolute;\n  color: white;\n  bottom: 30px;\n}\n\n.ion-image-slides {\n  margin-bottom: 10px;\n  padding: 5px 0;\n}\n\n.ion-image-slides .scroll-arrow {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 30px;\n  padding: 0 5px;\n  color: #666;\n}\n\n.custom-slide {\n  margin: 0 5px;\n}\n\n.know-more {\n  color: #666;\n}\n\n.margin-bottom-20 {\n  margin-bottom: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x0LTEwMC9zYW5kaHlhZGVlcDE5OTMtcmVwby9zcmMvYXBwL3BhZ2VzL2Fib3V0LXVzL2Fib3V0LXVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWJvdXQtdXMvYWJvdXQtdXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBRENFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENJO0VBQ0UsZUFBQTtBQ0NOOztBREtBO0VBQ0Usd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0FDRkY7O0FETUE7RUFDRSxlQUFBO0FDSEY7O0FETUE7RUFDRSxlQUFBO0FDSEY7O0FETUk7RUFDRSxhQUFBO0VBU0EsbUJBQUE7QUNaTjs7QURRTTtFQUNFLGFBQUE7QUNOUjs7QURXTTtFQUNFLHVDQUFBO0VBQ0EsaUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0FDVFI7O0FEV1E7RUFDRSxtQ0FBQTtBQ1RWOztBRFlRO0VBQ0UsbUNBQUE7QUNWVjs7QURhUTtFQUNFLG1DQUFBO0FDWFY7O0FEY1E7RUFDRSxtQ0FBQTtBQ1pWOztBRGVRO0VBQ0UsbUNBQUE7QUNiVjs7QURtQkU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNqQko7O0FEbUJJO0VBQ0UsZUFBQTtBQ2pCTjs7QURvQkk7RUFDRSxlQUFBO0FDbEJOOztBRHVCQTtFQUNFLGlCQUFBO0FDcEJGOztBRHNCRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ3BCSjs7QURzQkk7RUFDRSxtQkFBQTtBQ3BCTjs7QURzQk07RUFDRSxnQ0FBQTtBQ3BCUjs7QUR1Qk07RUFDRSxXQUFBO0FDckJSOztBRHVCUTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ3JCVjs7QUR3Q0U7RUFDRSxnQkFBQTtBQ3RDSjs7QUR5Q007RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FDdkNSOztBRDJDTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ3pDUjs7QUQwQ1E7RUFDRSxlQUFBO0FDeENWOztBRDRDTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDMUNSOztBRDZDTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDM0NSOztBRDZDUTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQzNDVjs7QUQrQ007RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQzdDUjs7QURpREk7RUFDRSxtQkFBQTtBQy9DTjs7QURpRE07RUFDRSxlQUFBO0FDL0NSOztBRHdETTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUN0RFI7O0FEOERBO0VBQ0UsK0JBQUE7QUMzREY7O0FEOERBO0VBQ0Usa0NBQUE7QUMzREY7O0FEOERBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUMzREY7O0FENkRFO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUMzREo7O0FENkRJO0VBQ0UsYUFBQTtBQzNETjs7QUQ2RE07RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUMzRFI7O0FEaUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDREQUFBO0FDOURGOztBRGdFRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQzlESjs7QURvRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDbEVGOztBRG9FQTtFQUNFLHVHQUFBO0FDakVGOztBRG1FQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDaEVGOztBRGtFQTtFQUNFLHlHQUFBO0FDL0RGOztBRGlFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDOURGOztBRGlFRTtFQUNFLFlBQUE7QUM5REo7O0FEa0VBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQy9ERjs7QURpRUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUM5REY7O0FEK0RFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUM3REo7O0FEbUVBO0VBQ0UsYUFBQTtBQ2hFRjs7QURtRUE7RUFDRSxXQUFBO0FDaEVGOztBRG1FQTtFQUNFLDhCQUFBO0FDaEVGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWJvdXQtdXMvYWJvdXQtdXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC1hZGp1c3Qge1xuICB0b3A6IDY1cHg7XG59XG5cbi5wYWdlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgMTVweDtcblxuICAucGFnZS1oZWFkaW5nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMThweCAwIDVweDtcblxuICAgIC5oZWFkaW5nLXRleHQge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cbiAgfVxufVxuXG5cbi5kb3duIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMzAwbXM7XG59XG5cbi5jb2xvci02NjYge1xuICBjb2xvcjogIzY2Njtcbn1cblxuXG4uYWJvdXQtdXMtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTVweCAwO1xuXG4gIC5hYm91dC11cy1pbWFnZSB7XG4gICAgLmZlZWQtc2xpZGVycyB7XG4gICAgICBoZWlnaHQ6IDM1MHB4O1xuXG4gICAgICAmLmhlaWdodC0zNTAge1xuICAgICAgfVxuXG4gICAgICAmLmhlaWdodC0yMDAge1xuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgfVxuXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgICAuZmVlZC1zbGlkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICBtYXgtaGVpZ2h0OiAzMGVtO1xuXG4gICAgICAgICYuZmVlZC1zbGlkZXItb25lIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL3NhbmRoeWFkZWVwNS5wbmdcIik7XG4gICAgICAgIH1cblxuICAgICAgICAmLmZlZWQtc2xpZGVyLXR3byB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9zYW5kaHlhZGVlcDMucG5nXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5mZWVkLXNsaWRlci10aHJlZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9zYW5kaHlhZGVlcDEucG5nXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5mZWVkLXNsaWRlci1mb3VyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL3NhbmRoeWFkZWVwMi5wbmdcIik7XG4gICAgICAgIH1cblxuICAgICAgICAmLmZlZWQtc2xpZGVyLWZpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvc2FuZGh5YWRlZXA2LnBuZ1wiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5hYm91dC11cy1oZWFkaW5nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAxOHB4IDAgNXB4O1xuXG4gICAgLmhlYWRpbmctdGV4dCB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuXG4gICAgLnNsb2dhbi10ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cbn1cblxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHggMCAwO1xuXG4gIC5kZXNjcmlwdGlvbi10b2dnbGUtbWVudXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgLnRvZ2dsZS1tZW51LWJhY2tncm91bmQge1xuICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcblxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2NjMmI1ZTtcbiAgICAgIH1cblxuICAgICAgLnRvZ2dsZS1tZW51IHtcbiAgICAgICAgY29sb3I6ICM2NjY7XG5cbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgIGNvbG9yOiAjNzUzYTg4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5hYm91dC11cyB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgICYuc2VydmljZXMge1xuICAgICAgICB9XG5cbiAgICAgICAgJi5vd25lciB7XG4gICAgICAgIH1cblxuICAgICAgICAmLnByb2R1Y3Qge1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmRlc2NyaXB0aW9uLWRhdGEtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA1cHggMCAwO1xuXG4gICAgLmFib3V0LXVzLXBhZ2UtY29udGFpbmVyLCAub3duZXItY29udGFpbmVyIHtcbiAgICAgIC50YWItY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgIH1cblxuXG4gICAgICAuaGVhZGluZy10ZXh0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC5rbm93LW1vcmUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY29udGVudC1kaXYge1xuICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuXG4gICAgICAucGhvbmUtbnVtYmVyLWRpdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAucGhvbmUtaWNvbiB7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzUzYTg4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnRpbWluZyB7XG4gICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zZXJ2aWNlcy1jb250YWluZXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgLmhlYWRpbmctdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAub3duZXItY29udGFpbmVyIHtcblxuICAgIH1cblxuICAgIC5wcm9kdWN0LWNvbnRhaW5lciB7XG4gICAgICAubm8tZGF0YSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMzBweCAwO1xuICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG5cbi5wYWRkaW5nLWJvdHRvbS0xNSB7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cblxuLmFwcG9pbnRtZW50LWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEwcHggMTVweCAwO1xuXG4gIC50b3RhbC1kaXYtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2QzZDNkMzdkO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG5cbiAgICAudG90YWwtZGl2IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgIC50b3RhbC1kaXYtcHJpY2Uge1xuICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5kZWZhdWx0LWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgI2NjMmI1ZSAyJSwgIzc1M2E4OCA2MyUpO1xuXG4gIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuXG5cbi8vIFNsaWRlciBTdHlsZSBTVEFSVFxuLmN1c3Rvbi1uYXZ7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4ucHJldi1pY29uLWN1c3RvbXtcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vZnJlYWt5am9sbHkuY29tL2RlbW8vanF1ZXJ5L093bENhcm91c2VsMi9uYXYtaWNvbi5wbmcpIG5vLXJlcGVhdCBzY3JvbGwgMHB4IDBweDtcbn1cbi5wcmV2LWljb24tY3VzdG9tLmRpc2FibGVke1xuICBvcGFjaXR5OiAwLjQ7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5uZXh0LWljb24tY3VzdG9te1xuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9mcmVha3lqb2xseS5jb20vZGVtby9qcXVlcnkvT3dsQ2Fyb3VzZWwyL25hdi1pY29uLnBuZykgbm8tcmVwZWF0IHNjcm9sbCAtMzJweCAwcHg7XG59XG4ubmV4dC1pY29uLWN1c3RvbS5kaXNhYmxlZHtcbiAgb3BhY2l0eTogMC40O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4uc2xpZGVyLW5hdntcbiAgaW9uLWljb257XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG5cbi5zbGlkZS10ZXh0e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm90dG9tOiAzMHB4O1xufVxuLmlvbi1pbWFnZS1zbGlkZXMge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiA1cHggMDtcbiAgLnNjcm9sbC1hcnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBwYWRkaW5nOiAwIDVweDtcbiAgICBjb2xvcjogIzY2NjtcbiAgfVxufVxuLy8gU2xpZGVyIFN0eWxlIFNUT1Bcbi8vXG5cbi5jdXN0b20tc2xpZGUge1xuICBtYXJnaW46IDAgNXB4O1xufVxuXG4ua25vdy1tb3JlIHtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5tYXJnaW4tYm90dG9tLTIwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xufVxuIiwiLnRvcC1hZGp1c3Qge1xuICB0b3A6IDY1cHg7XG59XG5cbi5wYWdlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbi5wYWdlLWNvbnRhaW5lciAucGFnZS1oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDE4cHggMCA1cHg7XG59XG4ucGFnZS1jb250YWluZXIgLnBhZ2UtaGVhZGluZyAuaGVhZGluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uZG93biB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDMwMG1zO1xufVxuXG4uY29sb3ItNjY2IHtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5hYm91dC11cy1jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICBwYWRkaW5nOiAxNXB4IDA7XG59XG4uaW1hZ2UtY29udGFpbmVyIC5hYm91dC11cy1pbWFnZSAuZmVlZC1zbGlkZXJzIHtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5pbWFnZS1jb250YWluZXIgLmFib3V0LXVzLWltYWdlIC5mZWVkLXNsaWRlcnMuaGVpZ2h0LTIwMCB7XG4gIGhlaWdodDogMzUwcHg7XG59XG4uaW1hZ2UtY29udGFpbmVyIC5hYm91dC11cy1pbWFnZSAuZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlciB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDMwZW07XG59XG4uaW1hZ2UtY29udGFpbmVyIC5hYm91dC11cy1pbWFnZSAuZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci5mZWVkLXNsaWRlci1vbmUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL3NhbmRoeWFkZWVwNS5wbmdcIik7XG59XG4uaW1hZ2UtY29udGFpbmVyIC5hYm91dC11cy1pbWFnZSAuZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci5mZWVkLXNsaWRlci10d28ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL3NhbmRoeWFkZWVwMy5wbmdcIik7XG59XG4uaW1hZ2UtY29udGFpbmVyIC5hYm91dC11cy1pbWFnZSAuZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci5mZWVkLXNsaWRlci10aHJlZSB7XG4gIGJhY2tncm91bmQ6IHVybChcInNyYy9hc3NldHMvc2FuZGh5YWRlZXAxLnBuZ1wiKTtcbn1cbi5pbWFnZS1jb250YWluZXIgLmFib3V0LXVzLWltYWdlIC5mZWVkLXNsaWRlcnMgLmZlZWQtc2xpZGVyLmZlZWQtc2xpZGVyLWZvdXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJzcmMvYXNzZXRzL3NhbmRoeWFkZWVwMi5wbmdcIik7XG59XG4uaW1hZ2UtY29udGFpbmVyIC5hYm91dC11cy1pbWFnZSAuZmVlZC1zbGlkZXJzIC5mZWVkLXNsaWRlci5mZWVkLXNsaWRlci1maXZlIHtcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9zYW5kaHlhZGVlcDYucG5nXCIpO1xufVxuLmltYWdlLWNvbnRhaW5lciAuYWJvdXQtdXMtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAxOHB4IDAgNXB4O1xufVxuLmltYWdlLWNvbnRhaW5lciAuYWJvdXQtdXMtaGVhZGluZyAuaGVhZGluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmltYWdlLWNvbnRhaW5lciAuYWJvdXQtdXMtaGVhZGluZyAuc2xvZ2FuLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5kZXNjcmlwdGlvbi1jb250YWluZXIge1xuICBwYWRkaW5nOiAxNXB4IDAgMDtcbn1cbi5kZXNjcmlwdGlvbi1jb250YWluZXIgLmRlc2NyaXB0aW9uLXRvZ2dsZS1tZW51cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5kZXNjcmlwdGlvbi1jb250YWluZXIgLmRlc2NyaXB0aW9uLXRvZ2dsZS1tZW51cyAudG9nZ2xlLW1lbnUtYmFja2dyb3VuZCB7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG59XG4uZGVzY3JpcHRpb24tY29udGFpbmVyIC5kZXNjcmlwdGlvbi10b2dnbGUtbWVudXMgLnRvZ2dsZS1tZW51LWJhY2tncm91bmQuYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNjYzJiNWU7XG59XG4uZGVzY3JpcHRpb24tY29udGFpbmVyIC5kZXNjcmlwdGlvbi10b2dnbGUtbWVudXMgLnRvZ2dsZS1tZW51LWJhY2tncm91bmQgLnRvZ2dsZS1tZW51IHtcbiAgY29sb3I6ICM2NjY7XG59XG4uZGVzY3JpcHRpb24tY29udGFpbmVyIC5kZXNjcmlwdGlvbi10b2dnbGUtbWVudXMgLnRvZ2dsZS1tZW51LWJhY2tncm91bmQgLnRvZ2dsZS1tZW51LmFjdGl2ZSB7XG4gIGNvbG9yOiAjNzUzYTg4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5kZXNjcmlwdGlvbi1jb250YWluZXIgLmRlc2NyaXB0aW9uLWRhdGEtY29udGFpbmVyIHtcbiAgcGFkZGluZzogNXB4IDAgMDtcbn1cbi5kZXNjcmlwdGlvbi1jb250YWluZXIgLmRlc2NyaXB0aW9uLWRhdGEtY29udGFpbmVyIC5hYm91dC11cy1wYWdlLWNvbnRhaW5lciAudGFiLWNvbnRhaW5lciwgLmRlc2NyaXB0aW9uLWNvbnRhaW5lciAuZGVzY3JpcHRpb24tZGF0YS1jb250YWluZXIgLm93bmVyLWNvbnRhaW5lciAudGFiLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4uZGVzY3JpcHRpb24tY29udGFpbmVyIC5kZXNjcmlwdGlvbi1kYXRhLWNvbnRhaW5lciAuYWJvdXQtdXMtcGFnZS1jb250YWluZXIgLmhlYWRpbmctdGV4dCwgLmRlc2NyaXB0aW9uLWNvbnRhaW5lciAuZGVzY3JpcHRpb24tZGF0YS1jb250YWluZXIgLm93bmVyLWNvbnRhaW5lciAuaGVhZGluZy10ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZGVzY3JpcHRpb24tY29udGFpbmVyIC5kZXNjcmlwdGlvbi1kYXRhLWNvbnRhaW5lciAuYWJvdXQtdXMtcGFnZS1jb250YWluZXIgLmhlYWRpbmctdGV4dCAua25vdy1tb3JlLCAuZGVzY3JpcHRpb24tY29udGFpbmVyIC5kZXNjcmlwdGlvbi1kYXRhLWNvbnRhaW5lciAub3duZXItY29udGFpbmVyIC5oZWFkaW5nLXRleHQgLmtub3ctbW9yZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5kZXNjcmlwdGlvbi1jb250YWluZXIgLmRlc2NyaXB0aW9uLWRhdGEtY29udGFpbmVyIC5hYm91dC11cy1wYWdlLWNvbnRhaW5lciAuY29udGVudC1kaXYsIC5kZXNjcmlwdGlvbi1jb250YWluZXIgLmRlc2NyaXB0aW9uLWRhdGEtY29udGFpbmVyIC5vd25lci1jb250YWluZXIgLmNvbnRlbnQtZGl2IHtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5kZXNjcmlwdGlvbi1jb250YWluZXIgLmRlc2NyaXB0aW9uLWRhdGEtY29udGFpbmVyIC5hYm91dC11cy1wYWdlLWNvbnRhaW5lciAucGhvbmUtbnVtYmVyLWRpdiwgLmRlc2NyaXB0aW9uLWNvbnRhaW5lciAuZGVzY3JpcHRpb24tZGF0YS1jb250YWluZXIgLm93bmVyLWNvbnRhaW5lciAucGhvbmUtbnVtYmVyLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5kZXNjcmlwdGlvbi1jb250YWluZXIgLmRlc2NyaXB0aW9uLWRhdGEtY29udGFpbmVyIC5hYm91dC11cy1wYWdlLWNvbnRhaW5lciAucGhvbmUtbnVtYmVyLWRpdiAucGhvbmUtaWNvbiwgLmRlc2NyaXB0aW9uLWNvbnRhaW5lciAuZGVzY3JpcHRpb24tZGF0YS1jb250YWluZXIgLm93bmVyLWNvbnRhaW5lciAucGhvbmUtbnVtYmVyLWRpdiAucGhvbmUtaWNvbiB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1M2E4ODtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kZXNjcmlwdGlvbi1jb250YWluZXIgLmRlc2NyaXB0aW9uLWRhdGEtY29udGFpbmVyIC5hYm91dC11cy1wYWdlLWNvbnRhaW5lciAudGltaW5nLCAuZGVzY3JpcHRpb24tY29udGFpbmVyIC5kZXNjcmlwdGlvbi1kYXRhLWNvbnRhaW5lciAub3duZXItY29udGFpbmVyIC50aW1pbmcge1xuICBjb2xvcjogIzY2NjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiA1cHggMDtcbn1cbi5kZXNjcmlwdGlvbi1jb250YWluZXIgLmRlc2NyaXB0aW9uLWRhdGEtY29udGFpbmVyIC5zZXJ2aWNlcy1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lciAuZGVzY3JpcHRpb24tZGF0YS1jb250YWluZXIgLnNlcnZpY2VzLWNvbnRhaW5lciAuaGVhZGluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lciAuZGVzY3JpcHRpb24tZGF0YS1jb250YWluZXIgLnByb2R1Y3QtY29udGFpbmVyIC5uby1kYXRhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG4ucGFkZGluZy1ib3R0b20tMTUge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cbi5hcHBvaW50bWVudC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxMHB4IDE1cHggMDtcbn1cbi5hcHBvaW50bWVudC1mb290ZXIgLnRvdGFsLWRpdi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZDNkM2QzN2Q7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuLmFwcG9pbnRtZW50LWZvb3RlciAudG90YWwtZGl2LWNvbnRhaW5lciAudG90YWwtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5hcHBvaW50bWVudC1mb290ZXIgLnRvdGFsLWRpdi1jb250YWluZXIgLnRvdGFsLWRpdiAudG90YWwtZGl2LXByaWNlIHtcbiAgY29sb3I6ICM2NjY7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uZGVmYXVsdC1idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMTVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICNjYzJiNWUgMiUsICM3NTNhODggNjMlKTtcbn1cbi5kZWZhdWx0LWJ1dHRvbiBidXR0b24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY3VzdG9uLW5hdiB7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4ucHJldi1pY29uLWN1c3RvbSB7XG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL2ZyZWFreWpvbGx5LmNvbS9kZW1vL2pxdWVyeS9Pd2xDYXJvdXNlbDIvbmF2LWljb24ucG5nKSBuby1yZXBlYXQgc2Nyb2xsIDBweCAwcHg7XG59XG5cbi5wcmV2LWljb24tY3VzdG9tLmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC40O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5uZXh0LWljb24tY3VzdG9tIHtcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vZnJlYWt5am9sbHkuY29tL2RlbW8vanF1ZXJ5L093bENhcm91c2VsMi9uYXYtaWNvbi5wbmcpIG5vLXJlcGVhdCBzY3JvbGwgLTMycHggMHB4O1xufVxuXG4ubmV4dC1pY29uLWN1c3RvbS5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4uc2xpZGVyLW5hdiBpb24taWNvbiB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNsaWRlLXRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm90dG9tOiAzMHB4O1xufVxuXG4uaW9uLWltYWdlLXNsaWRlcyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuLmlvbi1pbWFnZS1zbGlkZXMgLnNjcm9sbC1hcnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBjb2xvcjogIzY2Njtcbn1cblxuLmN1c3RvbS1zbGlkZSB7XG4gIG1hcmdpbjogMCA1cHg7XG59XG5cbi5rbm93LW1vcmUge1xuICBjb2xvcjogIzY2Njtcbn1cblxuLm1hcmdpbi1ib3R0b20tMjAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG59Il19 */");

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






let AboutUsPage = class AboutUsPage {
    constructor(modalController, router, location) {
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
            spaceBetween: 20,
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
    onSelectMenu(key) {
        this.selectedMenu = key;
    }
    ngOnInit() {
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
        this.router.navigate(['home/portfolio']);
    }
    backClicked() {
        this.location.back();
    }
    updateData(data) {
        this.selectedServices = data.selectedServices;
        this.amountPurchased = data.amountPurchased;
    }
};
AboutUsPage.ctorParameters = () => [
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
AboutUsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-us.page.scss */ "./src/app/pages/about-us/about-us.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
], AboutUsPage);



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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL21vZGFsLXBvcHVwL21vZGFsLXBvcHVwLnBhZ2Uuc2NzcyJ9 */");

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
    }
    ngOnInit() {
        console.table(this.navParams);
        this.modelId = this.navParams.data.paramID;
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
//# sourceMappingURL=pages-about-us-about-us-module-es2015.js.map