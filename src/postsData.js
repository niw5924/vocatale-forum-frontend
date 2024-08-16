// 서버에서 게시물 데이터를 불러오는 함수
export const fetchPosts = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/posts");
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts", error);
    return [];
  }
};

// 게시물 하나를 가져오는 함수
export const getPost = async (id) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/posts/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch post");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching post with id ${id}`, error);
  }
};

// 게시물 추가 함수
export const addPost = async (post) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });

    if (!response.ok) {
      throw new Error("Failed to add post");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding post", error);
  }
};

// 게시물 수정 함수
export const updatePost = async (updatedPost) => {
  try {
    if (!updatedPost.id) {
      throw new Error("Post ID is missing");
    }
    
    const response = await fetch(`http://127.0.0.1:8000/posts/${updatedPost.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    });

    if (!response.ok) {
      throw new Error("Failed to update post");
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating post", error);
  }
};

// 게시물 삭제 함수
export const deletePost = async (postId) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/posts/${postId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete post");
    }

    return true; // 삭제 성공 시 true 반환
  } catch (error) {
    console.error("Error deleting post", error);
    return false;
  }
};

// 게시물에 댓글 추가 함수
export const addCommentToPost = async (postId, comment) => {
  try {
    if (!comment.content) {
      throw new Error("Comment content is missing");
    }

    const response = await fetch(`http://127.0.0.1:8000/posts/${postId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });

    if (!response.ok) {
      throw new Error("Failed to add comment");
    }

    const data = await response.json(); // 서버가 JSON 응답을 반환하는지 확인
    return data;
  } catch (error) {
    console.error("Error adding comment", error);
    throw error; // 오류를 발생시켜 호출자가 처리할 수 있도록 함
  }
};

// 게시물에서 댓글 삭제 함수
export const deleteCommentFromPost = async (postId, commentId) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/posts/${postId}/comments/${commentId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete comment");
    }

    return true;
  } catch (error) {
    console.error("Error deleting comment", error);
    return false;
  }
};
