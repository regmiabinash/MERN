const Greet = (props) =>{
    console.log(props)
  return(
    <div>
      <h1>hello {props.user}</h1>
    </div>
  )
}

export default Greet