@parks.each do |park|
  json.set! park.id do
    json.extract! park, :id, :park_name, :description, :location
  end
end