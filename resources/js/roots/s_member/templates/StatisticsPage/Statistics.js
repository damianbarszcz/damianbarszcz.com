import  React, { useEffect } from 'react';

{  /*  Components */ }
import { Sidenav, StatsBox } from '../../components';
import { StatsBoxObjOne,StatsBoxObjTwo,StatsBoxObjThree } from './Data';

function Statistics(){
        useEffect(() => {
            document.title = "Pulpit | Statystyka";
        }, []);

        /*
        =======================
         Render component
        =======================
        */
        return (
                <main>
                        <Sidenav />
                        <StatsBox StatsBoxObjOne={ StatsBoxObjOne }  StatsBoxObjTwo={ StatsBoxObjTwo } StatsBoxObjThree={ StatsBoxObjThree } />
                </main>
            );
        }
        
export default Statistics;
