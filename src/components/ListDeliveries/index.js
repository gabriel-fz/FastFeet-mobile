import React from 'react';
import { RefreshControl, ScrollView } from 'react-native';

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
        <ScrollView refreshControl={<RefreshControl {...rest} />}>
          <NotFound>
            <TextNotFound>Nenhuma entrega encontrada</TextNotFound>
          </NotFound>
        </ScrollView>
      )}
    </>
  );
}
