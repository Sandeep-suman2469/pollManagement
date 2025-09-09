'use client'

import {useState, useEffect } from 'react';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiData } from '../store/slices/apDataSlice';
//import {getPosts1} from './page'
export default function User1() {

  const [Data, setData] = useState('');

  const dispatch = useDispatch();
  const apidata = useSelector((state)=> state.apiData.data);
  const status = useSelector((state)=> state.apiData.status);
  const error = useSelector((state)=> state.apiData.error )



  useEffect(()=>{
   // getPosts1().then((posts)=> setData(posts));
    
   if (status === 'idle'){
       dispatch(fetchApiData());
   }

   
   

  }, [status, dispatch])
  
  
  if(status === 'loading') return <div>Loading...</div>
  if(status === 'failed') return <div>{error}</div>

  return (
    <>
  
    <Header/>
     <h1>API Data: </h1>
     {/* <div>{JSON.stringify(apidata, null,2)}</div> */}
     
     <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>BODY</th>
        </tr>
      </thead>
      <tbody>
          {apidata.map((user) => (
              <tr key={user.id}> 
                <td>{user.id}</td>
                <td>{user.title}</td>
                <td>{user.body}</td>
              </tr>
            ))}
            
      </tbody>
     </table>

      {/* <div>{Data ? (
        <ul>
          {Data.map((item, index) => (
            <li key={index}>{item.id}  {item.body}</li> 
          ))}
        </ul>
      ) : (
        <p>Click the button to load data.</p>
      )}</div>
    */}
    </>
  );
}
