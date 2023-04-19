import React from 'react'
import Profile from './profile/Profile'


export default function App() {
  return (
    <div>
    {/*Profile_box*/}
     <Profile name="Lina" age={19} profession="student" >
     <img src="profile12.png" alt="profile"/>
     </Profile>
    </div>
  )
}
