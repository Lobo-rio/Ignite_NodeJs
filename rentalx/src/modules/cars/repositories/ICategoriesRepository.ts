import { Category } from "../model/Category";


interface ICreateCategoryDIO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    findByName(name: string): Category;
    list(): Category[];
    create({name, description}: ICreateCategoryDIO): void;
}

export { ICategoriesRepository, ICreateCategoryDIO };