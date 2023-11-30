export interface NavLinks {
  imgUrl: string;
  route: string;
  label: string;
}

export interface Products {
  id: number;
  name: string;
}

export interface CartData {
  id: number;
  product: string;
  price: string;
  quantity: number;
}
