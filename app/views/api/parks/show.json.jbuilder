json.extract! @park, :id, :park_name, :directions, :latitude, :longitude, :description, :country, :state, :intro, :acre, :hours, :contact, :social_url
json.mapUrl url_for(@park.small_map)