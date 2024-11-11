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
exports.ConceptoController = void 0;
const common_1 = require("@nestjs/common");
const concepto_service_1 = require("./concepto.service");
const create_concepto_dto_1 = require("./dto/create-concepto.dto");
const update_concepto_dto_1 = require("./dto/update-concepto.dto");
let ConceptoController = class ConceptoController {
    constructor(conceptoService) {
        this.conceptoService = conceptoService;
    }
    create(createConceptoDto) {
        return this.conceptoService.create(createConceptoDto);
    }
    findAll() {
        return this.conceptoService.findAll();
    }
    findOne(id) {
        return this.conceptoService.findOne(+id);
    }
    update(id, updateConceptoDto) {
        return this.conceptoService.update(+id, updateConceptoDto);
    }
    remove(id) {
        return this.conceptoService.remove(+id);
    }
};
exports.ConceptoController = ConceptoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_concepto_dto_1.CreateConceptoDto]),
    __metadata("design:returntype", void 0)
], ConceptoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConceptoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConceptoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_concepto_dto_1.UpdateConceptoDto]),
    __metadata("design:returntype", void 0)
], ConceptoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConceptoController.prototype, "remove", null);
exports.ConceptoController = ConceptoController = __decorate([
    (0, common_1.Controller)('concepto'),
    __metadata("design:paramtypes", [concepto_service_1.ConceptoService])
], ConceptoController);
//# sourceMappingURL=concepto.controller.js.map