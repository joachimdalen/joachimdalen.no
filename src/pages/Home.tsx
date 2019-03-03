import * as React from "react";
import TypableContainer from "src/components/TypeableText";
const Home: React.SFC = () => (
  <div className="jd-home">
    <h1>Hello, I'm Joachim</h1>
    <TypableContainer
      period={2000}
      text="I write code for a living. I'm also a "
      stack={["Software Engineer.", "IT Technician.", "Sysadmin.", "nice guy!"]}
    />
  </div>
);
export default Home;
