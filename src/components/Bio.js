import React from 'react';
import profilePic from '../assets/profile-pic.png';
import { rhythm } from '../utils/typography';
import { STATICS } from './statics';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={STATICS.owner}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 310 }}>
          Personal blog by <a href={STATICS.ownerTwitter}>{STATICS.owner}</a>.{' '}
          I&nbsp;explain with words and code.
        </p>
      </div>
    );
  }
}

export default Bio;
