class SessionsController < ApplicationController
    def create
        courier = Courier.find_by(courier_name: params[:courier_name])
        session[:courier_id] = courier.id
        render json: courier
      end

    def destroy
       session.delete :courier_id
       head :no_content
    end
end
