import express from 'express'
import { products } from './data.js'
// save data (db)
// view detail **pages
// sort, filter, 
// search

let app = express()

app.set('view engine', 'ejs')
app.use(express.static("static"));

app.get('/', function (req, res) {
    res.render("1.ejs");
})


app.get("/:region/product/:id/", function (req, res) {
    let id = req.params.id;
    let region = req.params.region;


    for (let i = 0;i < products.length;i++){
      if (products[i].id == id) {
        
        if (region == 'ua'){
        res.render("template", { data: products[i], price: products[i].price*37, symbol: "₴" });
        }
        if( region == 'eu')
        res.render("template", {
          data: products[i],
          price: products[i].price,
          symbol: "$",
        });
         if (region == "de") {
           res.render("template", {
             data: products[i],
             price: products[i].price * 0.95,
             symbol: "€",
           });
         }
      }
     



    }

  
   
});

// map/kyiv map/lviv
// video/music  video/game

app.get("/map/:city", function (req, res) {
  let city = req.params.city;
  if (city == 'lviv') {
    res.render("map", {
      data: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82352.68502409474!2d23.92966301939552!3d49.83265972217777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7c09109a57%3A0x4223c517012378e2!2z0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1suk!2sua!4v1692373156102!5m2!1suk!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    });
  }
  if (city == 'kyiv') {
    res.render("map", { data: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325516.3770455823!2d30.532690549999998!3d50.402035500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1692373113908!5m2!1suk!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' });
  }
});

app.get("/video/:category", function (req, res) {
  let category = req.params.category;
  if (category == "music") {
    res.render("video", {
      data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/um-Keb8iI80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    });
  }
  if (category == "game") {
    res.render("video", {
      data: '<iframe width="560" height="315" src="https://www.youtube.com/embed/iH0ZHxwqZgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    });
  }
});




app.get("/contacts", function (req, res) {
  res.send("+3806584567");
});


app.listen(3004)
// http://localhost:3004

