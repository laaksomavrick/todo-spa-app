Rails.application.routes.draw do

  scope "/api", defaults: {format: :json} do
    resources :cards
  end

end
