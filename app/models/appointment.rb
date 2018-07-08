class Appointment < ApplicationRecord
  scope :active, -> { order(appt_time: :asc) }
end
