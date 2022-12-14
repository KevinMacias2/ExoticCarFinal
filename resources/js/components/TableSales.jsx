import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Swal from "sweetalert2";

const endpoint = 'http://localhost/proyectCar/public/api'

const TableSales = () => {
  const [ sales, setSales ] = useState( [] )

  useEffect ( ()=> {
      getAllSales()
  }, [])

  const getAllSales = async () => {
    const response = await axios.get(`${endpoint}/sales`)
    setSales(response.data)
  }

  const deleteSale = async (id) => {
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
    await axios.delete(`${endpoint}/sale/${id}`).then(({data})=> {
        Swal.fire({
            icon: 'success',
            text:data.message
        })
        getAllSales();
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
                    <th>Date Sale</th>
                    <th>Car</th>
                    <th>Customer</th>
                    <th>Seller</th>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                { sales.map( (sale) => (
                    <tr key={sale.id}>
                        <td> {sale.dateSales}</td>
                        <td> {sale.car}</td>
                        <td> {sale.customer} </td>  
                        <td> {sale.seller} </td>  
                        <td>
                            <Link to={`/proyectCar/public/sale/update/${sale.id}`} className='btn btn-info'>Edit</Link>
                            <button onClick={ ()=>deleteSale(sale.id) } className='btn btn-danger'>Delete</button>
                        </td>

                    </tr>
                )) }
            </tbody>
        </table>
    </div>
  )
}

export default TableSales