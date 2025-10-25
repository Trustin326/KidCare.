import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, PanResponder, TouchableOpacity } from 'react-native';
const colors = ['#ff595e','#ffca3a','#8ac926','#1982c4','#6a4c93','#ff9f1c','#00bbf9'];
export default function Coloring({ onBack }){
  const [strokes, setStrokes] = useState([]);
  const [color, setColor] = useState(colors[0]);
  const pan = useRef(PanResponder.create({
    onStartShouldSetPanResponder: ()=>true,
    onPanResponderMove: (_, g)=>{
      setStrokes(s => [...s, {x:g.moveX, y:g.moveY-120, c:color}]);
    }
  })).current;
  return (
    <View style={{flex:1}}>
      <View style={styles.top}>
        <TouchableOpacity onPress={onBack}><Text style={styles.back}>← Back</Text></TouchableOpacity>
        <Text style={styles.title}>Coloring</Text>
      </View>
      <View style={styles.palette}>
        {colors.map(c=>(<TouchableOpacity key={c} onPress={()=>setColor(c)} style={[styles.swatch,{backgroundColor:c, borderWidth: c===color?3:0}]} />))}
        <TouchableOpacity onPress={()=>setStrokes([])} style={styles.clear}><Text>Clear</Text></TouchableOpacity>
      </View>
      <View style={styles.canvas} {...pan.panHandlers}>
        {strokes.map((s,i)=>(<View key={i} style={{position:'absolute', left:s.x-6, top:s.y-6, width:12, height:12, borderRadius:6, backgroundColor:s.c}} />))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  top:{flexDirection:'row', alignItems:'center', padding:10, backgroundColor:'#f0f8ff'},
  back:{fontSize:16, marginRight:10},
  title:{fontSize:18, fontWeight:'700'},
  palette:{flexDirection:'row', alignItems:'center', padding:10},
  swatch:{width:26, height:26, borderRadius:13, marginRight:10},
  clear:{padding:8, backgroundColor:'#eee', borderRadius:8},
  canvas:{flex:1, backgroundColor:'#fff', borderTopWidth:1, borderColor:'#eee'}
});
