Rails.application.routes.draw do
  devise_for :users
  root :to => 'pages#index'
  get 'about', to: 'pages#about'
  get 'services', to: 'pages#services'
  get 'contact', to: 'pages#contact'
end
