<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Validator;
use Ilumitate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function register(Request $request){
       $validator = Validator::make($request->all(),[
            'name' => 'required|min:10',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        $token = $user->createToken('LaravelAuthApp')->accessToken;

        return response()->json(['token' => $token], 200);
        //return $request->username;
    }
    
    //funcion para hacer Login en la página
    public function login(Request $request){
        $credentials = [
            'email' => $request->email,
            'password' => $request->password
        ];

       // si las credenciales son correctas muestra el usuario y el token
        if(auth()->attempt($credentials)){
            $token=auth()->user()->createToken('LaravelAuthApp')->accessToken;
            return response()->json(['token'=>$token, 'status'=>200,'user'=>auth()->user()]);
        }
        //si no, muestra un mensaje de error
        else{
            return response()->json(['error' => 'Unauthorized','status'=>401], 401);
        }
    }
}
