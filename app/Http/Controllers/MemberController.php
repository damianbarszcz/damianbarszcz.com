<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\Project;
use App\Models\Review;
use App\Models\DraftProject;
use App\Models\DraftReview;

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
                        $pageTitle = 'Pulpit | Przegląd';
                        $pageDescryption = 'To mój blog osobisty, na którym dzielę się stworzonymi projektami, książkami które czytam i oczywiście tego czego się uczę. Mam nadzieję, że dołączysz do dyskusji.';
                        $pageImage = "obrazek";
                
                        return view('pages.member',['canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL, 'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption, 'pageImage' => $pageImage]);
                        break;
                        
                        case 'new-project':
                
                        $canPageUrl = 'https://account.damianbarszcz.com/new-project';
                        $altPageUrlPL = 'https://account.damianbarszcz.com/pl/new-project';
                        $pageAuthor = 'Damian Barszcz';
                        $pageTitle = 'Pulpit | Nowy projekt';
                        $pageDescryption = 'To mój blog osobisty, na którym dzielę się stworzonymi projektami, książkami które czytam i oczywiście tego czego się uczę. Mam nadzieję, że dołączysz do dyskusji.';
                        $pageImage = "obrazek";
                        
                        return view('pages.member',['canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL, 'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption, 'pageImage' => $pageImage]);
                        break;

                        case 'new-review':
                
                        $canPageUrl = 'https://account.damianbarszcz.com/new-review';
                        $altPageUrlPL = 'https://account.damianbarszcz.com/pl/new-review';
                        $pageAuthor = 'Damian Barszcz';
                        $pageTitle = 'Pulpit | Nowa recenzja';
                        $pageDescryption = 'To mój blog osobisty, na którym dzielę się stworzonymi projektami, książkami które czytam i oczywiście tego czego się uczę. Mam nadzieję, że dołączysz do dyskusji.';
                        $pageImage = "obrazek";
                                
                        return view('pages.member',['canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL, 'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption, 'pageImage' => $pageImage]);
                        break;

                        case 'reviews':
                
                        $canPageUrl = 'https://account.damianbarszcz.com/reviews';
                        $altPageUrlPL = 'https://account.damianbarszcz.com/pl/reviews';
                        $pageAuthor = 'Damian Barszcz';
                        $pageTitle = 'Pulpit | Recenzje';
                        $pageDescryption = 'To mój blog osobisty, na którym dzielę się stworzonymi projektami, książkami które czytam i oczywiście tego czego się uczę. Mam nadzieję, że dołączysz do dyskusji.';
                        $pageImage = "obrazek";
                                        
                        return view('pages.member',['canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL, 'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption, 'pageImage' => $pageImage]);
                        break;

                        case 'projects':
                
                        $canPageUrl = 'https://account.damianbarszcz.com/projects';
                        $altPageUrlPL = 'https://account.damianbarszcz.com/pl/projects';
                        $pageAuthor = 'Damian Barszcz';
                        $pageTitle = 'Pulpit| Projekty';
                        $pageDescryption = 'To mój blog osobisty, na którym dzielę się stworzonymi projektami, książkami które czytam i oczywiście tego czego się uczę. Mam nadzieję, że dołączysz do dyskusji.';
                        $pageImage = "obrazek";
                                                
                        return view('pages.member',['canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL, 'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption, 'pageImage' => $pageImage]);
                        break;

                        case 'drafts':
                
                        $canPageUrl = 'https://account.damianbarszcz.com/drafts';
                        $altPageUrlPL = 'https://account.damianbarszcz.com/pl/drafts';
                        $pageAuthor = 'Damian Barszcz';
                        $pageTitle = 'Pulpit | Szkice';
                        $pageDescryption = 'To mój blog osobisty, na którym dzielę się stworzonymi projektami, książkami które czytam i oczywiście tego czego się uczę. Mam nadzieję, że dołączysz do dyskusji.';
                        $pageImage = "obrazek";
                                                        
                        return view('pages.member',['canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL, 'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption, 'pageImage' => $pageImage]);
                        break;

                        case 'personal-info':
                
                        $canPageUrl = 'https://account.damianbarszcz.com/personal-info';
                        $altPageUrlPL = 'https://account.damianbarszcz.com/pl/personal-info';
                        $pageAuthor = 'Damian Barszcz';
                        $pageTitle = 'Pulpit | Dane personalne';
                        $pageDescryption = 'To mój blog osobisty, na którym dzielę się stworzonymi projektami, książkami które czytam i oczywiście tego czego się uczę. Mam nadzieję, że dołączysz do dyskusji.';
                        $pageImage = "obrazek";
        
                        return view('pages.member',['canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL, 'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption, 'pageImage' => $pageImage]);
                        break;

                        case 'statistics':
                
                        $canPageUrl = 'https://account.damianbarszcz.com/statistics';
                        $altPageUrlPL = 'https://account.damianbarszcz.com/pl/statistics';
                        $pageAuthor = 'Damian Barszcz';
                        $pageTitle = 'Pulpit | Statystyka';
                        $pageDescryption = 'To mój blog osobisty, na którym dzielę się stworzonymi projektami, książkami które czytam i oczywiście tego czego się uczę. Mam nadzieję, że dołączysz do dyskusji.';
                        $pageImage = "obrazek";
        
                        return view('pages.member',['canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL, 'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption, 'pageImage' => $pageImage]);
                        break;

                        case 'calendar':
                
                        $canPageUrl = 'https://account.damianbarszcz.com/calendar';
                        $altPageUrlPL = 'https://account.damianbarszcz.com/pl/calendar';
                        $pageAuthor = 'Damian Barszcz';
                        $pageTitle = 'Pulpit | Kalendarz';
                        $pageDescryption = 'To mój blog osobisty, na którym dzielę się stworzonymi projektami, książkami które czytam i oczywiście tego czego się uczę. Mam nadzieję, że dołączysz do dyskusji.';
                        $pageImage = "obrazek";
                
                        return view('pages.member',['canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL, 'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption, 'pageImage' => $pageImage]);
                        break;

                        case 'about-application':
                
                        $canPageUrl = 'https://account.damianbarszcz.com/about-application';
                        $altPageUrlPL = 'https://account.damianbarszcz.com/pl/about-application';
                        $pageAuthor = 'Damian Barszcz';
                        $pageTitle = 'Pulpit | O aplikacji';
                        $pageDescryption = 'To mój blog osobisty, na którym dzielę się stworzonymi projektami, książkami które czytam i oczywiście tego czego się uczę. Mam nadzieję, że dołączysz do dyskusji.';
                        $pageImage = "obrazek";

                        return view('pages.member',['canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL, 'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption, 'pageImage' => $pageImage]);
                        break;
                }
        }

         /*
        ==============================
         Display single project in edit mode
        ==============================
        */
        public function  projectEditView($slug){
               $pub_url = basename($slug);
    
                $project_record = Project::where('pub_url', $pub_url)->firstOrFail();
    
                $p_title = $project_record['pub_title'];  $p_subtitle = $project_record['pub_subtitle']; $p_url= $project_record['pub_url']; $p_background= $project_record['pub_picture'];
    
                $canPageUrl = 'https://account.damianbarszcz.com/member/projects/edit/'. $p_url;
                $altPageUrlPL = 'https://account.damianbarszcz.com/pl/member/projects/edit/'. $p_url;
                $pageAuthor = 'Damian Barszcz';
                $pageTitle = $p_title . " | Edytuj projekt";
                $pageDescryption = $p_subtitle;
                $pageImage = $p_background;
    
                return view('pages.member',['canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL, 'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption, 'pageImage' => $pageImage]);
         }

        /*
        ==============================
         Display single review in edit mode
        ==============================
        */
        public function  reviewEditView($slug){
                $pub_url = basename($slug);
     
                 $project_record = Review::where('pub_url', $pub_url)->firstOrFail();
     
                 $p_title = $project_record['pub_title'];  $p_subtitle = $project_record['pub_subtitle']; $p_url= $project_record['pub_url']; $p_background= $project_record['pub_picture'];
     
                 $canPageUrl = 'https://account.damianbarszcz.com/member/reviews/edit/'. $p_url;
                 $altPageUrlPL = 'https://account.damianbarszcz.com/pl/member/reviews/edit/'. $p_url;
                 $pageAuthor = 'Damian Barszcz';
                 $pageTitle = $p_title . " | Edytuj recenzje";
                 $pageDescryption = $p_subtitle;
                 $pageImage = $p_background;
     
                 return view('pages.member',['canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL, 'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption, 'pageImage' => $pageImage]);
          }

        /*
        ==============================
         Display a project draft
        ==============================
        */
        public function  projectDraftView($slug){
                $pub_url = basename($slug);
    
                $project_record = DraftProject::where('pub_url', $pub_url)->firstOrFail();

                $p_title = $project_record['pub_title'];  $p_subtitle = $project_record['pub_subtitle']; $p_url= $project_record['pub_url']; $p_background= $project_record['pub_picture'];

                $canPageUrl = 'https://account.damianbarszcz.com/member/projects/draft/'. $p_url;
                $altPageUrlPL = 'https://account.damianbarszcz.com/pl/member/projects/draft/'. $p_url;
                $pageAuthor = 'Damian Barszcz';
                $pageTitle = $p_title . " | Szkic projektu";
                $pageDescryption = $p_subtitle;
                $pageImage = $p_background;
    
                return view('pages.member', [  'canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL,  'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption,  'pageImage' => $pageImage  ]);
        }

        /*
        ==============================
         Display a review draft
        ==============================
        */
        public function  reviewDraftView($slug){

                $pub_url = basename($slug);

                $review_record = DraftReview::where('pub_url', $pub_url)->firstOrFail();
     
                $r_title = $review_record['pub_title'];  $r_subtitle = $review_record['pub_subtitle']; $r_url = $review_record['pub_url']; $r_background= $review_record['pub_picture'];

                $canPageUrl = 'https://account.damianbarszcz.com/member/reviews/draft/' .  $r_url ;
                $altPageUrlPL = 'https://account.damianbarszcz.com/pl/member/reviews/draft/' .  $r_url ;
                $pageAuthor = 'Damian Barszcz';
                $pageTitle = $r_title . " | Szkic recenzji";
                $pageDescryption = $r_subtitle;
                $pageImage = $r_background;

                 return view('pages.member',['canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL, 'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption, 'pageImage' => $pageImage]);
          }
}
