import { View, Alert, Pressable, Image, Text } from "react-native"
import { dietStyling } from "./DietStyling"
import NextBtn from "../../Components/NextBtn/NextBtn"
import TypeOfDiet from "../../Components/DietComponent/TypeOfDiet"

const Diet = () => {
    return(
        <View style={dietStyling.mainContainer}>
            <View  style={dietStyling.backBtnContainer}>
                <View style={dietStyling.backBtn}>
                    <Pressable onPress={() => Alert.alert('image clicked')}>
                        <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                    </Pressable>
                </View>
            </View>
            <View style={dietStyling.contentContainer}>
                <View style={dietStyling.headerContainer}>
                    <Text style={dietStyling.headerText}>Choose a diet you’d like to follow</Text>
                </View>

                <View style={dietStyling.dietContainer}>
                    <TypeOfDiet title={'Ketogenic Diet'} description={'High-fat, low-carb diet that aims to get the body into a state of ketosis.'} imageName={'keto'}/>
                    <TypeOfDiet title={'Vegan Diet'} description={'Plant-based diet that excludes all animal products including meat, dairy, eggs, and honey.'} imageName={'keto'}/>
                    <TypeOfDiet title={'Vegetarian Diet'} description={'Plant-based foods and excludes meat, fish, and poultry. It may dairy and eggs.'} imageName={'keto'}/>
                    <TypeOfDiet title={'Normal Diet'} description={'Balanced and healthy diet that meets the nutritional needs of an individual.'} imageName={'keto'}/>
                    

                </View>
                
                
                <NextBtn/>
            </View>
        </View>
    )
}
export default Diet