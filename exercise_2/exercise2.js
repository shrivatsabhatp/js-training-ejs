/*
Model a person using javascript object. It can have properties like firstName, lastName, age..
*/
let shrivatsa = {
    firstName: "Shrivatsa",
    lastName: "Bhat",
    age: 22,
    address:{
        addressLocality: "Polali",
        addressRegion: "Dakshina Kannada",
        state: "Karnatka",
        postalCode: 574219
    },
    email: "shrivatsa@gmail.com",
    jobTitle: "Trainee Software Engineer",
    birthDate: "23-06-23",
    gender: "male",
    telephone:"+91 90000000",
    socialMediaAccounts: [
        "www.facebook.com/vatsa",
        "www.linkedin.com/vatsa",
        "www.twitter.com/vatsa"
    ],
    maritalStatus: "single",
    bloodGroup: "O+"
};
/*
Model bank account as a javascript object.
*/
let canra_Bank = {
    id: "1234567890",
    bankName: "canara",
    bankIFSC: "CAN003",
    bankAddress: {
        addressLocality: "Santhekatte",
        addressRegion: "Udupi",
        state: "Karnatka",
        postalCode: 576105
    },
    accountNumber: "",
    accountName: "P Shrivatsa Bhat",
    accountHolderAddress: {
        addressLocality: "Polali",
        addressRegion: "Dakshina Kannada",
        state: "Karnataka",
        postalCode: 574219
    }
};

/*
Model state of your favorite computer game as a javascript object.
*/
let favGame = {
    name: "Need for Speed",
    studio: "Ghost",
    genre: "Racing",
    platforms: [
        "PC",
        "PlayStation 4",
        "Xbox One"
    ],
    releaseYear: 2016,
    releaseMonthl: 03,
    releaseDateL: 17,
    cost: 999.00
}
/*
Model shopping list as an object. Each item in the list is also an object.
*/

let shoppingList = {
    groceries: [
        "Rice",
        "Coconut Oil",
        "Nandini Pure Ghee",
        "TATA Salt"
    ],
    electronics: [
        "Apple iPhone 11(128GB)",
        "HP pavilion 10th Gen Intel Core i5",
        "mivi ear phone"
    ],
    furniture: [
        "Key Holder with Wall Decor Shelf",
        "Comfortable Plastic Arm Chair"
    ]
}

/*
Model a credit card as a javascript object.
*/
let credit_card = {
    id: "card_1HTGFC2eZvKYlo2CLljFw0En",
    holder_name: "Shrivatsa Bhat P",
    address_city: "Magalore",
    address_country: "India",
    address_line1: "Polali",
    address_line2: null,
    address_state: "Karnataka",
    address_zip: 574219,
    address_zip_check: null,
    brand: "Visa",
    country: "IN",
    exp_month: 8,
    exp_year: 2021,
    fingerprint: "Xt5EWLLDS7FJjR1c",
    funding: "credit",
}

/*
Model a car as a javascript object. 
*/
let nexon = {
    manufacturer: "Tata Motors",
    prodution: "2017",
    assembly: [
        "Ranjangaon", 
        "Pune"
    ],
    price: "7.00 Lacks Onwards",
    mileage: "16 to 22.1kmpl",
    engine: "1199 to 1497cc",
    tansmission: [
        "Manual", 
        "AMT"
    ],
    fuelType: [
        "Petrol", 
        "Diesel"
    ],
    seatingCapacity: 5,
    varients: [
        "Nexon XE", 
        "Nexon XM",
        "Nexon XM(S)",
        "Nexon XMA",
        "Nexon XE Diesel",
        "Nexon XZ Diesel"
    ],
};

/*
Model a file in computer as javascript object. 
*/
let js_training_ejs = {
    folder: {
        exercise1: [
            "bottleOfWater.js",
            "checkFermat.js",
            "oddSum.js",
            "power.js",
            "rightJustify.js",
            "test.js"
        ],
        excercise2: [
            "excercise2"
        ],
        eloquentjavascript: {
            chapter1: [],
            chapter2: [
                "ChessBoard.js",
                "FizzBuzz.js",
                "LoopingATriangle.js"
            ],
            chapter3: [
                "square.js",
                "recursion.js",
                "power.js",
                "minus.js",
                "minimum.js",
                "local-binding.js",
                "beanCounting.js"
            ]
        },
        sicp: [
            "Exercise_1.1",
            "Exercise_1.2",
            "Exercise_1.3",
            "Exercise_1.4",
            "Exercise_1.5",
            "Exercise_1.7",
            "Exercise_1.8",
        ]
    },
    file: [
        ".gitignore",
        "README.md"
    ]
}

/*
 Model a recipe of a dish as an object
 */
let pizza = {
    ingredients: [
        "yeast",
        "water",
        "flour",
        "oil",
        "Salt",
        "Sugar",
        "Cornmeal"
    ]
}

 /*
 Model a book as an object
 */
let Eloquent_Javascript = {
    description: "A Modern Introduction to Programming",
    author: "Marijn Haverbeke",
    edition: 3,
    contents: {
        Introduction: null,
        Part1: [
            "values",
            "types",
            "Operators"
        ],
        ProgramStructure: null,
        functions: null,
        Part2: [
            "Javascript and Browser",
            "The Document Object Model",
            "Handling Events",
            "HTTP and Forms"
        ],
        Part3: [
            "Node.js",
            "Project: Skill-Sharing Website"
        ]
    },
    license: "MIT license"
}

 /*
 Model a restaurant menu as an object
 */
let menu = {
    breakfast: {
        southIndianBreakfast: [
            "Wada Samber",
            "Uppittu",
            "Idli Sambar", 
            "Paper Dosa", 
            "Masala Dosa", 
            "Masala Dosa"
        ],
        northIndianBreakfast: [
            "Dal Fry",
            "Gobi Butter Masala",
            "Channa Masala",
            "Alu Gobi",
            "Dal Makhani"
        ]
    },
    thali: [
        "regular thali",
        "speacial thali",
        "curd rice",
    ],
    soups: [
        "Tomato Soup",
        "Veg Clear Soup",
        "Palak Soup",
        "Manchow Soup"
    ],
    piza: [
        "Veg Pizza",
        "Veg Cheese Pizza",
        "Corn Pizza",
        "Panner Pizza"
    ]
}

/* for each of the above draw object diagram with name binding being 
    the tentacle to actual values of the properties.
    You can use https://excalidraw.com
*/
