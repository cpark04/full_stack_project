class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)
      if @review.save
        render :show
      else
        render json: @review.errors.full_messages, status: 401
      end
  end

  def show
    @review = Review.find_by(id: params[:id])
    render :show
  end 

  def update
    @review = Review.find_by(id: params[:id])
    if @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 401
    end
  end

  def destroy
      @review = Review.find_by(id: params[:id])
      if @review
          @review.destroy
          render json: @review.trail_id   
      else
          render json: ["Review cannot be deleted."]
      end
  end

  private

  def review_params
    params.require(:review).permit(:id, :trail_id, :user_id, :comment, :review_date, :rating, conditions: [])
  end

end
