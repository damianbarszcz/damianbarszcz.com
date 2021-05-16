import  React from 'react';

const PrivacySection = () => {

   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
                    {  /*----------------------------------------*/   }
                    {  /*--------            Privacy         -------*/   }
                    {  /*----------------------------------------*/   }    
                    <section className="privacy privacy_theme">
                            <div className="privacy__block g-container">
                                    <div className="privacy__inner">
                                        <div className="privacy__inner-item">
                                                <h1 className="privacy__inner-item--title">Polityka prywatności</h1>

                                                <p className="privacy__inner-item--desc">
                                                        Niniejsza polityka prywatności i plików cookies opisuje zasady postępowania z danymi osobowymi 
                                                        oraz wykorzystywania plików cookies i innych technologii w ramach strony internetowej <a href="https://damianbarszcz.com"> https://damianbarszcz.com</a>.
                                                         Administratorem strony jest Damian Barszcz bedący również twórcą strony. Kontakt z administratorem możliwy pod adresem e-mail <strong>contact@damianbarszcz.com</strong>
                                                </p>
                                        </div>
                                        
                                        <div className="privacy__inner-item">
                                                <h2 className="privacy__inner-item--title">§1 Definicje</h2>

                                                <p className="privacy__inner-item--desc">
                                                        1.Na potrzeby niniejszej polityki prywatności, przyjmuje się następujące znaczenie poniższych pojęć:
                                                        <br/>a) <strong>Administrator</strong> – Damian Barszcz, twórca bloga personalnego.
                                                        <br/>b) <strong>Strona</strong> – strona internetowa dostępna pod adresem   <a href="https://damianbarszcz.com"> https://damianbarszcz.com</a>.
                                                        <br/>c) <strong>Użytkownik</strong> – każdy podmiot, który korzysta ze Strony.
                                                </p>
                                        </div>

                                        <div className="privacy__inner-item">
                                                <h2 className="privacy__inner-item--title">§2 Dane osobowe</h2>

                                                <p className="privacy__inner-item--desc">
                                                        1. Użytkownik może przekazywać swoje dane osobowe Administratorowi za pomocą formularzy dostępnych na Stronie, takich jak newsletter.
                                                        <br/>2. Administratorem danych osobowych Użytkownika jest Administrator.
                                                        <br/>3. Dane przekazane Administratorowi w ramach formularza newsletter przetwarzane są w celu informacji o nowościach.
                                                        <br/>4. Administrator gwarantuje poufność wszelkich przekazanych mu danych osobowych.
                                                        <br/> 5. Podanie danych jest zawsze dobrowolne, ale niezbędne do podjęcia przez Użytkownika akcji, do której przeznaczony jest dany formularz.
                                                        <br/>6. Administrator nie udostępnia przekazanych mu danych jakimkolwiek podmiotom trzecim.
                                                        <br/> 7. Dane osobowe są gromadzone z należytą starannością i odpowiednio chronione przed dostępem do nich przez osoby do tego nieupoważnione.
                                                        <br/>8. Użytkownikowi przysługują następujące uprawnienia: 
                                                        <br/>a) prawo do żądania dostępu do danych osobowych dotyczących osoby, której dane dotyczą, ich sprostowania, usunięcia lub ograniczenia przetwarzania, 
                                                        <br/>b) prawo do wniesienia sprzeciwu wobec przetwarzania, 
                                                        <br/>c) prawo do przenoszenia danych, 
                                                        <br/>d) prawo do cofnięcia zgody na przetwarzanie danych osobowych w określonym celu, jeżeli Użytkownik uprzednio taką zgodę wyraził, 
                                                        <br/>e) prawo do wniesienia skargi do organu nadzorczego w związku z przetwarzaniem danych osobowych przez Administratora
                                                </p>
                                        </div>
                                           
                                        <div className="privacy__inner-item">
                                            <h2 className="privacy__inner-item--title">§3 Pliki cookies</h2>

                                            <p className="privacy__inner-item--desc">
                                                1. Administrator wykorzystuje pliki cookies (ciasteczka), czyli niewielkie informacje tekstowe, przechowywane na urządzeniu końcowym Użytkownika (np. komputerze, tablecie, smartfonie). Cookies mogą być odczytywane przez system teleinformatyczny Administratora.
                                                <br/>2. Administrator przechowuje pliki cookies na urządzeniu końcowym Użytkownika, a następnie uzyskuje dostęp do informacji w nich zawartych w celach statystycznych, w celach marketingowych (remarketing, odzyskiwanie porzuconych koszyków) oraz w celu zapewnienia prawidłowego działania Strony.
                                                <br/>3. Administrator informuje niniejszym Użytkownika, że istnieje możliwość takiej konfiguracji przeglądarki internetowej, która uniemożliwia przechowywanie plików cookies na urządzeniu końcowym Użytkownika. W takiej sytuacji, korzystanie ze Strony przez Użytkownika może być utrudnione.
                                                <br/>4. Administrator wskazuje niniejszym, że pliki cookies mogą być przez Użytkownika usunięte po ich zapisaniu przez Administratora, poprzez odpowiednie funkcje przeglądarki internetowej, programy służące w tym celu lub skorzystanie z odpowiednich narzędzi dostępnych w ramach systemu operacyjnego, z którego korzysta Użytkownik.
                                            </p>
                                        </div>

                                        <div className="privacy__inner-item">      
                                                <h2 className="privacy__inner-item--title">§4 Logi serwera</h2>

                                                <p className="privacy__inner-item--desc">
                                                        1. Korzystanie ze Strony wiąże się z przesyłaniem zapytań do serwera, na którym przechowywana jest Strona.
                                                        <br/>2. Każde zapytanie skierowane do serwera zapisywane jest w logach serwera. Logi obejmują m.in. adres IP Użytkownika, datę i czas serwera, informacje o przeglądarce internetowej i systemie operacyjnym, z jakiego korzysta Użytkownik.
                                                        <br/>3. Logi zapisywane i przechowywane są na serwerze.
                                                        <br/>4. Dane zapisane w logach serwera nie są kojarzone z konkretnymi osobami korzystającymi ze Strony i nie są wykorzystywane przez Administratora w celu identyfikacji Użytkownika.
                                                        <br/>5. Logi serwera stanowią wyłącznie materiał pomocniczy służący do administrowania Stroną, a ich zawartość nie jest ujawniana nikomu poza osobami upoważnionymi do administrowania serwerem.
                                                </p>
                                        </div>
                                </div>
                        </div>
                    </section>
            </>
    );
}

export default PrivacySection;