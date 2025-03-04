import { View, Text, StyleSheet } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'




const ServiceCard = ({name, visual, bgColor}) => {
    return (
        <View style={styles.ServiceCard}>
            <View style={[styles.service, {backgroundColor: bgColor}]}>
                <FontAwesomeIcon icon={visual} style={styles.VisualIcon} />
            </View>
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    ServiceCard:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        gap: 5
    },

    service:{
        padding: 12,
        borderRadius: 4
    },

    VisualIcon:{
        padding: 18,
        color: 'white'
    },
    name:{
        fontWeight: 'bold',
        fontSize: 14
    }
})


export default ServiceCard