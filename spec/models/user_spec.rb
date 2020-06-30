require 'rails_helper'

RSpec.describe User, type: :model do
  it 'is valid with valid attributes' do
    user = User.create(email: 'jdoe@geemail.com',
                       password: 'securepassword',
                       password_confirmation: 'securepassword')
    expect(user).to be_valid
  end

  it 'is invalid without an email' do
    user = User.create(email: '',
                       password: 'securepassword',
                       password_confirmation: 'securepassword')
    expect(user).to be_invalid
  end

  it 'is invalid without a password' do
    user = User.create(email: 'jdoe@geemail.com',
                       password: '',
                       password_confirmation: 'securepassword')
    expect(user).to be_invalid
  end

  it 'requires a password confirmation' do
    user = User.create(email: 'jdoe@geemail.com',
                       password: 'securepassword',
                       password_confirmation: '')
    expect(user).to be_invalid
  end
end 
