// src/components/EditPost.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { postList, updatePost } from '../postsData';
import {
  EditPostWrapper,
  EditPostHeader,
  EditPostTitle,
  EditPostForm,
  EditPostInput,
  EditPostTextarea,
  Button
} from './styles/EditPostStyles';

const EditPost = () => {
  const { id } = useParams();
  const post = postList.find(post => post.id === parseInt(id));
  const navigate = useNavigate();
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  if (!post) {
    return <div>게시물을 찾을 수 없습니다</div>;
  }

  const handleSave = (e) => {
    e.preventDefault();
    updatePost({ id: post.id, title, content, comments: post.comments });
    navigate(`/post/${post.id}`);
  };

  return (
    <EditPostWrapper>
      <EditPostHeader>
        <EditPostTitle>게시물 수정</EditPostTitle>
      </EditPostHeader>
      <EditPostForm onSubmit={handleSave}>
        <EditPostInput 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
        <EditPostTextarea 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          required 
        />
        <div>
          <Button type="submit">저장</Button>
          <Button onClick={() => navigate(`/post/${post.id}`)}>취소</Button>
        </div>
      </EditPostForm>
    </EditPostWrapper>
  );
};

export default EditPost;
