import React, {createContext, useState, useEffect} from 'react'
import { useContext } from 'react'
import { auth } from './base' 

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logOffuser(){
        return auth.signOut()
      }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false)
        }) 
        return unsubscribe;
    }, [])


    const value = {
        currentUser,
        login,
        logOffuser,
    }
    

    return(
        <AuthContext.Provider value={value}>
        {!loading && children}
        </AuthContext.Provider>
    )
}