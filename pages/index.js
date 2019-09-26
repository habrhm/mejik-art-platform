import { Layout, Menu, Breadcrumb, Icon, Collapse } from 'antd';
import Card from '../components/card';
import Nav from '../components/nav';
import style from '../assets/styles.less';
import React, { Component } from 'react';

const { Header, Content, Sider } = Layout;
const { Panel } = Collapse;


class index extends Component {
  constructor(props) {
    super(props);
    this.state = {

      item: '',
      selectedLayout: '',
    };
  }

  onClick = (e) => {
    console.log('====================================');
    console.log(e);
    console.log('====================================');
    this.setState({ item: e.key })
  }

  render() {
    return (
      <Layout
        style={{
          minHeight: '100vh'
        }}
      >
        <Header className="header"
          style={{ height: "50px", background: '#8854D0' }}
        >
          <div className="logo" />
          <Menu
            style={{ background: '#8854D0' }}
            mode="horizontal"
            defaultSelectedKeys={['2']}
          //style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
        <Sider
            width={300}
            style={{
              background : '#FFFFFF'
            }}
          >

          </Sider>
          <Content
            style={{
              background: '#F4F7FC',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {this.state.selectedLayout}
          </Content>
          <Sider
            width={300}
            style={{
              background : '#FFFFFF'
            }}
          >
            <Collapse

              style={{
                borderRadius: 0
              }}
              bordered={false}
              expandIconPosition={'right'}
            >
              <Panel header="Sign In" key="1">
                <div style={{
                  display: 'flex',
                  margin: '-5px',
                  
                  // alignContent: 'space-between',
                  // justifyContent: 'space-between',
                  flexWrap: 'wrap',

                }}>
                  <Card
                    text={'Option 1'}
                    value={this.state.selectedLayout}
                    name={'SignInOne'}
                    img={'../static/img/sign-in-one.png'}
                    onClick={(value) => { this.setState({ selectedLayout: value }) }}
                    selectedColor={'#8854D0'}
                  />
                  <Card
                    text={'Option 2'}
                    value={this.state.selectedLayout}
                    name={'SignInTwo'}
                    img={'../static/img/sign-in-two.png'}
                    onClick={(value) => { this.setState({ selectedLayout: value }) }}
                    selectedColor={'#8854D0'}
                  />
                  <Card
                    text={'Option 3'}
                    value={this.state.selectedLayout}
                    name={'SignInThree'}
                    img={'../static/img/sign-in-three.png'}
                    onClick={(value) => { this.setState({ selectedLayout: value }) }}
                    selectedColor={'#8854D0'}
                  />
                  <Card
                    text={'Option 4'}
                    value={this.state.selectedLayout}
                    name={'SignInFour'}
                    img={'../static/img/sign-in-four.png'}
                    onClick={(value) => { this.setState({ selectedLayout: value }) }}
                    selectedColor={'#8854D0'}
                  />
                  <Card
                    text={'Option 5'}
                    value={this.state.selectedLayout}
                    name={'SignInFive'}
                    img={'../static/img/sign-in-five.png'}
                    onClick={(value) => { this.setState({ selectedLayout: value }) }}
                    selectedColor={'#8854D0'}
                  />
                </div>
              </Panel>
              <Panel header="This is panel header 2" key="2">
              </Panel>
              <Panel header="This is panel header 3" key="3">
              </Panel>
            </Collapse>
          </Sider>
        </Layout>
      </Layout>
    );
  }
}

export default index;



