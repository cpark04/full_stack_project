class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
      if @user.save
        login!(@user)
        render :show
      else
        error = @user.errors.full_messages
        render json: {error: error, status: 404}
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
