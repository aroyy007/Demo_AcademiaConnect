import React from 'react';
import { MainLayout } from '../components/layouts/MainLayout';
import { CreatePost } from '../components/posts/CreatePost';
import { PostList } from '../components/posts/PostList';

export const Feed: React.FC = () => {
  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto">
        <CreatePost />
        <PostList />
      </div>
    </MainLayout>
  );
};