import React, {useState} from 'react';

const SuspenseLoader = () => {
        return(
            <div className="susp-loader susp-loader_modifier">
                    <div className="susp-loader__inner">
                            <svg className="susp-loader__circular" viewBox="25 25 50 50">
                                    <circle className="susp-loader__circular-path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
                            </svg>
                    </div>
            </div>
        )
}

export default SuspenseLoader;