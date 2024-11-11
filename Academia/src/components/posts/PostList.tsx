import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { Post } from '../../types';

const MOCK_POSTS: Post[] = [
  {
    id: '1',
    content: 'Just finished my final project presentation! 🎉',
    author: {
      id: '1',
      name: 'John Doe',
      email: 'john@eastdelta.edu.bd',
      role: 'user',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    createdAt: new Date().toISOString(),
    likes: 12,
    comments: [],
  },
  {
    id: '2',
    content: 'Important announcement: Programming contest registration is now open! 💻',
    author: {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@eastdelta.edu.bd',
      role: 'admin',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    createdAt: new Date(Date.now() - 3600000).toISOString(),
    likes: 24,
    comments: [],
    images: ['https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
  },
];

export const PostList: React.FC = () => {
  return (
    <div className="space-y-6">
      {MOCK_POSTS.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4">
        <div className="flex items-center">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="h-10 w-10 rounded-full"
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
            <p className="text-sm text-gray-500">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        <p className="mt-4 text-gray-900">{post.content}</p>
        {post.images && post.images.length > 0 && (
          <div className="mt-4">
            <img
              src={post.images[0]}
              alt="Post content"
              className="rounded-lg w-full"
            />
          </div>
        )}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex space-x-4">
            <button className="flex items-center text-gray-700 hover:text-primary-600">
              <Heart className="h-5 w-5 mr-1" />
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center text-gray-700 hover:text-primary-600">
              <MessageCircle className="h-5 w-5 mr-1" />
              <span>{post.comments.length}</span>
            </button>
          </div>
          <button className="text-gray-700 hover:text-primary-600">
            <Share2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};