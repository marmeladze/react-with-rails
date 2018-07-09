const token = document.querySelector('[name="csrf-token"]').content;

class Appointments extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      appointments: this.props.appointments,
      title: 'Meet with God',
      appt_time: 'Tomorrow at 9pm'
    }
    this.handleUserInput = this.handleUserInput.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.addNewAppointment = this.addNewAppointment.bind(this);
  }

  handleUserInput(obj) {
    this.setState(obj);
  }

  addNewAppointment(appointment) {
    let s = this.state.appointments;
    s.push(appointment);
    this.setState({
      appointments: s,
      title: this.state.title,
      appt_time: this.appt_time
    });
  }

  onFormSubmit() {

    let formData = new FormData();
    let appointment = {
      title: this.state.title,
      appt_time: this.state.appt_time,
    };

    for(let item in appointment) {
      formData.append(`appointment[${item}]`, appointment[item]);
    }

    formData.append('authenticity_token', token);

    fetch('/appointments', {
      method: 'POST',
      body: formData
    }).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      this.addNewAppointment(data);
    });

  }

  render() {
    return (
      <div>
        <AppointmentForm
          input_title={this.state.title} 
          input_appt_time={this.state.appt_time}
          onUserInput = {this.handleUserInput } 
          onFormSubmit= {this.onFormSubmit} />
        <AppointmentsList appointments={this.state.appointments} />
      </div>
    )
  }
}
