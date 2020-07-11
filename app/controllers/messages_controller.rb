class MessagesController < ApplicationController
  def create
    user = current_user
    channel = params[:channel_id]
    message = user.messages.new(message_params)
    message.channel_id = channel
    message.save
    render json: message
  end

  private
    def message_params
      params.require(:message).permit(:content, :channel_id)
    end

end
