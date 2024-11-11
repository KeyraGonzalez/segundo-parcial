"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransaccionModule = void 0;
const common_1 = require("@nestjs/common");
const transaccion_service_1 = require("./transaccion.service");
const transaccion_controller_1 = require("./transaccion.controller");
const typeorm_1 = require("@nestjs/typeorm");
const transaccion_entity_1 = require("./entities/transaccion.entity");
const concepto_entity_1 = require("../concepto/entities/concepto.entity");
let TransaccionModule = class TransaccionModule {
};
exports.TransaccionModule = TransaccionModule;
exports.TransaccionModule = TransaccionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([transaccion_entity_1.Transaccion, concepto_entity_1.Concepto])],
        controllers: [transaccion_controller_1.TransaccionController],
        providers: [transaccion_service_1.TransaccionService],
    })
], TransaccionModule);
//# sourceMappingURL=transaccion.module.js.map