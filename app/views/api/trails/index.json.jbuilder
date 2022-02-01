@trails.each do |trail|
  json.set! trail.id do
    json.extract! trail, :tags, :id, :difficulty, :park_name, :intro, :trail_name, :park_id, :latitude, :longitude, :description, :length, :elevation_gain, :route_type, :country, :state, :facilities, :contact, :tips, :getting_there
    json.mapUrl url_for(trail.small_map)
    json.headPhoto url_for(trail.head_photo)
    json.reviews do
      trail.reviews.each do |review|
        json.set! review.id do
          json.extract! review, :id, :review_date, :rating, :comment, :user_id, :trail_id
          json.pfp url_for(review.user.pfp)
        end
      end
    end
  end
end