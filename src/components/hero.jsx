import { useState, useEffect } from "react";

function Hero() {
  useEffect(() => {
    generateHexGrid();
  }, []);

  const generateHexGrid = () => {
    const hexGrid = document.getElementById("hexGrid");
    const numColumns = 14; // Adjust the number of columns
    const numRows = 3; // Adjust the number of rows

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numColumns; col++) {
        const hexagon = document.createElement("div");
        hexagon.classList.add("hexagon");
        hexagon.style.marginTop = row % 2 === 0 ? "0" : "0vw"; // Adjust the vertical spacing

        hexGrid.appendChild(hexagon);
      }
    }
  };

  //timer code

  const calculateTimeLeft = () => {
    const difference = +new Date("2023-12-31") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  let hex = [];
  for (let i = 0; i < 100; i++) hex.push("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <section className="hero-bg">
      <div class="hex-grid" id="hexGrid"></div>

      <div className="hero row">
        <div className="left col-lg-6">
          {/* <img src="/images/hero2.png" alt="" /> */}
        </div>
        <div className="right col-lg-6">
          <div className="timer">
            <h4>Time Left</h4>
            <h6 className="clock">
              <span className="digit">{formatTime(timeLeft.days)}</span>
              {"    "}days:{" "}
              <span className="digit">{formatTime(timeLeft.hours)}</span>
              {"    "}hrs:{" "}
              <span className="digit">{formatTime(timeLeft.minutes)}</span>
              {"    "}mins:{" "}
              <span className="digit">{formatTime(timeLeft.seconds)}</span>
              {"    "}secs
            </h6>
          </div>
          <div className="title">
            <h1>GIRLATHON</h1>
            <h2>2023</h2>
          </div>
          <div className="desc">
            <h6 className="typing-animation">
              3 week long learning and hackathon organized by{" "}
              <span className="text-Gdsc">GDSC MACE {"  "}</span>
              {"  "}
            </h6>
          </div>
        </div>
        {
          //<iframe title='J' src='https://my.spline.design/readyplayermelookingaround-0c0f2a2232256d31c16ec20f9e01ab2c/' frameborder='0' width='100%' height='100%'></iframe>
        }
      </div>
    </section>
  );
}

export default Hero;
