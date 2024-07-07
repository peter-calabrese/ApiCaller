import { Button } from 'antd';
import TextInput from '../TextInput';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Types, useAppContext } from '../../AppContext';

const Params = () => {
  const {
    state: { params },
    dispatch,
  } = useAppContext();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '1rem',
      }}
    >
      {params.map((option, index) => (
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            width: '100%',
          }}
        >
          <TextInput
            placeholder={'Param Key'}
            value={option.id}
            setValue={(e) =>
              dispatch({
                type: Types.UPDATE_PARAMS,
                index: index,
                key: 'id',
                payload: e.target.value,
              })
            }
          />
          <TextInput
            placeholder={'Param Value'}
            value={option.value}
            setValue={(e) =>
              dispatch({
                type: Types.UPDATE_PARAMS,
                index: index,
                key: 'value',
                payload: e.target.value,
              })
            }
          />
          <Button
            style={{ color: '#fff' }}
            type='text'
            icon={<MinusCircleOutlined />}
            onClick={() =>
              dispatch({ type: Types.DELETE_PARAMS, index: index })
            }
          />
        </div>
      ))}
      <Button
        style={{
          color: '#fff',
        }}
        type={'text'}
        icon={<PlusOutlined />}
        iconPosition={'end'}
        onClick={() => dispatch({ type: Types.ADD_PARAMS })}
      >
        Add Row
      </Button>
    </div>
  );
};

export default Params;
