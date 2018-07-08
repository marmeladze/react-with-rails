class AppointmentForm extends React.Component {
  render() {
    return (
      <div>
        <h2>Make Appointment</h2>
        <form>
          <input name='title' placeholder='Enter a title' />
          <input name='appt_time' placeholder='Pick date time' />
          <input type='submit' value='Make appointment' />
        </form>
      </div>
    )
  }
}