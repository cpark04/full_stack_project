class Api::PhotosController < ApplicationController

  def index
    @photos = Photo.all
    render :index
  end

  def create
    photo = Photo.new(photo_params)
    debugger
    if photo.save!
      render json: {message: "Photo upload success"}
    else
      render json: photo.errors.full_messages
    end
  end


  private

  def photo_params
    params.require(:photo).permit(:photo, :trail_id, :user_id)
  end
end
