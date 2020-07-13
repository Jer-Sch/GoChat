class ChannelsController < ApplicationController

  def index
    channels = Channel.all
    render json: channels
  end

  def create
    channel = Channel.new(channel_params)
    if channel.save
      serialized_data = ActiveModelSerializers::Adapter::Json.new(
        ChannelSerializer.new(channel)
      ).serializeable_hash
      ActionCable.server.broadcast 'channels_channel', serialized_data
      head :ok
    end
  end

  # def show
  #   channel = Channel.find_by(id: params[:id])
  #   message = Message.new(channel: channel)
  #   messages = channel.messages
  #   render json: messages
  # end

  def edit
  end

  def update
  end



  private

    def channel_params
      params.require(:channel).permit(:name)
    end

end
