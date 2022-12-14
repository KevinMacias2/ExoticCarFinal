import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Swal from "sweetalert2";


const endpoint = 'http://localhost/proyectCar/public/api'

const TableBrand = () => {


  const [ brands, setBrands ] = useState( [] )

  useEffect (() => {
    getAllBrands()
  }, [])

  const getAllBrands = async () => {
    const res = await axios.get(`${endpoint}/brandss`)
    setBrands(res.data)
  }

  const deleteBrand = async (id) => {
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
    await axios.delete(`${endpoint}/brand/${id}`).then(({data})=> {
        Swal.fire({
            icon: 'success',
            text:data.message
        })
        getAllBrands();
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
                    <th>Name</th>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                { brands.map( (brand) => (
                    <tr key={brand.id}>
                        <td> {brand.name} </td>  
                        <td>
                            <Link to={`/proyectCar/public/brand/update/${brand.id}`} className='btn btn-info'>Edit</Link>
                            <button onClick={ ()=>deleteBrand(brand.id) } className='btn btn-danger'>Delete</button>
                        </td>

                    </tr>
                )) }
            </tbody>
        </table>
    </div>
  )
}

export default TableBrand