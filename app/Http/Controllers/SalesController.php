<?php

namespace App\Http\Controllers;

use App\Models\Sales;
use App\Models\Car;
use App\Models\Customer;
use App\Models\Seller;
use Validator;
use Illuminate\Http\Request;

class SalesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sale = Sales::join('cars', 'cars.id', '=', 'sales.carId')
        ->join('customers', 'customers.id', '=', 'sales.customerId')
        ->join('sellers', 'sellers.id', '=', 'sales.sellerId')
        ->get(['sales.id', 'sales.dateSales', 'cars.model as car', 
        'customers.name as customer', 'sellers.name as seller',]);
        return $sale;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'dateSales' => 'required',
            'carId' => 'required',
            'customerId' => 'required',
            'sellerId' => 'required',
        ]);

        $sale = new Sales();
        $sale->dateSales = $request->dateSales;
        $sale->carId = $request->carId;
        $sale->customerId = $request->customerId;
        $sale->sellerId = $request->sellerId;
        $sale->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Sales  $sales
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $sale = Sales::find($id);
        return $sale;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Sales  $sales
     * @return \Illuminate\Http\Response
     */
    public function edit(Sale $sale)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Sales  $sales
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $sale = Sales::findOrFail($request->id);
        $sale->dateSales = $request->dateSales;
        $sale->carId = $request->carId;
        $sale->customerId = $request->customerId;
        $sale->sellerId = $request->sellerId;
        $sale->save();
        return $sale;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Sale $sales
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $sale = Sales::destroy($id);
        return $sale;
    }
}

