import { BadGatewayException, NotFoundException } from '@nestjs/common';
import { response } from 'express';
import connection from '../../repositories/DatabaseConnection';
import { CreateVaccineDto } from '../dto/create-vaccine.dto';
import { Vaccine } from '../entities/vaccine.entity';

export class VaccineDatabase {
    public async CreateVaccine(vaccine: CreateVaccineDto): Promise <Vaccine> {
        try {
            const id = await connection.insert(vaccine).table('vaccine');
            return this.GetVaccinesById(id[0]);
        } catch (err) {
            throw new BadGatewayException(err)
        }
    }

    public async GetVaccines(): Promise <Vaccine[]> {
        return await connection.select().table('vaccine')
    }

    public async GetVaccinesById(id:number): Promise <Vaccine> {
        const vaccine = await connection.select().table('vaccine').where({cod_vacina: id})
        return vaccine[0];
    }

    public async deleteVaccine(id:number) {
        const verify = await connection.delete().from('vaccine').where({cod_vacina: id});
        if(verify == 0) {
            throw new NotFoundException()
        }
        return
    }
}