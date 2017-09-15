Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  namespace :api do
    resources :categories, only: [:index, :show] do
      resources :items
    end
  end
end
