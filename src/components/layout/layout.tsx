import React, { ReactElement } from "react";
import styled from "styled-components";

interface LayoutProps {
  children: ReactElement
}

function Layout(p: LayoutProps){
  return (
    <Wrapper>
      <div>
        {p.children}
      </div>
    </Wrapper>
  )
} 

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  & > div {
    height: 100vh;
    border: 1px solid red;
    width: 600px;
    margin: 0 auto;
  }
`

export function withLayout<T>(Component: React.ComponentType<T>){
  return (props: T) => (
    <Layout>
      <Component {...props}/>
    </Layout>
  )
}