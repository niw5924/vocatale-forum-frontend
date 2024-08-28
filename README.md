/**
 * 서버 API 함수들
 * 
 * 이 모듈은 게시물과 댓글을 처리하는 API 요청 함수들을 포함하고 있습니다.
 * 각 함수는 비동기로 서버에 요청을 보내고 데이터를 가져오거나 수정, 삭제합니다.
 * 
 * 1. fetchPosts: 모든 게시물을 가져옵니다.
 *    - 사용법: const posts = await fetchPosts();
 *    - 실패 시 콘솔에 오류를 출력하고 빈 배열을 반환합니다.
 * 
 * 2. getPost: 특정 게시물을 ID로 가져옵니다.
 *    - 사용법: const post = await getPost(postId);
 *    - 실패 시 콘솔에 오류를 출력합니다.
 * 
 * 3. addPost: 새로운 게시물을 추가합니다.
 *    - 사용법: const addedPost = await addPost({ title: "Title", content: "Content" });
 *    - 실패 시 콘솔에 오류를 출력합니다.
 * 
 * 4. updatePost: 기존 게시물을 수정합니다.
 *    - 사용법: const updated = await updatePost({ id: postId, title: "Updated Title" });
 *    - 실패 시 ID 누락 시 오류 발생, 요청 실패 시 콘솔에 오류를 출력합니다.
 * 
 * 5. deletePost: 게시물을 삭제합니다.
 *    - 사용법: const isDeleted = await deletePost(postId);
 *    - 실패 시 콘솔에 오류를 출력하고 false를 반환합니다.
 * 
 * 6. addCommentToPost: 게시물에 댓글을 추가합니다.
 *    - 사용법: const comment = await addCommentToPost(postId, { content: "Nice post!" });
 *    - 실패 시 댓글 내용이 없으면 오류 발생, 요청 실패 시 콘솔에 오류를 출력합니다.
 * 
 * 7. deleteCommentFromPost: 게시물의 특정 댓글을 삭제합니다.
 *    - 사용법: const isCommentDeleted = await deleteCommentFromPost(postId, commentId);
 *    - 실패 시 콘솔에 오류를 출력하고 false를 반환합니다.
 */
