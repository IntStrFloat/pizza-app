import { HTMLAttributes } from 'react';

export interface FoodItemProps extends HTMLAttributes<HTMLDivElement> {
  price: number;
  rate: number;
  logo: string;
  prodId: number;
  title: string;
  composition: string;
}
