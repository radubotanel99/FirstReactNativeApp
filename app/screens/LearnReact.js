import React, { useState } from "react";
import { Button, Text, View, StyleSheet, Image } from "react-native";
import cat1 from "../assets/cat1.jpg";
import cat2 from "../assets/cat2.jpg";

const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true);
  const [age, setAge] = useState(0);

  return (
    <View style={styles.container}>
      <Image source={props.image} style={styles.thumbnail} />
      <Text style={styles.instructions}>
        I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
          setAge(age + 1);
        }}
        //disabled={!isHungry}
        title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
      />
      <Text style={styles.instructions}>
        I drank {age} liters of milk today 
      </Text>
    </View>
  );
}

const Cafe = () => {
  return (
    <>
      <Cat name="Munkustrap" image={cat1} />
      <Cat name="Spot" image={cat2}/>
    </>
  );
}

export default Cafe;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    instructions: {
      color: '#888',
      fontSize: 18,
      marginHorizontal: 15,
      marginBottom: 10,
    },
    button: {
      backgroundColor: 'blue',
      padding: 20,
      borderRadius: 5,
    },
    thumbnail: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
      },
  });