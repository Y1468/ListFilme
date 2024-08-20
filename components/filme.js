
import { Component } from "react";
import { View,Text,StyleSheet,Image, TouchableOpacity} from "react-native";

export class Filme extends Component{
    render(){
        //Desconstruindo
        const {nome,foto}=this.props.data

        return(
            <View style={st.container}>
                <View style={st.card}>
                   <Text style={st.titulo}>{nome}</Text>
                   <Image
                     source={{uri:foto}}
                     style={st.img}
                   />
                </View>
                <View style={st.AreaBotao}>
                    <TouchableOpacity style={st.botao}>
                        <Text style={st.txtMais}>LEIA MAIS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const st=StyleSheet.create({
   
    container:{
        marginTop:30
    },

    card:{
       shadowColor:'#000',
       backgroundColor:'#FFF',
       shadowOffset:{width:0, height:1},
       shadowOpacity:0.8,
       margin:15,
       shadowRadius:5,
       borderRadius:5,
       elevation:3,

    },

    titulo:{
       fontSize:18,
       padding:15
    },

    img:{
       height:250,
       zIndex:2
    },

    AreaBotao:{
       alignItems:'flex-end',
       marginTop:-78,
       zIndex:9
    },

    botao:{
       width:100,
       backgroundColor:'#09A6ff',
       opacity:1,
       padding:8,
       borderTopLeftRadius:5,
       borderBottomLeftRadius:5,
       marginRight:15
    },

    txtMais:{
       textAlign:'center',
       color:'#FFF'
    }


})

