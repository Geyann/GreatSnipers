'use client';
import React from 'react';
import styled from 'styled-components';

const skills = [
  { name: 'REACT.JS', color: '142, 249, 252' },
  { name: 'TAILWIND', color: '142, 252, 204' },
  { name: 'JS', color: '142, 252, 157' },
  { name: 'NODE.JS', color: '215, 252, 142' },
  { name: 'GIT', color: '252, 252, 142' },
  { name: 'HTML5', color: '252, 208, 142' },
  { name: 'CSS3', color: '252, 142, 142' },
  { name: 'PHP', color: '252, 142, 239' },
  { name: 'JAVA', color: '204, 142, 252' },
];

const Skills = () => {
  return (
    <StyledWrapper id="Skills">
       <h2 className="text-4xl font-semibold text-center p-10 tracking-tight text-white sm:text-5xl">Skills</h2>
      <div className="wrapper">
        <div className="inner" style={{ '--quantity': skills.length }}>
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="card" 
              style={{ '--index': index, '--color-card': skill.color }}
            >
              <div className="content">
                <span>{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  padding: 10rem 0;
  overflow: hidden;

  .title1 {
    text-align: center;
    color: white;
    font-size: 1.875rem;
    font-weight: bold;
    margin-bottom: 3rem;
  }

  .wrapper {
    width: 100%;
    height: 300px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 1000px;
  }

  .inner {
    --w: 120px;
    --h: 150px;
    --translateZ: 250px;
    --rotateX: -10deg;
    position: relative;
    width: var(--w);
    height: var(--h);
    transform-style: preserve-3d;
    animation: rotating 20s linear infinite;
  }

  @keyframes rotating {
    from { transform: rotateX(var(--rotateX)) rotateY(0); }
    to { transform: rotateX(var(--rotateX)) rotateY(1turn); }
  }

  .card {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(var(--color-card), 0.5);
    border-radius: 12px;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    transform: rotateY(calc((360deg / var(--quantity)) * var(--index))) translateZ(var(--translateZ));
  }

  .content {
    text-align: center;
    padding: 10px;
  }
`;

export default Skills;