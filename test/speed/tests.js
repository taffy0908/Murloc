
test("$(selector, context)", function() {
	add('$("#qunit-fixture")', "ID selector");
	add('$("p")', "tag selector");
	add('$(".blog")', "class selector");
	add('$("#ap a")', "$(\"#ap a\")");
	add('$("div p", "#qunit-fixture")', "Basic selector with string as context");
	add('$("div p", q("qunit-fixture")[0])', "Basic selector with element as context");
	add('$("div p", $("#qunit-fixture"))', "Basic selector with $ object as context");
});

test("Util", function() {
	add('$.isPlainObject({})');
	add('$.extend({}, {"a": "-", "b": [1,2,3], "c": null})', '$.extend(dest, source)');
});

test(".data()", function() {
	add('$().data("test")', '$().data(key)');
	add('$().data("test", "success")', '$().data(key, value)');
	add('$(".foo").data("test")', '$(selector).data(key)');
	add('$(".foo").data("test", "success")', "$(selector).data(key, value)");
	add('$(".foo").data("test", "success").removeData("test")', "$(selector).data(key, value).removeData(key)");
});


test("DOM", function() {
	add('$("p").eq(-1)', '$(selector).eq(-1)');
	add('$("p").first()', '$(selector).first()');
	add('$("p").last()', '$(selector).last()');
	add('$("p").slice(0,3)', '$(selector).slice()');
	add('$("p").filter("#ap, #sndp")', '$(selector).filter()');

	add('$("p").closest()', '$(selector).closest()');
	add('$("p").closest("div")', '$(selector).closest(selector)');

	add('$("#foo").children()', '$(selector).children()');
	add('$("#foo").children("#en, #sap")', '$(selector).children(selector)');

	add('$("#groups").parent("#en, #sap")', '$(selector).parent()');
	add('$("#groups").parent("div")', '$(selector).parent(selector)');

	add('$("#groups").parents("#en, #sap")', '$(selector).parents()');
	add('$("#groups").parents("div")', '$(selector).parents(selector)');
});

test("DOM style", function() {
	add('$(window).width()', '$(window).width()');
	add('$(document).width()', '$(document).width()');
	add('$("ul").width()', '$("ul").width()');
	add('$("ul").css("width")', '$("ul").css(\'width\')');
	add('$("ul").css("width", 10)', '$("ul").css(\'width\', 10)');
	add('$("ul").hide()', '$("ul").hide()');
	add('$("ul").show()', '$("ul").show()');
});

test("DOM nodes", function() {
	add('$("<div>").clone()', '$("&lt;div&gt;").clone()');
	add('$("ul").clone()', '$("ul").clone()');
	add('$("ul").clone(true)', '$("ul").clone(true)');
	//add('$("ul").click(function() {}).clone(true)', '$("ul").click(function() {}).clone(true)');

	add('$("#ap").append("<span>")', '$("#ap").append("&lt;span&gt;")');
	//add('$("div").append("<span>", $("#groups"))', '$("div").append("&lt;span&gt;", $("#groups"))');
	add('$("#ap").append($("#groups"))', '$("#ap").append($("#groups"))');
	add('$("ul").append($("#groups"))', '$("ul").append($("#groups"))');

});

test("DOM className", function() {
	add('$("p").hasClass("classA")', '$("p").hasClass("classA")');

	add('$("p").addClass("classA")', '$("p").addClass("classA")');
	add('$("p").addClass("classA classB")', '$("p").addClass("classA classB")');

	add('$("p").removeClass("classB")', '$("p").removeClass("classB")');

	add('$("p").addClass("classB").removeClass("classB")', '$("p").addClass("classB").removeClass("classB")');
	add('$("p").addClass("classB").removeClass("classNotExists")', '$("p").addClass("classB").removeClass("classNotExists")');

	add('$("p").toggleClass("classB")', '$("p").toggleClass("classB")');
	add('$("p").addClass("classA").toggleClass("classA classB")', '$("p").addClass("classA").toggleClass("classA classB")');
});


test("Events", function() {
	add('$("#foo").click(function() {})', '$("#foo").click(function() {})');
	add('$("form").submit(function() {})', '$("form").submit(function() {})');
});


