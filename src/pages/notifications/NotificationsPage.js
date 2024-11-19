import React, { useEffect } from "react";
// import { useRedirect } from "./hooks/useRedirect";
import { useState } from "react";
const NotificationsPage = ({ userAuthStatus }) => {
  // const { notifications, loading } = useRedirect(userAuthStatus);

  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (notifications.length > 0) {
      console.log("New Notifications:", notifications);
    }
  }, [notifications]);

  if (loading) {
    return <p>Loading notifications...</p>;
  }

  return (
    <div>
      <h1>Notifications</h1>
      {notifications.length > 0 ? (
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id}>
              {notification.type === "like" && (
                <p>{notification.sender_username} liked your post: "{notification.post_title}"</p>
              )}
              {notification.type === "comment" && (
                <p>{notification.sender_username} commented on your post: "{notification.post_title}"</p>
              )}
              {notification.type === "follow" && (
                <p>{notification.sender_username} started following you.</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No new notifications</p>
      )}
    </div>
  );
};

export default NotificationsPage;

