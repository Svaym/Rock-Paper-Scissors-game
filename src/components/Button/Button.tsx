import React, { FC } from 'react'

interface ButtonProps extends React.ComponentProps<'button'> {
  onClick: () => void,
  border: string,
}
const Button: FC<ButtonProps> = ({ children, onClick, border, ...rest }) => {
  return (
    <button onClick={onClick} {...rest} className={`border-8 rounded-full bg-white p-12 z-10 ${border} transition duration-300 ease-linear hover:brightness-150 hover:scale-125`}>
      {children}
    </button>
  );
}
export default Button;
