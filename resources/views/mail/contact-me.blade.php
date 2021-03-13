
@component('mail::message')
        <div class="mail-contact">
                <header class="mail-contact__header"> 
                        <h2 class="mail-contact__header--name">  Name:  <strong> {{ $first_name }} {{ $last_name }} </strong> </h2>

                        <h2 class="mail-contact__header--email"> Email:  <strong> {{ $email }} </strong> </h2>
                </header>

                <div class="mail-contact__message">
                        <h1  class="mail-contact__message--subject"> {{ $subject }} </h1>

                        <p class="mail-contact__message--desc"> {{ $message }} </p>
                </div>
        </div>
@endcomponent
