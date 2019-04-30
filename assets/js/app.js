var bill = 0;
var service = "";
var quality = "";
var text = "";

getTotals = (event) =>{
  event.preventDefault();
  const selected = document.getElementById('placeType')
  text = selected.options[selected.selectedIndex].text;

  var radios = document.getElementsByName('serviceQuality')
  for (var i = 0, length = radios.length; i < length; i++){
    if (radios[i].checked){
      quality = radios[i].value;
      break;
    }
  }
  bill = document.getElementById('bill').value;
  service = document.getElementById('placeType').value;
  document.getElementById("form").style.display = 'none'
  console.log(bill, service, quality, text);
  switch (service) {
    case 'bar':
      bar(bill, quality);
      break;
    case 'movers':
      movers(bill, quality);
      break;
    case 'concierge':
      concierge(bill, quality);
      break;
    case 'pizza':
      pizza(bill, quality);
      break;
    case 'no':
      no(bill, quality);
      break;
    case 'officiant':
      officiant(bill, quality);
      break;
    case 'cabs':
      cabs(bill, quality);
      break;
    case 'coffee':
      coffee(bill, quality);
      break;
    case 'one':
      one(bill, quality);
      break;
    case 'two':
      two(bill, quality);
      break;
    case 'three':
      three(bill, quality);
      break;
    case 'four':
      four(bill, quality);
      break;
    default:
      four(bill, quality);
  }
}

bar=(amount, qLevel)=>{
  console.log("this is the bar function");
  var total = parseFloat(amount);
  if (qLevel !== "great") {
    total += 1
  } else {
    total += 2
  }
  setTipAmountIndividual(amount, total)
}

movers=(amount, qLevel)=>{
  console.log("this is the movers function");
    var total = parseFloat(amount);
  if (qLevel == "poor") {
    total += 0
  }else if(qLevel =="good"){
    total += 5
  } else {
    total += 7
  }
  setTipAmountIndividual(amount, total)
}

concierge=(amount, qLevel)=>{
  var total = parseFloat(amount);
  if (qLevel == "great") {
    total += 15
  }
  setTipAmount(amount, total)
}

pizza=(amount, qLevel)=>{
  var total = parseFloat(amount);
  if (qLevel == "great") {
    if ((amount*.2) > 4) {
      total+= (amount*.2)
    } else {
      total+= 4
    }
  } else if(qLevel == "good") {
    if ((amount*.15) > 2) {
      total+= (amount*.15)
    } else {
      total+= 2
    }
  } else{
    if ((amount*.1) > 2) {
      total+= (amount*.1)
    } else {
      total+= 2
    }
  }
  setTipAmount(amount, total)
}

no=(amount, qLevel)=>{
  var total = parseFloat(amount);
  setTipAmount(amount, total)
}

officiant=(amount, qLevel)=>{
  var total = parseFloat(amount);
  if (qLevel == "great") {
    total += 100
  } else if(qLevel == "good") {
    total += 50
  } else{
    total += 20
  }
  setTipAmount(amount, total)
}

cabs=(amount, qLevel)=>{
  var total = parseFloat(amount);
  if (qLevel == "great") {
    total += (amount*.15)
  } else if(qLevel == "good") {
    total += (amount*.1)
  } else{
    total += (amount*.0)
  }
  setTipAmount(amount, total)
}

coffee=(amount, qLevel)=>{
  console.log("this is the coffee function");
  var total = parseFloat(amount);
  if (qLevel == "great") {
    total += (amount*.15)
  } else if(qLevel == "good") {
    total += (amount*.1)
  } else{
    total += (amount*.05)
  }
  setTipAmount(amount, total)
}

one=(amount, qLevel)=>{
  console.log("this is the one function");
  var total = parseFloat(amount);
  if (qLevel == "great") {
    total += 10
  } else if(qLevel == "good") {
    total += 5
  } else{
    total += 2
  }
  setTipAmount(amount, total)
}

two=(amount, qLevel)=>{
  console.log("this is the two function");
  var total = parseFloat(amount);
  if (qLevel == "great") {
    total += (amount*.1)
  } else if(qLevel == "good") {
    total += (amount*.05)
  } else{
    total += (amount*.0)
  }
  setTipAmount(amount, total)
}

three=(amount, qLevel)=>{
  console.log("this is the three function");
  var total = parseFloat(amount);
  if (qLevel == "great") {
    total += (amount*.15)
  } else if(qLevel == "good") {
    total += (amount*.1)
  } else{
    total += (amount*.08)
  }
  setTipAmount(amount, total)
}

four=(amount, qLevel)=>{
  console.log("this is the four function");
  var total = parseFloat(amount);
  if (qLevel == "great") {
    total += (amount*.25)
  } else if(qLevel == "good") {
    total += (amount*.2)
  } else{
    total += (amount*.15)
  }
  setTipAmount(amount, total)
}

setTipAmount = (amount, total) =>{
  document.getElementById('tipAmounts').style.display = 'block';
  document.getElementById('messageText').innerText = `For your bill of $${amount} you should tip $${parseFloat(total - amount).toFixed(2)} for a total of $${total}`
}

setTipAmountIndividual = (amount, total) =>{
  document.getElementById('tipAmounts').style.display = 'block';
  {service=='bar' ? document.getElementById('messageText').innerText = `For your bill of $${amount} you should tip $${(total - amount)} per drink` : document.getElementById('messageText').innerText = `For your bill of $${amount} you should tip $${(total - amount)} per mover`};
}

reset = (event) =>{
 event.preventDefault();
 document.getElementById('tipAmounts').style.display = 'none';
 document.getElementById("form").style.display = 'block';
  bill = 0;
  service = "";
  quality = "";
}
