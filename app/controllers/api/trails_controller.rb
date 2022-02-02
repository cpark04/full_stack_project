class Api::TrailsController < ApplicationController
  before_action :require_logged_in, only: [:show]

  def index 
    @trails = Trail.all
    render :index 
  end

  def show 
    @trail = Trail.find(params[:id])
    render :show
  end

end
