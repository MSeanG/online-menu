class Api::CategoriesController < ApplicationController
  # before_action :authenticate_user!

  def index
    @categories = Category.all
    render json: @categories
  end

  def show
    @category = Category.find(params[:id])
    @items = @category.items.all
    render json: {
      category: @category,
      items: @items
    }
  end
end
