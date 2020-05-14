import _ from 'lodash';
import {Icon} from 'react-native-elements';
import React from 'react';

export const QuestionData = [
  {
    id: 0,
    question: `What is the supreme law of the land?`,
    options: [`the Supreme Court`, `the Constitution`, `announced our independence`, 'the Bill of Rights'],
    answer: `the Constitution`,
    audio: 'https://www.uscis.gov/sites/default/files/files/nativedocuments/Track%2001.mp3'
  },
  {
    id: 1,
    question: `What does the Constitution do?`,
    options: [`sets up the government`, `defines the government`, `protects basic rights of Americans`, 'all of the above'],
    answer: `all of the above`,
    audio: 'https://www.uscis.gov/sites/default/files/files/nativedocuments/Track%2002.mp3'
  },
  {
    id: 3,
    question: `The idea of self-government is in the first three words of the Constitution. What are these words?`,
    options: [`We the Government`, `We the People`, `pursuit of happiness`, 'No one is above the law'],
    answer: `We the People`,
    audio: 'https://www.uscis.gov/sites/default/files/files/nativedocuments/Track%2003.mp3'
  },
  {
    id: 4,
    question: `What is an amendment?`,
    options: [`a change (to the Constitution)`, `an addition (to the Constitution)`, `both a and b`, 'none of the above'],
    answer: `both a and b`,
    audio: 'https://www.uscis.gov/sites/default/files/files/nativedocuments/Track%2004.mp3',
  }
  // 1: {
  //   id: 1,
  //   question: 'Who is the ceo of tesla motors?',
  //   options: ['Jeff', 'gates', 'mark', 'elon'],
  //   answer: 'elon',
  // },
  //   2: {
  //     id: 2,
  //     question: 'Who is the ceo of tesla motors?',
  //     options: ['Jeff', 'gates', 'mark', 'elon'],
  //     answer: 'elon',
  //   },
  ]

// export default QuestionData;
// export const ridesAsArray = () => _.values(Question)

