Rails.application.routes.draw do
  devise_for :users

  root to: 'pages#index'
  get 'contact', to: 'pages#contact'
  get 'about', to: 'pages#about'
  get 'services', to: 'pages#services'

  namespace :admin do
    resources :contacts
  end
end
