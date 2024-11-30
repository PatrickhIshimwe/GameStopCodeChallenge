import {Button, Text, View} from "react-native";
import {useState} from "react";


export default function FollowAlong(){

    const [name, setName] = useState('Pats')
    const [counter, setCounter] = useState(0)

    const onClickHandler = () => {
        setCounter(counter + 1)
        setName('Patrick')
    }

    return(
        <View>
            <Text>{ counter * 5}</Text>
            <Button title='Add' onPress={onClickHandler}/>
            <Text>You clicked {counter} times {name}</Text>
        </View>
    )
}
