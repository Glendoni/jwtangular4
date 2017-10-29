"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var index_1 = require("../_services/index");
var UserComponent = (function () {
    function UserComponent(userService, alertService, route, location) {
        this.userService = userService;
        this.alertService = alertService;
        this.route = route;
        this.location = location;
        this.users = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        // get users from secure api end point
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            return _this.userService.getById(+params.get('id'));
        })
            .subscribe(function (users) {
            //this.alertService.success('Hi! successful', true); 
            console.log(users.usd);
            _this.users = users.usd;
        });
    };
    UserComponent.prototype.goBack = function () {
        this.location.back();
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'user.component.html'
    }),
    __metadata("design:paramtypes", [index_1.UserService,
        index_1.AlertService,
        router_1.ActivatedRoute,
        common_1.Location])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map