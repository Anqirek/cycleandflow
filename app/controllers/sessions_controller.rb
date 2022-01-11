class SessionsController < ApplicationController

    def create
        courier = Courier.find_by(name: params[:name])
        session[:courier_id] = courier.id
        render json: courier, status: :created
    end

  #  def create
  #     courier = Courier.find_by(name: params[:name])
  #     if courier&.authenticate(params[:password])
  #     session[:courier_id] = courier.id
  #     render json: courier, status: :created
  #     else
  #       render json: {error: "Invalid Username or Password"}, status: :unauthorized
  #       end
  #     end

    def destroy
       session.delete :courier_id
       head :no_content
    end
end
