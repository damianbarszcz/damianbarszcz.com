import React, { Component } from 'react';
import axios from 'axios';

{  /*  Components */ }
import { Sidenav, OverviewPanel } from '../../components';

class Overview extends Component {

        constructor(props){  
                super(props);

                this.state = {   pubCollection:[] , projectsPubCounter:[], reviewsPubCounter:[], draftsPubCounter:[], date: new Date() }    
        } 

        //componentDidMount() {  
               // document.title = "Dashboard | Overview";

              //  axios.get('/api/member/collection').then(response => { this.setState({ pubCollection: response.data });  }).catch(errors => { console.log(errors); })
      //  }

        componentDidMount() {  
                document.title = "Pulpit | Przegląd";

                const requestCollection = axios.get(`/api/member/collection`);
                const requestCounter  = axios.get(`/api/member/overview/counter`);

                axios.all([ requestCollection , requestCounter ]).then(axios.spread((...responses) => {

                        this.setState({   pubCollection: responses[0].data, projectsPubCounter: responses[1].data, reviewsPubCounter: responses[1].data, draftsPubCounter: responses[1].data })
                        console.log(this.state.pubCollection)
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
                        <>     
                                <Sidenav />
                                <OverviewPanel pubCollection ={ pubCollection } projectsPubCounter={ projectsPubCounter } reviewsPubCounter ={ reviewsPubCounter }
                                draftsPubCounter ={ draftsPubCounter }/>
                        </>
                );
        }
}

export default Overview;
