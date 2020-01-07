class Api::PostController < ApplicationController

    def index

    end

    def create
        @post = Post.new(post_params)

        if @post.save
            render "api/posts/show"
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def update
        @post = Post.find_by(id: params[:id])
        @post.update(post_params)
        render "api/posts/show"
    end

    def destroy
        @post = Post.find_by(id: params[:id])
        @post.destroy
        render "api/posts/show"
    end

    def show
        @post = Post.find(params[:id])
        render "api/posts/show"
    end

    #Get all posts by user and posts on the user's profile
    def allUserPosts
        user_id = params[:id]
        userPosts = Post.where(author_id: user_id).to_a
        receivedPost = Post.where(profile_id: user_id).to_a
        if userPosts == nil && receivedPost == nil
            @posts = []
        elsif userPosts == nil
            @posts = receivedPost
        elsif receivedPost == nil
            @posts = userPosts
        else
            @posts = userPosts.concat(receivedPost)
        end

        render "api/posts/index"
    end

    def allPosts
        user_id = params[:id]
        @posts=[];
        userPosts = Post.where(author_id: user_id).to_a
        receivedPost = Post.where(profile_id: user_id).to_a
        if userPosts == nil && receivedPost == nil
            @posts = []
        elsif userPosts == nil
            @posts = receivedPost
        elsif receivedPost == nil
            @posts = userPosts
        else
            @posts = userPosts.concat(receivedPost)
        end
        user = User.find(user_id)
        friends1 = user.sent_requests.to_a
        friends2 = user.received_requests.to_a
        friends = friends1.concat(friends2)
        friends.each do |friend|
            curId = 0;
            if friend.user_one_id == user_id.to_i 
                curId = friend.user_two_id
            else
                curId = friend.user_one_id
            end
            userPosts = Post.where(author_id: curId).to_a
            receivedPost = Post.where(profile_id: curId).to_a
            if userPosts == nil && receivedPost == nil
                
            elsif userPosts == nil
                @posts = @posts.concat(receivedPost)
            elsif receivedPost == nil
                @posts = @posts.concat(userPosts)
            else
                @posts = @posts.concat(userPosts.concat(receivedPost))
            end
        end
        render "api/posts/index"
    end

    private
    def post_params
        params.require(:post).permit(:author_id, :profile_id, :content)
    end
end