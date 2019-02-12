class UsersController < ApplicationController
  def create
    user = User.new user_params
    if user.save!
      render json: {status: 200, id: user.id}
    else
      render json: {status: 422, errors: user.errors}, status: 422
    end
  end

  def current
    render json: {status: 200, current_user: current_user.id}
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end
