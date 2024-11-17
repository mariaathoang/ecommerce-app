import variety_ice_cream from './variety_ice_cream.png'
import logo from './logo.png'
import search_icon from './search_icon.png'
import profile_icon from './profile_icon.png'
import cart_icon from './cart_icon.png'
import menu_icon from './menu_icon.png'
import close_icon from './close_icon.png'
import power_cap from './power_cap.png'
import yomamttae from './yomamttae.png'
import red_bean from './red_bean.png'
import watermelon from './watermelon.png'
import bb_big from './bb_big.png'
import melona from './melona.png'
import melona_mango from './melona_mango.png'
import sweet_corn from './sweet_corn.png'
import fanfare from './fanfare.png'
import cone from './cone.png'
import encho from './encho.png'
import jeju from './jeju.png'
import power_cap_watermelon from './power_cap_watermelon.png'
import exchange_icon from './exchange_icon.png'
import quality_icon from './quality_icon.png'
import support_icon from './support_icon.png'
import dropdown_icon from './dropdown_icon.png'
import trash_icon from './trash_icon.png'


export const assets = {
    variety_ice_cream,
    logo,
    search_icon,
    profile_icon,
    trash_icon,
    cart_icon,
    menu_icon,
    close_icon,
    exchange_icon,
    quality_icon,
    support_icon,
    dropdown_icon,
    power_cap,
    red_bean,
    watermelon,
    bb_big,
    melona,
    melona_mango,
    cone,
    power_cap_watermelon,
    sweet_corn,
    fanfare,
    encho,
    jeju,

}

export const products = [
    {
        _id: "1",
        name: "Power Cap Soda",
        description: "A refreshing tube of soda ice to cool you down during the heat of summer!",
        price: 39,
        image: [power_cap],
        category: "Cap",
        bestseller: false

    },
    {
        _id: "2",
        name: "Frozen Strawberry Yogurt",
        description: "For when you're craving something creamy, sweet, and delicious!",
        price: 39,
        image: [yomamttae],
        category: "Ice",
        bestseller: false
    },
    {
        _id: "3",
        name: "Ice Sandwich with Red Bean Paste",
        description: "This classic Korean ice cream is shaped like a fish filled with vanilla and red bean paste! (Don't worry, there is no fish taste!)",
        price: 49,
        image: [red_bean],
        category: "Wafer",
        bestseller: false
    },
    {
        _id: "4",
        name: "Watermelon Ice Cream",
        description: "Fruity, sweet, and no, those are not real seeds.",
        price: 39,
        image: [watermelon],
        category: "Ice",
        bestseller: false
    },
    {
        _id: "5",
        name: "Red Bean Ice Cream",
        description: "This ice cream contains 20% of red beans! How neat!",
        price: 39,
        image: [bb_big],
        category: "Ice",
        bestseller: false
    },
    {
        _id: "6",
        name: "Melon Ice Cream",
        description: "One of our bestsellers consistently ranked as the #1 ice cream in Korea!",
        price: 39,
        image: [melona],
        category: "Ice",
        bestseller: true
    },
    {
        _id: "7",
        name: "Sweet Corn Ice Cream",
        description: "Who knew that sweet corn could be a pretty good ice cream?",
        price: 49,
        image: [sweet_corn],
        category: "Wafer",
        bestseller: true
    },
    {
        _id: "8",
        name: "Fanfare Milk Chocolate",
        description: "Rich and creamy milk chocolate to put a smile on your face!",
        price: 39,
        image: [fanfare],
        category: "Cone",
        bestseller: true
    },
    {
        _id: "9",
        name: "Power Cap Watermelon",
        description: "Rich and creamy milk chocolate to put a smile on your face!",
        price: 39,
        image: [power_cap_watermelon],
        category: "Cap",
        bestseller: true
    },
    {
        _id: "10",
        name: "Vanilla Ice Cream Cone",
        description: "This popular ice cream cone has been sold over 2,700,000,000 times!",
        price: 49,
        image: [cone],
        category: "Cone",
        bestseller: true
    },
    {
        _id: "11",
        name: "Mango Ice Cream",
        description: "Creamy and fruity mango ice cream making you crave more with each bite!",
        price: 39,
        image: [melona_mango],
        category: "Ice",
        bestseller: false
    },
    {
        _id: "12",
        name: "Chocolate Bar",
        description: "A crunchy chocolate coating with rich and smooth chocolate fudge inside!",
        price: 39,
        image: [encho],
        category: "Ice",
        bestseller: false
    },
    {
        _id: "13",
        name: "Jeju Tangerine Ice Cream",
        description: "A refreshing ice cream made from tangerines grown on Jeju Island!",
        price: 39,
        image: [jeju],
        category: "Ice",
        bestseller: false
    },
    
    

]