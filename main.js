/* 

    Codesanbox Collab Project Link: https://codesandbox.io/live/0c80d7816b8 

*/ 

/* 
  The owners of Joey's Pizza want your team to develop some software
  that allows employees to build customer pizzas with 2 toppings, at the
  right size, get it paid for, bake it, and then output a message that
  it is being delivered.

  The delivery message should only happen if the pizza has been paid for.




  Goals of the pizza project:
  ---------------------------
    1. Function for adding the toppings to the pizza
    2. Function that bakes a pizza
    3. Function that adds `size` property to pizza
    4. Function to mark the pizza as being paid.
    5. Function that logs a "Your {pizza details} is being delivered".
          If pizza is not paid for yet, display "Please pay us first"
    6. Each function copies the input object and returns
          modified copy


Algorithm: 

- need variables 
- similar to "adding car chassi" exercise 
- clarification for 6.: it will take the input, modify it, and returning that.
don't need a new function. 

topping options: pineapple, pepperoni, mushroom 

*/

// CODE: 1) Function for adding the toppings to the pizza & creates pizza

const getPizzaToppings = (toppingOne, toppingTwo) => {
    const pizza = {
      topping: toppingOne,
      secondTopping: toppingTwo
    };
    return pizza;
  };
  
  // CODE: 3) Function that adds `size` property to pizza
  
  const getPizzaSize = (pizza, size) => {
    pizza.size = size;
    return pizza;
  };
  
  // CODE: 2) Function that bakes a pizza
  
  const bakePizza = (pizza) => {
    if (pizza.topping && pizza.size) {
      pizza.bake = true;
    }
    return pizza;
  };
  
  // CODE: 4) Function to mark the pizza as being paid.
  
  // We will continue working on the collab project w/ Devin on Wednesday
  
  const payForPizza = (pizza) => {
    pizza.paid = true;
  
    return pizza;
  };
  
  /* 
  
  CODE: 5) Function that logs a "Your {pizza details} is being delivered".
            If pizza is not paid for yet, display "Please pay us first" 
            
  */
  
  const message = (pizza) => {
    if (pizza.paid === true) {
      console.log(`Your ${pizza.size} ${pizza.topping} and ${pizza.secondTopping} 
      pizza is being delivered.`);
    } else {
      console.log(`Please pay us first.`);
    }
  };
  
  let pizzaToppings = getPizzaToppings("mushroom", "pepperoni");
  let pizzaSize = getPizzaSize(pizzaToppings, "extra large");
  let startBake = bakePizza(pizzaSize);
  let payment = payForPizza(startBake);

  
  message(payment);
  
  // OR use return in the function instead of console.log
  
  /* 
  
  const message = (pizza) => {
      if (pizza.paid === true) {
        return `Your ${pizza.size} ${pizza.topping} and ${pizza.secondTopping} 
        pizza is being delivered.` 
      } else {
        return `Please pay us first.` 
      }
    };
    
    let pizzaToppings = getPizzaToppings("mushroom", "pepperoni");
    let pizzaSize = getPizzaSize(pizzaToppings, "extra large");
    let startBake = bakePizza(pizzaSize);
    let payment = payForPizza(startBake);
    
  
  let deliveryMessage = message(payment)
  console.log(deliveryMessage)
  
  
  */
  
