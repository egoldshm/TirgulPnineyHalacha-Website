import firebaseConfig from './firebase.config'
import firebase from "firebase/app";
import "firebase/database";
export async function getAllBooks() {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    }
    let database = firebase.database()
    let keys = await (await database.ref('books').once('value')).val()
    keys = keys.map(item => item["name"]);
    console.log(keys)
    return keys
}