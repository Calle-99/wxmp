import styled from 'styled-components';
import { Outlet, NavLink } from 'react-router-dom';
import '@wcj/dark-mode';
import { useContext } from 'react';
import { ReactComponent as LogoIcon } from '../assets/logo.svg';
import { ReactComponent as GithubIcon } from '../assets/github.svg';
import { ReactComponent as Loading } from '../assets/tail-spin.svg';
import { Context } from '../store/context';

const Warpper = styled.div``;
const HeaderPlace = styled.div`
  position: relative;
  height: 2.8rem;
`;

const Header = styled.header`
  -webkit-app-region: drag;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: var(--color-canvas-default);
  border-bottom: 1px solid var(--color-border-muted);
  padding: 0.5rem 0.6rem 0.5rem 0.8rem;
  position: fixed;
  width: 100%;
  z-index: 9;
`;

const Article = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.6rem;
`;

const Logo = styled(LogoIcon)`
  max-width: 3.6rem;
`;

const Title = styled.h1`
  font-size: 1rem;
  margin: 0;
  display: flex;
  align-items: center;
  user-select: none;
  sup {
    color: var(--color-fg-subtle);
    margin-left: 0.4rem;
    background-color: var(--color-border-muted);
    border-radius: 0.1rem;
    padding: 0 0.2rem 0 0.1rem;
    font-weight: normal;
    font-size: 0.7rem;
    letter-spacing: -0.1rem;
  }
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  dark-mode {
    font-size: 1.05rem;
    display: block;
    line-height: 12px;
    margin-left: 0.6rem;
  }
  a svg {
    display: block;
  }
  a {
    text-decoration: none;
    color: var(--color-theme-text);
    padding: 0.1rem 0.3rem;
    transition: all 0.3s;
    font-size: 0.9rem;
    border-radius: 0.2rem;
    &.active {
      background-color: var(--color-accent-fg);
      box-shadow: inset 0 -0.3rem 0 var(--color-accent-fg);
      color: #fff;
    }
    &:hover:not(.active):not(:last-child) {
      background-color: var(--color-accent-fg);
      color: #fff;
      border-radius: 0.2rem;
    }
  }
`;

export function Layout() {
  const { isLoading } = useContext(Context);
  return (
    <Warpper className="wmde-markdown-color">
      <HeaderPlace>
        <Header className="header">
          <Article className="logo">
            <Logo width={28} height={28} />
            <Title>
              微信公众号排版编辑器
              <sup> v{VERSION} </sup>
            </Title>
            {isLoading && <Loading />}
          </Article>
          <Section>
            <NavLink to="/">首页</NavLink>
            <NavLink to="/editor/theme">编辑主题</NavLink>
            <NavLink to="/doc">文档</NavLink>
            <dark-mode permanent dark="Dark" light="Light" />
            <a href="https://github.com/jaywcjlove/wxmp" target="__blank">
              <GithubIcon width={23} height={23} />
            </a>
          </Section>
        </Header>
      </HeaderPlace>
      <Outlet />
    </Warpper>
  );
}
