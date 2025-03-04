import { View, Text, StyleSheet, ScrollView } from "react-native";
import TransactionCard from "./TransactionCard";


const TransactionsList = () => {
    return (
        <View style={styles.TransactionsList}>
            <Text style={{fontSize: 19, fontWeight:'800'}}>Transactions</Text>
            <ScrollView style={styles.List}>
                <TransactionCard name={'Dribble'} action={'Payment Received'} amount={10} bgColor={'#E64C86'} picture={'@/assets/images/itsMe.jpg'} />
                <TransactionCard name={'Gcash'} action={'Deposited for transfer'} amount={10} bgColor={'#007DFE'} picture={'@/assets/images/itsMe.jpg'} />
                <TransactionCard name={'Uplabs'} action={'Payment Received'} amount={10} bgColor={'#5929D7'} picture={'@/assets/images/itsMe.jpg'} />
                <TransactionCard name={'Meralco'} action={'Payment Sent'} amount={10} bgColor={'#FF5114'} picture={'@/assets/images/itsMe.jpg'} />
                <TransactionCard name={'Lupata'} action={'Payment Sent'} amount={10} bgColor={'#50CC8E'} picture={'@/assets/images/itsMe.jpg'} />

                
                

            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    TransactionsList:{
        // borderWidth: 1
    },
    List:{
        // gap:25,
        height: 335
    }
})



export default TransactionsList;