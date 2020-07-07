require 'rails_helper'

RSpec.describe Channel, type: :model do
  context "with valid params" do
    it "is valid with a name" do
      channel = create(:channel)

      expect(channel).to be_valid
    end
  end

  context "with invalid params" do
    it "is invalid without a name" do
      channel = build(:channel, name: nil)

      expect(channel).to be_invalid
    end
  end
end
