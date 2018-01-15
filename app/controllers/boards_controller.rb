class BoardsController < ApplicationController

  def index
    @boards = Board.all
    #todo standardize data: { boards }
    render json: {boards: @boards}
  end

  def create
    board = Board.new(board_params)
    board.user_id = current_user.id
    if board.save
      render json: { status: 200, data: board }
    end
  end

  def update
  end

  def destroy
  end

  private

  def board_params
    params.require(:board).permit(:name)
  end

end
