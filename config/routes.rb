Rails.application.routes.draw do
  
  resources :messages
  root 'homepage#index', as: '/homepage'
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  resources :channels
  resources :messages

end
