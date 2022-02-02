@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :trail_id, :user_id
    json.trailPhoto url_for(photo.photo)
  end
end