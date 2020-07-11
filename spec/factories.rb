FactoryBot.define do
  factory :message do
    channel { nil }
    user { nil }
    message { "MyText" }
  end


  factory :channel do
    name { "ruby" }
  end

  factory :user do
    email { "ghopper@mail.com" }
    password { "s3cur3p4ssw0rd" }
    password_confirmation  { "s3cur3p4ssw0rd" }
  end
  
end