// src/postsData.js

// 기존 게시물 데이터
export const posts = [
  { id: 1, title: "First Post", content: "This is the first post content.", comments: [], views: 0, createdAt: '2024-08-06T22:30:22' },
  { id: 2, title: "Second Post", content: "This is the second post content.", comments: [], views: 0, createdAt: '2024-08-06T22:30:22' },
];

// 로컬 스토리지에서 게시물 데이터를 불러오는 함수
const loadPosts = () => {
  const savedPosts = localStorage.getItem('posts');
  return savedPosts ? JSON.parse(savedPosts) : posts;
};

// 로컬 스토리지에 게시물 데이터를 저장하는 함수
export const savePosts = (posts) => {
  try {
    localStorage.setItem('posts', JSON.stringify(posts));
  } catch (e) {
    console.error("Error saving to local storage", e);
  }
};

// 게시물 데이터를 로컬 스토리지에서 불러온 값으로 초기화
export const postList = loadPosts();

// 게시물 추가 함수
export const addPost = (post) => {
  postList.push({ ...post, views: 0, createdAt: new Date().toISOString() });
  savePosts(postList);
};

// 게시물 수정 함수
export const updatePost = (updatedPost) => {
  const index = postList.findIndex(post => post.id === updatedPost.id);
  if (index !== -1) {
    postList[index] = { ...updatedPost, createdAt: postList[index].createdAt, views: postList[index].views };
    savePosts(postList);
  }
};

// 게시물에 댓글 추가 함수
export const addCommentToPost = (postId, comment) => {
  const post = postList.find(post => post.id === postId);
  if (post) {
    if (!post.comments) {
      post.comments = [];
    }
    post.comments.push(comment);
    savePosts(postList);
  }
};

// 게시물에서 댓글 삭제 함수
export const deleteCommentFromPost = (postId, commentIndex) => {
  const post = postList.find(post => post.id === postId);
  if (post) {
    post.comments.splice(commentIndex, 1);
    savePosts(postList);
  }
};
