Rails.application.routes.draw do

  scope "/api", defaults: {format: :json} do
    resources :cards
    resources :boards
  end

end
