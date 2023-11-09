function ins(num) {
  let string = document.form.textview.value;
  let  l = string[string.length -1];
  if (string.length < 30) 
  {
    if (!isNaN(l) || l == null || isNaN(num)) 
    {
        
        document.form.textview.value= string + num;
    } 
    else
     if (num != l) {
            document.form.textview.value= string.replace(l , num);
        
    }
  }
}