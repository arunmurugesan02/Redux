import React, {useEffect} from 'react';
import {View, Text, Pressable, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {incrementLoading} from '../redux/actions/count';
import {postLoading} from '../redux/actions/post';
const Home = () => {
  const dispatch = useDispatch();
  const countDataRedux = useSelector(state => state.count);
  const {data} = countDataRedux;

  const postDataRedux = useSelector(state => state.post);
  const {loading} = postDataRedux;

  useEffect(() => {
    dispatch(postLoading());
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Pressable
        style={{
          backgroundColor: 'lightgreen',
          width: 100,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => {
          dispatch(incrementLoading());
        }}>
        <Text>+</Text>
      </Pressable>
      <Text>{data}</Text>
      <Pressable
        style={{
          backgroundColor: 'lightgreen',
          width: 100,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => {}}>
        <Text>+</Text>
      </Pressable>
      {loading && <ActivityIndicator size={'large'} color={'tomato'} />}
    </View>
  );
};

export default Home;
