import* as React from'react'
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native'
import* as Permissions from 'expo-permissions'
import {BarCodeScanner} from 'expo-barcode-scanner'

export default class Returnscreen extends React.Component{
  constructor() {
    super();
    this.state = {
      hasCameraPermissions: null,
      scanned: false,
      scannedData: '',
      buttonState:'normal'
    };
  }
  getcameraPermissions=async()=>{
    const {status}=await Permissions.askAsync(Permissions.CAMERA)
    this.setState({
      hasCameraPermissions:status==='granted',
      buttonState:'clicked',scanned:"false"
    })
  }
  handlebarcodescan=async({type,data})=>{
    this.setState({scanned:true,scannedData:data,buttonState:"normal"})
  }
  render(){
    if(this.state.buttonState=='clicked'&&this.state.hasCameraPermissions){
      return(<BarCodeScanner onBarCodeScanned={this.state.scanned?undefined:this.handlebarcodescan}
      style={StyleSheet.absoluteFillObject}/>) 
    }
    else if(this.state.buttonState=='normal'){

    
      return(
          <View style={{alignItems:'center',
          justifyContent:'center',marginTop:100}} >
            <Text>
              {this.state.hasCameraPermissions==true?this.state.scannedData:
              "request for camera permissions"}
            </Text>
             < TouchableOpacity style={{backgroundColor:'blue',alignItems:'center',
             justifyContent:'center',margin:10,}}onPress={
               this.getcameraPermissions
             }>
              <Text>
            Scan QR code
              </Text>
            
             </TouchableOpacity>
          </View>
      )
            }
  }
}
