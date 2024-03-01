export type TButtonProps = {
  text: string;
  isDisabled: boolean;
  onClick: () => void;
  buttonType: string;
};

export type TUserProps = {
  userName: string;
};

export type TTitleProps = {
  text: string;
};

export type TTabsProps = {
  tabs: {
    id: number;
    isActive: boolean;
    text: string;
    isDisabled: boolean;
  }[];
};
