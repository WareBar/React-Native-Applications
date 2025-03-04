import { View, Text, StyleSheet, Image } from "react-native";


const TransactionCard = ({name, action, amount, picture, bgColor}) => {
    return (
        <View style={styles.TransactionCard}>

            <View style={styles.transaction}>
                <View style={[styles.transactionIllustration, {backgroundColor:bgColor}]}>
                    <Image style={styles.transactionPicture} source={require('@/assets/images/itsMe.jpg')} />
                </View>
                <View>
                    <Text style={{fontSize:20, fontWeight: 500}}>{name}</Text>
                    <Text style={{fontSize:15}} >{action}</Text>
                </View>
            </View>

            <Text style={{color:bgColor, fontWeight: '700', fontSize: 17}}>${amount}</Text>


        </View>
    )
}

const styles = StyleSheet.create({
    TransactionCard:{
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        padding: 10,
        elevation: 2.5,
        borderRadius: 5,
        marginVertical: 10
    },

    transaction: {
        flexDirection:'row',
        alignItems:'center',
        gap: 5
    },

    transactionPicture: {
        height: 40,
        width: 40
    },

    transactionIllustration: {
        padding: 5,
        borderRadius: 5
    }
})




export default TransactionCard