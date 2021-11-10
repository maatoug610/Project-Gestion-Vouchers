<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;
use Auth;
class UserController extends Controller
{
  
    function register(Request $req){
        $user = new User;
        $user->name = $req->input('name');
        $user->email = $req->input('email');
        $user->password = Hash::make($req->input('password'));
        $user->save();
        return $user;
    }

    public function login(Request $request)
    {
      
        $attr = $request->validate([
            'email' => 'required|string|email|',
            'password' => 'required|string|min:6'
        ]);

        if (!Auth::attempt($attr)) {
            return response(['message'=>'Credentials not match','status' =>'404']);
        }

        return response(['data'=>auth()->user(),'status' =>'200']);
    }

}
