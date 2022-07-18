
import './App.css';
import React from 'react';
import Header from '../components/header';
import Card from '../components/card';
import BreakingBadData from '../../breakingbad.json';

function App() {

  const cards = BreakingBadData.map(function (element) {
    return <Card title={element.name} img={element.img} content={element.occupation} />
  });

  return (
    <div className="container">
      <Header />
      {/* <Card title='card title 1' content='card content 1 best mehdi' />
      <Card title='card title 2' content='card content 2 best mehdi' /> */}
      <div className='row'>
        {cards}

      </div>





    </div>
  );
}

export default App;
