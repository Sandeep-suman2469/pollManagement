'use client'

import styles from '../home/home.module.css';
import {useState, useEffect } from 'react';
import Header from '../components/Header';
// import {getPosts} from '../api/page'
export default function HomePage() {

  const [apiData, setApiData] = useState('');

  // const getPosts = async () => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //     method: "GET",
  //   });
  //   const data = await response.json();
    
  //   setApiData(data);
  // };

//   const getPosts = async() => {
//    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
//       method: 'GET',
//    });
//   // return response.json();
// }

async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setApiData(data); // Update the state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  // useEffect(()=>{
  //   getPosts().then((posts)=> console.log(posts));
  // }, [])

  return (
    <>
     
    <Header/>
    <div className={styles.container}>
      <div className={styles.aside}><button onClick={fetchData}> User Data</button>
         </div>
      <div className={styles.section}>{apiData ? (
        <ul>
          {apiData.map((item, index) => (
            <li key={index}>{item.id}  {item.body}</li> // Example rendering
          ))}
        </ul>
      ) : (
        <p>Click the button to load data.</p>
      )}</div>
    </div> 
    </>
  );
}
