
@component('mail::message')
        <div class="mail-contact">
                <div class="mail-contact__artwork">
                        <img src="https://damianbarszcz.com/images/favicons/favicon.png?id=4f1ef41279f3f5f782ee"  width="128" height="128" alt="Blog brand" />
                </div>
                <header class="mail-contact__header"> 
                        <h2 class="mail-contact__header--name">  Imię i nazwisko:  <strong> {{ $first_name }} {{ $last_name }} </strong> </h2>
                        <h2 class="mail-contact__header--email"> Adres e-mail:  <strong> {{ $email }} </strong> </h2>
                </header>
                <div class="mail-contact__message">
                        <h1  class="mail-contact__message--subject"> {{ $subject }} </h1>
                        <p class="mail-contact__message--desc"> {{ $message }} </p>
                </div>
        </div>
@endcomponent
