import React, { useState } from 'react';
import { RefreshControl } from 'react-native';

import Delivery from '~/components/Delivery';

import { List, NotFound, TextNotFound } from './styles';

export default function ListDeliveries({ data, navigation, ...rest }) {
  return (
    <>
      {data.length > 0 ? (
        <List
          refreshControl={<RefreshControl {...rest} />}
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Delivery data={item} navigation={navigation} />
          )}
        />
      ) : (
        <NotFound>
          <TextNotFound>Nenhuma entrega encontrada</TextNotFound>
        </NotFound>
      )}
    </>
  );
}
