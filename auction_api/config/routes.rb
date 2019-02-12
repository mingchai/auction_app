Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:create, :show, :destroy]do
    resources :auctions, only: [:create, :show, :index] do
      resources :bids, only: [:create, :destroy]
      end
  end
end
