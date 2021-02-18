import { Layout, Menu } from 'antd';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import LanguageSelector from '../components/LanguageSelector';
import { PieChartOutlined, FileOutlined, UserOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const withSideMenu = (props) => (WrappedContent) => {
  class SideMenu extends React.Component {
    state = {
      collapsed: false,
    };

    onCollapse = (collapsed) => {
      console.log(collapsed);
      this.setState({ collapsed });
    };

    getPathName = (pathname) => {
      if (pathname === '/') return 'home';

      return pathname.split('/')[1];
    };

    render() {
      const { t, history, location } = this.props;
      const { pathname } = location;
      return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className='logo' />
            <Menu theme='dark' defaultSelectedKeys={['home']} mode='inline' selectedKeys={this.getPathName(pathname)}>
              <Menu.Item onClick={() => history.push('/')} key='home' icon={<PieChartOutlined />}>
                {t('SideMenu.data')}
              </Menu.Item>

              <SubMenu key='sub1' icon={<UserOutlined />} title={t('SideMenu.user.title')}>
                <Menu.Item onClick={() => history.push('/users')} key='users'>
                  {t('SideMenu.user.userManagement')}
                </Menu.Item>
              </SubMenu>

              <Menu.Item key='9' icon={<FileOutlined />}>
                {t('SideMenu.file')}
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className='site-layout'>
            <Header className='site-layout-background'>
              <LanguageSelector />
            </Header>

            <WrappedContent {...this.props} />

            <Content style={{ margin: '0 16px' }}></Content>
            <Footer style={{ textAlign: 'center' }}>{t('title')}</Footer>
          </Layout>
        </Layout>
      );
    }
  }

  return withRouter(withTranslation()(SideMenu));
};

export default withSideMenu;
