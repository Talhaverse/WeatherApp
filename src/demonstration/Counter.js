import React,{useState,useEffect} from "react";
import {View,Text,Button,StyleSheet,SafeAreaView} from "react-native"

const Counter = ()=>{
const [count,setCount] = useState(0)
const [newCount,setNewCount] = useState()
useEffect(()=>{0
console.log(`Count chANGED `)
return() => {console.log("useeffect cleanup")}
})
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{`count:${count}`}</Text>
            <Button color="red" title="Increse the count" onPress={()=>{setCount(count + 1) }}  />
            <Button color="green" title="Decrease the count" onPress={()=>{ setCount(count-1) }}  />   
            <Button color="purple" title="Reset the count" onPress={()=>{ setNewCount(count*0) }}  />   
            <Button color="purple" title="Reset the count" onPress={()=>{ setNewCount(count*0) }}  />          
       
       
        </SafeAreaView>
    )

} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange'
    },
    title: {
        alignSelf: 'center',
        fontSize:25,
        marginTop:25
    }

})
export default Counter