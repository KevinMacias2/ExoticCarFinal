<?php

namespace App\Http\Controllers;

use App\Models\Car;
use App\Models\Brand;
use Validator;
use Illuminate\Http\Request;

class CarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        

        $car = Car::join('brands', 'brands.id', '=', 'cars.brandId')
        ->get(['cars.id', 'cars.model', 'cars.type',
        'cars.year', 'cars.color', 'cars.price', 'cars.km', 'cars.source',
        'cars.equipment', 'cars.numSales', 'cars.observation','brands.name as brand',]);

        return $car;
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
            'model' => 'required|min:5',
            'type' => 'required|min:5',
            'year' => 'required|min:4',
            'color' => 'required|min:5',
            'price' => 'required|min:5',
            'km' => 'required|min:1',
            'source' => 'required|min:5',
            'equipment' => 'required|min:5',
            'numSales' => 'required|min:1',
            'observation' => 'required|min:5',
            'brandId' => 'required'
        ]);

        $car = new Car();
        $car->model = $request->model;
        $car->type = $request->type;
        $car->year = $request->year;
        $car->color = $request->color;
        $car->price = $request->price;
        $car->km = $request->km;
        $car->source = $request->source;
        $car->equipment = $request->equipment;
        $car->numSales = $request->numSales;
        $car->observation = $request->observation;
        $car->brandId = $request->brandId;
        $car->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Car  $car
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $car = Car::find($id);
        return $car;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Car  $car
     * @return \Illuminate\Http\Response
     */
    public function edit(Car $car)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Car  $car
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $car= Car::findOrFail($request->id);
        $car->model = $request->model;
        $car->type = $request->type;
        $car->year = $request->year;
        $car->color = $request->color;
        $car->price = $request->price;
        $car->km = $request->km;
        $car->source = $request->source;
        $car->equipment = $request->equipment;
        $car->numSales = $request->numSales;
        $car->observation = $request->observation;
        $car->brandId = $request->brandId;
        $car->save();
        return $car;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Car  $car
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $car = Car::destroy($id);
        return $car;
    }
}
