import {combineReducers} from 'redux';
import countReducer from './reducers/countReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import postReducer from './reducers/postReducer';

const countPersistConfig = {
  key: 'count',
  storage: AsyncStorage,
};

export default combineReducers({
  count: persistReducer(countPersistConfig, countReducer),
  post: postReducer,
});
