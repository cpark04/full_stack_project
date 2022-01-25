@parks.each do |park|
  json.set! park.id do
    json.extract! park, :id, :park_name, :directions, :latitude, :longitude, :description, :country, :state
  end
end