import React , { useState } from 'react';
import { INLINE_STYLES } from '../../utils';
import SmartEditor from '../SmartEditor/SmartEditor';

const InlineStyleControls = (props) => {
        const currentStyle = props.editorState.getCurrentInlineStyle();
        const [moreText, getMoreText] = useState(false);

        const activeMoreText = (e) => {
                getMoreText(!moreText);
                e.preventDefault();
        };
    
        return (
                <div className="n-project__smarteditor-fun-group">
                        { INLINE_STYLES.slice(0,3).map((type) =>
                                <SmartEditor  type="inline" key={type.style_id}  active={currentStyle.has(type.style)} label={type.label}  onToggle={props.onToggle}  style={type.style} />
                        )}

                        <button type="button" className={`n-project__smarteditor-fun-button n-project__smarteditor-fun-button_effect  ${ moreText ? 'n-project__smarteditor-fun-button--active button--select' : ''}`} onClick={activeMoreText}>
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.55,19h2l-5-14h-2l-5,14h2l1.4-4h5.1Zm-5.9-6,1.9-5.2,1.9,5.2Zm12.8,4.5a1.5,1.5,0,1,1-1.5-1.5A1.5,1.5,0,0,1,20.45,17.5Zm0-4a1.5,1.5,0,1,1-1.5-1.5A1.5,1.5,0,0,1,20.45,13.5Zm0-4A1.5,1.5,0,1,1,18.95,8,1.5,1.5,0,0,1,20.45,9.5Z"></path>
                                </svg>
                        </button>

                        { moreText && 
                        <div className="n-project__smarteditor-fun-more-tools">
                                { INLINE_STYLES.slice(3).map((type) =>
                                        <SmartEditor  type="inline" key={type.style_id}  active={currentStyle.has(type.style)} label={type.label}  onToggle={props.onToggle}  style={type.style} />
                                )}
                        </div>
                        }
                </div>
        );
};

export default InlineStyleControls;