function Medication(props) {
console.log(props);
    return <>
    
      <h1 style={{color:"#8B0000"}}>{props.classData.title}</h1>
      <ul>{
        Object.keys( props.classData.items[0]).map((element, index)=> <li key={index} style={{color:"DarkSlateGray"}}>
          {element}
              {props.classData.items[0][element].map((subRecord)=> <ul>
                  <li className="list-group-item list-group-item-primary" key={subRecord.name.toString()}> Name: {subRecord.name} </li>
                  <li className="list-group-item list-group-item-danger" key={subRecord.strength.toString()}>Strength: {subRecord.strength}</li>
                  <li className="list-group-item list-group-item-success" key={subRecord.dose.toString()}>Dose: {subRecord.dose || 'Not determined'}</li>
              </ul>
              )}
      </li>
        )}
        </ul>
      
    </>
  }
  export default Medication;