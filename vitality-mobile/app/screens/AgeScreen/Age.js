import { StyleSheet, View, Alert, Pressable, Image, Text, TextInput } from "react-native"
import { Color } from "../../../globalStyling"
import NextBtn from "../../Components/NextBtn/NextBtn"

const Age = () => {
    return(
        <View style={ageStyling.mainContainer}>
            <View  style={ageStyling.backBtnContainer}>
                <View style={ageStyling.backBtn}>
                    <Pressable onPress={() => Alert.alert('image clicked')}>
                        <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                    </Pressable>
                </View>
            </View>
            <View style={ageStyling.contentContainer}>
                <View style={ageStyling.headerContainer}>
                    <Text style={ageStyling.headerText}>How <Text style={ageStyling.span}>old</Text> are you?</Text>
                </View>
                <View style={ageStyling.descriptionContainer}>
                    <Text style={ageStyling.descriptionText}>To give you a better experience we need to know your age</Text>
                </View>
                <View style={ageStyling.pickerContainer}>
                    <TextInput style={ageStyling.ageSelector} underlineColorAndroid="transparent" keyboardType="numeric"/>
                </View>
                <NextBtn/>
            </View>
        </View>
    )
}

const ageStyling = StyleSheet.create({
    
    mainContainer: {
        backgroundColor: Color.grey,
        display: "flex",
        alignItems: 'center',
        flex: 1,
        height: 932,
        overflow: "hidden",
        width: "100%",
    },
    backBtnContainer: {
        width: '100%',
        height: '10%',
    },
    backBtn: {
        height: 50,
        width: 50,
        marginTop: 0,
        marginLeft: 10,
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentContainer: {
        width: '100%',
        height: '90%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    headerContainer: {
        width: '100%',
        height: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 30,
        textAlign: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    span: {
        fontWeight: 600
    },
    descriptionContainer: {
        width: '100%',
        height: '7%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    descriptionText: {
        textAlign: 'center',
        paddingLeft: 55,
        paddingRight: 55,
    },
    pickerContainer: {
        width: '100%',
        height: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ageSelector: {
        width: 200,
        height: 200,
        borderRadius: 200/2,
        backgroundColor: Color.darkGreen,
        textAlign: 'center',
        fontSize: 50,
        color: Color.white
    }
})

export default Age