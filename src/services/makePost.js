import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase/config";

const postRef = collection(db, "posts");
async function sendPost(data){
    const date = new Date()
    const document = {
        title: data.title,
        description: data.description,
        author: {
            name: auth.currentUser.displayName,
            id: auth.currentUser.uid,
            profile: auth.currentUser.photoURL
        },
        createdAt: {
            time: date.getTime(),
            date: date.toDateString()
        }
    }
    
    await addDoc(postRef, document)
}
export default sendPost;