require 'rails_helper'

RSpec.feature "UserSignIns", type: :feature do
  
  it "a user can sign in via sign in form" do

    user = create(:user)

    visit new_user_session_path

    fill_in "user_email", with: user.email
    fill_in "user_password", with: user.password
    click_on "Log in"

    expect(page.status_code).to eq(200)

  end

end
