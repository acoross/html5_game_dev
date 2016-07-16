function JSONTest()
{
    console.log("test");

    var file = File("grits_effects.json");

    var reader = new FileReader();
    reader.onload = function() {
        var contents = reader.result;
        console.log(contents);
    };
    reader.readAsText(file);
}


