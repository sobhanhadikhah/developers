import { db, } from "../firebase/config";
import { getDocs,collection } from "firebase/firestore";

const tagsRef = collection(db,"tags");

async function fetchTags(setTags){
const data = await getDocs(tagsRef);
const fData = data.docs.map((document) => (
    { ...document.data(), id: document.id }
))
    
    console.log(fData[0].tags);
    setTags(fData[0].tags)
};
export default fetchTags;