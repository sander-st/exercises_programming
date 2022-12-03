(function(){

  window.addEventListener('load',()=>{

    // llamando al elemento canvas
    let canvas = document.getElementById('clock')
    let ctx = canvas.getContext('2d')

    function drawClock(){
      // funcion que retorna un turn (turn)
      const degree = num => num * (Math.PI / 180);

      // get times
      let date = new Date()
      let getHour = date.getHours(),
          getMinutes = date.getMinutes(),
          turnSeconds = date.getSeconds() + (date.getMilliseconds() / 1000),
          strHours = `${getHour}:${getMinutes}:${date.getSeconds()}`

      // styles
      ctx.clearRect(0,0,500,500)
      ctx.strokeStyle = 'lightgreen'
      ctx.lineCap = 'round'
      ctx.lineWidth = '20'
      ctx.shadowBlur = '10'
      ctx.shadowColor = 'green'

      // hour
      ctx.beginPath()
      ctx.arc(250,250,240,degree(270),degree((getHour * 15)-90))
      ctx.stroke()
      // minutes
      ctx.beginPath()
      ctx.arc(250,250,190,degree(270),degree((getMinutes * 6)-90))
      ctx.stroke()
      // seconds
      ctx.beginPath()
      ctx.arc(250,250,140,degree(270),degree((turnSeconds * 6)-90))
      ctx.stroke()
      // text time
      ctx.font = '40px Cascadia Code'
      ctx.fillStyle = 'white'
      ctx.fillText(strHours,250,250)
    }

    setInterval(drawClock,100)

  })

})()
