import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { api } from './services/api';
import { Filme } from './components/filme';

export default class App extends Component{

  constructor(props){
    super(props)

     this.state={
        filmes:[],
        loading:true
     }

  }
  
  //Componente montado
  async componentDidMount(){

      const response=await api.get('r-api/?api=filmes')
      this.setState({
        filmes:response.data,
        loading:false
      })
  }

   render(){

    if (this.state.loading) {
      return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
           <ActivityIndicator color='blue' size={70}/>
        </View>
      )
    } else {
      return(
        <View>
           <FlatList
              data={this.state.filmes}
              keyExtractor={item=>item.id.toString()}
              renderItem={({item})=> <Filme data={item}/>}
           />
        </View>
      )
    }
      
      
   }
}

const styles = StyleSheet.create({
  
});
