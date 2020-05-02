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
    this.state={
      resultText:"",
      resultsCalculation:""
    }
    this.operation=['Del','+','-','*','/']
  }
  calculateResult(){
    const text = this.state.resultText
    console.log(text,eval(text))
    this.setState({
      resultsCalculation:eval(text)
    })

  }
// verify that eval cannot operate with ending operand string
  validate(){
    const text = this.state.resultText
    switch(text.slice(-1)){
      case '+':
        case '-':
          case '*':
            case '/':
      return false
    }
    return true
  }

  buttonPressed(text){
    //console.log(text)

    if(text== '='){
      return this.validate() && this.calculateResult()
    }
    //Update current Pressed value in resultText
    this.setState({
      resultText:this.state.resultText+text
    })
  }

  operate(operation){
    switch(operation){
      //case 'reset'://TODO: Implement reset
      //  let text = this.state.resultText.split().pop()
        //break
      case 'Del':
        let text = this.state.resultText.split('')
        text.pop()
        this.setState({
          resultText: text.join('')
        })
        break
        case '+':
        case '-':
        case '*':
        case '/':
          // determine if the lastCharacter was an operation char
          const lastCharacter = this.state.resultText.split("").pop()
          if(this.operation.indexOf(lastCharacter) >0) return  

          if (this.state.text=="") return
            this.setState({
              resultText:this.state.resultText+operation 
            })       
      

    }
  }
  render(){

    let rows=[]
    let nums=[[1,2,3],[4,5,6],[7,8,9],['.',0,'=']]
    for(let i=0; i<4;i++){
      let row=[]
      for (let j=0;j<3;j++){
        //Each time I pushed OnPress then param is sent as showed to function
        row.push(<TouchableOpacity onPress={()=> this.buttonPressed(nums[i][j])} style={styles.btn}>
          <Text style={styles.btnText}>{nums[i][j]}</Text>
        </TouchableOpacity>)
      }
      // we push in rows what we want to show
    rows.push(<View style={styles.row}>{row}</View> )
    }

    let ops = []
    for(let i=0;i<5;i++){
      ops.push(<TouchableOpacity style={styles.btn} onPress={()=> this.operate(this.operation[i])} >
        <Text style={styles.btnText, styles.white}>{this.operation[i]}</Text>
      </TouchableOpacity> )
    }

    return(
      <View style={styles.container}>
          <View style={styles.results}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
          </View>
          <View style={styles.calculation}>
    <Text style={styles.resultsCalculation} >{this.state.resultsCalculation}</Text>
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
    color:'white'
  },
  btn:{
    flex:1,
    alignItems:'center',
    alignSelf:'stretch',
    justifyContent:'center'
  },
  results:{
    flex:7,
    backgroundColor:'#000',
    justifyContent: 'flex-end',
    alignItems:'flex-end'
  },
  resultText:{
    fontSize:30,
    color:'white'
  },
  calculation:{
    flex:1,
    backgroundColor:'powderblue',
    justifyContent: 'flex-end',
    alignItems:'flex-end'
  },
  resultsCalculation:{
    fontSize:40,
    color:'white'
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
