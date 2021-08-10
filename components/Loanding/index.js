import React from 'react';
import { Text, View } from 'react-native';
import Texto from '../../constants/Text';
import styled from 'styled-components/native'

export default function Loanding() {
    return (
        <Contenedor>
            <Bienvenida>Cargando...</Bienvenida>
        </Contenedor>
    );
}

const Contenedor = styled(View)`
  flex: 1;
  background: white;
  justify-content: center;
  align-items: center;
`;

const Bienvenida = styled(Text)`
  font-size: ${Texto.Titulo_Loanding};
`;
