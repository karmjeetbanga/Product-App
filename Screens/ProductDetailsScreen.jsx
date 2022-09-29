import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

export default function ProductDetailsScreen({route}) {
    const Footer = () => (
    <View style={styles.footer}>
        <Text>Karmjeet Kaur - 2022</Text>
    </View>
)
    const {item} = route.params;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    
     <Text  style={StyleSheet.H1}> {item.id}</Text>
     <Text>{item.name}</Text>
    
     <Text>Price: ${item.price}</Text>
     <Footer />
    </View>
  );
}
const styles = StyleSheet.create({
footer: {
         alignItems: 'center',
         justifyContent: 'center',
        marginTop: 500,
},
H1: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
},
categories: {
    color: 'blue',
    letterSpacing: 10,
},
});
