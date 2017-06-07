import ReactDOM from 'react-dom'
import React from 'react'
import './index.scss'
import {Icon} from 'antd'

class Home extends React.Component{
  render(){
    return <div className='home-wrap'>
        <Header />
        {this.props.children}
        <Footer />
    </div>
  }
}
class Footer extends React.Component{
  render(){
    return <footer>
      <div>
        <span>技术支持：</span>
        <img src={require('./img/footer-logo.png')} />
        <span>成都华栖云科技有限公司【华栖云教】</span>
      </div>
    </footer>
  }
}
class Header extends React.Component{
  render(){
    return <header>
      <div>
        <div className='header-left'>
          <a href="#"><img src={require('./img/logo.png')} alt='logo'/></a>
          <div>
            <b>华栖云教</b>
            <span>· 开放式云工具平台</span>
          </div>
        </div>
        <div className='header-right'>
          <span>你好，叶树林</span>
          <a href='javascript:void(0)' className='header-bt'>退出</a>
        </div>
        <div className='header-tools'>
        <a href='javascript:void(0);'>
          <Icon type='rollback'/>
          <span>返回列表</span>
        </a>
          <a href='javascript:void(0);'>
            <Icon type='question-circle-o'/>
            <span>常见问题</span>
          </a>
          <a href='javascript:void(0);'>
            <Icon type='download'/>
            <span>插件下载</span>
          </a>
        </div>
      </div>
    </header>
  }
}



export default Home;
