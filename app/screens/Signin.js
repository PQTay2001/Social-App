import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import * as React from 'react'
import {RFPercentage} from "react-native-responsive-fontsize"
import colors from '../config/colors'
import Screen from "../components/Screen"
import LoadingModal from '../components/LoadingModal'
import AppButton from '../components/AppButton'
export default function Signin({navigation}) {
    return (
    <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: colors.white }}>
    <View style={styles.mnlogin}>
        <View style={styles.lim}>
        <Text style={{fontWeight:"bold",color:colors.pink,marginTop:RFPercentage(2),fontSize:RFPercentage(8)}}>TN-team</Text>
        <View style={{width:"100%",marginVertical:RFPercentage(2)}}>
        <Text style={{color:colors.mgrey,fontSize:RFPercentage(1.7),textAlign:"center"}}>
            SOCIAL APP 
        </Text>
        <Text style={{color:colors.mgrey,fontSize:RFPercentage(1.7),textAlign:"center"}}>
            nơi lưu giữ khoảnh khắc đáng nhớ 
        </Text>
        <Text style={{color:colors.mgrey,fontSize:RFPercentage(1.7),textAlign:"center"}}>
            kết nối với bạn bè
        </Text>
        </View>
        </View>
        <View style={{marginVertical:RFPercentage(20)}}>
        <AppButton onPress={()=>navigation.navigate("LoginScreen")} title="Đăng nhập " backgroundColor={colors.pink} color={colors.white} width="85%"></AppButton>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("SignupScreen")}>
            <Text style={{textAlign:'center',fontSize:RFPercentage(2.5),color:colors.pink}}>Tạo tài khoản mới</Text>
        </TouchableOpacity>
    </View>
    </Screen>
  )
}
const styles=StyleSheet.create({
mnlogin:{
    flex:1,
    width:"100%",
},
lim:{
width:"100%",
marginTop:RFPercentage(15),
alignItems:"center",
justifyContent:"center",
}
})