import React from 'react';

import './index.css';

let Bio = { bio, children } =>
  <div className="Bio">
    <img src="#" className="Bio__picture" />

    <h1 className="Bio__username"></h1>
    <h2 className="Bio__full-name"></h2>

    <p className="bio__bio"></p>
    <p className="bio__location"></p>

    <div className="bio__proofs">
      {children}
    </div>
  </div>

export default Bio;
