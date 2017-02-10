import React from 'react';

import './index.css';

let Bio = props =>
  <div className="Bio">
    <img src={props.picture.url} className="Bio__picture"
         role="presentation" />

    <h1 className="Bio__username">{props.basics.username}</h1>
    <h2 className="Bio__full-name">{props.profile.full_name}</h2>

    <p className="bio__bio">{props.profile.bio}</p>
    <p className="bio__location">{props.profile.location}</p>

    <div className="bio__proofs">
      {props.children}
    </div>
  </div>

export default Bio;
