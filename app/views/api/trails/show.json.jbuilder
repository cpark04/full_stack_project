json.extract! @trail, :park_name, :id, :difficulty, :intro, :trail_name, :park_id, :latitude, :longitude, :description, :tags, :length, :elevation_gain, :route_type, :country, :state, :facilities, :contact, :tips, :getting_there
json.mapUrl url_for(@trail.small_map)
json.headPhoto url_for(@trail.head_photo)