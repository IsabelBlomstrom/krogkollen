import React, {createContext, useState, useEffect} from 'react'
import { useContext } from 'react'
import { Alert } from 'react-native'
import { auth } from './base' 
import app from './base'

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const [pubs, setPubs] = useState([])

    useEffect(() => {
          const unsubscribe = auth.onAuthStateChanged(async (user) => {
            setCurrentUser(user)
            setLoading(false)
            let sessionEnding = null;
            let date = new Date()
            if(user === null) {
                sessionEnding && clearTimeout(sessionEnding);
                sessionEnding = null;
            }
              else if(user) {
                const db = app.firestore()
                const ref = app.storage().refFromURL('gs://krogkollen-f1cd6.appspot.com');
                const url = ref.child('image.png');
                db.collection('pub').where("owner", "==", user.uid)
                .onSnapshot((snapShot) => {
                  const newPub = snapShot.docs.map((doc) => ({
                      id: doc.id,
                      url,
                      ...doc.data()
                  }))
                  setPubs(newPub)
              })
              user.getIdTokenResult().then((idToken) => {
                const authenticationTime = idToken.claims.auth_time * 1000;
                const sessionDuration = 1000 * 60 * 60 * 24;
                const untilExpireTime = sessionDuration - (date - authenticationTime);
                sessionEnding = setTimeout(() => auth.signOut(), untilExpireTime);
              }
              )}
          });
          return unsubscribe;
      }, []);

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }


    function logout() {
        return auth.signOut()
    }

    const value = {
        pubs,
        currentUser,
        login,
        logout,
    }
    
    return(
        <AuthContext.Provider value={value}>
        {!loading && children}
        </AuthContext.Provider>
    )
}
