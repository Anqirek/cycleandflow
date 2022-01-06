Rails.application.routes.draw do

get "/home", to: 'couriers#show'

get '/courier', to: 'couriers#show'

get '/login', to: 'sessions#create'

get '/signup', to: 'sessions#create'

get '/me', to: 'couriers#show'

get '/couriers', to: 'couriers#index'

post '/', to: 'sessions#create'

post '/signup', to: 'couriers#create'

delete '/logout', to: 'sessions#destroy'

end
