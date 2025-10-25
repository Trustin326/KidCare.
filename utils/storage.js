import AsyncStorage from '@react-native-async-storage/async-storage';
export const save = async (key, value) => {
  try { await AsyncStorage.setItem(key, JSON.stringify(value)); } catch(e){ console.warn(e); }
};
export const load = async (key, fallback=null) => {
  try { const v = await AsyncStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch(e){ console.warn(e); return fallback; }
};
