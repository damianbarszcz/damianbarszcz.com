import React, { Component } from 'react';

{  /*  Components */ }
import { Sidenav, OverviewPanel,AccountHeader } from '../../components';
import axios from 'axios';

class Overview extends Component {

        constructor(props){  
                super(props);

                this.state = {   pubCollection:[] , projectsPubCounter:[], reviewsPubCounter:[], draftsPubCounter:[], date: new Date() }    
        } 

        componentDidMount() {  
                document.title = "Pulpit | Przegląd";

                const requestCollection = axios.get(`/api/member/collection`);
                const requestCounter  = axios.get(`/api/member/overview/counter`);

                axios.all([ requestCollection , requestCounter ]).then(axios.spread((...responses) => {
                        this.setState({   
                                pubCollection: responses[0].data, 
                                projectsPubCounter: responses[1].data, 
                                reviewsPubCounter: responses[1].data, 
                                draftsPubCounter: responses[1].data 
                        })
                })).catch(errors => { console.log(errors); })
        }

        /*
        =======================
         Render component
        =======================
        */
        render() {
                const { pubCollection, projectsPubCounter, reviewsPubCounter, draftsPubCounter} = this.state;

                return (
                        <main>
                                <Sidenav />
                                <AccountHeader  functionTitle="Przegląd" typeFunction="home" />
                                <OverviewPanel pubCollection ={ pubCollection } projectsPubCounter={ projectsPubCounter } reviewsPubCounter ={ reviewsPubCounter }
                                draftsPubCounter ={ draftsPubCounter }/>
                        </main>
                );
        }
}

export default Overview;
