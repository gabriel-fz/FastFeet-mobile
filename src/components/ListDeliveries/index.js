import React from 'react';

import Delivery from '~/components/Delivery';

import { List, NotFound, TextNotFound } from './styles';

export default function ListDeliveries({ data, navigation }) {
  return (
    <>
      {data.length > 0 ? (
        <List
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
