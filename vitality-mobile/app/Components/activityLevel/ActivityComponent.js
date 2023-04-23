import { Text, TouchableOpacity, StyleSheet } from "react-native"
import { Color } from "../../../globalStyling"

const ActivityLevelTypes = ({title, description, action}) => {
    return(
        <TouchableOpacity style={activityLevelStyle.activity} onPress={action}>
            <Text style={activityLevelStyle.activityTitle}>{title}</Text>
            <Text style={activityLevelStyle.activityDescription}>{description}</Text>
        </TouchableOpacity>
    )
}

const activityLevelStyle = StyleSheet.create({
    activity:{
        width: 300,
        height: 130,
        borderRadius: 10,
        backgroundColor: Color.white,
        paddingLeft: 20,
        display: 'flex',
        justifyContent: 'center'
    },
    activityTitle: {
        fontSize: 25,
        fontWeight: 500
    },
    activityDescription: {
        fontSize: 15,
        paddingRight: 50
    }
})
export default ActivityLevelTypes