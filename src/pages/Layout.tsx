import { NavLink, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.325rem;
  width: 8rem;
  height: 3rem;
  text-decoration: none;
  transition: color 0.25s ease-in-out 0s;
  font-weight: 600;
  margin: auto;
  padding-top: 20px;

  a {
    color: #777;
  }

  .active {
    color: rgb(50, 148, 248);
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
`;

const ProfilePicture = styled.img`
  display: block;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const Name = styled.h2`
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: bold;
  color: #222;
`;

const Description = styled.p`
  white-space: pre-wrap;
  font-size: 1.125rem;
  line-height: 1.5;
  margin-top: 0.25rem;
  color: #222;
  letter-spacing: -0.004em;
`;

const Layout = () => {
  return (
    <div>
      <Profile>
        <div>
          <ProfilePicture
            src="data:image/jpeg;base64,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"
            alt="프로필 사진"
          />
        </div>
        <div>
          <Name>김영태</Name>
          <Description>충남대 3학년</Description>
        </div>
      </Profile>
      <Nav>
        <NavLink to="/">포스트</NavLink>
        <NavLink to="/resume">소개</NavLink>
      </Nav>
      <Outlet />
    </div>
  );
};

export default Layout;
