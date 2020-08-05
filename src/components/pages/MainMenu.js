import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import firebase from '../../Firebase';
import 'firebase/auth';
import 'firebase/firestore';

const provider = new firebase.auth.TwitterAuthProvider();
const db = firebase.firestore();

const MainMenu = () => {
    const [button,setButton] = useState('hello!!');
    const [twitter,setTwitter] = useState('login twitter');

    const getHttp = () => {
        setButton('getHTTP');
        axios
            .get('https://us-central1-helloworld1132.cloudfunctions.net/helloWorld')
            .then((result) =>{
                setButton(result.data);
            })
            .catch((error)=>{
                console.error(error);
            });
    }
    const twitterOauth = () => {
        firebase.auth().signInWithPopup(provider).then((result)=>{
            const displayName = result.user.displayName;
            setTwitter(displayName);
        }).catch((error)=>{
            console.log('error');
            console.log(error.code);
        });
    }
    const addData = () => {
        db.collection('sample1').add({
            first:'国木田',
            last:'花丸'
        }).then((docRef)=>{
            console.log('Document written with ID: ',docRef.id);
        }).catch((error)=>{
            console.log('error',error);
        });
    }
    return(
        <div>
        <button  onClick={()=>getHttp()}>
        {button}
        </button>
        <button  onClick={()=>twitterOauth()}>
        {twitter}
        </button>
        <button  onClick={()=>addData()}>
        AddData
        </button>
        <Link to='/pageOne'>
        <button>
        go to pageOne
        </button>
        </Link>
        </div>
    );
};
export default MainMenu;
