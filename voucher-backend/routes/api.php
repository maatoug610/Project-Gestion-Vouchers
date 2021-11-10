<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VoucherController;
use App\Http\Controllers\CategorieController;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
/* Register */
Route::post('register',[UserController::class,'register']);
/* Login */
Route::post('login',[UserController::class,'login']); /* Route::post('name of route',['name of controller::class],'name of function'); */

/************************************* Vouchers ***********************************************8 */

/* Add Voucher */
Route::post('addVoucher',[VoucherController::class,'addVoucher']);
/*List Voucher */
Route::get('list',[voucherController::class,'list']);
/* Delete Voucher*/
Route::delete('delete/{id}',[VoucherController::class,'delete']);
/* Get Voucher */
Route::get('getvoucher/{id}',[VoucherController::class,'getVoucher']);
/* Update Voucher */
Route::put('updatevoucher/{id}',[VoucherController::class,'updateVoucher']);
/* Search Voucher*/
Route::get('search/{key}',[VoucherController::class,'Search']);

/************************************* Categories ***********************************************8 */
Route::post('addCategorie',[CategorieController::class,'AddCategorie']);
Route::get('listCategorie',[CategorieController::class,'CategorieList']);
Route::delete('deleteCategorie/{id}',[CategorieController::class,'CategorieDelete']);
Route::get('getCategorie/{id}',[CategorieController::class,'getCategorie']);
Route::put('updateCategorie/{categorie}',[CategorieController::class,'updateCategorie']);
Route::get('searchCategorie/{key}',[CategorieController::class,'searchCategorie']);
