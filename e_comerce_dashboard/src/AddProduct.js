
import React ,{useState} from 'react';
import Header from './Header';
  function AddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState("");

  async function addProduct() {
     console.warn(name, file, description, price)
    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description',description);
    formData.append('price',price);
    formData.append('file',file);
   let  result = await fetch("http://localhost:8000/api/addProduct", {
      method:'POST',
      body:formData,
      
    });
    alert('Data Has Been Added')
    console.warn(result)
    

  }
    return (
      <div>
        < Header />
        <div className= "col-sm-6 offset-sm-3">
        <h1>Add Products Page</h1>
        <input type="text"  onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Name" /><br />
        <input type="text"  onChange={(e)=>setDescription(e.target.value)} className="form-control" placeholder="Descriptions"  /><br />
        <input type="text"  onChange={(e)=>setPrice(e.target.value)} className="form-control" placeholder="Price" /><br />
        <input type="file"  onChange={(e)=>setFile(e.target.files[0])} className="form-control" placeholder="file" /><br />
        <button onClick={addProduct} className="btn btn-primary" >Add Product</button>
      </div>
      </div>
    );
  }
  
  export default AddProduct;