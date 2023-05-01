// import React, { useState } from 'react';
// // import CollegeData from './components/CollegeData';
// import {
//     Button,
//     SafeAreaView,
//     ScrollView,
//     StatusBar,
//     StyleSheet,
//     Text,
//     TextInput,
//     useColorScheme,
//     View,
// } from 'react-native';

// const InputForm = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');

//     const handleClear = () => {
//         setUsername('');
//         setPassword('');
//         setEmail('');
//         setPhone('');
//     }

//     return (
//         <View style={styles.container}>
//             <Text style={styles.heading}>Input Form</Text>
//             <TextInput
//                 placeholder='Enter Username'
//                 style={styles.input}
//                 value={username}
//                 onChangeText={(text) => setUsername(text)}
//             />
//             <TextInput
//                 placeholder='Enter Password'
//                 style={styles.input}
//                 value={password}
//                 onChangeText={(text) => setPassword(text)}
//                 secureTextEntry={true}
//             />
//             <TextInput
//                 placeholder='Enter Email'
//                 style={styles.input}
//                 value={email}
//                 onChangeText={(text) => setEmail(text)}
//                 keyboardType='email-address'
//             />
//             <TextInput
//                 placeholder='Enter Phone Number'
//                 style={styles.input}
//                 value={phone}
//                 onChangeText={(text) => setPhone(text)}
//                 keyboardType='numeric'
//             />
//             <Button title='Clear' onPress={handleClear} />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'black',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     heading: {
//         fontSize: 30,
//         fontWeight: 'bold',
//         marginBottom: 20,
//     },
//     input: {
//         width: '80%',
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         borderRadius: 5,
//         padding: 10,
//         marginBottom: 10,
//     },
// });

// export default InputForm;


// const [name, setName] = useState("")
// const [email, setEmail] = useState("")
// const [password, setPassword] = useState('');
// const [display, setDisplay] = useState(false);

// const handleClear = () => {
//   setDisplay(false)
//   setPassword('');
//   setEmail('');
//   setName('');
// }



// <Text style={style.textbox}>Input Form</Text>
// <TextInput
//   style={style.textInput}
//   placeholder='Enter you Name'
//   value={name}
//   onChangeText={(text) => { setName(text) }}
// />
// <TextInput
//   style={style.textInput}
//   placeholder='Enter you Email'
//   value={email}
//   onChangeText={(text) => { setEmail(text) }}
//   keyboardType='email-address'
// />
// <TextInput
//   style={style.textInput}
//   placeholder='Enter Password'
//   value={password}
//   onChangeText={(text) => { setPassword(text) }}
//   secureTextEntry={true}
// />

// <Button color={'green'} title='CLear Value!' onPress={handleClear} />
// <Button color={'blue'} title='Show  Details!' onPress={() => { setDisplay(true) }} />
// <View>
//   {
//     display ?

//       <View style={{ marginTop: 30, fontSize: 20, color: "white" }}>
//         <Text style={{ marginBottom: 10, fontSize: 20, color: "white" }} >User Name is : {name}</Text>
//         <Text style={{ marginBottom: 10, fontSize: 20, color: "white" }} >Email  is : {email}</Text>
//         <Text style={{ marginBottom: 10, fontSize: 20, color: "white" }} >Password  is : {password}</Text>
//       </View>
//       : null
//   }
// </View>


{/* <View style={style.container}> */ }
{/* <Text style={style.yourName}>Map List View</Text>
      <ScrollView>
        {
          user.map((item) => <Text style={style.item}> {item.name}</Text>)
        }
      </ScrollView> */}

{/* </View> */ }

{/* <Text style={style.yourName}>Grid List View</Text> */ }

{/* <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        
        <ScrollView>
          {
            user.map((item) => <Text style={style.item}>{item.name}</Text>)
          }
        </ScrollView>
      </View> */}

{/* <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }} style={{ height: 500 }}>
          {
            user.map((item) => <Text style={style.item}>{item.name}</Text>)
          }
        </ScrollView>
      </View> */}



    //   const user = [
    //     {
    //       id: 1,
    //       email: "test@gmail.com",
    //       name: "laxmikant",
    //       data: ["c", "c++", "java"]
    //     },
    //     {
    //       id: 2,
    //       email: "test@gmail.com",
    //       name: "Anil",
    //       data: ["python", "Ruby", "C#"]
    //     },
    //     {
    //       id: 3,
    //       email: "test@gmail.com",
    //       name: "Shivm",
    //       data: ["MongoDB", "Node", "React"]
    //     },
    //     {
    //       id: 4,
    //       email: "test@gmail.com",
    //       name: "Raman",
    //       data: ["Angular", "AWS", "Cloud"]
    //     },
    
    //   ]


     // const [count, setCount] = useState(0);
//   const [show, setShow] = useState(true);



  // useEffect(() => {
  //   console.warn(count)
  // }, [count])


    //  {/* <Text style={style.yourName}>This is flatList View</Text>
    //   <SectionList
    //     sections={user}
    //     renderItem={({ item }) => <Text style={{ fontSize: 20, marginLeft: 20 }}>{item}</Text>}
    //     renderSectionHeader={({ section: { name } }) => (
    //       <Text style={{ fontSize: 18, margin: 10, color: "red" }}>{name}</Text>
    //     )}

    //   /> */}
    //   {/* <Text style={style.yourName}>THis is UseEffect Hook </Text>
    //   <Text style={style.yourName}>{count}</Text>
    //   <Button title='Press ME!' onPress={() => setCount(count + 1)} /> */}


    //   {/* <Text style={style.yourName}>THis is UseEffect Hook </Text> */}

    //   {/* <Button title='Show ME!' onPress={() => setCount(count + 1)} /> */}


    //   <Button title='Hide ME!' onPress={() => setShow(false)} />
    //   <Button title='show ME!' onPress={() => setShow(true)} />
    //   {
    //     show ? <UserData1 /> : null

    //   }



    // const UserData1 = () => {

    //     return (
    //       <View>
      
    //         <Text style={style.yourName}>THis is Show me Toogle</Text>
      
      
    //       </View>
    //     )
    //   }



//     <View style={style.box1}>

//     <View style={style.innerBox}><Text style={{ fontSize: 20, color: 'black' }}>This is main box</Text></View>
//     <View style={style.innerBox}></View>
//     <View style={style.innerBox}></View>
//   </View>
//   <View style={style.box2}></View>
//   <View style={style.box3}></View>
//   {/* <View style={{ flex: 1, backgroundColor: 'black' }}></View>
//   <View style={{ flex: 1, backgroundColor: 'red' }}></View> */}