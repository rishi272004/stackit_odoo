import { useState, useEffect } from 'react';
import { fetchNotifications } from '../api/api';

export default function NotificationBell() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetchNotifications();
        const unread = res.data.filter(n => !n.isRead).length;
        setCount(unread);
      } catch (err) {
        // Not logged in or error
      }
    };
    load();
  }, []);

  return (
    <button className="relative">
      🔔
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">{count}</span>
      )}
    </button>
  );
}
