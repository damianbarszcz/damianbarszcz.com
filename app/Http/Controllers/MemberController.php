<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class MemberController extends Controller{

        public function __construct(){
            $this->middleware('auth');
        }

        /*
        ===============================
        Display member views
        ===============================
        */
        public function memberView($slug){
                switch($slug){
                        case 'overview':
                
                        $canPageUrl = 'https://account.damianbarszcz.com/overview';
                        $altPageUrlPL = 'https://account.damianbarszcz.com/pl/overview';
                        $pageAuthor = 'Damian Barszcz';
                        $pageTitle = 'Dashboard | Overview';
                        $pageDescryption = 'To mój blog osobisty, na którym dzielę się stworzonymi projektami, książkami które czytam i oczywiście tego czego się uczę. Mam nadzieję, że dołączysz do dyskusji.';
                        $pageImage = "obrazek";
                
                        return view('pages.member',['canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL, 'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption, 'pageImage' => $pageImage]);
                        break;
                        
                        case 'new-project':
                
                        $canPageUrl = 'https://account.damianbarszcz.com/new-project';
                        $altPageUrlPL = 'https://account.damianbarszcz.com/pl/new-project';
                        $pageAuthor = 'Damian Barszcz';
                        $pageTitle = 'Dashboard | New project';
                        $pageDescryption = 'To mój blog osobisty, na którym dzielę się stworzonymi projektami, książkami które czytam i oczywiście tego czego się uczę. Mam nadzieję, że dołączysz do dyskusji.';
                        $pageImage = "obrazek";
                        
                        return view('pages.member',['canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL, 'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption, 'pageImage' => $pageImage]);
                        break;

                        case 'new-review':
                
                        $canPageUrl = 'https://account.damianbarszcz.com/new-review';
                        $altPageUrlPL = 'https://account.damianbarszcz.com/pl/new-review';
                        $pageAuthor = 'Damian Barszcz';
                        $pageTitle = 'Dashboard | New review';
                        $pageDescryption = 'To mój blog osobisty, na którym dzielę się stworzonymi projektami, książkami które czytam i oczywiście tego czego się uczę. Mam nadzieję, że dołączysz do dyskusji.';
                        $pageImage = "obrazek";
                                
                        return view('pages.member',['canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL, 'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption, 'pageImage' => $pageImage]);
                        break;

                        case 'reviews':
                
                        $canPageUrl = 'https://account.damianbarszcz.com/reviews';
                        $altPageUrlPL = 'https://account.damianbarszcz.com/pl/reviews';
                        $pageAuthor = 'Damian Barszcz';
                        $pageTitle = 'Dashboard | Reviews';
                        $pageDescryption = 'To mój blog osobisty, na którym dzielę się stworzonymi projektami, książkami które czytam i oczywiście tego czego się uczę. Mam nadzieję, że dołączysz do dyskusji.';
                        $pageImage = "obrazek";
                                        
                        return view('pages.member',['canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL, 'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption, 'pageImage' => $pageImage]);
                        break;

                        case 'projects':
                
                        $canPageUrl = 'https://account.damianbarszcz.com/projects';
                        $altPageUrlPL = 'https://account.damianbarszcz.com/pl/projects';
                        $pageAuthor = 'Damian Barszcz';
                        $pageTitle = 'Dashboard | Projects';
                        $pageDescryption = 'To mój blog osobisty, na którym dzielę się stworzonymi projektami, książkami które czytam i oczywiście tego czego się uczę. Mam nadzieję, że dołączysz do dyskusji.';
                        $pageImage = "obrazek";
                                                
                        return view('pages.member',['canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL, 'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption, 'pageImage' => $pageImage]);
                        break;

                        case 'drafts':
                
                        $canPageUrl = 'https://account.damianbarszcz.com/drafts';
                        $altPageUrlPL = 'https://account.damianbarszcz.com/pl/drafts';
                        $pageAuthor = 'Damian Barszcz';
                        $pageTitle = 'Dashboard | Drafts';
                        $pageDescryption = 'To mój blog osobisty, na którym dzielę się stworzonymi projektami, książkami które czytam i oczywiście tego czego się uczę. Mam nadzieję, że dołączysz do dyskusji.';
                        $pageImage = "obrazek";
                                                        
                        return view('pages.member',['canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL, 'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption, 'pageImage' => $pageImage]);
                        break;

                        case 'personal-info':
                
                        $canPageUrl = 'https://account.damianbarszcz.com/personal-info';
                        $altPageUrlPL = 'https://account.damianbarszcz.com/pl/personal-info';
                        $pageAuthor = 'Damian Barszcz';
                        $pageTitle = 'Dashboard | Personal info';
                        $pageDescryption = 'To mój blog osobisty, na którym dzielę się stworzonymi projektami, książkami które czytam i oczywiście tego czego się uczę. Mam nadzieję, że dołączysz do dyskusji.';
                        $pageImage = "obrazek";
        
                        return view('pages.member',['canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL, 'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption, 'pageImage' => $pageImage]);
                        break;

                        case 'statistics':
                
                        $canPageUrl = 'https://account.damianbarszcz.com/statistics';
                        $altPageUrlPL = 'https://account.damianbarszcz.com/pl/statistics';
                        $pageAuthor = 'Damian Barszcz';
                        $pageTitle = 'Dashboard | Statistics';
                        $pageDescryption = 'To mój blog osobisty, na którym dzielę się stworzonymi projektami, książkami które czytam i oczywiście tego czego się uczę. Mam nadzieję, że dołączysz do dyskusji.';
                        $pageImage = "obrazek";
        
                        return view('pages.member',['canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL, 'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption, 'pageImage' => $pageImage]);
                        break;

                        case 'calendar':
                
                        $canPageUrl = 'https://account.damianbarszcz.com/calendar';
                        $altPageUrlPL = 'https://account.damianbarszcz.com/pl/calendar';
                        $pageAuthor = 'Damian Barszcz';
                        $pageTitle = 'Dashboard | Calendar';
                        $pageDescryption = 'To mój blog osobisty, na którym dzielę się stworzonymi projektami, książkami które czytam i oczywiście tego czego się uczę. Mam nadzieję, że dołączysz do dyskusji.';
                        $pageImage = "obrazek";
                
                        return view('pages.member',['canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL, 'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption, 'pageImage' => $pageImage]);
                        break;

                        case 'about-application':
                
                        $canPageUrl = 'https://account.damianbarszcz.com/about-application';
                        $altPageUrlPL = 'https://account.damianbarszcz.com/pl/about-application';
                        $pageAuthor = 'Damian Barszcz';
                        $pageTitle = 'Dashboard | About application';
                        $pageDescryption = 'To mój blog osobisty, na którym dzielę się stworzonymi projektami, książkami które czytam i oczywiście tego czego się uczę. Mam nadzieję, że dołączysz do dyskusji.';
                        $pageImage = "obrazek";

                        return view('pages.member',['canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL, 'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption, 'pageImage' => $pageImage]);
                        break;
                }
        }
}
