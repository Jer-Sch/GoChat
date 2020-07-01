FactoryBot.define do
    factory :user do
      email { "ghopper@mail.com" }
      password { "s3cur3p4ssw0rd" }
      password_confirmation  { "s3cur3p4ssw0rd" }
    end
  end