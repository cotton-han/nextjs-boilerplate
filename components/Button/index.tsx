import * as S from './style';

import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return <S.Container onClick={onClick}>{text}</S.Container>;
};

export default Button;
