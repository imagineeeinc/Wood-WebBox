function save(html,css,js) {
    var Name = document.getElementById("filename").value;
    if(Name == "") {
    	Name = "WebBoxCode"
    }
    else {
    	Name = Name;
    }
        var zip = new JSZip();
        // create a file
        var htmlv = document.getElementById("html").value;
        var css = document.getElementById("css").value;
        var html = htmlv+'<link rel="stylesheet" href="style.css">'+'<script type="text/javascript" src="script.js"></script>';
        var js = document.getElementById("js").value;
        zip.file("index.html", html);
        zip.file("style.css", css);
        zip.file("script.js", js);
        // create a file and a folder
        //zip.file("nested/hello.txt", "Hello World\n");
    // see FileSaver.js
    var blob = new Blob([zip]);
    zip.generateAsync({type:"blob"}).then(function (blob) {
    saveAs(blob, Name);
});
    }
function menuopen() {
		var menu = document.getElementById('menu');
        if(menu.className != 'shownmenu') {
            menu.className = 'shownmenu';
        }
        else {
            menu.className = 'hiddenmenu';
        }
    }