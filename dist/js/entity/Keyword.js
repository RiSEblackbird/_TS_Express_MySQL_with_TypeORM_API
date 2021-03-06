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
exports.Keyword = void 0;
var typeorm_1 = require("typeorm");
var Stamp_1 = require("./Stamp");
var Keyword = /** @class */ (function () {
    function Keyword() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Keyword.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 50 }),
        __metadata("design:type", String)
    ], Keyword.prototype, "word", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 2000 }),
        __metadata("design:type", String)
    ], Keyword.prototype, "memo", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Keyword.prototype, "createdDate", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Keyword.prototype, "updatedDate", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Stamp_1.Stamp; }, function (stamp) { return stamp.keyword; }),
        __metadata("design:type", Array)
    ], Keyword.prototype, "stamps", void 0);
    Keyword = __decorate([
        typeorm_1.Entity()
    ], Keyword);
    return Keyword;
}());
exports.Keyword = Keyword;
