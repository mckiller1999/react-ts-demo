import { CategoryModel } from "./CategoryMode";

export interface ProductModel {
  id: number;
  name: string;
  alias: string;
  price: number;
  description: string;
  size: string;
  shortDescription: string;
  quantity: number;
  deleted: boolean;
  categories: CategoryModel[];
  relatedProducts: string;
  feature: boolean;
  image: string;
}

export interface RelaProduct {
  id: number;
  name: string;
  alias: string;
  feature: boolean;
  price: number;
  description: string;
  shortDescription: string;
  image: string;
}
