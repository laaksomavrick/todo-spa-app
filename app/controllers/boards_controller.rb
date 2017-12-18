class BoardsController < ApplicationController

  def index
    @boards = Board.all
    render json: {boards: @boards}
  end

  def create
  end

  def show
  end

  def update
  end

  def destroy
  end

end
