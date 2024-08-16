import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newPost = {
      title: title.trim(),
      content: content.trim(),
      comments: []  // 초기 댓글 배열을 설정
    };
    
    try {
      const response = await fetch("http://127.0.0.1:8000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });
    
      if (!response.ok) {
        throw new Error("Failed to add post");
      }
    
      console.log("Post added successfully");
      navigate('/');  // 게시물이 성공적으로 추가되면 메인 페이지로 이동
    } catch (error) {
      console.error("Error adding post:", error);
    }
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
