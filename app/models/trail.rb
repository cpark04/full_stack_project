class Trail < ApplicationRecord
  validates :trail_name, :park_id, :latitude, :longitude, :description, :length, :elevation_gain, :route_type, :country, :state, presence: true

  belongs_to :park

  has_many :reviews

  has_one_attached :small_map

  has_one_attached :head_photo

end
