@trails.each do |trail|
  json.set! trail.id do
    json.extract! trail, :tags, :id, :difficulty, :park_name, :intro, :trail_name, :park_id, :latitude, :longitude, :description, :length, :elevation_gain, :route_type, :country, :state, :facilities, :contact, :tips, :getting_there
    json.mapUrl url_for(trail.small_map)
    json.headPhoto url_for(trail.head_photo)
    json.reviews do
      trail.reviews.each do |review|
        json.set! review.id do
          json.extract! review, :id, :review_date, :rating, :comment, :user_id, :trail_id, :conditions
          json.pfp url_for(review.user.pfp)
          json.name (review.user.fname + " " + review.user.lname)
        end
      end
    end
    
    json.avg_rating (trail.reviews.length > 0 ? trail.reviews.map{|review| review.rating}.sum/trail.reviews.length : 0)
    json.num_reviews trail.reviews.length
    json.photos url_for(trail.photos)
  end
end