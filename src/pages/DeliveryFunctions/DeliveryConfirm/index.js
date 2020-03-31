import React, { useState, useRef } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import BackgroundDetails from '~/components/BackgroundDetails';

import {
  Container,
  Camera,
  CameraView,
  CameraButton,
  Thumbnail,
  SubmitButton,
} from './styles';

export default function DeliveryConfirm({ navigation }) {
  const { deliveryman } = useSelector((state) => state.auth);
  const delivery = navigation.getParam('delivery');
  const [loading, setLoading] = useState(false);

  let cameraRef = useRef();
  const [file, setFile] = useState(null);

  async function handleTakePicture() {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      setFile(data);
    }
  }

  async function handleSubmit() {
    try {
      setLoading(true);
      const dataFile = new FormData();

      dataFile.append('file', {
        uri: file.uri,
        name: `signature-${delivery.id}-${deliveryman.id}.jpg`,
        type: 'image/jpg',
      });

      const response = await api.post(
        `deliveryman/${deliveryman.id}/signature`,
        dataFile
      );

      const { id } = response.data;
      const end_date = new Date();

      await api.put(`deliveryman/${deliveryman.id}/deliveries/${delivery.id}`, {
        end_date,
        signature_id: id,
      });

      setLoading(false);
      Alert.alert('Sucesso!', 'A entrega do seu produto foi registrada!');
      navigation.navigate('Dashboard');
    } catch (err) {
      setLoading(false);
      Alert.alert('Erro', 'Não foi possível concluir a entrega');
    }
  }

  return (
    <BackgroundDetails>
      <Container>
        <CameraView>
          {file ? (
            <Thumbnail source={{ uri: file.uri }} />
          ) : (
            <Camera
              ref={cameraRef}
              type={RNCamera.Constants.Type.back}
              captureAudio={false}
              androidCameraPermissionOptions={{
                title: 'Permissão para usar a câmera',
                message: 'Permita que o aplicativo use a câmera',
                buttonPositive: 'Permitir',
                buttonNegative: 'Cancelar',
              }}
            />
          )}

          {file ? (
            <CameraButton onPress={() => setFile(null)}>
              <Icon name="close" size={25} color="#fff" />
            </CameraButton>
          ) : (
            <CameraButton onPress={handleTakePicture}>
              <Icon name="camera-alt" size={25} color="#fff" />
            </CameraButton>
          )}
        </CameraView>

        <SubmitButton enabled={!!file} loading={loading} onPress={handleSubmit}>
          {file ? 'Enviar' : 'Tire foto da assinatura'}
        </SubmitButton>
      </Container>
    </BackgroundDetails>
  );
}

DeliveryConfirm.navigationOptions = ({ navigation }) => ({
  title: 'Confirmar entrega',
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
