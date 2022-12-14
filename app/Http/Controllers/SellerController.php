<?php

namespace App\Http\Controllers;

use App\Models\Seller;
use App\Models\Category;
use Validator;
use Illuminate\Http\Request;

class SellerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $seller = Seller::join('categories', 'categories.id', '=', 'sellers.categoryId')
        ->get(['sellers.id', 'sellers.name', 'sellers.lastName', 'sellers.address',
        'sellers.phone', 'sellers.date', 'categories.description as category',]);

        return $seller;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
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
            'phone' => 'required|min:9',
            'date' => 'required',
            'categoryId' => 'required',
        ]);

        $seller = new Seller();
        $seller->name = $request->name;
        $seller->lastName = $request->lastName;
        $seller->address = $request->address;
        $seller->phone = $request->phone;
        $seller->date = $request->date;
        $seller->categoryId = $request->categoryId;
        $seller->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Seller  $seller
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $seller = Seller::find($id);
        return $seller;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Seller  $seller
     * @return \Illuminate\Http\Response
     */
    public function edit(Seller $seller)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Seller  $seller
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $seller = Seller::findOrFail($request->id);
        $seller->name = $request->name;
        $seller->lastName = $request->lastName;
        $seller->address = $request->address;
        $seller->phone = $request->phone;
        $seller->date = $request->date;
        $seller->categoryId = $request->categoryId;
        $seller->save();
        return $seller;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Seller  $seller
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $seller = Seller::destroy($id);
        return $seller;
    }
}

