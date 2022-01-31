class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)
      if @review.save
        login!(@review)
        render :show
      else
        render json: @review.errors.full_messages, status: 422
      end
  end

  def show
    @review = Review.find_by(id: params[:id])
    render :show
  end 

  private

  def review_params
    params.require(:review).permit(:id, :trail_id, :user_id, :comment, :review_date)
  end

end
