import { PartialType } from "@nestjs/mapped-types";
import { CreatePlanMensualDto } from "./create-plan-mensual.dto";

export class UpdatePlanMensualDto extends PartialType(CreatePlanMensualDto) { }