import React, { useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import BackgroundDetails from '~/components/BackgroundDetails';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function InformProblem({ navigation }) {
  const delivery = navigation.getParam('delivery');

  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);
    try {
      await api.post(`deliveryman/${delivery.id}/problems`, { description });

      setLoading(false);
      Alert.alert('Sucesso!', 'O problema que você informou foi recebido!');
      navigation.navigate('DeliveryDetails');
    } catch (err) {
      setLoading(false);
      Alert.alert('Erro', 'Não foi possível enviar o problema');
    }
  }

  return (
    <BackgroundDetails>
      <Container>
        <Form>
          <FormInput
            autoCapitalize="none"
            multiline={true}
            numberOfLines={12}
            textAlignVertical="top"
            placeholder="Inclua aqui o problema que ocorreu na entrega."
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={description}
            onChangeText={setDescription}
          />
        </Form>

        <SubmitButton loading={loading} onPress={handleSubmit}>
          Enviar
        </SubmitButton>
      </Container>
    </BackgroundDetails>
  );
}

InformProblem.navigationOptions = ({ navigation }) => ({
  title: 'Informar Problemas',
  titleSize: '8px',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DeliveryDetails');
      }}
    >
      <Icon name="chevron-left" size={25} color="#FFF" />
    </TouchableOpacity>
  ),
});
