import { Layout, Breadcrumb, Table, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import withSideMenu from '../components/SideMenu';
import DATA from '../data/fake.json';

const { Content, Footer } = Layout;
const { Title } = Typography;

function SiderDemo(props) {
  const { t } = useTranslation();

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const columns = [
    {
      title: t('HomeData.table.name'),
      dataIndex: 'name',
    },
    {
      title: t('HomeData.table.email'),
      dataIndex: 'email',
    },
    {
      title: t('HomeData.table.cnScore'),
      dataIndex: 'chinese',
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: t('HomeData.table.mathScore'),
      dataIndex: 'math',
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: t('HomeData.table.enScore'),
      dataIndex: 'english',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
  ];
  return (
    <>
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Data</Breadcrumb.Item>
          <Breadcrumb.Item>{t('HomeData.title')}</Breadcrumb.Item>
        </Breadcrumb>
        <div className='site-layout-background' style={{ padding: 24, minHeight: 360 }}>
          <Title level={3}>{t('HomeData.title')}</Title>
          <Table columns={columns} dataSource={DATA} onChange={onChange} />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>{t('title')}</Footer>
    </>
  );
}

export default withSideMenu()(SiderDemo);
