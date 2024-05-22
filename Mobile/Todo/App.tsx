import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Todo from './Todo/Todo';

export default function App() {
  return (
   <>
   <Todo/>
   <StatusBar style="auto" />
   </>
  );
}


