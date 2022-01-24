class Park < ApplicationRecord
  validates :park_name, :description, :latitude, :longitude, :country, :state, :directions, presence: true

end
