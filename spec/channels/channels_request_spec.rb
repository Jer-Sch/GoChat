require 'rails_helper'

RSpec.describe "Channels", type: :request do
  describe "GET /channels" do
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

    before { post user_session_path, params: params } # need to log user in first, otherwise it will fail

    before { get channels_path }

    it "returns a 200 success status" do
      expect(response.status).to eq(200)
    end

    it "returns all channels" do
      parsed_response = JSON.parse(response.body)
      expect(parsed_response.length).to eq(7) # number of channels created in db/seeds.rb
    end

    Channel.delete_all
  end
  
end
