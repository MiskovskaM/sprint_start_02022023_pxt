/*
 *  radio.band každá dvojice jiný + group
 * startovací: možnost opětovaného spuštění + resert cílové brány
 * startovací brána: startovací odpočet ( 3, 2, 1 + zvuk)
 * zaznamenat po odpočtu Start
 * cílová brána : zaznamenat doběh do cíle + informace (čas)
 * startovací + cílová :zobrazit výsledky na vyžádání
 
 * jak to máme my
 
 * p.m:počáteční microbit; c.m:cílový microbi 
 * p.m: odpočet + proběhnutí určitého počátečního bodu (světelná konfigurace)
 * p.m: pošle signál cílovémeu microbitu, že proběhl start
 * c.m:zaznamená start u prvního microbitu a začne počítat čas v sekundách
 * c.m:až proběhne do cíle(jiná světelná konfigurace), pošle signál startovnímu microbitu
 * c.m:zaznamená cíl prvního microbitu a ukáže daný čas, za který jsme to uběhli  + musí se to resetovat na nějaké tlačítko u obou microbitů
 

 */
input.onButtonPressed(Button.A, function () {
    RunComp.SetLightLevel()
    // udělat kalibraci na druhé straně
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    control.reset()
})
RunComp.OnLightDrop(function () {
    // Start
    radio.sendNumber(2)
})
radio.onReceivedValue(function (name, value) {
    whaleysans.showNumber(value)
})
radio.setGroup(3)
