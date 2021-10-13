import React , { useState } from 'react';
import { HEADING_TYPES } from '../../utils';
import SmartEditor from '../SmartEditor/SmartEditor';

const HeadingControls = (props) => {
        const [heading, getHeading] = useState(false);
        const {editorState} = props;
        const selection = editorState.getSelection();
        const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

        const activeHeading = (e) => {
                getHeading(!heading);
                e.preventDefault();
        };

        return (
            <>
                <button type="button" className={`n-project__smarteditor-fun-button n-project__smarteditor-fun-button_effect n-project__smarteditor-fun-button--select ${ heading ? 'n-project__smarteditor-fun-button--active' : ''}`} onClick={activeHeading}>
                        <svg width="24" height="24"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.15,5A4.11,4.11,0,0,0,6.08,8.18,4,4,0,0,0,10,13v6h2V7h2V19h2V7h2V5ZM8,9a2,2,0,0,1,2-2v4A2,2,0,0,1,8,9Z"></path>
                        </svg>
                </button>

                { heading && 
                <div className="n-project__smarteditor-fun-dropdown n-project__smarteditor-fun-dropdown--heading">
                        <ul>
                            {   HEADING_TYPES.map(type =>
                                <SmartEditor  type="heading" key={type.heading_id}  captionSize={type.captionSize} active={type.style === blockType}  label={type.label}  onToggle={props.onToggle}  style={type.style} />
                            )}
                        </ul>
                 </div> }
            </>
        );
};

export default HeadingControls;