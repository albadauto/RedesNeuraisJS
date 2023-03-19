function setup(){
    createCanvas(500,500)
    background(0)


    var nn = new RedeNeural(2,3,5)
    var arr = [5,3,3]
    nn.feedforward(arr)
}

function draw(){

}