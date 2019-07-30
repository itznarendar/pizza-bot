'use strict' ;

module . exports  =  class  HandlePizzaOrder  {

    // Constructor. Set the parameters that you need or can specify for this skill. 
    Constructor ()  { 
        This . Required_parameter  =  { 
            Pizza :  { 
                Message_to_confirm :  { 
                    Type :  "Template" , 
                    AltText :  "ordering pizza What usual Margherita, please choose from Marinara?." , 
                    Template :  { 
                        Type :  "Buttons " , 
                        text :  " Do you know the pizza you order? " , 
                        actions :  [ 
                            { type : " postback " , label : " Margherita ", data : "Margherita" }, 
                            { type : "postback" , label : "Marinara" , data : "Marinara" } 
                        ] 
                    } 
                } 
            }, 
            size :  { 
                message_to_confirm :  { 
                    type :  "template" , 
                    altText :  "How about the size? Please choose from S, M, L. " , 
                    template :  { 
                        type :  " buttons " , 
                        text :  " How is the size? " ,
                        actions :  [
                            { type : "postback" , label : "S" , data : "S" }, 
                            { type : "postback" , label : "M" , data : "M" }, 
                            { type : "postback" , label : " L " , data : " L " } 
                        ] 
                    } 
                } 
            }, 
            address :  { 
                message_to_confirm :  { 
                    type :  "text " ,
                    text :  "Can you give us the address of the delivery address?" 
                } 
            , 
            name :  { 
                message_to_confirm :  { 
                    type :  "text" , 
                    text :  "Can you give us your name last?" 
                } 
            } 
        }; 
    }

    // Describe the processing to be performed when all parameters are complete. 
    Async  Finish ( Bot ,  Event ,  Context ) { 
        Let  Message  =  { 
            Text :  ` $ { Context . Confirmed . Name } like, Thank you for your order! {$ Context . Confirmed . Pizza } of $ { Context . Confirmed . Size } size within the specification of the 30-minute $ { Context . Confirmed . Address }We will deliver to you. ` 
        };

        the await  bot . reply ( message ); 
    } 
};