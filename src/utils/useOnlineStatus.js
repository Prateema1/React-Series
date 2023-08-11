import { useState, useEffect } from "react";


const useOnlineStatus = () => {
    //check if online

    const [onlineStatus, setOnlineStatus] = useState(true);

     useEffect(() => {
        window.addEventListener("offline", (event) => {
            console.log("You are not connected to the network.");
            setOnlineStatus(false);
          });

          window.addEventListener("online", (event) => {
            console.log("You are not connected to the network.");
            setOnlineStatus(true);
          });
     }, []);

    return onlineStatus;
}

export default useOnlineStatus;