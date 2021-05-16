<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReviewDraftsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('review_drafts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->string('pub_title', 55)->unique();
            $table->string('pub_subtitle', 150)->nullable();
            $table->longText('pub_body')->nullable();
            $table->string('pub_picture')->nullable();
            $table->string('pub_tags')->nullable();
            $table->string('pub_category')->nullable();
            $table->string('pub_url');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('review_drafts');
    }
}
