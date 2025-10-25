import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';
export default function BrandedHeader({ title, subtitle }){
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.sub}>{subtitle}</Text> : null}
    </View>
  );
}
const styles = StyleSheet.create({
  wrap:{ padding:16, backgroundColor: theme.colors.soft, borderBottomWidth:1, borderColor:'#e6ecea' },
  title:{ fontSize:24, fontWeight:'900', color: theme.colors.primary },
  sub:{ marginTop:4, color: theme.colors.text }
});
