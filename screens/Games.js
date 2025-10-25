import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Coloring from './games/Coloring';
import JumpMonster from './games/JumpMonster';
import BrandedHeader from '../components/BrandedHeader';
export default function Games(){
  const [screen, setScreen] = useState(null);
  if(screen==='color'){ return <Coloring onBack={()=>setScreen(null)} />; }
  if(screen==='jump'){ return <JumpMonster onBack={()=>setScreen(null)} />; }
  return (
    <View style={{flex:1}}>
      <BrandedHeader title="Play" subtitle="Short, gentle games to distract and soothe."/>
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={()=>setScreen('color')}><Text style={styles.btnText}>🎨 Coloring</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=>setScreen('jump')}><Text style={styles.btnText}>🦠 Jump the Sick Monster</Text></TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{padding:16},
  btn:{backgroundColor:'#ffd6a5', padding:14, borderRadius:14, marginBottom:10},
  btnText:{fontSize:18, fontWeight:'800'}
});