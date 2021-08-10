import React, { useEffect, useState, useCallback } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import styled from 'styled-components/native'

//Redux
import { connect } from 'react-redux';
import { Getdata } from '../../redux/actions/Api';

//Components
import { Items, Services } from '../../data/item';
import { RenderTabBar, RenderList, Loanding } from '../../components'

function App(props) {

    //Props & State
    const { data, fetched, navigation } = props
    const [Servicio, setServicio] = useState(false)
    const [refreshing, setRefreshing] = React.useState(false)
    const [index, setIndex] = React.useState(0)
    const [routes] = React.useState(Items)

    useEffect(() => {
        Select(index)
        if (fetched) {
            setServicio(true)
        }
    }, [index, fetched])

    const Select = (id) => {
        Services.map((date, i) => {
            if (id == i) {
                return props.Getdata(date)
            }
        })
    }

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const Render = () => (
        <ScrollView showsVerticalScrollIndicator={false}>
            {RenderList(data, navigation)}
        </ScrollView>
    )

    const renderScene = SceneMap({
        New: Render,
        Top: Render,
        Hot: Render,
    })

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        wait(1000).then(() => {
            Select(index)
            setRefreshing(false)
        })
    }, [index])

    return (
        <Contenedor>
            <StatusBar barStyle="dark-content" backgroundColor={'white'} />
            <Scroll
                contentContainerStyle={{ flex: 1 }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                {Servicio ?
                    <TabView
                        navigationState={{ index, routes }}
                        renderScene={renderScene}
                        onIndexChange={setIndex}
                        initialLayout={{ width: '100%' }}
                        renderTabBar={RenderTabBar}
                    />
                    :
                    <Loanding />
                }
            </Scroll>
        </Contenedor>
    );
}

const mapStateToProps = state => {
    return {
        data: state.Api.data,
        fetched: state.Api.fetched
    }
}

const mapDispatchToProps = dispatch => {
    return {
        Getdata: (id) => {
            dispatch(Getdata(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

//Styled
const Scroll = styled(ScrollView)``;

const Contenedor = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
`;

