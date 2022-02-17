let background_color = 0;
let numeric_array = [];
let number = 1;
let elapsed_time;
let const1 = 1000;
let Is_sorted = true;
let first_number = 0, second_number = 0;
let value;
let button_was_clicked = true;



function setup ()
{
  createCanvas(windowWidth, windowHeight);
  numeric_array = new Array (width);
  elapsed_time = performance.now();
  
  for (let i = 0; i<numeric_array.length; i++)
    {
      numeric_array[i] = random(height);  
    }
  
  button = createButton('Change the sorting order');
  button.position(0, 0);
  button.mousePressed(changeBG);
  
}

function changeBG() {
  value = 255;
  background(value);
}




function BubbleSort()
{
  if (first_number<numeric_array.length)
  

    {
      for (let second_number = 0; second_number < numeric_array.length - first_number - number; second_number++)
        {
          let first_value = numeric_array[second_number];
          let second_value = numeric_array[second_number + number];
          
          if (first_value>second_value)
            {
              swap_the_values(numeric_array, second_number, second_number + number);
              console.log("Swaping in descesing order")
            }
            
          /*
          if (first_value<second_value)
            {
              swap_the_values(numeric_array, second_number, second_number + number);
              console.log("Swaping in ascending order")
            }
            */
                   
        }
      
      
draw_lines();
                
    }
  else
    {
       output_informations();
    }
       first_number = first_number + number;
  
  
}

function draw ()
{
  background(background_color);
  
  if (Is_sorted)
    {
      BubbleSort();
    }
 
    
}