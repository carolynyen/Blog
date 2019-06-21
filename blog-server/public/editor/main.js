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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preview/preview.component */ "./src/app/preview/preview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'edit/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"] },
    { path: 'preview/:id', component: _preview_preview_component__WEBPACK_IMPORTED_MODULE_4__["PreviewComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [],
            declarations: []
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

module.exports = "/* AppComponent's private CSS styles */\nh1 {\n  font-size: 1em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\ndiv {\n    display: inline-block;\n    vertical-align: top;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUNBQXVDO0FBQ3ZDO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtDQUNoQjtBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLG9CQUFvQjtDQUN2QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQXBwQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG5oMSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjb2xvcjogIzk5OTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbmgyIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG5kaXYge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<div class=\"list\">\n\t<app-list></app-list>\n</div>&nbsp;\n<div class=\"router\">\n\t<router-outlet></router-outlet>\n</div>\n"

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
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog.service */ "./src/app/blog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(blogService) {
        this.blogService = blogService;
        this.title = 'Angular Blog';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            providers: [_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]]
        }),
        __metadata("design:paramtypes", [_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preview/preview.component */ "./src/app/preview/preview.component.ts");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blog.service */ "./src/app/blog.service.ts");
//ng serve --host 0.0.0.0
//npm start &
//ng serve --host 0.0.0.0 &
//open -a Google\ Chrome --args --disable-web-security --user-data-dir
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"],
                _preview_preview_component__WEBPACK_IMPORTED_MODULE_8__["PreviewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            ],
            providers: [_blog_service__WEBPACK_IMPORTED_MODULE_9__["BlogService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog.service.ts":
/*!*********************************!*\
  !*** ./src/app/blog.service.ts ***!
  \*********************************/
/*! exports provided: BlogService, Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogService = /** @class */ (function () {
    function BlogService(router) {
        this.router = router;
        this.posts = [];
        this.http = new XMLHttpRequest();
        this.callback = null;
        this.user = this.getUsername();
        this.fetchPosts(this.user);
    }
    BlogService.prototype.subscribe = function (callback) {
        this.callback = callback;
    };
    BlogService.prototype.fetchPosts = function (username) {
        var _this = this;
        var each_post;
        this.http.responseType = 'json';
        this.http.open("GET", "http://localhost:3000/api/" + username);
        this.http.onreadystatechange = function () {
            if (_this.http.readyState != 4)
                return;
            if (_this.http.status != 200) {
                if (_this.http.status == 401) {
                    window.location.href = "http://localhost:3000/login?redirect=/editor/";
                    return;
                }
            }
            else {
                var results = _this.http.response;
                if (results) {
                    for (var i = 0; i < results.length; i++) {
                        each_post = {
                            postid: results[i].postid,
                            created: results[i].created,
                            modified: results[i].modified,
                            title: results[i].title,
                            body: results[i].body
                        };
                        _this.posts.push(each_post);
                    }
                    if (_this.callback) {
                        _this.callback(_this.getPosts(username));
                    }
                }
            }
        };
        this.http.send(null);
    };
    BlogService.prototype.getPosts = function (username) {
        return this.posts;
    };
    BlogService.prototype.getPost = function (username, id) {
        return this.posts.find(function (post) { return post.postid == id; });
    };
    BlogService.prototype.newPost = function (username) {
        var _this = this;
        var new_post = { postid: 0, created: new Date(), modified: new Date(), title: "", body: "" };
        if (this.posts.length > 0) {
            new_post.postid = this.posts.reduce(function (p1, p2) { return p1.postid > p2.postid ? p1 : p2; }).postid + 1;
        }
        else {
            new_post.postid = 1;
        }
        this.http.onreadystatechange = function () {
            if (_this.http.readyState != 4)
                return;
            if (_this.http.status != 201) {
                _this.posts.splice(_this.posts.length - 1, 1);
                alert("Error making new post!");
                _this.router.navigate(['/']);
                return;
            }
        };
        this.http.open("POST", "http://localhost:3000/api/" + username + "/" + new_post.postid);
        this.http.setRequestHeader("Content-type", "application/json");
        this.http.send(JSON.stringify(new_post));
        this.posts.push(new_post);
        return new_post;
    };
    BlogService.prototype.updatePost = function (username, post) {
        var _this = this;
        var old_post = this.posts.find(function (old) { return old.postid == post.postid; });
        if (old_post) {
            var index_post = this.posts.indexOf(old_post);
            this.posts[index_post].title = post.title;
            this.posts[index_post].body = post.body;
            this.posts[index_post].modified = new Date();
            this.http.onreadystatechange = function () {
                if (_this.http.readyState != 4)
                    return;
                if (_this.http.status != 200) {
                    if (_this.http.status == 401) {
                        window.location.href = "http://localhost:3000/login?redirect=/editor/";
                        return;
                    }
                    else {
                        alert('Update posts failed');
                        _this.router.navigate(['/edit/' + post.postid]);
                        return;
                    }
                }
            };
            this.http.open("PUT", "http://localhost:3000/api/" + username + "/" + post.postid);
            this.http.setRequestHeader("Content-type", "application/json");
            this.http.send(JSON.stringify(this.posts[index_post]));
            return;
        }
        else {
            return;
        }
    };
    BlogService.prototype.deletePost = function (username, postid) {
        var _this = this;
        var delete_post = this.posts.find(function (del) { return del.postid == postid; });
        if (delete_post) {
            var index_post_1 = this.posts.indexOf(delete_post);
            this.http.onreadystatechange = function () {
                if (_this.http.readyState != 4)
                    return;
                if (_this.http.status != 204) {
                    alert('Delete posts failed');
                    _this.router.navigate(['/']);
                    return;
                }
                else {
                    _this.posts.splice(index_post_1, 1);
                }
            };
            this.http.open("DELETE", "http://localhost:3000/api/" + username + "/" + postid);
            this.http.send(null);
            return;
        }
        else {
            return;
        }
    };
    BlogService.prototype.getUsername = function () {
        var cookie = document.cookie;
        var token = this.parseJWT(cookie);
        if (token) {
            return token.usr;
        }
        else {
            return "No user found";
        }
    };
    BlogService.prototype.parseJWT = function (token) {
        if (token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            return JSON.parse(atob(base64));
        }
    };
    BlogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BlogService);
    return BlogService;
}());

var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial;\n}\n\nbutton:hover {\n  background-color: #cfd8dc;\n}\n\nbutton.delete {\n  position: relative;\n  left: 194px;\n  top: -32px;\n  background-color: gray !important;\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY3Vyc29yOiBoYW5kO1xuICBmb250LWZhbWlseTogQXJpYWw7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XG59XG5cbmJ1dHRvbi5kZWxldGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDE5NHB4O1xuICB0b3A6IC0zMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"post\">\n<label for=\"title\">Title</label>\n<br>\n<input type=\"text\" style=\"height: 1rem; width: 15rem;\" placeholder=\"Add title\" [(ngModel)]=\"post.title\" (ngModelChange)=\"handleChange()\"/>\n<br>\n<label for=\"body\">Body</label>\n<br>\n<textarea style=\"height: 10rem; width: 15rem;\" placeholder=\"Add body\" [(ngModel)]=\"post.body\" (ngModelChange)=\"handleChange()\">\n</textarea>\n<br>\n\tLast Modified: {{post.modified | date: 'long'}}\n<br>\n<button type=\"button\" (click)=\"save()\">Save</button>&nbsp;\n<button type=\"button\" (click)=\"preview()\">Preview</button>&nbsp;\n<button type=\"button\" (click)=\"delete()\">Delete</button>\n</div>\n"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
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





var EditComponent = /** @class */ (function () {
    function EditComponent(blogService, router, activatedRoute) {
        this.blogService = blogService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.username = this.blogService.getUsername();
        this.change = false;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function () { return _this.getPost(); });
        this.router.events.subscribe(function () { return _this.saveForm(); });
    };
    EditComponent.prototype.ngOnDestroy = function () {
    };
    EditComponent.prototype.onUnload = function () {
        if (this.post != null) {
            this.saveForm();
        }
    };
    EditComponent.prototype.saveForm = function () {
        if (this.change) {
            this.save();
            this.change = false;
        }
    };
    EditComponent.prototype.handleChange = function () {
        this.change = true;
    };
    EditComponent.prototype.getPost = function () {
        var _this = this;
        var postid = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
        if (isNaN(postid)) {
            alert("postid has to be a number");
            return;
        }
        this.blogService.subscribe(function (posts) { return _this.post = posts.filter(function (post) { return post.postid == postid; })[0]; });
        this.post = this.blogService.getPost(this.username, postid);
    };
    EditComponent.prototype.save = function () {
        this.blogService.updatePost(this.username, this.post);
    };
    EditComponent.prototype.preview = function () {
        this.blogService.updatePost(this.username, this.post);
        this.router.navigate(['/preview/' + this.post.postid]);
    };
    EditComponent.prototype.delete = function () {
        this.blogService.deletePost(this.username, this.post.postid);
        this.post == null;
        this.router.navigate(['/']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:beforeunload'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], EditComponent.prototype, "onUnload", null);
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".posts {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.posts li {\n  position: relative;\n  cursor: pointer;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.posts li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.posts a {\n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: block;\n  width: 250px;\n  height: 20px;\n}\n.posts a:hover {\n  color:#607D8B;\n}\n.posts .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\nbutton {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton.delete {\n  position: relative;\n  left: 194px;\n  top: -32px;\n  background-color: gray !important;\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0NBQ2I7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtDQUNwQjtBQUVEO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixXQUFXO0NBQ1o7QUFFRDtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixhQUFhO0VBQ2IsYUFBYTtDQUNkO0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsVUFBVTtFQUNWLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiwyQkFBMkI7Q0FDNUI7QUFFRDtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtDQUNwQjtBQUVEO0VBQ0UsMEJBQTBCO0NBQzNCO0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdHMge1xuICBtYXJnaW46IDAgMCAyZW0gMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTVlbTtcbn1cbi5wb3N0cyBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICBtYXJnaW46IC41ZW07XG4gIHBhZGRpbmc6IC4zZW0gMDtcbiAgaGVpZ2h0OiAxLjZlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ucG9zdHMgbGk6aG92ZXIge1xuICBjb2xvcjogIzYwN0Q4QjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcbiAgbGVmdDogLjFlbTtcbn1cblxuLnBvc3RzIGEge1xuICBjb2xvcjogIzg4ODtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLnBvc3RzIGE6aG92ZXIge1xuICBjb2xvcjojNjA3RDhCO1xufVxuXG4ucG9zdHMgLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTFweDtcbiAgdG9wOiAtNHB4O1xuICBoZWlnaHQ6IDEuOGVtO1xuICBtaW4td2lkdGg6IDE2cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IC44ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY3Vyc29yOiBoYW5kO1xuICBmb250LWZhbWlseTogQXJpYWw7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XG59XG5cbmJ1dHRvbi5kZWxldGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDE5NHB4O1xuICB0b3A6IC0zMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>My Posts</h2>\n<div>\n    <button class=\"btn\" (click)=\"newPost()\">New Post</button>\n</div>\n<br>\n<ul *ngIf=\"posts\" class=\"posts\">\n  <li *ngFor=\"let post of posts\">\n    <a routerLink=\"/edit/{{post.postid}}\">\n      <span class=\"badge\">{{post.created | date: 'medium'}}</span> {{post.title}}\n    </a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
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



var ListComponent = /** @class */ (function () {
    function ListComponent(blogService, router) {
        this.blogService = blogService;
        this.router = router;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.username = this.getUsername();
        this.posts = this.blogService.getPosts(this.username);
    };
    ListComponent.prototype.newPost = function () {
        var new_post = this.blogService.newPost(this.username);
        this.router.navigate(['/edit/' + new_post.postid]);
    };
    ListComponent.prototype.getUsername = function () {
        var cookie = document.cookie;
        var token = this.parseJWT(cookie);
        if (token) {
            return token.usr;
        }
        else {
            return "No user found";
        }
    };
    ListComponent.prototype.parseJWT = function (token) {
        if (token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            return JSON.parse(atob(base64));
        }
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/preview/preview.component.css":
/*!***********************************************!*\
  !*** ./src/app/preview/preview.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXZpZXcvcHJldmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/preview/preview.component.html":
/*!************************************************!*\
  !*** ./src/app/preview/preview.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"post\">\n    <div><button class=\"edit_button\" (click)=\"edit()\">Edit</button></div>\n    <div [innerHTML]=\"title_html\"></div>\n    <div [innerHTML]=\"body_html\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/preview/preview.component.ts":
/*!**********************************************!*\
  !*** ./src/app/preview/preview.component.ts ***!
  \**********************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var commonmark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! commonmark */ "./node_modules/commonmark/lib/index.js");
/* harmony import */ var commonmark__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(commonmark__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(blogService, router, activatedRoute) {
        var _this = this;
        this.blogService = blogService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.parser = new commonmark__WEBPACK_IMPORTED_MODULE_1__["Parser"]();
        this.renderer = new commonmark__WEBPACK_IMPORTED_MODULE_1__["HtmlRenderer"]();
        this.username = this.blogService.getUsername();
        this.activatedRoute.paramMap.subscribe(function () { return _this.getPost(); });
    }
    PreviewComponent.prototype.ngOnInit = function () {
    };
    PreviewComponent.prototype.edit = function () {
        this.router.navigate(['/edit/' + this.post.postid]);
    };
    PreviewComponent.prototype.getPost = function () {
        var _this = this;
        var postid = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
        if (isNaN(postid)) {
            alert("postid has to be a number");
            return;
        }
        this.blogService.subscribe(function (posts) {
            _this.post = posts.filter(function (post) { return post.postid == postid; })[0];
            _this.title_html = _this.renderer.render(_this.parser.parse(_this.post.title));
            _this.body_html = _this.renderer.render(_this.parser.parse(_this.post.body));
            ;
        });
        this.post = this.blogService.getPost(this.username, postid);
        if (this.post) {
            this.title_html = this.renderer.render(this.parser.parse(this.post.title));
            this.body_html = this.renderer.render(this.parser.parse(this.post.body));
            ;
        }
    };
    PreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preview',
            template: __webpack_require__(/*! ./preview.component.html */ "./src/app/preview/preview.component.html"),
            styles: [__webpack_require__(/*! ./preview.component.css */ "./src/app/preview/preview.component.css")]
        }),
        __metadata("design:paramtypes", [_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PreviewComponent);
    return PreviewComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cs144/shared/project4/angular-blog/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map