import { View, Text, Image, StyleSheet } from "react-native";


const Card = () => {
    return (
        <View style={styles.Card}>
            <View style={styles.cardHeader}>
                <Text style={[styles.boldText, styles.textColor]}>**** **** **** 1471</Text>
                <Text style={styles.textColor}>12/26</Text> 
            </View>
            <View style={styles.balance}>
                <Text style={styles.textColor}>Balance:</Text>
                <Text style={[styles.boldText, styles.textColor]}>$100,900</Text>
            </View>
            <View style={styles.cardMeta}>
                <View>
                    <Text style={styles.textColor}>CARD HOLDER</Text>
                    <Text style={[styles.boldText, styles.textColor]}>Barry Adam</Text>
                </View>
                <View>
                    <Text style={styles.textColor}>Central Bank</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    Card:{
        gap: 30,
        padding: 14,
        backgroundColor: '#2D38A8',
        borderRadius: 5
    },

    textColor:{
        color: 'white'
    },

    cardHeader:{

        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    balance:{
        flexDirection:'row',
        alignItems:'center',
        gap: 10
    },

    boldText:{
        fontWeight: 'bold',
        fontSize: 17
    },

    cardMeta:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    }
})


export default Card;