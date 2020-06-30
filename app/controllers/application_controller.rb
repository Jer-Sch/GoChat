class ApplicationController < ActionController::Base
    def index
        redirect_to '/users/sign_in'
    end

    protected

    def after_sign_in_path_for(resource)
        homepage_index_path
    end

    def after_sign_out_path_for(resource)
        user_session_path
    end
end
