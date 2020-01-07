class Api::FriendsController < ApplicationController

    def index
        friends1 = Friend.where(user_one_id: current_user.id).to_a
        friends2 = Friend.where(user_two_id: current_user.id).to_a
        if friends1 == nil && friends2 == nil
            @friends = []
        elsif friends1 == nil
            @friends = friends2
        elsif friends2 == nil
            @friends = friends1
        else
            @friends = friends1.concat(friends2)
        end
        render "api/friends/index"
    end

    def indexById
        id = params[:id]
        friends1 = Friend.where(user_one_id: id).to_a
        friends2 = Friend.where(user_two_id: id).to_a
        if friends1 == nil && friends2 == nil
            @friends = []
        elsif friends1 == nil
            @friends = friends2
        elsif friends2 == nil
            @friends = friends1
        else
            @friends = friends1.concat(friends2)
        end
        render "api/friends/index"
    end
    
    def create
        @friend = Friend.new(friend_params)

        if @friend.save
            render "api/friends/show"
        else
            render json: @friend.errors.full_messages, status: 422
        end
    end

    def update
        @friend = Friend.find(params[:id])
        @friend.status = !@friend.status
        if @friend.save
            render "api/friends/show"
        else
            render json: @friend.errors.full_messages, status: 422
        end
        
    end

    def destroy
        @friend = Friend.find(params[:id])
        @friend.destroy
        render 'api/friends/show'
    end
    

    private
    def friend_params
        params.require(:friend).permit(:user_one_id, :user_two_id, :status)
    end
end