import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const InfoPage = () => (
  <div class="Thead">
    <h1>Technologies I Used</h1>
    <ol>
      <ul>React </ul>
      <ul>Redux </ul>
      <ul>Node </ul>
      <ul>Express </ul>
      <ul>Bootstrap </ul>
      <ul>sweetalert2 </ul>
      <ul>Request </ul>
      <ul>keyword-extractor </ul>
      <ul>PostgreSQL </ul>

    </ol>


    <p>
    </p>
  </div>
);

export default InfoPage;
