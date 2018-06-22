(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/adv-form/adv-form.component.css":
/*!*************************************************!*\
  !*** ./src/app/adv-form/adv-form.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/adv-form/adv-form.component.html":
/*!**************************************************!*\
  !*** ./src/app/adv-form/adv-form.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"custRow row\">\n  <br>\n</div>\n\n<div class=\"custRow row\">\n  <div class=\"col-md-2 col-xs-2 col-lg-2\">\n    <span></span>\n  </div>\n\n  <div class=\"col-md-8 col-xs-8 col-lg-8\">\n\n    <form novalidate (ngSubmit)=\"onFormSubmit(adv)\" #adv=\"ngForm\">\n\n      <div class=\"container\">\n        <div style=\"text-align:center;\">\n          <h1>Booking Information</h1>\n          <p>Please fill in this form</p>\n        </div>\n        <hr>\n\n        <div class=\"form-group\">\n          <label for=\"fromPlace\">\n            <b>Where from?</b>\n          </label>\n          <input type=\"text\" class=\"form-control\" [ngModel]=\"user.fromPlace\" name=\"fromPlace\" #fromPlace=\"ngModel\" id=\"inputfromPlace\"\n            placeholder=\"Where from?\" required>\n        </div>\n        <!-- fromPlace error block -->\n        <div *ngIf=\"(fromPlace.invalid && ( fromPlace.touched || fromPlace.dirty) ) || isSubmitted\" class=\"col-sm-6 text-danger\">\n          <div *ngIf=\"fromPlace.errors?.required\">\n            Please enter the From Place\n          </div>\n        </div>\n\n\n        <div class=\"form-group\">\n          <label for=\"toPlace\">\n            <b>Where to?</b>\n          </label>\n          <input type=\"text\" class=\"form-control\" [ngModel]=\"user.toPlace\" name=\"toPlace\" #toPlace=\"ngModel\" id=\"inputtoPlace\" placeholder=\"Where to?\"\n            required>\n        </div>\n        <!-- toPlace error block -->\n        <div *ngIf=\"(toPlace.invalid && ( toPlace.touched || toPlace.dirty)) || isSubmitted\" class=\"col-sm-6 text-danger\">\n          <div *ngIf=\"toPlace.errors?.required\">\n            Please enter the To Place\n          </div>\n        </div>\n\n        <!-- Select Date of Birth block -->\n        <div class=\"form-group\">\n          <label for=\"startDate\">\n            <b>Departure date</b>\n          </label>\n          <input type=\"date\" class=\"form-control\" [ngModel]=\"user.startDate\" name=\"startDate\" #startDate=\"ngModel\" id=\"inputstartDate\"\n            placeholder=\"Select Departure date\" required>\n        </div>\n        <!-- startDate error block -->\n        <div *ngIf=\"(startDate.invalid && ( startDate.touched || startDate.dirty)) || isSubmitted\" class=\"col-sm-6 text-danger\">\n          <div *ngIf=\"startDate.errors?.required\">\n            Please enter the Departure date\n          </div>\n        </div>\n\n        <!-- Select Date of Birth block -->\n        <div class=\"form-group\">\n          <label for=\"endDate\">\n            <b>Return date</b>\n          </label>\n          <input type=\"date\" class=\"form-control\" [ngModel]=\"user.endDate\" name=\"endDate\" #endDate=\"ngModel\" id=\"inputendDate\" placeholder=\"Select Departure date\"\n            required>\n        </div>\n        <!-- endDate error block -->\n        <div *ngIf=\"(endDate.invalid && ( endDate.touched || endDate.dirty)) || isSubmitted\" class=\"col-sm-6 text-danger\">\n          <div *ngIf=\"endDate.errors?.required\">\n            Please enter the Return date\n          </div>\n        </div>\n\n        <br>\n        <!-- <div class=\"progress form-group col-lg-6\">\n          <div class=\"progress-bar bg-success col-lg-6\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\">50%</div>\n        </div> -->\n        <div class=\"clearfix\">\n          <button type=\"submit\" class=\"btn btn-primary\" style=\"float: right;\"> Submit\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n\n  \n\n  <div class=\"col-md-2 col-xs-2 col-lg-2\">\n    <span></span>\n  </div>\n</div>\n\n<div class=\"custRow row\">\n  <br>\n</div>"

/***/ }),

