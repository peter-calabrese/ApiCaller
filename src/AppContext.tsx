import { TabsProps } from 'antd';
import { createContext, useContext, useReducer } from 'react';

export enum Types {
  UPDATE_STATE = 'UPDATE_STATE',
  ADD_PARAMS = 'ADD_PARAMS',
  UPDATE_PARAMS = 'UPDATE_PARAMS',
  DELETE_PARAMS = 'DELETE_PARAMS',
  APPEND_PARAMS = 'APPEND_PARAMS',
}
interface AppActions {
  type: Types;
  key?: string;
  index?: number;
  payload?: any;
}
interface Params {
  id: string;
  value: string;
}
interface InitialState {
  endpoint: string;
  method: string;
  baseURL: string;
  params: Params[];
  queryString: string;
  data: any;
  activeKey: TabsProps['activeKey'];
}
const initialState: InitialState = {
  endpoint: '',
  method: 'GET',
  baseURL: 'https://jsonplaceholder.typicode.com',
  params: [
    {
      id: '',
      value: '',
    },
  ],
  queryString: '',
  data: {},
  activeKey: '1',
};
const reducer = (state: InitialState, action: AppActions) => {
  switch (action.type) {
    case Types.UPDATE_STATE:
      return { ...state, [action.key!]: action.payload };
    case Types.ADD_PARAMS:
      state.params.push({ id: '', value: '' });
      return { ...state };
    case Types.UPDATE_PARAMS:
      const shallow = state.params;
      shallow[action.index!] = {
        ...shallow[action.index!],
        [action.key!]: action.payload,
      };

      return { ...state, params: shallow };
    case Types.DELETE_PARAMS:
      if (state.params.length > 1) {
        const ParamUpdate = state.params;
        ParamUpdate.splice(action.index!, 1);
        const queryParams: any = [];

        state.params.forEach((param) =>
          queryParams.push(`${param.id}=${param.value}`)
        );
        const data = queryParams.join('&');
        return { ...state, params: ParamUpdate, queryString: data };
      }
      return {
        ...state,
        params: [{ id: '', value: '' }],
        queryString: [],
      };

    case Types.APPEND_PARAMS:
      const queryParams: any = [];

      state.params.forEach((param) =>
        queryParams.push(`${param.id}=${param.value}`)
      );
      const data = queryParams.join('&');

      return { ...state, queryString: data };
    default:
      return state;
  }
};

const AppContext = createContext<{
  state: InitialState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const AppContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};
