import Student from "./Student";
function App() {
  return (
    <>
      <Student name="Alexa" marks={68} />
      <Student name="Siri" marks={78} />
      <Student name="Google" marks={90} />
      <Student />
    </>
  );
}

//if we forget to pass the props in the component it will take the default
//props, simillerly for marks or anything else
Student.defaultProps = {
  name: "Nikki",
  marks: 88,
};

export default App;
