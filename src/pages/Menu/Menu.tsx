import { Headling } from '../../components/Headling/Headling';
import styles from './Menu.module.css';
import { Search } from '../../components/Search/Search';
import { DOMEN } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { MenuList } from './MenuList/MenuLIst';
export function Menu() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const getMenu = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get<Product[]>(`${DOMEN}/products`);
      setProducts(data);
      setIsLoading(false);
    } catch (e) {
      if (e instanceof AxiosError) {
        setError(e.message);
      }
      console.log(error);
      setIsLoading(false);
      return;
    }
  };

  useEffect(() => {
    getMenu();
  }, []);
  return (
    <>
      <div className={styles.head}>
        <Headling>Menu</Headling>
        <Search placeholder="Введите блюдо или состав" />
      </div>
      <div className={styles.foodItemList}>
        {error && error}
        {isLoading && 'Загрузка...'}
        {!isLoading && <MenuList products={products} />}
      </div>
    </>
  );
}
