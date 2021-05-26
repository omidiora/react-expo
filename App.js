import React , {useState}from 'react';
import {StyleSheet , Text ,  View ,TextInput ,Button} from 'react-native';

const App = () => {
  const [enterGoal, setEnteredGoal] = useState("");
  const [courseGoals ,setCourseGoals]=useState([]);

  function goalInputHanlder(enteredText){
    setEnteredGoal(enteredText)
  }
  const addGoalHanlder=()=>{
    setCourseGoals([...courseGoals,enterGoal ]);

  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
       
        <TextInput placeholder='Course Goal' style={{width:"80%"}}  onChangeText={goalInputHanlder}
        value={enterGoal} />

<Button title='ADD' onPress={addGoalHanlder}/>
      </View>
    
          <View>
             {courseGoals.map(goal=>(
               <View key={goal} style={styles.listItem}>
                 
                 <Text>{goal}</Text>
                  </View>
             ))}
          </View>
      
    </View>
 
  )}

const styles=StyleSheet.create({
  screen:{
    padding:50
  },
  inputContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  listItem:{
    padding:10,
    backgroundColor:'#ccc',
    borderColor:'black',
    borderWidth:1,
    marginVertical:10,
  }
})

export default App
