import { CategoryModel } from "./CategoryMode";
import { ProductModel } from "./Product";

export interface DetailMode {
  id: number;
  name: string;
  alias: string;
  price: number;
  feature: boolean;
  description: string;
  size: string[];
  shortDescription: string;
  quantity: number;
  image: string;
  categories: CategoryModel[];
  relatedProducts: ProductModel[];
}
