import axios from 'axios';
import { Product } from '../interfaces/product.interface';
import { DOMEN } from './API';

export const getMenu = async () => {
  try {
    const { data } = await axios.get<Product[]>(`${DOMEN}/products`);
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};
