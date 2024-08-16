import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [views, setViews] = useState(0); // 조회수 상태 변수 추가
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/posts/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }
        const post = await response.json();
        setTitle(post.title);
        setContent(post.content);
        setViews(post.views); // 조회수 설정
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
        navigate('/'); // 게시물을 가져오지 못하면 목록으로 리다이렉트
      }
    };

    fetchPost();
  }, [id, navigate]);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const updatedPost = {
        id,
        title,
        content,
        views, // 조회수 포함
      };

      const response = await fetch(`http://127.0.0.1:8000/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPost),
      });

      if (!response.ok) {
        throw new Error("Failed to update post");
      }

      navigate(`/post/${id}`);
    } catch (error) {
      console.error("Error updating post:", error);
    }
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
          <Button onClick={() => navigate(`/post/${id}`)}>취소</Button>
        </div>
      </EditPostForm>
    </EditPostWrapper>
  );
};

export default EditPost;
