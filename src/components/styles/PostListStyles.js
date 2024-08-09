// src/components/styles/PostListStyles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const primaryColor = '#007bff'; // 배경색 정의

export const PostListWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

export const PostTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const PostTitle = styled.h1`
  text-align: center;
  color: #333;
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1rem;
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 300px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  padding-right: 2.5rem; /* 아이콘 공간 확보 */
  font-size: 1rem;
  border: 2px solid ${primaryColor}; /* 배경색과 같은 색상으로 테두리 설정 */
  border-radius: 4px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 2px solid ${primaryColor}; /* 포커스 시에도 배경색과 같은 색상으로 테두리 유지 */
  }
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 2.5rem; /* 크기 조정 */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${primaryColor};
  cursor: pointer;
`;

export const SearchIcon = styled.img`
  width: 1.8rem; /* 크기 조정 */
  height: 1.8rem; /* 크기 조정 */
`;

export const PostItem = styled.li`
  list-style: none;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const PostLink = styled(Link)`
  text-decoration: none;
  color: ${primaryColor};

  &:hover {
    text-decoration: underline;
  }
`;

export const AddPostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

export const AddPostButton = styled.button`
  display: inline-block;
  width: auto;
  padding: 0.75rem 1.5rem;
  background-color: ${primaryColor};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  & > a {
    color: white;
    text-decoration: none;
  }
`;
