import React,{useEffect} from 'react';
import { Button, View, Text, Dimensions, TouchableOpacity, ImageBackground, ScrollView, Image, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Video, AVPlaybackStatus } from 'expo-av';
import * as LocalAuthentication from 'expo-local-authentication'
function HomeScreen({ navigation }) {
  const [isBiometricSupported, setIsBiometricSupported] = React.useState(false);
  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  });
  return (
    <SafeAreaView style={{backgroundColor: 'black'}}>
      <ImageBackground source={{uri : 'https://twinkles15.s3.amazonaws.com/twins1.png'}}  style={{height:Dimensions.get('window').height,top:-70}}/>
      <Text style = {{color:'#fff8d1',position:'absolute',alignSelf:'center',fontSize:20,fontWeight:'600'}}> 
        Wish You a very Happy Birthday!!!
        </Text>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection:'row' }}>
     <View style={{flexDirection:'row',position:'absolute',bottom:Dimensions.get('window').height/4.5 }}>
       <TouchableOpacity onPress={() => navigation.navigate('NEETHU')}>
       <View style={{backgroundColor:'skyblue',width:Dimensions.get('window').width/3,borderRadius:20,right:40}}>
      <Text style={{fontSize:20,color:'#121212',padding:10,textAlign:'center'}}>Attetta</Text>
      </View>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => navigation.navigate('NEELU')}>
       <View style={{backgroundColor:'#FF93E6',width:Dimensions.get('window').width/3,borderRadius:20,left:40}}>
      <Text style={{fontSize:20,color:'#121212',padding:10,textAlign:'center'}}>Bangaranga</Text>
      </View>
       </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
    
  );
}

function NEELU({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#121212' }}>
      <Text style={{fontSize:35,color:'skyblue',position:'relative'}}>
       BLUE
      </Text>
      <Image source={{uri: 'https://twinkles15.s3.amazonaws.com/blue.jpg'}} style={{height:340,width:430}}
        />
      <Text style={{color:'#fff',fontSize:20,top:20,textAlign:'auto'}}>
      Let’s start off from the first day that I came to this place. May 28th around 4PM I think. You guys were watching some nasty movie and you cooked fish on that day. Damn it was delicious, it really made my taste buds tingle. You make really good food, gotta give you that. I still remember the day when we made an impromptu plan to Arkansas, you were sitting in the second row and you were asking me whether I was sleepy😒😒. It was out of concern, I get it but that was the first trip that we went on together and the rest is history. If I would compare you with a fruit then the best thing would be a dragonfruit, spiky on the outside but sweet on the inside, just like you, P.S dont kill me after reading this😅😂. The way that you care about people says a thousand words about you. I don’t know what you think when I say those “lines”, but I just like playing around and that’s why I do it. Don’t mind uh 😅😅,  also one more thing that I observed is that, the way that you speak in English, its clear AF! Literally, I’ve never seen such a person in my life that speaks with so much confidence and clarity. I was really awestruck when I heard you talking to Cecil over the phone 💯. Just wanted to make something special to you guys rather than giving a material as a gift, everything depletes over a period of time but I hope this stays with you, at least the memory will😅. We thought of gifting you guys with this, we hope that this was special, if not we have planned something else as well😎.  Thanks a lot for all the support and the help that you’ve taken for us and for me. Will remember it. Let’s cherish these moments that are left and let’s continue to rave 😎. Dont forget to give me a ride when you buy a BMW and if you get a job in apple, I'll be asking for a lot of employee discounts😈, so watch out! 
      All the best to you and a very very HAPPY BIRTHDAY!❤️
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Thoughts')}>
        <View style={{backgroundColor:'#fff',alignItems:'center',padding:9,bottom:-25,left:140,borderRadius:20}}>
          <Text style={{fontSize:20,color:'#121212'}}> NEXT</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={{backgroundColor:'skyblue',alignItems:'center',padding:9,bottom:15,right:140,borderRadius:20}}>
          <Text style={{fontSize:20,color:'#121212'}}>Go Back</Text>
        </View>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}

function NEETHU({ navigation }) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#121212' }}>
      <Text style={{fontSize:35,color:'pink',position:'relative'}}>
       TWIN2
      </Text>
      <Image source={{uri : 'https://twinkles15.s3.amazonaws.com/twin2.png'}} style={{height:340,width:430}}/>
      <Text style={{color:'#fff',fontSize:20,top:20}}>
      We first met during the holi dance practice, it was awkward in the beginning as I only knew shabby then. I wasn’t sure whether to talk or not to kill that silence, I was pretty baffled with those thoughts but then, came the savior “shobby🤖”, he finally killed that silence by introducing you to me and Manish. You all know may dancing skills, I was and still in a rudimentary stage but when the steps were being taught, you were catching up really fast and I thought to myself, how is it so easy for you? Then slowly I came to know that you are a professional dancer. No wonder you caught up with those “fast” steps, that quick! I mentioned this incident in BLUE’s window as well, The day that we went on a trip to Arkansas, You both were constantly asking me whether I was sleeping, It was really pestering in the beginning but as time passed I understood your concern and a few days later, I became homeless🥲 and you all were kind enough to offer a place for me to stay😂. It was really good to stay with you guys, You all had a good sync among yourselves and at first I doubted whether you all will bring your guard down or not, but the odds were in my favor and you guys did treat me like your own, I’m lucky enough to find a happy bunch like you guys. If I had to say a few special lines about you, You’re really sweet and really concerned about the people who are close to you. You don’t let go of people that easily and that’s what makes you special. I wish I had met you both sooner, It was one hella ride with you “TWINS” and I wish it lasted longer, but as they say, all good things must come to an end, This is not the end, there will never be one, I hope we stay in touch and celebrate many more September 15’s together, a very happy 26th, hope you have a wonderful year ahead. All the best, Karthik, over and out!😎
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Thoughts')}>
        <View style={{backgroundColor:'#fff',alignItems:'center',padding:12,bottom:-27,left:140,borderRadius:20}}>
          <Text style={{fontSize:20,color:'#121212'}}> NEXT</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={{backgroundColor:'skyblue',alignItems:'center',padding:12,bottom:20,right:140,borderRadius:20}}>
          <Text style={{fontSize:20,color:'#121212'}}>Go Back</Text>
        </View>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}

function Thoughts({ navigation }) {
  const video = React.useRef(null);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#121212' }}>
      <Text style={{color:'#fff',fontSize:20,fontFamily:'Arial',fontWeight:'bold'}}>
        Last but not the least...
      </Text>
      <Text style={{color:'#fff',fontSize:18,position:'absolute',bottom:30,alignItems:'center',fontWeight:'100'}}>
        Made with ❤️ in Stillwater
      </Text>
      <Video
        ref={video}
        style={{width:Dimensions.get('window').width,height:400}}
        source={{
          uri: 'https://twinkles15.s3.amazonaws.com/stardust.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
      />
      <TouchableOpacity onPress={() => navigation.popToTop()}>
        <View style={{backgroundColor:'#fff',alignItems:'center',padding:9,alignItems:'center',borderRadius:20}}>
          <Text style={{fontSize:20,color:'#121212'}}>Home</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="NEELU" component={NEELU} />
      <Stack.Screen name="NEETHU" component={NEETHU} />
      <Stack.Screen name="Thoughts" component={Thoughts} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
