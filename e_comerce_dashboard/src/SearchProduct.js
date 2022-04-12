
import React ,{useState} from 'react';
import {Table} from 'react-bootstrap'

import Header from './Header';
  function SearchProduct() {
    const [data, setData] = useState([])
     async function search(key)
      {
        console.warn(key)
        let  result = await fetch("http://localhost:8000/api/search/"+key);
    result = await result.json()
    console.warn(result)
    setData(result)
      }

  
    return (
      <div>
        < Header />
        <div className= "col-sm-6 offset-sm-3">
        <h1>Search Products Page</h1>
      
      
     <input type="text" onChange={(e)=>search(e.target.value)} className="form-control" placeholder="Search Product" />
      <Table>
    <tr>
      <td>ID</td>
      <td>Name</td>
      
      <td>Descriptions</td>
      <td>Price</td>
      <td>Images</td>
      
      
    </tr>
    {
        data.map((item)=>
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td>{item.price}</td>
      <td> <img style={{width:100}}  src={"http://localhost:8000/"+item.file_path} alt="" /></td>
      
    </tr>
    )
    }
    
</Table>
      </div>
      </div>
    );
  }
  
  export default SearchProduct;