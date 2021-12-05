@extends('master')

@section('head')
    @section('canPageUrl',  'https://auth.damianbarszcz.com/auth/sign-in')
    @section('altPageUrlPL','https://auth.damianbarszcz.com/pl/auth/sign-in')
    @section('pageAuthor', 'Damian Barszcz')
    @section('pageTitle', 'Sign In | Damian Barszcz')
    @section('pageDescryption', 'Login to your account.')
    @section('pageImage', 'obrazek')
@endsection

@section('auth-root')
    <div id="auth-root"></div>
@endsection
