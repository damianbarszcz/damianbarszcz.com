@extends('master')

@section('head')
    @section('canPageUrl',  'https://auth.damianbarszcz.com/sign-in')
    @section('altPageUrlPL','https://auth.damianbarszcz.com/pl/sign-in')
    @section('pageAuthor', 'Damian Barszcz')
    @section('pageTitle', 'Sign In | Damian Barszcz')
    @section('pageDescryption', 'Login to your account.')
    @section('pageImage', 'obrazek')

    @include('layouts.head')
@endsection

@section('auth-root')
<div id="auth-root"></div>
@endsection
