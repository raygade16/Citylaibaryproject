import React,{useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
} from 'react-native';
import Menu from '../SimpleMenu';
//import {getCustomers, getCustomerById,addCustomer,updateCustomer,deleteCustomer} from '../Servicess/CustomerServiceAPI';
import {getCustomers, getCustomerById,addCustomer,updateCustomer,deleteCustomer} from '../Servicess/BookAPI';

const defaultUsers =[];

const AddUser = ({route, navigation}) => {
  //const {userId} = route.params;
  const [userId, setUserId] = React.useState('0');
  const [title, settitle] = React.useState("");
  const [author, setauthor] = React.useState("");
  const [pulishare, setpublishare] = React.useState("");
  const [year, setyear] = React.useState("");
  const [isbi, setisbi] = React.useState(defaultUsers);
  const [label, setcoverimage] = React.useState("Add");

  var relaodCustomers = async() =>{
    var cutomers = await getCustomers();
    setUsers(cutomers); 
  }
  var loadCustomer = async (currentUserId) =>{
    let currentUser = await getCustomerById(currentUserId);
      settitle(currentUser.title);
      setUserId(currentUser.id);
      setauthor(currentUser.author);
      setpublishare(currentUser.pulishare);
      setyear(currentUser.year);
      setLabel("Update");
  }
  useEffect(()=>{
    if(route.params && route.params.userId){
        loadCustomer(route.params.userId);
    }
  },[]);

  var resetForm = () =>{
    setName('');
    setUserId('0');
    setEmail('');
    setAddress('');
    setPhone('');
    setLabel('Add');
  }

  var editUser = (id) =>{
    console.log("edit userAdd:"+id);
  }
  var addUpdateUser = async() =>{
    if(userId == "0"){ //add
      console.log(">> add");
      let user ={id:Date.now() +'e',name,email,phone,address};
      await addCustomer(user);
      relaodCustomers();
      //setUsers([...users, user]);
    }else{ //update
      console.log(">> update here");
      let user ={id:userId,name,email,phone,address};
      await updateCustomer(user);
      relaodCustomers();
    }
    navigation.navigate('Customers');  
  }
  var deleteUser = (id) =>{
    console.log("delete user:"+id);
    let tempUsers = users.filter((user)=>(user.id != id));
    setUsers(tempUsers);
  }
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
          <Menu navigation={navigation}/>
            <View style={styles.sectionContainer}>
            <View>
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom:20 }}
            placeholder="Enter Name"
            onChangeText={text => setName(text)}
            value={name}
            />
            <TextInput placeholder="email"
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 , marginBottom:20}}
            onChangeText={text => setEmail(text)}
            placeholder="Enter Email"
            value={email}
            />
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 , marginBottom:20}}
            onChangeText={text => setPhone(text)}
            placeholder="Enter Phone"
            value={phone}
            />
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 , marginBottom:20}}
            onChangeText={text => setAddress(text)}
            placeholder="Enter Address"
            value={address}
            />
            <Button title={label} onPress={addUpdateUser}></Button>
            </View>
            <View/>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    marginBottom:20
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default AddUser;
