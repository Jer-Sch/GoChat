require 'rails_helper'

RSpec.describe User, type: :model do

  context "with valid params" do
    it "is valid" do
      user = create(:user)

      expect(user).to be_valid
    end
  end

  context "with invalid params" do
    it 'is invalid without an email' do
      user = build(:user, email: nil)

      expect(user).to be_invalid
    end

    it "is invalid without a password" do
      user = build(:user, password: nil)

      expect(user).to be_invalid
    end

    it "is invalid without a matching password confirmation" do
      user = build(:user, password_confirmation: "thisdefinitelyisnotamatch")

      expect(user).to be_invalid
    end
  end

end 
