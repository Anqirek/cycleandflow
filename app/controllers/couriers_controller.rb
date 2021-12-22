class CouriersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  before_action :authorize

    def show
    
    courier = Courier.find_by(id:session[:courier_id])
    if courier
      render json: courier
    else
      render json: {error: 'Not Authorized'}, status: :unauthorized
      end
    end

    
    private

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :courier_id
      end

    def render_not_found
      render json: {error: 'Courier not found.'}, status: :not_found
    end

end
