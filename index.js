function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length < 1) return "There is nobody waiting to be served!"
  else var solution = `Currently serving ${katzDeliLine[0]}.`
  katzDeliLine.shift()
  return solution
}
