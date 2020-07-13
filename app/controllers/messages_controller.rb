class MessagesController < ApplicationController
  def create
    user = current_user
    channel = Channel.find(message_params[:channel_id])
    message = user.messages.new(message_params)
    # message.channel_id = channel?
    if message.save
      serialized_data = ActiveModelSerializers::Adapter::Json.new(
        MessageSerializer.new(message)
      ).serializeable_hash
      MessageChannel.broadcast_to channel, serialized_data
      head :ok
    end
  end

  private
    def message_params
      params.require(:message).permit(:content, :channel_id)
    end

end
