import { View, Text, Image, StyleSheet, Button } from "react-native";



const App = () => {
  return (
    <View style={styles.container}>
      {/* BELOW IS THE COMPONENT FOR TOP NAVIGATION */}
      <View style={styles.headNav}>
        <View style={styles.headNavRight}>
          <Image resizeMode="cover" style={styles.profile} source={require('../assets/images/472875871_628437569639942_8004256870174663318_n.jpg')}/>
          <View>
            <Text>Hello</Text>
            <Text style={styles.name}>Barry Adam</Text>
          </View>
        </View>
        <View>
          <Button title="Search"></Button>
        </View>
      </View>

      <View style={styles.creditCard}>

      </View>

      <View style={styles.servicesContainer}>
        <Text>Services</Text>
        <View style={styles.services}>

          <View style={styles.servicesCard}>
            <View style={styles.icon}></View>
            <Text style={styles.serviceName}>Wallet</Text>
          </View>

          <View style={styles.servicesCard}>
            <View style={styles.icon}></View>
            <Text style={styles.serviceName}>Transfer</Text>
          </View>

          <View style={styles.servicesCard}>
            <View style={styles.icon}></View>
            <Text style={styles.serviceName}>Pay</Text>
          </View>

          <View style={styles.servicesCard}>
            <View style={styles.icon}></View>
            <Text style={styles.serviceName}>Topup</Text>
          </View>

        </View>
      </View>

      {/* BELOW IS THE COMPONENT FOR CARD SHOW */}

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  headNav:{
    width: '100%',
    // borderWidth: 1,
    flexDirection: 'row',
    // : '10, 20',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingInline: 15
  },

  headNavRight:{
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },

  profile:{
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10
  },
  name:{
    fontSize: 16,
    fontWeight: 'bold'
  },
  creditCard:{
    backgroundColor: '#252525',
    width: '90%',
    height: 180,
    borderRadius: 8,
    margin: 20
  },

  servicesContainer: {
    borderWidth: 1,
    height: 100,
    width: '90%'
  },

  services:{
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    borderWidth: 1
  },


  servicesCard:{
    flex: 1
  },

  serviceName:{
    fontWeight: 'bold',
    textAlign: 'center'
  },


  icon:{
    backgroundColor: '#252525',
    height: 60,
    width: 60
  }
})


export default App;