class Park < ApplicationRecord
  validates :park_name, :description, :latitude, :longitude, :intro, :country, :state, :directions, presence: true

  has_one_attached :small_map

  has_many :trails

end
