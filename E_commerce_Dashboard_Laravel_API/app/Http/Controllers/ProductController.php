<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    function addProduct( Request $req)

    {
        $product = new Product;
        $product->name=$req->input('name');
        $product->description=$req->input('description');
        $product->price=$req->input('price');
        $product->file_path=$req->file('file')->store('products');
        $product->save();
        return $product;
    }
    function list ()
    {
        return Product::all();
    }
    function delete($id)
    {
        $result = Product::where('id',$id)->delete();
        if($result)
        {
            return ["result"=>"Product has Beed Deleted"];
        }
        else {
            return ["result"=>"Operation Failde"];
        }
    }

    function getProduct($id)
    {
        return Product::find($id);
    }

    function search($key)
    {
        return Product::where('name','Like',"%$key%")->get();
    }
}
