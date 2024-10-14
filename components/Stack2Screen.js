import {
    View,
    Text,
} from 'react-native';
function Stack2Screen() {
    return (<View>
        <View style={{ marginTop: 10, backgroundColor: 'white', width: '100%', height: 100, justifyContent: 'space-between', paddingLeft: 40, flexDirection: 'row', paddingRight: 40, alignItems: 'center' }}>
            <View>
                <Text style={{ color: 'gray', fontSize: 15 }}>Pay with</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>JazzCash</Text>
            </View>
            <View>
                <Text style={{ fontSize: 30 }}>
                    {'>'}
                </Text>
            </View>
        </View>
        <View style={{ marginTop: 10, backgroundColor: 'white', width: '100%', height: 100, justifyContent: 'space-between', paddingLeft: 40, flexDirection: 'row', paddingRight: 40, alignItems: 'center' }}>
            <View>
                <Text style={{ color: 'gray', fontSize: 15 }}>Pay with</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>Credit/Debit Card</Text>
            </View>
            <View>
                <Text style={{ fontSize: 30 }}>
                    {'>'}
                </Text>
            </View>
        </View>
        <View style={{ marginTop: 10, backgroundColor: 'white', width: '100%', height: 100, justifyContent: 'space-between', paddingLeft: 40, flexDirection: 'row', paddingRight: 40, alignItems: 'center' }}>
            <View>
                <Text style={{ color: 'gray', fontSize: 15 }}>Pay with</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>Scratch Card</Text>
            </View>
            <View>
                <Text style={{ fontSize: 30 }}>
                    {'>'}
                </Text>
            </View>
        </View>

    </View>)
}

export default Stack2Screen