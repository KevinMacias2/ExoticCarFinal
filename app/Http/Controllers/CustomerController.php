<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\LaborData;
use Validator;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    

        $customer = Customer::join('labor_data', 'labor_data.id', '=', 'customers.jobId')
        ->get(['customers.id', 'customers.name', 'customers.lastName', 'customers.address', 'customers.location',
        'customers.city', 'customers.CP', 'customers.phone', 'customers.rolJob', 'customers.salary',
        'labor_data.nameJob as job',]);

        return $customer;
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
            'name' => 'required|min:5',
            'lastName' => 'required|min:5',
            'address' => 'required|min:10',
            'location' => 'required|min:5',
            'city' => 'required|min:5',
            'CP' => 'required|min:5',
            'phone' => 'required|min:9',
            'rolJob' => 'required|min:5',
            'salary' => 'required|min:4',
            'jobId' => 'required',
        ]);
     
        $customer = new Customer();
        $customer->name = $request->name;
        $customer->lastName = $request->lastName;
        $customer->address = $request->address;
        $customer->location = $request->location;
        $customer->city = $request->city;
        $customer->CP = $request->CP;
        $customer->phone = $request->phone;
        $customer->rolJob = $request->rolJob;
        $customer->salary = $request->salary;
        $customer->jobId = $request->jobId;
        $customer->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $customer = Customer::find($id);
        return $customer;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function edit(Customer $customer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $customer = Customer::findOrFail($request->id);
        $customer->name = $request->name;
        $customer->lastName = $request->lastName;
        $customer->address = $request->address;
        $customer->location = $request->location;
        $customer->city = $request->city;
        $customer->CP = $request->CP;
        $customer->phone = $request->phone;
        $customer->rolJob = $request->rolJob;
        $customer->salary = $request->salary;
        $customer->jobId = $request->jobId;
        $customer->save();
        return $customer;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $customer = Customer::destroy($id);
        return $customer;
    }
}