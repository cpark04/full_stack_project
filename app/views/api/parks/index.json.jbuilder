@parks.each do |park|
  json.set! park.id do
    json.extract! park, :id, :park_name, :directions, :latitude, :longitude, :description, :country, :state, :intro
    json.mapUrl url_for(park.small_map)
  end
end