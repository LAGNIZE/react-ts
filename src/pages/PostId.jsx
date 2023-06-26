import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';

const PostId = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });
  const [fetchComments] = useFetching(async (id) => {
    const response = await PostService.getCommentsById(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  });

  return (
    <div>
      <div>PostId = {params.id}</div>
      <div>
        {post.id}. {post.title}
      </div>
      <div>
        {comments.map((comm) => (
          <div>
            {comm.email} - {comm.body}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostId;
