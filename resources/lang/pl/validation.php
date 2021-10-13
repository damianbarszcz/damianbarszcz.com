<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'first_name' => [  'required' => 'Podaj imię.', 'min' => 'Imię musi mieć co najmniej 3 znaki.', 'max' => 'Imię może mieć maksymalnie 50 znaków.'],
        
        'last_name' => [  'required' => 'Podaj nazwisko.' , 'min' => 'Nazwisko musi mieć co najmniej 3 znaki.', 'max' => 'Nazwisko może mieć maksymalnie 50 znaków.'],
       
        'email_address' => [  'required' => 'Podaj adres email.', 'email' => 'Podaj poprawny format adresu email.' ],
        
        'subject' => [  'required' => 'Podaj temat wiadomości.', 'min' => 'Temat wiadmości musi mieć co najmniej 3 znaki', 'max' => 'Temat wiadmości  może mieć maksymalnie 255 znaków.'],
        
        'message' => [  'required' => 'Podaj treść wiadomości.', 'min' => 'Treść wiadomości musi składać się z co najmniej 100 znaków', ],
        
        'recaptcha' => [  'required' => 'To pole jest wymagane.' ],
        
        'email' => [ 'required' => 'Podaj swój adres email.' ,'email' => 'Niepoprawny format adresu email.' ],
        
        'password' => [ 'required' => 'Podaj swoje hasło.' ],

        'pub_title' => [ 
            'required' => 'Podaj tytuł artykułu.', 
            'min' => 'Tytuł artykułu musi składać się z co najmniej :min znaków', 
            'max' => 'Tytuł artykułu może składać się maksymalnie z :max znaków.' 
        ],

        'pub_subtitle' => [ 
            'required' => 'Podaj podtytuł artykułu.',
            'min' => 'Podtytuł artykułu musi składać się z co najmniej :min znaków',  
            'max' => 'Podtytuł artykułu może składać się maksymalnie z :max znaków.' 
        ],

        'pub_body' => [ 
            'required' => 'Podaj treść artykułu.',  
            'min' => 'Treść artykułu musi składać się z co najmniej :min  znaków'
         ],

        'pub_tags' => [ 'required' => 'Podaj tagi artykułu.' ],

        'pub_picture' => [ 'required' => 'Podaj obrazek artykułu.' ],

        'pub_category' => [ 'required' => 'Podaj kategorie artykułu.' ],
    ],
];
