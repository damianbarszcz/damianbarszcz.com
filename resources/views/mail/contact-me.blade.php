
@component('mail::message')
        <div class="mail-contact">
                <div class="mail-contact__artwork">
                        <img src="https://drive.google.com/file/d/1-8Uonvq89v2GU5IjVPYcaxe0ukmM5G49/view?usp=sharing" alt="Blog brand" />
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
