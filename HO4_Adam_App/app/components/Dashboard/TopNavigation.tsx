import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const TopNavigation = () => {
    return (
        <View style={styles.TopNavigation}>
            <View style={styles.container}>
                <View style={styles.left}>
                    <Image style={styles.profile} source={require('@/assets/images/itsMe.jpg')}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.greeting}>Hello</Text>
                        <Text style={styles.name}>Barry Adam</Text>
                    </View>
                </View>
                
                <TouchableOpacity onPress={()=>Alert.alert('search?')}>
                    <FontAwesomeIcon icon={faSearch} style={styles.searchIcon} />
                </TouchableOpacity>
                
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    TopNavigation:{
        // borderWidth: 1,
        height: 70,

        
        },

        container:{
            height: 70,
            // borderWidth: 1,
            justifyContent: 'space-between',
            alignItems:'center',
            flexDirection: 'row',
            // paddingHorizontal: 15
        },

        greeting:{
            fontSize:15
        },

        name:{
            fontSize: 18,
            fontWeight: '600'
        },

        left:{
            flex:1,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10
        },

        profile:{
            height: 60,
            width: 60,
            borderRadius: 30
        },
        textContainer:{
            // borderWidth: 1,
            width: 100
        },
        searchIcon:{
            padding: 13,
            color: '#2D38A8'
        }
    }
)


export default TopNavigation