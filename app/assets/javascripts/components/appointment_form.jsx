class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {

    };
  }

  onUserInput(obj) {
    return obj;
  }

  handleChange(e){
    let target = e.target
    let name = target.name;
    obj = {};
    console.log(obj);
    obj[name] = target.value;
    return this.onUserInput(obj);
  }

  render() {
    return (
      <div>
        <h2>Make Appointment</h2>
        <form>
          <input 
            name='title' 
            placeholder='Enter a title' 
            value={this.props.input_title} 
            onChange={this.handleChange.bind(this)} />
          <input
            name='appt_time'
            placeholder='Pick date time'
            value={this.props.input_appt_time} 
            onChange = {this.handleChange.bind(this) } />
          <input type='submit' value='Make appointment' />
        </form>
      </div>
    )
  }
}