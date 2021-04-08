export interface ButtonProps {
  text?: string;
  handleClick: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  customClass?: string;
}

export interface LayoutProps {
  buttonText: string;
  titleText: string;
  clickHandler: () => void;
  isStart?: boolean
}
