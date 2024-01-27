<?php

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/test', function(){
    $data = ['name' => 'John', 'email' => 'yandex@example.com'];
    return response()->json($data);
});

Route::post('/add-new-category', function(Request $request){
    $category = new Category;
    $category->title = $request->input('title');
    $category->img = $request->input('img');
    $category->save();
    return response()->json($category);
});

Route::get('/get-categories', function(){
    $category = Category::all();
    $data = array();
    foreach ($category as $item){
        $data[] = array(
            'id'=>$item->id,
            'title'=>$item->title,
            'img'=>$item->img
        );
    }
    return response()->json($data);
});
