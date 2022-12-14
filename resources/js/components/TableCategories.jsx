import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Swal from "sweetalert2";

const endpoint = 'http://localhost/proyectCar/public/api'

const TableCategories = () => {
  const [ categories, setCategories ] = useState( [] )

  useEffect ( ()=> {
      getAllCategories()
  }, [])

  const getAllCategories = async () => {
    const response = await axios.get(`${endpoint}/categories`)
    setCategories(response.data)
  }

  const deleteCategory = async (id) => {
    const isConfirm = await Swal.fire({

        title: "Are you sure?",
        text:"You won't be able to revent this!",
        icon: "warning",
        showCancelButton: true,
        confirmCancelButton: '#3085d6',
        confirmButtonColor:'d33',
        confirmButtonText: "Yes, delete it!",
    }).then((result)=> {
        return result.isConfirmed
    })

    if(!isConfirm){
        return;
    }
    await axios.delete(`${endpoint}/category/${id}`).then(({data})=> {
        Swal.fire({
            icon: 'success',
            text:data.message
        })
        getAllCategories();
    }).catch(({response:{data}}) => {
        Swal.fire({
            text: data.message,
            icon: 'error'
        })
    })
    
  }
  return (
    <div>
        

        <table className='content-table'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Description</th>
                    <th>Minimum Wage</th>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                { categories.map( (category) => (
                    <tr key={category.id}>
                        <td> {category.description}</td>
                        <td> {category.minimumWage} </td>  
                        <td>
                            <Link to={`/proyectCar/public/category/update/${category.id}`} className='btn btn-info'>Edit</Link>
                            <button onClick={ ()=>deleteCategory(category.id) } className='btn btn-danger'>Delete</button>
                        </td>

                    </tr>
                )) }
            </tbody>
        </table>
    </div>
  )
}

export default TableCategories