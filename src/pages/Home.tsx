import PostListItem from '../components/PostListItem';
import { IResponsePostList } from '../api/types';
import { getPostList } from '../api';
import { useEffect, useState } from 'react';
import NoPostList from '../components/NoPostList';

const Home = () => {
  const [postList, setPostList] = useState<IResponsePostList>([]);

  const fetchPostList = async () => {
    const { data } = await getPostList();
    setPostList(data);
  };
  useEffect(() => {
    fetchPostList();
  }, []);

  if (postList.length === 0) {
    return <NoPostList />;
  }
  return (
    <div>
      {postList.map(({ post }, index) => (
        <PostListItem key={index} id={post.id} title={post.title} contents={post.contents} tag={post.tag} />
      ))}
      {/*todo (3-1) post 목록 작성*/}
    </div>
  );
};

export default Home;
