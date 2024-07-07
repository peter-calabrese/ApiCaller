import type { TabsProps } from 'antd';
import TabList from '../components/Tabs';
import TextInput from '../components/TextInput';
import { Types, useAppContext } from '../AppContext';
import Params from '../components/Params';

const Tabbed = () => {
  const {
    state: { baseURL },
    dispatch,
  } = useAppContext();

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Base URL',
      children: (
        <div>
          <label>Base URL:</label>
          <TextInput
            placeholder={'Enter Your Base URL'}
            value={baseURL}
            setValue={(e) =>
              dispatch({
                type: Types.UPDATE_STATE,
                key: 'baseURL',
                payload: e.target.value,
              })
            }
          />
        </div>
      ),
    },
    {
      key: '2',
      label: 'Params',
      children: <Params />,
    },
    {
      key: '3',
      label: 'Body',
      children: 'Content of Tab Pane 3',
    },
  ];

  return <TabList items={items} />;
};

export default Tabbed;
