<?php

namespace App\Http\Controllers;

use App\Models\LaborData;
use Validator;
use Illuminate\Http\Request;

class LaborDataController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $laborData = LaborData::all();
        return $laborData;
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
            'nameJob' => 'required|min:5',
            'addressJob' => 'required|min:20',
            'phone' => 'required|min:9',
            'location' => 'reqired|min:5',
        ]);

        $laborData = new LaborData();
        $laborData->nameJob = $request->nameJob;
        $laborData->addressJob = $request->addressJob;
        $laborData->phone = $request->phone;
        $laborData->location = $request->location;

       $laborData->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\LaborData  $laborData
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $laborData = LaborData::find($id);
        return $laborData;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\LaborData  $laborData
     * @return \Illuminate\Http\Response
     */
    public function edit(LaborData $laborData)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\LaborData  $laborData
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $LaborData = LaborData::findOrFail($request->id);
        $LaborData->nameJob = $request->nameJob;
        $LaborData->addressJob = $request->addressJob;
        $LaborData->phone = $request->phone;
        $LaborData->location = $request->location;
        $LaborData->save();
        return $LaborData;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\LaborData  $laborData
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $LaborData = LaborData::destroy($id);
        return $LaborData;
    }
}
