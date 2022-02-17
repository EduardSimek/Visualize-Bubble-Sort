function draw_lines()
{
  
  for (let a = 0; a<numeric_array.length; a++)
  {
    stroke(255,255,0)
    strokeWeight(2 * number)
    line(a, height, a, height - numeric_array[a]);

  }
    
}

function output_informations()
{
  print("Bubble sorting algoritm just finished.");
      noLoop();
      let time_processed = round(performance.now() - elapsed_time) / const1;
      let time_processed_in_miliseconds = time_processed/const1;
      
     console.log(`The length of the numeric array was ${numeric_array.length} elements and the time, during which the bubble sorting continued was approximately ${time_processed} seconds, which is ${time_processed_in_miliseconds} miliseconds.` )
}

function swap_the_values(numeric_array, first_value, second_value)
{
  
  let temp = numeric_array[first_value];
  numeric_array[first_value] = numeric_array[second_value]
  numeric_array[second_value] = temp;

  
}