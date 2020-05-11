import React, {useState} from 'react';
import NepaliPage from './NepaliPage';
import DataPage from './MainPage';
import {BothData} from './BothData';
import {Button} from 'react-native-elements';
import {Text, View} from 'react-native';
import _ from 'lodash';
import * as Localization from 'react-localization'; // or whatever library you want
import i18n from 'i18n-js'; // or whatever library you want
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export const LocalizationContext = React.createContext();


const Both = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const [end, setEnd] = useState(false);
  const[changes, setChange] = useState('english')
  const current = BothData.Nepali[currentQuestion].question;
  const english = BothData.english[currentQuestion].question
  const current1 = BothData.Nepali
    const[local, setLocal] = useState('en')


  console.log(current1)

  const q1 = () => {
    if (currentQuestion === BothData.english.length - 1) {
      setEnd(true);
    } else {
      setCurrentQuestion(currentQuestion + 1)
      setScore(score + 1);
    }
  }
  const question1 = () => {
    if (currentQuestion === BothData.length - 1) {
      setEnd(true);
    } else {
      setCurrentQuestion(currentQuestion + 1)
      setScore(score + 1);
    }
  }

  const eng = () => {
    return (
        <>
          <Button
                  title={BothData.english[currentQuestion].options[0]}
                  onPress={() => {
                    if (
                        BothData.english[currentQuestion].options[0] ===
                        BothData.english[currentQuestion].answer
                    ) {
                      question1()
                      setScore(score + 1);
                    }
                  }}
          />
          <Button
                  title={BothData.english[currentQuestion].options[1]}
                  onPress={() => {
                    if (
                        BothData.english[currentQuestion].options[1] ===
                        BothData.english[currentQuestion].answer
                    ) {
                      question1()
                      setScore(score + 1);
                    } else {
                      console.log("wrond answer")
                    }
                  }}
          />
          <Button
                  title={BothData.english[currentQuestion].options[2]}
                  onPress={() => {
                    if (
                        BothData.english[currentQuestion].options[2] ===
                        BothData.english[currentQuestion].answer
                    ) {
                      question1()
                      setScore(score + 1);
                    } else {
                      console.log("wrond answer")
                    }
                  }}
          />
          {currentQuestion === BothData.length - 1 &&(
              <Button title='finish' onPress={()=>(<Text>color</Text>)}/>
          )}

        </>
    );
  };
  return (
      <View>
      <Text>{currentQuestion}: {current}</Text>
      {/*<Button*/}
      {/*        title='Nepali'*/}
      {/*        onPress={() => {*/}
      {/*          <NepaliPage/>*/}
      {/*          }*/}
      {/*        }*/}
      {/*/>*/}
          {BothData === 'Nepali' && (
              <Button title="Switch to French" onPress={() => setLocal('fr')} />
          )}


      </View>
  )
};
export default Both;
