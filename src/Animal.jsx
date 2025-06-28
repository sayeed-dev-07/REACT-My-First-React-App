function List(props) {

  return (
    <>
    {!props.animals && <div>Loading...</div>}
    {props.animals && props.animals.length === 0 && <div>There are no animals in the list!</div>}
    {props.animals && props.animals.length > 0 && (
      <ul>
        {props.animals.map(animal=>{
          return <li key={animal}>{animal}</li>
        })}
      </ul>)
    }
    </>
  )
  
}

function App() {
  const animals = ['hep', 'dayeed'];
  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}


export {App}