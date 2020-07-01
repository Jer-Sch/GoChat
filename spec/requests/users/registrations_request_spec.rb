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

    describe 'post /users' do
        it 'creates a new user' do
            post '/users', params: {user: {email: "mkeller@mail.com", password: "s3cur3p4ssw0rd", password_confirmation: "s3cur3p4ssw0rd" } }

            expect(User.last.email).to eq("mkeller@mail.com")
        end

        it 'redirects to /homepage/index' do
            post '/users', params: {user: {email: "alovelace@mail.com", password: "s3cur3p4ssw0rd", password_confirmation: "s3cur3p4ssw0rd" } }

            expect(response.status).to eq(302)
            expect(response).to redirect_to('/homepage/index')
        end
    end
end
