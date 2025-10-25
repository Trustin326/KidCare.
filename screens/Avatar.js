mport React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { save, load } from '../utils/storage';
import BrandedHeader from '../components/BrandedHeader';
import { theme } from '../theme';
const palette = ['#0f766e','#14b8a6','#84cc16','#4f46e5','#f59e0b','#ef4444','#d4af37'];
const emojis = ['🦄','🧸','🦊','🐼','🐨','🐯','🐰','🐸','🦖','🐣','🦕','🐙','🐵','🦥'];
export default function Avatars(){
  const [avatar, setAvatar] = useState({bg:'#0f766e', emoji:'🧸', name:'Buddy'});
  useEffect(()=>{(async()=>{ const a = await load('avatar'); if(a) setAvatar(a) })();},[]);
  const pick = async (bg, emoji)=>{ const a={...avatar,bg,emoji}; setAvatar(a); await save('avatar', a); };
  const setName = async (name)=>{ const a={...avatar,name}; setAvatar(a); await save('avatar', a); };
  return (
    <View style={{flex:1}}>
      <BrandedHeader title="Choose Your Character" subtitle="Pick a buddy and a background color."/>
      <ScrollView contentContainerStyle={{padding:16}}>
        <View style={[styles.avatar, {backgroundColor: avatar.bg}]}>
          <Text style={styles.emoji}>{avatar.emoji}</Text>
        </View>
        <TextInput placeholder="Character name" value={avatar.name} onChangeText={setName} style={styles.input}/>
        <Text style={styles.section}>Background</Text>
        <View style={styles.row}>
          {palette.map(c=>(<TouchableOpacity key={c} style={[styles.color, {backgroundColor:c}]} onPress={()=>pick(c, avatar.emoji)}/>))}
        </View>
        <Text style={styles.section}>Sticker Sheet</Text>
        <View style={styles.row}>
          {emojis.map(e=>(<TouchableOpacity key={e} style={styles.char} onPress={()=>pick(avatar.bg, e)}><Text style={{fontSize:28}}>{e}</Text></TouchableOpacity>))}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  avatar:{width:140, height:140, borderRadius:24, alignItems:'center', justifyContent:'center', marginBottom:16, alignSelf:'center'},
  emoji:{fontSize:72},
  input:{borderWidth:1, borderColor:'#cfe7e2', borderRadius:14, padding:12, marginBottom:12, backgroundColor:'#fff'},
  section:{fontWeight:'800', color: theme.colors.text, marginVertical:8},
  row:{flexDirection:'row', flexWrap:'wrap', gap:10},
  color:{width:36, height:36, borderRadius:10, margin:6},
  char:{padding:8, margin:6, backgroundColor: theme.colors.card, borderRadius:10}
});
