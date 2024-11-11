import React, { useState } from 'react';
import { Image, Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuthStore } from '../../store/authStore';

export const CreatePost: React.FC = () => {
  const [content, setContent] = useState('');
  const { user } = useAuthStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement post creation
    setContent('');
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <div className="flex space-x-4">
        <img
          src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.name}`}
          alt={user?.name}
          className="h-10 w-10 rounded-full"
        />
        <form className="flex-1" onSubmit={handleSubmit}>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 resize-none"
            rows={3}
          />
          <div className="mt-3 flex justify-between items-center">
            <button
              type="button"
              className="inline-flex items-center text-gray-700 hover:text-primary-600"
            >
              <Image className="h-5 w-5 mr-2" />
              Add Photo
            </button>
            <Button type="submit" disabled={!content.trim()}>
              <Send className="h-4 w-4 mr-2" />
              Post
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};