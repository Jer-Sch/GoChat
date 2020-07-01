require 'rails_helper'

RSpec.feature "UserSignUps", type: :feature do
  
  it "a user can sign up via sign up form" do

    visit new_user_registration_path

    user = build(:user)
    
    fill_in "user_email", with: user.email
    fill_in "user_password", with: user.password
    fill_in "user_password_confirmation", with: user.password_confirmation
    click_on "Sign up"

    expect(User.last.email).to eq(user.email)
    
  end

end
