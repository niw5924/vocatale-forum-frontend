// src/components/styles/PostDetailStyles.js
import styled from 'styled-components';

export const PostDetailWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const PostTitle = styled.h1`
  color: #333;
`;

export const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: gray;
  margin-bottom: 0.5rem;
`;

export const PostInfo = styled.div`
  display: flex;
  gap: 1rem;
`;

export const PostTime = styled.div`
  font-size: 0.9rem;
  color: gray;
`;

export const PostContent = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 1rem 0;
  height: 50vh;
  overflow: auto;
`;

export const Button = styled.button`
  display: inline-block;
  margin: 0.5rem 0.5rem 0 0;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: #0056b3;
  }
`;

export const CommentSection = styled.div`
  margin-top: 2rem;
`;

export const CommentTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const CommentTitle = styled.h2`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

export const CommentCount = styled.span`
  font-size: 1.5rem;
  color: blue;
`;

export const CommentList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const CommentItem = styled.li`
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommentInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

export const CommentInput = styled.input`
  flex-grow: 1;
  padding: 0.5rem;
  margin-right: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const AddCommentButton = styled(Button)`
  width: 100px;
`;
