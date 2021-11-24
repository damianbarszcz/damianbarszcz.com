<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
    <!--  Meta Data  -->
    <meta charset="utf-8">
    <meta name="theme-color" content="#161B20">
    <meta name="google-site-verification" content="rtNHSTZf1Z5yGPdhBXhfmTafPqX6mFFH5LAShsQo6Y0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="@yield('pageDescryption')">
    <meta name="author" content="@yield('pageAuthor')">
    <meta name="twitter:title" content="@yield('pageTitle')">
    <meta name="twitter:description" content="@yield('pageDescryption')">
    <meta name="twitter:image" content="@yield('pageImage')">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@damianbarszcz">
    <meta property="fb:app_id" content="2212991682152973">
    <meta property="og:type" content="website">
    <meta property="og:url" content="@yield('canPageUrl')">
    <meta property="og:title" content="@yield('pageTitle')">
    <meta property="og:description" content="@yield('pageDescryption')">
    <meta property="og:image" content="@yield('pageImage')">

    <title> @yield('pageTitle') </title>

    <!--  Favicons  -->
    <link rel="icon" sizes="192x192" href="{{ mix('images/favicons/DB_favicon_192.png') }}">
    <link rel="shortcut icon" href="{{ mix('images/favicons/DB_favicon_72.png') }}">
    <link rel="apple-touch-icon" href="{{ mix('images/favicons/DB_favicon_72.png') }}">
    <link rel="apple-touch-icon" sizes="72x72" href="{{ mix('images/favicons/DB_favicon_72.png') }}">
    <link rel="apple-touch-icon" sizes="144x144" href="{{ mix('images/favicons/DB_favicon_144.png') }}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ mix('images/favicons/DB_favicon_180.png') }}">

    <!--  Stylesheets  -->
    <link rel="stylesheet" href="{{ url(mix('css/app.css')) }}">

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-T4TDZHG');</script>

    <!--  Scripts  -->
    <script async src="{{ url(mix('js/app.js')) }}"></script>
</head>

<body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T4TDZHG"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    @yield('basic-root') @yield('auth-root') @yield('member-root') 
</body>

</html>
