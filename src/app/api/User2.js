'use client'

import {useState, useEffect } from 'react';
import Header from '../components/Header';
import {getPosts2} from './page'
export default function User2() {

const [Data, setData] = useState('');

 useEffect(()=>{
    getPosts2().then((posts)=> setData(posts));
  }, [])
 
 

  return (
    <>
      <Header/>

      <div style={{ marginTop: 80, fontSize: '16px' }}>{Data ? (
        <ul>
          {Data.map((item, index) => (
            <li key={index}>{item.name}  {item.zipcode}</li> 
          ))}
        </ul>
      ) : (
        <p>Click the button to load data.</p>
      )}</div>
    
    </>
  );
}
