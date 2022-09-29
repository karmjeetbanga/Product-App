import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';

export default function HomeScreen({ navigation }) {

    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get('https://www.adorebeauty.com.au/api/ecommerce/catalog/products')
        .then((response)=>{
            //console.log(response.data.data);
            setData(response.data.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])
const renderItem = ({ item }) => (

    <View style={styles.ProductListContainer}>  
    <TouchableOpacity  style={styles.ProductList} onPress={()=>navigation.navigate('Product Details',{item})} >
        <Text>{item.id}</Text>
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    </View>
);
 
const Header = () => (
    <View style={styles.container}>
        <View>
             <Text  style={styles.tittle}> ALL | Makeup | Gift-With-Purchase | Aesop | Skincare</Text>
         </View>
        <View style={styles.headingText}>
            <Text>ID</Text>
            <Text>SKU</Text>
        </View>
  </View>
)
const Footer = () => (
    <View style={styles.footer}>
        <Text>Karmjeet Kaur - 2022</Text>
    </View>
)
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        // ListFooterComponent={ListFooter}
      />
      <Footer />
    </View>
  );

}
const styles = StyleSheet.create({
  container: {
   // marginTop: -20,
    backgroundColor: '#fff',
    alignItems: 'center',
   
  },
    logoContainer: {
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 50,
        marginVertical: 20,
        marginHorizontal: 20,
        marginTop: 100,
        
    },
  logo:{
    fontWeight:"bold",
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
  },
  tittle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
    headingText: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 300,
        marginHorizontal: 20,
        marginTop: 20,
    },
    loadNumber: {
        color: "black",
        fontSize: 15,
    },
    footer: {
         alignItems: 'center',
         justifyContent: 'center',
        marginTop: 500,
    },
    ProductList: {
        flexDirection: "row",
        justifyContent:'center',
        marginLeft: 50,
    },
    ProductListContainer: {
        flexDirection: "row",
        marginTop: 10,
        backgroundColor: "lightgray",
        width: 500,
        height: 50,
    
        
    },
    name: {
        marginLeft: 20,
        flexDirection: "row",
        justifyContent:'center',
        
    },
    
});