/***/ "./src/app/adv-form/adv-form.component.ts":
/*!************************************************!*\
  !*** ./src/app/adv-form/adv-form.component.ts ***!
  \************************************************/
/*! exports provided: AdvFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvFormComponent", function() { return AdvFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/user */ "./src/app/model/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdvFormComponent = /** @class */ (function () {
    function AdvFormComponent(router) {
        this.router = router;
        // enthinicity: any[];
        this.isSubmitted = false;
        // this.enthinicity = ["Asian", "American Indian", "African American"]
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_1__["User"];
    }
    AdvFormComponent.prototype.ngOnInit = function () {
    };
    AdvFormComponent.prototype.onFormSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        this.isSubmitted = true;
        this.user = value;
        // console.log(this.user);
        // console.log('valid: ' + valid);
        if (valid) {
            this.user = value;
            console.log(this.user);
            console.log('valid: ' + valid);
            this.router.navigate(['/report']);
            // this.dataService.saveUser(this.user)
            //   .subscribe((data) => {
            //     console.log(data)
            //     console.log("success")
            //     this.router.navigate(['/users'])
            //   },
            //     error => {
            //       console.log("Error Occured")
            //     });
        }
    };
    AdvFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adv-form',
            template: __webpack_require__(/*! ./adv-form.component.html */ "./src/app/adv-form/adv-form.component.html"),
            styles: [__webpack_require__(/*! ./adv-form.component.css */ "./src/app/adv-form/adv-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdvFormComponent);
    return AdvFormComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_form_basic_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-form/basic-form.component */ "./src/app/basic-form/basic-form.component.ts");
/* harmony import */ var _adv_form_adv_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adv-form/adv-form.component */ "./src/app/adv-form/adv-form.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./report/report.component */ "./src/app/report/report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: "basic", component: _basic_form_basic_form_component__WEBPACK_IMPORTED_MODULE_2__["BasicFormComponent"] },
    { path: "adv", component: _adv_form_adv_form_component__WEBPACK_IMPORTED_MODULE_3__["AdvFormComponent"] },
    { path: "report/:id", component: _report_report_component__WEBPACK_IMPORTED_MODULE_4__["ReportComponent"] },
    { path: "", redirectTo: "/basic", pathMatch: "full" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* row */\r\n/* .custRow {\r\n    margin-left: 0em;\r\n    margin-right: 0em;\r\n} */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _basic_form_basic_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basic-form/basic-form.component */ "./src/app/basic-form/basic-form.component.ts");
