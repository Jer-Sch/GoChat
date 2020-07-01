require 'rails_helper'

RSpec.describe "Users::Registrations", type: :request do
    describe 'get /users/sign_up' do
        it 'renders a sign up form' do
            get '/users/sign_up'

            expect(response.status).to eq(200)
            expect(response).to render_template(:new)
            expect(response.body).to include('Welcome.')
            expect(response.body).to include('Email')
            expect(response.body).to include('Password')
            expect(response.body).to include('Password confirmation')
        end
    end

end
