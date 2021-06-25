@extends('master')

@section('head')
    @section('canPageUrl',  $canPageUrl)
    @section('altPageUrlPL',$altPageUrlPL)
    @section('pageAuthor', $pageAuthor)
    @section('pageTitle', $pageTitle)
    @section('pageDescryption', $pageDescryption)
    @section('pageImage', $pageImage)

    @include('layouts.head')
@endsection

@section('basic-root') 
        <div id="basic-root"> </div> 
@endsection
