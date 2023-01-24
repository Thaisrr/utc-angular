import {Article} from "./Article";

export interface Panier {
  products: Article[],
  total: number,
}
