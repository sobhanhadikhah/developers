import { useEffect } from "react";

function useTitle(title){
    useEffect(()=>{
        document.title = title + " | DEVELOPERS";
    },[title])
    return null
}
export default useTitle;