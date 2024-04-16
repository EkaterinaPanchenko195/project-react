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

export type TMenuProps = {
  text: string;
  isTopicColor: boolean;
};

export type TTabsProps = {
  isTopicColor: boolean;
  tabs: {
    id: number;
    isActive: boolean;
    text: string;
    isDisabled: boolean;
  }[];
};

export type TInputProps = {
  placeholder: string;
  labelName: string;
  isDisabled: boolean;
  hasError: boolean;
  type: string;
  value?: string;
  onChange?: (e: any) => void;
};

export type TTextareaProps = {
  labelName: string;
  placeholder: string;
};

export type TPostCardXlProps = {
  isTopicColor: boolean;
  postCard: {
    id: number;
    image?: string;
    text: string;
    date: string;
    title: string;
    description: string;
    author: number;
  };
};

export type TBlockForSendingDataProps = {
  buttonSignName?: string;
  buttonbackName?: string;
  description?: string;
  onClick?: (e: any) => void;
};

export type TAccountActivationNotification = {
  description: string;
  email?: string;
  descriptionEmail: string;
  button: string;
};

export type TPostCard = {
  id: number;
  image?: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  description: string;
  author: number;
};

export type TSelectedPostProps = {
  postCard: TPostCard;
  isTopicColor: boolean;
};
