import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
export default function JumpMonster({ onBack }){
  const [playerY, setPlayerY] = useState(0);
  const [obstacleX, setObstacleX] = useState(300);
  const [running, setRunning] = useState(true);
  const [score, setScore] = useState(0);
  const vel = useRef(0);
  useEffect(()=>{
    const id = setInterval(()=>{
      if(!running) return;
      vel.current += 0.9;
      setPlayerY(y => Math.min(100, y + vel.current));
      setObstacleX(x => {
        let nx = x - 8;
        if(nx < -20){ nx = 320; setScore(s=>s+1); }
        return nx;
      });
    }, 50);
    return ()=>clearInterval(id);
  }, [running]);
  useEffect(()=>{
    if(obstacleX<40 && obstacleX>0 && playerY>70){ setRunning(false); }
  }, [obstacleX, playerY]);
  const jump = ()=>{ vel.current = -12; };
  const reset = ()=>{ setPlayerY(0); vel.current=0; setObstacleX(300); setScore(0); setRunning(true); };
  return (
    <View style={{flex:1}}>
      <View style={styles.top}>
        <TouchableOpacity onPress={onBack}><Text style={styles.back}>← Back</Text></TouchableOpacity>
        <Text style={styles.title}>Jump the Sick Monster</Text>
      </View>
      <View style={styles.world} onStartShouldSetResponder={()=>true} onResponderGrant={jump}>
        <View style={[styles.player, {bottom: playerY}]} />
        <View style={[styles.obstacle, {left: obstacleX}]} />
        {!running && <View style={styles.overlay}>
          <Text style={styles.over}>Oops! Score {score}</Text>
          <TouchableOpacity onPress={reset} style={styles.btn}><Text style={styles.btnText}>Play again</Text></TouchableOpacity>
        </View>}
      </View>
      <Text style={styles.score}>Score: {score}</Text>
      <Text style={styles.tip}>Tap to jump over the germ monster!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  top:{flexDirection:'row', alignItems:'center', padding:10, backgroundColor:'#f0f8ff'},
  back:{fontSize:16, marginRight:10},
  title:{fontSize:18, fontWeight:'700'},
  world:{flex:1, backgroundColor:'#e6fff5', justifyContent:'flex-end', position:'relative'},
  player:{position:'absolute', left:20, width:22, height:22, backgroundColor:'#d4af37', borderRadius:4},
  obstacle:{position:'absolute', bottom:0, width:20, height:40, backgroundColor:'#ff595e'},
  overlay:{position:'absolute', top:0, left:0, right:0, bottom:0, alignItems:'center', justifyContent:'center', backgroundColor:'rgba(0,0,0,0.2)'},
  over:{fontSize:22, fontWeight:'800', marginBottom:10},
  btn:{backgroundColor:'#ffd166', padding:10, borderRadius:10},
  btnText:{fontWeight:'700'},
  score:{textAlign:'center', padding:8, fontWeight:'700'},
  tip:{textAlign:'center', paddingBottom:10}
});