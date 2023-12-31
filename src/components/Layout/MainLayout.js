import React from 'react';
import {  Layout,  theme } from 'antd';
import Header from '../Header';
const {  Content, Footer } = Layout;

const MainLayout = ({children}) => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout bg-white">
      <Header/>
      <Content
     
      >
        <div
          className="site-layout-content min-h-screen"
          style={{
            background: colorBgContainer,
          }}
        >
         {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        <p className='font-semibold'>Pc Builder ©2023 Created by Bayajid Alam</p>
      </Footer>
    </Layout>
  );
};

export default MainLayout;