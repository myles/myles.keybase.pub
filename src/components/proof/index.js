import React from 'react';

import './index.css';

let Proof = { proof } =>
  <div className="proof proof--{{proof_type}}">
    <a href="{{service-url}}" className="proof__service-url">
      <span class="proof__icon proof__icon--{{proof_type}}"></span>
      <span class="proof__name-tag">{{nametag}}</span>
      <span class="proof__presentation-tag">@{{presentation_tag}}</span>
    </a>
    <a class="proof__human_url" href="{{human_url}}">
      <span class="proof__icon proof__icon--verify"></span>
    </a>
  </div>

export default Proof;
