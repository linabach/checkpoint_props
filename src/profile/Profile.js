import React from 'react'
import './Profile.css'
import PropTypes from 'prop-types';

function Profile(props) {
  return (
    <div>
       <div className="box">
      <div className="card">
        <div className="imgBx">
           {props.children}    
        </div>
        <div className="details">
           <h2> <span style={{fontWeight: "800" , fontSize: "16px"}}> {props.name}</span> <span style={{fontWeight: "800" , fontSize: "16px"}}>{props.age}</span><span style={{fontWeight: "800" , fontSize: "16px"}}>{props.profession}</span></h2>
        </div>
      </div>
    </div>
    </div>
  )
}
/*specify the expected types of props*/
Profile.propTypes={age:PropTypes.number}
/*default prop value will be used instead*/
Profile.defaultProps={name:"lina"}
export default Profile
