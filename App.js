import React, { Component } from 'react';
import { 
  StyleSheet,
   View, 
   Text,
   Button,
   TouchableOpacity} from 'react-native';
export default class App extends Component {
  constructor(){
    super()
    this.state={}
  }

  render(){

    let rows=[]
    let nums=[[1,2,3],[4,5,6],[7,8,9],[0,0,'=']]
    for(let i=0; i<4;i++){
      let row=[]
      for (let j=0;j<3;j++){
        row.push(<TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>{nums[i][j]}</Text>
        </TouchableOpacity>)
      }
    rows.push(<View style={styles.row}>{row}</View> )
    }

    let operation=['+','-','*','/']
    let ops = []
    for(let i=0;i<4;i++){
      ops.push(<TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText, styles.white}>{operation[i]}</Text>
      </TouchableOpacity> )
    }

    return(
      <View style={styles.container}>
          <View style={styles.results}>
                  <Text style={styles.resultText}>11+11</Text>
          </View>
          <View style={styles.calculation}>
                  <Text style={styles.resultsCalculation} >22</Text>
          </View>
          <View style={styles.buttons}>
                  <View style={styles.numbers}>
                          {rows}
                  </View> 
                  
                <View style={styles.operations}>
                     {ops}
                </View>
          </View>      
      </View>
    );
  }
}
  
const styles= StyleSheet.create({
  container:{
    flex:1
  },
  white:{
    color:'white',
    fontSize:40
  },
  btnText:{
    fontSize:30,
  },
  btn:{
    flex:1,
    alignItems:'center',
    alignSelf:'stretch',
    justifyContent:'center'
  },
  results:{
    flex:7,
    backgroundColor:'white',
    justifyContent: 'flex-end',
    alignItems:'flex-end'
  },
  resultText:{
    fontSize:30
  },
  calculation:{
    flex:1,
    backgroundColor:'powderblue',
    justifyContent: 'flex-end',
    alignItems:'flex-end'
  },
  resultsCalculation:{
    fontSize:40
  },  
  buttons:{
    flex:7,
    flexDirection:'row'
  },
  numbers:{
    flex:3,//Defines 3 cols
    backgroundColor: 'skyblue'
  },
  //Row determines the structure of the buttons as well as its distributions around the number space
  row:{
    flexDirection:'row',
    //space around adjust horizontal aligntment
    justifyContent:'space-around',
    flex:1,
    alignItems:'center'
  },
  //Each performed button is going to take a row structure by default
 
  operations:{
    backgroundColor:'steelblue',
    flex:1,
    justifyContent:'space-around',
    alignItems:'stretch'
  }

})