/* harmony import */ var _adv_form_adv_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./adv-form/adv-form.component */ "./src/app/adv-form/adv-form.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./report/report.component */ "./src/app/report/report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _basic_form_basic_form_component__WEBPACK_IMPORTED_MODULE_6__["BasicFormComponent"],
                _adv_form_adv_form_component__WEBPACK_IMPORTED_MODULE_7__["AdvFormComponent"],
                _report_report_component__WEBPACK_IMPORTED_MODULE_8__["ReportComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/basic-form/basic-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/basic-form/basic-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/basic-form/basic-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/basic-form/basic-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-md-center\">\n\n  <div class=\"col-sm-8\">\n    <div [ngSwitch]=\"step\">\n      <div *ngSwitchCase=\"1\">\n        <!-- Form step 1 -->\n        <form novalidate (ngSubmit)=\"onFormNext(basic)\" #basic=\"ngForm\">\n\n          <div style=\"text-align:center;\">\n            <h1>Personal Information</h1>\n            <p>Please fill in this form</p>\n          </div>\n          <hr>\n\n          <div class=\"form-group\">\n            <label for=\"firstName\">\n              <b>First Name</b>\n            </label>\n            <input type=\"text\" class=\"form-control\" [ngModel]=\"user.firstName\" name=\"firstName\" #firstName=\"ngModel\" id=\"inputfirstName\"\n              placeholder=\"First Name\" required>\n          </div>\n          <!-- firstName error block -->\n          <div *ngIf=\"(firstName.invalid && ( firstName.touched || firstName.dirty) ) || isSubmitted\" class=\"col-sm-6 text-danger\">\n            <div *ngIf=\"firstName.errors?.required\">\n              Please enter the firstname\n            </div>\n          </div>\n\n\n          <div class=\"form-group\">\n            <label for=\"lastName\">\n              <b>Last Name</b>\n            </label>\n            <input type=\"text\" class=\"form-control\" [ngModel]=\"user.lastName\" name=\"lastName\" #lastName=\"ngModel\" id=\"inputlastName\"\n              placeholder=\"Last Name\" required>\n          </div>\n          <!-- lastName error block -->\n          <div *ngIf=\"(lastName.invalid && ( lastName.touched || lastName.dirty)) || isSubmitted\" class=\"col-sm-6 text-danger\">\n            <div *ngIf=\"lastName.errors?.required\">\n              Please enter the lastname\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"email\">\n              <b>Email</b>\n            </label>\n            <input type=\"text\" class=\"form-control\" [ngModel]=\"user.email\" name=\"email\" #email=\"ngModel\" id=\"inputEmail\" placeholder=\"Email\"\n              pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" required>\n          </div>\n          <!-- Email error block -->\n          <div *ngIf=\"(email.invalid && ( email.touched || email.dirty)) || isSubmitted\" class=\"col-sm-6 text-danger\">\n            <div *ngIf=\"email.errors?.required\">\n              Please enter the email id\n            </div>\n            <div *ngIf=\"email.errors?.pattern &&  email.dirty\">\n              Please enter the valid email id\n            </div>\n          </div>\n\n          <!-- Select Gender block -->\n          <div class=\"form-group\">\n            <label for=\"gender\">\n              <b>Gender</b>\n            </label>\n            <select id=\"select\" class=\"form-control\" [ngModel]=\"user.gender\" name=\"gender\" required>\n              <option *ngFor=\"let g of gender\" [value]=\"g\"> {{g}}\n              </option>\n            </select>\n          </div>\n\n          <!-- Select Date of Birth block -->\n          <div class=\"form-group\">\n            <label for=\"dob\">\n              <b>Date of Birth</b>\n            </label>\n            <input type=\"date\" class=\"form-control\" [ngModel]=\"user.dob\" name=\"dob\" #dob=\"ngModel\" id=\"inputdob\" placeholder=\"Select date\"\n              required>\n          </div>\n          <!-- dob error block -->\n          <div *ngIf=\"(dob.invalid && ( dob.touched || dob.dirty)) || isSubmitted\" class=\"col-sm-6 text-danger\">\n            <div *ngIf=\"dob.errors?.required\">\n              Please enter the Date of Birth\n            </div>\n          </div>\n\n          <!-- Select status block -->\n          <div class=\"form-group\">\n            <label for=\"prom\">\n              <b>Like to recive promotion</b>\n            </label>\n            <br>\n            <div class=\"form-check form-check-inline\">\n              <label>\n                <input type=\"radio\" value=\"yes\" name=\"prom\" [ngModel]=\"user.prom\" #prom=\"ngModel\" id=\"inputprom\"> Yes\n              </label>\n            </div>\n            <div class=\"form-check form-check-inline\">\n              <label>\n                <input type=\"radio\" value=\"no\" name=\"prom\" [ngModel]=\"user.prom\" #prom=\"ngModel\" id=\"inputprom\"> No\n              </label>\n            </div>\n          </div>\n\n          <div class=\"form-check\">\n            <input class=\"form-check-input\" type=\"checkbox\" #agree=\"ngModel\" value=\"true\" id=\"agree\" [ngModel]=\"user.agree\" id=\"inputagree\" name=\"agree\" required>\n            <label class=\"form-check-label\" for=\"agree\">\n              I agree to the Terms and Conditions\n            </label> \n          </div>\n          <div *ngIf=\"(agree.invalid && ( agree.touched || agree.dirty)) || isSubmitted\" class=\"col-sm-6 text-danger\">\n              <div *ngIf=\"agree.errors?.required\">\n                Please Agree to the terms and Conditions\n              </div>\n            </div>\n\n          <br>\n\n          <div class=\"clearfix\">\n            <button type=\"submit\" class=\"btn btn-primary\" style=\"float: right;\"> Next\n            </button>\n          </div>\n\n        </form>\n      </div>\n      <div *ngSwitchCase=\"2\">\n        <!-- Form step 2 -->\n        <form novalidate (ngSubmit)=\"onFormSubmit(basic)\" #basic=\"ngForm\">\n\n\n          <div style=\"text-align:center;\">\n            <h1>Booking Information</h1>\n            <p>Please fill in this form</p>\n          </div>\n          <hr>\n\n          <div class=\"form-group\">\n            <label for=\"fromPlace\">\n              <b>Where from?</b>\n            </label>\n            <input type=\"text\" class=\"form-control\" [ngModel]=\"user.fromPlace\" name=\"fromPlace\" #fromPlace=\"ngModel\" id=\"inputfromPlace\"\n              placeholder=\"Where from?\" required>\n          </div>\n          <!-- fromPlace error block -->\n          <div *ngIf=\"(fromPlace.invalid && ( fromPlace.touched || fromPlace.dirty) ) || isSubmitted\" class=\"col-sm-6 text-danger\">\n            <div *ngIf=\"fromPlace.errors?.required\">\n              Please enter the From Place\n            </div>\n          </div>\n\n\n          <div class=\"form-group\">\n            <label for=\"toPlace\">\n              <b>Where to?</b>\n            </label>\n            <input type=\"text\" class=\"form-control\" [ngModel]=\"user.toPlace\" name=\"toPlace\" #toPlace=\"ngModel\" id=\"inputtoPlace\" placeholder=\"Where to?\"\n              required>\n          </div>\n          <!-- toPlace error block -->\n          <div *ngIf=\"(toPlace.invalid && ( toPlace.touched || toPlace.dirty)) || isSubmitted\" class=\"col-sm-6 text-danger\">\n            <div *ngIf=\"toPlace.errors?.required\">\n              Please enter the To Place\n            </div>\n          </div>\n\n          <!-- Select Date of Birth block -->\n          <div class=\"form-group\">\n            <label for=\"startDate\">\n              <b>Departure date</b>\n            </label>\n            <input type=\"date\" class=\"form-control\" [ngModel]=\"user.startDate\" name=\"startDate\" #startDate=\"ngModel\" id=\"inputstartDate\"\n              placeholder=\"Select Departure date\" required>\n          </div>\n          <!-- startDate error block -->\n          <div *ngIf=\"(startDate.invalid && ( startDate.touched || startDate.dirty)) || isSubmitted\" class=\"col-sm-6 text-danger\">\n            <div *ngIf=\"startDate.errors?.required\">\n              Please enter the Departure date\n            </div>\n          </div>\n\n          <!-- Select Date of Birth block -->\n          <div class=\"form-group\">\n            <label for=\"endDate\">\n              <b>Return date</b>\n            </label>\n            <input type=\"date\" class=\"form-control\" [ngModel]=\"user.endDate\" name=\"endDate\" #endDate=\"ngModel\" id=\"inputendDate\" placeholder=\"Select Departure date\"\n              required>\n          </div>\n          <!-- endDate error block -->\n          <div *ngIf=\"(endDate.invalid && ( endDate.touched || endDate.dirty)) || isSubmitted\" class=\"col-sm-6 text-danger\">\n            <div *ngIf=\"endDate.errors?.required\">\n              Please enter the Return date\n            </div>\n          </div>\n\n          <br>\n          <!-- <div class=\"progress form-group col-lg-6\">\n                    <div class=\"progress-bar bg-success col-lg-6\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\">50%</div>\n                  </div> -->\n          <div class=\"clearfix\">\n            <button type=\"submit\" class=\"btn btn-primary\" style=\"float: right;\"> Submit\n            </button>\n          </div>\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/basic-form/basic-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/basic-form/basic-form.component.ts ***!
  \****************************************************/
/*! exports provided: BasicFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicFormComponent", function() { return BasicFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/user */ "./src/app/model/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BasicFormComponent = /** @class */ (function () {
    function BasicFormComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.isSubmitted = false;
        this.gender = ["Select Gender", "Male", "Female", "Other"];
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_1__["User"];
        this.user.gender = this.gender[0];
        this.step = "1";
    }
    BasicFormComponent.prototype.ngOnInit = function () {
    };
    BasicFormComponent.prototype.onFormNext = function (_a) {
        var value = _a.value, valid = _a.valid;
        this.isSubmitted = true;
        this.step = "2";
        this.user = value;
    };
    BasicFormComponent.prototype.onFormSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.isSubmitted = true;
        console.log(value);
        // console.log(this.user);
        // console.log('valid: ' + valid);
        if (valid) {
            this.user.endDate = value.endDate;
            this.user.startDate = value.startDate;
            this.user.toPlace = value.toPlace;
            this.user.fromPlace = value.fromPlace;
            console.log(this.user);
            console.log('valid: ' + valid);
            this.dataService.addUser(this.user)
                .subscribe(function (data) {
                console.log(data);
                console.log("success");
                _this.router.navigate(['/report/' + data.id]);
            }, function (error) {
                console.log("Error Occured");
            });
        }
    };
    BasicFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-form',
            template: __webpack_require__(/*! ./basic-form.component.html */ "./src/app/basic-form/basic-form.component.html"),
            styles: [__webpack_require__(/*! ./basic-form.component.css */ "./src/app/basic-form/basic-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], BasicFormComponent);
    return BasicFormComponent;
}());



