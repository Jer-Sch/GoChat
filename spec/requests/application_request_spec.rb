require 'rails_helper'

RSpec.describe "Applications", type: :request do
    describe 'index action' do
        it 'redirects to /users/sign_in' do
            get '/'
            expect(response.status).to eq(302)
            expect(response).to redirect_to('/users/sign_in')
        end
    end

end
