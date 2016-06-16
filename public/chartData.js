var ChartData= function(){
  this.pie = [{
    name: "Pokemon Type",
    data: [
        {
        name: "Fire",
        y: 74,
        color: "#ffac33"
        },
        {
        name: "Water",
        y:25,
        color:"#73b7ff",
        sliced: true
        },
        {
          name: "Grass",
          y:1,
          color: "#00ba2f"
        }
      ]
    }]

    this.series = [
    {name: 'Grass Pokemon',
    color: "#00ba2f",
    data: [1,2,3,4,5,6,7,8,9,8,7,6],
    lineWidth: 5,
    dashStyle: 'longdash'
    },
    {
      name: 'Water Pokemon',
      color: "#73b7ff",
      data:[9,8,7,6,5,4,3,2,1,2,3]
    }
    ],
    this.months={
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    }
}