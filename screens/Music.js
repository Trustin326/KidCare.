import React from 'react';
import { View, Text, Linking, Button, StyleSheet } from 'react-native';
import BrandedHeader from '../components/BrandedHeader';
import { theme } from '../theme';
export default function Music(){
  const open = (url)=> Linking.openURL(url);
  return (
    <View style={{flex:1}}>
      <BrandedHeader title="Soothing Sounds" subtitle="Play calming audio while they rest."/>
      <View style={{padding:16}}>
        <Button title="White Noise (YouTube)" color={theme.colors.primary} onPress={()=>open('https://www.youtube.com/results?search_query=white+noise+10+hours')}/>
        <View style={{height:8}}/>
        <Button title="Lullabies (YouTube)" color={theme.colors.primary} onPress={()=>open('https://www.youtube.com/results?search_query=lullaby+playlist')}/>
        <View style={{height:8}}/>
        <Button title="Rain Sounds (YouTube)" color={theme.colors.primary} onPress={()=>open('https://www.youtube.com/results?search_query=rain+sounds+sleep')}/>
        <Text style={{marginTop:10, color:'#333'}}>You can minimize the app while it plays in the background.</Text>
      </View>
    </View>
  );
}