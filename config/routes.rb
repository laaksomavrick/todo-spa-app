Rails.application.routes.draw do

  scope "/api", defaults: {format: :json} do
    get "/", to: 'test#index'
  end

end
