import * as S from './style';

interface ButtonProps {
  text: string;
}

function Button(props: ButtonProps) {
  const { text } = props;

  return <S.Container>{text}</S.Container>;
}

export default Button;
