Rails.application.routes.draw do
  get "/ping",  to: "health#ping"
  get "/about", to: "health#about"

  resources :tasks, only: [:index, :show, :create, :update, :destroy]
end
