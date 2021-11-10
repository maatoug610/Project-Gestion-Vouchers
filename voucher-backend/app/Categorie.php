<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{
    protected $fillable=['NameCategorie'];
    
    public function Voucher(){
        return $this->hasMany(Voucher::class);
    }
}
