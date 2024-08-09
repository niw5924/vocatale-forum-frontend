// src/components/PostList.js
import React, { useState, useEffect } from 'react';
import { postList } from '../postsData';
import { 
  PostListWrapper, 
  PostTitleWrapper, 
  PostTitle, 
  SearchWrapper,
  PostItem, 
  PostLink, 
  AddPostButtonWrapper,
  AddPostButton, 
  SearchInputWrapper, 
  SearchInput,
  SearchIconWrapper, // 추가된 부분
  SearchIcon
} from './styles/PostListStyles';
import searchIcon from '../assets/images/search.png'; // 이미지 경로를 적절히 수정하세요

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    setPosts([...postList]); // postList가 변경될 때마다 상태를 업데이트
    setFilteredPosts([...postList]); // 초기 상태로 모든 포스트를 표시
  }, []);

  const handleSearch = () => {
    setFilteredPosts(posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    ));
  };

  return (
    <PostListWrapper>
      <PostTitleWrapper>
        <PostTitle>게시물</PostTitle>
      </PostTitleWrapper>
      <SearchWrapper>
        <SearchInputWrapper>
          <SearchInput
            type="text"
            placeholder="게시물 검색"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchIconWrapper onClick={handleSearch}>
            <SearchIcon src={searchIcon} alt="search" />
          </SearchIconWrapper>
        </SearchInputWrapper>
      </SearchWrapper>
      <ul>
        {filteredPosts.map(post => (
          <PostItem key={post.id}>
            <PostLink to={`/post/${post.id}`}>{post.title}</PostLink>
          </PostItem>
        ))}
      </ul>
      <AddPostButtonWrapper>
        <AddPostButton>
          <PostLink to="/add-post">글쓰기</PostLink>
        </AddPostButton>
      </AddPostButtonWrapper>
    </PostListWrapper>
  );
};

export default PostList;
