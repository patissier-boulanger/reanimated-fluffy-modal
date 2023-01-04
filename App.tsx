import React, {useRef} from 'react';
import {Pressable, Text, View, SafeAreaView} from 'react-native';
import {ModalHandle} from './src/components/FluffyModal/types';
import {RegisterModal} from './src/components/RegisterModal';

const App = () => {
  const modalRef = useRef<ModalHandle>(null);

  const handleOnPress = () => {
    modalRef.current?.open();
  };

  return (
    <>
      <RegisterModal modalRef={modalRef} modalHeight={400} />
      <SafeAreaView
        style={{
          flex: 1,
          marginHorizontal: 24,
        }}>
        <View
          style={{
            width: '100%',
            height: 50,
            borderRadius: 12,
            marginBottom: 42,
            backgroundColor: '#d1d9e6',
          }}
        />
        <View
          style={{
            width: '100%',
            height: 300,
            borderRadius: 12,
            marginBottom: 12,
            backgroundColor: '#d1d9e6',
          }}
        />
        <View
          style={{
            width: '100%',
            height: 160,
            borderRadius: 12,
            marginBottom: 12,
            backgroundColor: '#d1d9e6',
          }}
        />
        <View
          style={{
            width: '100%',
            height: 70,
            borderRadius: 12,
            marginBottom: 12,
            backgroundColor: '#d1d9e6',
          }}
        />

        <Pressable
          onPress={handleOnPress}
          style={{
            position: 'absolute',
            width: '100%',
            height: 60,
            bottom: 60,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
            backgroundColor: '#212120',
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: '800',
            }}>
            Open modal
          </Text>
        </Pressable>
      </SafeAreaView>
    </>
  );
};

export default App;
