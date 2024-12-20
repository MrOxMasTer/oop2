import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from "@nestjs/common";
import type { WarehouseService } from "./warehouse.service";
import type { CreateWarehouseDto } from "./dto/createWarehouseDto";
import type { UpdateWarehouseDto } from "./dto/updateWarehouseDto";
import type { Warehouse } from "./warehouse.entity";

@Controller("warehouses")
export class WarehouseController {
	constructor(private readonly warehouseService: WarehouseService) {}

	@Post()
	async create(@Body() createWarehouseDto: CreateWarehouseDto) {
		return this.warehouseService.create(createWarehouseDto);
	}

	@Get()
	async findAll() {
		return this.warehouseService.findAll();
	}

	@Get(":id")
	async findOne(@Param("id") id: Warehouse["id"]) {
		return this.warehouseService.findOne(id);
	}

	@Put(":id")
	async update(
		@Param("id") id: Warehouse["id"],
		@Body() updateWarehouseDto: UpdateWarehouseDto,
	) {
		return this.warehouseService.update(id, updateWarehouseDto);
	}

	@Delete(":id")
	async remove(@Param("id") id: Warehouse["id"]) {
		return this.warehouseService.remove(id);
	}
}
