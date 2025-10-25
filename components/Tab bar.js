import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';
const tabs = [
  {key:'Home', label:'Home'}, 
  {key:'Notes', label:'Notes'},
  {key:'Avatars', label:'Characters'},
  {key:'Mood', label:'Feelings'},
  {key:'Symptoms', label:'Symptoms'},
  {key:'Temperature', label:'Temp'},
  {key:'Meds', label:'Meds'},
  {key:'Music', label:'Music'},
  {key:'Games', label:'Games'}
];
export default function TabBar({ current, onSelect }){
  return (
    <View style={styles.bar}>
      {tabs.map(t => (
        <TouchableOpacity key={t.key} style={[styles.tab, current===t.key && styles.active]} onPress={()=>onSelect(t.key)}>
          <Text style={[styles.label, current===t.key && styles.activeLabel]}>{t.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  bar:{flexDirection:'row', flexWrap:'wrap', borderTopWidth:1, borderColor:'#e6ecea', padding:8, justifyContent:'center', backgroundColor:'#ffffff'},
  tab:{paddingVertical:10, paddingHorizontal:12, margin:5, backgroundColor: theme.colors.card, borderRadius: theme.radius},
  active:{backgroundColor: theme.colors.secondary},
  label:{fontWeight:'700', color: theme.colors.text},
  activeLabel:{color:'#0b0f12'}
});
