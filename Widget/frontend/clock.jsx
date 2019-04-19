import React from 'react';

class Clock extends React.Component { 
  constructor(props) {
    super(props);
    this.state = { time: new Date() }
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.ticking = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.ticking);
    this.ticking = 0;
  }

  tick() {
    const { time } = this.state;
    time.setSeconds(time.getSeconds() + 1)
    this.setState({ time })
  }
  
  render() {
    const time = this.state.time.toTimeString();
    const date = this.state.time.toDateString();
    return (
      <div className="widget">
        <h1>Clock</h1>
        <section className="dashboard" id="clock">
          <div class="lineitem">
              <div>Time:</div>
              <div class="data">{time.slice(0,8).concat(" ")}</div>
          </div>
          <div class="lineitem">
            <div>Date:</div>
            <div class="data">{date}</div>
          </div>
        </section>
      </div>
    )
  }

}






export default Clock