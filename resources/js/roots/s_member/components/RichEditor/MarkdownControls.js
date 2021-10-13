import React  from 'react';
import { MARKDOWN } from '../../utils';
import SmartEditor from '../SmartEditor/SmartEditor';

const MarkdownControls = (props) => {
    const {editorState} = props;
    const selection = editorState.getSelection();
    const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();
    
    return (
            <>
                { MARKDOWN.map((type) =>
                        <SmartEditor  type="markdown" key={type.markdown_id }  active={type.style === blockType}  label={type.label}  onToggle={props.onToggle}  style={type.style} />
                )}
            </>
    );
};

export default MarkdownControls;