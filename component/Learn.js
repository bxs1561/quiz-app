import React, {useState, useRef} from 'react';
import {QuestionData} from './QuestionData';
import {Card} from 'react-native-elements';
import Sound from 'react-native-sound';
import {StyleSheet, Animated, View, Text, Button} from 'react-native';

const Learn = ({navigation}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const current = QuestionData[currentQuestion].question;
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true
        }).start();
    };

    const fadeOut = () =>{
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true
        }).start();
    }

    return(
        // <View style={styles.container}>
            <Card wrapperStyle={{backgroundColor: 'white'}}>
                <Card containerStyle={styles.cardSpace}>
                    <Text>
                        {currentQuestion}: {current}
                    </Text>
                </Card>
                <View style={{paddingBottom: 15}} />

                <Animated.View
                style={[
                    {
                        opacity: fadeAnim // Bind opacity to animated value
                    }
                ]}
            >
                <Text style={{paddingLeft: 35}}>Answer: {QuestionData[currentQuestion].answer}</Text>
            </Animated.View>
            <View style={{paddingTop: 20}} >
                <Button title="Show answer" onPress={fadeIn} />
            </View>

            {currentQuestion < QuestionData.length - 1 &&  (
                <View style={{paddingLeft:220}}>
                <Button title="Next" onPress={()=>{fadeOut(),setCurrentQuestion(currentQuestion + 1)}} />
                </View>
            )}
            {currentQuestion === QuestionData.length - 1 && (
                <Button title="finish" onPress={()=>{navigation.navigate('Home')}}/>

            )}
            </Card>

    );
}


export default Learn
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
});
