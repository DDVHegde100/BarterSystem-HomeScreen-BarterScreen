import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Modal, ScrollView, KeyboardAvoidingView, FlatList } from 'react-native';
import MyHeader from '../components/MyHeader'
import {ListItem} from 'react-native-elements'
import db from '../config';
import firebase from 'firebase';

export default class HomeScreen extends React.Component{
constructor(){super()
this.state={
    item:"",
    description:"",
}}
addItem=()=>{
db.collection("requests").add({
item:this.state.item,
description: this.state.description


})
return(alert("item added"))


}
render(){
    return(
<View style={{flex:1}}>
                <KeyboardAvoidingView style={styles.keyBoardStyle} behavior="padding">
   
             <MyHeader title="Exchanges"/>

                <TextInput style={styles.formTextInput}
                    placeholder="Item name"
                    onChangeText={(text)=>{
                        this.setState({
                            item : text
                        })
                    }}
                    value={this.state.item}
                />

            <TextInput style={(styles.formTextInput,{height:300})}
            placeholder="Item Description"
            numberOfLines={8}
            multiline
            onChangeText={(text)=>{
                history.addItem();
                this.setState({
                    item:"",
                    description:"",
                })
            }}
            >
            <Text>Add Item</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
            </View>

    )
}
}