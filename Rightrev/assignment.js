fetch("https://restcountries.eu/rest/v2/all").then(
            res=>{
                res.json().then(
                    data=>{
                        console.log(data);
                        if(data.length >0){
                            var temp="";
                            var highestpop="";
                            data.forEach((u)=>{
                                temp+="<tr>"
                                temp+="<td>"+u.name+"</td>"
                                temp+="<td>"+u.capital+"</td>"
                                temp+="<td>"+u.numericCode+"</td>"
                                temp+="<td>"+u.population+"</td>"
                                temp+="<td>"+u.subregion+"</td>"
                                temp+="<td><img src=\""+u.flag+"\" width=\"150\" height=\"70\"></img></td></tr>"
                                })
                            document.getElementById("data").innerHTML=temp;
                            }
                        }
                    )
                }
            )
    //sort
    function sortTable(tableClass, n) {
var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;

table = document.getElementsByClassName(tableClass)[0];
switching = true;
dir = "asc";
while (switching) {
    switching = false;
    rows = table.getElementsByTagName("TR");
    for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
                var cmpX=isNaN(parseInt(x.innerHTML))?x.innerHTML.toLowerCase():parseInt(x.innerHTML);
                var cmpY=isNaN(parseInt(y.innerHTML))?y.innerHTML.toLowerCase():parseInt(y.innerHTML);
cmpX=(cmpX=='-')?0:cmpX;
cmpY=(cmpY=='-')?0:cmpY;
        if (dir == "asc") {
            if (cmpX > cmpY) {
                shouldSwitch= true;
                break;
            }
        } else if (dir == "desc") {
            if (cmpX < cmpY) {
                shouldSwitch= true;
                break;
            }
        }
    }
    if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;      
    } else {
        if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
        }
    }
}
}

    //search
    function myFunction() {
          var input, filter, table, tr, td, i, txtValue;
          input = document.getElementById("myInput");
          filter = input.value.toUpperCase();
          table = document.getElementById("myTable");
          tr = table.getElementsByTagName("tr");
          for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
              txtValue = td.textContent || td.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
              } else {
                tr[i].style.display = "none";
              }
            }       
          }
        }