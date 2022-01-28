@trails.each do |trail|
  json.set! trail.id do
    json.extract! trail, :tags, :id, :difficulty, :park_name, :intro, :trail_name, :park_id, :latitude, :longitude, :description, :length, :elevation_gain, :route_type, :country, :state, :facilities, :contact, :tips, :getting_there
    json.mapUrl url_for(trail.small_map)
    json.headPhoto url_for(trail.head_photo)
  end
end