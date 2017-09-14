# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require_relative './item_data.rb'
require_relative './category_data.rb'

Item.destroy_all
Category.destroy_all

item_data = get_item_data
category_data = get_category_data

item_data.each_pair do |category_name, items|
  info = category_data[category_name]
  current_category = Category.create!({
    name:         info[:name],
    image:        info[:image],
    description:  info[:description]
  })

  items.each do |item|
    Item.create!({
      title:        item[:title],
      image:        item[:image],
      description:  item[:description],
      price:        item[:price],
      category:       current_category
    })
  end
end