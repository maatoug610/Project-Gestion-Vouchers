<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Voucher;
class VoucherController extends Controller
{
   
    //Add:
    function addVoucher(Request $req){
        $voucher = new Voucher;
        $voucher->Prix=$req->input('Prix');
        $voucher->CodeVoucher=$req->input('CodeVoucher');
        $voucher->NameVoucher=$req->input('NameVoucher');
        $voucher->Description=$req->input('Description');
        $voucher->file_image=$req->file('file_image')->store('vouchers');
        $voucher->DateExpiration=$req->input('DateExpiration');
        $voucher->Categorie_id=$req->input('Categorie_id');
        $voucher->save();
        return $voucher;
    }

    //List:
    function list(){
        return Voucher::all();
    }

    //Delete :
    function delete($id){
        $result = Voucher::where('id',$id)->delete();
        if($result){
            return ["result"=>"Voucher has been delete"];
        }
        else{
            return ["result"=>"Operation failed !!!!"];
        }
    }

    //Get Voucher:
    function getVoucher($id){
        return Voucher::find($id);
    }

    //update Voucher:

    function updateVoucher($id, Request $req ){
        $voucher = Voucher::find($id);
        $voucher->Prix= $req->input('Prix');
        $voucher->CodeVoucher = $req->input('CodeVoucher');
        $voucher->NameVoucher = $req->input('NameVoucher');
        $voucher->Description = $req->input('Description');
        $voucher->DateExpiration = $req->input('DateExpiration');
        if($req->file('file_image')){
            $voucher->file_image->file('file_image')->store('vouchers');
        }
        $voucher->save();
        return $voucher;

    }

    //Search :
    function Search($key){
        return Voucher::where('NameVoucher','Like',"%$key%")->get();
    }
}
