import React from 'react';
import {View , Text, StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    header:{
        width:'100%',
        height:90,
        paddingTop:36,
        backgroundColor:'#f7287b',
        alignItems:'center',
        backgroundColor:Colors.primary
    },
    headerTitle:{
        color:'black',
        fontSize:18
    }

})
export default Header
