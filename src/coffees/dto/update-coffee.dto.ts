import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

//Pone todas las propiedades opcionales. Extiende con la validación de la clase, así se evita repetir codigo

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
