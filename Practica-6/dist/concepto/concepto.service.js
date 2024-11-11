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
exports.ConceptoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const concepto_entity_1 = require("./entities/concepto.entity");
const typeorm_2 = require("typeorm");
let ConceptoService = class ConceptoService {
    constructor(conceptoRepository) {
        this.conceptoRepository = conceptoRepository;
    }
    create(createConceptoDto) {
        return this.conceptoRepository.create(createConceptoDto);
    }
    findAll() {
        return this.conceptoRepository.find();
    }
    findOne(id) {
        return this.conceptoRepository.findOne({
            where: { id }
        });
    }
    async update(id, updateConceptoDto) {
        const concepto = await this.findOne(id);
        Object.assign(concepto, updateConceptoDto);
        this.conceptoRepository.update(id, concepto);
        return concepto;
    }
    async remove(id) {
        const concepto = await this.findOne(id);
        concepto.status = false;
        return this.conceptoRepository.save(concepto);
    }
};
exports.ConceptoService = ConceptoService;
exports.ConceptoService = ConceptoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(concepto_entity_1.Concepto)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ConceptoService);
//# sourceMappingURL=concepto.service.js.map