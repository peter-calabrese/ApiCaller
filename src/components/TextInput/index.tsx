import { Input, InputProps } from 'antd';
import React from 'react';
interface Props {
  placeholder: string;
  value: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({ placeholder, value, setValue }: Props) => {
  return <Input placeholder={placeholder} value={value} onChange={setValue} />;
};

export default TextInput;
