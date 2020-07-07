class ChannelsController < ApplicationController

  def index
    channels = Channel.all
    render json: channels
  end

  def new
  end

  def create
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
