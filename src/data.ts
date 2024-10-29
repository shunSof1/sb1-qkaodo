import { Post } from './types';

export const initialPosts: Post[] = [
  {
    id: 1,
    title: '첫 번째 게시글입니다',
    content: '환영합니다! 이 게시판의 첫 게시글입니다.',
    author: '관리자',
    date: '2024-03-14',
    comments: [
      {
        id: 1,
        content: '첫 번째 댓글입니다',
        author: '사용자1',
        date: '2024-03-14',
        replies: [
          {
            id: 2,
            content: '대댓글 테스트입니다',
            author: '사용자2',
            date: '2024-03-14',
            replies: []
          }
        ]
      }
    ]
  }
];