import {
    View,
    Text,
} from 'react-native';
function Stack3Screen() {
    return (<View>
        <View>
            <Text style={{ textAlign: 'center', color: 'gray', marginTop: 20, fontWeight: 'bold', fontSize: 20 }}>
                Subscribed Packages
            </Text>
            <Text style={{ marginTop: 40, fontWeight: 'bold', color: 'black', marginLeft: 10, fontSize: 15 }}>
                More Services
            </Text>
        </View>
        <View style={{ marginTop: 10, backgroundColor: 'white', width: '100%', height: 100, justifyContent: 'space-between', paddingLeft: 40, flexDirection: 'row', paddingRight: 40, alignItems: 'center' }}>
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>International Roaming</Text>
            </View>
            <View>
                <Text style={{ fontSize: 20, color: 'red' }}>
                    Rs 0.00
                </Text>
            </View>
        </View>
        <View style={{ marginTop: 30, backgroundColor: 'white', width: '100%', height: 100, justifyContent: 'space-between', paddingLeft: 40, flexDirection: 'row', paddingRight: 40, alignItems: 'center' }}>
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>International Roaming</Text>
            </View>
            <View>
                <Text style={{ fontSize: 20, color: 'red' }}>
                    Rs 0.00
                </Text>
            </View>
        </View>
    </View>)
}
export default Stack3Screen