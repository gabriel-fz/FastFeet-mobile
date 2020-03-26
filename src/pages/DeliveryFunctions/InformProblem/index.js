import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BackgroundDetails from '~/components/BackgroundDetails';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function InformProblem({ navigation }) {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSubmit() {}

  return (
    <>
      <BackgroundDetails />

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
    </>
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
