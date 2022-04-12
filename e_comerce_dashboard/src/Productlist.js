import React ,{useState,useEffect} from 'react';
import Header from './Header';
import {Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';


function Productlist() {
    const [data, setData] = useState([]);
useEffect(  () => {
 getData();

}, [])
console.warn("result", data)
 async function deleteOperation(id){
  let  result = await fetch("http://localhost:8000/api/delete/"+id,
  {
    method:'Delete'
  });
    result = await result.json()
    console.warn(result)
    getData();
}
  async function getData()
  {
    let  result = await fetch("http://localhost:8000/api/list");
    result = await result.json()
    setData(result)

  }
    return (
      <div>
        < Header />
        <h1>Scribble E-Commerce ProductList Page</h1>
        <div className= "col-sm-8 offset-sm-2">
<Table>
    <tr>
      <td>ID</td>
      <td>Name</td>
      
      <td>Descriptions</td>
      <td>Price</td>
      <td>Images</td>
      <td> Delete Product</td>
      <td>Update Product</td>
      
    </tr>
    {
        data.map((item)=>
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td>{item.price}</td>
      <td> <img style={{width:100}}src={"http://localhost:8000/"+item.file_path} alt="" /></td>
      
      <td><span onClick={()=>deleteOperation(item.id)}  className="btn btn-danger"> Delete</span></td>
      <Link to={"update/"+item.id}>
      <td><span  className="btn btn-primary"> Update</span></td>
      </Link>
    </tr>
    )
    }
    
</Table>
      </div>
      </div>
    );
  }
  
  export default Productlist;