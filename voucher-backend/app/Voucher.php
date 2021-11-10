<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Voucher extends Model
{
protected $fillable=['CodeVoucher','Prix','NameVoucher','Description','file_image','DateExpiration'];

public function Categorie(){
    return $this->belongsTo(Categorie::class);
}
}
