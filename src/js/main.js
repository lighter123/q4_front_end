var reportsWidget = {
    options: {
        containerSelector: '.reports',
        template: (
            '{{#.}}' +
                '<article class="reports_item">' +
                    '<a href="{{cover}}" target="_blank">' +
                        '<img class="reports_cover" src="{{cover}}" alt="{{title}} Cover"/>' +
                    '</a>' +
                    '<footer class="reports_docs">' +
                        '{{#documents}}' +
                            '<h3 class="reports_title">' +
                                '<a href="{{url}}" target="_blank">{{title}} <span>({{file_size}}</span> <span>{{file_type}})</span></a>' +
                            '</h3>' +
                        '{{/documents}}' +
                    '</footer>' +
                '</article>' +
            '{{/.}}'
        )
    },

    init: function() {
        this.renderReports(reportData || []);
    },

    renderReports: function(reports) {
        var inst = this,
            options = inst.options;

        $(options.containerSelector).html(Mustache.render(options.template, reports));
    }
};

reportsWidget.init();		
		
function IEProcess() {
	//only add style for reports itme in IE
	if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {		  
		var reports_items = $(".reports_item");
		
		var row_no = 1; //initial row number 
		var col_no = 1; //initial col number 
				
		//set max col numumber according to the window width
		var max_col_no = 3;
		if ($(window).width() < 768) max_col_no = 2; //if less than 768, change to 2 columns
		
		for(i=0; i<reports_items.length; i++) {			
			  if (col_no > max_col_no) {
				col_no = 1;
				row_no = row_no +1;
			  }			  
			  var style = "-ms-grid-column: " + col_no + "; -ms-grid-row: " + row_no;			
			  reports_items[i].setAttribute("style", style);			  
			  col_no++;
		}
	}	
}

IEProcess();
