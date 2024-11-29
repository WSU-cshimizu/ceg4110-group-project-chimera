import React, { useState } from "react";
import axios from "axios";
import { report } from "process";

const LikeButton = ({ postId, userId }: any) => {
  const [likeCount, setLikeCount] = useState(0); // Initial like count
  const [hasLiked, setHasLiked] = useState(false); // Track if the user has liked the post

  // Fetch the current like count for the post when the component mounts
  React.useEffect(() => {
    const fetchLikeCount = async () => {
      try {
        axios
          .get(`http://localhost:9000/api/likes/${postId}`)
          .then((res) => {
            console.log(res);
            setLikeCount(res.data.like_count);
            if (res.data.like_count == 0) console.log(res);
            setHasLiked(true);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.error("Error fetching like count:", error);
      }
    };

    fetchLikeCount();
  }, [postId]);

  React.useEffect(() => {
    const hasLiked = async () => {
      try {
        axios
          .get(`http://localhost:9000/api/likes/${postId}/${userId}`)
          .then((res) => {
            console.log(res);
            setHasLiked(res.data.has_liked);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.error("Error fetching like count:", error);
      }
    };

    hasLiked();
  }, [postId]);

  // Handle like button click
  const handleLike = async () => {
    try {
      axios
        .post("http://localhost:9000/api/like", {
          user_id: userId,
          post_id: postId,
        })
        .then((response) => {
          if (response.status === 201) {
            console.log("liked");
            setHasLiked(!hasLiked);
            setLikeCount(likeCount + 1);
          } else {
            setHasLiked(!hasLiked);
            setLikeCount(likeCount - 1);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };
  console.log(hasLiked);
  return (
    <div className="flex gap-2">
      <button
        onClick={handleLike}
        className={`py-1.5 px-3 hover:text-green-600 hover:scale-105 hover:shadow text-center border rounded-md h-8 text-sm flex items-center gap-1 lg:gap-2 transition-transform duration-300 ${
          !hasLiked
            ? "border-green-800 text-green-800" // Border only when liked
            : "bg-green-800 text-white border-green-800 transform scale-110" // Filled green and animated scaling when liked
        }`}
      >
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${
            hasLiked ? "transform scale-125 text-green-500" : "text-green-800"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
          ></path>
        </svg>
        <span
          className={`${
            hasLiked ? "text-green-500" : "text-green-800"
          }`}
        >
          {likeCount}
        </span>
      </button>
    </div>
  );
};

export default LikeButton;
