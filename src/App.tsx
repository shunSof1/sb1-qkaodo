import React, { useState } from 'react';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import PostForm from './components/PostForm';
import { initialPosts } from './data';
import { Post } from './types';
import { PenSquare } from 'lucide-react';

function App() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const [isWriting, setIsWriting] = useState(false);

  const selectedPost = posts.find(post => post.id === selectedPostId);

  const handleNewPost = (title: string, content: string) => {
    const newPost: Post = {
      id: posts.length + 1,
      title,
      content,
      author: '사용자',
      date: new Date().toISOString().split('T')[0],
      comments: []
    };
    setPosts([newPost, ...posts]);
    setIsWriting(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">게시판</h1>
          {!selectedPostId && !isWriting && (
            <button
              onClick={() => setIsWriting(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <PenSquare size={20} />
              글쓰기
            </button>
          )}
        </div>

        {isWriting ? (
          <PostForm
            onSubmit={handleNewPost}
            onCancel={() => setIsWriting(false)}
          />
        ) : selectedPost ? (
          <PostDetail
            post={selectedPost}
            onBack={() => setSelectedPostId(null)}
          />
        ) : (
          <PostList
            posts={posts}
            onPostClick={setSelectedPostId}
          />
        )}
      </div>
    </div>
  );
}

export default App;