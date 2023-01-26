const chickenmenuamount = 2; // Touch me if you want
const fishmenuamount = 4; // Touch me if you want
const veganmenuamount = 3; // Touch me if you want

const chickenmenuprice = 10.35; // Don't touch me
const fishmenuprice = 12.40; // Don't touch me
const veganmenuprice = 8.15; // Don't touch me
const desertpercent = 20; // Don't touch me
const deliveryprice = 2.50; // Don't touch me

function PriceCalculator() {
    if (Number(chickenmenuamount) >= 1 && Number(chickenmenuamount) <= 99) {
        if (Number(fishmenuamount) >= 1 && Number(fishmenuamount) <= 99) {
            if (Number(veganmenuamount) >= 1 && Number(veganmenuamount) <= 99) {
                const chickenmenu_finalprice = (chickenmenuamount * chickenmenuprice);
                const fishmenu_finalprice = (fishmenuamount * fishmenuprice);
                const veganmenu_finalprice = (veganmenuamount * veganmenuprice);
                const allmenus_price = (chickenmenu_finalprice + fishmenu_finalprice + veganmenu_finalprice);
                const desert_finalprice = (allmenus_price * 0.20);
                const final_price = (allmenus_price + desert_finalprice + deliveryprice);
                return final_price;
            };
        };
    };
};
console.log(PriceCalculator());