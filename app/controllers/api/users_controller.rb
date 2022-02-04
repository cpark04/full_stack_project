require 'open-uri'
class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
      if @user.save
        default_photo = open('https://some-trails-aa-dev.s3.us-west-1.amazonaws.com/profile-pic/person_placeholder.png')
        @user.pfp.attach(io: default_photo, filename: 'person_placeholder.png')
        login!(@user)
        render :show
      else
        render json: @user.errors.full_messages, status: 422
      end
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end 

  private

  def user_params
        params.require(:user).permit(:fname, :lname, :email, :password)
  end
end
