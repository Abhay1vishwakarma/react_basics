import Compo from './Compo';
// import propTypes from 'prop-types'
  const Student = (props) => {
  // const Student = ({name,age}) => {
  return (
    <div>
      <h1>Student</h1>
      <h2> {props.name}</h2>
      <h2>{props.age}</h2>
      <Compo name={props.name} />
      
      {/* <h2>Name: {name}</h2>
      <h2>Age: {age}</h2> */}
    </div>
  )
}

// Student.propTypes={
//   name:propTypes.string,
//   age:propTypes.number
// }

Student.defaultProps={
    name:"name",
    age:0
  }
export default Student;