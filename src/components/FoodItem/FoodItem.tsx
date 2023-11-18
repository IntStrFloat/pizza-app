import { FC } from 'react';
import { FoodItemProps } from './FoodItem.props';
import styles from './FoodItem.module.css';
import { RateStarSvg } from '../../svg/RateStartSvg';
import { Link } from 'react-router-dom';

export const FoodItem: FC<FoodItemProps> = ({ logo, composition, price, rate, title, prodId }) => {
  return (
    <Link className={styles.link} to={`/product/${prodId}`}>
      <div className={styles.foodItem}>
        <div className={styles.image}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.price}>
          <span className={styles.priceNumbers}>{price}</span>{' '}
          <span className={styles.elem}>₽</span>
        </div>
        <div className={styles.rate}>
          {rate} <RateStarSvg />
        </div>
        <div className={styles.foodInformation}>
          <div className={styles.title}>{title}</div>
          <div className={styles.composition}>{composition}</div>
        </div>
      </div>
    </Link>
  );
};
