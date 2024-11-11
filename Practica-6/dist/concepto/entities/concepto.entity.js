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
exports.Concepto = void 0;
const transaccion_entity_1 = require("../../transaccion/entities/transaccion.entity");
const typeorm_1 = require("typeorm");
let Concepto = class Concepto {
};
exports.Concepto = Concepto;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Concepto.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Concepto.prototype, "concepto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Concepto.prototype, "detalle", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => transaccion_entity_1.Transaccion, (transaccion) => transaccion.concepto),
    __metadata("design:type", Array)
], Concepto.prototype, "transacciones", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Concepto.prototype, "status", void 0);
exports.Concepto = Concepto = __decorate([
    (0, typeorm_1.Entity)()
], Concepto);
//# sourceMappingURL=concepto.entity.js.map