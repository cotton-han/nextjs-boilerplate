import * as S from './style';

interface ButtonProps {
  text: string;
}

function Button({ text }: ButtonProps) {
  return <S.Container>{text}</S.Container>;
}

export default Button;
