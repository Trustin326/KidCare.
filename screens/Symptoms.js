import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import BrandedHeader from '../components/BrandedHeader';
import { theme } from '../theme';
const suggestions = (input) => {
  const text = input.toLowerCase();
  const tips = [];
  if(text.includes('fever')) tips.push('Offer fluids often; keep room comfortable; light clothing.');
  if(text.includes('cough')) tips.push('Warm liquids and honey (if over 1 year old) may soothe a cough.');
  if(text.includes('vomit') || text.includes('nausea')) tips.push('Small sips of oral rehydration solution; avoid heavy foods.');
  if(text.includes('diarrhea')) tips.push('Oral rehydration solutions and frequent small drinks.');
  if(text.includes('rash')) tips.push('Keep skin cool and avoid new lotions or detergents.');
  if(text.includes('ear') || text.includes('earache')) tips.push('Warm compress on the ear may reduce discomfort.');
  if(tips.length===0) tips.push('Track symptoms and rest. Seek professional guidance if you are worried.');
  return tips;
};
export default function Symptoms(){
  const [text, setText] = useState('');
  const [tips, setTips] = useState([]);
  const analyze = ()=> setTips(suggestions(text));
  return (
    <View style={{flex:1}}>
      <BrandedHeader title="Symptoms & Info" subtitle="Enter notes; get gentle comfort tips."/>
      <ScrollView style={{padding:16}}>
        <TextInput multiline style={styles.input} placeholder="e.g., fever 101.5F, cough, runny nose" value={text} onChangeText={setText}/>
        <View style={{marginVertical:8}}>
          <Button title="Get Helpful Tips" color={theme.colors.primary} onPress={analyze}/>
        </View>
        <View style={{marginTop:8}}>
          {tips.map((t,i)=>(<Text key={i} style={styles.tip}>• {t}</Text>))}
        </View>
        <View style={styles.card}>
          <Text style={styles.small}>
            This tool is for general, non-diagnostic information only. For medical advice, diagnosis, or treatment, contact a licensed clinician.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  input:{borderWidth:1, borderColor:'#cfe7e2', borderRadius:14, padding:12, minHeight:90, textAlignVertical:'top', backgroundColor:'#fff'},
  tip:{fontSize:16, marginVertical:6, color:'#0b0f12'},
  card:{backgroundColor:'#fff8e1', padding:10, borderRadius:14, marginTop:12, borderWidth:1, borderColor:'#f6e4b2'},
  small:{fontSize:12, color:'#333'}
});