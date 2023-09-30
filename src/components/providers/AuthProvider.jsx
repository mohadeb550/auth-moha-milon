
import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase/firebase.config'


export const AuthContext = createContext(null);


export default function AuthProvider ({children}) {
  const [ user ,setUser ] = useState(null);

  const createUser = (email , password ) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInUser = (email, password) => {
   return signInWithEmailAndPassword(auth, email, password);
  }


  useEffect(()=>{
    
  }, [])





const authInfo = { user , createUser ,signInUser}


  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node
}


