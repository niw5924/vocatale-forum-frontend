// src/components/PostDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { postList, addCommentToPost, deleteCommentFromPost, savePosts } from '../postsData';
import { 
  PostDetailWrapper, 
  PostHeader, 
  PostTitle, 
  PostMeta, 
  PostInfo, 
  PostTime, 
  PostContent, 
  Button, 
  CommentSection, 
  CommentTitleWrapper,  // 추가된 부분
  CommentTitle, 
  CommentCount,  // 추가된 부분
  CommentList, 
  CommentItem, 
  CommentInputWrapper,
  CommentInput, 
  AddCommentButton 
} from './styles/PostDetailStyles';

const PostDetail = () => {
  const { id } = useParams();
  const post = postList.find(post => post.id === parseInt(id));
  const navigate = useNavigate();
  const [comment, setComment] = useState('');
  const [views, setViews] = useState(post ? post.views : 0);

  useEffect(() => {
    if (post) {
      const updatedViews = post.views + 1;
      setViews(updatedViews);
      post.views = updatedViews;
      savePosts(postList);
    }
  }, [post]);

  if (!post) {
    return <div>게시물을 찾을 수 없습니다</div>;
  }

  const addComment = () => {
    addCommentToPost(post.id, comment);
    setComment('');
  };

  const deleteComment = (index) => {
    deleteCommentFromPost(post.id, index);
  };

  return (
    <PostDetailWrapper>
      <PostHeader>
        <PostTitle>{post.title}</PostTitle>
      </PostHeader>
      <PostMeta>
        <PostTime>{new Date(post.createdAt).toLocaleString()}</PostTime>
        <PostInfo>
          <div>조회 {views}</div>
          <div>댓글 {post.comments.length}</div>
        </PostInfo>
      </PostMeta>
      <hr />
      <PostContent>{post.content}</PostContent>
      <div>
        <Button onClick={() => navigate(`/edit-post/${post.id}`)}>게시물 수정</Button>
        <Button as={Link} to="/">목록으로 돌아가기</Button>
      </div>
      <CommentSection>
        <CommentTitleWrapper>
          <CommentTitle>댓글</CommentTitle>
          <CommentCount>({post.comments.length})</CommentCount>
        </CommentTitleWrapper>
        <CommentList>
          {post.comments && post.comments.map((comment, index) => (
            <CommentItem key={index}>
              {comment} <Button onClick={() => deleteComment(index)}>삭제</Button>
            </CommentItem>
          ))}
        </CommentList>
        <CommentInputWrapper>
          <CommentInput 
            type="text" 
            placeholder="댓글 추가" 
            value={comment} 
            onChange={(e) => setComment(e.target.value)} 
          />
          <AddCommentButton onClick={addComment}>댓글 추가</AddCommentButton>
        </CommentInputWrapper>
      </CommentSection>
    </PostDetailWrapper>
  );
};

export default PostDetail;
