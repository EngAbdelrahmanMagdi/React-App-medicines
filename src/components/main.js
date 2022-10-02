import MedicationsClass from "./medication";
import { useEffect, useState } from "react";
import axios from "axios";

function Main() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      `http://run.mocky.io/v3/a78af611-3af6-481c-98a0-ba04a5f7ce70`
    );
    const medications =
      response.data.problems[0].Diabetes[0].medications[0]
        .medicationsClasses[0];
    let dataArray = [];
    for (let dataRecord in medications) {
      dataArray.push({
        title: dataRecord,
        items: medications[dataRecord],
      });
    }
    setData(dataArray);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log("data");
  console.log(data);
  return (
    <>
      <div>

        {data.map((element, index) => (
          <MedicationsClass key={index} classData={element} />
        ))}
      </div>
   
    </>
  );
}
export default Main;
