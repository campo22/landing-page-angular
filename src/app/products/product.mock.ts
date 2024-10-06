export const producList: Product[] = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299444,
    description: 'no description required',
  },
  {
    id: 4,
    name: 'Mac boot pro',
    price: 29444,
    description: 'no description required',
  },
  {
    id: 5,
    name: 'Iphone 14',
    price: 299,
  },
];
export interface Product {
  id: number | string;
  name: string;
  price: number;
  description?: string;
}
