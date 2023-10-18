import React from 'react';
import './index.scss';

const PartitionAnimation: React.FC = () => {
  return (
    <div className="PartitionAnimationBox">
      <section id="one" className="area">
        <div className="anim-area"></div>
      </section>
      <section id="two" className="area"></section>
      <section id="three" className="area"></section>
      <section id="four" className="area"></section>
      <section id="five" className="area"></section>
    </div>
  );
};

export default PartitionAnimation;
