import React from 'react';
import { Post } from '../types';
import { Clock, MessageSquare, User } from 'lucide-react';

interface PostListProps {
  posts: Post[];
  onPostClick: (id: number) => void;
}

export default function PostList({ posts, onPostClick }: PostListProps) {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div
          key={post.id}
          onClick={() => onPostClick(post.id)}
          className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <div className="flex items-center text-sm text-gray-600 space-x-4">
            <span className="flex items-center">
              <User size={16} className="mr-1" />
              {post.author}
            </span>
            <span className="flex items-center">
              <Clock size={16} className="mr-1" />
              {post.date}
            </span>
            <span className="flex items-center">
              <MessageSquare size={16} className="mr-1" />
              {post.comments.length}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}