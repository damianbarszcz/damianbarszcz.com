import React from 'react';

const ShareButtons = (props) =>{
    return(
        <div className={`${props.typeSection}__sharing`}>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=https://damianbarszcz.com/${props.pubType}/${props.pubUrl}`} className={`${props.typeSection}__sharing-social ${props.typeSection}__sharing-social_modifier ${props.typeSection}__sharing-social--facebook`} target="_blank">  </a>

                <a href={`https://twitter.com/intent/tweet?text=https://damianbarszcz.com/${props.pubType}/${props.pubUrl}`} className={`${props.typeSection}__sharing-social ${props.typeSection}__sharing-social_modifier ${props.typeSection}__sharing-social--twitter`} target="_blank">  </a>

                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site http://damianbarszcz.com." className={`${props.typeSection}__sharing-social ${props.typeSection}__sharing-social_modifier ${props.typeSection}__sharing-social--envelope`} target="_blank">   </a>
        </div> 
    )
}

export default ShareButtons;