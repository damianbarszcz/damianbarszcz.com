import React  from 'react';

const Media = props => {
        const entity = props.contentState.getEntity(props.block.getEntityAt(0));
        const { src } = entity.getData();
        const type = entity.getType();

        let media;

        if (type === "image") { 
            media = <Image src={src}  />; 

             return media; 
        }

        else{
            return <Image src={src} />; 
        }
};

const Image = props => {
    if (props.src) {
        return <img src={props.src}  width="700" height="400"/>;
    }
    
    return null;
};

const mediaBlockRenderer = block => {
    if (block.getType() === "atomic") {
        return {
            component: Media,
            editable: false
        };
    }

    return null;
};

export default mediaBlockRenderer;