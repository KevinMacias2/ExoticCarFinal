import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Swal from "sweetalert2";

const endpoint = 'http://localhost/proyectCar/public/api'

const TableCustomers = () => {
  const [ customers, setCustomers ] = useState( [] )

  useEffect ( ()=> {
      getAllCustomers()
  }, [])

  const getAllCustomers = async () => {
    const response = await axios.get(`${endpoint}/customers`)
    setCustomers(response.data)
  }

  const deleteCustomer = async (id) => {
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
    await axios.delete(`${endpoint}/customer/${id}`).then(({data})=> {
        Swal.fire({
            icon: 'success',
            text:data.message
        })
        getAllCustomers();
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
                    <td>Location</td>
                    <td>City</td>
                    <td>CP</td>
                    <td>Phone</td>
                    <td>Rol Job</td>
                    <td>Salary</td>
                    <td>Job</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                { customers.map( (customer) => (
                    <tr key={customer.id}>
                        <td> {customer.name}</td>
                        <td> {customer.lastName}</td>
                        <td> {customer.address}</td>
                        <td> {customer.location}</td> 
                        <td> {customer.city}</td>
                        <td> {customer.CP}</td>
                        <td> {customer.phone}</td>
                        <td> {customer.rolJob} </td>
                        <td> {customer.salary} </td>
                        <td> {customer.job}</td>        
                        <td>
                            <Link to={`/proyectCar/public/customer/update/${customer.id}`} className='btn btn-info'>Edit</Link>
                            <button onClick={ ()=>deleteCustomer(customer.id) } className='btn btn-danger'>Delete</button>
                        </td>

                    </tr>
                )) }
            </tbody>
        </table>
    </div>
  )
}

export default TableCustomers