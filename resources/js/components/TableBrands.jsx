import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const endpoint = 'http://localhost/proyectCar/public/api'

const TableBrands = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const [token, useToken] = useState([])
  const [ brands, setBrands ] = useState( [] )

  useEffect (() => {
    try{
        
        if(location!=undefined || location!=null){
            useToken(location.state.u_token)

            console.log(location.state.u_token)
            console.log(token)

            getAllBrands(location.state.u_token)
        }
    }catch(e){
        Swal.fire({
            title: "Unauthorized",
            text: "Login with a User Account",
            icon: "warning",
        })
        console.log(e);
        navigate('/proyectCar/public/')
    }
  }, [])

  const getAllBrands = async () => {
    const res = await axios.get(`${endpoint}/brands`,
    {
        headers: {
            'Content-Type':'multipart/form-data',
            'Accept': 'application/json',
            'Authorization': `Bearer  ${token}`
        }
    })
    setBrands(res.data)
    console.log(res)
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

export default TableBrands