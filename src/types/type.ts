export interface IBaseForm {
  name?: string;
  label?: string;
  placeholder?: string;
  data?: string[] | { value: string; label: string; disabled?: boolean }[];
  defaultValue?: string;
  radius?: string | number;
  isRequired?: boolean;
  disabled?: boolean;
  rightSection?: React.ReactNode;
  size?:string;
  type?:string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}