require('dotenv').config();
require('./config/database');
const Category = require('./models/category');
const Brand = require('./models/brand');
const Product = require('./models/product');

// Pattern:  IIFE
(async function () {

    await Category.deleteMany({});
    const categories = await Category.create([
        { name: 'Dresses' }, //0
        { name: 'Shirts' }, //1
        { name: 'Shorts' }, //2
        { name: 'Jackets' }, //3
        { name: 'Coats' }, //4
        { name: 'Hoodies' }, //5
        { name: 'Jumpsuits' }, //6
        { name: 'Skirts' }, //7
        { name: 'Loungewear' }, //8
        { name: 'Leggings' }, //9
        { name: 'Jeans' }, //10
        { name: 'Joggers' }, //11
        { name: 'Shoes' }, //12
    ]);

    await Brand.deleteMany({});
    const brands = await Brand.create([
      {name: 'Nike', sortOrder: 10}, // [0]
      {name: 'Zara', sortOrder: 20}, // [1]
      {name: 'H&M', sortOrder: 30}, // [2]
      {name: 'For Love & Lemons', sortOrder: 40}, // [3]
      {name: 'Adidas', sortOrder: 50}, // [4]
      {name: 'Lululemon', sortOrder: 60}, // [5]
      {name: 'Urban Outfitters', sortOrder: 70}, // [6]
      {name: 'Chanel', sortOrder: 80}, // [7]
      {name: 'Steve Madden', sortOrder: 90}, // [8]
      {name: 'Levi', sortOrder: 100}, // [9]
    ])

    await Product.deleteMany({});
    const products = await Product.create([
      
      {
        name: 'Nike Air Force 1 07', 
        img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f094af40-f82f-4fb9-a246-e031bf6fc411/air-force-1-07-womens-shoes-GCkPzr.png', 
        category: categories[12], 
        brand: brands[0], 
        price: 100.00,
        size: '',
        description: "The radiance lives on in the Nike Air Force 1 07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colors and the perfect amount of flash to make you shine."
      },
      {
        name: 'Nike Air Force 1 High LE', 
        img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/de3e9ecd-c25c-4f25-9498-f09ac9787376/air-force-1-high-le-big-kids-shoes-81vt1b.png', 
        category: categories[12], 
        brand: brands[0], 
        price: 135.00,
        size: '',
        description: "This is what legends are made of. The Nike Air Force 1 High LE brings back the ’82 hardwood icon into an everyday style in all-white. The durability, feel and Air are still there for those who love a classic."
      },
      {
        name: 'Nike Air Force 1 Fossil Stone', 
        img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5cf81048-f8ba-4833-8123-d1b4c7b6f63b/air-force-1-07-womens-shoes-R560Vz.png', 
        category: categories[12], 
        brand: brands[0], 
        price: 110.00,
        size: '',
        description: "Everything is coming up roses—even your AF1s. The original hoop shoes are back in bloom with soft pink leather and a tonal Nike print. Ribbon laces give just the right amount of sheen, and bright red accents finish the look."
      },
      {
        name: 'Nike Sportswear Club Fleece - Black', 
        img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/t0okyycbl4ympuel6svl/sportswear-club-fleece-joggers-KflRdQ.png', 
        category: categories[11], 
        brand: brands[0], 
        price: 55.00,
        size: '',
        description: "A closet staple, the Nike Sportswear Club Fleece Joggers combine a classic look with the soft comfort of fleece for an elevated, everyday look that you can wear every day."
      },
      {
        name: 'Knit Dress With Metallic Thread', 
        img: 'https://static.zara.net/photos///2022/I/0/1/p/8146/006/808/2/w/850/8146006808_1_1_1.jpg?ts=1654013494619', 
        category: categories[0], 
        brand: brands[1], 
        price: 58.00,
        size: '',
        description: 'Mini dress with flowy neckline and thin straps. Open back detail.'
      },
      {
        name: 'Satin Effect Print Dress', 
        img: 'https://static.zara.net/photos///2022/I/0/1/p/2674/301/620/2/w/850/2674301620_2_1_1.jpg?ts=1653649958712', 
        category: categories[0], 
        brand: brands[1], 
        price: 60.00,
        size: '',
        description: "Midi dress with sweetheart neckline and adjustable tied spaghetti straps that cross at back."
      },
      {
        name: 'Denim Overalls', 
        img: 'https://static.zara.net/photos///2022/V/0/1/p/9632/053/712/2/w/850/9632053712_1_1_1.jpg?ts=1646667524379', 
        category: categories[6], 
        brand: brands[1], 
        price: 70.00,
        size: '',
        description: "Straight neck overalls with adjustable wide straps. Patch pockets at chest, front and back. Straight leg. Side metal button closure."
      },
      {
        name: 'Wide-leg Twill Pants', 
        img: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd0%2Ff4%2Fd0f4c8b12f4d41112f6c35a638607edc94f47d06.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]', 
        category: categories[10], 
        brand: brands[2], 
        price: 25.00,
        size: '',
        description: "Long, 5-pocket pants in stretch cotton twill. High waist, zip fly with button, and straight, wide legs."
      },
      {
        name: 'Imani Hi-Low Dress', 
        img: 'https://cdn.shopify.com/s/files/1/0271/4967/products/210512_BC_FLL_HOLIDAY21_SHOT_94_3732_1200x.jpg?v=1635882972', 
        category: categories[0], 
        brand: brands[3], 
        price: 578.00,
        size: '',
        description: "Ethereal maxi dress featuring embroidered maisonette mesh and a detachable maxi skirt with tiered ruffles. Tiered ruffles at neckline and mini skirt. Open back with delicate ties. Invisible zipper at side."
      },
      // Snares
      {
        name: 'Sadie Corset Crop Top', 
        img: 'https://cdn.shopify.com/s/files/1/0271/4967/products/210821_BC_FLL_SPRING22_RTW_LOOK_114_012_1200x.jpg?v=1646688501', 
        category: categories[1], 
        brand: brands[3], 
        price: 185.00,
        size: '',
        description: 'Dreamy linen corset crop top featuring eyelet embroidered cut-out details and includes a built-in peekaboo lace bra. Delicate adjustable straps, plunging open back with a hook & eye closure.'
      },
      {
        name: 'French Terry Sweatshirt', 
        img: 'https://cdn.shopify.com/s/files/1/0271/4967/products/211206_BC_FLL_VS_D2_D3_PDP_LOOK_02_0013_1200x.jpg?v=1642793569', 
        category: categories[5], 
        brand: brands[3], 
        price: 89.00,
        size: '',
        description: 'The official uniform of chill: a cozy layer to pull on after workouts or just for hanging out. Features an oversized, cropped silhouette and a raw edge hem.'
      },
      {
        name: 'Charlotte Mini Skirt', 
        img: 'https://cdn.shopify.com/s/files/1/0271/4967/products/211022_BC_FLL_SUMMMER22_RTW_LOOK_96_031_1200x.jpg?v=1653068443', 
        category: categories[7], 
        brand: brands[3], 
        price: 135.00,
        size: '14" x 6.5"',
        description: ""
      },
      {
        name: 'Adicolor Essentials Trefoil Hoodie', 
        img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6ef7a84f32cf4e1e8f91adcf012e5f2c_9366/Adicolor_Essentials_Trefoil_Hoodie_Grey_HE9418_21_model.jpg', 
        category: categories[5], 
        brand: brands[4], 
        price: 55.00,
        size: '',
        description: 'A hoodie made for comfort and simple style.'
      },
      {
        name: 'Tiro 21 Track Pants', 
        img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9c7058d8677742ac8519ac3f009cdcf4_9366/Tiro_21_Track_Pants_Black_GH7305_21_model.jpg', 
        category: categories[1], 
        brand: brands[11], 
        price: 50.00,
        size: '',
        description: "Tapered track pants made with recycled materials."
      },
      
    ]);
  

    console.log(products)

    process.exit();

})();