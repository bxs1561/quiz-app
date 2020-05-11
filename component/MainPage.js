import React, {useState} from 'react';
import {QuestionData} from './QuestionData';
import _ from 'lodash';
import {Button, Card, Icon} from 'react-native-elements';
import Sound from 'react-native-sound';
// import Tts from 'react-native-tts';
import {Dimensions, Modal, TouchableHighlight} from 'react-native';


import {
    Text,
    StyleSheet,
    View,
    Alert,
    TouchableOpacity,
    ViewComponent,
     Image,
} from 'react-native';
const MainPage = () => {
  return _.map(QuestionData, (items) => (
    <DataPage key={items.id} data={items} />
  ));
};

const DataPage = ({navigation}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState(QuestionData[currentQuestion].answer);
  const current = QuestionData[currentQuestion].question;
  const [score, setScore] = useState(0);
  const [end, setEnd] = useState(false);
    const sound = new Sound("/Users/bikramsubedi/Desktop/quiz/assets/Untitled.m4a",null)
    // Tts.speak('Hello, world!', {
    //     iosVoiceId: 'com.apple.ttsbundle.Moira-compact',
    //     rate: 0.5,
    // });




    const q1 = () => {
    if (currentQuestion === QuestionData.length - 1) {
      setEnd(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setScore(score + 1);

    }
  };

  const right = () => {
    // return <Icon name="check" type="material-community" color="green" />;
      return(
          <Button title='sound' onPress={()=>{sound.play()}}/>

      )
  };
  // //this will make button color red
  // buttonStyle={{backgroundColor: 'red'}}


  const ans = () => {
    return (

      <>

        <Button
          style={styles.buttonSpace}
          title={QuestionData[currentQuestion].options[0]}

          onPress={() => {

                if (
              QuestionData[currentQuestion].options[0] ===
              QuestionData[currentQuestion].answer
            ) {
              q1();
                setScore(score + 1);



            } else {
              Alert.alert(
                'wrong ans',
                'correct answer is' +
                  ' ' +
                  QuestionData[currentQuestion].answer,
                'ok',
              );
              // setScore(score - 1]);
              q1();
            }
          }}
        />
        <Button
          style={styles.buttonSpace}
          title={QuestionData[currentQuestion].options[1]}
          onPress={() => {
            if (
              QuestionData[currentQuestion].options[1] ===
              QuestionData[currentQuestion].answer
            ) {
              q1();
              setScore(score + 1);
            } else {
              Alert.alert(
                'wrong answer',
                'correct answer is' +
                  ' ' +
                  QuestionData[currentQuestion].answer,
                'ok',
              );
              setScore(score - 1);
            }
          }}
        />
        <Button
          style={styles.buttonSpace}
          title={QuestionData[currentQuestion].options[2]}
          onPress={() => {
            if (
              QuestionData[currentQuestion].options[2] ===
              QuestionData[currentQuestion].answer
            ) {
              q1();
              setScore(score + 1);
            } else {
              Alert.alert(
                'wrong answer',
                'correct answer is' +
                  ' ' +
                  QuestionData[currentQuestion].answer,
                'ok',
              );
              setScore(score - 1);
            }
          }}
        />
        {currentQuestion === QuestionData.length - 1 && (
          <Button title="finish" onPress={() => <Text>color</Text>} />
        )}
      </>
    );
  };

  if (end) {
    return (
      <>
        <Card>
          <Text>{score}</Text>
        </Card>
        <Button
          title="Reset Nepali"
          onPress={() => navigation.navigate('Nepali')}
        />
      </>
    );
  } else {
    return (
      <Card wrapperStyle={{backgroundColor: 'white'}}>
        <Card containerStyle={styles.cardSpace}>
          <Text>
            {currentQuestion}: {current}
          </Text>
        </Card>
        <View style={{paddingBottom: 15}} />

        <View>
          {/*<Button ViewComponent={ans} />*/}
          {ans()}
        </View>
      </Card>
    );
  }
};
const styles = StyleSheet.create({
  buttonSpace: {
    paddingBottom: 15,
      color: 'green'
  },
  cardSpace: {
    paddingBottom: 15,
    borderColor: 'black',
    width: 260,
  },


    });
// export default MainPage;
export default DataPage;
