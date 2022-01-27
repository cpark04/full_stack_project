class Trail < ApplicationRecord
  validates :trail_name, :park_id, :latitude, :longitude, :description, :length, :elevation_gain, :route_type, :country, :state, presence: true

  belongs_to :park

end
