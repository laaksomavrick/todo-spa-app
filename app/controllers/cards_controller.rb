class CardsController < ApplicationController

  def index
    cards = Card.all
    render json: {cards: cards}
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
