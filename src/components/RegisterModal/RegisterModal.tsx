import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {FluffyModal} from '../FluffyModal';
import {RegisterModalPropsType} from './types';

export const RegisterModal = ({
  modalRef,
  modalHeight,
}: RegisterModalPropsType) => {
  const handleOnPress = () => {
    modalRef.current?.close();
  };

  return (
    <FluffyModal ref={modalRef} modalHeight={modalHeight}>
      <View
        style={{
          justifyContent: 'space-between',
          width: 300,
          height: modalHeight,
          backgroundColor: 'white',
          borderRadius: 12,
          padding: 24,
        }}>
        <View>
          <View
            style={{
              width: '100%',
              height: 150,
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
        </View>

        <Pressable
          onPress={handleOnPress}
          style={{
            width: '60%',
            height: 60,
            alignSelf: 'center',
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
            Close modal
          </Text>
        </Pressable>
      </View>
    </FluffyModal>
  );
};
