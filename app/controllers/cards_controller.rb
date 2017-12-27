class CardsController < ApplicationController

  def index
    cards = Card.all.order(id: :desc)
    render json: {cards: cards}
  end

  def create
    card = Card.new(card_params)
    if card.save
      render json: { status: 200, data: card }
    end
  end

  def show
  end

  def update
  end

  def destroy
  end

  private

  def card_params
    params.require(:card).permit(:title, :board_id)
  end

end
