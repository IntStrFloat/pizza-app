import { FC } from 'react';
import { CardProps } from './Card.props';

export const Card: FC<CardProps> = ({ children }) => {
  return <div>{children}</div>;
};
