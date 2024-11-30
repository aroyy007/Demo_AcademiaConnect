import React from 'react';
import { useAuthStore } from '../../store/auth';
import { usePostsStore } from '../../store/posts';
import { Heart, MessageCircle } from 'lucide-react';
import { formatDate } from '../../lib/utils';
import type { Post } from '../../types';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const user = useAuthStore((state) => state.user);
  const { likePost, addComment } = usePostsStore();
  const [comment, setComment] = React.useState('');

  const handleLike = () => {
    if (user) {
      likePost(post.id, user.id);
    }
  };

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim() || !user) return;

    addComment(post.id, {
      id: crypto.randomUUID(),
      userId: user.id,
      content: comment,
      createdAt: new Date(),
    });
    setComment('');
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex items-center mb-4">
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">{post.userId}</p>
          <p className="text-sm text-gray-500">{formatDate(post.createdAt)}</p>
        </div>
      </div>

      <p className="text-gray-800 mb-4">{post.content}</p>

      {post.images && post.images.length > 0 && (
        <div className="mb-4">
          {post.images.map((url, index) => (
            <img
              key={index}
              src={url}
              alt="Post content"
              className="rounded-lg max-h-96 w-full object-cover"
            />
          ))}
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handleLike}
          className={`flex items-center space-x-2 ${
            user && post.likes.includes(user.id) ? 'text-red-600' : 'text-gray-600'
          }`}
        >
          <Heart className="h-5 w-5" />
          <span>{post.likes.length}</span>
        </button>
        <div className="flex items-center space-x-2 text-gray-600">
          <MessageCircle className="h-5 w-5" />
          <span>{post.comments.length}</span>
        </div>
      </div>

      {post.comments.length > 0 && (
        <div className="mb-4 space-y-2">
          {post.comments.map((comment) => (
            <div key={comment.id} className="bg-gray-50 p-2 rounded">
              <p className="text-sm font-medium">{comment.userId}</p>
              <p className="text-sm text-gray-600">{comment.content}</p>
              <p className="text-xs text-gray-500">{formatDate(comment.createdAt)}</p>
            </div>
          ))}
        </div>
      )}

      <form onSubmit={handleComment} className="flex gap-2">
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={!comment.trim()}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          Post
        </button>
      </form>
    </div>
  );
}