import React from 'react';
import { Component } from 'react'
import fetch from 'isomorphic-fetch'
import { ProductList, FullProductList } from './ProductList'
import { PatternList } from './dropList'
import { ColorList } from './dropColorList'
import { SizeList } from './sizeList'
import { PageList } from './paging'
import { CodMenu, CodIntro, ArtList, ColorPatternList, Order } from './CutOnDemand'
import { ShopMenu  } from './MenuList'
//import { MainMenu } from './headerList'
React.window = window

export class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {

        vPages: [{
          "page": 1,
        }], 
    	  patternsX: [],
        allColors: [],
	      products: [
				{
					"product": "Loading rea...",
					"price": "... please wait",
					"img": ""
				}],
		  allProducts: [],
      defSizes: ["S", "M", "L"],
      defPatterns: {
        "stripes": {
          pattern: "stripes",
          family: ["Tre rand", "Smal Rand", "Three Stripe", "Thin Stripe", "Diagonal" ],
          icon: "stripes.jpg"
        },
        "dotts": {
          pattern: "dotts",
          family: ["Bean", "Böna"],
          icon: "dotts.jpg"
        },      
        "zack": {
          pattern: "zack",
          family: ["Labyrint", "Twin Peaks",  "Wicky Leeks", ],
          icon: "zack.jpg"
        },
         "animals": {
          pattern: "animals",
          family: ["Light Tiger", "Tiger ljus botten", "Dark Tiger", "Tiger mörk botten", "Fjäder", "Fågel", "Feather",  "Heather", "Heather "],
          icon: "animals.jpg"
        },
        "flowers": {
          pattern: "flowers",
          family: ["Mah-Jongblomma", "Ginkgo", "Ljung", "Varma Backen", "Ginkgo Fantasi", "Ljung ", "Stor Blomma", "Lilla Backen", "Mah-Jongflower", "ginkgo", "Varm Meadow", "Ginkgo Fantasy", "Big Flower", "Little meadow"],
          icon: "flowers.jpg"
        },    
        "symbols": {
          pattern: "symbols",
          family: ["Pyramid", "The Seed", "Kärna", "Pyramid", ],
          icon: "symbols.jpg"
        },
        "unpattern": {
          pattern: "unpattern",
          family: ["one color", "Enfärgad"],
          icon: "unpattern.jpg"
        }
      },
      defColors: { 
        "red": {
          color: "red",
          family: ["Red Purple", "Red Rose", "Poopy Red", "Röd Rosa", "Rödlila",  "Vallmoröd",],
          colorvalue: {background:"#FF0000"}
        },
        "white": 
        {
          color: "white",
          family: ["Black White", "Svart Vit"],
          colorvalue: {background:"#FFF"}
        },
        "green":
        {
          color: "green",
          family: ["Pistagegreen-green", "Pea Green", "Green", "Grön", "Pistagegrön", "Ärtgrön", "Sommarfärgen Pistagegrön",],
          colorvalue: {background:"#0F0"}
        },
        "blue":
        {
          color: "blue",
          family: ["Aqua", "Heaven Blue", "Himmelsblå", "Påfågelblå",  "Indigoblå", "Indigo Blue", "Indigo ", "Lavendel Blue", "Jade Ceris",  "Purple Black", "Aqua", "Klarblå", "Havsturkos svart", "Jade Turkos", "Lavendel Cikoria", ],
          colorvalue: {background:"#00F"}
        }, 
               
        "lilic":
        {
          color: "lilic",
          family: [ "Lilac", "Vine-Greyish rose",  "Syrén Lila ", "Lila Rosa",  "Lila Svart", "Cyclamen", "Ceris Apricot",  "Ceris Aprikos"],
          colorvalue: {background:"#A26BA2"}
        }, 
        "orange":
        {
          color: "orange",
          family: ["Chocolate Nougat", "Cognac", "Amber", "Guldnougat",  "Konjak",  "Rasberryapricot", "Rasberry-apricot", "Orange Aprikos", "Bärnsten", ],
          colorvalue: {background:"#FF7F00"}
        }, 
        "pink":
        {
          color: "pink",
          family: ["Pink", "Purple Pink", "Rosa",  "Lilarosa ",  "Vin Grårosa","Hallonaprikos", ],
          colorvalue: {background:"#FF69B4"}
        }
         
        }, 
        showCod: false,
        showRea: false,
        showCategory: true,
        fullProducts: [],
        variations: [{
    "sku": "311",
    "category": "Barn",
    "cod_cost": 160,
    "description": "Halvl\u00e5ng kl\u00e4nning med volang och korta ving\u00e4rmar, finns i storlekarna 90 cl - 150 cl.",
    "img": "/media/uploads/img_1801.jpg",
    "color": "Syr\u00e9n Lila ",
    "quality": "Silkestrik\u00e5-barn",
    "price": 495,
    "pattern_id": 5,
    "color_id": 1,
    "pattern": "K\u00e4rna",
    "pk": 841,
    "article": "Barn Vingkl\u00e4nning",
    "type": "Barn",
    "id": 46,
    "size": "M"
  }, {
    "sku": "1340",
    "category": "Barn",
    "cod_cost": 160,
    "description": "L\u00e5ng\u00e4rmad tr\u00f6ja med rund halsringning, finns i storlekarna 90 cl - 150 cl.",
    "img": "/media/uploads/img_1789.jpg",
    "color": "Svart Vit",
    "quality": "Silkestrik\u00e5-barn",
    "price": 375,
    "pattern_id": 11,
    "color_id": 7,
    "pattern": "Mah-Jongblomma",
    "pk": 1199,
    "article": "Barn L\u00e5ng\u00e4rmad tr\u00f6ja ",
    "type": "Barn",
    "id": 44,
    "size": "M"
  }, {
    "sku": "1339",
    "category": "Barn",
    "cod_cost": 160,
    "description": "Smala byxor f\u00f6r barn.",
    "img": "/media/uploads/dsc_2002.jpg",
    "color": "Guldnougat",
    "quality": "Silkestrik\u00e5-barn",
    "price": 375,
    "pattern_id": 12,
    "color_id": 10,
    "pattern": "Labyrint",
    "pk": 1202,
    "article": "Barn Byxa",
    "type": "Barn",
    "id": 79,
    "size": "M"
  }, {
    "sku": "338",
    "category": "Accessoarer & s\u00e4ngkl\u00e4der",
    "cod_cost": 100,
    "description": "En liten enkel v\u00e4ska f\u00f6r de viktigaste sakerna. Storlek 20 cm x 20 cm. Med blixtl\u00e5s och axelrem.",
    "img": "/media/uploads/untitled-2.jpg",
    "color": "Svart Vit",
    "quality": "Silkestrik\u00e5",
    "price": 425,
    "pattern_id": 1,
    "color_id": 7,
    "pattern": "Twin Peaks",
    "pk": 511,
    "article": "Liten v\u00e4ska",
    "type": "Accessoarer & lakan",
    "id": 27,
    "size": "M"
  }, {
    "sku": "3",
    "category": "Metervara",
    "cod_cost": 160,
    "description": "Tyg i silkestrik\u00e5 i 150 cm bredd. S\u00e4ljs per meter.",
    "img": "/media/uploads/tyg_metervara/metervara_2.jpg",
    "color": "Svart Vit",
    "quality": "Silkestrik\u00e5",
    "price": 350,
    "pattern_id": 11,
    "color_id": 7,
    "pattern": "Mah-Jongblomma",
    "pk": 838,
    "article": "Tyg, Silkestrik\u00e5",
    "type": "Metervara",
    "id": 51,
    "size": "M"
  }, {
    "sku": "2006",
    "category": "Accessoarer & s\u00e4ngkl\u00e4der",
    "cod_cost": 100,
    "description": "Stor necess\u00e4r med blixtl\u00e5s med m\u00e5tten 18 cm p\u00e5 h\u00f6jden, 25 cm p\u00e5 l\u00e4ngden och 11 cm djup i botten. Tv\u00e5 fickor inuti.",
    "img": "/media/uploads/untitled-222.jpg",
    "color": "Svart Vit",
    "quality": "Silkestrik\u00e5",
    "price": 445,
    "pattern_id": 20,
    "color_id": 7,
    "pattern": "Wicky Leeks",
    "pk": 509,
    "article": "Stor necess\u00e4r",
    "type": "Accessoarer & lakan",
    "id": 28,
    "size": "M"
  }, {
    "sku": "2005",
    "category": "Accessoarer & s\u00e4ngkl\u00e4der",
    "cod_cost": 100,
    "description": "Liten necess\u00e4r med blixtl\u00e5s och tv\u00e5 fickor inuti. M\u00e5tt 11 cm p\u00e5 h\u00f6jden, 18 cm p\u00e5 l\u00e4ngden och 8 cm p\u00e5 djupet i botten.",
    "img": "/media/uploads/333.jpg",
    "color": "Svart Vit",
    "quality": "Silkestrik\u00e5",
    "price": 395,
    "pattern_id": 5,
    "color_id": 7,
    "pattern": "K\u00e4rna",
    "pk": 243,
    "article": "Liten necess\u00e4r",
    "type": "Accessoarer & lakan",
    "id": 29,
    "size": "M"
  }, {
    "sku": "3",
    "category": "Metervara",
    "cod_cost": 160,
    "description": "Tyg i silkestrik\u00e5 i 150 cm bredd. S\u00e4ljs per meter.",
    "img": "/media/uploads/tyg_metervara/metervara.jpg",
    "color": "Orange Aprikos",
    "quality": "Silkestrik\u00e5",
    "price": 350,
    "pattern_id": 4,
    "color_id": 17,
    "pattern": "Pyramid",
    "pk": 344,
    "article": "Tyg, Silkestrik\u00e5",
    "type": "Metervara",
    "id": 51,
    "size": "M"
  }, {
    "sku": "2001",
    "category": "Accessoarer & s\u00e4ngkl\u00e4der",
    "cod_cost": 100,
    "description": "Mjuk halsduk sydd i dubbelt tyg, 160 cm l\u00e5ng och 19 cm bred.",
    "img": "/media/uploads/untitled-2-copy-3__432387843.jpg",
    "color": "Svart Vit",
    "quality": "Silkestrik\u00e5",
    "price": 350,
    "pattern_id": 20,
    "color_id": 7,
    "pattern": "Wicky Leeks",
    "pk": 508,
    "article": "Halsduk",
    "type": "Accessoarer & lakan",
    "id": 26,
    "size": "M"
  }, {
    "sku": "8807",
    "category": "Barn",
    "cod_cost": 160,
    "description": "Overall med dragkedja, finns i storlekarna 60, 70, och 80 cl.\r\n            \r\n",
    "img": "/media/uploads/overall.jpg",
    "color": "Guldnougat",
    "quality": "Silkestrik\u00e5-baby",
    "price": 450,
    "pattern_id": 14,
    "color_id": 10,
    "pattern": "Tre rand",
    "pk": 843,
    "article": " Baby Overall ",
    "type": "Barn",
    "id": 45,
    "size": "M"
  }, {
    "sku": "8807",
    "category": "Barn",
    "cod_cost": 160,
    "description": "Overall med dragkedja, finns i storlekarna 60, 70, och 80 cl.\r\n            \r\n",
    "img": "/media/uploads/baby.jpg",
    "color": "\u00c4rtgr\u00f6n",
    "quality": "Silkestrik\u00e5-baby",
    "price": 450,
    "pattern_id": 5,
    "color_id": 37,
    "pattern": "K\u00e4rna",
    "pk": 1216,
    "article": " Baby Overall ",
    "type": "Barn",
    "id": 45,
    "size": "M"
  }],
  "assessories": [],
  "single": [{
    "category": "Kvinna",
    "description": "Linne",
    "color": "...",
    "price": "...",
    "article": "...",
    "quality": "Silkestrik\u00e5",
    "id": 8,
    "sku": "...",
    "cod_cost": "...",
    "img": "...",
    "pattern": "...",
    "type": "Tr\u00f6jor och linnen"
  }],
  "products": [{
    "category": "Man",
    "description": "Rak herrbyxa i manchester med fickor i sidan och tv\u00e5 fickor bak. ",
    "color": "Svart herrbyxa",
    "price": 1350,
    "article": "Manchester Herrbyxa ",
    "quality": "Manchester herrbyxa",
    "id": 47,
    "size": "3840",
    "sku": "712",
    "cod_cost": 160,
    "pattern": "enf\u00e4rgad manchester",
    "pattern_id": 52,
    "color_id": 72,
    "pk": 1677,
    "type": "Herr"
  }, {
    "category": "Man",
    "description": "Rak herrbyxa i manchester med fickor i sidan och tv\u00e5 fickor bak. ",
    "color": "Plommon Herrbyxa",
    "price": 1350,
    "article": "Manchester Herrbyxa ",
    "quality": "Manchester herrbyxa",
    "id": 47,
    "size": "3840",
    "sku": "712",
    "cod_cost": 160,
    "pattern": "enf\u00e4rgad manchester",
    "pattern_id": 52,
    "color_id": 75,
    "pk": 895,
    "type": "Herr"
  }, {
    "category": "Man",
    "description": "Rak herrbyxa i manchester med fickor i sidan och tv\u00e5 fickor bak. ",
    "color": "Kanelbrun herrbyxa",
    "price": 1350,
    "article": "Manchester Herrbyxa ",
    "quality": "Manchester herrbyxa",
    "id": 47,
    "size": "3840",
    "sku": "712",
    "cod_cost": 160,
    "pattern": "enf\u00e4rgad manchester",
    "pattern_id": 52,
    "color_id": 68,
    "pk": 1685,
    "type": "Herr"
  }, {
    "category": "Man",
    "description": "Kn\u00e4ppt manchesterjacka med fyra utanp\u00e5fickor, tv\u00e5 innerfickor, st\u00e5krage och foder av silkestrik\u00e5. Finns i f\u00e4rgerna M\u00f6rkbl\u00e5tt, Svart, Kanel, Mossgr\u00f6nt och Plommon.",
    "color": "Midnattsbl\u00e5 herrjacka",
    "price": 2650,
    "article": "Manchester Herrjacka med knappar ",
    "quality": "Manchester herrjacka",
    "id": 39,
    "size": "3840",
    "sku": "101",
    "cod_cost": 160,
    "pattern": "Enf\u00e4rgad manchester",
    "pattern_id": 50,
    "color_id": 61,
    "pk": 1656,
    "type": "Herr"
  }, {
    "category": "Man",
    "description": "Kn\u00e4ppt manchesterjacka med fyra utanp\u00e5fickor, tv\u00e5 innerfickor, st\u00e5krage och foder av silkestrik\u00e5. Finns i f\u00e4rgerna M\u00f6rkbl\u00e5tt, Svart, Kanel, Mossgr\u00f6nt och Plommon.",
    "color": "Plommon herrjacka",
    "price": 2650,
    "article": "Manchester Herrjacka med knappar ",
    "quality": "Manchester herrjacka",
    "id": 39,
    "size": "3840",
    "sku": "101",
    "cod_cost": 160,
    "pattern": "Enf\u00e4rgad manchester",
    "pattern_id": 50,
    "color_id": 59,
    "pk": 901,
    "type": "Herr"
  }, {
    "category": "Man",
    "description": "Rak herrbyxa i manchester med fickor i sidan och tv\u00e5 fickor bak. ",
    "color": "Midnattsbl\u00e5 herrbyxa",
    "price": 1350,
    "article": "Manchester Herrbyxa ",
    "quality": "Manchester herrbyxa",
    "id": 47,
    "size": "3840",
    "sku": "712",
    "cod_cost": 160,
    "pattern": "enf\u00e4rgad manchester",
    "pattern_id": 52,
    "color_id": 69,
    "pk": 1691,
    "type": "Herr"
  }, {
    "category": "Man",
    "description": "Kn\u00e4ppt manchesterjacka med fyra utanp\u00e5fickor, tv\u00e5 innerfickor, st\u00e5krage och foder av silkestrik\u00e5. Finns i f\u00e4rgerna M\u00f6rkbl\u00e5tt, Svart, Kanel, Mossgr\u00f6nt och Plommon.",
    "color": "Kanelbrun herrjacka",
    "price": 2650,
    "article": "Manchester Herrjacka med knappar ",
    "quality": "Manchester herrjacka",
    "id": 39,
    "size": "3840",
    "sku": "101",
    "cod_cost": 160,
    "pattern": "Enf\u00e4rgad manchester",
    "pattern_id": 50,
    "color_id": 60,
    "pk": 1668,
    "type": "Herr"
  }, {
    "category": "Man",
    "description": "Kn\u00e4ppt manchesterjacka med fyra utanp\u00e5fickor, tv\u00e5 innerfickor, st\u00e5krage och foder av silkestrik\u00e5. Finns i f\u00e4rgerna M\u00f6rkbl\u00e5tt, Svart, Kanel, Mossgr\u00f6nt och Plommon.",
    "color": "Svart herrjacka",
    "price": 2650,
    "article": "Manchester Herrjacka med knappar ",
    "quality": "Manchester herrjacka",
    "id": 39,
    "size": "3840",
    "sku": "101",
    "cod_cost": 160,
    "pattern": "Enf\u00e4rgad manchester",
    "pattern_id": 50,
    "color_id": 58,
    "pk": 1662,
    "type": "Herr"
  }, {
    "category": "Man",
    "description": "Kn\u00e4ppt manchesterjacka med fyra utanp\u00e5fickor, tv\u00e5 innerfickor, st\u00e5krage och foder av silkestrik\u00e5. Finns i f\u00e4rgerna M\u00f6rkbl\u00e5tt, Svart, Kanel, Mossgr\u00f6nt och Plommon.",
    "color": "Mossgr\u00f6n herrjacka",
    "price": 2650,
    "article": "Manchester Herrjacka med knappar ",
    "quality": "Manchester herrjacka",
    "id": 39,
    "size": "3840",
    "sku": "101",
    "cod_cost": 160,
    "pattern": "Enf\u00e4rgad manchester",
    "pattern_id": 50,
    "color_id": 56,
    "pk": 912,
    "type": "Herr"
  }, {
    "category": "Man",
    "description": "Rak herrbyxa i manchester med fickor i sidan och tv\u00e5 fickor bak. ",
    "color": "Mossgr\u00f6n Herrbyxa",
    "price": 1350,
    "article": "Manchester Herrbyxa ",
    "quality": "Manchester herrbyxa",
    "id": 47,
    "size": "3840",
    "sku": "712",
    "cod_cost": 160,
    "pattern": "enf\u00e4rgad manchester",
    "pattern_id": 52,
    "color_id": 74,
    "pk": 917,
    "type": "Herr"
  }, {
    "category": "Kvinna",
    "description": "L\u00e5ng\u00e4rmad tr\u00f6ja med rund ringning.",
    "color": "Lavendelgr\u00e5",
    "price": 1050,
    "article": "L\u00e5ng\u00e4rmad tr\u00f6ja",
    "quality": "Silkestrik\u00e5",
    "id": 76,
    "size": "3840",
    "sku": "1510",
    "cod_cost": 150,
    "pattern": "F\u00e5gel",
    "pattern_id": 9,
    "color_id": 21,
    "pk": 2163,
    "type": "Tr\u00f6jor och linnen"
  }, {
    "category": "Kvinna",
    "description": "L\u00e5ng\u00e4rmad tr\u00f6ja med rund ringning.",
    "color": "M\u00f6rk viol",
    "price": 1050,
    "article": "L\u00e5ng\u00e4rmad tr\u00f6ja",
    "quality": "Silkestrik\u00e5",
    "id": 76,
    "size": "3840",
    "sku": "1510",
    "cod_cost": 150,
    "pattern": "Labyrint",
    "pattern_id": 12,
    "color_id": 49,
    "pk": 2175,
    "type": "Tr\u00f6jor och linnen"
  }, {
    "category": "Kvinna",
    "description": "L\u00e5ng\u00e4rmad tr\u00f6ja med rund ringning.",
    "color": "M\u00f6rk Indigo",
    "price": 1050,
    "article": "L\u00e5ng\u00e4rmad tr\u00f6ja",
    "quality": "Silkestrik\u00e5",
    "id": 76,
    "size": "3840",
    "sku": "1510",
    "cod_cost": 150,
    "pattern": "Ljung",
    "pattern_id": 16,
    "color_id": 6,
    "pk": 2169,
    "type": "Tr\u00f6jor och linnen"
  }, {
    "category": "Kvinna",
    "description": "L\u00e5ng\u00e4rmad tr\u00f6ja med rund ringning.",
    "color": "Nyponr\u00f6d",
    "price": 1050,
    "article": "L\u00e5ng\u00e4rmad tr\u00f6ja",
    "quality": "Silkestrik\u00e5",
    "id": 76,
    "size": "3840",
    "sku": "1510",
    "cod_cost": 150,
    "pattern": "Wicky Leeks",
    "pattern_id": 20,
    "color_id": 32,
    "pk": 2151,
    "type": "Tr\u00f6jor och linnen"
  }, {
    "category": "Kvinna",
    "description": "L\u00e5ng\u00e4rmad tr\u00f6ja med rund ringning.",
    "color": "Nyponr\u00f6d",
    "price": 1050,
    "article": "L\u00e5ng\u00e4rmad tr\u00f6ja",
    "quality": "Silkestrik\u00e5",
    "id": 76,
    "size": "3840",
    "sku": "1510",
    "cod_cost": 150,
    "pattern": "Stor Blomma",
    "pattern_id": 23,
    "color_id": 32,
    "pk": 2157,
    "type": "Tr\u00f6jor och linnen"
  }, {
    "category": "Kvinna",
    "description": "Trekantig sjal i mjukaste moll med tryck i m\u00f6nstret Varma Backen eller Bred Rand. 100 % bomull.  Onesize m\u00e5tt: L\u00e5ngsida 240 cm kortsidor 144 cm.",
    "color": "Rostig Orange - Svart",
    "price": 425,
    "article": "NY! Trekants-sjal i bomull",
    "quality": "Molltyg",
    "id": 89,
    "size": "3840",
    "sku": "1717",
    "cod_cost": 100,
    "pattern": "Stor Varma Backen i molltyg",
    "pattern_id": 38,
    "color_id": 55,
    "pk": 2203,
    "type": "Tr\u00f6jor och linnen"
  }, {
    "category": "Kvinna",
    "description": "Trekantig sjal i mjukaste moll med tryck i m\u00f6nstret Varma Backen eller Bred Rand. 100 % bomull.  Onesize m\u00e5tt: L\u00e5ngsida 240 cm kortsidor 144 cm.",
    "color": "Svart - Vit",
    "price": 425,
    "article": "NY! Trekants-sjal i bomull",
    "quality": "Molltyg",
    "id": 89,
    "size": "3840",
    "sku": "1717",
    "cod_cost": 100,
    "pattern": "Stor Varma Backen i molltyg",
    "pattern_id": 38,
    "color_id": 53,
    "pk": 2206,
    "type": "Tr\u00f6jor och linnen"
  }, {
    "category": "Kvinna",
    "description": "Trekantig sjal i mjukaste moll med tryck i m\u00f6nstret Varma Backen eller Bred Rand. 100 % bomull.  Onesize m\u00e5tt: L\u00e5ngsida 240 cm kortsidor 144 cm.",
    "color": "Ljus Violett - Svart",
    "price": 425,
    "article": "NY! Trekants-sjal i bomull",
    "quality": "Molltyg",
    "id": 89,
    "size": "3840",
    "sku": "1717",
    "cod_cost": 100,
    "pattern": "Stor Varma Backen i molltyg",
    "pattern_id": 38,
    "color_id": 52,
    "pk": 2204,
    "type": "Tr\u00f6jor och linnen"
  }, {
    "category": "Kvinna",
    "description": "Trekantig sjal i mjukaste moll med tryck i m\u00f6nstret Varma Backen eller Bred Rand. 100 % bomull.  Onesize m\u00e5tt: L\u00e5ngsida 240 cm kortsidor 144 cm.",
    "color": "Ljus Orange - Svart",
    "price": 425,
    "article": "NY! Trekants-sjal i bomull",
    "quality": "Molltyg",
    "id": 89,
    "size": "3840",
    "sku": "1717",
    "cod_cost": 100,
    "pattern": "Randigt molltyg",
    "pattern_id": 37,
    "color_id": 51,
    "pk": 2207,
    "type": "Tr\u00f6jor och linnen"
  }, {
    "category": "Kvinna",
    "description": "Trekantig sjal i mjukaste moll med tryck i m\u00f6nstret Varma Backen eller Bred Rand. 100 % bomull.  Onesize m\u00e5tt: L\u00e5ngsida 240 cm kortsidor 144 cm.",
    "color": "Ljus Violett - Svart",
    "price": 425,
    "article": "NY! Trekants-sjal i bomull",
    "quality": "Molltyg",
    "id": 89,
    "size": "3840",
    "sku": "1717",
    "cod_cost": 100,
    "pattern": "Randigt molltyg",
    "pattern_id": 37,
    "color_id": 52,
    "pk": 2208,
    "type": "Tr\u00f6jor och linnen"
  }, {
    "category": "Kvinna",
    "description": "Trekantig sjal i mjukaste moll med tryck i m\u00f6nstret Varma Backen eller Bred Rand. 100 % bomull.  Onesize m\u00e5tt: L\u00e5ngsida 240 cm kortsidor 144 cm.",
    "color": "Intensiv Havsbl\u00e5 - Svart",
    "price": 425,
    "article": "NY! Trekants-sjal i bomull",
    "quality": "Molltyg",
    "id": 89,
    "size": "3840",
    "sku": "1717",
    "cod_cost": 100,
    "pattern": "Stor Varma Backen i molltyg",
    "pattern_id": 38,
    "color_id": 54,
    "pk": 2205,
    "type": "Tr\u00f6jor och linnen"
  }, {
    "category": "Kvinna",
    "description": "Vid jacka med fickor i sidorna. Extra rymlig passform med knappar hela v\u00e4gen fram.\r\n\r\n",
    "color": "M\u00f6rk Indigo",
    "price": 1975,
    "article": "Vid jacka",
    "quality": "Silkestrik\u00e5",
    "id": 7,
    "size": "3840",
    "sku": "9813",
    "cod_cost": 200,
    "pattern": "B\u00f6na",
    "pattern_id": 10,
    "color_id": 6,
    "pk": 2077,
    "type": "Jackor"
  }, {
    "category": "Kvinna",
    "description": "Vid jacka med fickor i sidorna. Extra rymlig passform med knappar hela v\u00e4gen fram.\r\n\r\n",
    "color": "M\u00f6rk Indigo",
    "price": 1975,
    "article": "Vid jacka",
    "quality": "Silkestrik\u00e5",
    "id": 7,
    "size": "3840",
    "sku": "9813",
    "cod_cost": 200,
    "pattern": "Ljung",
    "pattern_id": 16,
    "color_id": 6,
    "pk": 2083,
    "type": "Jackor"
  }, {
    "category": "Kvinna",
    "description": "Vid jacka med fickor i sidorna. Extra rymlig passform med knappar hela v\u00e4gen fram.\r\n\r\n",
    "color": "Lavendelgr\u00e5",
    "price": 1975,
    "article": "Vid jacka",
    "quality": "Silkestrik\u00e5",
    "id": 7,
    "size": "3840",
    "sku": "9813",
    "cod_cost": 200,
    "pattern": "Wicky Leeks",
    "pattern_id": 20,
    "color_id": 21,
    "pk": 2099,
    "type": "Jackor"
  }, {
    "category": "Kvinna",
    "description": "Vid jacka med fickor i sidorna. Extra rymlig passform med knappar hela v\u00e4gen fram.\r\n\r\n",
    "color": "Nyponr\u00f6d",
    "price": 1975,
    "article": "Vid jacka",
    "quality": "Silkestrik\u00e5",
    "id": 7,
    "size": "3840",
    "sku": "9813",
    "cod_cost": 200,
    "pattern": "Stor Blomma",
    "pattern_id": 23,
    "color_id": 32,
    "pk": 2089,
    "type": "Jackor"
  }, {
    "category": "Kvinna",
    "description": "Vid jacka med fickor i sidorna. Extra rymlig passform med knappar hela v\u00e4gen fram.\r\n\r\n",
    "color": "M\u00f6rk viol",
    "price": 1975,
    "article": "Vid jacka",
    "quality": "Silkestrik\u00e5",
    "id": 7,
    "size": "3840",
    "sku": "9813",
    "cod_cost": 200,
    "pattern": "Wicky Leeks",
    "pattern_id": 20,
    "color_id": 49,
    "pk": 2095,
    "type": "Jackor"
  }, {
    "category": "Kvinna",
    "description": "Ny kl\u00e4nningsmodell! Enkel kl\u00e4nning med holk\u00e4rm, b\u00e5tringad hals och avvikande m\u00f6nster i fickan. Kjolen \u00e4r n\u00e5got klockad och slutar p\u00e5 eller strax under kn\u00e4t. \r\n\r\n\r\n",
    "color": "Nyponr\u00f6d",
    "price": 1575,
    "article": "Fickkl\u00e4nning",
    "quality": "Silkestrik\u00e5",
    "id": 68,
    "size": "3840",
    "sku": "1401",
    "cod_cost": 150,
    "pattern": "Ljung",
    "pattern_id": 16,
    "color_id": 32,
    "pk": 2211,
    "type": "Kl\u00e4nning"
  }, {
    "category": "Kvinna",
    "description": "Ny kl\u00e4nningsmodell! Enkel kl\u00e4nning med holk\u00e4rm, b\u00e5tringad hals och avvikande m\u00f6nster i fickan. Kjolen \u00e4r n\u00e5got klockad och slutar p\u00e5 eller strax under kn\u00e4t. \r\n\r\n\r\n",
    "color": "Nyponr\u00f6d",
    "price": 1575,
    "article": "Fickkl\u00e4nning",
    "quality": "Silkestrik\u00e5",
    "id": 68,
    "size": "3840",
    "sku": "1401",
    "cod_cost": 150,
    "pattern": "B\u00f6na",
    "pattern_id": 10,
    "color_id": 32,
    "pk": 2217,
    "type": "Kl\u00e4nning"
  }, {
    "category": "Kvinna",
    "description": "Ny kl\u00e4nningsmodell! Enkel kl\u00e4nning med holk\u00e4rm, b\u00e5tringad hals och avvikande m\u00f6nster i fickan. Kjolen \u00e4r n\u00e5got klockad och slutar p\u00e5 eller strax under kn\u00e4t. \r\n\r\n\r\n",
    "color": "M\u00f6rk Indigo",
    "price": 1575,
    "article": "Fickkl\u00e4nning",
    "quality": "Silkestrik\u00e5",
    "id": 68,
    "size": "3840",
    "sku": "1401",
    "cod_cost": 150,
    "pattern": "Ljung",
    "pattern_id": 16,
    "color_id": 6,
    "pk": 2223,
    "type": "Kl\u00e4nning"
  }, {
    "category": "Kvinna",
    "description": "Ny kl\u00e4nningsmodell! Enkel kl\u00e4nning med holk\u00e4rm, b\u00e5tringad hals och avvikande m\u00f6nster i fickan. Kjolen \u00e4r n\u00e5got klockad och slutar p\u00e5 eller strax under kn\u00e4t. \r\n\r\n\r\n",
    "color": "M\u00f6rk viol",
    "price": 1575,
    "article": "Fickkl\u00e4nning",
    "quality": "Silkestrik\u00e5",
    "id": 68,
    "size": "3840",
    "sku": "1401",
    "cod_cost": 150,
    "pattern": "Wicky Leeks",
    "pattern_id": 20,
    "color_id": 49,
    "pk": 2229,
    "type": "Kl\u00e4nning"
  }, {
    "category": "Kvinna",
    "description": "Ny kl\u00e4nning med rund hals och sprund i nacken som kn\u00e4pps med liten knapp. Anv\u00e4nds med eller utan medf\u00f6ljande sk\u00e4rp.",
    "color": "M\u00f6rk viol",
    "price": 1775,
    "article": "NY! Festkl\u00e4nning",
    "quality": "Silkestrik\u00e5",
    "id": 84,
    "size": "3840",
    "sku": "1711",
    "cod_cost": 150,
    "pattern": "Fj\u00e4der",
    "pattern_id": 3,
    "color_id": 49,
    "pk": 2030,
    "type": "Kl\u00e4nning"
  }, {
    "category": "Kvinna",
    "description": "Ny kl\u00e4nning med rund hals och sprund i nacken som kn\u00e4pps med liten knapp. Anv\u00e4nds med eller utan medf\u00f6ljande sk\u00e4rp.",
    "color": "Nyponr\u00f6d",
    "price": 1775,
    "article": "NY! Festkl\u00e4nning",
    "quality": "Silkestrik\u00e5",
    "id": 84,
    "size": "3840",
    "sku": "1711",
    "cod_cost": 150,
    "pattern": "Ljung",
    "pattern_id": 16,
    "color_id": 32,
    "pk": 2048,
    "type": "Kl\u00e4nning"
  }, {
    "category": "Kvinna",
    "description": "Ny kl\u00e4nning med rund hals och sprund i nacken som kn\u00e4pps med liten knapp. Anv\u00e4nds med eller utan medf\u00f6ljande sk\u00e4rp.",
    "color": "M\u00f6rk Indigo",
    "price": 1775,
    "article": "NY! Festkl\u00e4nning",
    "quality": "Silkestrik\u00e5",
    "id": 84,
    "size": "3840",
    "sku": "1711",
    "cod_cost": 150,
    "pattern": "Wicky Leeks",
    "pattern_id": 20,
    "color_id": 6,
    "pk": 2042,
    "type": "Kl\u00e4nning"
  }, {
    "category": "Kvinna",
    "description": "Ny kl\u00e4nning med rund hals och sprund i nacken som kn\u00e4pps med liten knapp. Anv\u00e4nds med eller utan medf\u00f6ljande sk\u00e4rp.",
    "color": "M\u00f6rk viol",
    "price": 1775,
    "article": "NY! Festkl\u00e4nning",
    "quality": "Silkestrik\u00e5",
    "id": 84,
    "size": "3840",
    "sku": "1711",
    "cod_cost": 150,
    "pattern": "B\u00f6na",
    "pattern_id": 10,
    "color_id": 49,
    "pk": 2036,
    "type": "Kl\u00e4nning"
  }, {
    "category": "Kvinna",
    "description": "Blus med murarkrage och kn\u00e4ppning.",
    "color": "M\u00f6rk Indigo",
    "price": 1375,
    "article": "NY! Blus",
    "quality": "Silkestrik\u00e5",
    "id": 85,
    "size": "3840",
    "sku": "1710",
    "cod_cost": 150,
    "pattern": "Ljung",
    "pattern_id": 16,
    "color_id": 6,
    "pk": 1982,
    "type": "Tr\u00f6jor och linnen"
  }, {
    "category": "Kvinna",
    "description": "Blus med murarkrage och kn\u00e4ppning.",
    "color": "Lavendelgr\u00e5",
    "price": 1375,
    "article": "NY! Blus",
    "quality": "Silkestrik\u00e5",
    "id": 85,
    "size": "3840",
    "sku": "1710",
    "cod_cost": 150,
    "pattern": "Wicky Leeks",
    "pattern_id": 20,
    "color_id": 21,
    "pk": 1970,
    "type": "Tr\u00f6jor och linnen"
  }, {
    "category": "Kvinna",
    "description": "Blus med murarkrage och kn\u00e4ppning.",
    "color": "M\u00f6rk viol",
    "price": 1375,
    "article": "NY! Blus",
    "quality": "Silkestrik\u00e5",
    "id": 85,
    "size": "3840",
    "sku": "1710",
    "cod_cost": 150,
    "pattern": "Ljung",
    "pattern_id": 16,
    "color_id": 49,
    "pk": 1988,
    "type": "Tr\u00f6jor och linnen"
  }, {
    "category": "Kvinna",
    "description": "Blus med murarkrage och kn\u00e4ppning.",
    "color": "Nyponr\u00f6d",
    "price": 1375,
    "article": "NY! Blus",
    "quality": "Silkestrik\u00e5",
    "id": 85,
    "size": "3840",
    "sku": "1710",
    "cod_cost": 150,
    "pattern": "Wicky Leeks",
    "pattern_id": 20,
    "color_id": 32,
    "pk": 1976,
    "type": "Tr\u00f6jor och linnen"
  }, {
    "category": "Kvinna",
    "description": "V\u00e4ndbar jacka med blixtl\u00e5s och liten st\u00e5krage. Jackan har olika m\u00f6nster men i samma f\u00e4rgst\u00e4llning p\u00e5 insida och utsida. Fungerar lika bra som kofta, kavaj eller tunn jacka. ",
    "color": "M\u00f6rk viol",
    "price": 2075,
    "article": "V\u00e4ndbar blixtl\u00e5sjacka",
    "quality": "Silkestrik\u00e5",
    "id": 12,
    "size": "3840",
    "sku": "9805",
    "cod_cost": 200,
    "pattern": "B\u00f6na & F\u00e5gel",
    "pattern_id": 33,
    "color_id": 49,
    "pk": 2060,
    "type": "Jackor"
  }, {
    "category": "Kvinna",
    "description": "V\u00e4ndbar jacka med blixtl\u00e5s och liten st\u00e5krage. Jackan har olika m\u00f6nster men i samma f\u00e4rgst\u00e4llning p\u00e5 insida och utsida. Fungerar lika bra som kofta, kavaj eller tunn jacka. ",
    "color": "Nyponr\u00f6d",
    "price": 2075,
    "article": "V\u00e4ndbar blixtl\u00e5sjacka",
    "quality": "Silkestrik\u00e5",
    "id": 12,
    "size": "3840",
    "sku": "9805",
    "cod_cost": 200,
    "pattern": "Ljung & Labyrint",
    "pattern_id": 34,
    "color_id": 32,
    "pk": 2072,
    "type": "Jackor"
  }, {
    "category": "Kvinna",
    "description": "V\u00e4ndbar jacka med blixtl\u00e5s och liten st\u00e5krage. Jackan har olika m\u00f6nster men i samma f\u00e4rgst\u00e4llning p\u00e5 insida och utsida. Fungerar lika bra som kofta, kavaj eller tunn jacka. ",
    "color": "M\u00f6rk Indigo",
    "price": 2075,
    "article": "V\u00e4ndbar blixtl\u00e5sjacka",
    "quality": "Silkestrik\u00e5",
    "id": 12,
    "size": "3840",
    "sku": "9805",
    "cod_cost": 200,
    "pattern": "Twin Peaks & Wicky Leeks",
    "pattern_id": 35,
    "color_id": 6,
    "pk": 2054,
    "type": "Jackor"
  }, {
    "category": "Kvinna",
    "description": "V\u00e4ndbar jacka med blixtl\u00e5s och liten st\u00e5krage. Jackan har olika m\u00f6nster men i samma f\u00e4rgst\u00e4llning p\u00e5 insida och utsida. Fungerar lika bra som kofta, kavaj eller tunn jacka. ",
    "color": "Lavendelgr\u00e5",
    "price": 2075,
    "article": "V\u00e4ndbar blixtl\u00e5sjacka",
    "quality": "Silkestrik\u00e5",
    "id": 12,
    "size": "3840",
    "sku": "9805",
    "cod_cost": 200,
    "pattern": "Enf\u00e4rgat & Ljung",
    "pattern_id": 36,
    "color_id": 21,
    "pk": 2066,
    "type": "Jackor"
  }, {
    "category": "Kvinna",
    "description": "En vid l\u00e5ng v-ringad tunika.",
    "color": "Lavendelgr\u00e5",
    "price": 1350,
    "article": "NY! Vid tunika",
    "quality": "Silkestrik\u00e5",
    "id": 88,
    "size": "3840",
    "sku": "1709",
    "cod_cost": 150,
    "pattern": "Twin Peaks",
    "pattern_id": 1,
    "color_id": 21,
    "pk": 2194,
    "type": "Tr\u00f6jor och linnen"
  }, {
    "category": "Kvinna",
    "description": "En vid l\u00e5ng v-ringad tunika.",
    "color": "M\u00f6rk viol",
    "price": 1350,
    "article": "NY! Vid tunika",
    "quality": "Silkestrik\u00e5",
    "id": 88,
    "size": "3840",
    "sku": "1709",
    "cod_cost": 150,
    "pattern": "Fj\u00e4der",
    "pattern_id": 3,
    "color_id": 49,
    "pk": 2182,
    "type": "Tr\u00f6jor och linnen"
  }, {
    "category": "Kvinna",
    "description": "En vid l\u00e5ng v-ringad tunika.",
    "color": "M\u00f6rk Indigo",
    "price": 1350,
    "article": "NY! Vid tunika",
    "quality": "Silkestrik\u00e5",
    "id": 88,
    "size": "3840",
    "sku": "1709",
    "cod_cost": 150,
    "pattern": "B\u00f6na",
    "pattern_id": 10,
    "color_id": 6,
    "pk": 2188,
    "type": "Tr\u00f6jor och linnen"
  }, {
    "category": "Kvinna",
    "description": "En vid l\u00e5ng v-ringad tunika.",
    "color": "Nyponr\u00f6d",
    "price": 1350,
    "article": "NY! Vid tunika",
    "quality": "Silkestrik\u00e5",
    "id": 88,
    "size": "3840",
    "sku": "1709",
    "cod_cost": 150,
    "pattern": "Ljung",
    "pattern_id": 16,
    "color_id": 32,
    "pk": 2200,
    "type": "Tr\u00f6jor och linnen"
  }, {
    "category": "Kvinna",
    "description": "Kjol med fickor och bred linning.",
    "color": "M\u00f6rk Indigo",
    "price": 1275,
    "article": "NY! Fickkjol",
    "quality": "Silkestrik\u00e5",
    "id": 87,
    "size": "3840",
    "sku": "1712",
    "cod_cost": 150,
    "pattern": "Ljung",
    "pattern_id": 16,
    "color_id": 6,
    "pk": 2018,
    "type": "Kjolar och byxor"
  }, {
    "category": "Kvinna",
    "description": "Kjol med fickor och bred linning.",
    "color": "Lavendelgr\u00e5",
    "price": 1275,
    "article": "NY! Fickkjol",
    "quality": "Silkestrik\u00e5",
    "id": 87,
    "size": "3840",
    "sku": "1712",
    "cod_cost": 150,
    "pattern": "Twin Peaks",
    "pattern_id": 1,
    "color_id": 21,
    "pk": 2024,
    "type": "Kjolar och byxor"
  }, {
    "category": "Kvinna",
    "description": "Kjol med fickor och bred linning.",
    "color": "Nyponr\u00f6d",
    "price": 1275,
    "article": "NY! Fickkjol",
    "quality": "Silkestrik\u00e5",
    "id": 87,
    "size": "3840",
    "sku": "1712",
    "cod_cost": 150,
    "pattern": "Wicky Leeks",
    "pattern_id": 20,
    "color_id": 32,
    "pk": 2012,
    "type": "Kjolar och byxor"
  }, {
    "category": "Kvinna",
    "description": "Linne",
    "color": "M\u00f6rk viol",
    "price": 750,
    "article": "Linne",
    "quality": "Silkestrik\u00e5",
    "id": 8,
    "size": "3840",
    "sku": "9801",
    "cod_cost": 100,
    "pattern": "F\u00e5gel",
    "pattern_id": 9,
    "color_id": 49,
    "pk": 2000,
    "type": "Tr\u00f6jor och linnen"
  }, {
    "category": "Kvinna",
    "description": "Smal l\u00e5ng byxa med res\u00e5r i midjan.",
    "color": "Lavendelgr\u00e5",
    "price": 1075,
    "article": "Smal l\u00e5ngbyxa",
    "quality": "Silkestrik\u00e5",
    "id": 30,
    "size": "3840",
    "sku": "9812",
    "cod_cost": 150,
    "pattern": "Twin Peaks",
    "pattern_id": 1,
    "color_id": 21,
    "pk": 1602,
    "type": "Kjolar och byxor"
  }, {
    "category": "Kvinna",
    "description": "Linne",
    "color": "Nyponr\u00f6d",
    "price": 750,
    "article": "Linne",
    "quality": "Silkestrik\u00e5",
    "id": 8,
    "size": "3840",
    "sku": "9801",
    "cod_cost": 100,
    "pattern": "Ljung",
    "pattern_id": 16,
    "color_id": 32,
    "pk": 1994,
    "type": "Tr\u00f6jor och linnen"
  }, {
    "category": "Kvinna",
    "description": "Linne",
    "color": "Lavendelgr\u00e5",
    "price": 750,
    "article": "Linne",
    "quality": "Silkestrik\u00e5",
    "id": 8,
    "size": "3840",
    "sku": "9801",
    "cod_cost": 100,
    "pattern": "Wicky Leeks",
    "pattern_id": 20,
    "color_id": 21,
    "pk": 2006,
    "type": "Tr\u00f6jor och linnen"
  }, {
    "category": "Kvinna",
    "description": "L\u00e5ng\u00e4rmad kort kl\u00e4nningstunika med liten u-ringning. Rymlig modell.",
    "color": "Svart Vit",
    "price": 1395,
    "article": "Kl\u00e4nningstunika",
    "quality": "Silkestrik\u00e5",
    "id": 18,
    "size": "3840",
    "sku": "201",
    "cod_cost": 150,
    "pattern": "Twin Peaks",
    "pattern_id": 1,
    "color_id": 7,
    "pk": 2133,
    "type": "Kl\u00e4nning"
  }, {
    "category": "Kvinna",
    "description": "L\u00e5ng\u00e4rmad kort kl\u00e4nningstunika med liten u-ringning. Rymlig modell.",
    "color": "M\u00f6rk Indigo",
    "price": 1395,
    "article": "Kl\u00e4nningstunika",
    "quality": "Silkestrik\u00e5",
    "id": 18,
    "size": "3840",
    "sku": "201",
    "cod_cost": 150,
    "pattern": "Ljung",
    "pattern_id": 16,
    "color_id": 6,
    "pk": 2145,
    "type": "Kl\u00e4nning"
  }, {
    "category": "Kvinna",
    "description": "L\u00e5ng\u00e4rmad kort kl\u00e4nningstunika med liten u-ringning. Rymlig modell.",
    "color": "Lavendelgr\u00e5",
    "price": 1395,
    "article": "Kl\u00e4nningstunika",
    "quality": "Silkestrik\u00e5",
    "id": 18,
    "size": "3840",
    "sku": "201",
    "cod_cost": 150,
    "pattern": "Twin Peaks",
    "pattern_id": 1,
    "color_id": 21,
    "pk": 2130,
    "type": "Kl\u00e4nning"
  }, {
    "category": "Kvinna",
    "description": "L\u00e5ng\u00e4rmad kort kl\u00e4nningstunika med liten u-ringning. Rymlig modell.",
    "color": "Nyponr\u00f6d",
    "price": 1395,
    "article": "Kl\u00e4nningstunika",
    "quality": "Silkestrik\u00e5",
    "id": 18,
    "size": "3840",
    "sku": "201",
    "cod_cost": 150,
    "pattern": "Wicky Leeks",
    "pattern_id": 20,
    "color_id": 32,
    "pk": 2139,
    "type": "Kl\u00e4nning"
  }, {
    "category": "Kvinna",
    "description": "Klassisk t-shirt med rymlig passform.",
    "color": "Nyponr\u00f6d",
    "price": 795,
    "article": "Stor t-shirt",
    "quality": "Silkestrik\u00e5",
    "id": 15,
    "size": "3840",
    "sku": "9820",
    "cod_cost": 100,
    "pattern": "Twin Peaks",
    "pattern_id": 1,
    "color_id": 32,
    "pk": 2108,
    "type": "Tr\u00f6jor och linnen"
  }, {
    "category": "Kvinna",
    "description": "Klassisk t-shirt med rymlig passform.",
    "color": "Nyponr\u00f6d",
    "price": 795,
    "article": "Stor t-shirt",
    "quality": "Silkestrik\u00e5",
    "id": 15,
    "size": "3840",
    "sku": "9820",
    "cod_cost": 100,
    "pattern": "Ljung",
    "pattern_id": 16,
    "color_id": 32,
    "pk": 2120,
    "type": "Tr\u00f6jor och linnen"
  }, {
    "category": "Kvinna",
    "description": "Klassisk t-shirt med rymlig passform.",
    "color": "M\u00f6rk viol",
    "price": 795,
    "article": "Stor t-shirt",
    "quality": "Silkestrik\u00e5",
    "id": 15,
    "size": "3840",
    "sku": "9820",
    "cod_cost": 100,
    "pattern": "B\u00f6na",
    "pattern_id": 10,
    "color_id": 49,
    "pk": 2114,
    "type": "Tr\u00f6jor och linnen"
  }, {
    "category": "Kvinna",
    "description": "Klassisk t-shirt med rymlig passform.",
    "color": "M\u00f6rk Indigo",
    "price": 795,
    "article": "Stor t-shirt",
    "quality": "Silkestrik\u00e5",
    "id": 15,
    "size": "3840",
    "sku": "9820",
    "cod_cost": 100,
    "pattern": "Wicky Leeks",
    "pattern_id": 20,
    "color_id": 6,
    "pk": 2126,
    "type": "Tr\u00f6jor och linnen"
  }, {
    "category": "Kvinna",
    "description": "Klassisk t-shirt med rymlig passform.",
    "color": "Lavendelgr\u00e5",
    "price": 795,
    "article": "Stor t-shirt",
    "quality": "Silkestrik\u00e5",
    "id": 15,
    "size": "3840",
    "sku": "9820",
    "cod_cost": 100,
    "pattern": "Wicky Leeks",
    "pattern_id": 20,
    "color_id": 21,
    "pk": 2102,
    "type": "Tr\u00f6jor och linnen"
  }, {
    "category": "Kvinna",
    "description": "Byxa i manchester med h\u00f6g midja, fickor i sids\u00f6mmen och raka ben. Inga fickor bak. ",
    "color": "Svart tjejbyxa ",
    "price": 1250,
    "article": "Manchester Dambyxa",
    "quality": "Manchester tjejbyxa",
    "id": 52,
    "size": "3840",
    "sku": "1308",
    "cod_cost": 0,
    "pattern": "enf\u00e4rgat",
    "pattern_id": 53,
    "color_id": 66,
    "pk": 2247,
    "type": "Kjolar och byxor"
  }, {
    "category": "Kvinna",
    "description": "Byxa i manchester med h\u00f6g midja, fickor i sids\u00f6mmen och raka ben. Inga fickor bak. ",
    "color": "Kanelbrun tjejbyxa",
    "price": 1250,
    "article": "Manchester Dambyxa",
    "quality": "Manchester tjejbyxa",
    "id": 52,
    "size": "3840",
    "sku": "1308",
    "cod_cost": 0,
    "pattern": "enf\u00e4rgat",
    "pattern_id": 53,
    "color_id": 67,
    "pk": 2235,
    "type": "Kjolar och byxor"
  }, {
    "category": "Kvinna",
    "description": "Byxa i manchester med h\u00f6g midja, fickor i sids\u00f6mmen och raka ben. Inga fickor bak. ",
    "color": "Midnattsbl\u00e5 tjejbyxa",
    "price": 1250,
    "article": "Manchester Dambyxa",
    "quality": "Manchester tjejbyxa",
    "id": 52,
    "size": "3840",
    "sku": "1308",
    "cod_cost": 0,
    "pattern": "enf\u00e4rgat",
    "pattern_id": 53,
    "color_id": 65,
    "pk": 2241,
    "type": "Kjolar och byxor"
  }, {
    "category": "Kvinna",
    "description": "Klassisk Mah-Jongjacka i manchester med blixtl\u00e5s och tv\u00e5 fickor fram. Tv\u00e5 innerfickor och muddar i hals och runt handled. Res\u00e5r i ryggen.",
    "color": "Midnattsbl\u00e5 jacka med vinr\u00f6da muddar",
    "price": 2125,
    "article": "Manchester Mah-Jongjacka ",
    "quality": "Mah-Jongjacka med mudd",
    "id": 48,
    "size": "3840",
    "sku": "503",
    "cod_cost": 160,
    "pattern": "enf\u00e4rgad manchester",
    "pattern_id": 51,
    "color_id": 91,
    "pk": 1856,
    "type": "Jackor"
  }, {
    "category": "Kvinna",
    "description": "Klassisk Mah-Jongjacka i manchester med blixtl\u00e5s och tv\u00e5 fickor fram. Tv\u00e5 innerfickor och muddar i hals och runt handled. Res\u00e5r i ryggen.",
    "color": "Kanelbrun jacka med vinr\u00f6da muddar",
    "price": 2125,
    "article": "Manchester Mah-Jongjacka ",
    "quality": "Mah-Jongjacka med mudd",
    "id": 48,
    "size": "3840",
    "sku": "503",
    "cod_cost": 160,
    "pattern": "enf\u00e4rgad manchester",
    "pattern_id": 51,
    "color_id": 93,
    "pk": 1838,
    "type": "Jackor"
  }, {
    "category": "Kvinna",
    "description": "Klassisk Mah-Jongjacka i manchester med blixtl\u00e5s och tv\u00e5 fickor fram. Tv\u00e5 innerfickor och muddar i hals och runt handled. Res\u00e5r i ryggen.",
    "color": "Kanelbrun jacka med svarta muddar",
    "price": 2125,
    "article": "Manchester Mah-Jongjacka ",
    "quality": "Mah-Jongjacka med mudd",
    "id": 48,
    "size": "3840",
    "sku": "503",
    "cod_cost": 160,
    "pattern": "enf\u00e4rgad manchester",
    "pattern_id": 51,
    "color_id": 95,
    "pk": 1844,
    "type": "Jackor"
  }, {
    "category": "Kvinna",
    "description": "Klassisk Mah-Jongjacka i manchester med blixtl\u00e5s och tv\u00e5 fickor fram. Tv\u00e5 innerfickor och muddar i hals och runt handled. Res\u00e5r i ryggen.",
    "color": "Midnattsbl\u00e5 jacka med bl\u00e5 muddar",
    "price": 2125,
    "article": "Manchester Mah-Jongjacka ",
    "quality": "Mah-Jongjacka med mudd",
    "id": 48,
    "size": "3840",
    "sku": "503",
    "cod_cost": 160,
    "pattern": "enf\u00e4rgad manchester",
    "pattern_id": 51,
    "color_id": 92,
    "pk": 1850,
    "type": "Jackor"
  }, {
    "category": "Kvinna",
    "description": "Klassisk Mah-Jongjacka i manchester med blixtl\u00e5s och tv\u00e5 fickor fram. Tv\u00e5 innerfickor och muddar i hals och runt handled. Res\u00e5r i ryggen.",
    "color": "Svart jacka med svarta muddar",
    "price": 2125,
    "article": "Manchester Mah-Jongjacka ",
    "quality": "Mah-Jongjacka med mudd",
    "id": 48,
    "size": "3840",
    "sku": "503",
    "cod_cost": 160,
    "pattern": "enf\u00e4rgad manchester",
    "pattern_id": 51,
    "color_id": 81,
    "pk": 1832,
    "type": "Jackor"
  }, {
    "category": "Man",
    "description": "Herrtr\u00f6ja i silke med halssl\u00e5 och kn\u00e4ppning.",
    "color": "Lavendelgr\u00e5",
    "price": 1395,
    "article": "Herrtr\u00f6ja i silke med halssl\u00e5 och knappar",
    "quality": "Silkestrik\u00e5",
    "id": 22,
    "size": "3840",
    "sku": "1012",
    "cod_cost": 150,
    "pattern": "Twin Peaks",
    "pattern_id": 1,
    "color_id": 21,
    "pk": 1916,
    "type": "Herr"
  }, {
    "category": "Man",
    "description": "Herrtr\u00f6ja i silke med halssl\u00e5 och kn\u00e4ppning.",
    "color": "Nyponr\u00f6d",
    "price": 1395,
    "article": "Herrtr\u00f6ja i silke med halssl\u00e5 och knappar",
    "quality": "Silkestrik\u00e5",
    "id": 22,
    "size": "3840",
    "sku": "1012",
    "cod_cost": 150,
    "pattern": "Labyrint",
    "pattern_id": 12,
    "color_id": 32,
    "pk": 1921,
    "type": "Herr"
  }, {
    "category": "Man",
    "description": "Herrtr\u00f6ja i silke med halssl\u00e5 och kn\u00e4ppning.",
    "color": "M\u00f6rk viol",
    "price": 1395,
    "article": "Herrtr\u00f6ja i silke med halssl\u00e5 och knappar",
    "quality": "Silkestrik\u00e5",
    "id": 22,
    "size": "3840",
    "sku": "1012",
    "cod_cost": 150,
    "pattern": "Fj\u00e4der",
    "pattern_id": 3,
    "color_id": 49,
    "pk": 1926,
    "type": "Herr"
  }, {
    "category": "Man",
    "description": "Herrtr\u00f6ja i silke med halssl\u00e5 och kn\u00e4ppning.",
    "color": "M\u00f6rk Indigo",
    "price": 1395,
    "article": "Herrtr\u00f6ja i silke med halssl\u00e5 och knappar",
    "quality": "Silkestrik\u00e5",
    "id": 22,
    "size": "3840",
    "sku": "1012",
    "cod_cost": 150,
    "pattern": "Stor Blomma",
    "pattern_id": 23,
    "color_id": 6,
    "pk": 1931,
    "type": "Herr"
  }, {
    "category": "Man",
    "description": "Herrtr\u00f6ja i silke med halssl\u00e5 och kn\u00e4ppning.",
    "color": "M\u00f6rk Indigo",
    "price": 1395,
    "article": "Herrtr\u00f6ja i silke med halssl\u00e5 och knappar",
    "quality": "Silkestrik\u00e5",
    "id": 22,
    "size": "3840",
    "sku": "1012",
    "cod_cost": 150,
    "pattern": "B\u00f6na",
    "pattern_id": 10,
    "color_id": 6,
    "pk": 1936,
    "type": "Herr"
  }, {
    "category": "Man",
    "description": "Herrtr\u00f6ja i silke med halssl\u00e5 och kn\u00e4ppning.",
    "color": "Svart Vit",
    "price": 1395,
    "article": "Herrtr\u00f6ja i silke med halssl\u00e5 och knappar",
    "quality": "Silkestrik\u00e5",
    "id": 22,
    "size": "3840",
    "sku": "1012",
    "cod_cost": 150,
    "pattern": "Ljung",
    "pattern_id": 16,
    "color_id": 7,
    "pk": 1941,
    "type": "Herr"
  }, {
    "category": "Man",
    "description": "L\u00e5ng\u00e4rmad tr\u00f6ja med rund hals.",
    "color": "Nyponr\u00f6d",
    "price": 1075,
    "article": "Herrtr\u00f6ja l\u00e5ng \u00e4rm",
    "quality": "Silkestrik\u00e5",
    "id": 83,
    "size": "3840",
    "sku": "514",
    "cod_cost": 150,
    "pattern": "Ljung",
    "pattern_id": 16,
    "color_id": 32,
    "pk": 1901,
    "type": "Herr"
  }, {
    "category": "Kvinna",
    "description": "Klassisk Mah-Jongjacka i manchester med blixtl\u00e5s och tv\u00e5 fickor fram. Tv\u00e5 innerfickor och muddar i hals och runt handled. Res\u00e5r i ryggen.",
    "color": "Mossgr\u00f6n Mah-Jongjacka",
    "price": 2125,
    "article": "Manchester Mah-Jongjacka ",
    "quality": "Mah-Jongjacka med mudd",
    "id": 48,
    "size": "3840",
    "sku": "503",
    "cod_cost": 160,
    "pattern": "enf\u00e4rgad manchester",
    "pattern_id": 51,
    "color_id": 77,
    "pk": 929,
    "type": "Jackor"
  }, {
    "category": "Man",
    "description": "L\u00e5ng\u00e4rmad tr\u00f6ja med rund hals.",
    "color": "M\u00f6rk Indigo",
    "price": 1075,
    "article": "Herrtr\u00f6ja l\u00e5ng \u00e4rm",
    "quality": "Silkestrik\u00e5",
    "id": 83,
    "size": "3840",
    "sku": "514",
    "cod_cost": 150,
    "pattern": "Bred Rand",
    "pattern_id": 22,
    "color_id": 6,
    "pk": 1906,
    "type": "Herr"
  }, {
    "category": "Man",
    "description": "L\u00e5ng\u00e4rmad tr\u00f6ja med rund hals.",
    "color": "M\u00f6rk Indigo",
    "price": 1075,
    "article": "Herrtr\u00f6ja l\u00e5ng \u00e4rm",
    "quality": "Silkestrik\u00e5",
    "id": 83,
    "size": "3840",
    "sku": "514",
    "cod_cost": 150,
    "pattern": "Twin Peaks",
    "pattern_id": 1,
    "color_id": 6,
    "pk": 1911,
    "type": "Herr"
  }],
        fullProductsFiltered: [],  
        articles: [{
    "sku": "2001",
    "category": "Accessoarer & s\u00e4ngkl\u00e4der",
    "cod_cost": 100,
    "description": "Mjuk halsduk sydd i dubbelt tyg, 160 cm l\u00e5ng och 19 cm bred.",
    "img": "/media/uploads/nya_teckningar_420_519_300/sjal_ny.jpg",
    "article": "Halsduk",
    "price": 350,
    "quality": "Silkestrik\u00e5",
    "type": "Accessoarer & lakan",
    "id": 26
  }, {
    "sku": "338",
    "category": "Accessoarer & s\u00e4ngkl\u00e4der",
    "cod_cost": 100,
    "description": "En liten enkel v\u00e4ska f\u00f6r de viktigaste sakerna. Storlek 20 cm x 20 cm. Med blixtl\u00e5s och axelrem.",
    "img": "/media/uploads/nya_teckningar_420_519_300/liten_vaska_ny.jpg",
    "article": "Liten v\u00e4ska",
    "price": 425,
    "quality": "Silkestrik\u00e5",
    "type": "Accessoarer & lakan",
    "id": 27
  }, {
    "sku": "2006",
    "category": "Accessoarer & s\u00e4ngkl\u00e4der",
    "cod_cost": 100,
    "description": "Stor necess\u00e4r med blixtl\u00e5s med m\u00e5tten 18 cm p\u00e5 h\u00f6jden, 25 cm p\u00e5 l\u00e4ngden och 11 cm djup i botten. Tv\u00e5 fickor inuti.",
    "img": "/media/uploads/nya_teckningar_420_519_300/stor_necessar_ny.jpg",
    "article": "Stor necess\u00e4r",
    "price": 445,
    "quality": "Silkestrik\u00e5",
    "type": "Accessoarer & lakan",
    "id": 28
  }, {
    "sku": "2005",
    "category": "Accessoarer & s\u00e4ngkl\u00e4der",
    "cod_cost": 100,
    "description": "Liten necess\u00e4r med blixtl\u00e5s och tv\u00e5 fickor inuti. M\u00e5tt 11 cm p\u00e5 h\u00f6jden, 18 cm p\u00e5 l\u00e4ngden och 8 cm p\u00e5 djupet i botten.",
    "img": "/media/uploads/nya_teckningar_420_519_300/liten_necessar_ny.jpg",
    "article": "Liten necess\u00e4r",
    "price": 395,
    "quality": "Silkestrik\u00e5",
    "type": "Accessoarer & lakan",
    "id": 29
  }, {
    "sku": "1340",
    "category": "Barn",
    "cod_cost": 160,
    "description": "L\u00e5ng\u00e4rmad tr\u00f6ja med rund halsringning, finns i storlekarna 90 cl - 150 cl.",
    "img": "/media/uploads/nya_teckningar_420_519_300/liten_barnttroja_ny.jpg",
    "article": "Barn L\u00e5ng\u00e4rmad tr\u00f6ja ",
    "price": 375,
    "quality": "Silkestrik\u00e5-barn",
    "type": "Barn",
    "id": 44
  }, {
    "sku": "8807",
    "category": "Barn",
    "cod_cost": 160,
    "description": "Overall med dragkedja, finns i storlekarna 60, 70, och 80 cl.\r\n            \r\n",
    "img": "/media/uploads/nya_teckningar_420_519_300/babyoverall_ny.jpg",
    "article": " Baby Overall ",
    "price": 450,
    "quality": "Silkestrik\u00e5-baby",
    "type": "Barn",
    "id": 45
  }, {
    "sku": "311",
    "category": "Barn",
    "cod_cost": 160,
    "description": "Halvl\u00e5ng kl\u00e4nning med volang och korta ving\u00e4rmar, finns i storlekarna 90 cl - 150 cl.",
    "img": "/media/uploads/nya_teckningar_420_519_300/vingklanninf_ny.jpg",
    "article": "Barn Vingkl\u00e4nning",
    "price": 495,
    "quality": "Silkestrik\u00e5-barn",
    "type": "Barn",
    "id": 46
  }, {
    "sku": "1339",
    "category": "Barn",
    "cod_cost": 160,
    "description": "Smala byxor f\u00f6r barn.",
    "img": "/media/uploads/nya_teckningar_420_519_300/ny_barnbyxa.jpg",
    "article": "Barn Byxa",
    "price": 375,
    "quality": "Silkestrik\u00e5-barn",
    "type": "Barn",
    "id": 79
  }, {
    "sku": "1012",
    "category": "Man",
    "cod_cost": 150,
    "description": "Herrtr\u00f6ja i silke med halssl\u00e5 och kn\u00e4ppning.",
    "img": "/media/uploads/nya_teckningar_420_519_300/murarskjorta_ny.jpg",
    "article": "Herrtr\u00f6ja i silke med halssl\u00e5 och knappar",
    "price": 1395,
    "quality": "Silkestrik\u00e5",
    "type": "Herr",
    "id": 22
  }, {
    "sku": "101",
    "category": "Man",
    "cod_cost": 160,
    "description": "Kn\u00e4ppt manchesterjacka med fyra utanp\u00e5fickor, tv\u00e5 innerfickor, st\u00e5krage och foder av silkestrik\u00e5. Finns i f\u00e4rgerna M\u00f6rkbl\u00e5tt, Svart, Kanel, Mossgr\u00f6nt och Plommon.",
    "img": "/media/uploads/nya_teckningar_420_519_300/herrjacka_ny.jpg",
    "article": "Manchester Herrjacka med knappar ",
    "price": 2650,
    "quality": "Manchester herrjacka",
    "type": "Herr",
    "id": 39
  }, {
    "sku": "712",
    "category": "Man",
    "cod_cost": 160,
    "description": "Rak herrbyxa i manchester med fickor i sidan och tv\u00e5 fickor bak. ",
    "img": "/media/uploads/nya_teckningar_420_519_300/killbyxa_ny.jpg",
    "article": "Manchester Herrbyxa ",
    "price": 1350,
    "quality": "Manchester herrbyxa",
    "type": "Herr",
    "id": 47
  }, {
    "sku": "524",
    "category": "Man",
    "cod_cost": 100,
    "description": "Herrt-shirt i silkestrik\u00e5 med rundringad hals",
    "img": "/media/uploads/nya_teckningar_420_519_300/herr_t-shirt.jpg",
    "article": "Herr t-shirt",
    "price": 795,
    "quality": "Silkestrik\u00e5",
    "type": "Herr",
    "id": 49
  }, {
    "sku": "102",
    "category": "Man",
    "cod_cost": 160,
    "description": "Klassisk herrskjorta. Vid passform.",
    "img": "/media/uploads/nya_teckningar_420_519_300/bomullsskjorta_ny.jpg",
    "article": "skjorta bomull",
    "price": 1350,
    "quality": "Ekologisk bomull",
    "type": "Herr",
    "id": 66
  }, {
    "sku": "514",
    "category": "Man",
    "cod_cost": 150,
    "description": "L\u00e5ng\u00e4rmad tr\u00f6ja med rund hals.",
    "img": "/media/uploads/nya_teckningar_420_519_300/langgaramad_____trojjasss.jpg",
    "article": "Herrtr\u00f6ja l\u00e5ng \u00e4rm",
    "price": 1075,
    "quality": "Silkestrik\u00e5",
    "type": "Herr",
    "id": 83
  }, {
    "sku": "1008",
    "category": "Kvinna",
    "cod_cost": 150,
    "description": "Vid utst\u00e4lld Kl\u00e4nning med u-ringad hals och raglan\u00e4rm.",
    "img": "/media/uploads/nya_teckningar_420_519_300/raglanklanning_lang_arm.jpg",
    "article": "Raglankl\u00e4nning l\u00e5ng \u00e4rm",
    "price": 1375,
    "quality": "Silkestrik\u00e5",
    "type": "Kl\u00e4nning",
    "id": 1
  }, {
    "sku": "9807",
    "category": "Kvinna",
    "cod_cost": 150,
    "description": "Figursydd kl\u00e4nning med klock i kjolen och v-ringad bandkantad hals. ",
    "img": "/media/uploads/nya_teckningar_420_519_300/kortarmad_v-klanning_ny.jpg",
    "article": "V-kl\u00e4nning kort \u00e4rm",
    "price": 1375,
    "quality": "Silkestrik\u00e5",
    "type": "Kl\u00e4nning",
    "id": 5
  }, {
    "sku": "9813",
    "category": "Kvinna",
    "cod_cost": 200,
    "description": "Vid jacka med fickor i sidorna. Extra rymlig passform med knappar hela v\u00e4gen fram.\r\n\r\n",
    "img": "/media/uploads/nya_teckningar_420_519_300/vidjacka_ny.jpg",
    "article": "Vid jacka",
    "price": 1975,
    "quality": "Silkestrik\u00e5",
    "type": "Jackor",
    "id": 7
  }, {
    "sku": "9801",
    "category": "Kvinna",
    "cod_cost": 100,
    "description": "Linne",
    "img": "/media/uploads/nya_teckningar_420_519_300/linne_ny.jpg",
    "article": "Linne",
    "price": 750,
    "quality": "Silkestrik\u00e5",
    "type": "Tr\u00f6jor och linnen",
    "id": 8
  }, {
    "sku": "9808",
    "category": "Kvinna",
    "cod_cost": 150,
    "description": "Figursydd klockad kl\u00e4nning med bandkantad v-ringad hals och l\u00e5ng \u00e4rm. Slutar under kn\u00e4t.",
    "img": "/media/uploads/nya_teckningar_420_519_300/vklanningsvs.jpg",
    "article": "V-kl\u00e4nning l\u00e5ng \u00e4rm",
    "price": 1395,
    "quality": "Silkestrik\u00e5",
    "type": "Kl\u00e4nning",
    "id": 10
  }, {
    "sku": "9901",
    "category": "Kvinna",
    "cod_cost": 200,
    "description": "Bandkantad omlottkl\u00e4nning med kort \u00e4rm vars band g\u00e5r att knyta b\u00e5de bak och fram. Slutar mitt p\u00e5 kn\u00e4t eller strax under.",
    "img": "/media/uploads/nya_teckningar_420_519_300/omlottklanning_ny.jpg",
    "article": "Omlottkl\u00e4nning kort \u00e4rm",
    "price": 1595,
    "quality": "Silkestrik\u00e5",
    "type": "Kl\u00e4nning",
    "id": 11
  }, {
    "sku": "9805",
    "category": "Kvinna",
    "cod_cost": 200,
    "description": "V\u00e4ndbar jacka med blixtl\u00e5s och liten st\u00e5krage. Jackan har olika m\u00f6nster men i samma f\u00e4rgst\u00e4llning p\u00e5 insida och utsida. Fungerar lika bra som kofta, kavaj eller tunn jacka. ",
    "img": "/media/uploads/nya_teckningar_420_519_300/vandbarjacka_ny.jpg",
    "article": "V\u00e4ndbar blixtl\u00e5sjacka",
    "price": 2075,
    "quality": "Silkestrik\u00e5",
    "type": "Jackor",
    "id": 12
  }, {
    "sku": "805",
    "category": "Kvinna",
    "cod_cost": 150,
    "description": "Rymlig v-ringad a-formad kl\u00e4nning med bandkantad halsringning. ",
    "img": "/media/uploads/nya_teckningar_420_519_300/swagger_lang_arm_ny.jpg",
    "article": "Swagger l\u00e5ng \u00e4rm",
    "price": 1395,
    "quality": "Silkestrik\u00e5",
    "type": "Kl\u00e4nning",
    "id": 13
  }, {
    "sku": "9820",
    "category": "Kvinna",
    "cod_cost": 100,
    "description": "Klassisk t-shirt med rymlig passform.",
    "img": "/media/uploads/nya_teckningar_420_519_300/stor_t-shirt_ny.jpg",
    "article": "Stor t-shirt",
    "price": 795,
    "quality": "Silkestrik\u00e5",
    "type": "Tr\u00f6jor och linnen",
    "id": 15
  }, {
    "sku": "9802",
    "category": "Kvinna",
    "cod_cost": 100,
    "description": "Liten t-shirt. Smal passform. \r\n\r\n",
    "img": "/media/uploads/nya_teckningar_420_519_300/litent-sdhirt_ny.jpg",
    "article": "Liten t-shirt",
    "price": 695,
    "quality": "Silkestrik\u00e5",
    "type": "Tr\u00f6jor och linnen",
    "id": 16
  }, {
    "sku": "801",
    "category": "Kvinna",
    "cod_cost": 150,
    "description": "Kort kl\u00e4nning med kn\u00e4ppning p\u00e5 br\u00f6stet. Smal modell.\r\n",
    "img": "/media/uploads/artiklar/knappklanning.jpg",
    "article": "Kn\u00e4ppkl\u00e4nning",
    "price": 1475,
    "quality": "Silkestrik\u00e5",
    "type": "Kl\u00e4nning",
    "id": 17
  }, {
    "sku": "201",
    "category": "Kvinna",
    "cod_cost": 150,
    "description": "L\u00e5ng\u00e4rmad kort kl\u00e4nningstunika med liten u-ringning. Rymlig modell.",
    "img": "/media/uploads/nya_teckningar_420_519_300/klanningstunika_ny.jpg",
    "article": "Kl\u00e4nningstunika",
    "price": 1395,
    "quality": "Silkestrik\u00e5",
    "type": "Kl\u00e4nning",
    "id": 18
  }, {
    "sku": "510",
    "category": "Kvinna",
    "cod_cost": 100,
    "description": "Holk\u00e4rmstr\u00f6ja med rak halsringning. Smal modell.",
    "img": "/media/uploads/nya_teckningar_420_519_300/holkarmstroja.jpg",
    "article": "Holk\u00e4rmstr\u00f6ja",
    "price": 750,
    "quality": "Silkestrik\u00e5",
    "type": "Tr\u00f6jor och linnen",
    "id": 19
  }, {
    "sku": "803",
    "category": "Kvinna",
    "cod_cost": 200,
    "description": "Jacka med kavajslag, kn\u00e4ppning fram och tv\u00e5 fickor.",
    "img": "/media/uploads/nya_teckningar_420_519_300/kragjacka_ny.jpg",
    "article": "Kragjacka",
    "price": 1875,
    "quality": "Silkestrik\u00e5",
    "type": "Jackor",
    "id": 21
  }, {
    "sku": "9905",
    "category": "Kvinna",
    "cod_cost": 100,
    "description": "Klockad kjol som slutar strax under kn\u00e4na. Med res\u00e5r i midjan.",
    "img": "/media/uploads/nya_teckningar_420_519_300/klockad_kjol_ny.jpg",
    "article": "Klockad kjol",
    "price": 995,
    "quality": "Silkestrik\u00e5",
    "type": "Kjolar och byxor",
    "id": 24
  }, {
    "sku": "302",
    "category": "Kvinna",
    "cod_cost": 100,
    "description": "Kort rak kjol som slutar strax ovanf\u00f6r kn\u00e4na. Res\u00e5r i midjan.",
    "img": "/media/uploads/rak_kjollll.jpg",
    "article": "Kort rak kjol",
    "price": 850,
    "quality": "Silkestrik\u00e5",
    "type": "Kjolar och byxor",
    "id": 25
  }, {
    "sku": "9812",
    "category": "Kvinna",
    "cod_cost": 150,
    "description": "Smal l\u00e5ng byxa med res\u00e5r i midjan.",
    "img": "/media/uploads/nya_teckningar_420_519_300/stickade_smala_byxor_ny.jpg",
    "article": "Smal l\u00e5ngbyxa",
    "price": 1075,
    "quality": "Silkestrik\u00e5",
    "type": "Kjolar och byxor",
    "id": 30
  }, {
    "sku": "1208",
    "category": "Kvinna",
    "cod_cost": 160,
    "description": "V-formad jacka med kn\u00e4ppning fram och inf\u00e4llda fickor i sids\u00f6mmen. Obs, mycket sm\u00e5 storlekar!",
    "img": "/media/uploads/vidjacka.jpg",
    "article": "Vid plyschjacka",
    "price": 1795,
    "quality": "Plysch VJ",
    "type": "Jackor",
    "id": 31
  }, {
    "sku": "9809",
    "category": "Kvinna",
    "cod_cost": 100,
    "description": "L\u00e5ngt linne med slits i sidorna. Rymlig modell.",
    "img": "/media/uploads/nya_teckningar_420_519_300/slitslinne_ny.jpg",
    "article": "Slitslinne",
    "price": 895,
    "quality": "Silkestrik\u00e5",
    "type": "Tr\u00f6jor och linnen",
    "id": 38
  }, {
    "sku": "1007",
    "category": "Kvinna",
    "cod_cost": 150,
    "description": "Vid A-formad kl\u00e4nning med  u-ringning och kort raglan\u00e4rm. Smal upptill och vidd nedtill.",
    "img": "/media/uploads/nya_teckningar_420_519_300/kortarmad_raglan_ny.jpg",
    "article": "Raglankl\u00e4nning kort \u00e4rm",
    "price": 1325,
    "quality": "Silkestrik\u00e5",
    "type": "Kl\u00e4nning",
    "id": 41
  }, {
    "sku": "9413",
    "category": "Kvinna",
    "cod_cost": 150,
    "description": "Klockad swagger med bandkantad v-ringad hals.",
    "img": "/media/uploads/nya_teckningar_420_519_300/kort_swagger_ny.jpg",
    "article": "Swagger ",
    "price": 1275,
    "quality": "Silkestrik\u00e5",
    "type": "Kl\u00e4nning",
    "id": 42
  }, {
    "sku": "503",
    "category": "Kvinna",
    "cod_cost": 160,
    "description": "Klassisk Mah-Jongjacka i manchester med blixtl\u00e5s och tv\u00e5 fickor fram. Tv\u00e5 innerfickor och muddar i hals och runt handled. Res\u00e5r i ryggen.",
    "img": "/media/uploads/nya_teckningar_420_519_300/manchesterjacka_mah_jong.jpg",
    "article": "Manchester Mah-Jongjacka ",
    "price": 2125,
    "quality": "Mah-Jongjacka med mudd",
    "type": "Jackor",
    "id": 48
  }, {
    "sku": "9903",
    "category": "Kvinna",
    "cod_cost": 150,
    "description": "Rak vid byxa med res\u00e5r i midjan.",
    "img": "/media/uploads/nya_teckningar_420_519_300/vid_byxa_ny.jpg",
    "article": "Vid byxa",
    "price": 1075,
    "quality": "Silkestrik\u00e5",
    "type": "Kjolar och byxor",
    "id": 50
  }, {
    "sku": "1308",
    "category": "Kvinna",
    "cod_cost": 0,
    "description": "Byxa i manchester med h\u00f6g midja, fickor i sids\u00f6mmen och raka ben. Inga fickor bak. ",
    "img": "/media/uploads/nya_teckningar_420_519_300/tjejbyxa_ny.jpg",
    "article": "Manchester Dambyxa",
    "price": 1250,
    "quality": "Manchester tjejbyxa",
    "type": "Kjolar och byxor",
    "id": 52
  }, {
    "sku": "1717",
    "category": "Kvinna",
    "cod_cost": 100,
    "description": "Trekantig sjal i mjukaste moll med tryck i m\u00f6nstret Varma Backen eller Bred Rand. 100 % bomull.  Onesize m\u00e5tt: L\u00e5ngsida 240 cm kortsidor 144 cm.",
    "img": "/media/uploads/vitt.jpg",
    "article": "NY! Trekants-sjal i bomull",
    "price": 425,
    "quality": "Molltyg",
    "type": "Tr\u00f6jor och linnen",
    "id": 89
  }, {
    "sku": "1221",
    "category": "Kvinna",
    "cod_cost": 160,
    "description": "Jacka med blixtl\u00e5s mitt fram och n\u00e5got insv\u00e4ngd midja. Rund hals kantad med silkestyg p\u00e5 insidan. ",
    "img": "/media/uploads/nya_teckningar_420_519_300/stockad_jacka_ny.jpg",
    "article": "Stickeri Jacka med blixtl\u00e5s",
    "price": 1895,
    "quality": "Stickat i ekologisk ull",
    "type": "Stickeri",
    "id": 53
  }, {
    "sku": "1222",
    "category": "Kvinna",
    "cod_cost": 160,
    "description": "A-formad kappa med blixtl\u00e5s mitt fram och fickor i sids\u00f6mmen. Rund halsringning kantad med silkestyg p\u00e5 insidan.",
    "img": "/media/uploads/nya_teckningar_420_519_300/stickad_kaopppa_ny.jpg",
    "article": "Stickeri Kappa med blixtl\u00e5s ",
    "price": 2425,
    "quality": "Stickat i ekologisk ull",
    "type": "Stickeri",
    "id": 54
  }, {
    "sku": "1320",
    "category": "Kvinna",
    "cod_cost": 160,
    "description": "Enkel tr\u00f6ja med rund halsringning kantad med silkestyg p\u00e5 insidan.",
    "img": "/media/uploads/nya_teckningar_420_519_300/stickad_troja_ny.jpg",
    "article": "Stickeri Tr\u00f6ja",
    "price": 1350,
    "quality": "Stickat i ekologisk ull",
    "type": "Stickeri",
    "id": 55
  }, {
    "sku": "1223",
    "category": "Kvinna",
    "cod_cost": 160,
    "description": "Enkel kort kjol med res\u00e5r i midjan.",
    "img": "/media/uploads/nya_teckningar_420_519_300/kortkjol_ny.jpg",
    "article": "Stickeri Kort kjol",
    "price": 850,
    "quality": "Stickat i ekologisk ull",
    "type": "Stickeri",
    "id": 56
  }, {
    "sku": "1324",
    "category": "Kvinna",
    "cod_cost": 160,
    "description": "Smal byxa med res\u00e5r i midjan.",
    "img": "/media/uploads/nya_teckningar_420_519_300/stickade_smala_byxor_ny.jpg",
    "article": "Stickeri Smala byxor",
    "price": 1325,
    "quality": "Stickat i ekologisk ull",
    "type": "Stickeri",
    "id": 57
  }, {
    "sku": "1401",
    "category": "Kvinna",
    "cod_cost": 150,
    "description": "Ny kl\u00e4nningsmodell! Enkel kl\u00e4nning med holk\u00e4rm, b\u00e5tringad hals och avvikande m\u00f6nster i fickan. Kjolen \u00e4r n\u00e5got klockad och slutar p\u00e5 eller strax under kn\u00e4t. \r\n\r\n\r\n",
    "img": "/media/uploads/nya_teckningar_420_519_300/fickklanning_ny_2.jpg",
    "article": "Fickkl\u00e4nning",
    "price": 1575,
    "quality": "Silkestrik\u00e5",
    "type": "Kl\u00e4nning",
    "id": 68
  }, {
    "sku": "807",
    "category": "Kvinna",
    "cod_cost": 200,
    "description": "Bandkantad omlottkl\u00e4nning med l\u00e5ng \u00e4rm vars band g\u00e5r att knyta b\u00e5de bak och fram. Slutar mitt p\u00e5 kn\u00e4t eller strax under.",
    "img": "/media/uploads/nya_teckningar_420_519_300/langarmad_omlottklanning_ny.jpg",
    "article": "Omlottkl\u00e4nning l\u00e5ng \u00e4rm",
    "price": 1625,
    "quality": "Silkestrik\u00e5",
    "type": "Kl\u00e4nning",
    "id": 69
  }, {
    "sku": "1605",
    "category": "Kvinna",
    "cod_cost": 150,
    "description": "Kort kl\u00e4nning avskuren i midjan med rund krage och blixtl\u00e5s fram. Kommer i slutet av juni!",
    "img": "/media/uploads/nya_teckningar_420_519_300/tennisklanning_ny.jpg",
    "article": "Tenniskl\u00e4nning",
    "price": 1350,
    "quality": "Silkestrik\u00e5",
    "type": "Kl\u00e4nning",
    "id": 81
  }, {
    "sku": "1501",
    "category": "Kvinna",
    "cod_cost": 160,
    "description": "Helkn\u00e4ppt silkesblus med skjortkrage.",
    "img": "/media/uploads/nya_teckningar_420_519_300/damblus_ny.jpg",
    "article": "Blus",
    "price": 1390,
    "quality": "Silkestrik\u00e5",
    "type": "Tr\u00f6jor och linnen",
    "id": 71
  }, {
    "sku": "1506",
    "category": "Kvinna",
    "cod_cost": 100,
    "description": "Linnekl\u00e4nning med linnetop och kort kjol med mycket vidd i. Smal passform.",
    "img": "/media/uploads/nya_teckningar_420_519_300/linneklnninhg_vuxen_ny.jpg",
    "article": "Linnekl\u00e4nning",
    "price": 945,
    "quality": "Silkestrik\u00e5",
    "type": "Kl\u00e4nning",
    "id": 75
  }, {
    "sku": "1510",
    "category": "Kvinna",
    "cod_cost": 150,
    "description": "L\u00e5ng\u00e4rmad tr\u00f6ja med rund ringning.",
    "img": "/media/uploads/nya_teckningar_420_519_300/langgaramad_____trojjasss.jpg",
    "article": "L\u00e5ng\u00e4rmad tr\u00f6ja",
    "price": 1050,
    "quality": "Silkestrik\u00e5",
    "type": "Tr\u00f6jor och linnen",
    "id": 76
  }, {
    "sku": "1511",
    "category": "Kvinna",
    "cod_cost": 150,
    "description": "Kl\u00e4nning med knappsl\u00e5 ner till br\u00f6stet, liten st\u00e5krage, fickor och slitsar i sidorna. Kl\u00e4nningen \u00e4r kort, slutar ovanf\u00f6r kn\u00e4et och passar bra till b\u00e5de byxor och strumpor. ",
    "img": "/media/uploads/nya_teckningar_420_519_300/skjortklanning_ny.jpg",
    "article": "Skjortkl\u00e4nning",
    "price": 1750,
    "quality": "Silkestrik\u00e5",
    "type": "Kl\u00e4nning",
    "id": 78
  }, {
    "sku": "1606",
    "category": "Kvinna",
    "cod_cost": 160,
    "description": "NY! Snibbkl\u00e4nningen gjordes redan p\u00e5 60-talet! Den har en rund halsringning och en \"snibb\" som formar ett v ovanf\u00f6r bysten. Kl\u00e4nningen \u00e4r kort och klockad.",
    "img": "/media/uploads/nya_teckningar_420_519_300/snibbklanning_ny.jpg",
    "article": "Snibbkl\u00e4nning",
    "price": 1375,
    "quality": "Silkestrik\u00e5",
    "type": "Kl\u00e4nning",
    "id": 82
  }, {
    "sku": "1711",
    "category": "Kvinna",
    "cod_cost": 150,
    "description": "Ny kl\u00e4nning med rund hals och sprund i nacken som kn\u00e4pps med liten knapp. Anv\u00e4nds med eller utan medf\u00f6ljande sk\u00e4rp.",
    "img": "/media/uploads/nya_teckningar_420_519_300/ny_klanning.jpg",
    "article": "NY! Festkl\u00e4nning",
    "price": 1775,
    "quality": "Silkestrik\u00e5",
    "type": "Kl\u00e4nning",
    "id": 84
  }, {
    "sku": "1710",
    "category": "Kvinna",
    "cod_cost": 150,
    "description": "Blus med murarkrage och kn\u00e4ppning.",
    "img": "/media/uploads/nya_teckningar_420_519_300/blus.jpg",
    "article": "NY! Blus",
    "price": 1375,
    "quality": "Silkestrik\u00e5",
    "type": "Tr\u00f6jor och linnen",
    "id": 85
  }, {
    "sku": "1712",
    "category": "Kvinna",
    "cod_cost": 150,
    "description": "Kjol med fickor och bred linning.",
    "img": "/media/uploads/nya_teckningar_420_519_300/fickjol.jpg",
    "article": "NY! Fickkjol",
    "price": 1275,
    "quality": "Silkestrik\u00e5",
    "type": "Kjolar och byxor",
    "id": 87
  }, {
    "sku": "1709",
    "category": "Kvinna",
    "cod_cost": 150,
    "description": "En vid l\u00e5ng v-ringad tunika.",
    "img": "/media/uploads/nya_teckningar_420_519_300/vtunika.jpg",
    "article": "NY! Vid tunika",
    "price": 1350,
    "quality": "Silkestrik\u00e5",
    "type": "Tr\u00f6jor och linnen",
    "id": 88
  }], 
        patternsandcolors: [{
    "quality_num": 1,
    "color_num": 123,
    "color_name": "Klarbl\u00e5 Ljusbl\u00e5",
    "pattern_num": 1,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Twin Peaks"
  }, {
    "quality_num": 1,
    "color_num": 49,
    "color_name": "M\u00f6rk viol",
    "pattern_num": 20,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Wicky Leeks"
  }, {
    "quality_num": 1,
    "color_num": 49,
    "color_name": "M\u00f6rk viol",
    "pattern_num": 9,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "F\u00e5gel"
  }, {
    "quality_num": 1,
    "color_num": 49,
    "color_name": "M\u00f6rk viol",
    "pattern_num": 16,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Ljung"
  }, {
    "quality_num": 1,
    "color_num": 32,
    "color_name": "Nyponr\u00f6d",
    "pattern_num": 16,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Ljung"
  }, {
    "quality_num": 1,
    "color_num": 46,
    "color_name": "R\u00f6d Rosa",
    "pattern_num": 1,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Twin Peaks"
  }, {
    "quality_num": 1,
    "color_num": 45,
    "color_name": "P\u00e5f\u00e5gelbl\u00e5",
    "pattern_num": 20,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Wicky Leeks"
  }, {
    "quality_num": 1,
    "color_num": 45,
    "color_name": "P\u00e5f\u00e5gelbl\u00e5",
    "pattern_num": 16,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Ljung"
  }, {
    "quality_num": 1,
    "color_num": 43,
    "color_name": "Indigo",
    "pattern_num": 7,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Tiger m\u00f6rk botten"
  }, {
    "quality_num": 1,
    "color_num": 20,
    "color_name": "R\u00f6dlila",
    "pattern_num": 14,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Tre rand"
  }, {
    "quality_num": 1,
    "color_num": 10,
    "color_name": "Guldnougat",
    "pattern_num": 14,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Tre rand"
  }, {
    "quality_num": 1,
    "color_num": 10,
    "color_name": "Guldnougat",
    "pattern_num": 12,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Labyrint"
  }, {
    "quality_num": 1,
    "color_num": 10,
    "color_name": "Guldnougat",
    "pattern_num": 10,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "B\u00f6na"
  }, {
    "quality_num": 1,
    "color_num": 6,
    "color_name": "M\u00f6rk Indigo",
    "pattern_num": 10,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "B\u00f6na"
  }, {
    "quality_num": 1,
    "color_num": 6,
    "color_name": "M\u00f6rk Indigo",
    "pattern_num": 16,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Ljung"
  }, {
    "quality_num": 1,
    "color_num": 6,
    "color_name": "M\u00f6rk Indigo",
    "pattern_num": 1,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Twin Peaks"
  }, {
    "quality_num": 1,
    "color_num": 41,
    "color_name": "Aqua",
    "pattern_num": 20,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Wicky Leeks"
  }, {
    "quality_num": 1,
    "color_num": 41,
    "color_name": "Aqua",
    "pattern_num": 5,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "K\u00e4rna"
  }, {
    "quality_num": 1,
    "color_num": 39,
    "color_name": "Syrligt gr\u00f6n",
    "pattern_num": 1,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Twin Peaks"
  }, {
    "quality_num": 1,
    "color_num": 39,
    "color_name": "Syrligt gr\u00f6n",
    "pattern_num": 5,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "K\u00e4rna"
  }, {
    "quality_num": 1,
    "color_num": 37,
    "color_name": "\u00c4rtgr\u00f6n",
    "pattern_num": 5,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "K\u00e4rna"
  }, {
    "quality_num": 1,
    "color_num": 33,
    "color_name": "Himmelsbl\u00e5",
    "pattern_num": 23,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Stor Blomma"
  }, {
    "quality_num": 1,
    "color_num": 33,
    "color_name": "Himmelsbl\u00e5",
    "pattern_num": 22,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Bred Rand"
  }, {
    "quality_num": 1,
    "color_num": 33,
    "color_name": "Himmelsbl\u00e5",
    "pattern_num": 13,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Enf\u00e4rgad"
  }, {
    "quality_num": 1,
    "color_num": 31,
    "color_name": "M\u00f6rk Turkos",
    "pattern_num": 10,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "B\u00f6na"
  }, {
    "quality_num": 1,
    "color_num": 31,
    "color_name": "M\u00f6rk Turkos",
    "pattern_num": 13,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Enf\u00e4rgad"
  }, {
    "quality_num": 1,
    "color_num": 30,
    "color_name": "Konjak",
    "pattern_num": 13,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Enf\u00e4rgad"
  }, {
    "quality_num": 1,
    "color_num": 30,
    "color_name": "Konjak",
    "pattern_num": 3,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Fj\u00e4der"
  }, {
    "quality_num": 1,
    "color_num": 15,
    "color_name": "Jade Turkos",
    "pattern_num": 11,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Mah-Jongblomma"
  }, {
    "quality_num": 1,
    "color_num": 14,
    "color_name": "Jade Ceris",
    "pattern_num": 4,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Pyramid"
  }, {
    "quality_num": 1,
    "color_num": 13,
    "color_name": "Cigarr",
    "pattern_num": 1,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Twin Peaks"
  }, {
    "quality_num": 1,
    "color_num": 17,
    "color_name": "Orange Aprikos",
    "pattern_num": 4,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Pyramid"
  }, {
    "quality_num": 1,
    "color_num": 17,
    "color_name": "Orange Aprikos",
    "pattern_num": 5,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "K\u00e4rna"
  }, {
    "quality_num": 1,
    "color_num": 21,
    "color_name": "Lavendelgr\u00e5",
    "pattern_num": 20,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Wicky Leeks"
  }, {
    "quality_num": 1,
    "color_num": 21,
    "color_name": "Lavendelgr\u00e5",
    "pattern_num": 9,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "F\u00e5gel"
  }, {
    "quality_num": 1,
    "color_num": 21,
    "color_name": "Lavendelgr\u00e5",
    "pattern_num": 16,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Ljung"
  }, {
    "quality_num": 1,
    "color_num": 21,
    "color_name": "Lavendelgr\u00e5",
    "pattern_num": 1,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Twin Peaks"
  }, {
    "quality_num": 1,
    "color_num": 24,
    "color_name": "Pistagegr\u00f6n",
    "pattern_num": 1,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Twin Peaks"
  }, {
    "quality_num": 1,
    "color_num": 8,
    "color_name": "Lila Rosa",
    "pattern_num": 10,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "B\u00f6na"
  }, {
    "quality_num": 1,
    "color_num": 8,
    "color_name": "Lila Rosa",
    "pattern_num": 9,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "F\u00e5gel"
  }, {
    "quality_num": 1,
    "color_num": 8,
    "color_name": "Lila Rosa",
    "pattern_num": 16,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Ljung"
  }, {
    "quality_num": 1,
    "color_num": 11,
    "color_name": "Mandarin",
    "pattern_num": 9,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "F\u00e5gel"
  }, {
    "quality_num": 1,
    "color_num": 3,
    "color_name": "Silvergr\u00e5",
    "pattern_num": 22,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Bred Rand"
  }, {
    "quality_num": 1,
    "color_num": 3,
    "color_name": "Silvergr\u00e5",
    "pattern_num": 13,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Enf\u00e4rgad"
  }, {
    "quality_num": 1,
    "color_num": 12,
    "color_name": "Cyklamen",
    "pattern_num": 15,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Ginkgo"
  }, {
    "quality_num": 1,
    "color_num": 1,
    "color_name": "Syr\u00e9n Lila ",
    "pattern_num": 8,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Smal Rand"
  }, {
    "quality_num": 1,
    "color_num": 1,
    "color_name": "Syr\u00e9n Lila ",
    "pattern_num": 5,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "K\u00e4rna"
  }, {
    "quality_num": 1,
    "color_num": 7,
    "color_name": "Svart Vit",
    "pattern_num": 20,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Wicky Leeks"
  }, {
    "quality_num": 1,
    "color_num": 7,
    "color_name": "Svart Vit",
    "pattern_num": 23,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Stor Blomma"
  }, {
    "quality_num": 1,
    "color_num": 7,
    "color_name": "Svart Vit",
    "pattern_num": 22,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Bred Rand"
  }, {
    "quality_num": 1,
    "color_num": 7,
    "color_name": "Svart Vit",
    "pattern_num": 10,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "B\u00f6na"
  }, {
    "quality_num": 1,
    "color_num": 7,
    "color_name": "Svart Vit",
    "pattern_num": 9,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "F\u00e5gel"
  }, {
    "quality_num": 1,
    "color_num": 7,
    "color_name": "Svart Vit",
    "pattern_num": 16,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Ljung"
  }, {
    "quality_num": 1,
    "color_num": 7,
    "color_name": "Svart Vit",
    "pattern_num": 1,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Twin Peaks"
  }, {
    "quality_num": 1,
    "color_num": 7,
    "color_name": "Svart Vit",
    "pattern_num": 11,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Mah-Jongblomma"
  }, {
    "quality_num": 1,
    "color_num": 7,
    "color_name": "Svart Vit",
    "pattern_num": 6,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Tiger ljus botten"
  }, {
    "quality_num": 1,
    "color_num": 2,
    "color_name": "Vallmor\u00f6d",
    "pattern_num": 22,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Bred Rand"
  }, {
    "quality_num": 1,
    "color_num": 2,
    "color_name": "Vallmor\u00f6d",
    "pattern_num": 21,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Diagonal"
  }, {
    "quality_num": 1,
    "color_num": 2,
    "color_name": "Vallmor\u00f6d",
    "pattern_num": 13,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Enf\u00e4rgad"
  }, {
    "quality_num": 1,
    "color_num": 5,
    "color_name": "Klarbl\u00e5",
    "pattern_num": 27,
    "quality_name": "Silkestrik\u00e5",
    "pattern_name": "Varma Backen"
  }], 
        sizes: [], 
        sizebase: 1, 
        singleCod: [],
        shopMenu: [
          {title: "Kvinna", Mid: "M1", type: "category"}, 
          {title: "Man", Mid: "M2", type: "category"}, 
          {title: "Barn", Mid: "M3", type: "category0"}, 
          {title: "Accessoarer & sängkläder", Mid: "M4", type: "category0"}, 
          {title: "Metervara", Mid: "M8", type: "category0"}, 
          {title: "Mönster och Färger", Mid: "M5", type: "mf"}, 
          {title: "Rea", Mid: "M6", type: "rea"}, 
          {title: "Cut on Demand", Mid: "M7", type: "cod"},
        ], 
        artok: false, 
        patterncolorok: false,
        sizeok: false, 
        codokall: false 


      };
    this.filterSearchList = this.filterSearchList.bind(this);
    this.filterResetList = this.filterResetList.bind(this);
    this.filterByPattern = this.filterByPattern.bind(this);
    this.filterByColor = this.filterByColor.bind(this);
    this.filterBySize = this.filterBySize.bind(this);
    this.createPatternList = this.createPatternList.bind(this);
    this.filterByPattern = this.filterByPattern.bind(this);
    this.createColorList = this.createColorList.bind(this);
    this.filterByPage = this.filterByPage.bind(this);
    this.createPages = this.createPages.bind(this);
    this.MenuClick = this.MenuClick.bind(this);  
    this.filterByCategory = this.filterByCategory.bind(this);
    this.chooseCod = this.chooseCod.bind(this); 
    this.getWords = this.getWords.bind(this); 
    this.filterPcByQuality = this.filterPcByQuality.bind(this); 
    this.addToShoppingCart = this.addToShoppingCart.bind(this); 
    this.addSizeToArt = this.addSizeToArt.bind(this); 
    this.checkAllCod = this.checkAllCod.bind(this); 
  }
 
 componentDidMount() {
	fetch('/products/reajson/')
  //fetch('./static/json/rea.json')
      .then(response => response.json())
   		.then(json => {
          console.log(json)
	        const new_products = json;
	        this.setState({ products : new_products,
	        				allProducts : new_products
	        });
	        this.createPatternList(new_products);
          this.createColorList(new_products);
          this.createPages(new_products);
        
     });
     fetch('/products/codartjson/all/')
      //fetch('./static/json/prod.json')
  
      .then(response => response.json())
      .then(json => {
          
          json.colorspatterns = this.filterPcByQuality(json.colorspatterns) 
          this.setState({ 
              fullProducts : json.products,
              fullProductsFiltered : json.products,
              articles : json.articles, 
              patternsandcolors: json.colorspatterns,
              variations: json.variations,
              singleCod: json.single[0], 
              sizes:  json.sizes
          });
          this.getWords(); 
          this.filterByCategory('Kvinna')
          // setting up CSRF
      // using jQuery,
      function getCookie(name) {
          var cookieValue = null;
          if (document.cookie && document.cookie !== '') {
              var cookies = document.cookie.split(';');
              for (var i = 0; i < cookies.length; i++) {
                  var cookie = jQuery.trim(cookies[i]);
                  // Does this cookie string begin with the name we want?
                  if (cookie.substring(0, name.length + 1) == (name + '=')) {
                      cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                      break;
                  }
              }
          }
          return cookieValue;
      }

      var csrftoken = getCookie('csrftoken');

      this.setState({ 
              csrftoken : csrftoken
          });
      function csrfSafeMethod(method) {
          // these HTTP methods do not require CSRF protection
          return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
      }

      function sameOrigin(url) {
          // test that a given url is a same-origin URL
          // url could be relative or scheme relative or absolute
          var host = document.location.host; // host + port
          var protocol = document.location.protocol;
          var sr_origin = '//' + host;
          var origin = protocol + sr_origin;
          // Allow absolute or scheme relative URLs to same origin
          return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
              (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
              // or any other URL that isn't scheme relative or absolute i.e relative.
              !(/^(\/\/|http:|https:).*/.test(url));
      }

      $.ajaxSetup({
          beforeSend: function(xhr, settings) {
              if (!csrfSafeMethod(settings.type) && sameOrigin(settings.url)) {
                  // Send the token to same-origin, relative URLs only.
                  // Send the token only if the method warrants CSRF protection
                  // Using the CSRFToken value acquired earlier
                  xhr.setRequestHeader("X-CSRFToken", csrftoken);
              }
          }
      }); // --- CSRF end

      // --- setting up cart-widget

     }); 

   
  }
  addToShoppingCart(orderitem) {
    
    console.dir(orderitem, this.state.singleCod.size_id)
    var obj = {
      article_sku: orderitem.sku, 
      color: orderitem.color_id,
      color2: 0,
      pattern: orderitem.pattern_id,
      pattern2: 0,
      size : this.state.singleCod.size_id,
      s_type: 'COD',
      csrfmiddlewaretoken: this.state.csrftoken,
      cartitem_id: "1",
      quantity:  "1",
      add_or_edit: "add",
    } 
    console.log(obj); 
     
        $.ajax({
            type:"POST",
            url:"/cart/addtocart/",
            data: obj,
            
            success: function(data){
            var msg = data.message.msg,
              _ = data.cartitem;
            console.log(_)
            var widgetTextstart = $('#widget_text_start').text();
            var widgetSize = $('#widget_size').text();
            var widgetExist = $('#widget_exist').text();
            var widgetTextend = $('#widget_text_end').text();
            var widgetTextin = $('#widget_text_in').text();
            var widget_size = $('.size_active').text();
            var cod_cost = $('#the_cod_cost').text();
            var price  = $('#the_price').text();

            if(_.color2 == undefined) {
              var coltext = _.color,
              pattext = _.pattern;
            } else {
              var coltext = _.color +' / '+_.color2,
              pattext = _.pattern +' / '+_.pattern2;

              }

         $("#updatecart").animate({
                  height:'200px'
                });

          $("#updatecart").html( '<hr> <li> <strong> '+ widgetTextstart+ ' </strong></li><hr><li>'+_.article +' </li>' +
             '<li> - '+ widget_size +' </li>' +
                     '<li> '+ coltext +', '+ pattext +' </li>' +
            
             ' <div>').fadeIn();

          $("#updatecart").delay(6000).fadeOut(3000).animate({
                      height:'0px'
                    });

              var old_quantity = $("#widget_quantity").text();
              var new_quantity = parseInt(_.quantity) + parseInt(old_quantity);
              $('#widget_quantity').text(new_quantity);

              var old_price = $("#widget_total").text();
              var new_price = parseInt(price) + parseInt(cod_cost) + parseInt(old_price);
              $('#widget_total').text(new_price);
                    $(".button_has_item").css({borderStyle: "groove", borderWidth: "5px", borderColor: "#ff0000"}) 

          }
         });
        

  }
  getWords() {
    var words = []
    words.colorsandpatterns = $("#colorsandpatterns").text()
    console.log("w", words.colorsandpatterns); 
    this.setState({words: words});
  }

  filterPcByQuality(json) {
    var updatedList = json;
    var st = this.state; 
    updatedList = updatedList.filter(function(item){   
      if (item.quality_name == 'Silkestrikå') {
        var ret = item;   
        return ret
      }
    });
    return updatedList;
  }

  MenuClick(type, id, title, area, e, v, b) {
 
    if (type== "category" || type== "category0") {

      if (type== "category") {
        this.filterByCategory(title);
      } else {
        this.filterByCategory2(title);
      }
      
      this.setState({   showCod: false,
                        showRea: false,
                        showCategory: true
                    });
    } else if (type== "rea") {
       this.setState({   showCod: false,
                         showRea: true,
                         showCategory: false
                    });
    } else if (type== "cod") {
       this.setState({   showCod: true,
                         showRea: false,
                         showCategory: false
                    });
    } else {
      console.log("show", type) 
      // TODO add errors, comments and dialogs etc
    }  
  }
  
  checkAllCod() {
    if (this.state.artok && this.state.patterncolorok  ) {
      this.setState({ codokall: true });

    }
  }

  chooseCod(area, a=null, b=null, c=null, d=null,  e=null, f=null) {
    console.log(area, a, b, c, d, e, f); 
    if (area == 'article') {
      $("#article_name").text(b)
         var updatedart = this.state.singleCod; 
         updatedart.article = b; 
         updatedart.sku = a; 
         updatedart.img = c; 
         updatedart.price = d;
         updatedart.cod_cost = f; 
         $(".bs-art-success ").remove(); 
         $("#"+d+" > div > a > div > p.card-title").prepend("<span class='badge bs-art-success badge-success'>+</span>");  
         this.checkAllCod(); 

         
    fetch('/products/codartjsonsingle/'+a+"/")
      //fetch('./static/json/prod.json')
  
      .then(response => response.json())
      .then(json => {
         if(json.single.category == "Barn") {
            var sizebase = 25; 
         } else {
            var sizebase = 1; 
         }

         this.setState({  singleCod: updatedart, 
                          artok: true, 
                          sizes:json.sizes,
                          sizebase: sizebase
                });
        });

    } else {
       var updatedart = this.state.singleCod; 
         updatedart.pattern_name = c; 
         updatedart.pattern_id = b; 
         updatedart.color_name = d; 
         updatedart.color_id = a; 
         updatedart.pcimg = e;
         this.setState({  singleCod: updatedart, 
                          patterncolorok: true
                });
         this.checkAllCod(); 
         $("#pattern_name").text(c+", "+d);
         $(".bs-pc-success").remove(); 
         $("#"+f+" > div > a > div > p").prepend("<span class='badge bs-pc-success badge-success'>+</span>");  
    }
  }

  filterResetList(event){
    this.setState({products: this.state.allProducts});
    document.getElementById('textsearch').value = '';  
  }

  addSizeToArt(size, id) {
    console.dir(size)
    console.log("id: ", id);


    var updatedart = this.state.singleCod; 
    updatedart.size = size; 
    updatedart.size_id = id; 
    this.setState({ singleCod: updatedart });
    $(".sizeitem").removeClass("active");
    $("#"+size).addClass("active");
    this.checkAllCod(); 
  }

 filterByPattern(event, pattern){
    var updatedList = this.state.allProducts;
    var st = this.state; 
    updatedList = updatedList.filter(function(item){   
      var ret = $.inArray(item.pattern, st.defPatterns[pattern].family) !== -1;
      return ret
    });
    this.setState({products: updatedList});
  }

  filterByCategory(category){
    var updatedList = this.state.fullProducts;
    console.log(updatedList); 
    var st = this.state; 
    updatedList = updatedList.filter(function(item){   
      if (item.category == category) {
        var ret = item; 
      console.log(item.category, category); 
      return ret
      }
      
    });
    this.setState({fullProductsFiltered: updatedList});
  }

  filterByCategory2(category0){
    console.log(category0); 
    var updatedList = this.state.variations;
    var st = this.state; 
    updatedList = updatedList.filter(function(item){   
      if (item.category == category0) {
        console.log(item.category); 
        var ret = item; 
        return ret;
      }
      
    });
    this.setState({fullProductsFiltered: updatedList});
  }

 filterBySize(event){
    var updatedList = this.state.allProducts;
    updatedList = updatedList.filter(function(item){   
      return item.size.search(
        event.target.id ) !== -1;

    });
    this.setState({products: updatedList});
  }

  filterByPage(event, page){
    var updatedList = this.state.allProducts;
    var the_page = event.target.id;
    var page_index = the_page * 40; 
    var index = 0; 
    updatedList = updatedList.filter(function(item){   
      if (index < page_index && index > page_index-40) {
        return item
      } 
      index++; 
    });
    this.setState({products: updatedList});
  }



 filterByColor(event, color){
    var updatedList = this.state.allProducts;
    var st = this.state;
    var list = []
    updatedList = updatedList.filter(function(item){ 
      var ret = $.inArray(item.color, st.defColors[color].family) !== -1;
      return ret
    });
    
    this.setState({products: updatedList});
  }
  
  createPages(products) {
    var temp_patterns = [];
    var shown = 40; 
    var _pages = Math.ceil(products.length / shown); 
    var pageArray = [];
    for (var i = 1; i < _pages+1; i++) {
        pageArray.push({
          "page": i,
        });
    }
    this.setState({vPages: pageArray});     
  }
  
  createPatternList(products) {
  	var temp_patterns = []
  	$.each(products, function(index, value) {
	    if ($.inArray(value.pattern, temp_patterns) === -1) {
	        temp_patterns.push(value.pattern);
	    }
	});
  
	this.setState({patternsX: temp_patterns});
  }

  createColorList(products) {
    var temp_colors = []
    $.each(products, function(index, value) {
      if ($.inArray(value.color, temp_colors) === -1) {
          temp_colors.push(value.color);
      }
  });

  this.setState({allColors: temp_colors});
  }

  filterSearchList(event){
    var updatedList = this.state.allProducts;
    updatedList = updatedList.filter(function(item){
      return item.article.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({products: updatedList});
  }

  render() {
    return (
       <div className="container"> 
      
      <ShopMenu   items = { this.state.shopMenu } 
                  MenuClick = { this.MenuClick } />
      <hr/>
    {this.state.showCod && 
      <div>

      <CodMenu />
      <div className="tab-content" id="myTabContent">
        <CodIntro />
        <ArtList arts={this.state.articles}  chooseCod={this.chooseCod} /> 
        <ColorPatternList copa={this.state.patternsandcolors} chooseCod={this.chooseCod} />
        <Order orderitem={this.state.singleCod} sizes={this.state.sizes} patterncolorok={this.state.patterncolorok} artok={this.state.artok}
         addToShoppingCart={this.addToShoppingCart} addSizeToArt={this.addSizeToArt} codokall={this.state.codokall} sizebase={this.state.sizebase}/>
        }
      </div>

      </div>} 
      {this.state.showRea && <div>
        <nav aria-label="navigation">
        <ul className="pagination pagination-sm"> 
          <ColorList  items = {this.state.defColors}
                      filterByColor = {this.filterByColor}
          /> 
          <div className="menupadding"> </div>   
          <PatternList  patterns={this.state.defPatterns}
                        filterByPattern={this.filterByPattern}
          /> 
          <div className="menupadding"> </div> 
           <SizeList    sizes={this.state.defSizes}
                        filterBySize={this.filterBySize}
          /> 
          <div className="menupadding"> </div> 
          
          <input type="text" placeholder="Filter by article name" id="textsearch" onChange={this.filterSearchList}/>
        </ul>
        </nav>

        <hr/>
        <ProductList products={this.state.products} />   
        </div>}
        {this.state.showCategory && <div> 
  
          <FullProductList products={this.state.fullProductsFiltered} /> 
          </div>}
       
    </div>
    );
  }
}

