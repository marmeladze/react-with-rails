class AppointmentsController < ApplicationController
  before_action :fetch_appts, only: [:index, :create]

  def index
    @appointments = Appointment.active
  end

  def create
    @appointment = Appointment.create appointment_params
    if @appointment.save
      render json: @appointment
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  private

  def fetch_appts
    @appointments = Appointment.active
  end

  def appointment_params
    params.require(:appointment).permit(:title, :appt_time)
  end
end
