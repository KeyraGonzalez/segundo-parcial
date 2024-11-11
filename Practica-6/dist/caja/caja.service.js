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
exports.CajaService = void 0;
const common_1 = require("@nestjs/common");
const caja_entity_1 = require("./entities/caja.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let CajaService = class CajaService {
    constructor(cajaRepository) {
        this.cajaRepository = cajaRepository;
    }
    create(createCajaDto) {
        return this.cajaRepository.create(createCajaDto);
    }
    findAll() {
        const response = this.cajaRepository.find();
        console.log(response);
        return response;
    }
    findOne(id) {
        return this.cajaRepository.findOne({
            where: { id }
        });
    }
    async update(id, updateCajaDto) {
        const caja = await this.findOne(id);
        Object.assign(caja, updateCajaDto);
        console.log(caja);
        this.cajaRepository.update(id, caja);
        return caja;
    }
    async remove(id) {
        const caja = await this.findOne(id);
        caja.status = false;
        return caja;
    }
};
exports.CajaService = CajaService;
exports.CajaService = CajaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(caja_entity_1.Caja)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CajaService);
//# sourceMappingURL=caja.service.js.map