import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import { color } from 'react-native-reanimated';
import { useDispatch } from 'react-redux';
import { addFood } from './actions/food';

const FoodForm = ({ navigation }) => {

  const [food, setFood] = useState('')

  const dispatch = useDispatch();

  const submitFood = (food) => dispatch(addFood(food))

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./assets/logo.png')}
      />
      <Text style={{ fontSize: 20, color: 'cyan',textAlign:"center"}}>{'\n'}ENTER TASK WITH TIME {'\n'}</Text>

      <TextInput
        value={food}
        placeholder='TASK @ TIME'
        style={styles.foodInput}
        onChangeText={(food) => setFood(food)}
      />
      <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() => {
          submitFood(food)
          setFood('')
        }}>
        <Text style={{ fontSize: 25, color: 'ivory',fontWeight: 'bold'}}>MAKE TASK</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginBottom: 24 }}
        onPress={() =>
          navigation.navigate('FoodList')}>
        <Text style={{ fontSize: 25, color: 'ivory',fontWeight: 'bold' }}>TODAYS TASKS</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 20, color: 'cyan'}}>delete task after completion</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'navy',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 48,
    marginBottom: 30,
    marginTop: 16,
    color: 'cyan'
  },
  foodInput: {
    fontSize: 30,
    marginBottom: 32,
    borderWidth: 1,
    padding: 12,
    width: '80%',
        textAlign:'center',
    borderRadius: 10,
    backgroundColor: 'cyan',
    textShadowColor:'black'
  },
  image: {
    width: 140,
    height: 140,
    borderColor: 'white',
    borderWidth: 5,
   }
});

export default FoodForm;
