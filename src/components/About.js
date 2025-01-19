import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  console.log("Hi");
  return (
    <div>
      <h1>About</h1>
      {/* <User name={"Yogesh Chavan (Function)"} /> */}
      <UserClass name={"Yogiraj Chavan (Class)"} />
    </div>
  );
};

export default About;
