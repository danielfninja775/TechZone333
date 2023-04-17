import React  from 'react'
import { 
  Text,
  View , 
  TouchableOpacity,
  ScrollView,
  StyleSheet
}
   from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FontFamily, Colors} from '../../assets/CommonStyle';
import { useNavigation } from '@react-navigation/native';

export default function PrivacyPolicy() {

  const navigation = useNavigation();

  return (

    <View  style={styles.Container}>

     <ScrollView>   
       <View style={styles.Header}>

         <TouchableOpacity onPress={()=>navigation.openDrawer()}>  
            <FontAwesome name="bars" size={30} color={'red'}/>
         </TouchableOpacity>
       </View>
       
       <View style={{paddingTop:20}}> 
        <Text style={styles.PrivacyTitlle}>Privacy Policy</Text>
       <Text style={styles.AboutTille} > About This Policy </Text>

<Text style={styles.AboutText}>
  This policy describes our privacy practices for the application where it is posted. 
  It also applies to our practices for our mobile phone and text programs. 
  Information We Collect Contact Information: For example, we might collect your name and street address.
  We might also collect your phone number or email address.
  Payment Information: For example, we might collect your credit card information when you make a purchase.
  Demographic Information: We might, for example, collect your age. We might also collect information about the food you like.
</Text>

 <Text style={styles.InformationTitle}> How We Collect Information </Text>

<Text style={styles.InformationText}> 
  We collect information directly from you. For example, when you register 
  on a website, for a sweepstakes or for one of our programs.
  We also collect information if you leave comments or make contact requests.
  We collect information from you passively. If you are on a mobile device and use a location based service, 
  for example, then we will collect your location. We use common tracking tools like browser cookies to collect information passively.
  We may also use web beacons.
  We collect information from third parties. For example, we might get information about you from one of our franchisees.
  This information might be combined with information we already have.
</Text>


 <Text style={styles.InformationText}> 
   We use your information as is disclosed at the time we collect 
   the information and in the following ways:
 </Text>

  <Text style={styles.InformationText}> 
    (1) To respond to your requests or inquiries. For example, we use your information to fulfill orders or prizes.
    We might also use your information to register you for a promotions or our website.
    From time to time, we may also use your information to process your employment application.
  </Text>

  <Text style={styles.InformationText}> 
   (2) To improve our products and services and for related business purposes.
   For example, we use information to understand our visitors and customers. 
   This includes looking at website usage trends. We also use your information to make website and product improvements.
   We might also use your information to customize your experience with us. 
   We may do these activities using the tracking tools described in this policy.
  </Text>

  <Text style={styles.InformationText}> 
   (3) For security purposes. For example, we might use information to 
   protect our website or our company. We might also use
   might use information protect our website or our company. We might also 
   use information to protect our customers or our business partners.
 </Text>

 <Text style={styles.InformationText}> 
   (4)To promote Get Apped and our related companies. For example, 
   unless we tell you otherwise, we might send you notices of special promotions,
   offers or solicitations. We might also notify you about new website features or
   product offerings. To manage your communications, 
   follow the instructions in Your Choices, below.
</Text>

 <Text style={styles.InformationText}> 
   (5)To communicate with you about your account or our relationship. For example,
   to notify you about changes to this Policy or our website Terms, 
   to let you know about issues relating to your order or your relationship with us.
 </Text>



 <Text style={styles.InformationText}> 
   If we think we have to in order to comply with the law. For example,
   we will disclose information to respond to a court order.
   We may also disclose if a government agency or investigatory body requests.
   In the event all or part of Get Apped transfers ownership. For example, if there is 
   a merger, acquisition or similar event, we will share information with the new owner.
   We may also sell off all or part of our customer lists as part
   law. For example, Vve will disclose information to respond to a court order. 
   We may also disclose if a government agency or investigatory body requests.
   In the event all or part of GetApped transfers ownership. For example, if there is a merger,
   acquisition or similar event, we will share information with the new owner. We may also sell 
   off all or part of our customer lists as part of an asset sale.
</Text>



<Text style={styles.InformationText}> 
  To opt out of having us share your information with third parties for their promotional purposes,
  you can follow the instructions in any individual promotional email you receive or when logged in,
  registered users can also change their options at the My Account page. 
  If you accept an offer from one of our third-party marketing partners after you opt out,
   we will share your information with that specific party.
</Text>

<Text style={styles.InformationText}> 
  You can choose whether or not to disclose personal information.
  Some parts of our sites and some services may be more difficult or 
  impossible to use, though, if you choose not to share.
  If you turn of cookies or tracking tools parts of our site and services may also not function properly.
  We use industry standard measures to protect personal information. 
  We cannot guarantee that you will be completely secure, however.
  We recommend that you use caution when using the Internet or mobile devices. 
</Text>

 <Text style={styles.InformationText}> 
   All credit/debit cards details and personally identifiable information will NOT be stored,
   sold, shared, rented or leased to any third parties. 
 </Text>

      </View>
    </ScrollView>
   </View>
  )
}
const styles = StyleSheet.create({ 
Container:{
 width:'90%',
 alignSelf:'center',
 paddingTop:10,
 paddingBottom:30
},
Header:{
 flex:1,
 alignSelf:'flex-end',
 paddingRight:10,
 padding:15
},
PrivacyTitlle:{
 alignSelf:'center',
 fontFamily:FontFamily.montserrat,
 color:'red',
 paddingBottom:20,
 fontSize:22
},
AboutTille:{
 alignSelf:'center',
 fontFamily:FontFamily.montserrat,
 color:'black',
 paddingBottom:10
},
AboutText:{
 color:'black',
 fontFamily:FontFamily.poppins
},
InformationTitle:{
 alignSelf:'center',
 fontFamily:FontFamily.montserrat,
 color:'black',
 paddingBottom:20,
 fontSize:16,
 paddingTop:10
},
InformationText:{
 color:'black',
 fontFamily:FontFamily.poppins
},

})