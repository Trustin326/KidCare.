import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import BrandedHeader from '../components/BrandedHeader';
import { theme } from '../theme';
const mascots = ['🦄','🧸','🦊','🐼','🐨','🐯','🐰','🐸'];
export default function Home(){
  return (
    <View style={{flex:1, backgroundColor: theme.colors.bg}}>
      <BrandedHeader title={theme.brandName} subtitle="Track, soothe, and support—beautifully." />
      <View style={styles.hero}>
        <Text style={styles.heroEmoji}>🛡️💖</Text>
        <Text style={styles.heroTitle}>We’ve got you</Text>
        <Text style={styles.heroSub}>Notes • Feelings • Symptoms tips • Meds • Sounds • Mini games</Text>
      </View>
      <View style={styles.mascots}>
        {mascots.map(m=>(<Text key={m} style={styles.m}>{m}</Text>))}
      </View>
      <View style={styles.notice}>
        <Text style={styles.noticeText}>
          ⚠️ Not medical advice. For emergencies, call your local emergency number.
          Phones can’t read temperature from a finger—use a real thermometer.
        </Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}
const styles = StyleSheet.create({
  hero:{ margin:16, padding:18, backgroundColor: theme.colors.primary, borderRadius: theme.radius },
  heroEmoji:{ fontSize:32, color:'#fff' },
  heroTitle:{ fontSize:24, fontWeight:'900', color:'#fff', marginTop:6 },
  heroSub:{ color:'#e8fffb', marginTop:6 },
  mascots:{ flexDirection:'row', flexWrap:'wrap', marginHorizontal:16 },
  m:{ fontSize:28, marginRight:10, marginBottom:6 },
  notice:{ margin:16, backgroundColor: theme.colors.card, padding:12, borderRadius: theme.radius },
  noticeText:{ color: theme.colors.text }
});