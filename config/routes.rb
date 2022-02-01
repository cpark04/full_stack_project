Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :parks, only: [:index, :show]
    resource :session, only: [:create, :destroy]
    resources :trails, only: [:index, :show]
    resources :reviews, only: [:create, :show, :update, :destroy]
  end  

  root to: 'static_pages#root'
end
