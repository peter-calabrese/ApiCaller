import Dropdown from '../components/Dropdown/';
import TextInput from '../components/TextInput';
import { Button, Space } from 'antd';
import { useState } from 'react';

import { SendOutlined } from '@ant-design/icons';
import { Types, useAppContext } from '../AppContext';

import './endpoint.css';
const options = [
  {
    label: 'GET',
    value: 'GET',
  },
  {
    label: 'PUT',
    value: 'PUT',
  },
  {
    label: 'PATCH',
    value: 'PATCH',
  },
  {
    label: 'DELETE',
    value: 'DELETE',
  },
];

const EndpointWrapper = () => {
  const {
    state: { endpoint, method, baseURL, queryString },
    dispatch,
  } = useAppContext();

  const [loading, setLoading] = useState<boolean>(false);

  const makeCall = async () => {
    setLoading(true);
    const url = `${baseURL}${endpoint}${
      queryString && method === 'GET' ? `?${queryString}` : ''
    }`;
    try {
      const res = await fetch(url, {
        method: method!,
      });
      dispatch({
        type: Types.UPDATE_STATE,
        key: 'data',
        payload: await res.json(),
      });
    } catch {
    } finally {
      setLoading(false);
    }
  };
  return (
    <Space.Compact className={'endpointWrapper'}>
      <div style={{ width: 120 }}>
        <Dropdown
          options={options}
          value={method}
          setValue={(e: string) =>
            dispatch({ type: Types.UPDATE_STATE, key: 'method', payload: e })
          }
        />
      </div>
      <TextInput
        placeholder={'Endpoint'}
        value={`${endpoint}${
          queryString.length > 1 && method === 'GET' ? `?${queryString}` : ''
        }`}
        setValue={(e) =>
          dispatch({
            type: Types.UPDATE_STATE,
            key: 'endpoint',
            payload: e.currentTarget.value.split('?')[0],
          })
        }
      />
      <Button
        type={'primary'}
        loading={loading}
        onClick={() => {
          makeCall();
          dispatch({
            type: Types.UPDATE_STATE,
            key: 'activeKey',
            payload: '4',
          });
        }}
        icon={<SendOutlined />}
        iconPosition={'end'}
      >
        SEND
      </Button>
    </Space.Compact>
  );
};

export default EndpointWrapper;
