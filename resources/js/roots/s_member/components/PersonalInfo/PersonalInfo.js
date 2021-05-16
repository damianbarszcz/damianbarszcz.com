import  React from 'react';
import Moment from 'react-moment';

const PersonalInfo = (props) => {
    
   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
                <section className="personal-info personal-info_theme">
                        <div className="personal-info__block">
                                {  /*---  Personal info > Block > Header   ---*/   }
                                <header className="personal-info__header personal-info__header_modifier">
                                        <span className="personal-info__header-square personal-info__header-square_modifier"><i className="material-icons material-icons-outlined"> account_circle </i> </span>

                                        <div className="personal-info__header-content">
                                                <h1 className="personal-info__header-content--title"> Dane personalne </h1>

                                                <p className="personal-info__header-content--subtitle"> Pulpit | Dane personalne </p>
                                        </div>
                                </header>

                                {  /*---  Personal info > Block > Inner   ---*/   }
                                <div className="personal-info__inner">
                                        <div className="personal-info__profile personal-info__profile_modifier">
                                                {  /*---  Personal info > Block > Profile > Head  ---*/   }
                                                <div className="personal-info__profile-head">
                                                        <header className="personal-info__profile-head-header">
                                                                <h2 className="personal-info__profile-head-header--title">Dane personalne</h2>

                                                                <p className="personal-info__profile-head-header--desc"> Zarządzaj swoimi danymi osobowymi, np. Twoje imię i nazwisko oraz zdjęcie.</p>
                                                        </header>

                                                        <div className="personal-info__profile-head-artwork">
                                                                <img src="../images/member/personal-info/reservations_scene_316x112_166117b2f9a9fdcce83b20f77cf604e9.png" className="image--personal-head" alt="" />
                                                        </div>
                                                </div>

                                                {  /*---  Personal info > Profile > Body   ---*/   }
                                                <div className="personal-info__profile-body">
                                                        <header className="personal-info__profile-body-header personal-info__profile-body-header_modifier">
                                                                <h3 className="personal-info__profile-body-header--title">Informacje o profilu</h3>
                                                        </header>

                                                        <a href="#" className="personal-info__profile-body-link personal-info__profile-body-link_modifier" target="_self" onClick={ (e) => props.getModal(e,"isAvatar")  }>
                                                                <span className="personal-info__profile-body-link--icon"><img src={ props.user.avatar } className="avatar-icon" alt="Your avatar"/></span>
                                                                <span className="personal-info__profile-body-link--title personal-info__profile-body-link--title_effect">Twój awatar</span>
                                                         </a>
                                                                
                                                        <a href="#" name="personal-biogram" className="personal-biogram personal-info__profile-body-link personal-info__profile-body-link_modifier" target="_self" onClick={ (e) => props.getModal(e,"isBiogram")  }>
                                                                <span className="personal-info__profile-body-link--caption personal-info__profile-body-link--caption_effect"> { props.user.biogram || '' }  </span>
                                                                <span className="personal-info__profile-body-link--title personal-info__profile-body-link--title_effect">Biogram</span>
                                                        </a>

                                                        <a href="#"  className="personal-info__profile-body-link personal-info__profile-body-link_modifier" target="_self"  onClick={ (e) => props.getModal(e,"isName")  }>
                                                                <span className="personal-info__profile-body-link--caption personal-info__profile-body-link--caption_effect"> { props.user.name }  { props.user.surename } </span>
                                                                <span className="personal-info__profile-body-link--title personal-info__profile-body-link--title_effect">Imię & Nazwisko</span>
                                                        </a>

                                                        <a href="#" className="personal-info__profile-body-link personal-info__profile-body-link_modifier" target="_self" onClick={ (e) => props.getModal(e,"isBirthday")  }>
                                                                <span className="personal-info__profile-body-link--caption personal-info__profile-body-link--caption_effect"><Moment format="DD/MM/YYYY">{ props.user.birthday }</Moment></span>
                                                                <span className="personal-info__profile-body-link--title personal-info__profile-body-link--title_effect">Data urodzenia</span>
                                                        </a>

                                                        <a href="#" className="personal-info__profile-body-link personal-info__profile-body-link_modifier" target="_self" onClick={ (e) => props.getModal(e,"isGender")  }>
                                                                <span className="personal-info__profile-body-link--caption personal-info__profile-body-link--caption_effect">{ props.user.gender } </span>
                                                                <span className="personal-info__profile-body-link--title personal-info__profile-body-link--title_effect">Płęć</span>
                                                        </a>

                                                         <header className="personal-info__profile-body-header personal-info__profile-body-header_modifier">
                                                                <h3 className="personal-info__profile-body-header--title">Informacje kontaktowe</h3>
                                                        </header>

                                                        <a href="#" className="personal-info__profile-body-link personal-info__profile-body-link_modifier" target="_self" onClick={ (e) => props.getModal(e,"isEmail")  }>
                                                                <span className="personal-info__profile-body-link--caption personal-info__profile-body-link--caption_effect">{ props.user.email } </span>
                                                                <span className="personal-info__profile-body-link--title personal-info__profile-body-link--title_effect">Adres e-mail</span>
                                                        </a>

                                                        <a href="#" className="personal-info__profile-body-link personal-info__profile-body-link_modifier" target="_self" onClick={ (e) => props.getModal(e,"isPhone")  }>
                                                                <span className="personal-info__profile-body-link--caption personal-info__profile-body-link--caption_effect">{ props.user.phone_number || '' } </span>
                                                                <span className="personal-info__profile-body-link--title personal-info__profile-body-link--title_effect">Telefon</span>
                                                        </a>

                                                         <a href="#" className="personal-info__profile-body-link personal-info__profile-body-link_modifier" target="_self" onClick={ (e) => props.getModal(e,"isPassword")  }>
                                                                <span className="personal-info__profile-body-link--caption personal-info__profile-body-link--caption_effect">********</span>
                                                                <span className="personal-info__profile-body-link--title personal-info__profile-body-link--title_effect">Hasło</span>
                                                         </a>
                                                </div>
                                        </div>
                                 </div>
                        </div>
                </section>

                
        </>
    )
}

export default PersonalInfo;
    