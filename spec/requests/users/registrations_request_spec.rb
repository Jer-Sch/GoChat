require 'rails_helper'

RSpec.describe "Users::Registrations", type: :request do
  describe "GET /users/sign_up" do
    before { get new_user_registration_path }

    it "returns a success status" do
      expect(response.status).to eq(200)
    end

    it "renders the correct template (new)" do
      expect(response).to render_template(:new)
    end
  end

  describe 'POST /users' do
    context "with valid params" do
      before { post user_registration_path, params: params }

      let(:params) do
        {
          user: {
            email: "mkeller@mail.com",
            password: "s3cur3p4ssw0rd",
            password_confirmation: "s3cur3p4ssw0rd"
          }
        }
      end

      it "redirects to the homepage" do
        expect(response).to redirect_to homepage_path
      end
    end

    context "with invalid params" do
      before { post user_registration_path, params: params }

      let(:params) do
        {
          user: {
            email: "mkeller@mail.com",
            password: "s3cur3p4ssw0rd",
            password_confirmation: "notamatch"
          }
        }
      end

      it "returns a success status" do
        expect(response.status).to eq 200 #WTF
      end

      it "renders the correct template" do
        expect(response).to render_template :new
      end
    end
  end
end
