
# react-native-custom-alert-box

Customizable and easy-to-use alert box for React Native.

## Screenshots
<p align="center">
<img src="https://lh3.googleusercontent.com/drive-viewer/AKGpihamO2eB1a-B9KX4stWuTQnNThrqT3tqj5J45TFa_LxnKsaEBvJPvaVv9ddpVkqt-FlExQH05_IJwCDPDqG27YYyQ8RYdw=s1600" alt="drawing1" width="150"/>
<img src="https://lh3.googleusercontent.com/drive-viewer/AKGpihYaFSW-Bm023xqRRMOqwQXjirFc01XnlD231jehPlaaNOiGuPUQhxh2EuBLWVxk4diSaZ25-5KRepyGN7SnUQvG2PxFPA=s1600" alt="drawing2" width="150"/>
<img src="https://lh3.googleusercontent.com/drive-viewer/AKGpihYX00T-tTFxCusRqURiAOy2RBkq0qbj5H2SsJp_fZdDmrIAJnIhNsoVkisAEaBLxj0v32cM_kbYju8GAWr-F2DUFOSeRQ=s1600" alt="drawing3" width="150"/>
<img src="https://lh3.googleusercontent.com/drive-viewer/AKGpihZQMUoByEY9mwBNMgSuH-7v636eODB3Y6rb2MC-Y7I1Jc9j5QP9zHif-09nx6McJzsFE2oGMUob1cHu2USguDdWaSQ8=s1600" alt="drawing4" width="150"/>
</p>

## Installation

Install my-project with npm

```bash
  npm install react-native-custom-alert-box
```
    
Install my-project with yarn

```bash
  yarn add react-native-custom-alert-box
```

 ## Install React Native Vector Icons

 ```bash
  npm install react-native-vector-icons --save
 ```

 ### Changes required for Android
 
 To use react-native-vector-icons in Android we need edit android/app/build.gradle (NOT android/build.gradle ) and add the following:

 ```
 apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
 ```

 This method will copy fonts from react-native-vector-icons module at build time. If you want to customize the files being copied, add the required icon TTF:

 ```
 project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Name of the font files you want to copy
]
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
 ```
## Usage/Examples

```javascript
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'


import ReactNativeAlertBox from "react-native-custom-alert-box"

const App = () => {

  const [showModal, setShowModal] = useState(false)
  const { width, height } = Dimensions.get("screen");

  return (
    <View>
      
      <TouchableOpacity onPress={() => setShowModal(true)}>
        <Text>Open</Text>
      </TouchableOpacity>


      {/* Alert Function */}
      <ReactNativeAlertBox
        showAlertModal={showModal}
        AlertType={"Success"}
        AlertBoxOpacity={0.2}                  //from 0 to 1
        AlertBoxWidthPercent={"95%"}           //Modal Width Percent
        HeadingText={"Hello"}
        BodyText={"This is a Alert Message"}
        ButtonLeftText={"Cancel"}
        ButtonLeftFunction={() => {
          console.log("Left is working");
          setShowModal(false)
        }}
        ButtonRightText={"Ok"}
        ButtonRightFunction={() => {
          console.log("Right is working")
          setShowModal(false)
        }}
                                               // Icons Props Vector Icons 
        IconPackageName={"AntDesign"}
        IconName={"home"}
        IconSize={35}
        IconColor={"white"}
        IconScaling={width * 0.0025}
      />

    </View>
  )
}

export default App
```

### Alert Box Props

| Parameter                 | Type         | Description                                                                        |
| :------------------------ | :----------- | :--------------------------------------------------------------------------------- |
| `showAlertModal`          | `boolean`    | Pass the **true** or **false** value to show alert box.                            |
| `AlertType`               | `string`     | Pass type - "Success", "Danger", "Primary", "Secondary", "Warning", "Dark".        |
| `AlertBoxOpacity`         | `decimals`   | Pass background opacity value from 0 to 1.                                         |
| `AlertBoxWidthPercent`    | `percentage` | Pass alert box width in percentage from 0% to 100%.                                |
| `HeadingText`             | `string`     | Pass alert heading in string.                                                      |
| `BodyText`                | `string`     | Pass alert body text in string.                                                    |
| `ButtonLeftText`          | `string`     | Pass alert left button text.                                                       |
| `ButtonRightText`         | `string`     | Pass alert right button text.                                                      |
| `ButtonLeftFunction`      | `function`   | Pass a callback function for left button functionality.                            |
| `ButtonRightFunction`     | `function`   | Pass a callback function for right button functionality.                           |

### Vector Icon SVG Props
| Parameter                 | Type         | Description                                                                        |
| :------------------------ | :----------- | :--------------------------------------------------------------------------------- |
| `IconPackageName`         | `string`     | Pass the vector icon package name - "AntDesign", "Entypo", "EvilIcons", etc..      |
| `IconName`                | `string`     | Pass the icon name.                                                                |
| `IconSize`                | `numbers`    | Pass the icon size.                                                                |
| `IconColor`               | `string`     | Pass the icon color.                                                               |
| `IconScaling`             | `numbers`    | Adjust the scaling value so it scales for different devices.                       |



## Authors

- [@AakashThakur23102000](https://github.com/AakashThakur23102000)
