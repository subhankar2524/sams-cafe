import React from 'react'
import './Display.css'
import FoodCard from '../FoodCard';
import ArrowDown from '../../assets/images/arrow-down-brush.png'

const products = [
  {
    name: "Organic Almonds",
    image: "https://robbreport.com/wp-content/uploads/2020/12/grilled-dorade-vernick-fish.jpg?w=1000",
    price: 5.99,
    rating: 4.5,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, voluptatem'
  },
  {
    name: "Fresh Blueberries",
    image: "https://static01.nyt.com/images/2010/01/27/dining/27feedspan-1/articleLarge.jpg",
    price: 3.49,
    rating: 3.8,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, voluptatem'
  },
  {
    name: "Gluten-Free Pasta",
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Eggplant-Rollatini_EXPS_FT24_41566_EC_022924_3.jpg?w=700",
    price: 4.99,
    rating: 4.9,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, voluptatem'
  },
  {
    name: "Coconut Water",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRE5bmdJfGLPCNKswFnjFUc64cXDwGYYOgDy7CDVYQpx5K4foBZBaNESSabOrYbiSyJJo&usqp=CAU",
    price: 2.49,
    rating: 3.0,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, voluptatem'
  },
  {
    name: "Organic Honey",
    image: "https://robbreport.com/wp-content/uploads/2020/12/lobster-bao-essex-pearl.jpg?w=1000",
    price: 7.99,
    rating: 4.2,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, voluptatem'
  },
  {
    name: "Quinoa",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTII_mz4X9ob_ae2OBng5GE296bn_0rArPogmvSlP9m4UdZbzE14XikCcKurCqhoKb_W6o&usqp=CAU",
    price: 6.99,
    rating: 4.3,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, voluptatem'
  },
  {
    name: "Avocado",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOxE_DWWLhQAhiE5BCQSZZl62rVtUXbZ_FsA&s",
    price: 1.99,
    rating: 4.0,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, voluptatem'
  },
  {
    name: "Chia Seeds",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9m3vN5TyS62iY6cK9Su8w5h_R9JXi43ZeSZrmFj2-fuVMKTuLiTAm5pHURFL94HJVaQ&usqp=CAU",
    price: 3.79,
    rating: 4.7,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, voluptatem'
  },
  {
    name: "Fresh Strawberries",
    image: "https://assets.bonappetit.com/photos/64ff37349874254bb1780d01/16:9/w_2560%2Cc_limit/20230908-POTLUCK-CLUB-0275%2520(1).jpg",
    price: 4.50,
    rating: 4.6,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, voluptatem'
  },
  {
    name: "Greek Yogurt",
    image: "https://www.bhg.com/thmb/6MhCC0ocQGQlb4PIU8ayEeI4QEI=/1244x0/filters:no_upscale():strip_icc()/RU295936-597ced2f12a2480c8c9828c634de1916.jpg",
    price: 3.29,
    rating: 4.1,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, voluptatem'
  },
  {
    name: "Almond Butter",
    image: "https://assets.bonappetit.com/photos/5cf6c457a50b78b17f30b5fd/1:1/w_1920,c_limit/jammy-pepper-pasta-1.jpg",
    price: 5.49,
    rating: 4.4,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, voluptatem'
  },
  {
    name: "Vegan Protein Powder",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsbmDogvawgWpaT_NmVJVvRCJxQ7WVLsG1aXZkxxndkiUyYQvrnIGSXasgoWws4K-2bLE&usqp=CAU",
    price: 19.99,
    rating: 4.3,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, voluptatem'
  },
  {
    name: "Cold Brew Coffee",
    image: "https://berriesandspice.com/wp-content/uploads/2018/08/Berries-and-Spice-How-to-plate-dishes-worthy-of-a-fine-dining-restaurant-the-complete-guide-23-scaled.jpg",
    price: 2.99,
    rating: 4.5,
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, voluptatem'
  }
];

const Display = () => {
  return (
    <div className='wrapper'> 
        <h1 style={{textAlign:'center', color: 'black'}}>You may like one of our displays</h1><br />
        
        <FoodCard products={products}/>
    </div>
  )
}

export default Display