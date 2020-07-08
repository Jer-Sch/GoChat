class ChannelsController < ApplicationController

  def index
    channels = Channel.all
    render json: channels
  end

  def create
    channel = Channel.create!(channel_params)
    render json: channel if channel
  end

  def edit
  end

  def update
  end



  private

    def channel_params
      params.require(:channel).permit(:name)
    end

end
