
import {
    FlatList,
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View,
} from 'react-native';


export default UserData = (props) => {
    const item = props.item
    return (
        <View style={style.box}>
            <Text style={style.item}> {item.name}</Text>
            <Text style={style.item}>{item.email}</Text>

        </View>
    )

}


const style = StyleSheet.create({
    box: {
        flexDirection: 'row',
        backgroundColor: 'black',
        borderRadius: 30,
        padding: 20,
        margin: 10
    },

    item: {
        fontSize: 20,
        margin: 10,
        flex: 1,
        textAlign: 'center',




    },
    textInput: {
        color: 'white',
        borderRadius: 20,
        margin: 10,
        padding: 10,
        borderColor: 'white',
        borderWidth: 1
    },
    yourName: {
        margin: 10,
        padding: 20,
        color: "black",
        backgroundColor: "pink",
        fontSize: 20,
        borderRadius: 20
    }
})