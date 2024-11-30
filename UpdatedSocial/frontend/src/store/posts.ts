import { create } from 'zustand';
import type { Post } from '../types';

interface PostsState {
  posts: Post[];
  deletedPosts: Post[];
  addPost: (post: Post) => void;
  updatePost: (postId: string, updates: Partial<Post>) => void;
  deletePost: (postId: string) => void;
  restorePost: (postId: string) => void;
  likePost: (postId: string, userId: string) => void;
  addComment: (postId: string, comment: { id: string; userId: string; content: string; createdAt: Date }) => void;
}

export const usePostsStore = create<PostsState>((set) => ({
  posts: [],
  deletedPosts: [],
  addPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
  updatePost: (postId, updates) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              ...updates,
              editHistory: [
                ...(post.editHistory || []),
                {
                  timestamp: new Date(),
                  previousContent: post.content,
                },
              ],
            }
          : post
      ),
    })),
  deletePost: (postId) =>
    set((state) => {
      const post = state.posts.find((p) => p.id === postId);
      if (!post) return state;

      return {
        posts: state.posts.filter((p) => p.id !== postId),
        deletedPosts: [...state.deletedPosts, { ...post, deletedAt: new Date() }],
      };
    }),
  restorePost: (postId) =>
    set((state) => {
      const post = state.deletedPosts.find((p) => p.id === postId);
      if (!post) return state;

      return {
        deletedPosts: state.deletedPosts.filter((p) => p.id !== postId),
        posts: [...state.posts, { ...post, deletedAt: undefined }],
      };
    }),
  likePost: (postId, userId) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              likes: post.likes.includes(userId)
                ? post.likes.filter((id) => id !== userId)
                : [...post.likes, userId],
            }
          : post
      ),
    })),
  addComment: (postId, comment) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, comment] }
          : post
      ),
    })),
}));