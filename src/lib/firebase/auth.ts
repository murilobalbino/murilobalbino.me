import { GithubAuthProvider, browserLocalPersistence, getAuth, setPersistence, signInWithPopup } from 'firebase/auth'

import firebaseApp from './app'

const auth = getAuth(firebaseApp)

export async function signInGithub() {
    try {
        await setPersistence(auth, browserLocalPersistence)
        const provider = new GithubAuthProvider()
        return signInWithPopup(auth, provider)
    } catch (error) {
        alert('Não foi possível realizar o login.')
    }
}

export function onUpdateUser(callback: (user: any) => void) {
    return auth.onAuthStateChanged(callback)
}

export function signOut() {
    return auth.signOut()
}
