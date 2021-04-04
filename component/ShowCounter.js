import React from 'react'
import {connect} from "react-redux";



function ShowCounter({siteSettings}){

    return(
        <div>
            <h3>
                {siteSettings.counter}
            </h3>
        </div>
    )
}const mapStateToProps = state => ({
    ...state
});
export default connect(mapStateToProps,{}) (ShowCounter)

