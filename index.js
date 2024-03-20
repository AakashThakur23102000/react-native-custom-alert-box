import { View, Text, StyleSheet, Modal, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import EvilIcons from "react-native-vector-icons/EvilIcons"
import Feather from "react-native-vector-icons/Feather"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import FontAwesome5Pro from "react-native-vector-icons/FontAwesome5Pro"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import FontAwesome6Pro from "react-native-vector-icons/FontAwesome6Pro"
import Fontisto from "react-native-vector-icons/Fontisto"
import Foundation from "react-native-vector-icons/Foundation"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Octicons from "react-native-vector-icons/Octicons"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import Zocial from "react-native-vector-icons/Zocial"




const { width, height } = Dimensions.get("screen");

const typeColors = {
    Success: "#28A745",
    Danger: "#DC3545",
    Primary: "#007bff",
    Secondary: "#5A6268",
    Warning: "#E0A800",
    Dark: "#23272B"
}



const ReactNativeAlertBox = ({
    showAlertModal,
    AlertType,
    HeadingText,
    BodyText,
    ButtonLeftText,
    ButtonLeftFunction,
    ButtonRightText,
    ButtonRightFunction,
    AlertBoxOpacity,
    AlertBoxWidthPercent,
    IconPackageName,
    IconName,
    IconSize,
    IconColor,
    IconScaling
}) => {

    const Style = StyleSheet.create({
        screen: {
            flex: 1,
            backgroundColor: `rgba(0, 0, 0, ${AlertBoxOpacity || 0.2})`,
            justifyContent: "center",
            alignItems: "center",
        },
        innerBox: {
            backgroundColor: "white",
            width: AlertBoxWidthPercent ? AlertBoxWidthPercent : "95%",
            borderRadius: 12,
            elevation: 3,
            paddingVertical: height * 0.014,
            paddingHorizontal: width * 0.028,
            paddingTop: height * 0.045,
            gap: height * 0.015
        },
        circleImage: {
            borderWidth: width * 0.01,
            borderColor: "white",
            width: height * 0.09,
            height: height * 0.09,
            borderRadius: 100,
            position: "absolute",
            top: height * -0.048,
            backgroundColor: typeColors[AlertType] || "green",
            zIndex: 1,
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center"
        },
        headingText: {
            fontSize: width * 0.07,
            color: "black",
            fontWeight: "bold",
        },
        bodyText: {
            fontSize: width * 0.045,
            color: "black",
        },
        buttonContainerView: {
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
        },
        buttonView: {
            width: "48.8%",
            paddingVertical: height * 0.014,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            elevation: 2,
        }
    })


    return (
        <Modal
            visible={showAlertModal}
            transparent={true}
            animationType='fade'
        >
            <View style={Style.screen}>
                <View style={Style.innerBox}>
                    <View style={Style.circleImage} >
                        {IconPackageName === "AntDesign" && (<AntDesign name={IconName} size={IconSize} color={IconColor} style={{ transform: [{ scale: IconScaling || width * 0.0025 }] }} />)}
                        {IconPackageName === "Entypo" && (<Entypo name={IconName} size={IconSize} color={IconColor} style={{ transform: [{ scale: IconScaling || width * 0.0025 }] }} />)}
                        {IconPackageName === "EvilIcons" && (<EvilIcons name={IconName} size={IconSize} color={IconColor} style={{ transform: [{ scale: IconScaling || width * 0.0025 }] }} />)}
                        {IconPackageName === "Feather" && (<Feather name={IconName} size={IconSize} color={IconColor} style={{ transform: [{ scale: IconScaling || width * 0.0025 }] }} />)}
                        {IconPackageName === "FontAwesome" && (<FontAwesome name={IconName} size={IconSize} color={IconColor} style={{ transform: [{ scale: IconScaling || width * 0.0025 }] }} />)}
                        {IconPackageName === "FontAwesome5" && (<FontAwesome5 name={IconName} size={IconSize} color={IconColor} style={{ transform: [{ scale: IconScaling || width * 0.0025 }] }} />)}
                        {IconPackageName === "FontAwesome5Pro" && (<FontAwesome5Pro name={IconName} size={IconSize} color={IconColor} style={{ transform: [{ scale: IconScaling || width * 0.0025 }] }} />)}
                        {IconPackageName === "FontAwesome6" && (<FontAwesome6 name={IconName} size={IconSize} color={IconColor} style={{ transform: [{ scale: IconScaling || width * 0.0025 }] }} />)}
                        {IconPackageName === "FontAwesome6Pro" && (<FontAwesome6Pro name={IconName} size={IconSize} color={IconColor} style={{ transform: [{ scale: IconScaling || width * 0.0025 }] }} />)}
                        {IconPackageName === "Fontisto" && (<Fontisto name={IconName} size={IconSize} color={IconColor} style={{ transform: [{ scale: IconScaling || width * 0.0025 }] }} />)}
                        {IconPackageName === "Foundation" && (<Foundation name={IconName} size={IconSize} color={IconColor} style={{ transform: [{ scale: IconScaling || width * 0.0025 }] }} />)}
                        {IconPackageName === "Ionicons" && (<Ionicons name={IconName} size={IconSize} color={IconColor} style={{ transform: [{ scale: IconScaling || width * 0.0025 }] }} />)}
                        {IconPackageName === "MaterialCommunityIcons" && (<MaterialCommunityIcons name={IconName} size={IconSize} color={IconColor} style={{ transform: [{ scale: IconScaling || width * 0.0025 }] }} />)}
                        {IconPackageName === "MaterialIcons" && (<MaterialIcons name={IconName} size={IconSize} color={IconColor} style={{ transform: [{ scale: IconScaling || width * 0.0025 }] }} />)}
                        {IconPackageName === "Octicons" && (<Octicons name={IconName} size={IconSize} color={IconColor} style={{ transform: [{ scale: IconScaling || width * 0.0025 }] }} />)}
                        {IconPackageName === "SimpleLineIcons" && (<SimpleLineIcons name={IconName} size={IconSize} color={IconColor} style={{ transform: [{ scale: IconScaling || width * 0.0025 }] }} />)}
                        {IconPackageName === "Zocial" && (<Zocial name={IconName} size={IconSize} color={IconColor} style={{ transform: [{ scale: IconScaling || width * 0.0025 }] }} />)}


                    </View>

                    <Text style={Style.headingText}>{HeadingText || "Heading"}</Text>

                    <Text style={Style.bodyText}>{BodyText || "Alert Message"}</Text>
                    <View style={Style.buttonContainerView}>
                        <TouchableOpacity
                            style={[Style.buttonView, { backgroundColor: "#F1F1FB" }]}
                            onPress={() => ButtonLeftFunction()}
                        >
                            <Text style={[Style.bodyText, { color: "black" }]}>{ButtonLeftText || "Cancel"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[Style.buttonView, { backgroundColor: typeColors[AlertType] || "green" }]}
                            onPress={() => ButtonRightFunction()}
                        >
                            <Text style={[Style.bodyText, { color: "white" }]}>{ButtonRightText || "Ok"}</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </Modal>
    )
}

export default ReactNativeAlertBox

