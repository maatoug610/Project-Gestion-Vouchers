<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVouchersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vouchers', function (Blueprint $table) {
            $table->id();
            $table->float('Prix');
            $table->string('CodeVoucher')->unique();
            $table->string('NameVoucher');
            $table->string('Description');
            $table->string('file_image');
            $table->string('DateExpiration');
            $table->bigInteger('Categorie_id')->unsigned()->index();
            $table->foreign('Categorie_id')->references('id')->on('categories');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('table_vouchers');
    }
}
