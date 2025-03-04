import { View, Text, StyleSheet } from "react-native";
import ServiceCard from "./ServiceCard";
import { faWallet, faMoneyBillTransfer, faSackDollar, faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons'

const ServicesList = () => {
    return (
        <View style={styles.ServicesList}>
            <Text style={{fontSize: 19, fontWeight:'800'}}>Services</Text>
            <View style={styles.List}>
                <ServiceCard name={'Wallet'} visual={faWallet} bgColor={'#A82D2D'}/>
                <ServiceCard name={'Transfer'} visual={faMoneyBillTransfer} bgColor={'#2D6DA8'}/>
                <ServiceCard name={'Pay'} visual={faSackDollar} bgColor={'#A8AC2A'}/>
                <ServiceCard name={'TopUp'} visual={faMoneyBillTrendUp} bgColor={'#2DA840'}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    ServicesList:{
        // borderWidth: 1
        gap: 5
    },
    List:{
        flexDirection: 'row',
        gap: 20
    }
})


export default ServicesList;