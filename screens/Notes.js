import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { save, load } from '../utils/storage';
import BrandedHeader from '../components/BrandedHeader';
import { theme } from '../theme';
export default function Notes(){
  const [text, setText] = useState('');
  const [notes, setNotes] = useState([]);
  useEffect(()=>{ (async()=> setNotes(await load('notes', [])))(); },[]);
  const add = async ()=>{
    if(!text.trim()) return;
    const item = { id: Date.now().toString(), text, ts: new Date().toISOString() };
    const next = [item, ...notes];
    setNotes(next); setText(''); await save('notes', next);
  };
  const remove = async (id)=>{
    const next = notes.filter(n=>n.id!==id); setNotes(next); await save('notes', next);
  };
  return (
    <View style={{flex:1}}>
      <BrandedHeader title="Care Notes" subtitle="Capture what you tried and how it helped."/>
      <View style={{padding:16}}>
        <TextInput placeholder="Add a note (e.g., gave fluids, nap at 2pm)" value={text} onChangeText={setText} style={styles.input}/>
        <Button title="Add Note" color={theme.colors.primary} onPress={add}/>
        <FlatList data={notes} keyExtractor={i=>i.id}
          renderItem={({item})=> (
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.text}</Text>
              <Text style={styles.itemTs}>{new Date(item.ts).toLocaleString()}</Text>
              <TouchableOpacity onPress={()=>remove(item.id)}><Text style={styles.remove}>Delete</Text></TouchableOpacity>
            </View>
          )}/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input:{borderWidth:1, borderColor:'#cfe7e2', borderRadius:14, padding:12, marginBottom:10, backgroundColor:'#fff'},
  item:{backgroundColor:'#ffffff', padding:14, borderRadius:14, marginTop:10, borderWidth:1, borderColor:'#e6ecea'},
  itemText:{fontSize:16, color:'#0b0f12'},
  itemTs:{fontSize:12, color:'#5b6b6a', marginTop:4},
  remove:{color:'#c0392b', marginTop:6}
});