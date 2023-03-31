import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput,
   ScrollView, FlatList, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';


export default function App() {

  // States

  // const [name, setName] = useState('David');

  // const [person, setPerson] =useState({
  //   name: 'Amajuoyi David',
  //   age: '19'
  // });

  // const [aged, setAged] = useState(10);


  // //  item with id 

  // const [people, setPeople] = useState([
  //   { name: 'Shaun', id: '1' },
  //   { name: 'Obi', id: '2' },
  //   { name: 'Ada', id: '3' },
  //   { name: 'Chioma', id: '4'},
  //   { name: 'Emmanuel', id: '5'},
  //   { name: 'Ebuka', id: '6'},
  //   { name: 'Emeka', id: '7'},
  // ]);


  // // item with key

  // // const [allPeople, setAllPeople] = useState([
  // //   { name: 'Cruz', key: '1' },
  // //   { name: 'Esther', key: '2' },
  // //   { name: 'Adachukwu', key: '3' },
  // //   { name: 'Chike', key: '4'},
  // //   { name: 'Emmanuella', key: '5'},
  // //   { name: 'Ebube', key: '6'},
  // //   { name: 'Emeka ike', key: '7'},
  // // ]);
   

  const [todos, setTodos] = useState([
    { text: 'Buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play ball', key: '3' },
    { text: 'learn and upskill', key: '4' },
    { text: 'build projects', key: '5' },
  ]);


  // // Functions

  // function changeName() {
  //   setName('Cruz');
  //   setPerson({
  //     name: 'Ikedinma Miracle',
  //     age: 30,
  //   })
  // }

  // function changedInput(value) {
  //   setName(value);
  // };

  // function changedAge(value) {
  //   setAged(value);
  // };

  // const pressHandler = (id) => {
  //  setPeople((prevPeople) =>{
  //   return prevPeople.filter(person => person.id != id);
  //  });
  // }


  const pressed = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {

    if(text.length > 3){
      setTodos((prevTodos) =>{
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ]
      });
    } else {
      Alert.alert('OOPS!', 'Todos must be over 3 characters long', [
        {text: 'Understood', onPress: () => console.log('Alert Closed')}
      ]);
    }
    
  }

  return (
   
    
    // handling list with scrollview

  // <ScrollView>

  //     <View style={styles.container}>

  //     <Text>My Name is {name} Age is {aged}</Text>
  //     <Text>My Name is {person.name} and my age is {person.age} </Text>
  //     <View style={styles.mybtn}>
  //      <Button title='Click To Change Name' onPress={changeName} />
  //     </View>

  //     <Text>Enter Your Name</Text>
  //     <TextInput
  //      style={styles.myinput}
  //      placeholder='e.g John Doe'
  //      onChangeText={changedInput}
  //       />

  //     <Text>Enter Your Age</Text>
  //     <TextInput
  //      keyboardType='numeric'
  //      style={styles.myinput}
  //      placeholder='e.g 20'
  //      onChangeText={changedAge}
  //       />
  //       </View>
       
  //      { allPeople.map((item) => {
  //         return (
  //           <View key={item.key}>
  //             <Text style={styles.items}>{item.name}</Text>
  //           </View>
  //         )
  //       }) }
  // </ScrollView>



  // handling list with flatlist

  // <FlatList
  // keyExtractor={(item) => item.id}
  //  style={styles.all} 
  //   data={people}
  //   renderItem={({ item }) => (
  //     <TouchableOpacity onPress={() => pressHandler(item.id)}>
  //      <Text style={styles.items}>{item.name}</Text>
  //     </TouchableOpacity>
     
  //   )}
  // />

   <TouchableWithoutFeedback onPress={() => {
     Keyboard.dismiss();
   }}>
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
           <FlatList
              data={todos}
              renderItem={({ item }) => (
                 <TodoItem item={item} pressed={pressed} />
              )}
            />
        </View>
      </View>
   </View>
   </TouchableWithoutFeedback>
       
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
  },
  // mybtn : {
  //   marginTop : 20,
  //   marginBottom: 20,
  // },
  // myinput : {
  //   borderColor: 'black',
  //   borderWidth : 1,
  //   margin: 20,
  //   width: 200, 
  //   padding: 20,
  //   borderRadius : 10,
  // },
  // items : {
  //   backgroundColor: 'pink',
  //   padding: 30,
  //   margin : 10,
  //   fontSize: 20,
  // },
  // all : {
  //   marginTop: 40,
  // },
  content : {
    padding: 40,
    flex: 1,
  },
  list : {
    flex: 1,
    marginTop: 20,
  }
});
