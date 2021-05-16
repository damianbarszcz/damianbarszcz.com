import  React, { useEffect } from 'react';

{  /*  Components */ }
import { Sidenav, StatsBox } from '../../components';

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

                <>
                    <Sidenav />
                    <main>
                        <StatsBox />
                    </main>
                </>
            );
        }
        
export default Statistics;
