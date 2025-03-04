import { View, Text, Image, StyleSheet, Button } from "react-native";
import TopNavigation from "./components/Dashboard/TopNavigation";
import Card from "./components/Dashboard/Card";
import ServicesList from "./components/Dashboard/ServicesList";
import TransactionsList from "./components/Dashboard/TransactionsList";




const App = () => {
  return (
    <View style={styles.AppContainer}>

      <Text style={{fontSize: 30, textAlign:'center'}}>DASHBOARD</Text>
      <View style={styles.componentContainer}>
        <TopNavigation/>
        <Card/>
        <ServicesList/>
        <TransactionsList/>
      </View>



    </View>
  )
}


const styles = StyleSheet.create({
  'AppContainer':{
    flex:1,
    marginHorizontal: 15,

  },
  componentContainer:{
    gap:30
  }
})




export default App;