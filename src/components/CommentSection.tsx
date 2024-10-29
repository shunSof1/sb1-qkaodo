import React, { useState } from 'react';
import { Comment } from '../types';
import { MessageCircle, User, Clock } from 'lucide-react';

interface CommentSectionProps {
  comments: Comment[];
  parentId?: number;
}

export default function CommentSection({ comments, parentId }: CommentSectionProps) {
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 구현에서는 여기에 댓글 저장 로직 추가
    setNewComment('');
    setReplyingTo(null);
  };

  return (
    <div className="space-y-4">
      {!parentId && (
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
          <MessageCircle size={20} />
          댓글
        </h3>
      )}
      
      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder={parentId ? "답글을 작성하세요..." : "댓글을 작성하세요..."}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={3}
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          작성하기
        </button>
      </form>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className={`bg-gray-50 rounded-lg p-4 ${
              parentId ? 'ml-8 border-l-4 border-gray-200' : ''
            }`}
          >
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <span className="flex items-center">
                <User size={16} className="mr-1" />
                {comment.author}
              </span>
              <span className="flex items-center">
                <Clock size={16} className="mr-1" />
                {comment.date}
              </span>
            </div>
            
            <p className="text-gray-800 mb-2">{comment.content}</p>
            
            <button
              onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              답글달기
            </button>

            {replyingTo === comment.id && (
              <div className="mt-4">
                <CommentSection comments={[]} parentId={comment.id} />
              </div>
            )}

            {comment.replies.length > 0 && (
              <div className="mt-4">
                <CommentSection comments={comment.replies} parentId={comment.id} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}