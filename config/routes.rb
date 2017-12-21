Rails.application.routes.draw do


  scope "/api", defaults: {format: :json} do

    post 'user_token' => 'user_token#create'
    get 'users/current' => 'users#current'

    resources :users
    resources :cards
    resources :boards
  end

end
