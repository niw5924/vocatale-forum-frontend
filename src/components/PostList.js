// src/components/PostList.js
import React, { useState, useEffect } from 'react';
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
  SearchIconWrapper,
  SearchIcon
} from './styles/PostListStyles';
import searchIcon from '../assets/images/search.png';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        console.log("Fetched data:", data); // 데이터를 로그로 확인
        setPosts(data); 
        setFilteredPosts(data); 
      } catch (error) {
        console.error("오류:", error);
      }
    };
  
    fetchPosts(); 
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
