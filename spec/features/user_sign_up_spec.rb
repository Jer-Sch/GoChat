require 'rails_helper'

RSpec.feature "UserSignUps", type: :feature do
  
  it "a user can sign up via sign up form" do

    visit '/users/sign_up'
    
    fill_in 'user_email', with: 'kjohnson@mail.com'
    fill_in 'user_password', with: 's3cur3p4ssw0rd'
    fill_in 'user_password_confirmation', with: 's3cur3p4ssw0rd'
    click_on 'Sign up'

    expect(User.last.email).to eq('kjohnson@mail.com')
    
  end

  it "redirects a user to /homepage/index upon sign up" do

    visit '/users/sign_up'
    
    fill_in 'user_email', with: 'mhamilton@mail.com'
    fill_in 'user_password', with: 's3cur3p4ssw0rd'
    fill_in 'user_password_confirmation', with: 's3cur3p4ssw0rd'
    click_on 'Sign up'

    expect(User.last.email).to eq('mhamilton@mail.com')

    expect(current_path).to eq('/homepage/index')
    
  end

end
