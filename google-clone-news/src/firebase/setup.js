import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAe6KahLhgzSNgWw11icbiJO6sL9F5_zYE",
    authDomain: "clone-news-fa0d9.firebaseapp.com",
    projectId: "clone-news-fa0d9",
    storageBucket: "clone-news-fa0d9.appspot.com",
    messagingSenderId: "416780766659",
    appId: "1:416780766659:web:235c721f0cbac591d24176"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const googleProvider = new GoogleAuthProvider()