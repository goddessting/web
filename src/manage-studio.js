var addArray = [];
var id = 1;
// var buttonList = '';

function setSeat() {
    buttonList = '';
    let id = document.getElementsByClassName("id")[0].value;
    let name = document.getElementsByClassName("name")[0].value;
    let cols = document.getElementsByClassName("col-count")[0].value;
    let rows = document.getElementsByClassName("row-count")[0].value;
    let img = '';

    for (var i = 1; i <= cols; i++) {
        img += `<br>`;
        for (var j = 1; j <= rows; j++) {
            img += `<img src="images.png"> `;
        }
    }
    addArray.push({id: id, name: name, cols: cols, rows: rows, img: img});
    for (var i = 0; i < addArray.length; i++) {

        buttonList += `<button  type="button" class="btn bg-success btn-lg btn-block" onclick="displayInfo(${addArray[i].name})">${addArray[i].name}号演出厅</button><br>`;
    }

    return document.getElementById("display").innerHTML = buttonList;
}

function addStudio() {
    id++;
    return document.getElementById("add-1").innerHTML = `
            <label for="exampleInputEmail1">演出厅号</label><br>
            <div class="form-control id">${id}</div>` + `<form role="form">
            <div class="form-group">
                <label for="exampleInputEmail1">演出厅名</label>
                <input class="form-control name" id="exampleInputEmail1" placeholder="请输入演出厅名"/>
            </div>

            <div class="form-group">
                <label for="exampleInputPassword1">座位排数</label>
                <input class="form-control col-count" id="exampleInputPassword1" placeholder="请输入座位排数"/>
            </div>

            <div class="form-group">
                <label for="exampleInputPassword1">座位列数</label>
                <input class="form-control row-count" id="exampleInputPassword2" placeholder="请输入座位列数"/>
            </div>
                <button type="button" class="btn btn-info sure" onclick="return setSeat();">确认添加</button>
        </form>`;
}

function findStudio() {
    var list = document.getElementById("name").value;
    for (var i = 0; i < addArray.length; i++) {
        if (list == addArray[i].name) {
            return document.getElementById("display").innerHTML = `<button type="button" class="btn btn-info btn-lg btn-block" onclick="return displayInfo(${addArray[i].name});">${addArray[i].name}号演出厅</button>`;
        }
    }
}

function displayInfo(id) {

    for (var i = 0; i < addArray.length; i++) {
        if (id == addArray[i].name) {
            return document.getElementById("add-1").innerHTML = `<div align="center">${addArray[i].name}演出厅${addArray[i].img}</div>`;
        }
    }
}

function deleteStudio() {
    var temp = [];
    var name = prompt("请输入要删除的演出厅号");
    for (var i = 0; i < addArray.length; i++) {
        if (name == addArray[i].studio[0]) {
            temp = addArray;
            addArray[i].studio[3] = name + '号演出厅已删除';
            document.getElementById("add-1").innerHTML = addArray[i].studio[3];
        }
    }
}
