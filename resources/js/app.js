
{  /*  React Package */ }
import React  from 'react';
import ReactDOM from 'react-dom';
import loadable from '@loadable/component';

{  /*  Templates */  }
const Basic = loadable(() => import('./roots/Basic'));
const Auth  = loadable(() => import('./roots/Auth'));
const Member = loadable(() => import('./roots/Member'));

const result = App();

function App() {
        if (document.getElementById('basic-root')) {
            return [<Basic />, "basic-root"];
        }

        else if (document.getElementById('auth-root')) {
            return [<Auth />, "auth-root"];
        }

        else if (document.getElementById('member-root')) {
            return [<Member />, "member-root"];
        }
}

ReactDOM.render( result[0],  document.getElementById( result[1] ));