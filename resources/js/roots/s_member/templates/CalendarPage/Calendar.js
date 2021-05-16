import React, { useEffect }   from 'react';

{  /*  Components */ }
import { CalendarPanel, Sidenav } from '../../components';

function Calendar() {
        useEffect(() => {
                document.title = "Pulpit | Kalendarz";
        }, []);
        
        const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        const months =  Array.from( { length:31 } , (v,k) =>k+1 )

        const monthItems = [];

        const weekItems = []
        
        for(const [index,value] of  weekdays.entries()) {
                weekItems.push (
                         <div key={index} className="calendar__inner-schedule-weekdays-item">
                                <h3 className="calendar__inner-schedule-weekdays-item-title">{ value }</h3>
                        </div>
                )
        }

        for(const [index,value] of months.entries()) {
                monthItems.push (
                        <div key={index} className="calendar__inner-schedule-days-item">
                                <p className="calendar__inner-schedule-days-item-title">{value}</p>
                        </div>
                )
        }

        /*
        =======================
         Render component
        =======================
        */
        return (
                <>
                        <Sidenav />
                        <main>
                                <CalendarPanel weekItems={ weekItems }  monthItems={ monthItems }/>
                        </main>
                </>
        );
}

export default  Calendar;