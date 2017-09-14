Rails.application.routes.draw do
  namespace :api do
    resources :categories, only: [:index, :show] do
      resources :items
    end
  end
end
