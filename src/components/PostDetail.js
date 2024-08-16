import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  PostDetailWrapper, 
  PostHeader, 
  PostTitle, 
  PostMeta, 
  PostInfo, 
  PostContent, 
  Button, 
  CommentSection, 
  CommentTitleWrapper,
  CommentTitle, 
  CommentCount, 
  CommentList, 
  CommentItem, 
  CommentInputWrapper,
  CommentInput, 
  AddCommentButton 
} from './styles/PostDetailStyles';
import { getPost, addCommentToPost, deleteCommentFromPost, deletePost } from '../postsData';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getPost(id);
        setPost({ ...data, comments: data.comments || [] });
  
        // 조회수 증가를 위한 별도 API 호출
        await increaseViews(id);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
  
    fetchPost();
  }, [id]);
  
  const increaseViews = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/posts/${id}/views`, {
        method: "PATCH",
      });
  
      if (!response.ok) {
        throw new Error("Failed to increase views");
      }
  
      const updatedPost = await response.json();
      setPost(prevPost => ({
        ...prevPost,
        views: updatedPost.views, // post 객체의 views를 업데이트
      }));
    } catch (error) {
      console.error("Error increasing views:", error);
    }
  };
  
  const addComment = async () => {
    if (comment.trim() === '') return;

    try {
      const newComment = await addCommentToPost(id, { content: comment });

      if (newComment) {
        setPost(prevPost => ({
          ...prevPost,
          comments: [...prevPost.comments, newComment],
        }));
        setComment('');  // 입력 필드 초기화
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };  

  const deleteComment = async (commentId) => {
    try {
      const success = await deleteCommentFromPost(id, commentId);

      if (success) {
        setPost(prevPost => ({
          ...prevPost,
          comments: prevPost.comments.filter(comment => comment.id !== commentId),
        }));
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const handleDeletePost = async () => {
    try {
      const success = await deletePost(id);
      if (success) {
        navigate('/'); // 게시물 삭제 후 목록으로 돌아가기
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  if (!post) {
    return <div>게시물을 찾을 수 없습니다</div>;
  }

  return (
    <PostDetailWrapper>
      <PostHeader>
        <PostTitle>{post.title}</PostTitle>
      </PostHeader>
      <PostMeta>
        <PostInfo>
          <div>조회 {post.views}</div> {/* views 필드를 사용하여 조회수 표시 */}
          <div>댓글 {post.comments.length}</div>
        </PostInfo>
      </PostMeta>
      <hr />
      <PostContent>{post.content}</PostContent>
      <div>
        <Button onClick={() => navigate(`/edit-post/${post.id}`)}>게시물 수정</Button>
        <Button onClick={handleDeletePost} style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}>게시물 삭제</Button> {/* 삭제 버튼 추가 */}
        <Button as={Link} to="/" style={{ marginLeft: '10px' }}>목록으로 돌아가기</Button>
      </div>
      <CommentSection>
        <CommentTitleWrapper>
          <CommentTitle>댓글</CommentTitle>
          <CommentCount>({post.comments.length})</CommentCount>
        </CommentTitleWrapper>
        <CommentList>
          {post.comments && post.comments.map((comment) => (
            <CommentItem key={comment.id}>
              {comment.content} <Button onClick={() => deleteComment(comment.id)}>삭제</Button>
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
