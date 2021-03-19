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
//import {getCustomers,addCustomer,updateCustomer,deleteCustomer} from '../service/CustomerServiceAPI';
//import {getCustomers,addCustomer,updateCustomer,deleteCustomer} from '../Servicess/CustomerServiceAPI';
import {getCustomers,addCustomer,updateCustomer,deleteCustomer} from '../Servicess/BookAPI';
const defaultUsers =[];

const Customers = ({navigation}) => {
  const [userId, setUserId] = React.useState('0');
  const [iitle, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [publisher, setPublishare] = React.useState("");
  const [cover, setCover] = React.useState("");
  const [users, setUsers] = React.useState(defaultUsers);
  const [label, setLabel] = React.useState("Add");

  var relaodCustomers = async() =>{
    var customers = await getCustomers();
    setUsers(customers); 
  }
  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus', (data) => {
        if(data.target.startsWith("Customers")){
            relaodCustomers();
        }
        //console.log(JSON.stringify(data));
      });
      return unsubscribe;
  },[navigation]);

  var resetForm = () =>{
    setName('');
    setUserId('0');
    setEmail('');
    setAddress('');
    setPhone('');
    setLabel('Add');
  }

  var editUser = (id) =>{
    console.log("edit user 01:"+id);
   navigation.navigate('Add Customer');        
  }
  var addUpdateUser = async() =>{
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
            <Text style={styles.sectionTitle}>Customer App</Text>
            <Button onPress={()=>{
                 navigation.navigate('Add Customer');   
            }} title={"Add"} ></Button>
            <UserList users={users} 
            deleteUser={deleteUser} 
            navigation = {navigation}
            editUser={(id)=>{
                console.log("Vivek editUser "+id);
                navigation.navigate('Add Customer');  
            }}></UserList>
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

export default Customers;
