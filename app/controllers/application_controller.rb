class ApplicationController < ActionController::API
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
include ActionController::Cookies

private 

    def render_invalid(invalid)
    render json: {errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
