class Appointment extends React.Component {

  render() {
    return(
      <div>
        <h3>{this.props.appointment.title}</h3>
        <h3>{this.props.appointment.appt_time}</h3>
      </div>
    )
  }
}
