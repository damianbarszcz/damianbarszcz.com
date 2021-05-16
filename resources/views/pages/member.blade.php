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

@section('member-root') 
        <div id="member-root">
                <script>
                        ( function() {
                        var d = document, s = d.createElement('script');
                        s.src = 'https://localhost-wqc5femcrw.disqus.com/embed.js';
                        s.setAttribute('data-timestamp', +new Date());
                        (d.head || d.body).appendChild(s);
                        })();
                </script>
                        
                <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
        </div> 
@endsection
