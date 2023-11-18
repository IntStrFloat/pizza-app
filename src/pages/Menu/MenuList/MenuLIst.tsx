import { FC } from 'react';
import { FoodItem } from '../../../components/FoodItem/FoodItem';
import { MenuListProps } from './MenuList.props';

export const MenuList: FC<MenuListProps> = ({ products }) => {
  return products.map((elem, index) => (
    <FoodItem
      key={index}
      logo={elem.image}
      price={elem.price}
      prodId={elem.id}
      rate={elem.rating}
      title={elem.name}
      composition={elem.ingredients.join(', ')}
    />
  ));
};
