
import React, { useState } from 'react'
import './App.css';
import axios from 'axios';
const FetchAPI = () => {
  const [result, setresult] = useState(null);
  const [simulatorstatus, setsimulatorstatus] = useState(null);
  

  const BatteryOn = async () => {
    document.getElementsByClassName('yt-loader')[0].style.display = "block";

    axios.post(
      'http://localhost:8080/productdata/batteryon').then(res => {

      setTimeout(() => {
        document.getElementsByClassName('yt-loader')[0].style.display = "none";
        axios.get(`http://localhost:8080/productdata/`+res.data._id)
          .then((response) =>{
            console.log("response", response.data.BatteryField);
            if (response.data.BatteryField == 1) {
              setresult("on")
              setTimeout(() => {
                alert('Batteryon')
              }, [2000])
            }
            else { alert('data not update') }
          })

      }, [5500])


    })
  }

  const BatteryOff = () => {
    document.getElementsByClassName('yt-loader')[0].style.display = "block";
    axios.post("http://localhost:8080/productdata/batteryoff").then(res => {
      setTimeout(() => {
        document.getElementsByClassName('yt-loader')[0].style.display = "none";
        axios.get(`http://localhost:8080/productdata/`+res.data._id)
          .then((response) => {
            console.log("response", response.data.BatteryField);
            if (response.data.BatteryField == 0) {
              setresult("off");
              setTimeout(() => {
                alert('Batteryoff')
              }, [2000])
            }
            else { alert('data not update') }
          })
      }, [5500])

    })

  };

  const SimulatorOn = () => {
    document.getElementsByClassName('yt-loader')[0].style.display = "block";

    axios.post("http://localhost:8080/productdata/simulatoron").then(res => {
      setTimeout(() => {
        document.getElementsByClassName('yt-loader')[0].style.display = "none";

        axios.get(`http://localhost:8080/productdata/`+res.data._id)
          .then((response) => {
            console.log("response", response.data.SimulatorField);
            if (response.data.SimulatorField == 1) {
              setsimulatorstatus("on")
              setTimeout(() => {
                alert('Simulatoron')
              }, [2000])
            }
            else { alert('data not update') }
          })

      }, [5500])
    })


  };

  const SimulatorOff = () => {
    document.getElementsByClassName('yt-loader')[0].style.display = "block";


    axios.post("http://localhost:8080/productdata/simulatoroff").then(res => {
      setTimeout(() => {
        setsimulatorstatus("off")

        document.getElementsByClassName('yt-loader')[0].style.display = "none";
        axios.get(`http://localhost:8080/productdata/`+res.data._id)
          .then((response) => {
            console.log("response", response.data.SimulatorField);
            if (response.data.SimulatorField == 0) {
              setsimulatorstatus("off")
              setTimeout(() => {
                alert('Simulatoroff')
              }, [2000])
            }
            else { alert('data not update') }
          });

      }, [5500])
    })


  };

  return (
    <div>
      <div className="yt-loader"></div>

      <div class="center">
        <h3>Battery : {result}</h3><br />

        <button class="button1" onClick={BatteryOn} > batteryon</button>

        <button class="button2" onClick={BatteryOff}> batteryoff</button>
      </div>
      <br /><br />

      <div class="center">

        <h3>simulator : {simulatorstatus}</h3><br />


        <button class="button1" onClick={SimulatorOn} > simulatoron</button>{''}

        <button class="button2" onClick={SimulatorOff}> simulatoroff</button>

      </div>
      <br /><br />


    </div>

  );
}
export default FetchAPI;
