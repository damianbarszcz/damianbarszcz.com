@extends('master')

@section('head')
        @section('canPageUrl',  $canPageUrl)
        @section('altPageUrlPL',$altPageUrlPL)
        @section('pageAuthor', $pageAuthor)
        @section('pageTitle', $pageTitle)
        
        @if ($pageDescryption != null)  @section('pageDescryption',  $pageDescryption) @endif
        
        @if ($pageImage != null) @section('pageImage', $pageImage)   @endif
@endsection

@section('member-root') 
        <div id="member-root"> </div> 
@endsection
