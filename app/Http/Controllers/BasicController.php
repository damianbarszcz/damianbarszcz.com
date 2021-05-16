<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\Review;

class BasicController extends Controller{

        /*
        ===============================
        Display  index view
        ===============================
        */
        public function indexView(){
                $canPageUrl = 'https://www.damianbarszcz.com/';
                $altPageUrlPL = 'https://www.damianbarszcz.com/pl/';
                $pageAuthor = 'Damian Barszcz';
                $pageTitle = 'Damian Barszcz | Blog Personalny';
                $pageDescryption = 'To mój blog osobisty, na którym dzielę się stworzonymi projektami, książkami które czytam i oczywiście tego czego się uczę. Mam nadzieję, że dołączysz do dyskusji.';
                $pageImage = "obrazek";

                return view('pages.index',  ['canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL, 'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption, 'pageImage' => $pageImage]);
        }

        /*
        ===============================
        Display  basic views
        ===============================
        */
        public function basicView($slug){

                switch($slug){
                        case 'projects':
                
                        $canPageUrl = 'https://www.damianbarszcz.com/projects';
                        $altPageUrlPL = 'https://www.damianbarszcz.com/pl/projects';
                        $pageAuthor = 'Damian Barszcz';
                        $pageTitle = 'Projekty | Strefa najlepszych rozwiązań';
                        $pageDescryption = 'To mój blog osobisty, na którym dzielę się stworzonymi projektami, książkami które czytam i oczywiście tego czego się uczę. Mam nadzieję, że dołączysz do dyskusji.';
                        $pageImage = "obrazek";

                        return view('pages.index',['canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL, 'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption, 'pageImage' => $pageImage]);
                        break;
                        
                        case 'library':

                        $canPageUrl = 'https://www.damianbarszcz.com/library';
                        $altPageUrlPL = 'https://www.damianbarszcz.com/pl/library';
                        $pageAuthor = 'Damian Barszcz';
                        $pageTitle = 'Biblioteka | Dowiedz się więcej o książkach';
                        $pageDescryption = 'To mój blog osobisty, na którym dzielę się stworzonymi projektami, książkami które czytam i oczywiście tego czego się uczę. Mam nadzieję, że dołączysz do dyskusji.';
                        $pageImage = "obrazek";
                        return view('pages.index',['canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL, 'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption, 'pageImage' => $pageImage]);
                        break;
                        
                        case 'contact':

                        $canPageUrl = 'https://www.damianbarszcz.com/contact';
                        $altPageUrlPL = 'https://www.damianbarszcz.com/pl/contact';
                        $pageAuthor = 'Damian Barszcz';
                        $pageTitle = 'Kontakt | Damian Barszcz';
                        $pageDescryption = 'To mój blog osobisty, na którym dzielę się stworzonymi projektami, książkami które czytam i oczywiście tego czego się uczę. Mam nadzieję, że dołączysz do dyskusji.';
                        $pageImage = "obrazek";
                        return view('pages.index',['canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL, 'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption, 'pageImage' => $pageImage]);
                        break;

                        case 'about':

                        $canPageUrl = 'https://www.damianbarszcz.com/about';
                        $altPageUrlPL = 'https://www.damianbarszcz.com/pl/about';
                        $pageAuthor = 'Damian Barszcz';
                        $pageTitle = 'O mnie | Damian Barszcz';
                        $pageDescryption = 'To mój blog osobisty, na którym dzielę się stworzonymi projektami, książkami które czytam i oczywiście tego czego się uczę. Mam nadzieję, że dołączysz do dyskusji.';
                        $pageImage = "obrazek";

                        return view('pages.index',['canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL, 'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption, 'pageImage' => $pageImage]);
                        break;

                        case 'privacy':

                        $canPageUrl = 'https://www.damianbarszcz.com/privacy';
                        $altPageUrlPL = 'https://www.damianbarszcz.com/pl/privacy';
                        $pageAuthor = 'Damian Barszcz';
                        $pageTitle = 'Polityka prywatności | Damian Barszcz';
                        $pageDescryption = 'To mój blog osobisty, na którym dzielę się stworzonymi projektami, książkami które czytam i oczywiście tego czego się uczę. Mam nadzieję, że dołączysz do dyskusji.';
                        $pageImage = "obrazek";
        
                        return view('pages.index',['canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL, 'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption, 'pageImage' => $pageImage]);
                        break;
                }
        }

        /*
        ===============================
        Display single project article view 
        ===============================
        */
        public function singleProjectView($slug){
                $pub_url = basename($slug);

                $project_record = Project::where('pub_url',$pub_url)->first();

                $p_title = $project_record['pub_title'];  $p_subtitle = $project_record['pub_subtitle']; $p_url= $project_record['pub_url']; $p_picture = $project_record['pub_picture'];
                
                $canPageUrl = 'https://www.damianbarszcz.com/project/' . $p_url;
                $altPageUrlPL = 'https://www.damianbarszcz.com/pl/project/' . $p_url;
                $pageAuthor = 'Damian Barszcz';
                $pageTitle = $p_title;
                $pageDescryption = $p_subtitle;
                $pageImage = $p_picture;
        
                 return view('pages.index',['canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL, 'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption, 'pageImage' => $pageImage]);
        }

        /*
        ===============================
        Display single review  article view
        ===============================
        */
        public function singleReviewView($slug){
                $pub_url = basename($slug);

                $project_record = Review::where('pub_url',$pub_url)->first();

                $p_title = $project_record['pub_title'];  $p_subtitle = $project_record['pub_subtitle']; $p_url= $project_record['pub_url']; $p_picture = $project_record['pub_picture'];
                
                $canPageUrl = 'https://www.damianbarszcz.com/review/' . $p_url;
                $altPageUrlPL = 'https://www.damianbarszcz.com/pl/review/' . $p_url;
                $pageAuthor = 'Damian Barszcz';
                $pageTitle = $p_title;
                $pageDescryption = $p_subtitle;
                $pageImage = $p_picture;
        
                 return view('pages.index',['canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL, 'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption, 'pageImage' => $pageImage]);
        }

        /*
        ===============================
        Display searched results
        ===============================
        */
        public function searchView(){
                $canPageUrl = 'https://www.damianbarszcz.com/help/';
                $altPageUrlPL = 'https://www.damianbarszcz.com/pl/help/';
                $pageAuthor = 'Damian Barszcz';
                $pageTitle = 'Wyszukiwanie | Damian Barszcz';
                $pageDescryption = 'To mój blog osobisty, na którym dzielę się stworzonymi projektami, książkami które czytam i oczywiście tego czego się uczę. Mam nadzieję, że dołączysz do dyskusji.';
                $pageImage = "obrazek";

                return view('pages.search',['canPageUrl' => $canPageUrl, 'altPageUrlPL' => $altPageUrlPL, 'pageAuthor' => $pageAuthor, 'pageTitle' => $pageTitle, 'pageDescryption' => $pageDescryption, 'pageImage' => $pageImage]);
        }
}
