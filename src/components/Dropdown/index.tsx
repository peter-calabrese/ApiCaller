import { Select } from 'antd';
export interface Options {
  value: string;
  label: string;
}
interface Props {
  options: Options[];
  value: string | null;
  setValue: (selectedItem: string) => void;
}
const Dropdown = ({ options, value, setValue }: Props) => {
  return (
    <Select
      style={{ width: '100%' }}
      options={options}
      placeholder={'Method'}
      value={value}
      onChange={setValue}
    />
  );
};

export default Dropdown;
