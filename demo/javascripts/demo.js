require(['inflection'], function(InflectionJS) {
    var name = "zephod beeblebrox";
    console.log("InflectionJS", InflectionJS.capitalize(name));
    console.log("InflectionJS", InflectionJS.classify(name));
});