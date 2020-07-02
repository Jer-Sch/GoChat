Rails.application.routes.draw do
  
  root 'homepage#index', as: '/homepage'
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

end
