import { View, Text, Image } from 'react-native'
import React from 'react'
import ImagePath from '../../constants/ImagePath'
import { Style } from './WatchStyle'
import Custombtn from '../../Components/Custombtn'
import Customtext from '../../Components/Customtext'
import { moderateScale } from 'react-native-size-matters'
const Watchlist = ({navigation}) => {
  return (
    <View style={Style.Watch}> 
    <View style={Style.glasimg}>
      <Image source={ImagePath.icglass}/>
          </View>
          <View style={Style.shortlist}>
            <Text style={Style.favourite}> Shortlist your favourite cryptos</Text>
            </View>
            <View style={Style.icon}>
            <Text style={Style.Tabicon}>
              Tab on the star icon anywhere in the app to Shortlist your favourite cryptos
            </Text>
            </View>
            <View style={Style.explore}>
         <Customtext onPress={()=>navigation.navigate("Catogeries")} title="Explore Catogeries"/>
  
         </View>
    </View>
  )
}

export default Watchlist