import * as React from "react";
import TypableContainer from "src/components/TypeableText";
const Home: React.SFC = () => (
  <div className="jd-home">
    <h1>Hello, I'm Joachim</h1>
    <TypableContainer
      period={2000}
      text="I am "
      stack={["from Norway.","a Software Engineer.", "a IT Technician.", "a Sysadmin.", "and a nice guy!"]}
    />
  </div>
);
export default Home;
