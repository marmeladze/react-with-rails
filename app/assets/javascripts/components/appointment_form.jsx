class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    let target = e.target;
    let name = target.name;
    obj = {};
    console.log(obj);
    obj[name] = target.value;
    return this.props.onUserInput(obj);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onFormSubmit();
  }

  render() {
    return (
      <div>
        <h2>Make Appointment</h2>
        <form onSubmit={this.handleSubmit}>
          <input 
            name='title' 
            placeholder='Enter a title' 
            value={this.props.input_title} 
            onChange={this.handleChange} />
          <input
            name='appt_time'
            placeholder='Pick date time'
            value={this.props.input_appt_time} 
            onChange = {this.handleChange } />
          <input type='submit' value='Make appointment' />
        </form>
      </div>
    )
  }
}