/***/ }),

/***/ "./src/app/model/user.ts":
/*!*******************************!*\
  !*** ./src/app/model/user.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(values) {
        if (values === void 0) { values = {}; }
        /*Constructor initialization*/
        Object.assign(this, values);
    }
    return User;
}());



/***/ }),

/***/ "./src/app/report/report.component.css":
/*!*********************************************!*\
  !*** ./src/app/report/report.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/report/report.component.html":
/*!**********************************************!*\
  !*** ./src/app/report/report.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  report works!\n</p>\n"

/***/ }),

/***/ "./src/app/report/report.component.ts":
/*!********************************************!*\
  !*** ./src/app/report/report.component.ts ***!
  \********************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportComponent = /** @class */ (function () {
    function ReportComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    ReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params["id"];
            _this.dataService.getUserList(_this.id)
                .subscribe(function (data) {
                console.log(data);
            }, function (err) {
            });
        }, function (err) {
        });
    };
    ReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! ./report.component.html */ "./src/app/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.css */ "./src/app/report/report.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.addUser = function (item) {
        return this.http.post("https://registration-form-demo1.herokuapp.com/saveUser", item);
    };
    DataService.prototype.getUserList = function (id) {
        return this.http.get("https://registration-form-demo1.herokuapp.com/getUserList/" + id);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\S530468\Desktop\GDP 1\In Class\Demo1\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map