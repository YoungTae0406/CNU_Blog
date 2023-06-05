import { Link } from 'react-router-dom';
import { IPost } from '../api/types';
import styled from '@emotion/styled';
import Tag from './Tag';

const ItemLink = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  padding: 1rem 2rem;
  overflow: hidden;
  transition: border 0.2s ease 0s;
  cursor: pointer;
  border-bottom: 1px solid #eee;
  text-decoration: none;
`;

const Contents = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const PostListItem = (props: IPost) => {
  const { id, title, contents, tag } = props;
  console.info(props);
  return (
    <div>
      <ItemLink to={`/post/${id}`}>
        <h2>{title}</h2>
        <Contents>{contents}</Contents>
        <Tag>#{tag}</Tag>
      </ItemLink>
      {/*todo (3-2) 게시글 목록 아이템 작성*/}
    </div>
  );
};

export default PostListItem;
