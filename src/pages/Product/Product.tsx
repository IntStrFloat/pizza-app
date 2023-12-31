import { useLoaderData } from 'react-router-dom';
import { Product } from '../../interfaces/product.interface';

export function ProductPage() {
  const data = useLoaderData() as Product;
  return <>Product - {data.name}</>;
}
