import { useEffect } from "react";

function useTitle(title){
    document.title = title + " | DEVELOPERS";
}
export default useTitle;