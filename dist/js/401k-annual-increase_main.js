let subhead=document.getElementsByClassName("chart-subhead"),headline=document.getElementById("chart-head");if(!headline)for(var i=0;i<subhead.length;i++)subhead[i].style.fontWeight="600";Highcharts.setOptions({lang:{thousandsSep:","}}),document.addEventListener("DOMContentLoaded",function(){Highcharts.chart("chart-container",{chart:{type:"line",styledMode:!0,spacingBottom:25,spacingRight:5},title:{text:null},data:{googleSpreadsheetKey:"1hZV_bZZywAcK8QRM47cWiVtGTmwdkUOa9RxXQgiwdmk",endColumn:2},plotOptions:{series:{lineWidth:1,marker:{enabled:!1,symbol:"circle",fillColor:"#ffffff",states:{hover:{fillColor:"#ffffff"}}}}},legend:{align:"right",symbolRadius:0,x:30,layout:"proximate",verticalAlign:"top"},xAxis:{labels:{useHTML:!0,style:{whiteSpace:"nowrap"}},tickLength:5},yAxis:{title:!1,labels:{useHTML:!0,overflow:"allow"}},credits:{enabled:!1},tooltip:{shadow:!1,padding:10,valueDecimals:0,valuePrefix:"$"},responsive:{rules:[{condition:{maxWidth:500},chartOptions:{chart:{spacingRight:10},legend:{align:"left",x:40,layout:"horizontal",verticalAlign:"top",y:-182},tooltip:{enabled:!1}}}]}})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsic3ViaGVhZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImhlYWRsaW5lIiwiZ2V0RWxlbWVudEJ5SWQiLCJpIiwibGVuZ3RoIiwic3R5bGUiLCJmb250V2VpZ2h0IiwiSGlnaGNoYXJ0cyIsInNldE9wdGlvbnMiLCJsYW5nIiwidGhvdXNhbmRzU2VwIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoYXJ0IiwidHlwZSIsInN0eWxlZE1vZGUiLCJzcGFjaW5nQm90dG9tIiwic3BhY2luZ1JpZ2h0IiwidGl0bGUiLCJ0ZXh0IiwiZGF0YSIsImdvb2dsZVNwcmVhZHNoZWV0S2V5IiwiZW5kQ29sdW1uIiwicGxvdE9wdGlvbnMiLCJzZXJpZXMiLCJsaW5lV2lkdGgiLCJtYXJrZXIiLCJlbmFibGVkIiwic3ltYm9sIiwiZmlsbENvbG9yIiwic3RhdGVzIiwiaG92ZXIiLCJsZWdlbmQiLCJhbGlnbiIsInN5bWJvbFJhZGl1cyIsIngiLCJsYXlvdXQiLCJ2ZXJ0aWNhbEFsaWduIiwieEF4aXMiLCJsYWJlbHMiLCJ1c2VIVE1MIiwid2hpdGVTcGFjZSIsInRpY2tMZW5ndGgiLCJ5QXhpcyIsIm92ZXJmbG93IiwiY3JlZGl0cyIsInRvb2x0aXAiLCJzaGFkb3ciLCJwYWRkaW5nIiwidmFsdWVEZWNpbWFscyIsInZhbHVlUHJlZml4IiwicmVzcG9uc2l2ZSIsInJ1bGVzIiwiY29uZGl0aW9uIiwibWF4V2lkdGgiLCJjaGFydE9wdGlvbnMiLCJ5Il0sIm1hcHBpbmdzIjoiQUFRQSxJQUFBQSxRQUFBQyxTQUFBQyx1QkFBQSxpQkFDQUMsU0FBQUYsU0FBQUcsZUFBQSxjQUNBLElBQUFELFNBQ0EsSUFBQSxJQUFBRSxFQUFBLEVBQUFBLEVBQUFMLFFBQUFNLE9BQUFELElBQ0FMLFFBQUFLLEdBQUFFLE1BQUFDLFdBQUEsTUFJQUMsV0FBQUMsV0FBQSxDQUNBQyxLQUFBLENBQ0FDLGFBQUEsT0FJQVgsU0FBQVksaUJBQUEsbUJBQUEsV0FDQUosV0FBQUssTUFBQSxrQkFBQSxDQUNBQSxNQUFBLENBQ0FDLEtBQUEsT0FDQUMsWUFBQSxFQUNBQyxjQUFBLEdBQ0FDLGFBQUEsR0FFQUMsTUFBQSxDQUNBQyxLQUFBLE1BRUFDLEtBQUEsQ0FDQUMscUJBQUEsK0NBQ0FDLFVBQUEsR0FFQUMsWUFBQSxDQUNBQyxPQUFBLENBQ0FDLFVBQUEsRUFDQUMsT0FBQSxDQUNBQyxTQUFBLEVBQ0FDLE9BQUEsU0FDQUMsVUFBQSxVQUNBQyxPQUFBLENBQ0FDLE1BQUEsQ0FDQUYsVUFBQSxlQU1BRyxPQUFBLENBQ0FDLE1BQUEsUUFDQUMsYUFBQSxFQUNBQyxFQUFBLEdBQ0FDLE9BQUEsWUFDQUMsY0FBQSxPQUVBQyxNQUFBLENBQ0FDLE9BQUEsQ0FDQUMsU0FBQSxFQUNBbEMsTUFBQSxDQUNBbUMsV0FBQSxXQUdBQyxXQUFBLEdBRUFDLE1BQUEsQ0FDQXpCLE9BQUEsRUFDQXFCLE9BQUEsQ0FDQUMsU0FBQSxFQUNBSSxTQUFBLFVBR0FDLFFBQUEsQ0FDQWxCLFNBQUEsR0FFQW1CLFFBQUEsQ0FDQUMsUUFBQSxFQUNBQyxRQUFBLEdBQ0FDLGNBQUEsRUFDQUMsWUFBQSxLQUVBQyxXQUFBLENBQ0FDLE1BQUEsQ0FBQSxDQUNBQyxVQUFBLENBQ0FDLFNBQUEsS0FFQUMsYUFBQSxDQUNBMUMsTUFBQSxDQUNBSSxhQUFBLElBRUFlLE9BQUEsQ0FDQUMsTUFBQSxPQUNBRSxFQUFBLEdBQ0FDLE9BQUEsYUFDQUMsY0FBQSxNQUNBbUIsR0FBQSxLQUVBVixRQUFBLENBQ0FuQixTQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhZGRzIHNvY2lhbCBjbGFzcyB0byBnZXQgc29jaWFsIGNoYXJ0XG4vLyBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaGFydC1hcmVhXCIpO1xuLy8gZm9yKHZhciBpID0gMDsgaSA8IGVsZW1lbnQubGVuZ3RoOyBpKyspXG4vLyB7XG4vLyAgICAgZWxlbWVudFtpXS5jbGFzc05hbWUgKz0gXCIgc29jaWFsXCI7XG4vLyB9XG5cbi8vIGJvbGRzIHRoZSBzdWJoZWFkIGlmIHRoZXJlIGlzIG5vIGhlYWRsaW5lXG5sZXQgc3ViaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaGFydC1zdWJoZWFkXCIpLFxuICAgIGhlYWRsaW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFydC1oZWFkXCIpO1xuICAgIGlmICghaGVhZGxpbmUpIHtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHN1YmhlYWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHN1YmhlYWRbaV0uc3R5bGUuZm9udFdlaWdodCA9IFwiNjAwXCI7XG4gICAgICAgIH0gICAgICAgXG4gICAgIH1cblxuSGlnaGNoYXJ0cy5zZXRPcHRpb25zKHtcbiAgICBsYW5nOiB7XG4gICAgICB0aG91c2FuZHNTZXA6ICcsJ1xuICAgIH1cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG15Q2hhcnQgPSBIaWdoY2hhcnRzLmNoYXJ0KCdjaGFydC1jb250YWluZXInLCB7XG4gICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgICAgICBzdHlsZWRNb2RlOiB0cnVlLFxuICAgICAgICAgICAgc3BhY2luZ0JvdHRvbTogMjUsXG4gICAgICAgICAgICBzcGFjaW5nUmlnaHQ6IDVcbiAgICAgICAgfSwgXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGdvb2dsZVNwcmVhZHNoZWV0S2V5OiAnMWhaVl9iWlp5d0FjSzhRUk00N2NXaVZ0R1Rtd2RrVU9hOVJ4WFFnaXdkbWsnLFxuICAgICAgICAgICAgZW5kQ29sdW1uOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHBsb3RPcHRpb25zOiB7XG4gICAgICAgICAgICBzZXJpZXM6IHtcbiAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgbWFya2VyOiB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBzeW1ib2w6ICdjaXJjbGUnLFxuICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3Zlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogJyNmZmZmZmYnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgYWxpZ246ICdyaWdodCcsXG4gICAgICAgICAgICBzeW1ib2xSYWRpdXM6IDAsXG4gICAgICAgICAgICB4OiAzMCxcbiAgICAgICAgICAgIGxheW91dDogJ3Byb3hpbWF0ZScsXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJ1xuICAgICAgICB9LFxuICAgICAgICB4QXhpczoge1xuICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgdXNlSFRNTDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aWNrTGVuZ3RoOiA1XG4gICAgICAgIH0sXG4gICAgICAgIHlBeGlzOiB7XG4gICAgICAgICAgICB0aXRsZTogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICB1c2VIVE1MOiB0cnVlLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnYWxsb3cnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWRpdHM6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgIHNoYWRvdzogZmFsc2UsXG4gICAgICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICAgICAgICAgIHZhbHVlRGVjaW1hbHM6IDAsXG4gICAgICAgICAgICB2YWx1ZVByZWZpeDogJyQnXG4gICAgICAgIH0sXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAgIHJ1bGVzOiBbe1xuICAgICAgICAgICAgICBjb25kaXRpb246IHtcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogNTAwXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNoYXJ0T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgICBzcGFjaW5nUmlnaHQ6IDEwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgeDogNDAsXG4gICAgICAgICAgICAgICAgICAgIGxheW91dDogJ2hvcml6b250YWwnLFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbiAgICAgICAgICAgICAgICAgICAgeTogLTE4MlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH0pO1xufSk7Il19