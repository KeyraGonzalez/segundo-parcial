import { Request, Response } from 'express';
import { CreateConceptoDto, UpdateConceptoDto } from '../../domain/dtos';
import { ConceptoRepository } from '../../domain';

export class ConceptosController {

    //* Dependency Injection
    constructor(
        private readonly conceptoRepository: ConceptoRepository,
    ) { }

    public getConceptos = async (req: Request, res: Response) => {
        try {
            const conceptos = await this.conceptoRepository.getAll();
            return res.json(conceptos);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener los conceptos' });
        }
    };

    public getConceptoById = async (req: Request, res: Response) => {
        const id = +req.params.id;

        try {
            const concepto = await this.conceptoRepository.findById(id);
            res.json(concepto);
        } catch (error) {
            res.status(404).json({ error: `Concepto con id ${id} no encontrado` });
        }
    };

    public createConcepto = async (req: Request, res: Response) => {
        const [error, createConceptoDto] = CreateConceptoDto.create(req.body);
        if (error) return res.status(400).json({ error });

        try {
            const newConcepto = await this.conceptoRepository.create(createConceptoDto!);
            res.status(201).json(newConcepto);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el concepto' });
        }
    };

    public updateConcepto = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const [error, updateConceptoDto] = UpdateConceptoDto.create({ ...req.body, id });
        if (error) return res.status(400).json({ error });

        try {
            const updatedConcepto = await this.conceptoRepository.updateById(updateConceptoDto!);
            return res.json(updatedConcepto);
        } catch (error) {
            res.status(404).json({ error: `Concepto con id ${id} no encontrado` });
        }
    };

    public deleteConcepto = async (req: Request, res: Response) => {
        const id = +req.params.id;

        try {
            await this.conceptoRepository.deleteById(id);
            res.status(204).send(); 
        } catch (error) {
            res.status(404).json({ error: `Concepto con id ${id} no encontrado` });
        }
    };
}
