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
import UserList from './ListExample';
import Menu from '../SimpleMenu';
import {getCustomers,addCustomer,updateCustomer,deleteCustomer} from '../Servicess/CustomerServiceAPI';

const defaultUsers =[];

const AddUser = ({navigation}) => {
  const [userId, setUserId] = React.useState('0');
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [users, setUsers] = React.useState(defaultUsers);
  const [label, setLabel] = React.useState("Add");

  var relaodCustomers = async() =>{
    var cutomers = await getCustomers();
    setUsers(cutomers); 
  }
  useEffect(()=>{
    relaodCustomers();
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
    console.log("edit user:"+id);
    let tempUsers = users.filter((user)=>(user.id == id));
    if(tempUsers.length > 0){
      let currentUser = tempUsers[0];
      setName(currentUser.name);
      setUserId(currentUser.id);
      setEmail(currentUser.email);
      setPhone(currentUser.phone);
      setAddress(currentUser.address);
      setLabel("Update");
    }
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
    resetForm();
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
            <Text style={styles.sectionTitle}>AVAILABLE</Text>
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
            <UserList users={users} 
            deleteUser={deleteUser} 
            editUser={editUser}
            navigation={navigation}>
            </UserList>
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
