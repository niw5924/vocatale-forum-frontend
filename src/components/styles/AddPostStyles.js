import styled from 'styled-components';

export const AddPostWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

export const AddPostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const AddPostTitle = styled.h1`
  color: #333;
`;

export const AddPostForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const AddPostInput = styled.input`
  font-size: 1.2rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const AddPostTextarea = styled.textarea`
  font-size: 1.2rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 50vh;
  line-height: 1.6;
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
