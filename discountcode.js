//booleans datatype

let hasDiscountCode = true;

function processOrder()
{
    if(hasDiscountCode)
    {
        console.log('Discount applied to food order');
    }
    else
    {
        console.log('No discount applied');
    }
}
processOrder()


let hasDiscountOffer = true;

function orderProcess()
{
    if(hasDiscountOffer)
    {
        console.log('Discount applied to food order');
        hasDiscountOffer = false;
    }
    else
    {
        console.log('No Discount applied');
    }
}
orderProcess()
orderProcess()