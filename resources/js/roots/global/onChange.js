import jump from 'jump.js'

/*
===============================
Scroll to Disqus (Book & Project) component
===============================
*/

export function scrollToDiscussion(){
        return  jump('.article__discussion', {
                 duration: 1000,
                 offset: -100,
                 callback: undefined,
                 a11y: false
         });   
 }

 export default { scrollToDiscussion }

