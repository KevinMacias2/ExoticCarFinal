import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Swal from "sweetalert2";

const endpoint = 'http://localhost/proyectCar/public/api'

const TableCars = () => {
  const [ cars, setCars ] = useState( [] )

  useEffect ( ()=> {
      getAllCars()
  }, [])

  const getAllCars = async () => {
    const response = await axios.get(`${endpoint}/cars`)
    setCars(response.data)
  }

  const deleteCar = async (id) => {
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
    await axios.delete(`${endpoint}/car/${id}`).then(({data})=> {
        Swal.fire({
            icon: 'success',
            text:data.message
        })
        getAllCars();
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
                    <td>Model</td>
                    <td>Type</td>
                    <td>Year</td>
                    <td>Color</td>
                    <td>Price</td>
                    <td>KM</td>
                    <td>Source</td>
                    <td>Equipment</td>
                    <td>Sales</td>
                    <td>Observation</td>
                    <td>Brand</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                { cars.map( (car) => (
                    <tr key={car.id}>
                        <td> {car.model}</td>
                        <td> {car.type}</td>
                        <td> {car.year}</td> 
                        <td> {car.color}</td>
                        <td> {car.price}</td>
                        <td> {car.km}</td>
                        <td> {car.source}</td>
                        <td> {car.equipment} </td>
                        <td> {car.numSales} </td>
                        <td> {car.observation}</td>
                        <td> {car.brand} </td>         
                        <td>
                        <Link to={`/proyectCar/public/car/update/${car.id}`} className='btn btn-info'>Edit</Link>
                            <button onClick={ ()=>deleteCar(car.id) } className='btn btn-danger'>Delete</button>
                        </td>

                    </tr>
                )) }
            </tbody>
        </table>
    </div>
  )
}

export default TableCars