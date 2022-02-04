@parks.each do |park|
  json.set! park.id do
    json.extract! park, :id, :park_name, :directions, :latitude, :longitude, :description, :country, :state, :intro, :acre, :hours, :contact, :social_url
    json.mapUrl url_for(park.small_map)
    json.trails do
      park.trails.each do |trail|
        json.set! trail.id do
          json.extract! trail, :park_name, :id, :difficulty, :intro, :trail_name, :park_id, :latitude, :longitude, :description, :tags, :length, :elevation_gain, :route_type, :country, :state, :facilities, :contact, :tips, :getting_there
          json.mapUrl url_for(trail.small_map)
          json.headPhoto url_for(trail.head_photo)
          json.avg_rating (trail.reviews.length > 0 ? trail.reviews.map{|review| review.rating}.sum/trail.reviews.length : 0)
          json.num_reviews trail.reviews.length
        end
      end
    end
  end
end