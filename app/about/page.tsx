import React from 'react';

interface MyComponentProps {}

const About: React.FC<MyComponentProps> = () => {
  return (
    <div>
      <h1>Hello  from About Page</h1>
    </div>
  );
};

export default About;