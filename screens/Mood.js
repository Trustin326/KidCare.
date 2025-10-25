import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { save, load } from '../utils/storage';
import BrandedHeader from '../components/BrandedHeader';
import { theme } from '../theme';
const moods = [
  {key:'great', label:'😀 Great', c:'#22c55e'},
  {key:'ok', label:'🙂 Okay', c:'#a3e635'},
  {key:'tired', label:'🥱 Tired', c:'#fde68a'},
  {key:'sad', label:'😢 Sad', c:'#93c5fd'},
  {key:'ouch', label:'🤒 Ouchy', c:'#fca5a5'},
  {key:'angry', label:'😠 Grumpy', c:'#f59e0b'},
];
export default function Mood(){
  const [history, setHistory] = useState([]);
  const add = async (m)=>{
    const rec = {id: Date.now().toString(), mood:m.key, label:m.label, ts:new Date().toISOString()};
    const next = [rec, ...history]; setHistory(next); await save('mood', next);
  };
  useEffect(()=>{(async()=> setHistory(await load('mood', [])))();},[]);
  return (
    <View style={{flex:1}}>
      <BrandedHeader title="How do you feel?" subtitle="Tap a face to log the moment."/>
      <View style={{padding:16, flexDirection:'row', flexWrap:'wrap'}}>
        {moods.map(m => (
          <TouchableOpacity key={m.key} style={[styles.btn, {backgroundColor:m.c}]} onPress={()=>add(m)}>
            <Text style={styles.btnText}>{m.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={{marginLeft:16, marginTop:6, fontWeight:'700'}}>History</Text>
      <FlatList style={{paddingHorizontal:16}} data={history} keyExtractor={i=>i.id}
        renderItem={({item})=> (<Text style={styles.item}>{new Date(item.ts).toLocaleString()} — {item.label}</Text>)}/>
    </View>
  );
}
const styles = StyleSheet.create({
  btn:{padding:12, borderRadius:14, margin:6},
  btnText:{fontSize:16, fontWeight:'800', color:'#0b0f12'},
  item:{paddingVertical:6}
});