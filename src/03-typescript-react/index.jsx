import React from 'react';

function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </header>
  );
}

export function App() {
  return (
    <div>
      <Header title="Isso é um título" description="Isso é uma descrição" nome="Nome" />
    </div>
  );  
}

