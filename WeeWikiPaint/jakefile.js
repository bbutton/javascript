desc("Example task");

task("example", ["dependency"], function () {
	console.log("here I am!");
});

task("dependency", function() {
    console.log("dependency");
})