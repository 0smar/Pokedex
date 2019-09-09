import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background-color: ${props => props.color};
  transform: skewX(-20deg);
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 1rem;
  width: auto;
  span{
    margin: 0;
    color: #fff;
    font-size: 1.2rem;
    transform: skewX(20deg);
  }
`

const SectionTitle = (props) => (
  <div className="row-container">
    <Section color={props.color}>
      <span>{props.title}</span>
    </Section>
  </div>
);

export default SectionTitle;