// /hooks/useBookmarks.ts
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("bookmarkedUsers");
    if (stored) {
      setBookmarks(JSON.parse(stored));
    }
  }, []);

  const addBookmark = (user: any) => {
    if (bookmarks.find((b) => b.id === user.id)) {
      toast.error("User is already bookmarked.");
      return;
    }
    const updated = [...bookmarks, user];
    setBookmarks(updated);
    localStorage.setItem("bookmarkedUsers", JSON.stringify(updated));
    toast.success("User added to bookmarks.");
  };

  const removeBookmark = (userId: number) => {
    const updated = bookmarks.filter((u) => u.id !== userId);
    setBookmarks(updated);
    localStorage.setItem("bookmarkedUsers", JSON.stringify(updated));
    toast.success("User removed from bookmarks.");
  };

  return { bookmarks, addBookmark, removeBookmark };
}
