import { Request, Response } from 'express';
import { CreateTransaccionDto, UpdateTransaccionDto } from '../../domain/dtos';
import { TransaccionRepository } from '../../domain';

export class TransaccionesController {

    //* Dependency Injection
    constructor(
        private readonly transaccionRepository: TransaccionRepository,
    ) { }

    public getTransacciones = async (req: Request, res: Response) => {
        try {
            const transacciones = await this.transaccionRepository.getAll();
            return res.json(transacciones);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener las transacciones' });
        }
    };

    public getTransaccionById = async (req: Request, res: Response) => {
        const id = +req.params.id;

        try {
            const transaccion = await this.transaccionRepository.findById(id);
            res.json(transaccion);
        } catch (error) {
            res.status(404).json({ error: `Transacción con id ${id} no encontrada` });
        }
    };

    public createTransaccion = async (req: Request, res: Response) => {
        const [error, createTransaccionDto] = CreateTransaccionDto.create(req.body);
        if (error) return res.status(400).json({ error });

        try {
            const newTransaccion = await this.transaccionRepository.create(createTransaccionDto!);
            res.status(201).json(newTransaccion);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear la transacción' });
        }
    };

    public updateTransaccion = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const [error, updateTransaccionDto] = UpdateTransaccionDto.create({ ...req.body, id });
        if (error) return res.status(400).json({ error });

        try {
            const updatedTransaccion = await this.transaccionRepository.updateById(updateTransaccionDto!);
            return res.json(updatedTransaccion);
        } catch (error) {
            res.status(404).json({ error: `Transacción con id ${id} no encontrada` });
        }
    };

    public deleteTransaccion = async (req: Request, res: Response) => {
        const id = +req.params.id;

        try {
            await this.transaccionRepository.deleteById(id);
            res.status(204).send(); 
        } catch (error) {
            res.status(404).json({ error: `Transacción con id ${id} no encontrada` });
        }
    };
}
