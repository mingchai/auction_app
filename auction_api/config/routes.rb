Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :auctions, only: [:create, :show, :index]
    end
  end
  
end
