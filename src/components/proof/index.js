import React from 'react';

import BitcoinIcon from '../icons/bitcoin.svg';
import GitHubIcon from '../icons/github.svg';
import GlobeIcon from '../icons/globe.svg';
import RedditIcon from '../icons/reddit.svg';
import TwitterIcon from '../icons/twitter.svg';

import './index.css';

let Proof = props =>
  <div className={`Proof Proof--${props.proof.proof_type}`}>
    <a href={props.proof.service_url} className="Proof__service-url">
      {(() => {
        switch (props.proof.proof_type) {
          case "coinbase":
            return <img src={BitcoinIcon} className="Proof__icon Proof__icon--bitcoin" role="presentation" />
          case "github":
            return <img src={GitHubIcon} className="Proof__icon Proof__icon--github" role="presentation" />
          case "reddit":
            return <img src={RedditIcon} className="Proof__icon Proof__icon--reddit" role="presentation" />
          case "twitter":
            return <img src={TwitterIcon} className="Proof__icon Proof__icon--twitter" role="presentation" />
          default:
            return <img src={GlobeIcon} className="Proof__icon Proof__icon--globe" role="presentation" />
        }
      })()}

      <span className="Proof__name-tag">
        {props.proof.nametag}
      </span>

      <span className="Proof__presentation-tag">
        {props.proof.presentation_tag}
      </span>
    </a>
  </div>

export default Proof;
