import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native'
import { Responsive, Utc} from '../../util'

export const RenderList = (data, navigation) => {
  return data.children.map((item, i) =>
    <Contenedor key={i} onPress={()=> navigation.navigate('Web', {url: item.data.url})}>

      <ContenedorImagen>
        <Img resizeMode={'contain'} source={{ uri: item.data.url_overridden_by_dest }} />
      </ContenedorImagen>

      <ContenedorTexto>
        <Date>
          <Text>{Utc(item.data.created)} minutes ago</Text>
        </Date>

        <Title>
          <Text>{item.data.title}</Text>
        </Title>

        <ContenedorInferior>
          <Autor>
            <Text>{item.data.author_fullname}</Text>
          </Autor>

          <Score>
            <Text>Score: {item.data.score}</Text>
          </Score>
          
          <Comments>
            <Text>{item.data.num_comments} Comments</Text>
          </Comments>
        </ContenedorInferior>
      </ContenedorTexto>
      
    </Contenedor>
  )
}

const Contenedor = styled(TouchableOpacity)`
  height: ${Responsive(15)};
  background-color: white;
  margin-bottom: 2;
  flex-direction: row;
`;

const ContenedorTexto = styled(View)`
  background-color: white;
  height: 100%;
  width: 75%;
`;


const ContenedorImagen = styled(View)`
  background-color: white;
  height: 100%;
  width: 25%;
`;

const ContenedorInferior = styled(View)`
height: 20%; 
align-items: flex-start;
flex-direction: row;
`;

const Img = styled(Image)`
  height: 100%;
  width: 100%;
`;

const Date = styled(View)`  
  height: 20%;
  justify-content: center;
  align-items: flex-end;
  padding-right: 3%;
`;

const Title = styled(View)`
  height: 60%;
  justify-content: center;
  align-items: flex-start;
  padding-right: 10%;
  padding-left: 2%;
`;


const Autor = styled(View)`
width: 35%;
height: 100%;
justify-content: center;
padding-left: 2%;
`;

const Score = styled(View)`
width: 30%;
height: 100%;
padding-right: 1%;
justify-content: center;
`;

const Comments = styled(View)`
width: 33%;
height: 100%;
justify-content: center;
`;