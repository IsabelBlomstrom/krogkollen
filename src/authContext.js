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
              if(user) {
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
              } else {
                  console.log("hittade ingen user");
              }
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
