import React, {useEffect, useState} from 'react';
import Sound from 'react-native-sound';
import {Icon} from 'react-native-elements';

const Listen = () => {
    const[playing, setplaying] = useState(false)
    const sound = new Sound("https://www.uscis.gov/sites/default/files/files/nativedocuments/ENG_ALL_100.mp3", null)

    return (
        <>
        <Icon name='play' type='material-community' onPress={() => {
            sound.play()
        }}/>
        <Icon name='pause' type='material-community' onPress={() => {
        sound.pause()
    }}/>
    </>

)
}
export default Listen

