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

export const assets = {
    variety_ice_cream,
    logo,
    search_icon,
    profile_icon,
    cart_icon,
    menu_icon,
    close_icon,
    power_cap,
    red_bean,
    watermelon,
    bb_big
}

export const products = [
    {
        _id: "1",
        name: "Power Cap Ice Tube",
        description: "A refreshing tube of soda ice to cool you down during the heat of summer!",
        price: 39,
        image: [power_cap],
        category: "Cap",

    },
    {
        _id: "2",
        name: "Frozen Strawberry Yogurt",
        description: "For when you're craving something creamy, sweet, and delicious!",
        price: 39,
        image: [yomamttae],
        category: "Yogurt",
    },
    {
        _id: "3",
        name: "Ice Sandwich with Red Bean Paste",
        description: "This classic Korean ice cream is shaped like a fish filled with vanilla and red bean paste! (Don't worry, there is no fish taste!)",
        price: 49,
        image: [red_bean],
        category: "Wafer",
    },
    {
        _id: "4",
        name: "Watermelon Ice Cream",
        description: "Fruity, sweet, and no, those are not real seeds.",
        price: 39,
        image: [watermelon],
        category: "Ice",
    },
    {
        _id: "5",
        name: "Red Bean Ice Cream",
        description: "This ice cream contains 20% of red beans! How neat!",
        price: 39,
        image: [bb_big],
        category: "Ice",
    },
    

]