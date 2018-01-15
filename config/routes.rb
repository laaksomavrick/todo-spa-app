Rails.application.routes.draw do


  scope "/api", defaults: {format: :json} do

    post 'user_token' => 'user_token#create'
    get 'users/current' => 'users#current'

    resources :users, only: [:current, :create, :update]
    resources :cards, only: [:index, :create, :update, :destroy]
    resources :boards, only: [:index, :create, :update, :destroy]
  end

end
