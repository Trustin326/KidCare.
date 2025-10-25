import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import BrandedHeader from '../components/BrandedHeader';
import { theme } from '../theme';
export default function Temperature(){
  const [tempF, setTempF] = useState('');
  const [time, setTime] = useState('');
  const [log, setLog] = useState([]);
  const add = ()=>{
    const t = parseFloat(tempF);
    if(isNaN(t)){ Alert.alert('Enter a number for temperature'); return; }
    const entry = {t, ts: time || new Date().toISOString()};
    setLog([entry, ...log]); setTempF(''); setTime('');
  };
  return (
    <View style={{flex:1}}>
      <BrandedHeader title="Temperature Tracker" subtitle="Log real thermometer readings over time."/>
      <View style={{padding:16}}>
        <TextInput keyboardType="decimal-pad" value={tempF} onChangeText={setTempF} placeholder="Temperature (°F)" style={styles.input}/>
        <TextInput value={time} onChangeText={setTime} placeholder="Time (optional, ISO or note)" style={styles.input}/>
        <Button title="Add" color={theme.colors.primary} onPress={add}/>
        <View style={styles.card}>
          <Text style={styles.small}>
            📌 Phones cannot measure core temperature from a finger. Use a trusted thermometer and enter the reading here.
          </Text>
        </View>
        {log.map((e,i)=>(<Text key={i} style={{marginTop:6}}>{e.ts}: {e.t.toFixed(1)}°F</Text>))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input:{borderWidth:1, borderColor:'#cfe7e2', borderRadius:14, padding:12, marginBottom:8, backgroundColor:'#fff'},
  card:{backgroundColor:'#fff8e1', padding:10, borderRadius:14, marginTop:12, borderWidth:1, borderColor:'#f6e4b2'},
  small:{fontSize:12, color:'#333'}
});