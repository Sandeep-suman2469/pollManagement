'use client'

import {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiData } from '../store/slices/apDataSlice';

import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { border, height, minWidth, width } from '@mui/system';
import { Button,Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import toast from 'react-hot-toast';



export default function User1() {

  const [Data, setData] = useState('');

  const [rows, setRows] = useState([])

  const dispatch = useDispatch();
  const apidata = useSelector((state)=> state.apiData.data);
  const status = useSelector((state)=> state.apiData.status);
  const error = useSelector((state)=> state.apiData.error )


  console.log("ssdssdsd", status)

  console.log("ssdssdsd123", apidata)


  const handleDeleteRow = (id) =>{
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    toast.success(`One row of id: ${id} deleted succesfully !!!`)
  }

  

  const handleUpdate = (oldRow, newRow) => {
   

    setRows((prevRows)=>
      prevRows.map((row)=>
        row.id === newRow.id ? {...row, body : newRow.body} : row
      )
    )

    if(oldRow.body !== newRow.body){
      toast.success(`Body of Row ${newRow.id} updated successfully !!!`)
    }
  }




 const columns = [
  { field: 'id' , headerName: 'ID', minWidth: 70, height:300},
  { field: 'title'
     , headerName: 'TITLE',
      sortable: false,
       minWidth: 300,
       renderCell: (params) => (
      <Box
        sx={{
          whiteSpace: 'normal',     
          wordBreak: 'break-word',  
          lineHeight: 1.4,
        }}
      >
        {params.value}
      </Box>
    ),
    },
  { field: 'body' ,
     headerName: 'BODY', 
     sortable: false,
     flex: 1,  
     minWidth: 300,
     editable: true,
     renderCell: (params) => (
     
      <Box
        sx={{
          whiteSpace: 'normal',     
          wordBreak: 'break-word',  
          lineHeight: 1.1,
        }}
      >
        {params.value}
      </Box>
    ),},
    {
      field : 'action', headerName : 'ACTIONS', width: 240,
      sortable: false,
      renderCell: (params) => {
           return (
            <>
            <Box>
              <Button variant='outlined' onClick={() => handleDeleteRow(params.row.id)}> <DeleteIcon /></Button>
            </Box>
             
            </>
           )
      }
    }

]



  useEffect(()=>{
    
   if (status === 'idle'){
       dispatch(fetchApiData());
   }
  }, [status,apidata, dispatch])


useEffect(() => {
  if (apidata && apidata.length > 0) {
    setRows(apidata);   
  }
}, [apidata]);

console.log("11111111111111111",rows)


const paginationModel = { page: 0, pageSize: 15 };
  
  if(status === 'loading') return <div>Loading...</div>
  if(status === 'failed') return <div>{error}</div>
  
  return (
    <>
  
     <h1>API Data: </h1>

      <Paper sx={{height:600 , width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        processRowUpdate={handleUpdate}
        onProcessRowUpdateError={(error) =>error}
        //onCellClick={handleUpdate}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
    


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




