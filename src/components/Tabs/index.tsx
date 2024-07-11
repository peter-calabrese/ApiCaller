import { Tabs } from 'antd';
import './tabs.css';
import type { TabsProps } from 'antd';
import { Types, useAppContext } from '../../AppContext';
interface Props {
  items: TabsProps['items'];
  activeKey: TabsProps['activeKey'];
}

const TabList = ({ items }: Props) => {
  const {
    state: { activeKey },
    dispatch,
  } = useAppContext();
  return (
    <Tabs
      className={'tabContainer'}
      items={items}
      activeKey={activeKey}
      onChange={(e) =>
        dispatch({ type: Types.UPDATE_STATE, key: 'activeKey', payload: e })
      }
    />
  );
};

export default TabList;
