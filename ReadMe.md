
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

## Authors

- [@AakashThakur23102000](https://github.com/AakashThakur23102000)
