import  React from 'react';

const StatsBox = () => {
    
   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
                 <section className="statistics statistics_theme">
                        <div className="statistics__block">
                                <div className="statistics__inner statistics__inner_modifier">
                                        {  /*---  Statistics > Inner > Header   ---*/   }
                                        <header className="statistics__inner-header statistics__inner-header_modifier">
                                                <div className="statistics__brand">
                                                        <svg className="statistics__brand-logo"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332.91 29.52" width="322.4" height="43.2" aria-label="Statistics Logo">
                                                            <path className="statistics__brand-logo--yellow" d="M753.25,363.88c2.63,0,4.58.61,5.87,1.84a7.23,7.23,0,0,1,1.92,5.46,5.8,5.8,0,0,1-3.73,5.63,11.3,11.3,0,0,1-4.55.8l.17-1.84a13.78,13.78,0,0,1,2.91.35,10.74,10.74,0,0,1,3.17,1.23,7.14,7.14,0,0,1,2.55,2.46,7.4,7.4,0,0,1,1,4,9.63,9.63,0,0,1-.88,4.42,6.83,6.83,0,0,1-2.32,2.67,8.82,8.82,0,0,1-3.07,1.29,15.44,15.44,0,0,1-3.16.35H742.92a2.46,2.46,0,0,1-2.5-2.5v-23.7a2.46,2.46,0,0,1,2.5-2.5Zm-.73,4.84h-7.3l.53-.66v7.42l-.49-.37h7.38a3.26,3.26,0,0,0,2.13-.78,2.75,2.75,0,0,0,.94-2.25,2.94,2.94,0,0,0-3.19-3.36Zm.32,11.23h-7.46l.37-.33v8.65l-.41-.41h7.79a4.26,4.26,0,0,0,3-1,3.87,3.87,0,0,0,1.11-3,4,4,0,0,0-.74-2.67,3.09,3.09,0,0,0-1.76-1A9.41,9.41,0,0,0,752.84,380Z" transform="translate(-740.42 -363.47)"/>
                                                             <path className="statistics__brand-logo--blue" d="M784.62,370.23a2.4,2.4,0,0,1,1.76.7,2.43,2.43,0,0,1,.7,1.8v17.35a2.44,2.44,0,0,1-.7,1.78,2.34,2.34,0,0,1-1.76.72,2.37,2.37,0,0,1-1.77-.72,2.47,2.47,0,0,1-.69-1.78v-2l.9.37a2.34,2.34,0,0,1-.57,1.29,8.66,8.66,0,0,1-1.56,1.5,10,10,0,0,1-2.32,1.25,8,8,0,0,1-2.89.51,9.35,9.35,0,0,1-5.12-1.46,10.18,10.18,0,0,1-3.63-4,12.49,12.49,0,0,1-1.33-5.88,12.63,12.63,0,0,1,1.33-5.92,10.31,10.31,0,0,1,3.59-4,9,9,0,0,1,5-1.46,9.41,9.41,0,0,1,3.24.54,9.56,9.56,0,0,1,2.56,1.35,8,8,0,0,1,1.68,1.66,2.59,2.59,0,0,1,.59,1.41l-1.47.54v-3a2.47,2.47,0,0,1,.69-1.78A2.37,2.37,0,0,1,784.62,370.23Zm-8.28,18.25a5.55,5.55,0,0,0,3.15-.9,6,6,0,0,0,2.11-2.46,7.81,7.81,0,0,0,.76-3.49,7.92,7.92,0,0,0-.76-3.53,6,6,0,0,0-2.11-2.45,5.86,5.86,0,0,0-6.27,0,6.08,6.08,0,0,0-2.11,2.45,7.92,7.92,0,0,0-.76,3.53,7.81,7.81,0,0,0,.76,3.49,6,6,0,0,0,2.11,2.46A5.49,5.49,0,0,0,776.34,388.48Z" transform="translate(-740.42 -363.47)"/>
                                                             <path className="statistics__brand-logo--green" d="M794.87,392.58a2.37,2.37,0,0,1-1.77-.72,2.47,2.47,0,0,1-.69-1.78V373.14a2.47,2.47,0,0,1,.69-1.78,2.37,2.37,0,0,1,1.77-.72,2.34,2.34,0,0,1,1.76.72,2.44,2.44,0,0,1,.7,1.78V377l-.29-2.75a6.33,6.33,0,0,1,1.17-1.74,6.84,6.84,0,0,1,1.62-1.27,7.19,7.19,0,0,1,1.93-.76,8.4,8.4,0,0,1,2-.25,3.16,3.16,0,0,1,2.07.7,2.08,2.08,0,0,1,.84,1.64,2.46,2.46,0,0,1-.7,1.95,2.33,2.33,0,0,1-1.52.59,3.38,3.38,0,0,1-1.41-.28,3.56,3.56,0,0,0-3,.06,4.13,4.13,0,0,0-1.4,1.08,5.85,5.85,0,0,0-1,1.83,7.57,7.57,0,0,0-.39,2.56v9.72a2.44,2.44,0,0,1-.7,1.78A2.34,2.34,0,0,1,794.87,392.58Z" transform="translate(-740.42 -363.47)"/>
                                                            <path className="statistics__brand-logo--yellow" d="M808.93,389.18a2.32,2.32,0,0,1-.37-1.48,2,2,0,0,1,1.07-1.56,2.23,2.23,0,0,1,1.39-.35,2.38,2.38,0,0,1,1.44.76,9.68,9.68,0,0,0,2.5,1.85,7.4,7.4,0,0,0,3.28.65,10.5,10.5,0,0,0,1.35-.18,2.66,2.66,0,0,0,1.29-.66,2.05,2.05,0,0,0,.56-1.58,1.79,1.79,0,0,0-.62-1.43,5,5,0,0,0-1.62-.9c-.67-.25-1.41-.48-2.23-.7s-1.72-.52-2.61-.82a10.78,10.78,0,0,1-2.44-1.17,5.6,5.6,0,0,1-1.8-1.91,5.78,5.78,0,0,1-.7-3,5.35,5.35,0,0,1,1.15-3.48,7.48,7.48,0,0,1,3-2.22,9.69,9.69,0,0,1,3.84-.78,12.72,12.72,0,0,1,2.66.31,10.71,10.71,0,0,1,2.67,1,6.83,6.83,0,0,1,2.13,1.79,2.86,2.86,0,0,1,.53,1.47,1.73,1.73,0,0,1-.78,1.56,2,2,0,0,1-1.43.43,2.17,2.17,0,0,1-1.36-.55,4.85,4.85,0,0,0-1.86-1.44,6.52,6.52,0,0,0-2.69-.53,7.26,7.26,0,0,0-1.33.14,2.68,2.68,0,0,0-1.25.62,2.25,2.25,0,0,0,.08,3,4.66,4.66,0,0,0,1.66.9c.7.24,1.44.46,2.24.68s1.65.48,2.5.78a10.11,10.11,0,0,1,2.34,1.19,5.65,5.65,0,0,1,1.72,1.91,6.08,6.08,0,0,1,.65,3,5.42,5.42,0,0,1-1.23,3.57,7.84,7.84,0,0,1-3.07,2.23,10,10,0,0,1-3.77.76,14.63,14.63,0,0,1-4.84-.84A8.37,8.37,0,0,1,808.93,389.18Z" transform="translate(-740.42 -363.47)"/>
                                                            <path className="statistics__brand-logo--blue" d="M843.94,388.07a2.26,2.26,0,0,1,1.64.63,2.29,2.29,0,0,1,0,3.22,2.2,2.2,0,0,1-1.64.66h-13.2a2,2,0,0,1-1.64-.74,2.09,2.09,0,0,1-.57-1.48,5.36,5.36,0,0,1,.16-1.08,3,3,0,0,1,.62-1.09L839.52,375l-.09.57h-8.32a2.26,2.26,0,0,1-1.64-.65,2.23,2.23,0,0,1-.66-1.64,2.1,2.1,0,0,1,.66-1.58,2.3,2.3,0,0,1,1.64-.64h12.63a2.14,2.14,0,0,1,1.6.7,2.21,2.21,0,0,1,.57,1.76,5.62,5.62,0,0,1-.14.82,2.76,2.76,0,0,1-.56,1l-10,13v-.24Z" transform="translate(-740.42 -363.47)"/>
                                                            <path className="statistics__brand-logo--green" d="M859,370.23a15,15,0,0,1,4.08.5,6.57,6.57,0,0,1,2.71,1.37,2.77,2.77,0,0,1,1,2.11,2.66,2.66,0,0,1-.49,1.54,1.64,1.64,0,0,1-1.44.72,2.75,2.75,0,0,1-1.08-.19,2.78,2.78,0,0,1-.76-.47,4.25,4.25,0,0,0-.78-.53,3.54,3.54,0,0,0-1.25-.39,7.91,7.91,0,0,0-1.25-.15,6.53,6.53,0,0,0-3.55.91,5.94,5.94,0,0,0-2.23,2.43,7.76,7.76,0,0,0-.78,3.55,7.44,7.44,0,0,0,.8,3.51,6.28,6.28,0,0,0,2.21,2.44,5.93,5.93,0,0,0,3.26.9,10,10,0,0,0,1.76-.13,4.49,4.49,0,0,0,1.23-.36,6.86,6.86,0,0,0,1-.7,2.07,2.07,0,0,1,1.35-.37,2,2,0,0,1,1.64.68,2.48,2.48,0,0,1,.57,1.66,2.35,2.35,0,0,1-1.14,1.86,9.42,9.42,0,0,1-3,1.36,15.23,15.23,0,0,1-4,.51,10.3,10.3,0,0,1-5.62-1.5,10,10,0,0,1-3.67-4.08,12.75,12.75,0,0,1-1.29-5.78,12.29,12.29,0,0,1,1.37-5.92,10.24,10.24,0,0,1,3.81-4A10.73,10.73,0,0,1,859,370.23Z" transform="translate(-740.42 -363.47)"/>
                                                            <path className="statistics__brand-logo--red" d="M884.49,388.07a2.26,2.26,0,0,1,1.64.63,2.29,2.29,0,0,1,0,3.22,2.2,2.2,0,0,1-1.64.66h-13.2a2,2,0,0,1-1.64-.74,2.09,2.09,0,0,1-.57-1.48,5.36,5.36,0,0,1,.16-1.08,3,3,0,0,1,.62-1.09l10.2-13.2-.08.57h-8.32a2.24,2.24,0,0,1-2.3-2.29,2.1,2.1,0,0,1,.66-1.58,2.28,2.28,0,0,1,1.64-.64h12.63a2.14,2.14,0,0,1,1.6.7,2.21,2.21,0,0,1,.57,1.76,5.62,5.62,0,0,1-.14.82,2.93,2.93,0,0,1-.56,1l-10,13v-.24Z" transform="translate(-740.42 -363.47)"/>
                                                            <path className="statistics__brand-logo--dark" d="M911.22,393a15.7,15.7,0,0,1-5.24-.82,13.2,13.2,0,0,1-4.39-2.71,2.09,2.09,0,0,1-.68-.8,2.17,2.17,0,0,1-.22-1,2,2,0,0,1,.57-1.39,1.88,1.88,0,0,1,1.44-.62,2,2,0,0,1,1.23.45,11.38,11.38,0,0,0,3.26,2.17,9.8,9.8,0,0,0,4,.74,8.4,8.4,0,0,0,3-.53,5.7,5.7,0,0,0,2.19-1.44,3,3,0,0,0,.82-2.09,3.6,3.6,0,0,0-.84-2.44A6.35,6.35,0,0,0,914,381a22.39,22.39,0,0,0-3.79-1.08,18.55,18.55,0,0,1-3.67-1,9.58,9.58,0,0,1-2.77-1.66,6.85,6.85,0,0,1-1.76-2.4,8,8,0,0,1-.62-3.24,7.09,7.09,0,0,1,1.32-4.3,8.53,8.53,0,0,1,3.56-2.79,12.73,12.73,0,0,1,5.09-1,14.15,14.15,0,0,1,4.83.8,9.84,9.84,0,0,1,3.65,2.15,2.45,2.45,0,0,1,1,1.85,2,2,0,0,1-.6,1.37,1.82,1.82,0,0,1-1.37.63,1.5,1.5,0,0,1-1-.32,6,6,0,0,0-1.77-1.25,14.74,14.74,0,0,0-2.35-.93,8.95,8.95,0,0,0-5.56.15,4.55,4.55,0,0,0-2,1.39,3.28,3.28,0,0,0-.7,2.07,3.35,3.35,0,0,0,.8,2.3,5.69,5.69,0,0,0,2.24,1.45,26.25,26.25,0,0,0,3.28,1,36.78,36.78,0,0,1,4,1.1,10.43,10.43,0,0,1,3,1.58,6.44,6.44,0,0,1,1.89,2.4,8.73,8.73,0,0,1,.65,3.57,6.92,6.92,0,0,1-1.39,4.3,9.3,9.3,0,0,1-3.67,2.87A12.12,12.12,0,0,1,911.22,393Z" transform="translate(-740.42 -363.47)"/>
                                                            <path className="statistics__brand-logo--dark" d="M925.66,371.26h9.63a1.83,1.83,0,0,1,1.37.55,1.88,1.88,0,0,1,.56,1.38,1.77,1.77,0,0,1-.56,1.31,1.89,1.89,0,0,1-1.37.53h-9.63a1.87,1.87,0,0,1-1.38-.55,1.83,1.83,0,0,1-.55-1.34,1.8,1.8,0,0,1,.55-1.35A1.93,1.93,0,0,1,925.66,371.26Zm4.3-5.33a2,2,0,0,1,1.48.59A2.09,2.09,0,0,1,932,368v19a2.39,2.39,0,0,0,.25,1.19,1.3,1.3,0,0,0,.67.62,2.46,2.46,0,0,0,.89.16,1.8,1.8,0,0,0,.79-.16,2,2,0,0,1,.85-.17,1.23,1.23,0,0,1,.9.45,1.84,1.84,0,0,1-.66,2.83,4.5,4.5,0,0,1-2.29.62,13,13,0,0,1-1.64-.12,5.23,5.23,0,0,1-1.83-.62,3.68,3.68,0,0,1-1.45-1.58,6.51,6.51,0,0,1-.58-3.05V368a2,2,0,0,1,.6-1.5A2,2,0,0,1,930,365.93Z" transform="translate(-740.42 -363.47)"/>
                                                            <path className="statistics__brand-logo--dark" d="M959.28,370.68a2,2,0,0,1,1.45.6,2,2,0,0,1,.6,1.49v17.72a2,2,0,0,1-.6,1.49,2,2,0,0,1-1.45.6,1.94,1.94,0,0,1-1.48-.6,2.05,2.05,0,0,1-.57-1.49v-2.95l.82.12a3,3,0,0,1-.6,1.64,8.14,8.14,0,0,1-1.62,1.74,8.76,8.76,0,0,1-2.42,1.39,8,8,0,0,1-3,.56,9.15,9.15,0,0,1-5.08-1.46,10.16,10.16,0,0,1-3.57-4,13.56,13.56,0,0,1,0-11.63,10.06,10.06,0,0,1,3.54-4,9,9,0,0,1,5-1.44,9.12,9.12,0,0,1,3.26.57,9.79,9.79,0,0,1,2.6,1.48,7.58,7.58,0,0,1,1.72,1.91,3.67,3.67,0,0,1,.62,1.9l-1.27.13v-3.74a2.09,2.09,0,0,1,.57-1.47A1.92,1.92,0,0,1,959.28,370.68Zm-8.37,18.54a5.85,5.85,0,0,0,3.38-1,6.66,6.66,0,0,0,2.28-2.68,9.24,9.24,0,0,0,0-7.61,6.66,6.66,0,0,0-2.28-2.66,6.23,6.23,0,0,0-6.74,0,6.63,6.63,0,0,0-2.3,2.66,9.24,9.24,0,0,0,0,7.61,6.66,6.66,0,0,0,2.28,2.68A5.87,5.87,0,0,0,950.91,389.22Z" transform="translate(-740.42 -363.47)"/>
                                                            <path className="statistics__brand-logo--dark" d="M966.74,371.26h9.63a1.88,1.88,0,0,1,1.93,1.93,1.76,1.76,0,0,1-.55,1.31,1.93,1.93,0,0,1-1.38.53h-9.63a1.88,1.88,0,0,1-1.93-1.89,1.84,1.84,0,0,1,.55-1.35A1.93,1.93,0,0,1,966.74,371.26Zm4.3-5.33a2,2,0,0,1,1.48.59,2.09,2.09,0,0,1,.57,1.5v19a2.39,2.39,0,0,0,.25,1.19,1.3,1.3,0,0,0,.67.62,2.46,2.46,0,0,0,.89.16,1.87,1.87,0,0,0,.8-.16,1.93,1.93,0,0,1,.84-.17,1.21,1.21,0,0,1,.9.45,1.84,1.84,0,0,1-.66,2.83,4.5,4.5,0,0,1-2.29.62,13,13,0,0,1-1.64-.12,5.23,5.23,0,0,1-1.83-.62,3.68,3.68,0,0,1-1.45-1.58,6.51,6.51,0,0,1-.58-3.05V368a2,2,0,0,1,.6-1.5A2,2,0,0,1,971,365.93Z" transform="translate(-740.42 -363.47)"/>
                                                            <path className="statistics__brand-logo--dark" d="M984.61,368.14a2.73,2.73,0,0,1-1.72-.43,1.78,1.78,0,0,1-.53-1.45v-.66a1.64,1.64,0,0,1,.57-1.43,2.91,2.91,0,0,1,1.72-.42,2.84,2.84,0,0,1,1.77.44,1.71,1.71,0,0,1,.53,1.41v.66a1.74,1.74,0,0,1-.55,1.47A3,3,0,0,1,984.61,368.14Zm2.09,22.35a2.05,2.05,0,0,1-.57,1.49,2.09,2.09,0,0,1-2.93,0,2,2,0,0,1-.6-1.49V372.94a2,2,0,0,1,.6-1.5,2.11,2.11,0,0,1,2.93,0,2.09,2.09,0,0,1,.57,1.5Z" transform="translate(-740.42 -363.47)"/>
                                                            <path className="statistics__brand-logo--dark" d="M991,389.22a2.17,2.17,0,0,1-.33-1.34,1.66,1.66,0,0,1,.86-1.29,1.9,1.9,0,0,1,1.21-.31,2.06,2.06,0,0,1,1.21.64,9,9,0,0,0,2.56,2,7.36,7.36,0,0,0,3.43.74,8.62,8.62,0,0,0,1.68-.27,3.24,3.24,0,0,0,1.47-.82,2.32,2.32,0,0,0,.62-1.74,2.14,2.14,0,0,0-.66-1.64,5,5,0,0,0-1.72-1c-.71-.26-1.48-.49-2.3-.71s-1.75-.52-2.64-.82a9.91,9.91,0,0,1-2.4-1.17,5.68,5.68,0,0,1-1.74-1.87,5.49,5.49,0,0,1-.68-2.83,5.22,5.22,0,0,1,1.09-3.32,7.18,7.18,0,0,1,2.83-2.17,9.15,9.15,0,0,1,3.79-.78,10.68,10.68,0,0,1,2.5.31,10,10,0,0,1,2.54,1,7.24,7.24,0,0,1,2.13,1.72,2.4,2.4,0,0,1,.48,1.27,1.5,1.5,0,0,1-.68,1.32,1.7,1.7,0,0,1-1.19.37,1.81,1.81,0,0,1-1.15-.46,5.33,5.33,0,0,0-2-1.53,6.71,6.71,0,0,0-2.79-.56,6.25,6.25,0,0,0-1.61.23,3.12,3.12,0,0,0-1.42.8,2.28,2.28,0,0,0-.57,1.68,2.11,2.11,0,0,0,.67,1.64,5.36,5.36,0,0,0,1.79,1,21.07,21.07,0,0,0,2.42.74q1.26.33,2.52.78a9.22,9.22,0,0,1,2.25,1.17,5.6,5.6,0,0,1,1.64,1.84,5.72,5.72,0,0,1,.64,2.85,5.23,5.23,0,0,1-1.17,3.43,7.45,7.45,0,0,1-3,2.15,9.76,9.76,0,0,1-3.75.74,13.62,13.62,0,0,1-4.66-.84A8.53,8.53,0,0,1,991,389.22Z" transform="translate(-740.42 -363.47)"/>
                                                            <path className="statistics__brand-logo--dark" d="M1011.55,371.26h9.63a1.88,1.88,0,0,1,1.93,1.93,1.76,1.76,0,0,1-.55,1.31,1.93,1.93,0,0,1-1.38.53h-9.63a1.9,1.9,0,0,1-1.93-1.89,1.81,1.81,0,0,1,.56-1.35A1.89,1.89,0,0,1,1011.55,371.26Zm4.3-5.33a2,2,0,0,1,1.48.59,2.09,2.09,0,0,1,.57,1.5v19a2.51,2.51,0,0,0,.25,1.19,1.28,1.28,0,0,0,.68.62,2.41,2.41,0,0,0,.88.16,1.87,1.87,0,0,0,.8-.16,1.93,1.93,0,0,1,.84-.17,1.2,1.2,0,0,1,.9.45,1.84,1.84,0,0,1-.66,2.83,4.5,4.5,0,0,1-2.29.62,13.17,13.17,0,0,1-1.64-.12,5.23,5.23,0,0,1-1.83-.62,3.74,3.74,0,0,1-1.45-1.58,6.64,6.64,0,0,1-.58-3.05V368a2,2,0,0,1,.6-1.5A2,2,0,0,1,1015.85,365.93Z" transform="translate(-740.42 -363.47)"/>
                                                            <path className="statistics__brand-logo--dark" d="M1029.42,368.14a2.73,2.73,0,0,1-1.72-.43,1.78,1.78,0,0,1-.53-1.45v-.66a1.64,1.64,0,0,1,.57-1.43,2.93,2.93,0,0,1,1.72-.42,2.82,2.82,0,0,1,1.77.44,1.71,1.71,0,0,1,.53,1.41v.66a1.71,1.71,0,0,1-.55,1.47A3,3,0,0,1,1029.42,368.14Zm2.09,22.35a2.05,2.05,0,0,1-.57,1.49,1.94,1.94,0,0,1-1.48.6,2,2,0,0,1-2-2.09V372.94a2,2,0,0,1,.59-1.5,2,2,0,0,1,1.45-.59,2,2,0,0,1,1.48.59,2.09,2.09,0,0,1,.57,1.5Z" transform="translate(-740.42 -363.47)"/>
                                                            <path className="statistics__brand-logo--dark" d="M1046.44,370.52a14.8,14.8,0,0,1,3.91.47,7,7,0,0,1,2.69,1.31,2.49,2.49,0,0,1,1,1.95,2.11,2.11,0,0,1-.43,1.29,1.39,1.39,0,0,1-1.21.6,2.09,2.09,0,0,1-1-.21,3.52,3.52,0,0,1-.72-.49,5.28,5.28,0,0,0-.82-.57,4.46,4.46,0,0,0-1.33-.41,8.7,8.7,0,0,0-1.58-.17,6.9,6.9,0,0,0-3.75,1,6.78,6.78,0,0,0-2.46,2.66,8.71,8.71,0,0,0,0,7.63,6.84,6.84,0,0,0,2.42,2.66,6.47,6.47,0,0,0,3.59,1,9.29,9.29,0,0,0,2-.19,5.34,5.34,0,0,0,1.34-.47,5.59,5.59,0,0,0,1.06-.76,1.67,1.67,0,0,1,1.19-.39,1.73,1.73,0,0,1,1.38.56,2,2,0,0,1,.47,1.37,2.28,2.28,0,0,1-1.09,1.74,8.84,8.84,0,0,1-2.89,1.38,14.2,14.2,0,0,1-4,.53,10.18,10.18,0,0,1-5.55-1.48,9.92,9.92,0,0,1-3.65-4,12.47,12.47,0,0,1-1.29-5.74,12,12,0,0,1,1.35-5.76,10.26,10.26,0,0,1,3.77-4A10.46,10.46,0,0,1,1046.44,370.52Z" transform="translate(-740.42 -363.47)"/>
                                                            <path className="statistics__brand-logo--dark" d="M1056.89,389.22a2.23,2.23,0,0,1-.32-1.34,1.63,1.63,0,0,1,.86-1.29,1.89,1.89,0,0,1,1.21-.31,2.09,2.09,0,0,1,1.21.64,9,9,0,0,0,2.56,2,7.32,7.32,0,0,0,3.42.74,8.39,8.39,0,0,0,1.68-.27,3.23,3.23,0,0,0,1.48-.82,2.32,2.32,0,0,0,.61-1.74,2.17,2.17,0,0,0-.65-1.64,5,5,0,0,0-1.72-1c-.72-.26-1.48-.49-2.3-.71s-1.76-.52-2.64-.82a9.91,9.91,0,0,1-2.4-1.17,5.81,5.81,0,0,1-1.75-1.87,5.49,5.49,0,0,1-.67-2.83,5.27,5.27,0,0,1,1.08-3.32,7.33,7.33,0,0,1,2.83-2.17,9.19,9.19,0,0,1,3.8-.78,10.74,10.74,0,0,1,2.5.31,10.19,10.19,0,0,1,2.54,1,7.24,7.24,0,0,1,2.13,1.72,2.39,2.39,0,0,1,.47,1.27,1.49,1.49,0,0,1-.67,1.32,1.7,1.7,0,0,1-1.19.37,1.78,1.78,0,0,1-1.15-.46,5.33,5.33,0,0,0-2-1.53,6.71,6.71,0,0,0-2.79-.56,6.27,6.27,0,0,0-1.62.23,3.09,3.09,0,0,0-1.41.8,2.24,2.24,0,0,0-.58,1.68,2.12,2.12,0,0,0,.68,1.64,5.41,5.41,0,0,0,1.78,1,22.37,22.37,0,0,0,2.42.74q1.28.33,2.52.78a9.11,9.11,0,0,1,2.26,1.17,5.6,5.6,0,0,1,1.64,1.84,5.83,5.83,0,0,1,.63,2.85,5.22,5.22,0,0,1-1.16,3.43,7.49,7.49,0,0,1-3,2.15,9.68,9.68,0,0,1-3.75.74,13.56,13.56,0,0,1-4.65-.84A8.56,8.56,0,0,1,1056.89,389.22Z" transform="translate(-740.42 -363.47)"/>
                                                     </svg>
                                                </div>

                                                <p className="statistics__inner-header--desc">Sprawdzaj statystyki swojego konta i zarządzaj nim.</p>
                                        </header>

                                        {  /*---  Statistics > Inner > Functions   ---*/   }
                                        <div className="statistics__inner-functions">
                                             <div className="statistics__inner-functions-item">
                                                    <img src="../images/member/statistics/optimalize-publication.png" alt="Optimize publication" />
                                                                
                                                    <p className="statistics__inner-functions-item-caption">Zoptymalizuj typy publikacji pod względem ilości wyświetleń.</p>
                                            </div>

                                            <div className="statistics__inner-functions-item">
                                                    <img src="../images/member/statistics/device-session.png" alt="Device session" />
                                                                
                                                     <p className="statistics__inner-functions-item-caption">Sprawdaj sesję urządzeń użytkowników.</p>
                                            </div>

                                            <div className="statistics__inner-functions-item">
                                                    <img src="../images/member/statistics/real-time.png" alt="Real time" />

                                                    <p className="statistics__inner-functions-item-caption">Wyświetlaj sesje użytkowników w czasie rzeczywistym.</p>
                                            </div>
                                        </div>

                                        <div className="statistics__inner-funrun">
                                                <p className="statistics__inner-funrun--caption">Usługa nie jest jeszcze dostępna. </p>
                                         </div>
                                    </div>
                            </div>
                    </section>
            </>
        )
}

export default StatsBox;