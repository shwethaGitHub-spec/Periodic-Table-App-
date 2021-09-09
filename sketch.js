var bg;
var tb;
var loadData
var elementsData
var yPos = 20
var easterEggButton
var EEBInfo


function preload(){
 bg = loadImage("IMGS/bgImg.jpg")
 loadData=loadJSON("PeriodicTableJSON.json")
 
}

function setup() {
  createCanvas(1280,720);
 elementsData = loadData.elements
 //console.log(elementsData.length)
 //console.log(loadData.elements[0].name)

 //noLoop()
 H = new buttonElements1(40,100,"H")
 Li = new buttonElements1(40,140,"Li")
 K = new  buttonElements1(40,180,"K")
 Na = new buttonElements1(40,220,"Na")
 Rb = new buttonElements1(40,260,"Rb")
 Cs = new buttonElements1(40,300,"Cs")
 Fr = new buttonElements1(40,340,"Fr")
 Be = new buttonElements1(80,140,"Be")
 Mg = new buttonElements1(80,180,"Mg")
 Ca = new buttonElements1(80,220,"Ca")
 Sr = new buttonElements1(80,260,"Sr")
 Ba = new buttonElements1(80,300,"Ba")
 Ra = new buttonElements1(80,340,"Ra")
 He = new buttonElements1(720,100,"He")

 Le = new buttonElements2(120,380,"Le")
 Ce = new buttonElements2(160,380,"Ce")
 Pr = new buttonElements2(200,380,"Pr")
 Nd = new buttonElements2(240,380,"Nd")
 Pm = new buttonElements2(280,380,"Pm")
 Sm = new buttonElements2(320,380,"Sm")
 Eu = new buttonElements2(360,380,"Eu")
 Gd = new buttonElements2(400,380,"Gd")
 Fb = new buttonElements2(440,380,"Fb")
 Dy = new buttonElements2(480,380,"Dy")
 Ho = new buttonElements2(520,380,"Ho")
 Er = new buttonElements2(560,380,"Er")
 Lm = new buttonElements2(600,380,"Lm")
 Yb = new buttonElements2(640,380,"Yb")
 Ac = new buttonElements2(120,420,"Ac")
 Th = new buttonElements2(160,420,"Th")
 Pa = new buttonElements2(200,420,"Pa")
 U   = new buttonElements2(240,420,"U")
 Np = new buttonElements2(280,420,"Np")
 Pu = new buttonElements2(320,420,"Pu")
 Am = new buttonElements2(360,420,"Am")
 Cm = new buttonElements2(400,420,"Cm")
 Bk = new buttonElements2(440,420,"Bk")
 Cf = new buttonElements2(480,420,"Cf")
 Es = new buttonElements2(520,420,"Es")
 Fm = new buttonElements2(560,420,"Fm")
 Md = new buttonElements2(600,420,"Md")
 No = new buttonElements2(640,420,"No")

 Sc = new buttonElements3(120,220,"Sc")
 Ti = new buttonElements3(160,220,"Ti")
 V = new buttonElements3(200,220,"V")
 Cr = new buttonElements3(240,220,"Cr")
 Mn = new buttonElements3(280,220,"Mn")
 Fe = new buttonElements3(320,220,"Fe")
 Co = new buttonElements3(360,220,"Co")
 Ni = new buttonElements3(400,220,"Ni")
 Cu = new buttonElements3(440,220,"Cu")
 Zn = new buttonElements3(480,220,"Zn")
 Y = new buttonElements3(120,260,"Y")
 Zr = new buttonElements3(160,260,"Zr")
 Nb = new buttonElements3(200,260,"Nb")
 Mo = new buttonElements3(240,260,"Mo")
 Tc = new buttonElements3(280,260,"Tc")
 Ru = new buttonElements3(320,260,"Ru")
 Rh = new buttonElements3(360,260,"Rh")
 Pd = new buttonElements3(400,260,"Pd")
 Ag = new buttonElements3(440,260,"Ag")
 Cd = new buttonElements3(480,260,"Cd")
 Lu = new buttonElements3(120,300,"Lu")
 Hf = new buttonElements3(160,300,"Hf")
 Ta = new buttonElements3(200,300,"Ta")
 W = new buttonElements3(240,300,"W")
 Re = new buttonElements3(280,300,"Re")
 Os = new buttonElements3(320,300,"Os")
 Ir = new buttonElements3(360,300,"Ir")
 Pt = new buttonElements3(400,300,"Pt")
 Au = new buttonElements3(440,300,"Au")
 Hg = new buttonElements3(480,300,"Hg")
 Lr = new buttonElements3(120,340,"Lr")
 Rf = new buttonElements3(160,340,"Rf")
 Db = new buttonElements3(200,340,"Db")
 Sg = new buttonElements3(240,340,"Sg")
 Bh = new buttonElements3(280,340,"Bh")
 Hs = new buttonElements3(320,340,"Hs")
 Mt = new buttonElements3(360,340,"Mt")
 Ds = new buttonElements3(400,340,"Ds")
 Rg = new buttonElements3(440,340,"Rg")
 Cn = new buttonElements3(480,340,"Cn")
 
 B = new buttonElements4(520,140,"B")
 C = new buttonElements4(560,140,"C")
 N = new buttonElements4(600,140,"N")
 O = new buttonElements4(640,140,"O")
 F = new buttonElements4(680,140,"F")
 Ne = new buttonElements4(720,140,"Ne")
 Ga = new buttonElements4(520,220,"Ga")
 Al = new buttonElements4(520,180,"Al")
 Si = new buttonElements4(560,180,"Si")
 P = new buttonElements4(600,180,"P")
 S = new buttonElements4(640,180,"S")
 Cl = new buttonElements4(680,180,"Cl")
 Ar = new buttonElements4(720,180,"Ar")
 Ga = new buttonElements4(520,220,"Ga")
 Ge = new buttonElements4(560,220,"Ge")
 As = new buttonElements4(600,220,"As")
 Se = new buttonElements4(640,220,"Se")
 Br = new buttonElements4(680,220,"Br")
 Kr = new buttonElements4(720,220,"Kr")
 In = new buttonElements4(520,260,"In")
 Sn = new buttonElements4(560,260,"Sn")
 Sb = new buttonElements4(600,260,"Sb")
 Tb = new buttonElements4(640,260,"Tb")
 I = new buttonElements4(680,260,"I")
 Xe = new buttonElements4(720,260,"Xe")
 Ti = new buttonElements4(520,300,"Ti")
 Pb = new buttonElements4(560,300,"Pb")
 Bi = new buttonElements4(600,300,"Bi")
 Po = new buttonElements4(640,300,"Po")
 At = new buttonElements4(680,300,"At")
 Rn = new buttonElements4(720,300,"Rn")
 Nh = new buttonElements4(520,340,"Nh")
 Fl = new buttonElements4(560,340,"Fl")
 Mc = new buttonElements4(600,340,"Mc")
 Lv = new buttonElements4(640,340,"Lv")
 Ts = new buttonElements4(680,340,"Ts")
 Og = new buttonElements4(720,340,"Og")
 

 noLoop()
}

function draw() {
 
EEBInfo = "Fact 1:When argon was discovered in 1894, it didn’t fit into any of Mendeleyev’s columns, so he denied its existence — as he did for helium, neon, krypton, xenon and radon"+'\n'+'\n'+"Fact 2:The design of the periodic table was inpired by the creator's love for card games"+'\n'+'\n'+"Fact 3:Technetium was the first artificially produced element"

  background(bg);  
  fill("purple")
  textSize(30)
  text("Periodic Table App",width/2-400,50)

  fill("red")
  text("Find the easter egg"+'\n'+"button to reveal fun facts!!!"+'\n'+'\n'+"Note:the button"+'\n'+"will be created at a random "+'\n'+"position",width/2+250,50)

  easterEggButton = createButton("")
  easterEggButton.position(random(20,1200),random(20,700))
  
  easterEggButton.mousePressed(()=>{
    
    
    alert(EEBInfo)
    fill("green")
    textSize(20)
    text("WooHoo!!!!! You found the Easter Egg Button",500,600)
    
  })
    
  
  //tb = createSprite(640,630,1280,180)
  //      tb.shapeColor = "cyan"
  
  drawSprites()

  
}
