import React  from 'react'
import { Text, View , TouchableOpacity,ScrollView} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FontFamily, Colors} from '../../assets/CommonStyle';
import { useNavigation } from '@react-navigation/native';

export default function TermsCondition() {

  const navigation = useNavigation();

  return (

    <View style={{flex:1,width:'90%',alignSelf:'center'}}>

        <View style={{alignSelf:'flex-end', paddingRight:20,padding:15}}>

          <TouchableOpacity onPress={()=>navigation.openDrawer()}>  
            <FontAwesome name="bars" size={30} color={'red'}/>
           </TouchableOpacity>
        </View>

      <ScrollView> 

    <View style={{paddingTop:20}}>  

      <Text style={{alignSelf:'center',fontFamily:FontFamily.montserrat,
       color:'red',paddingBottom:20,fontSize:20}}> Terms & Condition </Text>

      <Text style={{fontSize:14,color:'black' ,fontFamily:FontFamily.poppins}}> 
      1. Agreement to Terms By viewing or using this Website, which can be accessed
         at getapped.com or through our mobile application Getapped, 
         you are agreeing to be bound by all these Application Terms of Use and agree with any applicable local laws.
          If you disagree with any of these terms, you are prohibited from accessing this Website or using the Service.
           All materials in this Website are protected by trade mark law and copyright.
For purposes of this Terms of Use, the terms "company", "we" and "our" refers to the Company.</Text>

<Text  style={{fontSize:14,color:'black',fontFamily:FontFamily.poppins }}> 
2. Privacy policy We advise you to read our privacy policy regarding our user data collection. 
It will help you better understand our practices.</Text>

<Text  style={{fontSize:14,color:'black',fontFamily:FontFamily.poppins }}>
  3. Use License Permission is granted to temporarily download one copy of the materials on our Website for
personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer
of title, and under this license you may not: modify or copy the materials;
use the materials for any commercial purpose or for any public display;
attempt to reverse engineer any software contained on our Website:
remove any copyright or other proprietary notations from the materials; or
 transferring the materials to another person or "mirror" the materials on any other
server. This will let Company to terminate upon violations of any of these restrictions. Upon
termination, your viewing right will also be terminated and you should destroy any
downloaded materials in your possession whether it is electronic format or printed.
</Text>

<Text style={{fontSize:14,color:'black',fontFamily:FontFamily.poppins}}>
  4. Disclaimer All the materials on our Website are provided on an "as is" basis.
 You agree that your use of the Website will be at your own risk.
 We make no warranties, may it be expressed or implied, therefore negates all other warranties.
  Furthermore, Company does not make any representations concerning the accuracy or reliability
   of the use of the materials on its Application or otherwise relating to such materials or any sites linked to this Website.
   </Text>

<Text  style={{fontSize:14,color:'black',fontFamily:FontFamily.poppins}}> 
5. Limitations Company or its suppliers will not be hold accountable for any damages that will arise with the use 
  or inability to use the materials on our Website, even if we or an authorised representative of this Website has been notified,
   orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or 
   limitations of liability for incidental damages, these limitations may not apply to you.
</Text>

 <Text  style={{fontSize:14,color:'black' ,fontFamily:FontFamily.poppins}}> 
 6. Corrections There may be information or materials appearing on our Website that contains technical,
   typographical, or photographic errors. We will not promise that any of the materials in this Website are accurate,
    complete, or current. We reserve the right to change and update the materials contained on its Aplicattion at any time without prior notice.
</Text>

<Text  style={{fontSize:14,color:'black' ,fontFamily:FontFamily.poppins}} > 
7. Getapped has no control over all links provided on this Website and is not responsible 
  for the contents of any such linked site. The presence of any link does not imply endorsement of the
  site by Getapped. The use of any linked website is at your own risk.  
 Getapped has no control over all links provided on this Website and is not responsible
  for the contents of any such linked site. The presence of any link does not imply endorsement 
  of the site by Getapped. The use of any linked website is at your own risk.
</Text>

<Text  style={{fontSize:14,color:'black',fontFamily:FontFamily.poppins}}> 
8. Modification of Terms of Use Company may revise or include supplemental terms
   in these Terms of Use on its Website from time to time without prior notice. 
   Please ensure that you check the current Terms of Use every time you use the Application.
    By using this Application, you are agreeing to be bound by the current version of these Terms of Use.
</Text>


 <Text  style={{fontSize:14,color:'black',fontFamily:FontFamily.poppins }}> 
 9. Applicable law Any claim related to our Website shall be governed by the laws
   of INSERT STATE OF RESIDENCE OR INCORPORATION without regards to its conflict of law provisions.
</Text>

<Text  style={{fontSize:14,color:'black' ,fontFamily:FontFamily.poppins}}>
  10. Contact In case of any questions or requests, please contact us at:</Text>

<View style={{
  marginTop:20,
  marginBottom:20,
  paddingTop:20, 
   borderRadius:5,
  width:320,
  height:120,
  alignSelf:'center',
  alignItems:'center',
  paddingLeft:10,
  shadowOffset: {width: -4, height: 4},  
  shadowColor: '#171717',  
  shadowOpacity: 0.9,  
  shadowRadius: 9,  
  backgroundColor: '#f8f9fa',
  borderRadius: 8,  
  shadowColor: '#52006A',  
  elevation: 10,  
  paddingHorizontal: 25, }}> 

<Text  style={{fontSize:16,color:'black', alignSelf:'center',fontFamily:FontFamily.OpenSans}} > Getapped</Text>

 <Text  style={{fontSize:16,color:'black', alignSelf:'center', fontFamily:FontFamily.OpenSans }} > 21 Schulstrabe, Glattbach, Germany </Text>

 <Text  style={{fontSize:16,color:'black', alignSelf:'center' ,fontFamily:FontFamily.OpenSans}} > getappednow@gmail.com</Text>

 <Text  style={{fontSize:16,color:'black',alignSelf:'center' ,fontFamily:FontFamily.OpenSans}} > +49 1573 0801104  </Text>
 </View>
 </View>

</ScrollView>
    </View>
  )
}