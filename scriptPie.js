(function(){
var d3 = Plotly.d3;

var element = d3.select('#myGraphPie');
var graphnode = element.node();


var graphTitle = "DACA Recipients Financial Hardship";

var data = [{
  values: [51, 49,],
  labels: ['Too Expensive', 'Affordable', ],
  type: 'pie'
}];


Plotly.plot(graphnode, data,
    {
    title: graphTitle,
    font: {
        size: 16
    }
},
{
  displayModeBar: false
});

//this part make sure every window resize it also resizes the graph
window.addEventListener('resize', function(event){
    Plotly.Plots.resize(graphnode);
});
})();