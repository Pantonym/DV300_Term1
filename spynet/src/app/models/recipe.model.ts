import { Ingredients } from "./ingredients.model";

export interface Recipe {

    id?: number;
    name: string;
    description: string;
    amountCrafted: number;
    totalWarehouse1: number;
    totalWarehouse2: number;
    totalWarehouse3: number;
    totalAmount: number;
    ingredientsNeeded: Ingredients[];
    isCraftable?: boolean;  // frontend

} 