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

        'project_title' => [ 'required' => 'Podaj tytuł projektu.' ],

        'project_subtitle' => [ 'required' => 'Podaj podtytuł projektu.' ],

        'project_body' => [ 'required' => 'Podaj treść artykułu projektu.' ],

        'project_tags' => [ 'required' => 'Podaj tagi projektu.' ],

        'project_picture' => [ 'required' => 'Podaj obrazek artykułu projektu.' ],
    ],
];
