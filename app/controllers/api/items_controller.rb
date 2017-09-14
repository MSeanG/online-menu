class Api::ItemsController < ApplicationController
  # before_action :authenticate_user!

  def index
    @category = Category.find(params[:category_id])
    @items = @category.items.all
    render json: @items
  end 

  # def new
    # @item = Item.new
    # render json: @items
  # end 

  def create
    @item = Item.new(item_params)
    if @item.save
      render json: @item
    else 
      render json: {
        message: 'Error creating Item'
      }
    end 
  end

  def show
    @category = Category.find(pramas[:category_id])
    @item = @category.items.find(params[:id])
    render json: @item
  end 

  def update
    @item = Item.find(params[:id])
    if @item.update(item_params)
      render json: @item
    else 
      render json: {
        message: 'Error updating Item'
      }
    end 
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy
    render json: {
      message: 'Item successfully deleted'
    }
  end 

  # def edit
  # end 

  private
  def item_params
    params.require(:item).permit(:title, :image, :description, :price)
  end

end
