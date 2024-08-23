/** The simplest use of uibuilder client library
 * See the docs if the client doesn't start on its own.
 */

// Listen for incoming messages from Node-RED and action
window.onload = function () 
{
    // Start up uibuilder - see the docs for the optional parameters
    
    uibuilder.start()
    uibuilder.onChange('msg', function (msg) 
    { 
// REAL TIME
        if (msg.topic === "real_time" ){ 
            const Real_time = document.getElementById('real-time')
            Real_time.innerText = msg.payload; // tính PR rồi quăng vào đây
          }

if(msg.topic === 'table_output')
    {
      var table = document.getElementById("mttrmtbf-table");
      var mttr_data = msg.payload[0];
      var mtbf_data = msg.payload[1];
      while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    for (var i = 0; i < mttr_data.length; i++) {
        var row = table.insertRow();
        for (var j = 0; j < mttr_data[i].length; j++) {
            var cell = row.insertCell();
            cell.innerHTML = mttr_data[i][j];
        }
    }

    for (var i = 0; i < mtbf_data.length; i++) {
        var row = table.insertRow();
        for (var j = 0; j < mtbf_data[i].length; j++) {
            var cell = row.insertCell();
            cell.innerHTML = mtbf_data[i][j];
        }
    }
    }
    }
  );
}
function getOption() {
    selectedMachine = document.querySelector('#select-machine');
    selectedMachineNo = document.querySelector('#select-machine-no');
    output1 = selectedMachine.options[selectedMachine.selectedIndex].value;
    output2 = selectedMachineNo.options[selectedMachineNo.selectedIndex].value;
    startdatetimeInput = document.getElementById('datetimeStart').value;
    // const startdateString = startdatetimeInput.split('T')[0];
    // const starttimeString = startdatetimeInput.split('T')[1];
    finishdatetimeInput = document.getElementById('datetimeFinish').value;
    // const finishdateString = finishdatetimeInput.split('T')[0];
    // const finishtimeString = finishdatetimeInput.split('T')[1];
    issuesinput = document.getElementById('issues-text').value;
    document.querySelector('.output').textContent = output1 + output2 +" "+ startdatetimeInput +" "+finishdatetimeInput+" " + issuesinput;
    if(document.getElementById("datetimeStart").value.length == 0||document.getElementById("datetimeFinish").value.length == 0||document.getElementById("select-machine").value.length == 0||document.getElementById("select-machine-no").value.length == 0||document.getElementById('issues-text').value.length == 0)
        {
            alert("Không nhập mà đòi có ăn chỉ có ăn đầu bờ, ăn cức, Nhá!!")
        }    
    else{
        // var msg = {
        //     topic: "tracyinput",
        //     payload: [output1,output2,startdateString,starttimeString,finishdateString,finishtimeString,issuesinput]
        //     };

        var msg1 = {
            topic: "tracyinput1",
            payload: [output1,output2,startdatetimeInput,finishdatetimeInput,issuesinput]
            };    
    }
    

    //uibuilder.send(msg);   
    uibuilder.send(msg1); 
    // uibuilder.send(output1 + output2 +" "+ startdateString +" "+starttimeString+" "+ finishdateString +" "+finishtimeString+" " + issuesinput);

}


function getOption_test() {
    selectedMachine = document.querySelector('#select-machine-query');
    // selectedMachineNo = document.querySelector('#select-machine-no-query');
    output11 = selectedMachine.options[selectedMachine.selectedIndex].value;
    // output22 = selectedMachineNo.options[selectedMachineNo.selectedIndex].value;
    monthtimeInput = document.getElementById('time-query').value;
    // const startdateString = startdatetimeInput.split('T')[0];
    // const starttimeString = startdatetimeInput.split('T')[1];
    // finishdatetimeInput = document.getElementById('datetimeFinish').value;
    // const finishdateString = finishdatetimeInput.split('T')[0];
    // const finishtimeString = finishdatetimeInput.split('T')[1];
    // issuesinput = document.getElementById('issues-text').value;
    document.querySelector('.output-query').textContent = output11 + " "+ monthtimeInput +" ";
    if(document.getElementById("time-query").value.length == 0||document.getElementById("select-machine-query").value.length == 0)
        {
            alert("Không nhập mà đòi có ăn chỉ có ăn đầu bờ, ăn cức, Nhá!!")
        }    
    else{
        // var msg = {
        //     topic: "tracyinput",
        //     payload: [output1,output2,startdateString,starttimeString,finishdateString,finishtimeString,issuesinput]
        //     };

        var msg2 = {
            topic: "query-input",
            payload: [output11,monthtimeInput]
            };    
    }
    

    //uibuilder.send(msg);   
    uibuilder.send(msg2); 
    // uibuilder.send(output1 + output2 +" "+ startdateString +" "+starttimeString+" "+ finishdateString +" "+finishtimeString+" " + issuesinput);

}
