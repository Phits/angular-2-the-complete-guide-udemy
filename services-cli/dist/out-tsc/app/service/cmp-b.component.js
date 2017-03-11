var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { LogService } from '../log.service';
import { DataService } from '../data.service';
var CmpBComponent = (function () {
    function CmpBComponent(logService, dataService) {
        this.logService = logService;
        this.dataService = dataService;
        this.value = '';
        this.items = [];
    }
    CmpBComponent.prototype.onLog = function (value) {
        this.logService.writeToLog(value);
    };
    CmpBComponent.prototype.onStore = function (value) {
        this.dataService.addData(value);
    };
    CmpBComponent.prototype.onGet = function () {
        this.items = this.dataService.getData().slice();
    };
    CmpBComponent.prototype.ngOnInit = function () {
    };
    return CmpBComponent;
}());
CmpBComponent = __decorate([
    Component({
        selector: 'si-cmp-b',
        template: "\n    <div>\n      <input type=\"text\" #input>\n      <button (click)=\"onLog(input.value)\">Log</button>\n      <button (click)=\"onStore(input.value)\">Store</button>\n    </div>\n    <hr>\n    <div>\n        <button (click)=\"onGet()\">Refresh Storage</button>\n        <h3>Storage</h3>\n        <ul>\n            <li *ngFor=\"let item of items\">{{item}}</li>\n        </ul>\n        <h3>Received Value</h3>\n        <p>{{value}}</p>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [LogService, DataService])
], CmpBComponent);
export { CmpBComponent };
//# sourceMappingURL=/Fitzs-Jobs/Training/Udemy/angular-2-the-complete-guide-udemy/services-cli/src/app/service/cmp-b.component.js.map