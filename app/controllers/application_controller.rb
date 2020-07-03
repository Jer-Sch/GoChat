class ApplicationController < ActionController::Base
    before_action :authenticate_user!
    protect_from_forgery

    protected

    def after_sign_in_path_for(resource)
        homepage_path
    end

    def after_sign_out_path_for(resource)
        user_session_path
    end
end
