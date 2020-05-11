import React, {useState} from 'react';
import {Button, Card} from 'react-native-elements';
import {StyleSheet, Text, View} from 'react-native';
import {BothData} from './BothData';
import {NepaliData} from './NepaliData';

const NepaliPage = ({navigation}) =>{
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // const [answer, setAnswer] = useState(NepaliData[currentQuestion].answer);
    const current = NepaliData[currentQuestion].question;
    const [score, setScore] = useState(0);
    const [end, setEnd] = useState(false);
    const[buttonColor, setButtonColor] = useState('red')
    navigation.setOptions({
        title: 'नेपाली ',
        headerBackTitle: 'फिर्ता',
    })


    const question1 = () => {
        if (currentQuestion === NepaliData.length - 1) {
            setEnd(true);
        } else {
            setCurrentQuestion(currentQuestion + 1)
            setScore(score + 1);
        }
    }
    const answer = () => {
        return (
            <>
                <Button style={styles.buttonSpace}
                        title={NepaliData[currentQuestion].options[0]}
                        onPress={() => {
                            if (
                                NepaliData[currentQuestion].options[0] ===
                                NepaliData[currentQuestion].answer
                            ) {
                                question1()
                                setScore(score + 1);
                            }
                        }}
                />
                <Button style={styles.buttonSpace}
                        title={NepaliData[currentQuestion].options[1]}
                        onPress={() => {
                            if (
                                NepaliData[currentQuestion].options[1] ===
                                NepaliData[currentQuestion].answer
                            ) {
                                question1()
                                setScore(score + 1);
                            } else {
                                console.log("wrond answer")
                            }
                        }}
                />
                <Button style={styles.buttonSpace}
                        title={NepaliData[currentQuestion].options[2]}
                        onPress={() => {
                            if (
                                NepaliData[currentQuestion].options[2] ===
                                NepaliData[currentQuestion].answer
                            ) {
                                question1()
                                setScore(score + 1);
                            } else {
                                console.log("wrond answer")
                            }
                        }}
                />
                {/*{currentQuestion === NepaliData.length - 1 &&(*/}
                {/*    <Button title='finish' onPress={()=>(<Text>color</Text>)}/>*/}
                {/*)}*/}

            </>
        );
    };
    return (
        <Card wrapperStyle={{backgroundColor: 'white'}}>
            <Card containerStyle={styles.cardSpace}>
                <Text>
                    {currentQuestion}: {current}
                </Text>
            </Card>
            <View style={{paddingBottom: 15}} />

            <View>
                <Button ViewComponent={answer} />
            </View>
        </Card>

    );
};


export default NepaliPage

const styles = StyleSheet.create({
    buttonSpace: {
        paddingBottom: 15,
    },
    cardSpace: {
        paddingBottom: 15,
        borderColor: 'black',
        width: 260,
    },
});
