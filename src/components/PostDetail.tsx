import React from 'react';
import { Post } from '../types';
import CommentSection from './CommentSection';
import { ArrowLeft, Clock, User } from 'lucide-react';

interface PostDetailProps {
  post: Post;
  onBack: () => void;
}

export default function PostDetail({ post, onBack }: PostDetailProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
      >
        <ArrowLeft size={20} className="mr-1" />
        목록으로
      </button>
      
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      
      <div className="flex items-center text-sm text-gray-600 space-x-4 mb-6">
        <span className="flex items-center">
          <User size={16} className="mr-1" />
          {post.author}
        </span>
        <span className="flex items-center">
          <Clock size={16} className="mr-1" />
          {post.date}
        </span>
      </div>
      
      <div className="prose max-w-none mb-8">
        {post.content}
      </div>
      
      <div className="border-t pt-6">
        <CommentSection comments={post.comments} />
      </div>
    </div>
  );
}