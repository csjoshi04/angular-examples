const path = require("path");

const moduleConfig = {
    getEntries : function (appBasePath, projectBasePath) {
        return [
            {
                generatedIndexJSName : "gen.angular2app.index",
                indexJSLocation : path.join(appBasePath, "angular2app", "angular2app.index.ts"),

                generatedIndexCSSName : "gen.angular2app.style",
                cssFiles : [path.join(appBasePath, "angular2app", "styles", "angular2app.style.css")],

                generatedVendorJSName : "gen.angular2app.jsvendor",
                jsVendors : path.join(appBasePath, "angular2app", "angular2app.jsvendor.ts"),

                generatedVendorCSSName : "gen.angular2app.css.vendor",
                vendorCSSFiles : [path.join(projectBasePath, "node_modules", "bootstrap", "dist", "css", "bootstrap.css")],

                generatedIndexHTMLFile : "gen.angular2app.index.html",
                indexHTMLTemplateFileLocation : path.join(appBasePath, "angular2app", "angular2app.index.html")
            },
            {
                generatedIndexJSName : "gen.recipe1-basics.index",
                indexJSLocation : path.join(appBasePath, "recipe1-basics", "recipe1-basics.index.ts"),

                generatedIndexCSSName : "gen.recipe1-basics.style",
                cssFiles : [path.join(appBasePath, "recipe1-basics", "styles", "recipe1-basics.style.css")],

                generatedVendorJSName : "gen.recipe1-basics.jsvendor",
                jsVendors : path.join(appBasePath, "recipe1-basics", "recipe1-basics.jsvendor.ts"),

                generatedVendorCSSName : "gen.recipe1-basics.css.vendor",
                vendorCSSFiles : [path.join(projectBasePath, "node_modules", "bootstrap", "dist", "css", "bootstrap.css")],

                generatedIndexHTMLFile : "gen.recipe1-basics.index.html",
                indexHTMLTemplateFileLocation : path.join(appBasePath, "recipe1-basics", "recipe1-basics.index.html")
            }
        ]
    }
}

module.exports = moduleConfig;