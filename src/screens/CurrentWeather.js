import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";

const CurrentWeather = ({ weatherData }) => {
  const {
    container,
    wrapper,
    tempStyles,
    feels,
    highLow,
    highLowWrapper,
    bodyWrapper,
    description,
    message,
  } = styles;
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;

const weatherCondition = weather[0].main


  return (
    <SafeAreaView style={[wrapper,{backgroundColor:weatherType[weatherCondition].backgroundColor}
    ]}>
      <View style={container}>

        <Feather name={weatherType[weatherCondition].icon} size={100} color="white" />

        <Text style={message}>Current Weather</Text>

        <Text style={tempStyles}>{`${temp}°`}</Text>

        <Text style={feels}>{`Feels like ${feels_like}°`}</Text>

        <RowText
          messageOne={`High:${temp_max}° `}
          messageTwo={`Low:${temp_min}°`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>

      <RowText
        messageOne={weather[0].description}
        messageTwo={weatherType[weatherCondition].message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    
    
  },

  wrapper: {
    flex: 1,
    
  },
  tempStyles: {
    color: "black",
    fontSize: 48,
    

  },
  feels: {
    fontSize: 30,
    color: "black",
    

  },

  highLow: {
    fontSize: 30,
    color: "black",
    
  },

  highLowWrapper: {
    flexDirection: "row",
    padding:20,
    borderWidth:2,
    borderRadius:5
  },

  bodyWrapper: {
    justifyContent: 'space-between',
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
    borderWidth:2,
    borderRadius:5,
    padding:10,
    margin:10

  },

  description: {
    fontSize: 30,
    
  },
  message: {
    fontSize: 25,
    
  },
});

export default CurrentWeather;
