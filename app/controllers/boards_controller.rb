class BoardsController < ApplicationController

  def index
    boards = current_user.boards.all.order(:id)
    render json: { status: 200, data: boards}
  end

  def create
    board = Board.new(board_params)
    board.user_id = current_user.id
    if board.save
      render json: { status: 200, data: board }
    end
  end

  def update
    board = Board.find(params[:id])
    if board.update_attributes(board_params)
      render json: { status: 200, data: board }
    end
  end

  def destroy
    board = Board.find(params[:id])
    if board.destroy
      render json: { status: 200, data: board }
    end
  end

  private

  def board_params
    params.require(:board).permit(:name, :id)
  end

end
