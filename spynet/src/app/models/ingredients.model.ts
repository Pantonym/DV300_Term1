export interface Ingredients {
    // similar to a model in MongoDB from Year2

    // The ID can be null because SQL will generate it for us. the ? means it can be null
    id?: number;
    name: string;
    totalWarehouse1: number; 
    totalWarehouse2: number; 
    totalWarehouse3: number; 
    totalAmount: number;
    description: string;
    image: string;
}