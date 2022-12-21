import React, {useState} from "react";
import './App.css';
import Header from './componets/Header';
import Navigation from './componets/Navigation';
import Footer from './componets/Footer';
import Content from './componets/Content';
import Page from "./componets/Page";

function App() {
  const [page, setPage] = useState("about") 
  return ( 
  <>
  <Header/>
    <Navigation page={page}/> 
  <main>
    <Content>
      <Page currentPage={page}/> 

    </Content>
  </main>
  <Footer></Footer>
  
  
  </>

    
  ); 
}

export default App;
