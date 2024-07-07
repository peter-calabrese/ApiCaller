import { Tabs } from 'antd';
import './tabs.css';
import type { TabsProps } from 'antd';
interface Props {
  items: TabsProps['items'];
}

const TabList = ({ items }: Props) => (
  <Tabs className={'tabContainer'} defaultActiveKey='1' items={items} />
);

export default TabList;
