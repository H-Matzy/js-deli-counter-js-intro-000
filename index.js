function takeANumber(katzDeliLine,name){
  var lin = katzDeliLine.length
  katzDeliLine = katzDeliLine[name]
  return `Welcome, ${name}. You are number ${lin+1} in line.`
}
