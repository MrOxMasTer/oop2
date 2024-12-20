import { Injectable } from "@nestjs/common";
import { Warehouse } from "./warehouse.entity";
import type { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import type { CreateWarehouseDto } from "./dto/createWarehouseDto";
import type { UpdateWarehouseDto } from "./dto/updateWarehouseDto";

@Injectable()
export class WarehouseService {
	constructor(
		@InjectRepository(Warehouse)
		private warehouseRepository: Repository<Warehouse>,
	) {}

	async create(createWarehouseDto: CreateWarehouseDto) {
		const warehouse = this.warehouseRepository.create(createWarehouseDto);
		return this.warehouseRepository.save(warehouse);
	}

	async findAll() {
		return this.warehouseRepository.find();
	}

	async findOne(id: Warehouse["id"]) {
		return this.warehouseRepository.findOne({
			where: {
				id,
			},
		});
	}

	async update(id: Warehouse["id"], updateWarehouseDto: UpdateWarehouseDto) {
		return this.warehouseRepository.update(id, updateWarehouseDto);
	}

	async remove(id: Warehouse["id"]) {
		return this.warehouseRepository.delete(id);
	}
}
