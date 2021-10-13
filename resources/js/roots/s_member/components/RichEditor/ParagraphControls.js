import React  from 'react';
import { PARAGRAPHS } from '../../utils';
import SmartEditor from '../SmartEditor/SmartEditor';

const ParagraphControls = (props) => {
    const {editorState} = props;
    const selection = editorState.getSelection();
    const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();
    
    return (
            <>
                { PARAGRAPHS.map((type) =>
                        <SmartEditor  type="paragraph" key={type.paragraph_id }  active={type.style === blockType}  label={type.label}  onToggle={props.onToggle}  style={type.style} />
                )}
            </>
    );
};

export default ParagraphControls;