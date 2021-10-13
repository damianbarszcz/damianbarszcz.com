import React  from 'react';
import { LIST_TYPES } from '../../utils';
import SmartEditor from '../SmartEditor/SmartEditor';

const OrderedListControls = (props) => {
    const {editorState} = props;
    const selection = editorState.getSelection();
    const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();
    
    return (
            <>
                { LIST_TYPES.map((type) =>
                        <SmartEditor  type="ordered-list" key={type.list_id }  active={type.style === blockType}  label={type.label}  onToggle={props.onToggle}  style={type.style} />
                )}
            </>
    );
};

export default OrderedListControls;