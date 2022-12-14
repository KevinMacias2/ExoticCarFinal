<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SalesController;
use App\Http\Controllers\passportAuthController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\CarController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\LaborDataController;
use App\Http\Controllers\SellerController;
use App\Http\Controllers\LoginController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



//-----------------------------------------------------------------------------------
//Rutas de Brand
Route::middleware('auth:api')->group(function (){
    Route::get('/brands', [BrandController::class, 'index']); //Mostrar todo
});

Route::post('/brand', [BrandController::class, 'store']); //Ingresar un registro

Route::get('/brand/{id}', [BrandController::class, 'show']); //Mostrar un solo registro

Route::delete('/brand/{id}', [BrandController::class, 'destroy']); //Borrar un registro por Id

Route::post('/brand/{id}', [BrandController::class, 'update']);  //Modificar un registro

Route::get('/brandss', [BrandController::class, 'index']);
    
Route::get('/categories', [CategoryController::class, 'index']); //Mostrar todo

Route::post('/category', [CategoryController::class, 'store']); //Ingresar un registro

Route::get('/category/{id}', [CategoryController::class, 'show']); //Mostrar un solo registro

Route::delete('/category/{id}', [CategoryController::class, 'destroy']); //Borrar un registro por Id

Route::post('/category/{id}', [CategoryController::class, 'update']);  //Modificar un registro

Route::get('/laborDatas', [LaborDataController::class, 'index']); //Mostrar todo

Route::post('/laborData', [LaborDataController::class, 'store']); //Ingresar un registro

Route::get('/laborData/{id}', [LaborDataController::class, 'show']); //Mostrar un solo registro

Route::delete('/laborData/{id}', [LaborDataController::class, 'destroy']); //Borrar un registro por Id

Route::post('/laborData/{id}', [LaborDataController::class, 'update']);  //Modificar un registro

Route::get('/cars', [CarController::class, 'index']); //Mostrar todo

Route::post('/car', [CarController::class, 'store']); //Ingresar un registro

Route::get('/car/{id}', [CarController::class, 'show']); //Mostrar un solo registro

Route::delete('/car/{id}', [CarController::class, 'destroy']); //Borrar un registro por Id

Route::post('/car/{id}', [CarController::class, 'update']);  //Modificar un registro

Route::get('/customers', [CustomerController::class, 'index']); //Mostrar todo

Route::post('/customer', [CustomerController::class, 'store']); //Ingresar un registro

Route::get('/customer/{id}', [CustomerController::class, 'show']); //Mostrar un solo registro

Route::delete('/customer/{id}', [CustomerController::class, 'destroy']); //Borrar un registro por Id

Route::post('/customer/{id}', [CustomerController::class, 'update']);  //Modificar un registro

Route::get('/sellers', [SellerController::class, 'index']); //Mostrar todo

Route::post('/seller', [SellerController::class, 'store']); //Ingresar un registro

Route::get('/seller/{id}', [SellerController::class, 'show']); //Mostrar un solo registro

Route::delete('/seller/{id}', [SellerController::class, 'destroy']); //Borrar un registro por Id

Route::post('/seller/{id}', [SellerController::class, 'update']);  //Modificar un regi

Route::get('/sales', [SalesController::class, 'index']); //Mostrar todo

Route::post('/sale', [SalesController::class, 'store']); //Ingresar un registro

Route::get('/sale/{id}', [SalesController::class, 'show']); //Mostrar un solo registro

Route::delete('/sale/{id}', [SalesController::class, 'destroy']); //Borrar un registro por Id

Route::post('/sale/{id}', [SalesController::class, 'update']);  //Modificar un registro

Route::post('register',[LoginController::class, 'register']);

Route::post('login',[LoginController::class, 'login']);