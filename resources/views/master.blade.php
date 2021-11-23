<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>

@yield('head')

</head>

<body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T4TDZHG"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    @yield('basic-root') @yield('auth-root') @yield('member-root') 

    <!--  Scripts  -->
    {!! Minify::javascript(['js/app.js']) !!}
</body>

</html>
