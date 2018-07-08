class AppointmentsList extends React.Component {
  render(){
    return(
      this.props.appointments.map((appointment) => {
        return (
          <Appointment appointment={appointment} />
        )
      })      
    )
  }
}