require 'rails_helper'

RSpec.describe "Users::Sessions", type: :request do
  
  describe "GET /users/sign_in" do
    before { get new_user_session_path }
    
    it "returns a success status" do
      expect(response.status).to eq(200)
    end
    
    it "renders the correct template (new)" do
      expect(response).to render_template(:new)
    end
  end
  
  describe "POST /users/sign_in" do
      before { post user_session_path, params: params }

      let(:user) { create(:user) }

      let(:params) do
        {
          user: {
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirmation
          }
        }
      end

      it "redirects to the homepage on successful sign in" do
        expect(response).to redirect_to homepage_path
      end
    end

    describe "GET /users/sign_out" do
      before { post user_session_path, params: params }
      before { get destroy_user_session_path }

      let(:user) { create(:user) }

      let(:params) do
        {
          user: {
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirmation
          }
        }
      end
      
      it "redirects to log in page on sign out" do
        expect(response).to redirect_to new_user_session_path
      end
    end

  end
