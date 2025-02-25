import { Image,
        StyleSheet,
        Platform,
        View,
        Text,
        Button,
        TextInput, 
        Alert,
        TouchableOpacity,
        ImageBackground
      } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.body}>





      <ImageBackground source={require('../../assets/images/backdrop.png')} resizeMode='cover' style={styles.bg}>
        <View style={styles.Header}>
          <Text style={styles.catch}>Get Healthy</Text>
          <Text style={styles.supporting}>Simple way to find Tasty Recipe</Text>
        </View>

        <View style={styles.loginForm}>
          <TextInput style={styles.input} placeholder='Username'></TextInput>
          <TextInput style={styles.input} placeholder='Password'></TextInput>
          <TouchableOpacity style={styles.logBtn} onPress={()=>Alert.alert('Logged In')}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        
        </ImageBackground>


    </View>

  );
}

const styles = StyleSheet.create({

  body: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },


  loginForm: {
    marginTop: 400,
    // borderWidth: 1,
    width: 250,
    // padding: 50,
    flexDirection: 'column',
    alignItems: 'center'
  },

  input: {

    // flex: 1,
    // width: 250,
    backgroundColor: 'whitesmoke',
    width: '100%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'flex-end'

  },
  logBtn: {
    backgroundColor: '#129575',
    width: '100%',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: Platform.OS === 'android' ? 4 : 0, // Android shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  buttonText:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bg:{

    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },

  Header:{
    position: 'absolute',
    top: 200,
    flexGrow: 1,
    zIndex: 1,
    // textAlign: 'center'
    alignItems: 'center',
  },

  catch: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'whitesmoke'
  },

  supporting: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'whitesmoke'
  }


});
