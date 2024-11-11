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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransaccionController = void 0;
const common_1 = require("@nestjs/common");
const transaccion_service_1 = require("./transaccion.service");
const create_transaccion_dto_1 = require("./dto/create-transaccion.dto");
const update_transaccion_dto_1 = require("./dto/update-transaccion.dto");
let TransaccionController = class TransaccionController {
    constructor(transaccionService) {
        this.transaccionService = transaccionService;
    }
    create(createTransaccionDto) {
        return this.transaccionService.create(createTransaccionDto);
    }
    findAll() {
        return this.transaccionService.findAll();
    }
    findOne(id) {
        return this.transaccionService.findOne(+id);
    }
    update(id, updateTransaccionDto) {
        return this.transaccionService.update(+id, updateTransaccionDto);
    }
    remove(id) {
        return this.transaccionService.remove(+id);
    }
};
exports.TransaccionController = TransaccionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_transaccion_dto_1.CreateTransaccionDto]),
    __metadata("design:returntype", void 0)
], TransaccionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransaccionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TransaccionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_transaccion_dto_1.UpdateTransaccionDto]),
    __metadata("design:returntype", void 0)
], TransaccionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TransaccionController.prototype, "remove", null);
exports.TransaccionController = TransaccionController = __decorate([
    (0, common_1.Controller)('transaccion'),
    __metadata("design:paramtypes", [transaccion_service_1.TransaccionService])
], TransaccionController);
//# sourceMappingURL=transaccion.controller.js.map