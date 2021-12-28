Rails.application.routes.draw do

# get "/home", to: 'applications#index'

get '/courier', to: 'couriers#show'

get '/me', to: 'couriers#show'

post '/login', to: 'sessions#create'

delete '/logout', to: 'sessions#destroy'

end
