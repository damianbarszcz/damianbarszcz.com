import React from 'react';

function getBlockStyle(block) {
         switch (block.getType()) {
          case 'blockquote': return 'RichEditor-blockquote';
          default: return null;
        }
}

export default class SmartEditor extends React.Component {
        constructor(props) {
                super(props);
                        
                this.onToggle = (e) => {
                        e.preventDefault();
                        this.props.onToggle(this.props.style);
                };
        }

        render() {
                let className = 'n-project__smarteditor-fun-button n-project__smarteditor-fun-button_effect';

                if (this.props.active) {
                        className += ' n-project__smarteditor-fun-button--active';
                }

                switch(this.props.type){
                        case 'inline':
                        return (   <button type="button" className={className} onMouseDown={this.onToggle}>{this.props.label}</button>   );      

                        case 'heading':       
                        return (    
                                <li  className={`n-project__smarteditor-fun-dropdown-list-item`}  style={{ fontSize: this.props.captionSize + 'rem' }} onMouseDown={this.onToggle}>
                                        <strong>{this.props.label}</strong>
                                </li>  
                        );   

                        case 'ordered-list':
                        return (    <button type="button" className={className} onMouseDown={this.onToggle}>{this.props.label}</button>  );   

                        case 'paragraph':
                        return (    <button type="button" className={className} onMouseDown={this.onToggle}>{this.props.label}</button>  );   

                        case 'markdown':
                        return (    <button type="button" className={className} onMouseDown={this.onToggle}>{this.props.label}</button>  );   

                        case 'artwork':
                        return (    <button type="button" className={className} onMouseDown={this.onToggle}>{this.props.label}</button>  );   
                }
        }
}

export { getBlockStyle }
