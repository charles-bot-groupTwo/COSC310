var productType = 0;
var budgetType = 0;
var count = 0;
var budget
function getBotResponse(input){
    // type of product
    if(count == 0){
        count++;
        if(input == "watch"){
            productType = 1;
            
            return "you chose watch, what is your budget?";
        }else if (input == "Computer"){
            productType = 2;
            return "you chose computer, what is your budget?";
        }else if (input == "phone" || input == "phones" || input == "iphone"){
            productType = 3;

            return "you chose phone, what is your budget?";
        }else if (input == "tablet" || input == "ipad"){
            productType = 4;
            
            return "you chose tablet, what is your budget?";
        }
    }
    // getting budget 
    if (count == 1){
        var budget = parseInt(input);
        count ++;
        
        if (productType == 1){
            if(budget < 300){
                count = 1;
                return "sorry nothing fits your budget, try again";
            }else if (budget >= 300 && budget < 700){
                budgetType = 1;
                return "Got it! what size would you prefer (x-small, small, medium, large)?";
            }
        }
        if (productType == 2){
            if(budget < 100){
                count = 1;
                return "sorry nothing fits your budget, try again";
            }
        }
        if (productType == 3){
            if(budget < 700){
                count = 1;
                return "sorry nothing fits your budget, try again";
            }else if(budget >= 700 && budget < 900){
                budgetType = 1;
                return "Got it! what size would you prefer (small, medium, large)?";
            }else if (budget >= 900 && budget < 1000){
                budgetType = 2;
                return "Got it! what size would you prefer (small, medium, large)?";
            }else if (budget >= 1000 && budget < 1300){
                budgetType = 3;
                return "Got it! what size would you prefer (x-small, small, medium, large)?";
            }else if (budget >= 1300 ){
                budgetType = 4;
                return "Got it! what size would you prefer (x-small, small, medium, large)?";
            }

        }
        if (productType == 4){
            if(budget < 450){
                count = 1;
                return "sorry nothing fits your budget, try again";
            }else if(budget >= 450 && budget < 680){
                budgetType = 1;
                return "Got it! what size would you prefer (small or large)?";
            }else if(budget >= 680 && budget < 1100){
                budgetType = 2;
                return "Got it! what size would you prefer (small or large)?";
            }else if (budget >=1100 ){

            }
        }
    }
    // size and recomendation 
    if(count == 2){
        
        // recomendations for phones
        if(productType == 3 && budgetType == 1){
            if(input == "small"){
                return "The IPhone SE is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
            }else if(input == "medium"){
                return "The IPhone 13 mini is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
            }else if(input == "large"){
                return "The IPhone 12 is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
            }
        }else if (productType == 3 && budgetType == 2){
            if(input == "small"){
                return "The IPhone SE is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
            }else if(input == "medium"){
                return "The IPhone 13 mini is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
            }else if(input == "large"){
                return "The IPhone 12 is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
            }
        }else if(productType == 3 && budgetType == 3){
            if (input == "x-small"){
                return "The IPhone SE is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
            }else if(input == "small"){
                return "The IPhone 13 mini is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
            }else if(input == "medium"){
                return "The IPhone 12, IPhone 13, and IPhone 14 fit this screen size but the Phones cost $850, $1000, $1100 each respectively. A specification comparison can be made on the Apple website to list every one of their differences.";
            }else if(input == "large"){
                return "The IPhone 14 plus is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
            }
        }else if(productType == 3 && budgetType == 4){
            if (input == "x-small"){
                return "The IPhone SE is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
            }else if(input == "small"){
                return "The IPhone 13 mini is the device for you! It fits the information you have provided, and more information about this device can be found at the apple website.";
            }else if(input == "medium"){
                return "The IPhone 12, IPhone 13, and IPhone 14 fit this screen size but the Phones cost $850, $1000, $1100 each respectively. A specification comparison can be made on the Apple website to list every one of their differences.";
            }else if(input == "large"){
                return " Both the IPhone 14 and IPhone 14 Pro Max fit this screen size but the IPhone 14 Pro Max is $300 more than the IPhone 14 Plus. A specification comparison can be made on the Apple website to list every one of their differences.";
            }
        }

        // recommendations for tablets
        if(productType == 4 && budgetType == 1){
            return 
        }

    }
}