@trails.each do |trail|
  json.set! trail.id do
    json.extract! trail, :id, :park_name, :intro, :trail_name, :park_id, :latitude, :longitude, :description, :length, :elevation_gain, :route_type, :country, :state
  end
end