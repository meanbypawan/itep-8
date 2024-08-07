import axios from "axios";
import { useEffect, useState } from "react";

function Category(){
    const [categoryList,setCategoryList] = useState([]);
    useEffect(()=>{
        loadCategories();
    },[]);
    const loadCategories = async ()=>{
       try{ 
        let response = await axios.get("https://dummyjson.com/products/categories");
        console.log(response.data);
        setCategoryList(response.data);
       }
       catch(err){
        console.log(err);
       }
    }
    return <>
      <h3 className="mt-2">Category Component</h3>
      <table className="table mt-2">
        <thead>
            <tr>
                <th>S.no</th>
                <th>Slug</th>
                <th>Name</th>
                <th>Url</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {categoryList.map((category,index)=><tr key={index}>
                <td>{index+1}</td>
                <td>{category.slug}</td>
                <td>{category.name}</td>
                <td>{category.url}</td>
                <td><button className="btn btn-danger">Delete</button></td>
            </tr>)}
        </tbody>
      </table>
    </>
}

export default Category;