function takeANumber(katzDeliLine,name){
  var line = katzDeliLine.length
  katzDeliLine = katzDeliLine[name]
  return `Welcome, ${name}. You are number ${line+1} in line.`
}
