import React,{useEffect, useState} from "react";
import { ActivityIndicator,View, StyleSheet } from "react-native";
import Tabs from './src/components/Tabs'
import { NavigationContainer } from "@react-navigation/native";
import { useGetWeather } from "./src/hooks/useGetWeather";

 

const App = () => {
  
  const {loading,error,weather} = useGetWeather()
  console.log(loading,error,weather)

  if(weather && weather.weatherlist) {
    return (
       <NavigationContainer>
        <Tabs weather={weather} />
       </NavigationContainer>
    );
  }
    
  return(
    <View style={styles.container}>
      <ActivityIndicator size="large" color="blue" />
    </View>
    
    )


  
  
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  }
})
export default App;
