import React , { useState} from 'react';

function ArtworkControls (props)  {
        const [artwork, getArtwork] = useState(false);
        const [artworker, setArtworker] = useState('');

        const activeArtworkSystem = () => {   getArtwork(!artwork);  };

        return (
                <>
                <button type="button" className={`n-project__smarteditor-fun-button n-project__smarteditor-fun-button_effect ${ artwork ? 'n-project__smarteditor-fun-button--active button--select' : ''}`} onClick={activeArtworkSystem } >
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.2,11l3.8,5H6l3-3.9l2.1,2.7L14,11H14.2z M8.5,11c0.8,0,1.5-0.7,1.5-1.5S9.3,8,8.5,8S7,8.7,7,9.5C7,10.3,7.7,11,8.5,11z   M22,6v12c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h16C21.1,4,22,4.9,22,6z M20,8.8V6H4v12h16V8.8z"></path>
                        </svg>
                </button>

                { artwork && 
                 <div className="n-project__smarteditor-fun-dropdown n-project__smarteditor-fun-dropdown--artwork">
                        <header className="n-project__smarteditor-fun-dropdown-header">
                                <button type="button" className="n-project__smarteditor-fun-button n-project__smarteditor-fun-button_effect">
                                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11,17H7A5,5,0,0,1,7,7h4V9H7a3,3,0,0,0,0,6h4ZM17,7H13V9h4a3,3,0,0,1,0,6H13v2h4A5,5,0,0,0,17,7Zm-1,4H8v2h8Z"></path>
                                        </svg>
                                </button>
                        </header>

                        <div className="n-project__smarteditor-fun-dropdown-body">
                                <input type="text"  value={ artworker } onChange={e => setArtworker(e.target.value)}  className="form__input form__input_effect" placeholder="https://" maxLength="254" />

                                <div className="n-project__smarteditor-fun-dropdown-body-box">
                                        <button type="submit" className="n-project__smarteditor-fun-dropdown-body--btn" onClick={ e =>  (props.onAddImage(e,artworker), getArtwork(!artwork), setArtworker(''))}>Dodaj</button>
                                </div>
                        </div>
                </div>
                }
                </>
        );
};
  
export default ArtworkControls;

