import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addPost, postList } from '../postsData';
import {
  AddPostWrapper,
  AddPostHeader,
  AddPostTitle,
  AddPostForm,
  AddPostInput,
  AddPostTextarea,
  Button
} from './styles/AddPostStyles';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: postList.length ? postList[postList.length - 1].id + 1 : 1, // 기존 게시물이 없을 때 id를 1로 설정
      title,
      content,
      comments: []
    };
    addPost(newPost);
    navigate('/');
  };

  return (
    <AddPostWrapper>
      <AddPostHeader>
        <AddPostTitle>새 게시물 추가</AddPostTitle>
      </AddPostHeader>
      <AddPostForm onSubmit={handleSubmit}>
        <AddPostInput 
          type="text" 
          placeholder="제목" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
        <AddPostTextarea 
          placeholder="내용" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          required 
        />
        <div>
          <Button type="submit">추가</Button>
          <Button>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>뒤로가기</Link>
          </Button>
        </div>
      </AddPostForm>
    </AddPostWrapper>
  );
};

export default AddPost;
