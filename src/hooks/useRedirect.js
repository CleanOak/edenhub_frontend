import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

export const useRedirect = (userAuthStatus) => {
  const history = useHistory();
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const handleMount = async () => {
//       try {
//         await axios.post("/dj-rest-auth/token/refresh/");
//         // if user is logged in, the code below will run
//         if (userAuthStatus === "loggedIn") {
//           history.push("/");
//         }
//       } catch (err) {
//         // if user is not logged in, the code below will run
//         if (userAuthStatus === "loggedOut") {
//           history.push("/");
//         }
//       }
//     };

//     handleMount();
//   }, [history, userAuthStatus]);

//   return { notifications, loading };
// };

useEffect(() => {
  const handleMount = async () => {
    try {
      // Refresh token to ensure user is authenticated
      await axios.post("/dj-rest-auth/token/refresh/");

      // If the user is logged in
      if (userAuthStatus === "loggedIn") {
        history.push("/");

        // Fetch notifications
        const response = await axios.get("/notifications/");
        setNotifications(response.data);
      }
    } catch (err) {
      // If user is not logged in, redirect
      if (userAuthStatus === "loggedOut") {
        history.push("/");
      }
    } finally {
      setLoading(false);
    }
  };

  handleMount();
}, [history, userAuthStatus]);

return { notifications, loading };
};