import _ from 'lodash';
import {Icon} from 'react-native-elements';
import React from 'react';

export const QuestionData = [
  {
    id: 0,
    question: ` What is the Capital Of India ?`,
    options: [`New Delhi`, `Mumbai`, `Kolkatta`],
    answer: `New Delhi`
  },
  {
    id: 1,
    question: `Who is the CEO of Tesla Motors?`,
    options: [`Bill Gates`, `Steve Jobs`, `Elon Musk`],
    answer: `Elon Musk`
  },
  {
    id: 3,
    question: `Name World's Richest Man?`,
    options: [`Jeff Bezo`, `Bill Gates`, `Mark Zuckerberg`],
    answer: `Jeff Bezo`
  },
  {
    id: 4,
    question: `World's Longest River?`,
    options: [`River Nile`, `River Amazon`, `River Godavari`],
    answer: `River Nile`,
    audio: '/Users/bikramsubedi/Desktop/quiz/assets/Untitled.m4a',
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

