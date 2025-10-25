import React, { useState } from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';
import TabBar from './components/TabBar';
import Home from './screens/Home';
import Notes from './screens/Notes';
import Avatars from './screens/Avatars';
import Mood from './screens/Mood';
import Symptoms from './screens/Symptoms';
import Temperature from './screens/Temperature';
import Meds from './screens/Meds';
import Music from './screens/Music';
import Games from './screens/Games';
import { theme } from './theme';
export default function App(){
  const [tab, setTab] = useState('Home');
  const Screen = {
    Home, Notes, Avatars, Mood, Symptoms, Temperature, Meds, Music, Games
  }[tab];
  return (
    <SafeAreaView style={{flex:1, backgroundColor: theme.colors.bg}}>
      <StatusBar barStyle="light-content" />
      <View style={{flex:1}}>
        <Screen/>
      </View>
      <TabBar current={tab} onSelect={setTab} />
    </SafeAreaView>
  );
}