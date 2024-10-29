import { Request, Response } from 'express';
import { CreateCajaDto, UpdateCajaDto } from '../../domain/dtos';
import { CajaRepository } from '../../domain';

export class CajasController {

    //* Dependency Injection
    constructor(
        private readonly cajaRepository: CajaRepository,
    ) { }

    public getCajas = async (req: Request, res: Response) => {
        try {
            const cajas = await this.cajaRepository.getAll();
            return res.json(cajas);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener las cajas' });
        }
    };

    public getCajaById = async (req: Request, res: Response) => {
        const id = +req.params.id;

        try {
            const caja = await this.cajaRepository.findById(id);
            res.json(caja);
        } catch (error) {
            res.status(404).json({ error: `Caja con id ${id} no encontrada` });
        }
    };

    public createCaja = async (req: Request, res: Response) => {
        const [error, createCajaDto] = CreateCajaDto.create(req.body);
        if (error) return res.status(400).json({ error });

        try {
            const newCaja = await this.cajaRepository.create(createCajaDto!);
            res.status(201).json(newCaja);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear la caja' });
        }
    };

    public updateCaja = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const [error, updateCajaDto] = UpdateCajaDto.create({ ...req.body, id });
        if (error) return res.status(400).json({ error });

        try {
            const updatedCaja = await this.cajaRepository.updateById(updateCajaDto!);
            return res.json(updatedCaja);
        } catch (error) {
            res.status(404).json({ error: `Caja con id ${id} no encontrada` });
        }
    };

    public deleteCaja = async (req: Request, res: Response) => {
        const id = +req.params.id;

        try {
            await this.cajaRepository.deleteById(id);
            res.status(204).send(); 
        } catch (error) {
            res.status(404).json({ error: `Caja con id ${id} no encontrada` });
        }
    };
}
