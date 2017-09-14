def get_item_data
  item_data = {
    'salads' => [
      {
        :title => 'Caesar Salad',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/salad/caesar.png',
        :description => 'Crisp romaine lettuce, garlic croutons. Caesar dressing and shaved parmesan cheese.',
        :price => 7.45
      },{
        :title => 'Grilled Chicken Salad',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/salad/grilled-chicken.png',
        :description => 'Grilled chicken breast on a bed of romaine and iceberg lettuce, red cabbage, grated carrots, sliced cucumber, grape tomatoes, red onions. Blended monterey jack and cheddar cheese.',
        :price => 12.95
      },{
        :title => 'House Salad',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/salad/house.png',
        :description => 'Romaine and iceberg lettuce, red cabbage, grated carrots, sliced cucumber, grape tomatoes, red onions. Blended monterey jack and cheddar cheese.',
        :price => 8.45
      },{
        :title => 'Shrimp Salad',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/salad/shrimp.png',
        :description => 'Jumbo shrimp on a bed of romaine and iceberg lettuce, red cabbage, grated carrots, sliced cucumber, grape tomatoes, red onions. Blended monterey jack and cheddar cheese.',
        :price => 13.95
      },{
        :title => 'Steak Salad',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/salad/steak.png',
        :description => 'Seared center-cut sirloin, on a bed of romaine and iceberg lettuce, red cabbage, grated carrots, sliced cucumber, grape tomatoes, red onions. Blended monterey jack and cheddar cheese.',
        :price => 14.95
      }
    ],
    'sandwiches' => [
      {
        :title => 'B.L.T. Sandwich',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/sandwich/blt.png',
        :description => 'Bacon, lettuce and tomato on your choice of bread. Ask for it toasted.',
        :price => 7.75
      },{
        :title => 'Gilly\'s Burger',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/sandwich/burger.png',
        :description => 'Half pound of ground beef cooked any way you like, served on a bun. Add bacon for $1.00 or cheese for only $0.50 a slice.',
        :price => 9.45
      },{
        :title => 'Cheese Steak Sandwich',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/sandwich/cheese-steak.png',
        :description => 'Thin sliced beefsteak, grilled onion & bell peppers with provolone cheese on a hoagie roll.',
        :price => 9.95
      },{
        :title => 'Chicken Salad Sandwich',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/sandwich/chicken-salad.png',
        :description => 'Cicken salad on a toasted roll with lettuce and tomato.',
        :price => 8.50
      },{
        :title => 'Chicken Wrap Sandwich',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/sandwich/chicken-wrap.png',
        :description => 'Your choice of grilled of fried chicken. tomatos, lettuce, onions and cheese in a soft Tortilla. Ranch, salsa or sour cream on the side.',
        :price => 8.50
      },{
        :title => 'Club Sandwich',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/sandwich/club.png',
        :description => 'Ham, turkey, bacon, lettuce and tomato on your choice of toasted wheat or white bread.',
        :price => 9.95
      },{
        :title => 'French Dip Sandwich',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/sandwich/french-dip.png',
        :description => 'Premium thin sliced roasted beef, grilled oninions on a toasted hoagie with a side of Au Jus.',
        :price => 9.95
      },{
        :title => 'Fish Filet Sandwich',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/sandwich/fried-fish.png',
        :description => 'Fired fish filet with lettuce, tartar sauce and your choice of cheese.',
        :price => 9.95
      },{
        :title => 'Grilled CHeese Sandwich',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/sandwich/grilled-cheese.png',
        :description => 'Your choice of bread and two cheeses.',
        :price => 7.45
      },{
        :title => 'Grilled Chicken Sandwich',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/sandwich/grilled-chicken.png',
        :description => 'Grilled chicken breast with tomato and lettuce on a toasted roll.',
        :price => 8.95
      },{
        :title => 'Hot Dog',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/sandwich/hot-dog.png',
        :description => 'Quarter pound beef link on a toasted bun.',
        :price => 6.75
      },{
        :title => 'Reuben Deluxe',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/sandwich/reuben-deluxe.png',
        :description => 'Corned beef, swiss cheese, sour kraut & thousand island dressing on toasted marble rye bread.',
        :price => 9.95,
      }
    ],
    'sides' => [
      {
        :title => 'Loaded Baked Potato',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/side/baked-potato.png',
        :description => 'Baked potato with bacon, cheddar cheese, sour cream and green onins.',
        :price => 4.95
      },{
        :title => 'French Fries',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/side/fries.png',
        :description => 'Basket of crinkle cut potatoes cooked to a golden brown.',
        :price => 4.95
      },{
        :title => 'Kettle Chips',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/side/kettle-chips.png',
        :description => 'Basket of salted thick sliced potatos fried to a crispy golden brown.',
        :price => 4.95
      },{
        :title => 'Onion Rings',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/side/onion-rings.png',
        :description => 'Basket of thick cut onion rings battered and deep fried.',
        :price => 4.95
      },{
        :title => 'Side Salad',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/side/side-salad.png',
        :description => 'Romaine and iceberg lettuce, red cabbage, grated carrots, sliced cucumber, grape tomatoes, red onions. Blended monterey jack and cheddar cheese.',
        :price => 4.95
      }
    ],
    'specials' => [
      {
        :title => 'Sunday Spaghetti',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/special/spaghetti.png',
        :description => 'Spaghetti pasta noodles smothered in a meat sauce with fresh vine ripened tomatoes.',
        :price => 10.95
      },{
        :title => 'Monday Meatloaf',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/special/meatloaf.png',
        :description => 'Seasoned home-style meatloaf, made with onions, tomato puree, toasted breadcrumbs. Topped with hickory ketchup. green beans, mashed potatoes and a roll.',
        :price => 10.95
      },{
        :title => 'Tuesday Tacos',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/special/tacos.png',
        :description => 'Five crispy corn tortillas filled with seasond ground beef, lettuce, tomatoes, oninons and mozzarella cheese.',
        :price => 10.95
      },{
        :title => 'Wednesday White Fish',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/special/white-fish.png',
        :description => 'Savory grilled white fish, asparagus and mashed potatoes',
        :price => 10.95
      },{
        :title => 'Thursday Thor\'s Skillet',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/special/thor-skillet.png',
        :description => 'Thick blend of beans, ground beef, potatoes, onions and peppers.',
        :price => 10.95
      },{
        :title => 'Friday Fish Fry',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/special/fish-fry.png',
        :description => 'Fried cod fish, hush puppies and french fries with a side of maulted vinegar and tartar sauce.',
        :price => 10.95
      },{
        :title => 'Saturday Salmon',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/special/salmon.png',
        :description => 'Grilled smoked salmon, asparagus and pinto beans.',
        :price => 10.95
      }
    ],
    'starters' => [
      {
        :title => 'BBQ Shrimp',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/starter/bbq-shrimp.png',
        :description => 'Grilled southern style shrimp glazed with barbecue sauce.',
        :price => 9.95
      },{
        :title => 'Breaded Cheese Sticks',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/starter/cheese-sticks.png',
        :description => 'Batter fried mozzarella cheese served with marinara sauce.',
        :price => 7.95
      },{
        :title => 'Chicken Tenders',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/starter/chicken-tenders.png',
        :description => 'Breaded and fried tender chicken breast srtips served with your choice of dipping sauce.',
        :price => 8.50
      },{
        :title => 'Chicken Wings',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/starter/chicken-wings.png',
        :description => 'ten gently deep fried and marinated in special sauces. Served with carrots, celery and your choice of dipping sauce.',
        :price => 8.95
      },{
        :title => 'Chips and Salsa',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/starter/chips-salsa.png',
        :description => 'Crispy corn tortilla chips with a side of salsa.',
        :price => 4.95
      },{
        :title => 'Nachos',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/starter/nachos.png',
        :description => 'Corn tortilla chips, lettuce, tomatoes, salsa, jalapeño\'s, sour cream and melted cheese.',
        :price => 7.95
      },{
        :title => 'Poppers',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/starter/poppers.png',
        :description => 'Basket of cheddar cheese stuffed jalapeño peppers. Sour cream and salsa on the side.',
        :price => 6.95
      },{
        :title => 'Potato Skins',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/starter/potato-skins.png',
        :description => 'Fried potato skins topped with cheddar cheese, chives, bacon and sour cream.',
        :price => 6.95
      },{
        :title => 'Salsa Meatballs',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/starter/salsa-meatballs.png',
        :description => 'Meatballs in a salsa sauce cooked just right.',
        :price => 6.95
      },{
        :title => 'Shrimp',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/starter/shrimp.png',
        :description => 'Half pound of peeled shrip ready to eat, served with cocktail sauce.',
        :price => 8.95
      }
    ],
    'steaks' => [
      {
        :title => 'Chopped Steak',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/steak/chopped-steak.png',
        :description => 'Covered with sautéed onions.',
        :price => 12.00
      },{
        :title => 'Filet Mignon',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/steak/filet-mignon.png',
        :description => 'Cooked to perfection',
        :price => 24.00
      },{
        :title => 'New York Strip Steak',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/steak/new-york-strip.png',
        :description => 'Select premium cut, delicious, tender and cooked your way.',
        :price => 24.00
      },{
        :title => 'T-Bone',
        :image => 'http://michael-sean.com/Gillysnow/menu/image/steak/t-bone.png',
        :description => 'Classic combination of a filet and New York strip.',
        :price => 26.00
      }
    ]
  }
end