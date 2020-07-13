Rails.application.routes.draw do
  
  root 'homepage#index', as: '/homepage'
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  resources :channels
  resources :messages
  mount ActionCable.server => '/cable'
end
