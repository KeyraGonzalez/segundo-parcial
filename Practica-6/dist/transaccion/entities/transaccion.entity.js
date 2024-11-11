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
exports.Transaccion = void 0;
const typeorm_1 = require("typeorm");
const caja_entity_1 = require("../../caja/entities/caja.entity");
const concepto_entity_1 = require("../../concepto/entities/concepto.entity");
let Transaccion = class Transaccion {
};
exports.Transaccion = Transaccion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Transaccion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => caja_entity_1.Caja, (caja) => caja.transacciones),
    __metadata("design:type", caja_entity_1.Caja)
], Transaccion.prototype, "caja", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => concepto_entity_1.Concepto, (concepto) => concepto.transacciones),
    __metadata("design:type", concepto_entity_1.Concepto)
], Transaccion.prototype, "concepto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Transaccion.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Transaccion.prototype, "ingreso", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Transaccion.prototype, "egreso", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Transaccion.prototype, "observacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Transaccion.prototype, "status", void 0);
exports.Transaccion = Transaccion = __decorate([
    (0, typeorm_1.Entity)()
], Transaccion);
//# sourceMappingURL=transaccion.entity.js.map