<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Traits\ApiResponseTrait;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\QuestionResource;
use App\Http\Requests\StoreQuestionRequest;
use App\Http\Requests\UpdateQuestionRequest;

class QuestionController extends Controller
{
    use ApiResponseTrait;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return QuestionResource::collection(Question::all());
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreQuestionRequest $request)
    {
       $request->validated($request->all());

       Question::create([
        'title' => $request->title,
        'description' => $request->description,
        'author_id' => Auth::user()->id
       ]);

       return $this->successResponse(null, 'Question créée avec succès');
    }

    /**
     * Display the specified resource.
     */
    public function show(Question $question)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Question $question)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateQuestionRequest $request, Question $question)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Question $question)
    {
        //
    }
}
