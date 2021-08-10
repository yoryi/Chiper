import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TabBar } from 'react-native-tab-view';

//Constantes
import Texto from '../../constants/Text';
import { Responsive } from '../../util'

export const RenderTabBar = props => (
    <TabBar
        {...props}
        indicatorStyle={styles.indicatorStyle}
        renderLabel={({ route, focused }) => (
            <Text style={[styles.texto,{ color: focused ? 'white' : 'black'}]}>
                {route.title}
            </Text>
        )}
        style={styles.contenedor}
    />
);

const styles = StyleSheet.create({
    texto:{
        margin: Responsive(1.5), 
        fontSize: Texto.TabBar
    },
    contenedor: {
        backgroundColor: 'white'
    },
    indicatorStyle: {
        backgroundColor: '#0096FF', 
        height: '100%'
    },
})