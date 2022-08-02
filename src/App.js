import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import {  message, Modal, Button } from 'antd';
import {useState} from 'react'
import './App.css';

function Home() {
  return <>
    Home 
    <Link to="/app/matter/seniorList">跳转到项目</Link>
    <About></About>
  </>
}

function About() {
  return <>About<Link to="/app/my/task/list/">跳转到我的</Link></>
}

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div onClick={() =>{
          message.info('This is a normal message')
        }}>提示语</div>
        <Button type="primary" onClick={showModal}>
        Open Modal
        </Button>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Routes>
          <Route path="/app/tool/search/case" element={<Home />} />
          {/* <Route path="/" element={<About />} /> */}
        </Routes>
      </header>
    </div>
  );
}

export default App;
