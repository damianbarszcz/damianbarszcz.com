import  React from 'react';
import Typewriter from 'typewriter-effect';

const LibraryBanner = (props) => {
    
   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
                {  /*------------------------------------------*/   }
                {  /*--------     Library  banner      -------*/  }
                {  /*------------------------------------------*/   }    
                 <section className="library-banner library-banner_theme" role="banner">
                        <div className="library-banner__block g-container">
                            {  /*---  Library banner > Header ---*/   }
                            <header className="library-banner__header library-banner__header_modifier">
                                    <h1 className="library-banner__header--title"> 
                                            <strong> { props.libraryObjOne.headerStrongTitle } </strong> <Typewriter options={{  strings: [props.libraryObjOne.headerTitle ], autoStart: true, loop: true}} />
                                     </h1>
                             </header>
                            </div>
                    </section>
                </>
                )
    }

    export default LibraryBanner;