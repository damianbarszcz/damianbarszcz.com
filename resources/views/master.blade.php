<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>

@yield('head')

</head>

<body>
    @yield('basic-root') @yield('auth-root') @yield('member-root') 
</body>

</html>
