<?php

namespace App\Http\Controllers;
use App\Categorie;
use Illuminate\Http\Request;

class CategorieController extends Controller
{
     function AddCategorie(Request $req){
         $categorie = new Categorie;
         $categorie->NameCategorie = $req->input('NameCategorie');
         $categorie->save();
         return $categorie;
    }

    function CategorieList(){
        return Categorie::all();
    }

    function CategorieDelete($id){
        $result = Categorie::where('id',$id)->delete();

        if($result){
            return ["result"=>"Categorie has been deleted"];
        }
        else{
            return ["result"=>"Operation Failed !!!!!"];

        }
    }

    function getCategorie($id){
        return Categorie::find($id);
    }

    function updateCategorie(Request $request){
        $id=$request->id;
        $categorie = Categorie::find($id);
        $categorie->NameCategorie = $request->NameCategorie;
        if($categorie -> save()){
            return response()->json(["status" => 200]);
        }
        // $categorie->update(['NameCategorie' => $request->input('NameCategorie')]);
        //return ["message"=>"Data has been Updated",$categorie,$request->all()];
    }

    function searchCategorie($key){
        return Categorie::where('NameCategorie','Like',"%$key%")->get();
    }

}
