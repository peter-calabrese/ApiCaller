import type { TabsProps } from 'antd';
import TabList from '../components/Tabs';
import TextInput from '../components/TextInput';
import { Types, useAppContext } from '../AppContext';
import Params from '../components/Params';
import PrettyPrintJSON from '../components/PrettyPrintJSON/PrettyPrintJSON';
const Tabbed = () => {
  const {
    state: { baseURL, data, activeKey },
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
            value={baseURL}
            placeholder={'Enter BaseURL'}
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
      children: 'Pending JSON Editor Source',
    },
    {
      key: '4',
      label: 'Response',
      children: <PrettyPrintJSON jsonData={data} />,
    },
  ];

  return <TabList items={items} activeKey={activeKey} />;
};

export default Tabbed;
