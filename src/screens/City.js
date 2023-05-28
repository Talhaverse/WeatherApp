import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  StatusBar,
} from "react-native";
import React from "react";
import IconText from "../components/IconText";
import moment from "moment";
import { FontAwesome5 } from '@expo/vector-icons';

const City = ({ weatherData }) => {
  const {
    container,
    cityName,
    cityText,
    countryName,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout,
    imagelayout,
    rowLayout1
  } = styles;
  const { name, country, population, sunrise, sunset } = weatherData;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/bg.jpg")}
        style={imagelayout}
      >
        <View style={styles.country}>
        <FontAwesome5 name="city" size={30} color="white" style={{marginTop:20}} />
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>
        </View>

        <View style={[populationWrapper, rowLayout1]}>
          <IconText
            iconName={"user"}
            iconColor={"white"}
            bodyText={`Population: ${population}`}
            bodyTextStyles={populationText}
          />
        </View>

        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={"sunrise"}
            iconColor={"white"}
            bodyText={moment(sunrise).format("h:mm:ss a")}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={"sunset"}
            iconColor={"white"}
            bodyText={moment(sunset).format("h:mm:ss a")}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  imagelayout: {
    flex: 1,
    
  },

  cityName: {
    fontSize: 40,
  },

  countryName: {
    fontSize: 40,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "black",
    marginTop:10
  },

  populationWrapper: {
    justifyContent: "center",
    marginTop: 1,
    margin:10

  },

  country:{
    marginTop:60,
    borderWidth: 2,
    borderRadius:30,
    borderColor: "white",
    backgroundColor:'#e2d810',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin:10


  },

  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "black",
  },

  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
    margin:10

  },

  riseSetText: {
    fontSize: 20,
    color: "black",
  },

  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth:2,
    borderColor: "white",
    borderRadius:30,
    marginTop: 90,
    backgroundColor:'#12a4d9'
  },
  rowLayout1: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth:2,
    borderColor: "white",
    borderRadius:30,
    padding:2,
    marginTop: 90,
    backgroundColor:'#d9138a'
  },
});

export default City;
