
<!--  Meta Data  -->
    <meta charset="utf-8">
    <meta name="google-site-verification" content="rtNHSTZf1Z5yGPdhBXhfmTafPqX6mFFH5LAShsQo6Y0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="@yield('pageDescryption')">
    <meta name="author" content="@yield('pageAuthor')">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:url" content="@yield('canPageUrl')">
    <meta name="twitter:title" content="@yield('pageTitle')">
    <meta name="twitter:description" content="@yield('pageDescryption')">
    <meta name="twitter:image" content="@yield('pageImage')">
    <meta property="fb:app_id" content="2212991682152973">
    <meta property="og:type" content="website">
    <meta property="og:url" content="@yield('canPageUrl')">
    <meta property="og:title" content="@yield('pageTitle')">
    <meta property="og:description" content="@yield('pageDescryption')">
    <meta property="og:image" content="@yield('pageImage')">
    <!--  Favicons  -->
    <link rel="icon" type="image/png" href="{{ mix('images/favicons/favicon.png') }}">
    <link rel="apple-touch-icon" href="{{ mix('images/favicons/favicon.png') }}">
    <title> @yield('pageTitle') </title>
    <!--  Stylesheets  -->
    {!! Minify::stylesheet(['css/app.css']) !!}

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-T4TDZHG');</script>
