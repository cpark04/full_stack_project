class Trail < ApplicationRecord
  validates :park_id, :latitude, :longitude, :description, :length, :elevation_gain, :route_type, :country, :state, presence: true

  belongs_to :park

end
