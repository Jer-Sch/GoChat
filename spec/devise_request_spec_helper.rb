module DeviseRequestSpecHelpers

    include Warden::Test::Helpers
  
    def sign_in(resource_or_scope, resource = nil)
        resource ||= resource_or_scope
        scope = Devise::Mapping.find_scope!(resource_or_scope)
        login_as(resource, scope: scope)
        @current_user = resource
    end
  
    def sign_out(resource_or_scope)
        scope = Devise::Mapping.find_scope!(resource_or_scope)
        logout(scope)
        @current_user = nil
    end

    def current_user
        @current_user
    end
  
  end
  