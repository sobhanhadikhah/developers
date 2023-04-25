import { getDocs,collection } from "firebase/firestore";
import { db } from "../firebase/config";


const postRef = collection(db, "posts");


async function getPosts(setPosts) {
    
    const data = await getDocs(postRef)
    
    setPosts(
        data.docs.map((document) => (
            { ...document.data(), id: document.id }
        ))
    )   
    
}
export default getPosts;