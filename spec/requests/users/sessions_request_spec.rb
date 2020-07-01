require 'rails_helper'

RSpec.describe "Users::Sessions", type: :request do

    describe 'GET /users/sign_in' do
        it 'renders a sign in form' do
            get '/users/sign_in'

            expect(response.status).to eq(200)
            expect(response).to render_template(:new)
            expect(response.body).to include('Welcome.')
            expect(response.body).to include('Email')
            expect(response.body).to include('Password')
            expect(response.body).not_to include('Password confirmation')
        end
    end

    describe 'POST /users/sign_in' do
        it 'signs a user in' do
            user = User.create(email: 'ghopper@mail.com', password: 's3cur3p4ssw0rd', password_confirmation: 's3cur3p4ssw0rd')
            sign_in user    # helper method defined in devise_request_spec_helper.rb

            expect(current_user.email).to eq(user.email)
        end
    end

    describe 'GET /users/sign_out' do
        it 'signs a user out' do
            user = User.create(email: 'aturing@mail.com', password: 's3cur3p4ssw0rd', password_confirmation: 's3cur3p4ssw0rd')

            sign_in user
            expect(current_user.email).to eq(user.email)
            
            sign_out user
            expect(current_user).to be_nil
        end
    end

end
