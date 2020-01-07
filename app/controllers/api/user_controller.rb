class Api::UserController < ApplicationController
    def create
        @user = User.new(user_params)
        
        if @user.save
          login(@user)
          render "api/users/show"
        else
          render json: @user.errors.full_messages, status: 422
        end
      end
    

    def show
      @user = User.find(params[:id]);
      render "api/users/show"
    end

    
      def search
        search = params[:search]["search"].split(" ")
        first_name = search.first
        last_name = search[1]
        
        unless last_name == nil
          last_name = last_name.capitalize
          @res = User.where(first_name: first_name, last_name:last_name).to_a
        else 
          @res = User.where(first_name: first_name).to_a
        end
        
        if @res.size>0
          render "api/users/search"
        else
          render json: ["No users found"], status:200
        end
      end

      
      private
    
      def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name, :birthday, :bio, :location, :workplace, :hometown, :relationship)
      end
end
