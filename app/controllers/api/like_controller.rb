class Api::LikeController < ApplicationController


    def index
        @post = Post.find(params[:post_id])
        @likes = @post.likes
        render "api/likes/index"
    end

    def create
        @like = Like.new(like_params)
        if @like.save 
            render "api/likes/show"
        else
            render json: @likes.errors.full_messages, status:422
        end
    end

    def destroy
        @like = Like.find_by(id:params[:id])
        @like.destroy
        render "api/likes/show"
    end

    private
    def like_params
        params.require(:like).permit(:user_id, :post_id)
    end
end