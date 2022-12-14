import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Swal from "sweetalert2"

const endpoint = 'http://localhost/proyectCar/public/api'

const TableSellers = () => {
  const [ sellers, setSellers ] = useState( [] )

  useEffect ( ()=> {
      getAllSellers()
  }, [])

  const getAllSellers = async () => {
    const response = await axios.get(`${endpoint}/sellers`)
    setSellers(response.data)
  }

  const deleteSeller = async (id) => {
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
    await axios.delete(`${endpoint}/seller/${id}`).then(({data})=> {
        Swal.fire({
            icon: 'success',
            text:data.message
        })
        getAllSellers();
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
                    <td>Name</td>
                    <td>Last Name</td>
                    <td>Address</td>
                    <td>Phone</td>
                    <td>Date</td>
                    <td>Category</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                { sellers.map( (seller) => (
                    <tr key={seller.id}>
                        <td> {seller.name}</td>
                        <td> {seller.lastName}</td>
                        <td> {seller.address}</td>
                        <td> {seller.phone}</td> 
                        <td> {seller.date}</td>
                        <td> {seller.category}</td>         
                        <td>
                            <Link to={`/proyectCar/public/seller/update/${seller.id}`} className='btn btn-info'>Edit</Link>
                            <button onClick={ ()=>deleteSeller(seller.id) } className='btn btn-danger'>Delete</button>
                        </td>

                    </tr>
                )) }
            </tbody>
        </table>
    </div>
  )
}

export default TableSellers