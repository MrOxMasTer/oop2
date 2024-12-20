import { Entity, Column, PrimaryColumn } from "typeorm";
import { v7 } from "uuid";

@Entity("warehouses")
export class Warehouse {
	@PrimaryColumn({
		type: "uuid",
		nullable: false,
		default: () => v7(),
	})
	id: string;

	@Column({ type: "varchar", length: 255, nullable: false })
	name: string;

	@Column({ type: "text", nullable: true })
	location: string;
}
