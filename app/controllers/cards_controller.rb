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

  def update
    card = Card.find(params[:id])
    if card.update_attributes(card_params)
      render json: { status: 200, data: card }
    end
  end

  def destroy
    card = Card.find(params[:id])
    if card.destroy
      render json: { status: 200, data: card }
    end
  end

  private

  def card_params
    params.require(:card).permit(:title, :description, :board_id)
  end

end
