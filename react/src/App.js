 import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Gem } from "./components/GEM";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { DataProvider } from "common/DataContext";
import './App.css';
import 'react-table-6/react-table.css';


function App() {


  return (
    <BrowserRouter>
    <DataProvider>
    <Header /> 
      <Switch>
      <Route path ="/">
       
        <Gem style={{height: 'min-content;'}}/>
         
       </Route> 
      </Switch>
      <Footer />
      </DataProvider>
      </BrowserRouter>
        );
      }

export default App;
