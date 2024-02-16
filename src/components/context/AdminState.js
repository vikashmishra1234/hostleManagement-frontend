import React, { useState } from 'react'
import AdminContext from './AdminContext.js';

const AdminState = (props) => {
    const [Logined,setLogin]=useState(false);
  return (
    <AdminContext.Provider value={{Logined,setLogin}} >
        {props.children}
    </AdminContext.Provider>
  )
}

export default AdminState
